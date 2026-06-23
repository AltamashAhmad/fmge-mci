import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { Navigate, Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

export default function AdminDashboard() {
  const { user, isAdmin, loading: authLoading } = useAuth();
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isAdmin) return;

    async function fetchUsers() {
      try {
        const q = query(collection(db, "users"), orderBy("lastActive", "desc"));
        const snap = await getDocs(q);
        const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUsersData(data);
      } catch (err) {
        console.error("Failed to fetch admin users:", err);
        setError("Missing permissions. Ensure you have updated Firestore rules for Admin access.");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, [isAdmin]);

  if (authLoading) return <div className="page-loading"><div className="spinner" /></div>;

  if (!user || !isAdmin) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="admin-dashboard">
      <PageHeader 
        title="🛡️ Admin Dashboard" 
        subtitle={`Monitoring ${usersData.length} users across the platform`}
      />

      {error ? (
        <div className="admin-error">
          <p>{error}</p>
          <pre style={{textAlign: "left", padding: "1rem", background: "#f1f5f9", borderRadius: "8px", marginTop: "1rem"}}>
{`rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      // Admin override + User self-access
      allow read, write: if request.auth != null && (request.auth.uid == userId || get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true);
    }
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && (request.auth.uid == userId || get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true);
    }
  }
}`}
          </pre>
        </div>
      ) : loading ? (
        <div className="page-loading"><div className="spinner" /> Loading user data...</div>
      ) : (
        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Streak</th>
                <th>Total Days</th>
                <th>Phase Done</th>
                <th>Last Active</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((u) => {
                const streak = u.stats?.currentStreak || 0;
                const totalDays = Array.isArray(u.studyDays) ? u.studyDays.length : 0;
                const phaseCount = u.phaseDone ? Object.keys(u.phaseDone).filter(k => u.phaseDone[k]).length : 0;
                
                let activeStr = "Unknown";
                if (u.lastActive?.toDate) {
                  activeStr = u.lastActive.toDate().toLocaleDateString() + " " + u.lastActive.toDate().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                } else if (u.updatedAt) {
                  activeStr = new Date(u.updatedAt).toLocaleDateString();
                }

                return (
                  <tr key={u.id}>
                    <td>
                      <div className="admin-user-cell">
                        {u.profile?.photoURL ? (
                          <img src={u.profile.photoURL} alt="avatar" className="admin-avatar" />
                        ) : (
                          <div className="admin-avatar-fallback">{u.profile?.name?.[0] || "?"}</div>
                        )}
                        <div>
                          <div className="admin-user-name">{u.profile?.name || "Anonymous"} {u.isAdmin && <span className="badge-admin">Admin</span>}</div>
                          <div className="admin-user-email">{u.profile?.email || "No email"}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className={`admin-badge ${streak > 0 ? "active" : ""}`}>
                        🔥 {streak}
                      </span>
                    </td>
                    <td>{totalDays} days</td>
                    <td>{phaseCount}/7</td>
                    <td className="admin-date">{activeStr}</td>
                    <td>
                      <Link to={`/admin/user/${u.id}`} className="btn-back" style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}>
                        View Details
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
