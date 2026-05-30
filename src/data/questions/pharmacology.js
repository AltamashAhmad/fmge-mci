const pharmacology = [

  // ============ BATCH 1: GENERAL PHARMACOLOGY ============
  {
    id: "pharma_gp_001",
    topic: "general-pharmacology",
    year: "FMGE Dec 2019",
    q: "Half-life (t½) of a drug is the time required for:",
    img: null,
    options: ["A. Drug to reach maximum plasma concentration", "B. Plasma drug concentration to fall by 50%", "C. Drug to be completely eliminated", "D. Drug to reach steady-state"],
    answer: 1,
    explanation: "t½ = time for plasma drug concentration to decrease by 50%. For first-order kinetics: t½ = 0.693/Ke (elimination rate constant) = 0.693×Vd/CL. Steady state reached after 4–5 half-lives. Drug eliminated after ~5 half-lives. Zero-order kinetics (alcohol, phenytoin toxicity): constant amount eliminated per unit time (no fixed t½).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_gp_002",
    topic: "general-pharmacology",
    year: "FMGE Jun 2018",
    q: "Volume of distribution (Vd) is a measure of:",
    img: null,
    options: ["A. The actual volume of body fluid in which drug is dissolved", "B. Apparent volume required to account for the total amount of drug in the body at a given plasma concentration (Vd = dose/Cp)", "C. Volume of urine in which drug is excreted", "D. Volume of liver responsible for drug metabolism"],
    answer: 1,
    explanation: "Vd (apparent) = Total dose / Plasma concentration. High Vd (>1 L/kg) = drug widely distributed in tissues, low plasma concentration (e.g., chloroquine, digoxin). Low Vd (0.04–0.1 L/kg) = drug confined to plasma (e.g., heparin, warfarin). High Vd drugs poorly removed by dialysis.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_gp_003",
    topic: "general-pharmacology",
    year: "FMGE Dec 2018",
    q: "First-pass metabolism (first-pass effect) occurs due to metabolism in:",
    img: null,
    options: ["A. Kidney before excretion", "B. Liver (and gut wall) after oral absorption — before reaching systemic circulation", "C. Blood during circulation", "D. Lung during pulmonary transit"],
    answer: 1,
    explanation: "First-pass effect: orally absorbed drug passes through portal circulation → liver → undergoes extensive presystemic metabolism → reduced bioavailability. Examples with high first-pass: morphine (oral BA ~25%), propranolol, lignocaine, GTN (given sublingually to bypass). IV route bypasses first-pass entirely.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_gp_004",
    topic: "general-pharmacology",
    year: "FMGE Jun 2019",
    q: "Therapeutic index (TI) is defined as:",
    img: null,
    options: ["A. TD50 / ED50 (ratio of median toxic dose to median effective dose)", "B. The lowest dose that produces a therapeutic effect", "C. Maximum dose that can be administered", "D. The dose that kills 50% of animals (LD50) only"],
    answer: 0,
    explanation: "Therapeutic index = TD50 / ED50. A HIGH TI = wide safety margin (e.g., penicillin TI very high). A NARROW TI = dangerous (e.g., digoxin, warfarin, lithium, theophylline, phenytoin, aminoglycosides) — require TDM (therapeutic drug monitoring). LD50/ED50 used in animals (lethal index).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_gp_005",
    topic: "general-pharmacology",
    year: "FMGE Dec 2020",
    q: "Bioavailability (F) of an intravenously administered drug is:",
    img: null,
    options: ["A. 50%", "B. 100% (by definition)", "C. Depends on drug molecular weight", "D. 0% for all IV drugs"],
    answer: 1,
    explanation: "IV administration = 100% bioavailability (drug enters systemic circulation directly, no first-pass effect, no absorption barrier). Oral bioavailability varies: depends on absorption, first-pass metabolism. F = (AUC oral / AUC IV) × (Dose IV / Dose oral) × 100%.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_gp_006",
    topic: "general-pharmacology",
    year: "FMGE Jun 2021",
    q: "Enzyme induction (CYP450 induction) causes:",
    img: null,
    options: ["A. Decreased drug metabolism → increased drug effect", "B. Increased drug metabolism → decreased drug effect (may cause drug interactions/treatment failure)", "C. No change in drug metabolism", "D. Competitive inhibition of other drugs"],
    answer: 1,
    explanation: "Enzyme inducers → increase CYP450 enzymes → faster drug metabolism → lower plasma levels → reduced drug effect. Inducers (mnemonic CRSPTB): Carbamazepine, Rifampicin, St John's Wort, Phenytoin, Phenobarbitone, chronic alcohol. Clinical impact: rifampicin reduces OCP efficacy, warfarin effect.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_gp_007",
    topic: "general-pharmacology",
    year: "FMGE Dec 2021",
    q: "Competitive antagonism is characterized by:",
    img: null,
    options: ["A. Rightward shift of dose-response curve with reduced maximum (Emax)", "B. Rightward (parallel) shift of dose-response curve with unchanged maximum (Emax) — overcome by increasing agonist dose", "C. Irreversible receptor binding always", "D. Only seen with enzyme inhibitors"],
    answer: 1,
    explanation: "Competitive (surmountable) antagonist: binds same receptor as agonist (reversible), shifts dose-response curve to the right (parallel shift) without changing maximum effect — overcome by increasing agonist concentration. Non-competitive (insurmountable) antagonist: binds different site or irreversibly → reduces Emax (cannot be overcome).",
    tags: ["PYQ", "high-yield"]
  },

  // ============ BATCH 1: ANS PHARMACOLOGY ============
  {
    id: "pharma_ans_001",
    topic: "ans-pharmacology",
    year: "FMGE Dec 2019",
    q: "Atropine (muscarinic antagonist) causes all of the following EXCEPT:",
    img: null,
    options: ["A. Mydriasis (pupil dilation)", "B. Tachycardia", "C. Decreased secretions (dry mouth, reduced sweating)", "D. Bradycardia and increased secretions"],
    answer: 3,
    explanation: "Atropine blocks muscarinic (M) receptors → blocks parasympathetic effects → tachycardia (blocks M2 on SA node), mydriasis (blocks sphincter pupillae), cycloplegia, dry mouth, urinary retention, decreased GI motility, hyperthermia (blocks sweating). Bradycardia and increased secretions are CHOLINERGIC effects (opposite).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ans_002",
    topic: "ans-pharmacology",
    year: "FMGE Jun 2018",
    q: "Adrenaline (epinephrine) — its effects on blood pressure include:",
    img: null,
    options: ["A. Pure vasoconstriction at all doses", "B. At low doses: β2 vasodilation predominates → decreased DBP; at high doses: α1 vasoconstriction → increased SBP and DBP", "C. Only increases DBP", "D. No effect on blood pressure"],
    answer: 1,
    explanation: "Adrenaline (α1, α2, β1, β2): Low dose → β2 predominates (vasodilation, ↓DBP, ↑SBP from β1 cardiac); High dose → α1 predominates (vasoconstriction, ↑↑SBP + ↑DBP). 'Adrenaline reversal' with α-blockers: adrenaline now causes only β2 vasodilation → ↓BP. Noradrenaline: mainly α1 + β1, no β2 (no vasodilation).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ans_003",
    topic: "ans-pharmacology",
    year: "FMGE Dec 2018",
    q: "Organophosphate poisoning is treated with:",
    img: null,
    options: ["A. Atropine alone", "B. Atropine (antidote for muscarinic effects) + Pralidoxime (2-PAM, reactivates acetylcholinesterase — must give early, before ageing)", "C. Neostigmine", "D. Beta-blockers"],
    answer: 1,
    explanation: "Organophosphates: irreversible AChE inhibition → ACh accumulation → SLUDGE (Salivation, Lacrimation, Urination, Defecation, GI cramps, Emesis) + miosis, bradycardia, bronchospasm + nicotinic (muscle fasciculations, weakness). Treatment: Atropine (large doses, titrate to drying secretions) + Pralidoxime/2-PAM (early, before 'ageing' of AChE-OP bond). Diazepam for seizures.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ans_004",
    topic: "ans-pharmacology",
    year: "FMGE Jun 2019",
    q: "Propranolol (non-selective β-blocker) is contraindicated in:",
    img: null,
    options: ["A. Hypertension", "B. Asthma (bronchospasm from β2 blockade)", "C. Angina pectoris", "D. Supraventricular tachycardia"],
    answer: 1,
    explanation: "Propranolol: non-selective β1+β2 blocker. Contraindications: bronchial asthma (β2 blockade → bronchospasm), COPD, peripheral vascular disease, heart block (2nd/3rd degree), decompensated heart failure, Raynaud's, diabetes on insulin (masks hypoglycemia symptoms). Use cardioselective β1-blockers (metoprolol, atenolol, bisoprolol) instead.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ans_005",
    topic: "ans-pharmacology",
    year: "FMGE Dec 2020",
    q: "Selective α1-blocker used for benign prostatic hypertrophy (BPH) is:",
    img: null,
    options: ["A. Propranolol", "B. Tamsulosin (selective α1A-blocker)", "C. Phentolamine", "D. Clonidine"],
    answer: 1,
    explanation: "Tamsulosin (selective α1A-blocker): relaxes smooth muscle of prostate and bladder neck → improved urinary flow in BPH. Other α1-blockers for BPH: alfuzosin, terazosin, doxazosin. Phentolamine: non-selective α-blocker (IV, used for pheochromocytoma crisis). Prazosin: α1-blocker (hypertension, PTSD nightmares).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ans_006",
    topic: "ans-pharmacology",
    year: "FMGE Jun 2021",
    q: "Pilocarpine (muscarinic agonist) is used in ophthalmology for:",
    img: null,
    options: ["A. Pupil dilation (mydriasis) for fundoscopy", "B. Treatment of angle-closure glaucoma — constricts pupil (miosis) → opens drainage angle + reduces IOP", "C. Cycloplegia for refraction", "D. Treating red eye"],
    answer: 1,
    explanation: "Pilocarpine: direct-acting muscarinic agonist → miosis (sphincter pupillae contraction) → opens trabecular meshwork angle → increases aqueous outflow → reduces IOP. Used in: open-angle glaucoma, acute angle-closure crisis. Also stimulates salivary glands (used in Sjögren syndrome — xerostomia, xerophthalmia).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ans_007",
    topic: "ans-pharmacology",
    year: "FMGE Dec 2021",
    q: "Neostigmine (anticholinesterase) — main clinical use is:",
    img: null,
    options: ["A. Treatment of hypertension", "B. Reversal of non-depolarizing neuromuscular blockade + treatment of myasthenia gravis", "C. Treatment of glaucoma only", "D. Emergency treatment of anaphylaxis"],
    answer: 1,
    explanation: "Neostigmine: reversible AChE inhibitor → ↑ACh at NMJ → reverses non-depolarizing NMBs (vecuronium, atracurium). Also used in: myasthenia gravis (diagnosis and treatment), Ogilvie syndrome (colonic pseudo-obstruction), post-op urinary retention. Given with atropine (blocks muscarinic side effects).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ans_008",
    topic: "ans-pharmacology",
    year: "FMGE Jun 2020",
    q: "Dobutamine differs from dopamine in that:",
    img: null,
    options: ["A. Dobutamine stimulates dopamine receptors in the kidney", "B. Dobutamine is a selective β1 agonist → increases cardiac contractility without significant vasoconstriction; dopamine has dose-dependent effects (DA1, β1, α1)", "C. Dobutamine causes tachycardia more than dopamine", "D. Dobutamine increases blood pressure more than dopamine at all doses"],
    answer: 1,
    explanation: "Dopamine: dose-dependent — Low dose (0.5–2 μg/kg/min): DA1 → renal vasodilation; Medium (2–10): β1 → ↑cardiac output; High (>10): α1 → vasoconstriction. Dobutamine: selective β1 agonist → ↑contractility (inotrope) with less tachycardia and vasoconstriction. Used in cardiogenic shock, heart failure (not to increase BP but CO).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ans_009",
    topic: "ans-pharmacology",
    year: "FMGE Dec 2019",
    q: "Clonidine (central α2 agonist) is used for:",
    img: null,
    options: ["A. Treatment of pheochromocytoma", "B. Hypertension + opioid/alcohol withdrawal + ADHD + PTSD nightmares", "C. Bronchospasm treatment", "D. Tachycardia management only"],
    answer: 1,
    explanation: "Clonidine: α2 agonist (central — NTS) → ↓sympathetic outflow → ↓BP, ↓HR. Uses: hypertension (especially renal HTN), opioid/alcohol withdrawal (reduces sympathetic overdrive), ADHD, PTSD-related nightmares, Tourette's syndrome, menopausal hot flashes. Rebound HTN if stopped abruptly.",
    tags: ["PYQ"]
  },

  // ============ BATCH 1: CVS DRUGS ============
  {
    id: "pharma_cvs_001",
    topic: "cvs-drugs",
    year: "FMGE Dec 2019",
    q: "Digoxin mechanism of action is:",
    img: null,
    options: ["A. Blocks calcium channels", "B. Inhibits Na⁺/K⁺-ATPase → ↑intracellular Na⁺ → ↑intracellular Ca²⁺ (via NCX) → positive inotropy; also vagal stimulation → negative chronotropy/dromotropy", "C. Activates beta-1 receptors", "D. Blocks potassium channels only"],
    answer: 1,
    explanation: "Digoxin: inhibits sarcolemmal Na⁺/K⁺-ATPase → ↑intracellular Na⁺ → reduced Na⁺/Ca²⁺ exchanger activity → ↑intracellular Ca²⁺ → positive inotropy. Vagal stimulation → negative chronotropy (↓HR), ↓AV conduction (dromotropy). Used in: heart failure (inotrope) + AF rate control. Narrow TI — toxicity: arrhythmias, yellow-green halos, nausea.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_cvs_002",
    topic: "cvs-drugs",
    year: "FMGE Jun 2018",
    q: "Statins (HMG-CoA reductase inhibitors) lower cholesterol by:",
    img: null,
    options: ["A. Increasing bile acid excretion", "B. Inhibiting HMG-CoA reductase → ↓hepatic cholesterol synthesis → ↑LDL receptor expression → ↑LDL uptake → ↓LDL", "C. Activating lipoprotein lipase", "D. Blocking cholesterol absorption in the gut"],
    answer: 1,
    explanation: "Statins: competitive inhibitors of HMG-CoA reductase (rate-limiting step in cholesterol synthesis). ↓Intrahepatic cholesterol → ↑LDL receptor expression → ↑LDL clearance from blood. Side effects: myopathy/rhabdomyolysis (↑CK), hepatotoxicity. Contraindicated in pregnancy. Rosuvastatin = most potent; Simvastatin + fibrate = high myopathy risk.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_cvs_003",
    topic: "cvs-drugs",
    year: "FMGE Dec 2018",
    q: "ACE inhibitors (e.g., enalapril, ramipril) cause which unique adverse effect?",
    img: null,
    options: ["A. Hypokalemia", "B. Dry, persistent non-productive cough (due to bradykinin accumulation)", "C. Tachycardia", "D. Hypernatremia"],
    answer: 1,
    explanation: "ACE inhibitors: block conversion of angiotensin I → II AND block bradykinin degradation → bradykinin accumulates → prostaglandins/substance P → dry cough (~10–20%). Also: angioedema (rare, life-threatening), hyperkalemia, first-dose hypotension, teratogenic (contraindicated in pregnancy — renal agenesis). Substitute: ARBs (no cough — don't inhibit bradykinin).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_cvs_004",
    topic: "cvs-drugs",
    year: "FMGE Jun 2019",
    q: "Nitrates (GTN, isosorbide) relieve angina by:",
    img: null,
    options: ["A. Increasing cardiac oxygen demand", "B. Releasing NO → cGMP → smooth muscle relaxation → venodilation (↓preload) + arteriodilation (↓afterload) → ↓MVO₂", "C. Blocking calcium channels in myocardium", "D. Increasing heart rate and contractility"],
    answer: 1,
    explanation: "Organic nitrates → NO release → activates guanylyl cyclase → ↑cGMP → smooth muscle relaxation. Predominantly venodilators → ↓venous return (preload) → ↓wall tension → ↓O₂ demand. Sublingual GTN: onset 1–2 min, duration 30 min, bypasses first-pass. Tolerance with continuous use (nitrate-free period needed). Contraindicated with PDE-5 inhibitors (sildenafil) → severe hypotension.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_cvs_005",
    topic: "cvs-drugs",
    year: "FMGE Dec 2020",
    q: "Drug of choice for acute MI with ongoing chest pain is:",
    img: null,
    options: ["A. Digoxin", "B. Morphine + Aspirin + Nitrates + Oxygen (MONA) + reperfusion (thrombolysis/PCI)", "C. Furosemide alone", "D. Oral beta-blocker alone"],
    answer: 1,
    explanation: "Acute STEMI management: MONA — Morphine (pain relief, anxiolysis, venodilator), Oxygen (if SpO₂ <94%), Nitrates (chest pain relief), Aspirin (antiplatelet, 300 mg loading) + reperfusion therapy: Primary PCI (preferred, within 90 min) or thrombolysis (streptokinase/alteplase if PCI unavailable). Add clopidogrel/ticagrelor, heparin.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_cvs_006",
    topic: "cvs-drugs",
    year: "FMGE Jun 2021",
    q: "Drug used to treat heart failure with reduced ejection fraction (HFrEF) that reduces mortality:",
    img: null,
    options: ["A. Digoxin (reduces symptoms/hospitalizations only — no mortality benefit)", "B. ACE inhibitor + beta-blocker + MRA (spironolactone) + SGLT-2 inhibitor — the 'four pillars' reduce mortality", "C. Furosemide alone (symptom relief only)", "D. Hydralazine alone"],
    answer: 1,
    explanation: "HFrEF mortality-reducing drugs (4 pillars): (1) ACEi/ARB or ARNI (sacubitril/valsartan), (2) Beta-blocker (carvedilol, bisoprolol, metoprolol succinate), (3) MRA (spironolactone/eplerenone), (4) SGLT-2 inhibitor (dapagliflozin, empagliflozin). Digoxin reduces symptoms and hospitalization but NOT mortality. Furosemide = symptom relief only.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_cvs_007",
    topic: "cvs-drugs",
    year: "FMGE Dec 2021",
    q: "Fibrates (e.g., fenofibrate) primarily reduce:",
    img: null,
    options: ["A. LDL cholesterol", "B. Serum triglycerides (TG) — activate PPARα → ↑lipoprotein lipase → ↑TG clearance; also ↑HDL", "C. Total body cholesterol only", "D. Lipoprotein(a)"],
    answer: 1,
    explanation: "Fibrates: activate PPARα → ↑lipoprotein lipase activity → ↑TG hydrolysis (↓VLDL, ↓TG), ↑HDL, mild ↓LDL. Drug of choice for hypertriglyceridemia (>500 mg/dL — pancreatitis risk). Combination with statins → ↑myopathy risk. Nicotinic acid (niacin): ↑HDL most effectively.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_cvs_008",
    topic: "cvs-drugs",
    year: "FMGE Jun 2020",
    q: "Ivabradine mechanism of action:",
    img: null,
    options: ["A. Beta-1 receptor blockade", "B. Selective If (funny current) channel blocker in SA node → reduces heart rate without affecting contractility or BP", "C. Calcium channel blockade", "D. Potassium channel blockade"],
    answer: 1,
    explanation: "Ivabradine: selective inhibitor of If (HCN channel / funny current) in SA node → slows pacemaker depolarization → ↓HR without affecting contractility, BP, or conduction. Used in: stable angina (when β-blockers contraindicated), HFrEF with HR >70 bpm on maximum β-blocker. Only works in sinus rhythm (not AF).",
    tags: ["PYQ", "high-yield"]
  },


  // ============ BATCH 2: ANTIHYPERTENSIVES ============
  {
    id: "pharma_ah_001",
    topic: "antihypertensives",
    year: "FMGE Dec 2019",
    q: "Drug of choice for hypertension in pregnancy is:",
    img: null,
    options: ["A. ACE inhibitors", "B. Methyldopa (alpha-methyldopa)", "C. ARBs (angiotensin receptor blockers)", "D. Thiazide diuretics"],
    answer: 1,
    explanation: "Methyldopa = DOC for chronic hypertension in pregnancy (longest safety record). Others safe in pregnancy: labetalol (1st line), nifedipine (CCB, 2nd line), hydralazine (acute severe HTN). CONTRAINDICATED in pregnancy: ACEi + ARBs (fetal renal agenesis, oligohydramnios), thiazides (neonatal thrombocytopenia risk).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ah_002",
    topic: "antihypertensives",
    year: "FMGE Jun 2018",
    q: "Calcium channel blockers (dihydropyridines — amlodipine, nifedipine) preferentially act on:",
    img: null,
    options: ["A. Cardiac muscle (negative inotropy + chronotropy)", "B. Vascular smooth muscle (vasodilation) — more selective than non-dihydropyridines", "C. Both cardiac and vascular equally", "D. Only arterioles in kidney"],
    answer: 1,
    explanation: "Dihydropyridine CCBs (nifedipine, amlodipine, felodipine): vascular selectivity → vasodilation → ↓BP. Side effects: ankle edema, flushing, reflex tachycardia. Non-dihydropyridines (verapamil, diltiazem): cardiac selectivity → negative chronotropy/inotropy, ↓AV conduction. Used in AF rate control, SVT. Avoid in HFrEF.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ah_003",
    topic: "antihypertensives",
    year: "FMGE Dec 2018",
    q: "Thiazide diuretics (hydrochlorothiazide) lower BP mainly by:",
    img: null,
    options: ["A. Blocking renin secretion", "B. Initially: ↓blood volume; long-term: ↓peripheral vascular resistance (main mechanism)", "C. Blocking calcium channels", "D. Increasing cardiac output"],
    answer: 1,
    explanation: "Thiazides (HCTZ, chlorthalidone): block Na-Cl cotransporter in DCT → ↑Na/H₂O excretion. Long-term antihypertensive effect = ↓peripheral resistance (unknown mechanism). Side effects: hypokalemia, hyponatremia, hypercalcemia (reduces urinary Ca excretion — useful in hypercalciuria), hyperuricemia (gout), hyperglycemia, hyperlipidemia.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ah_004",
    topic: "antihypertensives",
    year: "FMGE Jun 2019",
    q: "Sodium nitroprusside is used in hypertensive emergency because:",
    img: null,
    options: ["A. It is an oral, long-acting antihypertensive", "B. It is a potent IV vasodilator (both arterial + venous) with immediate onset/offset — ideal for titration in hypertensive crisis", "C. It is safe to use in pregnancy without monitoring", "D. It does not require ICU monitoring"],
    answer: 1,
    explanation: "Sodium nitroprusside: IV arteriolar + venodilator (NO donor) → immediate BP reduction. Used in hypertensive emergency, aortic dissection (in combination), severe HF. Requires ICU/continuous monitoring (BP every minute). Cyanide toxicity with prolonged use (metabolized to cyanide) — prevent with sodium thiosulfate. Causes reflex tachycardia.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ah_005",
    topic: "antihypertensives",
    year: "FMGE Dec 2020",
    q: "Spironolactone is a useful antihypertensive in:",
    img: null,
    options: ["A. Hypertension with hypokalemia", "B. Primary hyperaldosteronism (Conn's syndrome) and resistant hypertension (4th agent)", "C. Acute pulmonary edema only", "D. Hypertension in pregnancy"],
    answer: 1,
    explanation: "Spironolactone (aldosterone antagonist): competitive antagonist of aldosterone at mineralocorticoid receptor → ↑Na/H₂O excretion, ↑K retention. DOC for Conn's syndrome (primary hyperaldosteronism). Also used in: resistant HTN (4th drug), HFrEF (reduces mortality), cirrhotic ascites, hirsutism (anti-androgenic). Side effects: hyperkalemia, gynecomastia, menstrual irregularities.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ah_006",
    topic: "antihypertensives",
    year: "FMGE Jun 2021",
    q: "First-line treatment for pheochromocytoma-associated hypertension is:",
    img: null,
    options: ["A. Beta-blockers first", "B. Alpha-blockers first (phenoxybenzamine or doxazosin), then add beta-blockers only after alpha-blockade is established", "C. ACE inhibitors", "D. Calcium channel blockers only"],
    answer: 1,
    explanation: "Pheochromocytoma: must give ALPHA-BLOCKER FIRST (phenoxybenzamine — non-selective, long-acting, or doxazosin). Then add beta-blocker. If beta-blocker given first without alpha-blockade → unopposed alpha activity → hypertensive crisis. Preoperative alpha-blockade for 10–14 days + liberal salt/fluid intake before surgery.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ah_007",
    topic: "antihypertensives",
    year: "FMGE Dec 2021",
    q: "ARBs (angiotensin receptor blockers — e.g., losartan, valsartan) differ from ACEi in that:",
    img: null,
    options: ["A. ARBs also cause cough and angioedema", "B. ARBs do NOT inhibit bradykinin degradation → no cough; block AT1 receptors directly", "C. ARBs are not safe in pregnancy", "D. ARBs reduce aldosterone less effectively"],
    answer: 1,
    explanation: "ARBs: selectively block AT1 receptors (angiotensin II) → vasodilation + aldosterone suppression. Unlike ACEi: do NOT inhibit bradykinin degradation → NO cough (and significantly less angioedema risk). Same contraindications as ACEi: pregnancy, hyperkalemia, bilateral renal artery stenosis. Preferred when ACEi not tolerated due to cough.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ BATCH 2: ANTIARRHYTHMICS ============
  {
    id: "pharma_aa_001",
    topic: "antiarrhythmics",
    year: "FMGE Dec 2019",
    q: "Vaughan Williams Class I antiarrhythmics work by:",
    img: null,
    options: ["A. Beta-adrenergic blockade", "B. Sodium channel blockade → slowed phase 0 depolarization, prolonged QRS", "C. Potassium channel blockade", "D. Calcium channel blockade"],
    answer: 1,
    explanation: "Vaughan Williams classification: Class I = Na+ channel blockers (IA: quinidine, procainamide — prolong AP; IB: lidocaine, mexiletine — shorten AP; IC: flecainide, propafenone — marked QRS prolongation). Class II = β-blockers. Class III = K+ channel blockers (amiodarone, sotalol — prolong QT). Class IV = CCBs (verapamil, diltiazem).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_aa_002",
    topic: "antiarrhythmics",
    year: "FMGE Jun 2018",
    q: "Drug of choice for acute SVT (supraventricular tachycardia) termination is:",
    img: null,
    options: ["A. Amiodarone", "B. Adenosine (6 mg rapid IV bolus, repeat with 12 mg if needed)", "C. Digoxin", "D. Verapamil IV"],
    answer: 1,
    explanation: "Adenosine: ultra-short-acting (t½ = 10–30 seconds) — activates adenosine A1 receptors → ↑K conductance → hyperpolarizes AV node → transient AV block → breaks re-entrant SVT. DOC for acute SVT termination. Side effects: flushing, dyspnea, chest discomfort (seconds only). Contraindicated in asthma, 2nd/3rd degree heart block. Theophylline blocks its effect.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_aa_003",
    topic: "antiarrhythmics",
    year: "FMGE Dec 2018",
    q: "Amiodarone (Class III) side effects include:",
    img: null,
    options: ["A. No significant side effects", "B. Thyroid dysfunction (hypo or hyperthyroidism), pulmonary toxicity, corneal microdeposits, photosensitivity, hepatotoxicity, peripheral neuropathy", "C. Only QT prolongation with no organ toxicity", "D. Reversible corneal deposits only"],
    answer: 1,
    explanation: "Amiodarone: most effective antiarrhythmic but most toxic. Contains 37% iodine → thyroid dysfunction (both hypo/hyperthyroid, 15–20%). Pulmonary fibrosis (most serious, check CXR/PFT). Corneal deposits (virtually all patients — usually asymptomatic). Photosensitivity, grey-blue skin discoloration, hepatotoxicity, peripheral neuropathy. Very long t½ (~40–55 days).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_aa_004",
    topic: "antiarrhythmics",
    year: "FMGE Jun 2020",
    q: "Drug of choice for ventricular fibrillation (VF) or pulseless VT is:",
    img: null,
    options: ["A. IV amiodarone (if shock-refractory VF/VT after 3 shocks)", "B. Defibrillation (unsynchronized DC shock) as first intervention, then amiodarone if refractory", "C. Lignocaine (first-line)", "D. Adenosine (SVT only)"],
    answer: 1,
    explanation: "VF/pulseless VT: DEFIBRILLATION (unsynchronized 200J biphasic) is the primary treatment — do NOT delay for drugs. After 3rd shock if still VF/pulseless VT: Adrenaline 1 mg IV + Amiodarone 300 mg IV (ACLS). Magnesium for torsades de pointes. Lignocaine = 2nd-line if amiodarone unavailable.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_aa_005",
    topic: "antiarrhythmics",
    year: "FMGE Dec 2020",
    q: "Digoxin toxicity most commonly causes which arrhythmia?",
    img: null,
    options: ["A. Ventricular fibrillation as first sign", "B. Premature ventricular contractions (PVCs) / bigeminy; also 'PAT with block' (accelerated junctional), AV block, bradycardia", "C. Only SVT", "D. Bundle branch block"],
    answer: 1,
    explanation: "Digoxin toxicity arrhythmias: PVCs, bigeminy (alternating PVC-normal), ventricular tachycardia. 'PAT with block' (paroxysmal atrial tachycardia + 2nd degree AV block) = characteristic of digoxin toxicity. Triggered by hypokalemia, hypomagnesemia, hypercalcemia. Treatment: stop digoxin, correct electrolytes, digoxin-specific antibody fragments (Digibind/DigiFab) for severe toxicity.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_aa_006",
    topic: "antiarrhythmics",
    year: "FMGE Jun 2021",
    q: "Magnesium sulfate is the drug of choice for:",
    img: null,
    options: ["A. All ventricular arrhythmias", "B. Torsades de pointes (polymorphic VT associated with prolonged QT interval)", "C. SVT only", "D. Atrial flutter"],
    answer: 1,
    explanation: "Magnesium sulfate: DOC for torsades de pointes (TdP) — IV 2g over 15 min. TdP = polymorphic VT ('twisting of the points') with prolonged QT. Causes of long QT + TdP: amiodarone, quinidine, Class IA drugs, haloperidol, hypokalemia, hypomagnesemia, congenital LQTS. Also used in eclampsia (anticonvulsant) and severe asthma.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ BATCH 2: ANTIMICROBIALS (ANTIBIOTICS) ============
  {
    id: "pharma_ab_001",
    topic: "antibiotics",
    year: "FMGE Dec 2019",
    q: "Beta-lactam antibiotics (penicillins, cephalosporins) work by:",
    img: null,
    options: ["A. Inhibiting protein synthesis (30S subunit)", "B. Inhibiting cell wall synthesis — block PBPs (penicillin-binding proteins/transpeptidases) → ↓cross-linking of peptidoglycan → cell lysis", "C. Disrupting cell membrane", "D. Inhibiting DNA gyrase"],
    answer: 1,
    explanation: "Beta-lactams: bind and inhibit PBPs (penicillin-binding proteins/transpeptidases) → prevent cross-linking of peptidoglycan cell wall → osmotic lysis (bactericidal). Resistance: beta-lactamase production (overcome with clavulanic acid, sulbactam). MRSA resistance: altered PBP2a (PBP2') — vancomycin targets cell wall differently (D-Ala-D-Ala terminal).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ab_002",
    topic: "antibiotics",
    year: "FMGE Jun 2018",
    q: "Aminoglycosides (gentamicin, amikacin) most important adverse effect is:",
    img: null,
    options: ["A. Hepatotoxicity", "B. Nephrotoxicity (proximal tubule damage) + ototoxicity (irreversible — vestibular and cochlear)", "C. Bone marrow suppression", "D. Pulmonary fibrosis"],
    answer: 1,
    explanation: "Aminoglycosides: concentration-dependent bactericidal antibiotics (30S subunit). Toxicities: (1) Nephrotoxicity (reversible, proximal tubular damage — monitor creatinine), (2) Ototoxicity (irreversible — streptomycin: vestibular; amikacin: cochlear/hearing), (3) Neuromuscular blockade. Once-daily dosing reduces toxicity. Requires dose adjustment in renal failure.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ab_003",
    topic: "antibiotics",
    year: "FMGE Dec 2018",
    q: "Vancomycin is the drug of choice for:",
    img: null,
    options: ["A. Gram-negative infections", "B. MRSA (methicillin-resistant S. aureus) and severe gram-positive infections unresponsive to penicillin", "C. Fungal infections", "D. Mycobacterial infections"],
    answer: 1,
    explanation: "Vancomycin: glycopeptide antibiotic — inhibits cell wall synthesis by binding D-Ala-D-Ala terminus of peptidoglycan precursors. DOC for: MRSA, C. difficile colitis (oral vancomycin), Enterococcus (with gentamicin). Adverse effects: Red Man syndrome (rapid infusion → histamine release → flushing/rash — not allergy; slow infusion prevents it), nephrotoxicity, ototoxicity.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ab_004",
    topic: "antibiotics",
    year: "FMGE Jun 2019",
    q: "Fluoroquinolones (ciprofloxacin, levofloxacin) work by:",
    img: null,
    options: ["A. Blocking 30S ribosomal subunit", "B. Inhibiting DNA gyrase (topoisomerase II) and topoisomerase IV → prevents DNA supercoiling/replication → bactericidal", "C. Blocking cell wall synthesis", "D. Inhibiting RNA polymerase"],
    answer: 1,
    explanation: "Fluoroquinolones: inhibit DNA gyrase (gram-negatives) and topoisomerase IV (gram-positives) → prevent DNA replication. Broad-spectrum. Avoid in children (cartilage damage in immature animals), pregnancy, and myasthenia gravis. QT prolongation (moxifloxacin > levofloxacin). Drug interactions: antacids ↓absorption (chelation with Mg²⁺/Al³⁺).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ab_005",
    topic: "antibiotics",
    year: "FMGE Dec 2020",
    q: "Chloramphenicol causes which unique life-threatening adverse effect?",
    img: null,
    options: ["A. Ototoxicity", "B. Aplastic anemia (irreversible, idiosyncratic, dose-independent) + 'Gray baby syndrome' in neonates", "C. Hepatotoxicity only", "D. Nephrotoxicity"],
    answer: 1,
    explanation: "Chloramphenicol: (1) Aplastic anemia — irreversible, idiosyncratic, 1 in 25,000 — most feared side effect; (2) Gray baby syndrome — neonates lack UDP-glucuronosyltransferase → chloramphenicol accumulates → cardiovascular collapse (gray skin, vomiting, respiratory distress). Inhibits 50S ribosomal subunit. Used in typhoid (restricted use), brain abscess (penetrates CSF well).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ab_006",
    topic: "antibiotics",
    year: "FMGE Jun 2021",
    q: "Metronidazole mechanism of action is:",
    img: null,
    options: ["A. Inhibits cell wall synthesis", "B. Converted to nitro radical by microbial nitroreductase → strand breaks in DNA → bactericidal/antiprotozoal (only active in anaerobic organisms)", "C. Inhibits protein synthesis at 50S", "D. Inhibits folate synthesis"],
    answer: 1,
    explanation: "Metronidazole: prodrug activated by anaerobic microbial nitroreductase → reactive nitro radicals → DNA strand breaks. Active against: anaerobes (Bacteroides, Clostridium), protozoa (G. lamblia, E. histolytica, T. vaginalis). Used in: bacterial vaginosis, C. difficile colitis, H. pylori (triple therapy), amoebiasis. Avoid alcohol (disulfiram-like reaction).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ab_007",
    topic: "antibiotics",
    year: "FMGE Dec 2021",
    q: "Tetracyclines are contraindicated in:",
    img: null,
    options: ["A. Adults with urinary tract infections", "B. Children <8 years and pregnant women — deposits in bones and teeth → discoloration, impaired bone growth", "C. Elderly patients with heart disease", "D. Patients with liver disease only"],
    answer: 1,
    explanation: "Tetracyclines: inhibit 30S subunit. Contraindicated: children <8 years (yellow-brown staining and enamel hypoplasia of permanent teeth, impaired bone growth) and pregnancy (same in fetus). Drug interactions: antacids/milk (chelation), dairy products ↓absorption. Uses: cholera, rickettsiae, Chlamydia, H. pylori, acne, Lyme disease.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ab_008",
    topic: "antibiotics",
    year: "FMGE Jun 2020",
    q: "Linezolid mechanism of action:",
    img: null,
    options: ["A. Cell wall inhibitor", "B. Inhibits 50S subunit by preventing formation of 70S initiation complex (unique mechanism — no cross-resistance with other ribosomal inhibitors)", "C. DNA gyrase inhibitor", "D. 30S subunit inhibitor"],
    answer: 1,
    explanation: "Linezolid (oxazolidinone): inhibits 50S ribosomal subunit by binding 23S rRNA → prevents 70S initiation complex assembly → inhibits protein synthesis. Active against MRSA, VRE (vancomycin-resistant Enterococcus), MDR-TB. Side effects: myelosuppression (↓platelets — most common, reversible), serotonin syndrome (with SSRIs, MAOIs), peripheral/optic neuropathy (prolonged use).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ab_009",
    topic: "antibiotics",
    year: "FMGE Dec 2019",
    q: "Drug of choice for MRSA pneumonia/bacteremia is:",
    img: null,
    options: ["A. Amoxicillin-clavulanate", "B. Vancomycin IV (or linezolid as alternative)", "C. Cefazolin", "D. Ciprofloxacin"],
    answer: 1,
    explanation: "MRSA treatment: vancomycin IV = DOC for systemic MRSA infections (pneumonia, bacteremia, endocarditis). Alternatives: linezolid (bacteriostatic for MRSA pneumonia — lung penetration superior), daptomycin (not for pneumonia — inactivated by surfactant, used for skin/bacteremia), teicoplanin, ceftaroline (anti-MRSA cephalosporin).",
    tags: ["PYQ", "high-yield"]
  },


  // ============ BATCH 3: ANTITUBERCULAR DRUGS ============
  {
    id: "pharma_atb_001",
    topic: "antitubercular-drugs",
    year: "FMGE Dec 2019",
    q: "First-line antitubercular drugs (HRZE) and their mechanisms:",
    img: null,
    options: ["A. All inhibit cell wall synthesis", "B. Isoniazid (INH): inhibits mycolic acid synthesis; Rifampicin: RNA polymerase; Pyrazinamide: disrupts membrane; Ethambutol: inhibits arabinosyl transferase", "C. All inhibit protein synthesis", "D. All inhibit DNA replication"],
    answer: 1,
    explanation: "First-line ATT: H (Isoniazid) — bactericidal, inhibits InhA (mycolic acid synthesis); R (Rifampicin) — bactericidal, inhibits DNA-dependent RNA polymerase; Z (Pyrazinamide) — bactericidal at acidic pH in macrophages; E (Ethambutol) — bacteriostatic, inhibits arabinosyl transferase (arabinogalactan synthesis). Streptomycin = reserve/injectable first-line.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_atb_002",
    topic: "antitubercular-drugs",
    year: "FMGE Jun 2018",
    q: "Isoniazid (INH) unique adverse effects include:",
    img: null,
    options: ["A. Optic neuritis and red-green color blindness", "B. Peripheral neuropathy (prevented by pyridoxine/B6), hepatotoxicity, lupus-like syndrome", "C. Hyperuricemia and gout", "D. Optic neuritis only"],
    answer: 1,
    explanation: "INH toxicity: (1) Peripheral neuropathy (↓pyridoxine/B6 — give B6 prophylactically with INH), (2) Hepatotoxicity (most serious — monitor LFTs, especially if slow acetylators), (3) Drug-induced lupus (SLE-like), (4) Pellagra (niacin deficiency), (5) CNS toxicity (seizures — treat INH overdose with IV pyridoxine). Fast vs slow acetylators: slow = more toxicity.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_atb_003",
    topic: "antitubercular-drugs",
    year: "FMGE Dec 2018",
    q: "Ethambutol's specific adverse effect that requires monitoring:",
    img: null,
    options: ["A. Peripheral neuropathy", "B. Optic neuritis — retrobulbar → loss of visual acuity, red-green color blindness (dose-related, usually reversible)", "C. Ototoxicity", "D. Nephrotoxicity"],
    answer: 1,
    explanation: "Ethambutol: optic neuritis → ↓visual acuity, red-green color blindness, central scotoma. Dose-related, usually reversible if stopped early. Monitor: baseline visual acuity + color vision; monthly if on high doses. Contraindicated if visual acuity cannot be monitored (children <5 years). Stop drug if visual changes occur.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_atb_004",
    topic: "antitubercular-drugs",
    year: "FMGE Jun 2019",
    q: "Rifampicin important drug interaction causing:",
    img: null,
    options: ["A. No significant interactions", "B. Potent CYP450 enzyme inducer → reduces efficacy of: OCP, warfarin, HIV antiretrovirals, oral corticosteroids, digoxin, methadone, azole antifungals", "C. Only inhibits CYP450", "D. Increases levels of all co-administered drugs"],
    answer: 1,
    explanation: "Rifampicin = most potent CYP450 enzyme inducer (CYP3A4, CYP2C9). ↑Metabolism of: OCP (↓efficacy → contraceptive failure), warfarin (↓effect → ↑dose needed), HIV PIs/NNRTIs, oral contraceptives, azole antifungals. Also: turns body fluids orange-red (urine, saliva, tears — harmless; stains contact lenses). Hepatotoxic.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_atb_005",
    topic: "antitubercular-drugs",
    year: "FMGE Dec 2020",
    q: "Drug of choice for MDR-TB (multidrug-resistant TB — resistant to INH + rifampicin) includes:",
    img: null,
    options: ["A. Continue same first-line drugs at higher doses", "B. Longer regimen with second-line drugs: bedaquiline, delamanid, linezolid, clofazimine, moxifloxacin", "C. Ethambutol alone", "D. Streptomycin alone"],
    answer: 1,
    explanation: "MDR-TB: resistance to at least INH + rifampicin. XDR-TB: MDR + fluoroquinolone + injectable. Treatment: 18–24 months with second-line drugs. New drugs: Bedaquiline (diarylquinoline — inhibits ATP synthase), Delamanid (nitroimidazole — inhibits mycolic acid). Regimen: BPaLM (bedaquiline, pretomanid, linezolid, moxifloxacin).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_atb_006",
    topic: "antitubercular-drugs",
    year: "FMGE Jun 2021",
    q: "Pyrazinamide unique adverse effects are:",
    img: null,
    options: ["A. Peripheral neuropathy and optic neuritis", "B. Hyperuricemia (gout), hepatotoxicity, arthralgia", "C. Ototoxicity and nephrotoxicity", "D. Photosensitivity only"],
    answer: 1,
    explanation: "Pyrazinamide: hyperuricemia (most common — inhibits renal tubular uric acid secretion → gout attacks), hepatotoxicity (most serious — dose-dependent), arthralgia/polyarthralgia. Active only at acidic pH (inside macrophage phagolysosomes — kills dormant intracellular bacilli). Used only in initial 2 months of standard therapy. Avoid in gout.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_atb_007",
    topic: "antitubercular-drugs",
    year: "FMGE Dec 2021",
    q: "Standard DOTS (Directly Observed Treatment, Short-course) regimen for new pulmonary TB:",
    img: null,
    options: ["A. 6 months: HRZE for 6 months (daily throughout)", "B. 6 months: HRZE × 2 months (intensive phase) + HR × 4 months (continuation phase)", "C. 9 months: HRE × 9 months", "D. 12 months of treatment always"],
    answer: 1,
    explanation: "RNTCP/NTEP regimen for new TB: Intensive phase = 2 months HRZE (daily) → kills most bacilli, patient non-infectious by 2 weeks. Continuation phase = 4 months HR (daily). Total: 6 months. Category II (retreatment): 2HRZES + 1HRZE + 5HRE (8 months). All given under directly observed therapy (DOT). Fixed-dose combinations (FDC) preferred.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_atb_008",
    topic: "antitubercular-drugs",
    year: "FMGE Jun 2020",
    q: "INH prophylaxis (chemoprophylaxis) is given to:",
    img: null,
    options: ["A. Only HIV-positive patients", "B. Household contacts of smear-positive TB cases (especially children <5y), HIV+ persons with LTBI, TST converters, immunosuppressed", "C. Everyone exposed to any TB patient", "D. Only to patients with active TB who are non-infectious"],
    answer: 1,
    explanation: "INH prophylaxis (LTBI treatment): isoniazid 5 mg/kg (max 300 mg) × 6 months. Indications: household contacts of smear+ve TB (especially children <5 years and HIV+), TST/IGRA converters, HIV+ with LTBI (6H or 3HP), organ transplant recipients, TNF-alpha therapy. Always rule out active TB before prophylaxis.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ BATCH 3: ANTIFUNGAL & ANTIVIRAL ============
  {
    id: "pharma_fv_001",
    topic: "antifungal-antiviral",
    year: "FMGE Dec 2019",
    q: "Amphotericin B mechanism of action and use:",
    img: null,
    options: ["A. Inhibits ergosterol synthesis (like azoles)", "B. Binds ergosterol in fungal cell membrane → forms pores → membrane leakage → cell death (polyene — fungicidal); used for life-threatening systemic fungal infections", "C. Inhibits beta-glucan synthesis", "D. Inhibits chitin synthesis"],
    answer: 1,
    explanation: "Amphotericin B (polyene): binds ergosterol in fungal membrane → pores → K⁺ efflux → cell death. Broad-spectrum (Candida, Aspergillus, Cryptococcus, Mucor). Gold standard for severe fungal infections (cryptococcal meningitis). Toxicity: nephrotoxicity (major — renal tubular acidosis, hypokalemia), infusion-related reaction (fever, chills). Liposomal AmB = less toxic.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_fv_002",
    topic: "antifungal-antiviral",
    year: "FMGE Jun 2018",
    q: "Azole antifungals (fluconazole, itraconazole, voriconazole) work by:",
    img: null,
    options: ["A. Binding ergosterol directly", "B. Inhibiting CYP51 (14-α-demethylase) → blocks ergosterol synthesis → defective fungal membrane", "C. Inhibiting beta-glucan synthesis", "D. Disrupting fungal DNA replication"],
    answer: 1,
    explanation: "Azoles: inhibit fungal CYP450 (CYP51/14α-lanosterol demethylase) → ↓ergosterol synthesis → membrane disruption → fungistatic. Fluconazole: oral/IV, good CSF penetration (Cryptococcus), DOC for candidiasis. Voriconazole: DOC for invasive aspergillosis. Itraconazole: dermatophytes. Note: azoles inhibit human CYP3A4 too → many drug interactions.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_fv_003",
    topic: "antifungal-antiviral",
    year: "FMGE Dec 2018",
    q: "Acyclovir mechanism of action is:",
    img: null,
    options: ["A. Directly inhibits viral RNA polymerase", "B. Guanosine analogue — phosphorylated by viral thymidine kinase (TK) → acyclovir triphosphate → inhibits viral DNA polymerase + chain termination (selective for HSV/VZV)", "C. Blocks viral attachment to host cell", "D. Inhibits viral neuraminidase"],
    answer: 1,
    explanation: "Acyclovir: requires viral TK for activation → highly selective (only active in virus-infected cells). Active against HSV-1, HSV-2, VZV (less active), CMV (inactive — use ganciclovir). Used for: HSV encephalitis (IV acyclovir), genital herpes, herpes zoster, chickenpox. Resistance: viral TK mutation. Valacyclovir = prodrug (better oral bioavailability).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_fv_004",
    topic: "antifungal-antiviral",
    year: "FMGE Jun 2019",
    q: "Drug of choice for influenza treatment and prophylaxis:",
    img: null,
    options: ["A. Acyclovir", "B. Oseltamivir (Tamiflu) — neuraminidase inhibitor → prevents viral release from host cells and spread", "C. Ribavirin", "D. Amantadine (no longer effective — widespread resistance)"],
    answer: 1,
    explanation: "Oseltamivir (oral) and zanamivir (inhaled): neuraminidase inhibitors → prevent release of new virions from infected cells → ↓spread. Effective for influenza A and B. Start within 48 hours of symptoms for best effect. Peramivir (IV): for hospitalized patients. Amantadine (M2 channel blocker): influenza A only, widespread resistance (not recommended). Baloxavir = cap-dependent endonuclease inhibitor.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_fv_005",
    topic: "antifungal-antiviral",
    year: "FMGE Dec 2020",
    q: "Griseofulvin mechanism and use:",
    img: null,
    options: ["A. Inhibits ergosterol synthesis", "B. Binds to tubulin → disrupts microtubule function → inhibits mitosis; used for dermatophyte infections (tinea) of hair and nails", "C. Disrupts fungal cell membrane pores", "D. Inhibits glucan synthesis"],
    answer: 1,
    explanation: "Griseofulvin: fungistatic — binds tubulin → inhibits spindle formation → blocks fungal mitosis. Accumulates in keratin-containing tissues (skin, hair, nails). Used for dermatophytosis (tinea capitis — preferred in children, tinea pedis, onychomycosis). Side effects: photosensitivity, headache, hepatotoxicity. Drug interaction: reduces warfarin/OCP efficacy (inducer). Avoid in pregnancy.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_fv_006",
    topic: "antifungal-antiviral",
    year: "FMGE Jun 2021",
    q: "Antiretroviral drug classes for HIV treatment include all EXCEPT:",
    img: null,
    options: ["A. NRTIs (tenofovir, lamivudine, zidovudine — inhibit reverse transcriptase)", "B. Neuraminidase inhibitors (oseltamivir)", "C. NNRTIs (efavirenz, nevirapine), Protease inhibitors (ritonavir, lopinavir), Integrase inhibitors (dolutegravir)", "D. All above are used"],
    answer: 1,
    explanation: "HIV ART classes: NRTIs (chain terminators — tenofovir, lamivudine, zidovudine: AZT → cause myelosuppression), NNRTIs (efavirenz, nevirapine), PIs (lopinavir/ritonavir — metabolic syndrome), InSTIs (dolutegravir, raltegravir), Entry inhibitors. Standard first-line: TDF + 3TC + DTG (tenofovir + lamivudine + dolutegravir). Neuraminidase inhibitors are anti-influenza.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ BATCH 3: NSAIDs & ANALGESICS ============
  {
    id: "pharma_ns_001",
    topic: "nsaids-analgesics",
    year: "FMGE Dec 2019",
    q: "NSAIDs work primarily by:",
    img: null,
    options: ["A. Blocking phospholipase A2", "B. Inhibiting COX-1 and/or COX-2 (cyclooxygenase) → ↓prostaglandin synthesis → anti-inflammatory, analgesic, antipyretic effects", "C. Blocking lipoxygenase (LOX) pathway", "D. Activating opioid receptors"],
    answer: 1,
    explanation: "NSAIDs: inhibit COX-1 (constitutive — gastric mucosal protection, platelet TXA2, renal prostaglandins) + COX-2 (inducible — inflammation, fever, pain). COX-2 selective: celecoxib, etoricoxib → less GI toxicity but ↑cardiovascular risk. Aspirin: irreversible COX inhibition (acetylation) → platelet aggregation inhibition (7–10 days). Other NSAIDs: reversible, competitive.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ns_002",
    topic: "nsaids-analgesics",
    year: "FMGE Jun 2018",
    q: "Aspirin at low dose (75–325 mg) is used for:",
    img: null,
    options: ["A. Analgesia and anti-inflammatory effect", "B. Antiplatelet therapy (irreversibly inhibits COX-1 in platelets → ↓TXA2 → ↓platelet aggregation) — prevention of MI, stroke, ACS", "C. Antipyretic use in children", "D. Treatment of gout"],
    answer: 1,
    explanation: "Low-dose aspirin (75–100 mg): irreversible inhibition of platelet COX-1 → ↓TXA2 synthesis → ↓platelet aggregation for platelet lifespan (7–10 days). Used in: CAD prophylaxis, ACS, post-MI, stroke prevention, AF. AVOID in children with fever (Reye's syndrome — hepatic encephalopathy). High dose aspirin: anti-inflammatory (>3 g/day).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ns_003",
    topic: "nsaids-analgesics",
    year: "FMGE Dec 2018",
    q: "Paracetamol (acetaminophen) overdose causes:",
    img: null,
    options: ["A. GI bleeding and renal failure as primary toxicity", "B. Hepatotoxicity (acute liver failure) due to toxic metabolite NAPQI (N-acetyl-p-benzoquinone imine) — treat with N-acetylcysteine (NAC)", "C. CNS depression and respiratory failure", "D. Renal tubular necrosis only"],
    answer: 1,
    explanation: "Paracetamol overdose: NAPQI (cytochrome P450 metabolite) depletes glutathione → hepatocellular necrosis → acute liver failure (centrilobular, zone 3 necrosis). Stages: 1st 24h (nausea/vomiting), 2nd day (hepatic tenderness, ↑LFTs), 3rd–4th day (peak liver damage). Treatment: NAC (N-acetylcysteine) replenishes glutathione — effective within 8–10 hours, beneficial even late.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ns_004",
    topic: "nsaids-analgesics",
    year: "FMGE Jun 2019",
    q: "Drug of choice for acute gout attack:",
    img: null,
    options: ["A. Allopurinol (started during acute attack)", "B. Colchicine OR indomethacin (NSAIDs) as first line; colchicine: inhibits tubulin polymerization → ↓leukocyte migration", "C. Probenecid", "D. Febuxostat"],
    answer: 1,
    explanation: "Acute gout: (1) NSAIDs (indomethacin DOC-traditional, naproxen — first choice if no contraindications), (2) Colchicine (inhibits tubulin → ↓neutrophil migration; effective if given within 24h; side effects: diarrhea, GI), (3) Corticosteroids (if NSAIDs/colchicine contraindicated). Do NOT start allopurinol/febuxostat during acute attack (prolongs it); wait 2–4 weeks.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ns_005",
    topic: "nsaids-analgesics",
    year: "FMGE Dec 2020",
    q: "Allopurinol mechanism of action for chronic gout:",
    img: null,
    options: ["A. Increases renal excretion of uric acid", "B. Inhibits xanthine oxidase → ↓conversion of hypoxanthine/xanthine to uric acid → ↓uric acid synthesis", "C. Blocks uric acid tubular reabsorption", "D. Converts uric acid to allantoin directly"],
    answer: 1,
    explanation: "Allopurinol (+ active metabolite oxypurinol): competitive inhibitor of xanthine oxidase → ↓uric acid production. Used for: chronic tophaceous gout, uric acid nephrolithiasis, tumor lysis syndrome prophylaxis, gout with renal insufficiency. Drug interactions: azathioprine/6-mercaptopurine (↑toxicity — allopurinol blocks their metabolism). Febuxostat = non-purine selective xanthine oxidase inhibitor.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ns_006",
    topic: "nsaids-analgesics",
    year: "FMGE Jun 2021",
    q: "Celecoxib (selective COX-2 inhibitor) advantages over non-selective NSAIDs:",
    img: null,
    options: ["A. No cardiovascular risk", "B. Less GI toxicity (ulcers, bleeding) — spares gastric COX-1 (protective prostaglandins preserved); NO antiplatelet effect (platelets have only COX-1)", "C. Better analgesic effect", "D. Safe in renal failure"],
    answer: 1,
    explanation: "COX-2 selective inhibitors: ↓GI adverse effects (less ulcers, less GI bleeding) because COX-1 (which protects gastric mucosa) is not inhibited. No antiplatelet effect (platelets express only COX-1). Disadvantages: ↑cardiovascular risk (↑TXA2:PGI2 ratio → prothrombotic state → MI/stroke — rofecoxib withdrawn). Not safe in renal failure. Avoid in sulfonamide allergy (celecoxib).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ns_007",
    topic: "nsaids-analgesics",
    year: "FMGE Dec 2021",
    q: "Salicylate poisoning causes which acid-base disturbance?",
    img: null,
    options: ["A. Metabolic alkalosis only", "B. Early: respiratory alkalosis (stimulates respiratory center → hyperventilation → ↓pCO₂); Late/severe: metabolic acidosis (uncouples oxidative phosphorylation)", "C. Respiratory acidosis only", "D. No acid-base disturbance"],
    answer: 1,
    explanation: "Salicylate (aspirin) toxicity: Direct stimulation of medullary respiratory center → hyperventilation → respiratory alkalosis (early). Then: uncoupling of oxidative phosphorylation + ↑organic acids → metabolic acidosis (late/severe). Together: mixed respiratory alkalosis + metabolic acidosis. Treatment: NaHCO₃ (alkalinizes urine → ↑ionized salicylate trapped in urine → ↑excretion), activated charcoal, dialysis if severe.",
    tags: ["PYQ", "high-yield"]
  },


  // ============ BATCH 4: OPIOIDS ============
  {
    id: "pharma_op_001",
    topic: "opioids",
    year: "FMGE Dec 2019",
    q: "Morphine mechanism of action and the classic triad of opioid toxicity:",
    img: null,
    options: ["A. Blocks NMDA receptors; triad: fever, seizures, hypertension", "B. Agonist at μ (mu), κ (kappa), δ (delta) opioid receptors; toxicity triad: pinpoint pupils (miosis) + respiratory depression + coma/unconsciousness", "C. Inhibits COX pathway; triad: GI bleeding, renal failure, bronchospasm", "D. Blocks serotonin reuptake; no specific triad"],
    answer: 1,
    explanation: "Opioids: act on μ (analgesia, euphoria, respiratory depression, constipation, miosis), κ (analgesia, sedation, dysphoria), δ (analgesia, mood). Morphine toxicity: miosis (pinpoint pupils — pathognomonic) + respiratory depression (↓RR, ↑pCO₂) + CNS depression. Treatment: naloxone (μ-antagonist) IV/IM/intranasal — short t½ so may need repeated doses.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_op_002",
    topic: "opioids",
    year: "FMGE Jun 2018",
    q: "Naloxone (opioid antagonist) mechanism and reversal:",
    img: null,
    options: ["A. It is a partial agonist at opioid receptors", "B. Competitive antagonist at μ, κ, δ receptors — reverses opioid-induced respiratory depression, sedation, miosis; short t½ (30–60 min) may require repeated dosing or infusion", "C. It metabolizes opioids faster in the liver", "D. It stimulates respiratory center directly without blocking opioids"],
    answer: 1,
    explanation: "Naloxone: pure competitive opioid receptor antagonist → rapidly reverses all opioid effects. t½ = 30–90 min (shorter than most opioids → re-narcotization can occur). Route: IV (fastest), IM, intranasal. Precipitates acute withdrawal in opioid-dependent patients. Naltrexone: oral, long-acting → used for opioid use disorder maintenance and alcohol use disorder.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_op_003",
    topic: "opioids",
    year: "FMGE Dec 2018",
    q: "Pethidine (meperidine) differs from morphine in that:",
    img: null,
    options: ["A. Pethidine causes constipation like morphine", "B. Pethidine's metabolite norpethidine → CNS excitation, seizures (accumulates in renal failure); also anticholinergic (tachycardia, dry mouth); contraindicated with MAOIs (serotonin syndrome)", "C. Pethidine is better for biliary colic", "D. Pethidine is safer in renal failure"],
    answer: 1,
    explanation: "Pethidine (meperidine): μ-agonist + anticholinergic effects → less smooth muscle spasm (less biliary/ureteric colic). Norpethidine (active metabolite): accumulates in renal failure → CNS excitation, tremors, seizures. MAOI interaction: serotonin syndrome (hyperthermia, rigidity, agitation) or opioid crisis (respiratory depression). Fentanyl: most commonly used in cancer pain + procedural sedation.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_op_004",
    topic: "opioids",
    year: "FMGE Jun 2019",
    q: "Codeine is a prodrug requiring conversion by:",
    img: null,
    options: ["A. MAO enzyme", "B. CYP2D6 → morphine (active); poor metabolizers: no analgesia; ultra-rapid metabolizers: toxicity; codeine is 1/10th as potent as morphine", "C. CYP3A4 directly to active form", "D. Glucuronidation only"],
    answer: 1,
    explanation: "Codeine: prodrug → O-demethylation by CYP2D6 → morphine (active). Weak μ-agonist. Poor metabolizers (7% Caucasians, CYP2D6 absent): ineffective analgesia. Ultra-rapid metabolizers: excess morphine → respiratory depression (danger in breastfeeding mothers — infant deaths reported). Used as antitussive (cough suppressant) + mild analgesia.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_op_005",
    topic: "opioids",
    year: "FMGE Dec 2020",
    q: "Tramadol mechanism of action:",
    img: null,
    options: ["A. Pure μ-opioid agonist", "B. Weak μ-agonist + inhibits serotonin and norepinephrine reuptake (SNRI activity) → synergistic analgesia; lower abuse potential than morphine", "C. NMDA antagonist only", "D. COX-2 selective inhibitor"],
    answer: 1,
    explanation: "Tramadol: dual mechanism — (1) weak μ-opioid receptor agonist, (2) inhibits serotonin and norepinephrine reuptake. Less constipation and respiratory depression than morphine. Risk: seizures (lowers seizure threshold), serotonin syndrome (with SSRIs, MAOIs). Not fully reversed by naloxone. Contraindicated in epilepsy and with MAOIs.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_op_006",
    topic: "opioids",
    year: "FMGE Jun 2021",
    q: "Buprenorphine is used for opioid use disorder because:",
    img: null,
    options: ["A. It is a full agonist with long half-life", "B. It is a partial μ-agonist + κ-antagonist with high receptor affinity → ceiling effect on respiratory depression; reduces cravings; long t½ (24–72h); ceiling effect improves safety", "C. It has no opioid activity", "D. It causes euphoria greater than heroin"],
    answer: 1,
    explanation: "Buprenorphine: partial μ-agonist (ceiling effect on respiratory depression = safer) + high receptor binding affinity (displaces full agonists). Used in: opioid use disorder (OUD) as sublingual/buccal formulation (alone or with naloxone = Suboxone to deter injection misuse), and severe pain (patches). Also used in opioid withdrawal.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ BATCH 4: ANTIEPILEPTICS ============
  {
    id: "pharma_ae_001",
    topic: "antiepileptics",
    year: "FMGE Dec 2019",
    q: "Drug of choice for status epilepticus (SE):",
    img: null,
    options: ["A. Phenytoin IV as first line", "B. IV benzodiazepine first (lorazepam or diazepam) → if fails: IV fosphenytoin/phenytoin or valproate or levetiracetam → if refractory: general anesthesia (propofol, midazolam, thiopentone)", "C. Oral carbamazepine immediately", "D. Phenobarbitone alone"],
    answer: 1,
    explanation: "Status epilepticus (SE) management stepwise: (1) IV lorazepam (0.1 mg/kg) or diazepam (0.15 mg/kg) — first line; (2) If persists: IV fosphenytoin (20 mg PE/kg) or valproate (40 mg/kg) or levetiracetam (60 mg/kg); (3) Refractory SE: IV midazolam infusion, propofol, or barbiturate coma. Lorazepam preferred (longer CNS duration).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ae_002",
    topic: "antiepileptics",
    year: "FMGE Jun 2018",
    q: "Phenytoin adverse effects include all EXCEPT:",
    img: null,
    options: ["A. Gingival hyperplasia", "B. Acute nephrotoxicity (not a recognized phenytoin adverse effect)", "C. Hirsutism, coarse facies, peripheral neuropathy", "D. Teratogenicity (fetal hydantoin syndrome — cleft palate, microcephaly)"],
    answer: 1,
    explanation: "Phenytoin toxicity: (1) Gingival hyperplasia (characteristic), (2) Hirsutism/coarse facial features, (3) Peripheral neuropathy, (4) CNS: nystagmus (first sign), ataxia, diplopia, slurred speech (dose-related), (5) Fetal hydantoin syndrome (teratogenic — growth retardation, cleft palate, CHD). Zero-order kinetics → small dose increase → large toxicity. No nephrotoxicity.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ae_003",
    topic: "antiepileptics",
    year: "FMGE Dec 2018",
    q: "Sodium valproate is the drug of choice for:",
    img: null,
    options: ["A. Only partial seizures", "B. Broad-spectrum AED — DOC for juvenile myoclonic epilepsy (JME) and generalized seizures (absence, myoclonic, tonic-clonic); also migraine prophylaxis and bipolar disorder", "C. Only trigeminal neuralgia", "D. Status epilepticus first-line"],
    answer: 1,
    explanation: "Sodium valproate: broad-spectrum (multiple mechanisms — Na+ channel + GABA enhancement + T-type Ca channel). DOC: juvenile myoclonic epilepsy (JME), generalized tonic-clonic seizures, absence seizures. Also: bipolar disorder, migraine prophylaxis. Adverse effects: weight gain, alopecia, tremor, hepatotoxicity (especially children <2 years), teratogenicity (neural tube defects — give folic acid), polycystic ovary syndrome.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ae_004",
    topic: "antiepileptics",
    year: "FMGE Jun 2019",
    q: "Ethosuximide is the drug of choice specifically for:",
    img: null,
    options: ["A. Tonic-clonic (grand mal) seizures", "B. Absence (petit mal) seizures — blocks T-type voltage-gated Ca channels in thalamic neurons", "C. Partial complex seizures", "D. Myoclonic seizures"],
    answer: 1,
    explanation: "Ethosuximide: specific for absence seizures only — blocks thalamic T-type Ca²⁺ channels → ↓burst firing responsible for 3 Hz spike-and-wave of absence epilepsy. DOC for pure absence epilepsy (without other seizure types). If absence + GTCS: use valproate (covers both). Ethosuximide has no effect on GTCS.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ae_005",
    topic: "antiepileptics",
    year: "FMGE Dec 2020",
    q: "Carbamazepine is drug of choice for which two conditions:",
    img: null,
    options: ["A. Absence seizures and status epilepticus", "B. Trigeminal neuralgia (DOC) and partial/focal epilepsy (including complex partial seizures)", "C. Juvenile myoclonic epilepsy and absence seizures", "D. Migraine and neuropathic pain only"],
    answer: 1,
    explanation: "Carbamazepine: Na+ channel blocker (like phenytoin). DOC for: (1) Trigeminal neuralgia (tic douloureux) — most effective, (2) Partial (focal) seizures. Also used in: bipolar disorder, neuropathic pain. Adverse effects: diplopia, ataxia, rash (Stevens-Johnson — especially HLA-B*1502 in Asians), SIADH (hyponatremia), agranulocytosis (rare). Enzyme inducer (CYP3A4).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ae_006",
    topic: "antiepileptics",
    year: "FMGE Jun 2021",
    q: "Levetiracetam advantage over older antiepileptics:",
    img: null,
    options: ["A. More drug interactions (enzyme inducer)", "B. Minimal drug interactions (not metabolized by CYP450, not an enzyme inducer/inhibitor); broad-spectrum; can be used in pregnancy (relatively safer)", "C. Requires TDM like phenytoin", "D. Only for absence seizures"],
    answer: 1,
    explanation: "Levetiracetam (LEV): binds SV2A (synaptic vesicle protein) → ↓neurotransmitter release. Broad-spectrum AED. Advantages: no significant drug interactions (not CYP450 substrate/inducer), renally eliminated, minimal teratogenicity compared to valproate/phenytoin, can be used in pregnancy with folate supplementation. Side effect: behavioral/mood changes (irritability, depression).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ae_007",
    topic: "antiepileptics",
    year: "FMGE Dec 2021",
    q: "Drug of choice for febrile seizures (acute management):",
    img: null,
    options: ["A. Oral phenytoin", "B. Rectal/IV diazepam for acute termination; no long-term prophylactic AED needed for simple febrile seizures", "C. IV phenobarbitone as first line", "D. Carbamazepine long-term"],
    answer: 1,
    explanation: "Febrile seizures: acute management — rectal diazepam (0.5 mg/kg) or IV lorazepam/diazepam. Simple febrile seizures (<15 min, generalized, once in 24h, age 6 months–5 years, no postictal abnormality): NO long-term AED prophylaxis. Complex febrile seizures (prolonged >15 min, focal, recurrent within 24h): consider prophylaxis if high-risk features.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ BATCH 4: ANTIPSYCHOTICS ============
  {
    id: "pharma_ap_001",
    topic: "antipsychotics-pharma",
    year: "FMGE Dec 2019",
    q: "Mechanism of action of typical antipsychotics (haloperidol, chlorpromazine):",
    img: null,
    options: ["A. Serotonin reuptake inhibition", "B. Dopamine D2 receptor blockade in mesolimbic pathway (antipsychotic effect); also blocks D2 in nigrostriatal (EPS), tuberoinfundibular (hyperprolactinemia), mesocortical pathways", "C. GABA-A receptor agonism", "D. Glutamate NMDA receptor blockade"],
    answer: 1,
    explanation: "Typical antipsychotics (First-generation/FGA): block D2 receptors. Efficacy linked to mesolimbic D2 blockade. D2 blockade in: nigrostriatal → EPS (acute dystonia, akathisia, parkinsonism, tardive dyskinesia); tuberoinfundibular → hyperprolactinemia (galactorrhea, amenorrhea, gynecomastia); mesocortical → worsens negative symptoms. Potency: haloperidol>fluphenazine>chlorpromazine.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ap_002",
    topic: "antipsychotics-pharma",
    year: "FMGE Jun 2018",
    q: "Extrapyramidal side effects (EPS) of antipsychotics include all, and acute dystonia is treated with:",
    img: null,
    options: ["A. Lorazepam only", "B. Acute dystonia (oculogyric crisis, torticollis): IV diphenhydramine or procyclidine (anticholinergics); akathisia: propranolol/benzodiazepines; parkinsonism: amantadine/anticholinergics; tardive dyskinesia: clonazepam, tetrabenazine", "C. Haloperidol dose increase", "D. Chlorpromazine switch only"],
    answer: 1,
    explanation: "EPS timeline: Acute dystonia (4 hours–4 days) — muscle spasms, oculogyric crisis → treat with IM benztropine or diphenhydramine. Akathisia (4 days) — motor restlessness. Drug-induced parkinsonism (4 weeks). Tardive dyskinesia (4 months+, prolonged use — repetitive involuntary movements, may be irreversible). Clozapine: least EPS. High-potency typical APs (haloperidol): most EPS.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ap_003",
    topic: "antipsychotics-pharma",
    year: "FMGE Dec 2018",
    q: "Clozapine is unique among antipsychotics because it:",
    img: null,
    options: ["A. Causes the most severe EPS and tardive dyskinesia", "B. Has least EPS + effective for treatment-resistant schizophrenia (TRS) — BUT causes agranulocytosis (1–2%) and myocarditis; requires mandatory ANC monitoring", "C. Is a typical (first-generation) antipsychotic", "D. Has no metabolic side effects"],
    answer: 1,
    explanation: "Clozapine (atypical): blocks D4 + multiple 5-HT receptors → minimal EPS, no tardive dyskinesia. DOC for TRS (treatment-resistant schizophrenia) and clozapine reduces suicidal behavior. Life-threatening risks: agranulocytosis (1–2% — mandatory WBC/ANC monitoring weekly × 6 months then biweekly), myocarditis, seizures. Also: weight gain, metabolic syndrome, hypersalivation, sedation.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ap_004",
    topic: "antipsychotics-pharma",
    year: "FMGE Jun 2019",
    q: "Neuroleptic malignant syndrome (NMS) — presentation and treatment:",
    img: null,
    options: ["A. Fever, diarrhea, and tremors only", "B. Hyperthermia + muscle rigidity (lead-pipe) + autonomic instability (fluctuating BP, tachycardia) + altered consciousness after antipsychotic use; treat: stop drug + dantrolene + bromocriptine", "C. QT prolongation only", "D. Rash and hypersensitivity"],
    answer: 1,
    explanation: "NMS: rare, life-threatening reaction to antipsychotics (haloperidol most common). 4 features: (1) Hyperthermia (>38°C), (2) Lead-pipe rigidity, (3) Autonomic instability, (4) Altered consciousness. Labs: ↑CK, leukocytosis, myoglobinuria. Treatment: STOP drug, supportive care, dantrolene (↓muscle rigidity), bromocriptine (dopaminergic). Differentiate from serotonin syndrome (more clonus, hyperreflexia).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ap_005",
    topic: "antipsychotics-pharma",
    year: "FMGE Dec 2020",
    q: "Risperidone mechanism and characteristic side effect at high doses:",
    img: null,
    options: ["A. Pure dopamine blocker with no serotonin activity", "B. D2 + 5-HT2A blocker (atypical); at high doses → D2 blockade dominates → EPS + hyperprolactinemia (most prolactin-elevating among atypicals)", "C. Only serotonin reuptake inhibitor", "D. No EPS at any dose"],
    answer: 1,
    explanation: "Risperidone (and paliperidone): D2 + 5-HT2A antagonist. At low doses: 5-HT2A blockade of dopamine release → less EPS. At high doses (>6 mg): D2 blockade predominates → EPS + highest prolactin elevation among atypicals (hyperprolactinemia: galactorrhea, amenorrhea, sexual dysfunction, osteoporosis). Available as long-acting injectable (LAI) — Risperdal Consta — for adherence.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ap_006",
    topic: "antipsychotics-pharma",
    year: "FMGE Jun 2021",
    q: "Antipsychotics known to cause maximum QTc prolongation:",
    img: null,
    options: ["A. Clozapine and risperidone", "B. Thioridazine (typical) and ziprasidone (atypical) — highest QTc prolongation risk; avoid in patients with pre-existing long QT or taking other QT-prolonging drugs", "C. Haloperidol has no QTc effect", "D. Aripiprazole causes maximum QTc"],
    answer: 1,
    explanation: "QTc prolongation by antipsychotics (risk of torsades de pointes): High risk: thioridazine > ziprasidone > haloperidol IV > pimozide. Lower risk: aripiprazole (partial D2 agonist — least QTc), clozapine, risperidone. Monitor ECG in high-risk patients. Thioridazine: pigmentary retinopathy + QTc → restricted use. Droperidol: high IV QTc risk.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ap_007",
    topic: "antipsychotics-pharma",
    year: "FMGE Dec 2021",
    q: "Metoclopramide (dopamine antagonist) is used as antiemetic because:",
    img: null,
    options: ["A. It is an opioid receptor agonist", "B. Blocks D2 receptors in the CTZ (chemoreceptor trigger zone) and enhances gastric motility (prokinetic); can cause EPS and tardive dyskinesia with prolonged use", "C. It blocks serotonin 5-HT3 receptors like ondansetron", "D. It acts solely in the GI tract with no CNS effect"],
    answer: 1,
    explanation: "Metoclopramide: D2 antagonist in CTZ (antiemetic) + prokinetic (↑LES tone, ↑gastric motility, ↑small bowel transit). Used in: nausea/vomiting, GERD, gastroparesis, migraine. EPS risk (dystonia, akathisia — especially in young patients and IV use), hyperprolactinemia, tardive dyskinesia (long-term). Ondansetron (5-HT3 blocker): preferred for chemotherapy-induced nausea.",
    tags: ["PYQ", "high-yield"]
  },


  // ============ BATCH 5: ANTIDEPRESSANTS & ANXIOLYTICS ============
  {
    id: "pharma_ad_001",
    topic: "antidepressants-anxiolytics",
    year: "FMGE Dec 2019",
    q: "SSRIs (selective serotonin reuptake inhibitors) mechanism and first-line uses:",
    img: null,
    options: ["A. Block serotonin synthesis in raphe nuclei", "B. Inhibit serotonin transporter (SERT) → ↑synaptic serotonin; DOC for: major depressive disorder, generalized anxiety, panic disorder, OCD, PTSD, social anxiety disorder", "C. Block serotonin 5-HT2 receptors directly", "D. Increase serotonin reuptake"],
    answer: 1,
    explanation: "SSRIs (fluoxetine, sertraline, escitalopram, paroxetine): block SERT → ↑synaptic 5-HT. First-line for MDD, anxiety disorders, OCD (higher doses), PTSD, bulimia. Adverse effects: sexual dysfunction (most common), nausea, insomnia, serotonin syndrome (with MAOIs — MUST washout 2 weeks before/after), QTc prolongation (citalopram). Safest in overdose among antidepressants.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ad_002",
    topic: "antidepressants-anxiolytics",
    year: "FMGE Jun 2018",
    q: "Tricyclic antidepressants (TCAs) — amitriptyline, imipramine — most dangerous adverse effect in overdose:",
    img: null,
    options: ["A. Hypokalemia and renal failure", "B. Cardiotoxicity: widening of QRS complex + ventricular arrhythmias (Na+ channel blockade) + hypotension; treat TCA overdose with NaHCO₃ (alkalinization)", "C. Hepatotoxicity as primary concern", "D. Serotonin syndrome only"],
    answer: 1,
    explanation: "TCA overdose triad: (1) Anticholinergic: dry mouth, urinary retention, constipation, tachycardia, mydriasis, hyperthermia; (2) CNS: seizures, coma; (3) Cardiovascular: QRS widening (Na+ channel blockade) → arrhythmias, QTc prolongation, hypotension. Treatment: IV NaHCO₃ (↑pH → displaces TCAs from Na+ channels + ↑protein binding). Most lethal in OD among antidepressants.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ad_003",
    topic: "antidepressants-anxiolytics",
    year: "FMGE Dec 2018",
    q: "MAO inhibitors (MAOIs — phenelzine, tranylcypromine) important dietary restriction:",
    img: null,
    options: ["A. Avoid all carbohydrates", "B. Avoid tyramine-rich foods (cheese, wine, pickled fish, liver, sausages) — tyramine not metabolized → releases norepinephrine → hypertensive crisis", "C. Avoid citrus fruits only", "D. No dietary restrictions needed"],
    answer: 1,
    explanation: "MAOIs inhibit MAO-A (↓metabolism of tyramine, serotonin, NE) and/or MAO-B. Tyramine in food normally degraded by intestinal/hepatic MAO-A; if inhibited → tyramine absorbed → massive NE release → severe hypertensive crisis (headache, stroke). Avoid: aged cheese, fermented foods, wine (especially red), cured meats, sauerkraut. Also: fatal interaction with opioids (meperidine → serotonin syndrome).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ad_004",
    topic: "antidepressants-anxiolytics",
    year: "FMGE Jun 2019",
    q: "Benzodiazepines mechanism and reversal agent:",
    img: null,
    options: ["A. Directly activate GABA-A chloride channels (GABA mimetics)", "B. Bind GABA-A receptor allosteric site → ↑frequency of Cl⁻ channel opening → enhanced GABA inhibition; reversal: flumazenil (competitive antagonist at benzodiazepine site)", "C. Block GABA reuptake like tiagabine", "D. Are prodrugs converted to GABA in the brain"],
    answer: 1,
    explanation: "Benzodiazepines (diazepam, lorazepam, midazolam, clonazepam): bind GABA-A benzodiazepine site → ↑Cl⁻ channel opening frequency (GABA already required). Barbiturates: ↑duration of Cl⁻ channel opening. Alcohol: ↑both frequency and duration. Flumazenil: competitive BZD antagonist (IV, short t½ → re-sedation possible). BZDs: anxiolytic, anticonvulsant, muscle relaxant, amnestic, hypnotic.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ad_005",
    topic: "antidepressants-anxiolytics",
    year: "FMGE Dec 2020",
    q: "Lithium is the drug of choice for:",
    img: null,
    options: ["A. Acute major depressive episode", "B. Bipolar disorder — maintenance (prevents manic and depressive episodes); narrow TI — requires serum level monitoring (therapeutic: 0.6–1.2 mEq/L)", "C. Generalized anxiety disorder", "D. Schizophrenia"],
    answer: 1,
    explanation: "Lithium: DOC for bipolar disorder prophylaxis (both manic + depressive episodes). Mechanism: ↓inositol phosphate signaling. Narrow TI (therapeutic: 0.6–1.2 mEq/L; toxic: >1.5 mEq/L). Toxicity: tremor, polyuria/polydipsia (nephrogenic DI — most common renal effect), hypothyroidism, cardiac arrhythmias. Drug interactions: NSAIDs, thiazides (↑Li levels → toxicity). Monitor TFTs, renal function, serum Li levels.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ad_006",
    topic: "antidepressants-anxiolytics",
    year: "FMGE Jun 2021",
    q: "Buspirone differs from benzodiazepines in that:",
    img: null,
    options: ["A. Buspirone has immediate onset like IV diazepam", "B. Buspirone is a partial 5-HT1A agonist — anxiolytic with NO sedation, no dependence, no withdrawal, no anticonvulsant effect; onset: 2–4 weeks (not PRN)", "C. Buspirone reverses all BZD effects", "D. Buspirone causes respiratory depression in overdose"],
    answer: 1,
    explanation: "Buspirone: partial 5-HT1A receptor agonist. Used for GAD only. Advantages: no sedation, no addiction/dependence, no tolerance, no withdrawal, no respiratory depression, no interaction with alcohol. Disadvantages: delayed onset (2–4 weeks), not useful for acute anxiety (PRN). Unlike BZDs: no cross-tolerance, no anticonvulsant, no muscle relaxant effects.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ad_007",
    topic: "antidepressants-anxiolytics",
    year: "FMGE Dec 2021",
    q: "Serotonin syndrome features and causative drugs:",
    img: null,
    options: ["A. Slow heart rate, hypothermia, miosis", "B. Hyperthermia + muscle hypertonicity/clonus + hyperreflexia + agitation + autonomic instability; caused by MAOI + SSRI or meperidine; treat with cyproheptadine (5-HT2 antagonist)", "C. Bradycardia, salivation, miosis (SLUDGE)", "D. Lead-pipe rigidity without clonus (NMS-like only)"],
    answer: 1,
    explanation: "Serotonin syndrome: excess serotonergic activity. Classic triad: cognitive changes (agitation, confusion) + neuromuscular abnormalities (tremor, clonus, hyperreflexia) + autonomic dysfunction (hyperthermia, tachycardia, diaphoresis). Causes: SSRI + MAOI, SSRI + tramadol/meperidine, SSRI + linezolid (MAO-A inhibitor). Treatment: cyproheptadine (5-HT2 antagonist), benzodiazepines, supportive. vs NMS: NMS has lead-pipe rigidity, ↑CK, no clonus.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ BATCH 5: CORTICOSTEROIDS ============
  {
    id: "pharma_cs_001",
    topic: "corticosteroids",
    year: "FMGE Dec 2019",
    q: "Mechanism of anti-inflammatory action of corticosteroids:",
    img: null,
    options: ["A. Inhibit COX-1 and COX-2 directly", "B. Induce lipocortin/annexin-1 → inhibits phospholipase A2 → ↓arachidonic acid release → ↓prostaglandins + leukotrienes; also ↓NF-κB → ↓cytokines", "C. Block histamine H1 receptors", "D. Block TNF-α receptors directly"],
    answer: 1,
    explanation: "Corticosteroids (glucocorticoids): bind intracellular GR → induce lipocortin-1 (annexin-1) → inhibits phospholipase A2 → ↓arachidonic acid → ↓all prostanoids + leukotrienes (broader than NSAIDs). Also: ↓NF-κB (↓IL-1, IL-6, TNF-α), ↓COX-2 expression, stabilize mast cell membranes, ↓leukocyte migration. Immunosuppressive (used in transplant, autoimmune).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_cs_002",
    topic: "corticosteroids",
    year: "FMGE Jun 2018",
    q: "Adverse effects of prolonged systemic corticosteroid use include:",
    img: null,
    options: ["A. Weight loss and hypoglycemia", "B. Cushing's syndrome features: central obesity, moon face, buffalo hump, striae, hypertension, hyperglycemia, osteoporosis, AVN femur, immunosuppression, cataracts, peptic ulcer", "C. Hypotension and bradycardia only", "D. Peripheral edema and hyponatremia only"],
    answer: 1,
    explanation: "Prolonged corticosteroid adverse effects: (1) Metabolic: hyperglycemia (steroid diabetes), hyperlipidemia, weight gain; (2) Cushingoid: central obesity, moon face, buffalo hump, striae, acne; (3) Musculoskeletal: osteoporosis, myopathy, AVN of femoral head; (4) Ophthalmologic: posterior subcapsular cataracts, glaucoma; (5) GI: peptic ulcer (NSAID co-use increases risk); (6) Adrenal suppression (abrupt withdrawal → Addisonian crisis).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_cs_003",
    topic: "corticosteroids",
    year: "FMGE Dec 2018",
    q: "Drug of choice for acute adrenal crisis (Addisonian crisis):",
    img: null,
    options: ["A. Oral hydrocortisone", "B. IV hydrocortisone 100 mg immediately + IV normal saline (0.9% NaCl) for volume resuscitation", "C. IM dexamethasone only", "D. Fludrocortisone alone"],
    answer: 1,
    explanation: "Adrenal crisis: life-threatening. Treatment: (1) IV hydrocortisone 100 mg stat (then 50–100 mg Q6–8h) — has glucocorticoid + mineralocorticoid activity; (2) IV 0.9% saline (1–2L rapidly) for hypotension; (3) IV glucose (if hypoglycemic); (4) Treat precipitating cause. Dexamethasone: no mineralocorticoid activity; if used, measure cortisol levels before giving. Long-term: hydrocortisone + fludrocortisone.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_cs_004",
    topic: "corticosteroids",
    year: "FMGE Jun 2019",
    q: "Relative potencies of glucocorticoids: which has highest anti-inflammatory potency?",
    img: null,
    options: ["A. Hydrocortisone (lowest potency among listed)", "B. Dexamethasone (25–30× hydrocortisone) > betamethasone (25×) > methylprednisolone (5×) > prednisolone (4×) > hydrocortisone (1×)", "C. Prednisolone has highest potency", "D. All corticosteroids have equal potency"],
    answer: 1,
    explanation: "Glucocorticoid potency (anti-inflammatory), relative to hydrocortisone = 1: Cortisol/hydrocortisone = 1; Prednisolone = 4; Methylprednisolone = 5; Triamcinolone = 5; Dexamethasone = 25–30; Betamethasone = 25–30. Dexamethasone: no mineralocorticoid activity, longest acting → used for cerebral edema, spinal cord injury, antenatal lung maturation, croup. Fludrocortisone: pure mineralocorticoid used in Addison's disease.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_cs_005",
    topic: "corticosteroids",
    year: "FMGE Dec 2020",
    q: "Inhaled corticosteroids (ICS — budesonide, fluticasone) in asthma — local adverse effects include:",
    img: null,
    options: ["A. Systemic osteoporosis as the main concern", "B. Oropharyngeal candidiasis (thrush) and hoarseness (dysphonia) — rinse mouth after each use to prevent; use spacer to reduce oropharyngeal deposition", "C. Adrenal suppression with standard doses", "D. Cataract formation at standard doses"],
    answer: 1,
    explanation: "ICS local adverse effects: oropharyngeal candidiasis (oral thrush — wash mouth/gargle after use), dysphonia (hoarseness — affects vocal cords). Systemic effects rare at standard doses but possible at high doses: adrenal suppression, growth retardation in children, osteoporosis. Use spacer/large-volume spacer → ↓oropharyngeal deposition → ↓local side effects.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_cs_006",
    topic: "corticosteroids",
    year: "FMGE Jun 2021",
    q: "Mifepristone (RU-486) mechanism in medical abortion:",
    img: null,
    options: ["A. Progesterone agonist", "B. Competitive antagonist at progesterone receptors (+ glucocorticoid receptor antagonist) → ↓progesterone support → endometrial decidualization inhibited + cervical ripening; followed by misoprostol (PGE1) for uterine contractions", "C. COX-2 inhibitor causing uterine contractions", "D. Oxytocin receptor agonist"],
    answer: 1,
    explanation: "Mifepristone: antiprogestogen (+ antiglucocorticoid) — blocks progesterone receptors → destabilizes decidua, sensitizes uterus to prostaglandins, induces cervical ripening. Used with misoprostol (PGE1 analogue) for: medical abortion (up to 9 weeks), missed/incomplete abortion, cervical priming before surgical termination. Also used for: Cushing's syndrome (antiglucocorticoid), uterine fibroids.",
    tags: ["PYQ"]
  },

  // ============ BATCH 5: ANTICOAGULANTS ============
  {
    id: "pharma_ac_001",
    topic: "anticoagulants",
    year: "FMGE Dec 2019",
    q: "Heparin mechanism of action and monitoring parameter:",
    img: null,
    options: ["A. Inhibits vitamin K epoxide reductase; monitored by PT/INR", "B. Activates antithrombin III → potentiates inactivation of thrombin (IIa) and factor Xa (and IXa, XIa); monitored by aPTT (therapeutic: 60–90 sec or 1.5–2.5× control)", "C. Directly inhibits thrombin; no monitoring needed", "D. Inhibits platelet ADP receptors"],
    answer: 1,
    explanation: "Unfractionated heparin (UFH): binds AT-III → conformational change → AT-III rapidly inactivates thrombin (IIa) and Xa. Requires at least 18 saccharide units to bridge AT-III to thrombin; shorter heparin (LMWH — fondaparinux) only inhibits Xa. Monitor: aPTT (UFH), anti-Xa levels (LMWH/fondaparinux). Reversal: protamine sulfate. Adverse: HIT (heparin-induced thrombocytopenia — type II, IgG against PF4-heparin).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ac_002",
    topic: "anticoagulants",
    year: "FMGE Jun 2018",
    q: "Warfarin mechanism and monitoring:",
    img: null,
    options: ["A. Activates antithrombin III", "B. Inhibits vitamin K epoxide reductase (VKOR) → ↓regeneration of vitamin K → ↓γ-carboxylation of factors II, VII, IX, X (and protein C, S); monitored by PT/INR (therapeutic: 2.0–3.0)", "C. Directly inhibits thrombin (dabigatran)", "D. Inhibits thromboxane A2"],
    answer: 1,
    explanation: "Warfarin: inhibits VKOR → ↓reduced vitamin K (KH2) → ↓activation of vitamin K-dependent clotting factors (II, VII, IX, X) and anticoagulant proteins C and S. Initial effect: ↓protein C (procoagulant) → warfarin-induced skin necrosis (cover with heparin). Monitor PT/INR. Reversal: vitamin K (slow 12–24h) or FFP/prothrombin complex concentrate (emergency). Antidote: Vitamin K (phytomenadione).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ac_003",
    topic: "anticoagulants",
    year: "FMGE Dec 2018",
    q: "DOACs (direct oral anticoagulants) compared to warfarin:",
    img: null,
    options: ["A. All DOACs require INR monitoring", "B. DOACs have predictable pharmacokinetics (no INR monitoring), fewer drug-food interactions; direct Xa inhibitors: rivaroxaban, apixaban, edoxaban; direct thrombin inhibitor: dabigatran; reversal: idarucizumab (dabigatran), andexanet alfa (Xa inhibitors)", "C. DOACs have more drug-food interactions than warfarin", "D. DOACs are only for prevention, not treatment of DVT/PE"],
    answer: 1,
    explanation: "DOACs advantages: fixed dosing (no INR monitoring), rapid onset, fewer interactions. Dabigatran: direct thrombin inhibitor; reversal = idarucizumab (Praxbind). Rivaroxaban/apixaban: factor Xa inhibitors; reversal = andexanet alfa. All DOACs: avoid in severe renal impairment (dabigatran especially), not yet recommended in valvular AF (mitral stenosis) or mechanical heart valves (use warfarin).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ac_004",
    topic: "anticoagulants",
    year: "FMGE Jun 2019",
    q: "Heparin-induced thrombocytopenia (HIT) type II — pathogenesis and management:",
    img: null,
    options: ["A. Direct heparin toxicity on platelet production", "B. IgG antibodies against PF4-heparin complexes → activate platelets → ↑thrombosis (paradoxically) + thrombocytopenia; stop all heparin immediately + switch to non-heparin anticoagulant (argatroban, fondaparinux)", "C. Immune complex deposition in kidneys causing thrombocytopenia", "D. Antiplatelet antibodies from contaminated heparin"],
    answer: 1,
    explanation: "HIT type II: Immune-mediated — IgG binds PF4-heparin → activates platelets → thrombosis (venous/arterial). Paradox: thrombocytopenia + thrombosis (not bleeding). Onset: 5–10 days after starting heparin. Management: STOP heparin (including LMWH) immediately; start non-heparin anticoagulant (argatroban, bivalirudin, fondaparinux); do NOT give platelets (worsens thrombosis). Transition to warfarin after platelets recover.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ac_005",
    topic: "anticoagulants",
    year: "FMGE Dec 2020",
    q: "Streptokinase (thrombolytic) mechanism and use in STEMI:",
    img: null,
    options: ["A. Directly cleaves fibrin in clots", "B. Combines with plasminogen → plasminogen-streptokinase complex activates other plasminogen molecules → plasmin → fibrinolysis (dissolves clot); used when primary PCI not available within 120 min of STEMI onset", "C. Inhibits thrombin to prevent new clot formation", "D. Activates tissue factor pathway inhibitor"],
    answer: 1,
    explanation: "Thrombolytics (fibrinolytics): streptokinase (non-selective, antigenic — cannot reuse), alteplase (tPA — fibrin-specific, preferred in stroke). Used in: STEMI (when PCI not available, within 12 hours, ideally <3h), massive PE with hemodynamic compromise, acute ischemic stroke (alteplase within 4.5h). Contraindications: recent surgery (<2 weeks), stroke (<3 months), active bleeding, severe HTN.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ac_006",
    topic: "anticoagulants",
    year: "FMGE Jun 2021",
    q: "Anticoagulant of choice during pregnancy:",
    img: null,
    options: ["A. Warfarin throughout pregnancy", "B. Low molecular weight heparin (LMWH — enoxaparin) throughout pregnancy; warfarin contraindicated in 1st trimester (warfarin embryopathy) and near term (neonatal bleeding)", "C. Dabigatran (oral DOAC)", "D. Aspirin alone"],
    answer: 1,
    explanation: "Pregnancy anticoagulation: LMWH (enoxaparin) = DOC. Heparin/LMWH do NOT cross the placenta. Warfarin contraindications in pregnancy: 1st trimester (warfarin embryopathy: nasal hypoplasia, stippled epiphyses, CNS abnormalities), 3rd trimester (neonatal bleeding risk). Warfarin may be used in 2nd trimester for mechanical heart valves if benefit>risk. DOACs: contraindicated in pregnancy (limited safety data).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ac_007",
    topic: "anticoagulants",
    year: "FMGE Dec 2021",
    q: "Clopidogrel mechanism and use:",
    img: null,
    options: ["A. COX-1 inhibitor (like aspirin)", "B. Prodrug (requires CYP2C19 activation) → irreversibly blocks P2Y12 ADP receptors on platelets → ↓platelet aggregation; used in ACS, post-PCI stenting (dual antiplatelet with aspirin)", "C. GPIIb/IIIa receptor blocker like abciximab", "D. Thromboxane receptor antagonist"],
    answer: 1,
    explanation: "Clopidogrel (thienopyridine): prodrug activated by CYP2C19 → active thiol metabolite → irreversible P2Y12 (ADP receptor) blockade → ↓platelet aggregation for platelet's lifespan (7–10 days). Used with aspirin (DAPT) in: ACS, post-coronary stent. Poor metabolizers (CYP2C19 polymorphism — 30% of Asians): ↓effect → ticagrelor or prasugrel preferred. Stop 5 days before surgery.",
    tags: ["PYQ", "high-yield"]
  },


  // ============ BATCH 6 (FINAL): ANTIDIABETICS ============
  {
    id: "pharma_di_001",
    topic: "antidiabetics",
    year: "FMGE Dec 2019",
    q: "Metformin mechanism of action and key advantage in type 2 diabetes:",
    img: null,
    options: ["A. Stimulates pancreatic beta cells to release insulin", "B. Activates AMPK → inhibits hepatic gluconeogenesis (main mechanism) + ↑peripheral insulin sensitivity; does NOT cause hypoglycemia; promotes weight loss/neutrality; reduces cardiovascular mortality (UKPDS)", "C. Inhibits alpha-glucosidase in intestines", "D. Blocks SGLT-2 in proximal tubule"],
    answer: 1,
    explanation: "Metformin (biguanide): activates AMP kinase → ↓hepatic glucose production (gluconeogenesis) = main mechanism. Benefits: no hypoglycemia, weight-neutral/loss, ↓CV mortality (UKPDS), inexpensive. Contraindications: eGFR <30 mL/min (lactic acidosis risk), IV contrast within 48h, acute illness, liver failure, alcoholism. Side effects: GI (diarrhea, nausea — take with food), lactic acidosis (rare), B12 deficiency (long-term).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_di_002",
    topic: "antidiabetics",
    year: "FMGE Jun 2018",
    q: "Sulfonylureas (glibenclamide, glipizide) mechanism and main adverse effect:",
    img: null,
    options: ["A. Inhibit alpha-glucosidase; main adverse effect: GI flatulence", "B. Block ATP-sensitive K+ channels on beta cells → membrane depolarization → Ca²⁺ influx → insulin release; main adverse effect: hypoglycemia (especially in elderly and renal failure)", "C. Sensitize peripheral tissues to insulin; main adverse effect: weight gain + edema", "D. Inhibit DPP-4; main adverse effect: pancreatitis"],
    answer: 1,
    explanation: "Sulfonylureas: close KATP channels → depolarize beta cell → ↑Ca²⁺ → insulin secretion (insulin secretagogues). Risk of hypoglycemia (insulin released even without food). Second-generation (glipizide, glimepiride) > first-generation (tolbutamide, chlorpropamide). Chlorpropamide: longest t½, causes SIADH (hyponatremia), disulfiram-like reaction. Avoid in: renal failure (glibenclamide accumulates), elderly.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_di_003",
    topic: "antidiabetics",
    year: "FMGE Dec 2018",
    q: "Insulin types — which insulin has longest duration of action?",
    img: null,
    options: ["A. Regular insulin (short-acting, 6–8 h)", "B. Glargine (Lantus) — peakless, 24h duration; insulin detemir also long-acting (16–24h); both mimic basal insulin secretion", "C. NPH insulin (intermediate, 12–16 h peak at 4–8h)", "D. Aspart/lispro (rapid-acting, 3–5h)"],
    answer: 1,
    explanation: "Insulin duration: Ultra-rapid (lispro, aspart, glulisine): onset 15 min, peak 1–2h, duration 3–5h. Short-acting (regular): onset 30–60 min, peak 2–4h, duration 6–8h. Intermediate (NPH/lente): peak 4–8h, duration 12–16h. Long-acting (glargine, detemir): peakless/flat profile, 16–24h (glargine = 24h, cannot mix with other insulins). Degludec: ultra-long-acting (>42h).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_di_004",
    topic: "antidiabetics",
    year: "FMGE Jun 2019",
    q: "SGLT-2 inhibitors (dapagliflozin, empagliflozin) mechanism and cardiovascular benefit:",
    img: null,
    options: ["A. Stimulate insulin secretion from beta cells", "B. Block SGLT-2 in proximal renal tubule → ↑glucosuria → ↓blood glucose (independent of insulin); reduce HF hospitalization, renal progression, and CV mortality in established CVD (EMPA-REG, CANVAS trials)", "C. Increase GLP-1 levels by inhibiting DPP-4", "D. Activate PPAR-γ receptors"],
    answer: 1,
    explanation: "SGLT-2 inhibitors: block glucose-Na cotransporter in proximal tubule → ↓glucose reabsorption → ↑urinary glucose excretion. Benefits: weight loss, ↓BP, ↓HF hospitalization (independent of diabetes), ↓eGFR decline (renal protection). Adverse effects: urinary tract infections, genital mycotic infections (glucosuria), euglycemic DKA (measure ketones even if glucose <250). Also: Fournier's gangrene (rare but serious).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_di_005",
    topic: "antidiabetics",
    year: "FMGE Dec 2020",
    q: "GLP-1 receptor agonists (liraglutide, semaglutide) key benefits:",
    img: null,
    options: ["A. Cause weight gain and increase appetite", "B. Stimulate insulin secretion in glucose-dependent manner + ↓glucagon + delay gastric emptying + ↑satiety → weight loss; reduce CV events (LEADER, SUSTAIN-6 trials); injectable (once-daily or weekly)", "C. Inhibit GLP-1 breakdown like DPP-4 inhibitors", "D. Only useful in type 1 diabetes"],
    answer: 1,
    explanation: "GLP-1 receptor agonists: activate GLP-1R → glucose-dependent insulin secretion (↓hypoglycemia risk), ↓glucagon, delay gastric emptying, suppress appetite. Benefits: significant weight loss (especially semaglutide/tirzepatide), CV risk reduction (liraglutide, semaglutide). Side effects: nausea/vomiting (common, improves over time), pancreatitis risk, contraindicated in personal/family history of MTC (medullary thyroid cancer) or MEN2.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_di_006",
    topic: "antidiabetics",
    year: "FMGE Jun 2021",
    q: "Thiazolidinediones (TZDs — pioglitazone) mechanism and adverse effects:",
    img: null,
    options: ["A. Stimulate insulin secretion", "B. Activate PPAR-γ → ↑insulin sensitivity in adipose tissue, muscle, liver; adverse effects: weight gain, edema (↑fluid retention), heart failure exacerbation, bone fractures (women), bladder cancer risk (pioglitazone)", "C. Inhibit hepatic gluconeogenesis like metformin", "D. Increase urinary glucose excretion"],
    answer: 1,
    explanation: "TZDs (pioglitazone, rosiglitazone): activate nuclear PPAR-γ → ↑insulin-sensitizing genes → ↑GLUT4 expression → ↑insulin-stimulated glucose uptake. No hypoglycemia as monotherapy. Adverse: fluid retention (↑heart failure risk — contraindicated in HF), weight gain, macular edema (pioglitazone), osteoporosis/fractures. Rosiglitazone: ↑MI risk (withdrawn in many countries). Pioglitazone: possible bladder cancer risk.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_di_007",
    topic: "antidiabetics",
    year: "FMGE Dec 2021",
    q: "DPP-4 inhibitors (sitagliptin, vildagliptin — 'gliptins') mechanism:",
    img: null,
    options: ["A. Block GLP-1 receptors", "B. Inhibit DPP-4 (dipeptidyl peptidase-4) → ↑endogenous GLP-1 and GIP → glucose-dependent insulin secretion + ↓glucagon; weight-neutral; low hypoglycemia risk; well-tolerated", "C. Stimulate GLP-1 release from L-cells", "D. Block glucagon receptors"],
    answer: 1,
    explanation: "DPP-4 inhibitors: DPP-4 normally degrades GLP-1 and GIP (incretin hormones). Inhibiting DPP-4 → ↑GLP-1 and GIP → glucose-dependent insulin secretion. Advantages: weight-neutral, low hypoglycemia, oral, well-tolerated. Side effects: nasopharyngitis, pancreatitis (rare). Saxagliptin and alogliptin: ↑HF hospitalization risk (avoid in HF). Urinary infections less than SGLT-2 inhibitors.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_di_008",
    topic: "antidiabetics",
    year: "FMGE Jun 2020",
    q: "Drug of choice for gestational diabetes when diet fails:",
    img: null,
    options: ["A. Metformin (category B but insulin preferred)", "B. Insulin (the only proven safe pharmacotherapy for gestational diabetes; metformin is used in some centers but insulin preferred due to safety data)", "C. Glipizide", "D. Glyburide (glibenclamide) — crosses placenta, neonatal hypoglycemia risk"],
    answer: 1,
    explanation: "Gestational diabetes: first-line = dietary modification + exercise. If pharmacotherapy needed: insulin is DOC (does not cross placenta in significant amounts, proven safe, most experience). Metformin: used in some centers (MFMU trial — similar outcomes but crosses placenta; considered acceptable alternative). Glibenclamide: crosses placenta → neonatal hypoglycemia. Oral agents not universally approved in GDM.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ BATCH 6 (FINAL): CHEMOTHERAPY ============
  {
    id: "pharma_ch_001",
    topic: "chemotherapy",
    year: "FMGE Dec 2019",
    q: "Alkylating agents (cyclophosphamide) mechanism and dose-limiting toxicity:",
    img: null,
    options: ["A. Inhibit topoisomerase II; toxicity: cardiotoxicity", "B. Cross-link DNA strands (alkylation of N7-guanine) → ↓DNA replication → cell death; dose-limiting toxicity: hemorrhagic cystitis (acrolein metabolite — prevent with mesna + hydration)", "C. Inhibit microtubule assembly; toxicity: peripheral neuropathy", "D. Inhibit folate metabolism; toxicity: mucositis"],
    answer: 1,
    explanation: "Cyclophosphamide: prodrug (activated by CYP450) → alkylating agent → DNA cross-linking. Toxicities: (1) Hemorrhagic cystitis — acrolein metabolite irritates bladder; prevent with MESNA (2-mercaptoethane sulfonate Na) and vigorous IV hydration; (2) Myelosuppression; (3) Alopecia; (4) SIADH; (5) Secondary malignancy (AML, bladder cancer); (6) Gonadal toxicity. Used in: lymphomas, breast cancer, nephrotic syndrome.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ch_002",
    topic: "chemotherapy",
    year: "FMGE Jun 2018",
    q: "Methotrexate (antimetabolite) mechanism and rescue with:",
    img: null,
    options: ["A. Intercalates into DNA; rescue with dexrazoxane", "B. Inhibits DHFR (dihydrofolate reductase) → ↓THF → ↓thymidylate + purine synthesis; rescue from toxicity: leucovorin (folinic acid/5-formyl-THF)", "C. Inhibits topoisomerase I; no rescue needed", "D. Cross-links DNA; rescue with mesna"],
    answer: 1,
    explanation: "Methotrexate: competitive inhibitor of DHFR → ↓THF → ↓dTMP synthesis → inhibits DNA synthesis. Toxicities: myelosuppression, mucositis/stomatitis, hepatotoxicity (fibrosis with long-term use), nephrotoxicity, teratogenicity. Leucovorin rescue: given 24h after high-dose MTX → 'rescues' normal cells (cancer cells less able to take up leucovorin). Monitor MTX levels + renal function. Folate supplementation given with low-dose MTX (RA, psoriasis).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ch_003",
    topic: "chemotherapy",
    year: "FMGE Dec 2018",
    q: "Anthracyclines (doxorubicin) dose-limiting toxicity:",
    img: null,
    options: ["A. Nephrotoxicity (renal failure)", "B. Cardiotoxicity (dilated cardiomyopathy) — cumulative dose-dependent (doxorubicin >550 mg/m²); also alopecia, myelosuppression, red urine (harmless)", "C. Peripheral neuropathy", "D. Pulmonary fibrosis"],
    answer: 1,
    explanation: "Anthracyclines (doxorubicin, daunorubicin, epirubicin): intercalate DNA + inhibit topoisomerase II + generate free radicals. Dose-limiting: cumulative cardiomyopathy (↓LVEF, dilated cardiomyopathy — monitor ECHO). Maximum lifetime dose: doxorubicin ~550 mg/m². Prevention: dexrazoxane (iron chelator, cardioprotective — used when dose limit approached). Also: red/orange urine (harmless), myelosuppression, mucositis, alopecia, vesicant.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ch_004",
    topic: "chemotherapy",
    year: "FMGE Jun 2019",
    q: "Bleomycin main adverse effect unique among chemotherapy agents:",
    img: null,
    options: ["A. Cardiotoxicity", "B. Pulmonary fibrosis (dose-limiting, cumulative) + Raynaud's phenomenon; little myelosuppression (used in regimens with marrow-depressing agents)", "C. Hemorrhagic cystitis", "D. Nephrotoxicity and ototoxicity"],
    answer: 1,
    explanation: "Bleomycin: causes DNA strand breaks. Minimal myelosuppression. Dose-limiting toxicity: pulmonary fibrosis (cumulative dose >400 units; check PFTs and DLCO regularly). Also: hypersensitivity reactions (febrile, anaphylaxis in lymphoma — test dose), Raynaud's phenomenon, skin hyperpigmentation/blistering. Used in: ABVD (Hodgkin lymphoma), BEP (testicular cancer).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ch_005",
    topic: "chemotherapy",
    year: "FMGE Dec 2020",
    q: "Imatinib (Gleevec) mechanism — targeted therapy for CML:",
    img: null,
    options: ["A. Cytotoxic alkylating agent", "B. Selective BCR-ABL tyrosine kinase inhibitor (TKI) → blocks constitutively active BCR-ABL oncoprotein in CML (Philadelphia chromosome t(9;22)); also inhibits c-Kit (GIST), PDGFR", "C. Monoclonal antibody against CD20", "D. Proteasome inhibitor"],
    answer: 1,
    explanation: "Imatinib (TKI): revolutionized CML treatment (targeted therapy). BCR-ABL is constitutively active TK (Philadelphia chromosome) → drives CML. Imatinib binds ATP-binding site of BCR-ABL → blocks phosphorylation → tumor cell death. Also active in: GIST (c-Kit mutation), hypereosinophilic syndrome (PDGFR). Side effects: edema (periorbital), nausea, muscle cramps, ↑LFTs, myelosuppression.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ch_006",
    topic: "chemotherapy",
    year: "FMGE Jun 2021",
    q: "Cisplatin toxicity profile (platinum-based agent):",
    img: null,
    options: ["A. Cardiotoxicity and pulmonary fibrosis", "B. Nephrotoxicity (dose-limiting — proximal tubule damage; prevent with IV saline hydration + amifostine) + ototoxicity (sensorineural hearing loss) + severe nausea/vomiting (most emetogenic) + peripheral neuropathy", "C. Hemorrhagic cystitis", "D. Only myelosuppression"],
    answer: 1,
    explanation: "Cisplatin (platinum compound): forms intrastrand DNA cross-links → apoptosis. Toxicities: (1) Nephrotoxicity — most dose-limiting; prevent with aggressive IV hydration (3–4L NS before/after) and amifostine; (2) Ototoxicity — sensorineural, high-frequency hearing loss (cumulative); (3) Neurotoxicity — peripheral neuropathy, autonomic neuropathy; (4) Most emetogenic (5-HT3 antagonist + dexamethasone + NK1 antagonist for prophylaxis). Carboplatin: less nephro/oto/neuro-toxic but more myelosuppressive.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ BATCH 6 (FINAL): DRUG INTERACTIONS & TOXICOLOGY ============
  {
    id: "pharma_dit_001",
    topic: "drug-interactions-toxicology",
    year: "FMGE Dec 2019",
    q: "Disulfiram (Antabuse) reaction is seen when combined with:",
    img: null,
    options: ["A. Antibiotics only", "B. Ethanol — disulfiram inhibits aldehyde dehydrogenase → ↑acetaldehyde → flushing, nausea, palpitations, vomiting; also seen with metronidazole, tinidazole, chlorpropamide, griseofulvin + alcohol", "C. Opioids only", "D. Benzodiazepines"],
    answer: 1,
    explanation: "Disulfiram-like reaction: inhibits acetaldehyde dehydrogenase → acetaldehyde accumulates after alcohol → 'flushing syndrome' (flushing, tachycardia, nausea, vomiting, headache, hypotension). Disulfiram is used to treat alcohol use disorder (aversion therapy). Other drugs causing same reaction with alcohol: metronidazole, tinidazole, chlorpropamide, procarbazine, cefoperazone, cefamandole, griseofulvin.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_dit_002",
    topic: "drug-interactions-toxicology",
    year: "FMGE Jun 2018",
    q: "Drug that potentiates warfarin effect (↑INR → bleeding risk) through CYP inhibition:",
    img: null,
    options: ["A. Rifampicin (enzyme inducer — DECREASES warfarin effect)", "B. Amiodarone, fluconazole, metronidazole, cimetidine — inhibit CYP2C9 (warfarin metabolism) → ↑warfarin levels → ↑INR → bleeding", "C. Phenytoin always decreases warfarin effect", "D. Carbamazepine increases warfarin levels"],
    answer: 1,
    explanation: "Warfarin interactions — ↑INR (↑bleeding risk): CYP2C9 inhibitors: amiodarone (most potent), fluconazole, metronidazole, omeprazole, ciprofloxacin, cimetidine. Also: protein displacement (aspirin, NSAIDs). Reduce INR (↓warfarin effect): enzyme inducers (rifampicin, carbamazepine, phenytoin, barbiturates) + vitamin K-rich foods (spinach, kale). Regular INR monitoring essential.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_dit_003",
    topic: "drug-interactions-toxicology",
    year: "FMGE Dec 2018",
    q: "Carbon monoxide (CO) poisoning — mechanism and treatment:",
    img: null,
    options: ["A. Methemoglobin formation; treat with methylene blue", "B. CO binds hemoglobin 200× more avidly than O₂ → carboxyhemoglobin (HbCO) → ↓O₂ delivery + ↑O₂-Hb affinity (left shift) → tissue hypoxia despite normal PaO₂; treat with 100% O₂ (hyperbaric O₂ for severe cases)", "C. Cholinergic crisis; treat with atropine", "D. Cyanide poisoning; treat with hydroxocobalamin"],
    answer: 1,
    explanation: "CO poisoning: cherry-red skin (HbCO), headache (most common symptom), nausea, confusion, coma. SpO₂ falsely normal (pulse oximetry cannot distinguish HbCO from HbO₂). Diagnose: co-oximetry (HbCO level). Treatment: 100% normobaric O₂ (reduces HbCO t½ from 4–5h to 60–90 min) or hyperbaric O₂ (reduces t½ to 20 min — for severe CO poisoning: coma, cardiac involvement, HbCO >25%).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_dit_004",
    topic: "drug-interactions-toxicology",
    year: "FMGE Jun 2019",
    q: "Lead (Pb) poisoning — chelation therapy drug of choice in children with high blood lead levels:",
    img: null,
    options: ["A. Desferrioxamine (for iron)", "B. DMSA (succimer — 2,3-dimercaptosuccinic acid) — oral chelator for mild-moderate lead poisoning in children; EDTA (CaNa₂EDTA) + BAL (dimercaprol) for severe encephalopathy", "C. N-acetylcysteine", "D. Flumazenil"],
    answer: 1,
    explanation: "Lead toxicity: children — encephalopathy (↑ICP), basophilic stippling of RBCs, anemia (inhibits δ-ALA dehydratase + ferrochelatase → ↓heme synthesis), lead lines on X-ray (dense metaphyseal bands), colic, wrist/foot drop (adults). Chelation: DMSA (succimer): oral, first-line for BLL 45–70 μg/dL in children. Severe/encephalopathy: IV EDTA + IM BAL (dimercaprol) together. DMSA also for mercury/arsenic poisoning.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_dit_005",
    topic: "drug-interactions-toxicology",
    year: "FMGE Dec 2020",
    q: "Benzodiazepine and barbiturate toxicity differ in that:",
    img: null,
    options: ["A. BZDs are more lethal in overdose than barbiturates", "B. Barbiturate overdose is more life-threatening (↑Cl⁻ channel opening duration → profound CNS depression, respiratory failure); BZDs are rarely lethal alone but potentiate CNS depressants (alcohol, opioids); BZD reversal: flumazenil; no specific barbiturate reversal agent", "C. Both have specific reversal agents", "D. Barbiturates have less respiratory depression risk"],
    answer: 1,
    explanation: "Barbiturates: ↑duration of GABA-A Cl⁻ channel opening (can activate without GABA at high doses) → steep dose-response curve → narrow safety margin → lethal in OD. BZDs: ↑frequency only (need GABA) → ceiling effect on respiratory depression (relatively safer). Flumazenil reverses BZDs. No specific barbiturate antidote (supportive). Alcohol + BZD/barbiturate: additive CNS depression.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_dit_006",
    topic: "drug-interactions-toxicology",
    year: "FMGE Jun 2021",
    q: "Iron overdose management — chelation with:",
    img: null,
    options: ["A. DMSA (succimer)", "B. Desferrioxamine (deferoxamine) IV — forms ferrioxamine (water-soluble, renally excreted); given for serum iron >500 μg/dL or symptomatic poisoning; also oral deferasirox for chronic iron overload", "C. Penicillamine", "D. EDTA"],
    answer: 1,
    explanation: "Iron poisoning phases: (1) GI irritation (0–6h): nausea, vomiting, bloody diarrhea; (2) Latent period (6–24h): apparent recovery; (3) Hepatotoxicity + metabolic acidosis (12–48h); (4) GI scarring (2–5 weeks). Treatment: desferrioxamine (deferoxamine) — specific chelator for Fe³⁺ → ferrioxamine excreted renally (orange-red urine = confirms treatment efficacy). Oral activated charcoal: does NOT bind iron. Whole bowel irrigation for large ingestions.",
    tags: ["PYQ", "high-yield"]
  },


  {
    id: "pharma_ans_010",
    topic: "ans-pharmacology",
    year: "FMGE Dec 2022",
    q: "Prazosin causes reflex tachycardia less than non-selective alpha-blockers because:",
    img: null,
    options: ["A. It is selective α1 blocker — does not block presynaptic α2 (which normally inhibits NE release)", "B. It has beta-blocking activity", "C. It acts centrally to reduce heart rate", "D. It increases vagal tone"],
    answer: 0,
    explanation: "Non-selective alpha blockers (phenoxybenzamine) block α2 presynaptic → disinhibit NE release → more tachycardia; selective α1 (prazosin) spares α2 feedback → less reflex tachycardia.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ab_010",
    topic: "antibiotics",
    year: "FMGE Dec 2022",
    q: "Antibiotic associated with grey baby syndrome in neonates is:",
    img: null,
    options: ["A. Chloramphenicol (accumulates due to immature UDP-glucuronyl transferase)", "B. Tetracycline", "C. Gentamicin", "D. Ampicillin"],
    answer: 0,
    explanation: "Neonates lack mature hepatic glucuronidation; chloramphenicol accumulates → cardiovascular collapse, ashen grey cyanosis, abdominal distension, death.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_cvs_009",
    topic: "cvs-drugs",
    year: "FMGE Dec 2022",
    q: "Digoxin toxicity is potentiated by:",
    img: null,
    options: ["A. Hypokalaemia (K⁺ competes with digoxin at Na⁺/K⁺-ATPase; low K⁺ → more digoxin binding)", "B. Hyperkalaemia", "C. Hypernatraemia", "D. Alkalosis only"],
    answer: 0,
    explanation: "Hypokalaemia, hypercalcaemia, hypomagnesaemia, hypothyroidism, and renal failure all increase digoxin toxicity risk.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_cvs_010",
    topic: "cvs-drugs",
    year: "FMGE Jun 2022",
    q: "Nitrate tolerance is prevented by:",
    img: null,
    options: ["A. Nitrate-free interval (8-12 hours) each day", "B. Increasing the dose daily", "C. Combining with beta-blocker always", "D. Using IV route only"],
    answer: 0,
    explanation: "Continuous nitrate exposure depletes vascular thiol groups → tolerance; a daily nitrate-free window of 8-12 h restores responsiveness.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_atb_009",
    topic: "antitubercular-drugs",
    year: "FMGE Dec 2022",
    q: "Drug of choice for tuberculous meningitis that penetrates CSF best is:",
    img: null,
    options: ["A. Pyrazinamide and isoniazid (best CSF penetration of first-line drugs)", "B. Streptomycin (poor CSF penetration)", "C. Ethambutol alone", "D. Rifampicin alone (moderate penetration)"],
    answer: 0,
    explanation: "CSF penetration: PZA > INH (100%) > RIF (10-20% inflamed) > EMB (poor); PZA and INH are the backbone of TBM regimens.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_atb_010",
    topic: "antitubercular-drugs",
    year: "FMGE Jun 2022",
    q: "Optic neuritis (colour vision loss) is a side effect of:",
    img: null,
    options: ["A. Ethambutol", "B. Isoniazid (peripheral neuropathy)", "C. Rifampicin (hepatotoxicity, red-orange body fluids)", "D. Pyrazinamide (hyperuricaemia)"],
    answer: 0,
    explanation: "Ethambutol causes retrobulbar neuritis → red-green colour blindness → visual acuity loss; dose-dependent, monitor monthly.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_di_009",
    topic: "antidiabetics",
    year: "FMGE Dec 2022",
    q: "SGLT-2 inhibitors (gliflozins) reduce cardiovascular mortality primarily by:",
    img: null,
    options: ["A. Reducing hospitalisation for heart failure (volume-independent mechanism)", "B. Lowering LDL cholesterol", "C. Reducing blood pressure only", "D. Improving insulin secretion"],
    answer: 0,
    explanation: "SGLT-2 inhibitors (empagliflozin, dapagliflozin) have demonstrated CV mortality and HF hospitalisation reduction independent of glucose lowering.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_di_010",
    topic: "antidiabetics",
    year: "FMGE Jun 2022",
    q: "Hypoglycaemia is NOT a risk with monotherapy of:",
    img: null,
    options: ["A. Metformin, SGLT-2 inhibitors, GLP-1 agonists, DPP-4 inhibitors, thiazolidinediones", "B. Sulphonylureas", "C. Insulin", "D. Repaglinide"],
    answer: 0,
    explanation: "Insulin secretagogues (SU, glinides) and exogenous insulin cause hypoglycaemia; insulin sensitisers and incretin-based drugs (except in combination) do not.",
    tags: ["PYQ", "high-yield"]
  },

  {
    id: "pharma_gp_008",
    topic: "general-pharmacology",
    year: "FMGE Dec 2022",
    q: "Zero-order kinetics means drug elimination is:",
    img: null,
    options: ["A. Constant amount per unit time (rate independent of concentration — capacity-limited)", "B. Proportional to concentration (first-order)", "C. Doubled when dose doubles", "D. Dependent on plasma protein binding"],
    answer: 0,
    explanation: "Zero-order: fixed amount eliminated/time (e.g. phenytoin at toxic doses, ethanol, aspirin in overdose); half-life increases with dose; small dose change → disproportionate toxicity.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_gp_009",
    topic: "general-pharmacology",
    year: "FMGE Jun 2022",
    q: "Therapeutic index (TI) is defined as:",
    img: null,
    options: ["A. TD50 / ED50 — the larger the TI, the safer the drug", "B. ED50 / LD50", "C. Maximum dose / minimum dose", "D. MEC / MTC ratio"],
    answer: 0,
    explanation: "TI = TD50 (toxic dose in 50%) / ED50 (effective dose in 50%); drugs with narrow TI (digoxin, lithium, phenytoin, warfarin) require TDM.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_gp_010",
    topic: "general-pharmacology",
    year: "FMGE Dec 2021",
    q: "Induction of cytochrome P450 enzymes results in:",
    img: null,
    options: ["A. Increased drug metabolism → decreased plasma levels of co-administered drugs (e.g. rifampicin reduces OCP efficacy)", "B. Decreased drug metabolism → toxicity", "C. Increased drug absorption", "D. Reduced renal clearance"],
    answer: 0,
    explanation: "CYP inducers: rifampicin, phenytoin, carbamazepine, barbiturates, chronic alcohol, St John's Wort → accelerate metabolism of co-administered drugs → sub-therapeutic levels.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ah_008",
    topic: "antihypertensives",
    year: "FMGE Dec 2022",
    q: "ACE inhibitors are contraindicated in pregnancy because they cause:",
    img: null,
    options: ["A. Foetal hypotension, renal tubular dysplasia, oligohydramnios, limb contractures (2nd and 3rd trimester)", "B. Neural tube defects (1st trimester teratogens)", "C. Neonatal thrombocytopaenia", "D. Maternal hyperkalemia only"],
    answer: 0,
    explanation: "ACEIs/ARBs: safe in 1st trimester but in 2nd/3rd → foetal ACE inhibition → impaired renal development → oligohydramnios, pulmonary hypoplasia, neonatal anuria.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ah_009",
    topic: "antihypertensives",
    year: "FMGE Jun 2022",
    q: "Drug of choice for hypertension in pregnancy is:",
    img: null,
    options: ["A. Methyldopa (safest, longest safety record in pregnancy)", "B. Atenolol (associated with IUGR)", "C. Ramipril (contraindicated)", "D. Hydrochlorothiazide (depletes volume, reduces placental flow)"],
    answer: 0,
    explanation: "Methyldopa is first choice in pregnancy; alternatives: labetalol, nifedipine; ACEIs/ARBs/direct renin inhibitors are contraindicated.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ah_010",
    topic: "antihypertensives",
    year: "FMGE Dec 2021",
    q: "Thiazide diuretics lower blood pressure by:",
    img: null,
    options: ["A. Initially reducing plasma volume; chronically reducing peripheral vascular resistance", "B. Blocking beta-adrenoceptors", "C. Inhibiting renin release", "D. Blocking calcium channels"],
    answer: 0,
    explanation: "Thiazides: acute effect = natriuresis/volume reduction; chronic effect = arteriolar vasodilation (mechanism unclear); also useful for nephrogenic DI.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ns_008",
    topic: "nsaids-analgesics",
    year: "FMGE Dec 2022",
    q: "Selective COX-2 inhibitors (coxibs) were withdrawn due to increased risk of:",
    img: null,
    options: ["A. Cardiovascular events (MI, stroke) — thromboxane A2 still made by COX-1 platelets but prostacyclin (PGI2) from endothelial COX-2 blocked", "B. GI bleeding (actually reduced vs non-selective NSAIDs)", "C. Hepatotoxicity", "D. Renal papillary necrosis only"],
    answer: 0,
    explanation: "COX-2 selective drugs (rofecoxib, celecoxib): spare gastric mucosa but inhibit endothelial PGI2 (antiaggregatory) while platelet TXA2 intact → prothrombotic state.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ns_009",
    topic: "nsaids-analgesics",
    year: "FMGE Jun 2022",
    q: "Paracetamol overdose causes hepatotoxicity via:",
    img: null,
    options: ["A. NAPQI (N-acetyl-p-benzoquinone imine) accumulates when glutathione depleted — treated with N-acetylcysteine", "B. Direct COX inhibition", "C. Free radical production from salicylate", "D. Mitochondrial uncoupling (aspirin)"],
    answer: 0,
    explanation: "Paracetamol normally conjugated; overdose saturates glucuronidation/sulphation → CYP2E1 produces NAPQI → depletes glutathione → centrilobular necrosis.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ns_010",
    topic: "nsaids-analgesics",
    year: "FMGE Dec 2021",
    q: "Aspirin at low dose (75-150 mg/day) selectively inhibits:",
    img: null,
    options: ["A. Platelet COX-1 irreversibly → reduces TXA2 → antiplatelet effect (anucleate platelets can't regenerate COX)", "B. Endothelial COX-2 only", "C. Both COX-1 and COX-2 equally at all doses", "D. Lipoxygenase pathway"],
    answer: 0,
    explanation: "Low-dose aspirin: irreversible acetylation of platelet COX-1 → TXA2 suppression for platelet lifetime (7-10 days); endothelium regenerates COX-2 → net antithrombotic.",
    tags: ["PYQ", "high-yield"]
  },

  {
    id: "pharma_ae_008",
    topic: "antiepileptics",
    year: "FMGE Dec 2022",
    q: "Drug of choice for absence seizures (petit mal) is:",
    img: null,
    options: ["A. Ethosuximide (blocks T-type Ca²⁺ channels in thalamus)", "B. Phenytoin (worsens absence)", "C. Carbamazepine (may worsen absence)", "D. Vigabatrin"],
    answer: 0,
    explanation: "Ethosuximide is first choice for pure absence seizures; sodium valproate is used when absence coexists with other seizure types.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ae_009",
    topic: "antiepileptics",
    year: "FMGE Jun 2022",
    q: "Phenytoin toxicity manifests as:",
    img: null,
    options: ["A. Nystagmus, ataxia, diplopia at toxic levels; gingival hyperplasia and hirsutism with chronic use", "B. Aplastic anaemia (carbamazepine risk)", "C. Lupus-like syndrome (hydralazine, procainamide)", "D. Pulmonary fibrosis (amiodarone)"],
    answer: 0,
    explanation: "Phenytoin: zero-order kinetics at therapeutic doses; toxic signs: nystagmus → ataxia → mental changes; chronic: gingival hypertrophy, hirsutism, megaloblastic anaemia.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ae_010",
    topic: "antiepileptics",
    year: "FMGE Dec 2021",
    q: "Teratogenic antiepileptic most associated with neural tube defects is:",
    img: null,
    options: ["A. Valproate (NTD, spina bifida) and carbamazepine — all AEDs have teratogenic risk", "B. Ethosuximide (safest in pregnancy)", "C. Gabapentin (generally safer)", "D. Levetiracetam (low teratogenicity)"],
    answer: 0,
    explanation: "Sodium valproate: highest NTD risk (1-2%); folate supplementation reduces but does not eliminate risk; avoid in pregnancy if possible.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ap_008",
    topic: "antipsychotics-pharma",
    year: "FMGE Dec 2022",
    q: "Neuroleptic malignant syndrome (NMS) is characterised by:",
    img: null,
    options: ["A. Hyperthermia + rigidity + autonomic instability + altered consciousness — treat with dantrolene + bromocriptine", "B. Tardive dyskinesia (chronic use)", "C. Acute dystonia (early, treat with anticholinergics)", "D. Akathisia (restlessness)"],
    answer: 0,
    explanation: "NMS: life-threatening; dopamine receptor blockade → hyperthermia, lead-pipe rigidity, CK↑, rhabdomyolysis; treatment: stop antipsychotic, dantrolene, bromocriptine.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ap_009",
    topic: "antipsychotics-pharma",
    year: "FMGE Jun 2022",
    q: "Clozapine is reserved for treatment-resistant schizophrenia due to risk of:",
    img: null,
    options: ["A. Agranulocytosis (requires regular WBC monitoring — 1-2% incidence)", "B. Tardive dyskinesia (clozapine actually has lowest EPS risk)", "C. Hyperprolactinaemia", "D. QTc prolongation mainly"],
    answer: 0,
    explanation: "Clozapine: lowest D2 blockade → minimal EPS/tardive dyskinesia; risk of agranulocytosis (requires weekly WBC first 6 months), also weight gain, metabolic syndrome.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ap_010",
    topic: "antipsychotics-pharma",
    year: "FMGE Dec 2021",
    q: "Typical antipsychotics cause hyperprolactinaemia by:",
    img: null,
    options: ["A. Blocking D2 receptors in tuberoinfundibular pathway → removes tonic inhibition of prolactin secretion", "B. Increasing oestrogen levels", "C. Stimulating anterior pituitary directly", "D. Blocking dopamine in mesolimbic pathway"],
    answer: 0,
    explanation: "Dopamine (prolactin-inhibiting factor) normally suppresses prolactin; D2 blockade removes this inhibition → galactorrhoea, amenorrhoea, gynaecomastia.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ad_008",
    topic: "antidepressants-anxiolytics",
    year: "FMGE Dec 2022",
    q: "Serotonin syndrome is characterised by the triad of:",
    img: null,
    options: ["A. Cognitive changes + autonomic instability + neuromuscular abnormalities (clonus, hyperreflexia, tremor)", "B. Lead-pipe rigidity only (NMS)", "C. Hypothermia + bradycardia (opioid toxicity)", "D. Anticholinergic toxidrome"],
    answer: 0,
    explanation: "Serotonin syndrome: excessive serotonergic activity; caused by SSRI + MAOI, SSRI + tramadol, linezolid combinations; distinguish from NMS by clonus and rapid onset.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ad_009",
    topic: "antidepressants-anxiolytics",
    year: "FMGE Jun 2022",
    q: "Benzodiazepine dependence and withdrawal seizures are managed with:",
    img: null,
    options: ["A. Gradual dose tapering with a long-acting BZD (e.g. diazepam) or switching from short-acting to long-acting", "B. Abrupt cessation (always safe)", "C. Flumazenil (used for acute overdose reversal, not withdrawal)", "D. Naloxone (opioid antagonist)"],
    answer: 0,
    explanation: "Abrupt BZD withdrawal can cause life-threatening seizures; management is gradual taper; flumazenil is competitive antagonist used for acute reversal.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ad_010",
    topic: "antidepressants-anxiolytics",
    year: "FMGE Dec 2021",
    q: "Drug of choice for OCD (obsessive compulsive disorder) is:",
    img: null,
    options: ["A. SSRIs (fluoxetine, fluvoxamine) — require higher doses and longer duration than for depression", "B. Tricyclic antidepressants first line", "C. Lithium", "D. Clonazepam"],
    answer: 0,
    explanation: "SSRIs are first line for OCD; clomipramine (TCA with serotonin reuptake inhibition) is second line; 12+ weeks trial needed at higher doses.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ac_008",
    topic: "anticoagulants",
    year: "FMGE Dec 2022",
    q: "Heparin-induced thrombocytopaenia (HIT) is treated by:",
    img: null,
    options: ["A. Stopping heparin and switching to a non-heparin anticoagulant (argatroban, fondaparinux, bivalirudin)", "B. Platelet transfusion", "C. Increasing heparin dose", "D. Warfarin immediately (can worsen via protein C depletion)"],
    answer: 0,
    explanation: "HIT type II: immune-mediated, paradoxically prothrombotic; stop all heparin (including flushes, LMWH); use direct thrombin inhibitors; platelet transfusion contraindicated.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ac_009",
    topic: "anticoagulants",
    year: "FMGE Jun 2022",
    q: "Warfarin acts by inhibiting:",
    img: null,
    options: ["A. Vitamin K epoxide reductase → prevents regeneration of active vitamin K → depletes factors II, VII, IX, X and protein C, S", "B. Thrombin directly", "C. Factor Xa directly", "D. Platelet aggregation"],
    answer: 0,
    explanation: "Warfarin: vitamin K antagonist; PT/INR monitors efficacy; affected by drugs (CYP2C9 inhibitors increase effect), diet (vitamin K-rich foods decrease effect), genetics.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ac_010",
    topic: "anticoagulants",
    year: "FMGE Dec 2021",
    q: "Protamine sulphate reverses the anticoagulant effect of:",
    img: null,
    options: ["A. Unfractionated heparin (completely) and LMWH (partially)", "B. Warfarin (reversed by vitamin K and FFP)", "C. Dabigatran (reversed by idarucizumab)", "D. Rivaroxaban (reversed by andexanet alfa)"],
    answer: 0,
    explanation: "Protamine (positively charged) binds heparin (negatively charged) → neutralises it; full reversal of UFH, only partial for LMWH.",
    tags: ["PYQ", "high-yield"]
  },

  {
    id: "pharma_aa_007",
    topic: "antiarrhythmics",
    year: "FMGE Dec 2022",
    q: "Amiodarone's primary mechanism and major side effects are:",
    img: null,
    options: ["A. Class III (K⁺ channel block) — also blocks Na⁺, Ca²⁺, beta-receptors; causes pulmonary fibrosis, thyroid dysfunction, corneal microdeposits, photosensitivity", "B. Class I only; mainly hepatotoxicity", "C. Class II (beta-blocker); no organ toxicity", "D. Class IV (Ca²⁺ blocker); causes AV block only"],
    answer: 0,
    explanation: "Amiodarone is a multi-channel blocker with very long half-life (40-55 days); pulmonary fibrosis, hypo/hyperthyroidism, hepatotoxicity, corneal deposits, blue-grey skin.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_aa_008",
    topic: "antiarrhythmics",
    year: "FMGE Jun 2022",
    q: "Drug of choice for supraventricular tachycardia (SVT) acute termination is:",
    img: null,
    options: ["A. Adenosine IV (slows/blocks AV node, very short half-life ~10 sec, diagnosis/treatment of SVT)", "B. Lidocaine (ventricular arrhythmias only)", "C. Quinidine", "D. Digoxin (too slow for acute SVT)"],
    answer: 0,
    explanation: "Adenosine: first choice for acute SVT termination; acts on A1 receptors → hyperpolarises AV nodal cells; brief side effects (flushing, dyspnoea, chest tightness lasting seconds).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_aa_009",
    topic: "antiarrhythmics",
    year: "FMGE Dec 2021",
    q: "Drug causing cinchonism (tinnitus, headache, visual disturbances) is:",
    img: null,
    options: ["A. Quinidine (Class IA; also causes thrombocytopaenia, torsades de pointes, cinchonism)", "B. Lidocaine", "C. Amiodarone", "D. Verapamil"],
    answer: 0,
    explanation: "Cinchonism: quinidine/quinine toxicity — tinnitus, headache, N/V, visual disturbances; quinidine also prolongs QT → torsades; warfarin interaction (inhibits CYP2C9).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_aa_010",
    topic: "antiarrhythmics",
    year: "FMGE Jun 2021",
    q: "Lidocaine as antiarrhythmic is effective only for:",
    img: null,
    options: ["A. Ventricular arrhythmias (Class IB — preferentially blocks ischaemic/depolarised tissue); ineffective for SVT", "B. Atrial fibrillation", "C. SVT", "D. All arrhythmias equally"],
    answer: 0,
    explanation: "Lidocaine blocks fast Na⁺ channels; selective for depolarised (ischaemic) ventricular myocardium; used in VT/VF during acute MI; not effective for atrial arrhythmias.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_fv_007",
    topic: "antifungal-antiviral",
    year: "FMGE Dec 2022",
    q: "Amphotericin B nephrotoxicity is reduced by:",
    img: null,
    options: ["A. Liposomal formulation (AmBisome) — maintains efficacy but reduces renal toxicity", "B. Increasing dose", "C. Combining with fluconazole", "D. Using oral instead of IV"],
    answer: 0,
    explanation: "Amphotericin B: broad-spectrum fungicidal (binds ergosterol); nephrotoxicity is major dose-limiting side effect; liposomal form significantly less nephrotoxic.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_fv_008",
    topic: "antifungal-antiviral",
    year: "FMGE Jun 2022",
    q: "Acyclovir mechanism of action is:",
    img: null,
    options: ["A. Viral thymidine kinase phosphorylates acyclovir → acyclovir triphosphate inhibits viral DNA polymerase (chain terminator)", "B. Inhibits viral neuraminidase (oseltamivir mechanism)", "C. Blocks viral integrase (raltegravir)", "D. Inhibits reverse transcriptase (NRTIs)"],
    answer: 0,
    explanation: "Acyclovir: selectively activated by HSV/VZV thymidine kinase; acyclovir-TP = competitive inhibitor and obligate chain terminator of viral DNA polymerase.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_fv_009",
    topic: "antifungal-antiviral",
    year: "FMGE Dec 2021",
    q: "Drug of choice for Pneumocystis jirovecii pneumonia (PCP) is:",
    img: null,
    options: ["A. Co-trimoxazole (trimethoprim-sulfamethoxazole) — prophylaxis when CD4 < 200/µL", "B. Fluconazole (Candida/Cryptococcus)", "C. Voriconazole (Aspergillus)", "D. Amphotericin B (severe systemic fungal infections)"],
    answer: 0,
    explanation: "PCP (formerly Pneumocystis carinii): commonest AIDS-defining opportunistic infection; TMP-SMX is drug of choice for treatment and prophylaxis.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_fv_010",
    topic: "antifungal-antiviral",
    year: "FMGE Jun 2021",
    q: "Oseltamivir (Tamiflu) works by inhibiting:",
    img: null,
    options: ["A. Viral neuraminidase → prevents viral release from host cells and spread (influenza A and B)", "B. Viral haemagglutinin", "C. Viral RNA polymerase", "D. M2 protein (amantadine mechanism)"],
    answer: 0,
    explanation: "Neuraminidase inhibitors (oseltamivir, zanamivir): block sialidase activity → virions aggregate on cell surface → can't spread; used within 48 h of influenza symptom onset.",
    tags: ["PYQ", "high-yield"]
  },

  {
    id: "pharma_op_007",
    topic: "opioids",
    year: "FMGE Dec 2022",
    q: "Opioid overdose triad is:",
    img: null,
    options: ["A. Miosis + respiratory depression + coma — reversed by naloxone", "B. Mydriasis + hypertension + seizures (sympathomimetic toxidrome)", "C. Hyperthermia + rigidity + altered consciousness (NMS)", "D. Diaphoresis + diarrhoea + salivation (cholinergic toxidrome)"],
    answer: 0,
    explanation: "Classic opioid toxidrome: pinpoint pupils (miosis), respiratory depression (most dangerous), decreased consciousness; naloxone (competitive antagonist) reverses all effects.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_op_008",
    topic: "opioids",
    year: "FMGE Jun 2022",
    q: "Opioid constipation occurs because:",
    img: null,
    options: ["A. µ-receptors in GI tract reduce peristalsis and increase sphincter tone (peripheral opioid effect, not CNS)", "B. Dehydration from diaphoresis", "C. Ileus due to sympathetic stimulation", "D. Direct smooth muscle relaxation"],
    answer: 0,
    explanation: "Opioid-induced constipation (OIC): mediated by peripheral µ-receptors in gut (separate from analgesic CNS effect); treated with methylnaltrexone (peripherally acting antagonist).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_op_009",
    topic: "opioids",
    year: "FMGE Dec 2021",
    q: "Tramadol differs from morphine in that it:",
    img: null,
    options: ["A. Has dual mechanism: weak µ-opioid agonism + SNRI (serotonin-noradrenaline reuptake inhibition) → serotonin syndrome risk", "B. Causes more respiratory depression than morphine", "C. Has no CNS effects", "D. Is not metabolised in the liver"],
    answer: 0,
    explanation: "Tramadol: weak opioid + monoamine reuptake inhibitor; less respiratory depression/constipation than morphine; risk of serotonin syndrome with SSRIs/MAOIs; lowers seizure threshold.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_op_010",
    topic: "opioids",
    year: "FMGE Jun 2021",
    q: "Buprenorphine is used for opioid dependence because it is:",
    img: null,
    options: ["A. Partial µ-opioid agonist + κ-antagonist — ceiling effect on respiratory depression, long-acting, prevents withdrawal", "B. Full opioid agonist like heroin", "C. Pure opioid antagonist (naltrexone is)", "D. Has no opioid receptor activity"],
    answer: 0,
    explanation: "Buprenorphine: partial agonist with high receptor affinity; ceiling effect reduces overdose risk; sublingual formulation (Subutex); combined with naloxone (Suboxone) to deter injection.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_cs_007",
    topic: "corticosteroids",
    year: "FMGE Dec 2022",
    q: "Relative anti-inflammatory potency order of corticosteroids (low to high) is:",
    img: null,
    options: ["A. Hydrocortisone (1) < Prednisolone (4) < Methylprednisolone (5) < Dexamethasone (25-30) < Betamethasone (25-30)", "B. Dexamethasone < Prednisolone < Hydrocortisone", "C. All have equal potency", "D. Prednisolone > Dexamethasone"],
    answer: 0,
    explanation: "Potency (anti-inflammatory): hydrocortisone=1 (reference); prednisolone=4; methylprednisolone=5; dexamethasone=25; betamethasone=25-30; also inversely related to mineralocorticoid activity.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_cs_008",
    topic: "corticosteroids",
    year: "FMGE Jun 2022",
    q: "Abrupt withdrawal of long-term corticosteroids causes:",
    img: null,
    options: ["A. Addisonian crisis (adrenal insufficiency) — fatigue, hypotension, hypoglycaemia, hyponatraemia, hyperkalaemia", "B. Cushing's syndrome (from excess steroid)", "C. Hypertensive crisis", "D. Thyroid storm"],
    answer: 0,
    explanation: "Prolonged exogenous steroid → HPA axis suppression (ACTH and cortisol); abrupt withdrawal → acute adrenal insufficiency; taper slowly after >2-3 weeks of use.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_cs_009",
    topic: "corticosteroids",
    year: "FMGE Dec 2021",
    q: "Drug used to test adrenal cortex function (suppression test) is:",
    img: null,
    options: ["A. Dexamethasone (low dose: 1 mg overnight; high dose: 2 mg × 2 days — for Cushing's diagnosis/localisation)", "B. Hydrocortisone (replacement)", "C. Fludrocortisone (mineralocorticoid replacement)", "D. Prednisolone (treatment)"],
    answer: 0,
    explanation: "Dexamethasone suppression test: low-dose (1 mg) screens for Cushing's (cortisol normally suppressed); high-dose distinguishes pituitary (Cushing's disease) from ectopic ACTH.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_cs_010",
    topic: "corticosteroids",
    year: "FMGE Jun 2021",
    q: "Steroid with highest mineralocorticoid activity used for Addison's disease replacement is:",
    img: null,
    options: ["A. Fludrocortisone (potent mineralocorticoid = 125 × hydrocortisone; used for primary adrenal insufficiency)", "B. Dexamethasone (negligible mineralocorticoid activity)", "C. Prednisolone (low mineralocorticoid activity)", "D. Methylprednisolone (minimal mineralocorticoid effect)"],
    answer: 0,
    explanation: "Addison's disease: replacement = hydrocortisone (glucocorticoid) + fludrocortisone (mineralocorticoid); dexamethasone has no mineralocorticoid activity.",
    tags: ["PYQ", "high-yield"]
  },

  {
    id: "pharma_ch_007",
    topic: "chemotherapy",
    year: "FMGE Dec 2022",
    q: "Bleomycin's dose-limiting toxicity is:",
    img: null,
    options: ["A. Pulmonary fibrosis (bleomycin hydrolase absent in lungs → free radical damage)", "B. Cardiotoxicity (doxorubicin)", "C. Haemorrhagic cystitis (cyclophosphamide)", "D. Peripheral neuropathy (vincristine)"],
    answer: 0,
    explanation: "Bleomycin: causes DNA strand breaks; lacks bleomycin hydrolase in lung/skin → pulmonary toxicity and skin hyperpigmentation; monitor pulmonary function.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ch_008",
    topic: "chemotherapy",
    year: "FMGE Jun 2022",
    q: "Doxorubicin (adriamycin) cardiotoxicity is related to:",
    img: null,
    options: ["A. Cumulative dose (>450-550 mg/m² total) → dilated cardiomyopathy via free radical injury to cardiomyocytes", "B. Single high dose only", "C. Renal clearance failure causing accumulation", "D. Thyroid hormone-like effect"],
    answer: 0,
    explanation: "Anthracyclines (doxorubicin, daunorubicin): cumulative dose-related cardiomyopathy; protected partially by dexrazoxane (iron chelator reduces free radicals).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ch_009",
    topic: "chemotherapy",
    year: "FMGE Dec 2021",
    q: "Cyclophosphamide causes haemorrhagic cystitis; this is prevented by:",
    img: null,
    options: ["A. MESNA (2-mercaptoethane sulphonate) — binds acrolein (toxic metabolite) in urine", "B. Hydration alone", "C. Allopurinol (prevents hyperuricaemia)", "D. G-CSF (prevents neutropaenia)"],
    answer: 0,
    explanation: "Cyclophosphamide: hepatic activation → acrolein → bladder urothelial toxicity; prevent with MESNA + adequate hydration; acrolein causes haematuria, fibrosis.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_ch_010",
    topic: "chemotherapy",
    year: "FMGE Jun 2021",
    q: "Vincristine's dose-limiting toxicity is:",
    img: null,
    options: ["A. Peripheral neuropathy (inhibits tubulin polymerisation → axonal transport disruption)", "B. Myelosuppression (vinblastine causes more bone marrow suppression than vincristine)", "C. Pulmonary fibrosis", "D. Cardiotoxicity"],
    answer: 0,
    explanation: "Vincristine: vinca alkaloid; binds tubulin → mitotic arrest; dose-limiting = peripheral neuropathy (areflexia, paraesthesias, autonomic neuropathy); minimal myelosuppression.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_dit_007",
    topic: "drug-interactions-toxicology",
    year: "FMGE Dec 2022",
    q: "Drug causing Antabuse (disulfiram-like) reaction with alcohol is:",
    img: null,
    options: ["A. Metronidazole (also chlorpropamide, tinidazole, cefoperazone, griseofulvin) — blocks aldehyde dehydrogenase → acetaldehyde accumulation", "B. Paracetamol", "C. Amoxicillin", "D. Ciprofloxacin"],
    answer: 0,
    explanation: "Disulfiram-like reaction: flushing, palpitations, nausea, headache; drugs causing it: metronidazole, tinidazole, cefoperazone (3rd-gen cephalosporin), chlorpropamide, griseofulvin.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_dit_008",
    topic: "drug-interactions-toxicology",
    year: "FMGE Jun 2022",
    q: "Organophosphate poisoning is treated with:",
    img: null,
    options: ["A. Atropine (blocks muscarinic effects) + Pralidoxime (2-PAM: regenerates AChE before ageing)", "B. Naloxone (opioid)", "C. N-acetylcysteine (paracetamol)", "D. Flumazenil (benzodiazepine)"],
    answer: 0,
    explanation: "OP poisoning: irreversible AChE inhibition → cholinergic crisis (SLUD + bronchospasm + miosis + bradycardia); atropine counters muscarinic effects; pralidoxime reactivates AChE if given early.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_dit_009",
    topic: "drug-interactions-toxicology",
    year: "FMGE Dec 2021",
    q: "Theophylline toxicity is potentiated by inhibitors of CYP1A2 such as:",
    img: null,
    options: ["A. Ciprofloxacin, erythromycin, cimetidine — increase theophylline plasma levels → arrhythmias, seizures", "B. Rifampicin (CYP inducer — reduces theophylline levels)", "C. Phenytoin (CYP inducer)", "D. Carbamazepine (CYP inducer)"],
    answer: 0,
    explanation: "Theophylline: narrow TI; CYP1A2 inhibitors (ciprofloxacin, erythromycin, cimetidine) reduce clearance → toxicity (arrhythmias, seizures); smoking induces CYP1A2 → reduces levels.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "pharma_dit_010",
    topic: "drug-interactions-toxicology",
    year: "FMGE Jun 2021",
    q: "Lead poisoning characteristic findings include:",
    img: null,
    options: ["A. Basophilic stippling of RBCs + Burton's lead line on gums + microcytic anaemia + Pb encephalopathy — treated with EDTA/DMSA", "B. Cherry-red skin (CO poisoning)", "C. Blue-black gums (bismuth/mercury)", "D. Garlic odour (arsenic/organophosphates)"],
    answer: 0,
    explanation: "Lead poisoning: inhibits ALA dehydratase and ferrochelatase → haem synthesis blocked → basophilic stippling, microcytic anaemia; lead lines on gums; chelation with EDTA (IV) or succimer (DMSA, oral).",
    tags: ["PYQ", "high-yield"]
  },

];

export default pharmacology;
