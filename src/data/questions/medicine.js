const medicine = [

  // ============ TUBERCULOSIS ============
  {
    id: "med_tb_001",
    topic: "tuberculosis-medicine",
    year: "FMGE Dec 2019",
    q: "Which is the most common site of extrapulmonary tuberculosis in India?",
    img: null,
    options: ["A. Lymph nodes", "B. Pleura", "C. Bone and joints", "D. Genitourinary tract"],
    answer: 0,
    explanation: "Lymph node TB (scrofula) is the most common form of extrapulmonary TB (~35% of cases). Cervical lymph nodes are most frequently involved as a cold abscess.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_tb_002",
    topic: "tuberculosis-medicine",
    year: "FMGE Jun 2018",
    q: "Gold standard for the diagnosis of pulmonary tuberculosis is:",
    img: null,
    options: ["A. Mantoux test", "B. AFB smear (Ziehl-Neelsen)", "C. Culture on Lowenstein-Jensen medium", "D. PCR (GeneXpert)"],
    answer: 2,
    explanation: "Culture on Lowenstein-Jensen (LJ) medium remains the gold standard — it provides definitive identification and drug sensitivity testing, though it takes 4–8 weeks to grow.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_tb_003",
    topic: "tuberculosis-medicine",
    year: "FMGE Dec 2020",
    q: "Most hepatotoxic drug in the first-line anti-TB regimen is:",
    img: null,
    options: ["A. Rifampicin", "B. Ethambutol", "C. Pyrazinamide", "D. Isoniazid"],
    answer: 2,
    explanation: "Pyrazinamide causes the most severe hepatotoxicity among first-line anti-TB drugs. Isoniazid causes the most frequent hepatotoxicity, but PZA causes the worst/most severe hepatitis.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_tb_004",
    topic: "tuberculosis-medicine",
    year: "FMGE Jun 2017",
    q: "Mechanism of action of Rifampicin is:",
    img: null,
    options: ["A. Inhibits mycolic acid synthesis", "B. Inhibits DNA-dependent RNA polymerase", "C. Inhibits 30S ribosomal subunit", "D. Inhibits cell wall peptidoglycan synthesis"],
    answer: 1,
    explanation: "Rifampicin inhibits bacterial DNA-dependent RNA polymerase (beta subunit, encoded by rpoB gene), blocking transcription. Resistance arises from rpoB gene mutations.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_tb_005",
    topic: "tuberculosis-medicine",
    year: "FMGE Dec 2018",
    q: "Isoniazid acts by inhibiting:",
    img: null,
    options: ["A. Mycolic acid synthesis (InhA)", "B. RNA polymerase", "C. Arabinosyl transferase", "D. ATP synthase"],
    answer: 0,
    explanation: "INH inhibits InhA (enoyl-ACP reductase), which is essential for mycolic acid synthesis in M. tuberculosis cell wall. It is a prodrug activated by KatG (catalase-peroxidase). INH also causes peripheral neuropathy (pyridoxine deficiency).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_tb_006",
    topic: "tuberculosis-medicine",
    year: "FMGE Jun 2019",
    q: "Ghon complex in primary tuberculosis consists of:",
    img: null,
    options: ["A. Subpleural lung focus only", "B. Subpleural focus + draining hilar lymph nodes", "C. Perihilar lymph node + pleural effusion", "D. Cavitary lung lesion + satellite nodules"],
    answer: 1,
    explanation: "Ghon complex = Ghon focus (primary subpleural lung lesion, usually lower lobe) + ipsilateral hilar/mediastinal lymph node involvement. Together these form the primary complex of TB.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_tb_007",
    topic: "tuberculosis-medicine",
    year: "FMGE Dec 2017",
    q: "NTEP (RNTCP) regimen for new pulmonary TB case is:",
    img: null,
    options: ["A. 2HRZ / 4HR", "B. 2HRZE / 4HR", "C. 2HRZES / 1HRZE / 5HRE", "D. 6HRZ"],
    answer: 1,
    explanation: "New TB cases receive 2HRZE (intensive phase: 2 months H+R+Z+E) followed by 4HR (continuation phase: 4 months H+R). Total: 6 months.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_tb_008",
    topic: "tuberculosis-medicine",
    year: "FMGE Jun 2020",
    q: "Drug used for isoniazid preventive therapy (latent TB) is:",
    img: null,
    options: ["A. Rifampicin for 4 months", "B. Isoniazid for 6 months", "C. Pyrazinamide for 2 months", "D. Ethambutol for 9 months"],
    answer: 1,
    explanation: "Isoniazid Preventive Therapy (IPT) for 6 months is standard for latent TB infection, especially in HIV-positive individuals and household contacts of smear-positive cases.",
    tags: ["PYQ"]
  },
  {
    id: "med_tb_009",
    topic: "tuberculosis-medicine",
    year: "FMGE Dec 2016",
    q: "Ethambutol toxicity primarily affects:",
    img: null,
    options: ["A. Peripheral nerves", "B. Optic nerve (retrobulbar optic neuritis)", "C. Liver", "D. Kidney"],
    answer: 1,
    explanation: "Ethambutol causes retrobulbar optic neuritis — decreased visual acuity, loss of red-green colour discrimination, and central scotoma. Visual acuity testing is mandatory before and during treatment.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_tb_010",
    topic: "tuberculosis-medicine",
    year: "FMGE Jun 2021",
    q: "Anti-TB drug with best penetration into CSF for TB meningitis:",
    img: null,
    options: ["A. Rifampicin", "B. Ethambutol", "C. Streptomycin", "D. Pyrazinamide"],
    answer: 0,
    explanation: "Rifampicin has the best CSF penetration among anti-TB drugs and is essential in TB meningitis regimen. Pyrazinamide also penetrates well; ethambutol and streptomycin have poor CNS penetration.",
    tags: ["PYQ"]
  },

  // ============ VIRAL HEPATITIS ============
  {
    id: "med_hep_001",
    topic: "viral-hepatitis",
    year: "FMGE Dec 2019",
    q: "Most common cause of fulminant hepatic failure in pregnancy in India:",
    img: null,
    options: ["A. Hepatitis B", "B. Hepatitis A", "C. Hepatitis C", "D. Hepatitis E"],
    answer: 3,
    explanation: "Hepatitis E causes fulminant hepatitis in 15–25% of pregnant women (especially 3rd trimester). It is the most common cause of acute liver failure in pregnancy in India. HEV = fecal-oral, epidemic.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_hep_002",
    topic: "viral-hepatitis",
    year: "FMGE Jun 2018",
    q: "HBsAg has disappeared but anti-HBs has not yet appeared. This interval is called:",
    img: null,
    options: ["A. Recovery phase", "B. Chronic phase", "C. Window period", "D. Incubation period"],
    answer: 2,
    explanation: "Window period = HBsAg cleared but anti-HBs not yet appeared. The only serological marker during this period is Anti-HBc IgM. Missing this period can lead to false-negative HBV screening.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_hep_003",
    topic: "viral-hepatitis",
    year: "FMGE Dec 2018",
    q: "Hepatitis D (delta) virus requires which antigen to complete its life cycle?",
    img: null,
    options: ["A. HBeAg", "B. HBcAg", "C. HBsAg", "D. HBxAg"],
    answer: 2,
    explanation: "Hepatitis D (delta) is a defective RNA virus that requires HBsAg for its outer envelope. It can only infect patients positive for HBV — either as coinfection or superinfection.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_hep_004",
    topic: "viral-hepatitis",
    year: "FMGE Jun 2017",
    q: "Marker indicating active HBV replication and high infectivity is:",
    img: null,
    options: ["A. HBeAg", "B. HBsAg", "C. Anti-HBc IgG", "D. Anti-HBs"],
    answer: 0,
    explanation: "HBeAg indicates active viral replication and high infectivity. Its persistence beyond 3 months suggests chronic infection. Anti-HBe seroconversion indicates low/no replication. HBV DNA quantification is most accurate.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_hep_005",
    topic: "viral-hepatitis",
    year: "FMGE Dec 2020",
    q: "A person has anti-HBs positive, anti-HBc negative. This indicates:",
    img: null,
    options: ["A. Vaccination immunity", "B. Past natural infection", "C. Chronic HBV carrier", "D. Acute HBV infection"],
    answer: 0,
    explanation: "Anti-HBs alone (without anti-HBc) = vaccination immunity. Past natural infection produces both anti-HBs AND anti-HBc. Anti-HBc alone = past infection (resolved) or window period.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_hep_006",
    topic: "viral-hepatitis",
    year: "FMGE Jun 2019",
    q: "Hepatitis viruses transmitted via fecal-oral route are:",
    img: null,
    options: ["A. Hep A only", "B. Hep B and C", "C. Hep A and E", "D. Hep D and E"],
    answer: 2,
    explanation: "Hepatitis A and E are transmitted via fecal-oral route (contaminated water/food). Hep B, C, D are blood-borne (parenteral/sexual). Hep E causes epidemic hepatitis in developing countries.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_hep_007",
    topic: "viral-hepatitis",
    year: "FMGE Dec 2017",
    q: "Most common genotype of Hepatitis C in India:",
    img: null,
    options: ["A. Genotype 1", "B. Genotype 3", "C. Genotype 2", "D. Genotype 4"],
    answer: 1,
    explanation: "Genotype 3 is most prevalent in India and South Asia. Genotype 1 is most common globally (North America, Europe). Genotype influences duration of treatment and response to interferon-based regimens.",
    tags: ["PYQ"]
  },
  {
    id: "med_hep_008",
    topic: "viral-hepatitis",
    year: "FMGE Dec 2021",
    q: "What percentage of immunocompetent adults with acute HBV develop chronic infection?",
    img: null,
    options: ["A. 1–2%", "B. 5–10%", "C. 20–30%", "D. 50%"],
    answer: 1,
    explanation: "Only 5–10% of immunocompetent adults with acute HBV develop chronicity. In contrast: ~90% of perinatal infections and ~30% of children under 5 become chronic. Neonates have the highest chronicity risk.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ NEPHROTIC & NEPHRITIC SYNDROME ============
  {
    id: "med_neph_001",
    topic: "nephrotic-nephritic",
    year: "FMGE Dec 2019",
    q: "Most common cause of nephrotic syndrome in children is:",
    img: null,
    options: ["A. Focal segmental glomerulosclerosis", "B. Minimal change disease", "C. Membranous nephropathy", "D. IgA nephropathy"],
    answer: 1,
    explanation: "Minimal Change Disease (MCD/lipoid nephrosis) accounts for 75–85% of nephrotic syndrome in children. It responds well to steroids and has an excellent prognosis. On EM: foot process effacement only.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_neph_002",
    topic: "nephrotic-nephritic",
    year: "FMGE Jun 2018",
    q: "Selective proteinuria (only albumin lost) is characteristic of:",
    img: null,
    options: ["A. Minimal change disease", "B. Membranous nephropathy", "C. FSGS", "D. Diabetic nephropathy"],
    answer: 0,
    explanation: "MCD shows selective proteinuria — only small proteins like albumin leak. Non-selective proteinuria (larger proteins also lost) is seen in FSGS, membranous nephropathy. Selectivity index <0.2 = highly selective = MCD.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_neph_003",
    topic: "nephrotic-nephritic",
    year: "FMGE Dec 2017",
    q: "Spike and dome pattern on electron microscopy is characteristic of:",
    img: null,
    options: ["A. IgA nephropathy", "B. Minimal change disease", "C. MPGN", "D. Membranous nephropathy"],
    answer: 3,
    explanation: "Membranous nephropathy shows subepithelial deposits with spike-and-dome pattern on silver stain (GBM spikes surround deposits). Most common cause of nephrotic syndrome in adults (non-diabetic). Associated with anti-PLA2R antibodies.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_neph_004",
    topic: "nephrotic-nephritic",
    year: "FMGE Jun 2019",
    q: "IgA nephropathy (Berger's disease) classically presents with:",
    img: null,
    options: ["A. Gross hematuria coinciding with URTI (synpharyngitic)", "B. Peripheral edema after streptococcal pharyngitis (2-week delay)", "C. Hypertension with massive proteinuria", "D. Oliguria with encephalopathy"],
    answer: 0,
    explanation: "IgA nephropathy = most common primary GN worldwide. Presents with episodic gross hematuria coinciding with (or 1–2 days after) URTI. IgA deposits in mesangium on immunofluorescence. No complement consumption.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_neph_005",
    topic: "nephrotic-nephritic",
    year: "FMGE Dec 2020",
    q: "Post-streptococcal GN (PSGN) is mediated by:",
    img: null,
    options: ["A. Type I hypersensitivity", "B. Type II (cytotoxic)", "C. Type III (immune-complex deposition)", "D. Type IV (cell-mediated)"],
    answer: 2,
    explanation: "PSGN = Type III hypersensitivity. Streptococcal antigens (SPEB, NAPlr) deposit in glomeruli → complement activation → neutrophil infiltration. Granular (starry sky) IgG/C3 deposits on IF. Follows throat infection by 10–21 days.",
    tags: ["PYQ"]
  },
  {
    id: "med_neph_006",
    topic: "nephrotic-nephritic",
    year: "FMGE Jun 2021",
    q: "Goodpasture syndrome has antibodies directed against:",
    img: null,
    options: ["A. Anti-GBM (type IV collagen alpha-3 chain)", "B. Anti-dsDNA", "C. ANCA (PR3/MPO)", "D. Anti-PLA2R"],
    answer: 0,
    explanation: "Goodpasture syndrome = anti-GBM antibodies (against alpha-3 chain of type IV collagen) → crescentic GN + pulmonary hemorrhage. Linear IgG deposits on IF. Anti-PLA2R = idiopathic membranous nephropathy.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_neph_007",
    topic: "nephrotic-nephritic",
    year: "FMGE Dec 2018",
    q: "Kimmelstiel-Wilson nodules are pathognomonic of:",
    img: null,
    options: ["A. Amyloidosis", "B. Diabetic nephropathy", "C. IgA nephropathy", "D. Membranous nephropathy"],
    answer: 1,
    explanation: "K-W nodules = PAS-positive nodular mesangial deposits in glomeruli, pathognomonic of diabetic nephropathy. Earliest change: GBM thickening + microalbuminuria. Later: diffuse mesangial sclerosis, then K-W nodules.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_neph_008",
    topic: "nephrotic-nephritic",
    year: "FMGE Jun 2017",
    q: "Earliest clinical marker of diabetic nephropathy is:",
    img: null,
    options: ["A. Gross proteinuria (>3.5 g/day)", "B. Elevated serum creatinine", "C. Microalbuminuria (30–300 mg/day)", "D. Hematuria"],
    answer: 2,
    explanation: "Microalbuminuria (30–300 mg/24h) is the earliest clinical sign of diabetic nephropathy, indicating glomerular damage before overt proteinuria or GFR decline. Annual screening with urine albumin:creatinine ratio is recommended in diabetes.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ AKI & CKD ============
  {
    id: "med_aki_001",
    topic: "aki-ckd",
    year: "FMGE Dec 2019",
    q: "Brown granular (muddy brown) casts in urine are pathognomonic of:",
    img: null,
    options: ["A. Acute tubular necrosis", "B. Glomerulonephritis", "C. Prerenal azotemia", "D. Interstitial nephritis"],
    answer: 0,
    explanation: "Brown granular casts are pathognomonic of ATN — the most common intrinsic cause of AKI. They represent sloughed tubular epithelial cells. Prerenal AKI shows hyaline casts. RBC casts = GN. WBC casts = pyelonephritis/interstitial nephritis.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_aki_002",
    topic: "aki-ckd",
    year: "FMGE Jun 2018",
    q: "BUN:Creatinine ratio >20:1 suggests:",
    img: null,
    options: ["A. Prerenal AKI", "B. Intrinsic AKI (ATN)", "C. Postrenal obstruction", "D. CKD"],
    answer: 0,
    explanation: "In prerenal AKI, avid sodium/water reabsorption also increases BUN reabsorption disproportionately → BUN:Cr >20:1. Urine Na <20 mEq/L, FeNa <1%. In intrinsic AKI (ATN), tubular damage → BUN:Cr <10–15:1, urine Na >40, FeNa >2%.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_aki_003",
    topic: "aki-ckd",
    year: "FMGE Dec 2020",
    q: "Most common cause of CKD worldwide is:",
    img: null,
    options: ["A. Diabetic nephropathy", "B. Hypertensive nephrosclerosis", "C. IgA nephropathy", "D. Reflux nephropathy"],
    answer: 0,
    explanation: "Diabetic nephropathy is the leading cause of CKD and ESRD worldwide (~44% of new ESRD cases). Hypertension is second. Together they account for >70% of new dialysis patients.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_aki_004",
    topic: "aki-ckd",
    year: "FMGE Jun 2019",
    q: "CKD is defined as GFR <60 mL/min/1.73m² persisting for at least:",
    img: null,
    options: ["A. 1 month", "B. 3 months", "C. 6 months", "D. 12 months"],
    answer: 1,
    explanation: "CKD = kidney damage or GFR <60 mL/min/1.73m² for >3 months, regardless of cause. Structural or functional abnormalities include proteinuria, hematuria, histological/imaging changes.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_aki_005",
    topic: "aki-ckd",
    year: "FMGE Dec 2017",
    q: "Most dangerous electrolyte complication requiring emergency treatment in AKI is:",
    img: null,
    options: ["A. Hyponatremia", "B. Hyperkalemia", "C. Hypocalcemia", "D. Hyperphosphatemia"],
    answer: 1,
    explanation: "Hyperkalemia (K >6.5 mEq/L or ECG changes) is the most life-threatening electrolyte complication in AKI — can cause ventricular fibrillation. Emergency management: IV calcium gluconate (membrane stabilization) → insulin-dextrose → dialysis.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_aki_006",
    topic: "aki-ckd",
    year: "FMGE Jun 2020",
    q: "Uremic frost in advanced CKD is caused by:",
    img: null,
    options: ["A. Urea crystal deposition on skin", "B. Calcium phosphate deposits", "C. Oxalate deposits", "D. Bilirubin deposits"],
    answer: 0,
    explanation: "Uremic frost = white crystalline deposits on skin from urea precipitation as sweat evaporates. Seen in very advanced CKD with severely elevated BUN (>200 mg/dL). Now rare because of early dialysis initiation.",
    tags: ["PYQ"]
  },

  // ============ STROKE & TIA ============
  {
    id: "med_stroke_001",
    topic: "stroke-tia",
    year: "FMGE Dec 2019",
    q: "Most common type of stroke is:",
    img: null,
    options: ["A. Ischemic (atherothrombotic)", "B. Intracerebral hemorrhage", "C. Subarachnoid hemorrhage", "D. Lacunar infarct"],
    answer: 0,
    explanation: "Ischemic stroke accounts for 80–85% of all strokes. Hemorrhagic stroke = ~15%, SAH = ~5%. Atherothrombosis (large vessel disease) is the single most common subtype of ischemic stroke.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_stroke_002",
    topic: "stroke-tia",
    year: "FMGE Jun 2018",
    q: "Time window for IV thrombolysis (alteplase/tPA) in acute ischemic stroke:",
    img: null,
    options: ["A. 1.5 hours", "B. 4.5 hours", "C. 6 hours", "D. 12 hours"],
    answer: 1,
    explanation: "IV alteplase (tPA) must be given within 4.5 hours of symptom onset in eligible patients. Mechanical thrombectomy window extends to 24h in selected cases. 'Time is brain' — every minute delays costs ~1.9 million neurons.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_stroke_003",
    topic: "stroke-tia",
    year: "FMGE Dec 2018",
    q: "Most common site of hypertensive intracerebral hemorrhage:",
    img: null,
    options: ["A. Putamen / basal ganglia", "B. Cerebellum", "C. Pons", "D. Thalamus"],
    answer: 0,
    explanation: "Hypertensive hemorrhage most commonly occurs in the putamen/basal ganglia (~50%) from rupture of lenticulostriate arteries (Charcot's artery of cerebral hemorrhage). Other sites: thalamus 25%, pons, cerebellum.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_stroke_004",
    topic: "stroke-tia",
    year: "FMGE Jun 2019",
    q: "Weber syndrome (midbrain infarct) presents with:",
    img: null,
    options: ["A. Ipsilateral CN VI + contralateral hemiplegia", "B. Ipsilateral CN III palsy + contralateral hemiplegia", "C. Ipsilateral cerebellar signs + contralateral hemiplegia", "D. Bilateral ptosis + vertical gaze palsy"],
    answer: 1,
    explanation: "Weber syndrome = ventral midbrain (PCA territory). Ipsilateral CN III palsy (ptosis, mydriasis, eye down-and-out) + contralateral hemiplegia (corticospinal tract crosses below). Classic crossed syndrome.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_stroke_005",
    topic: "stroke-tia",
    year: "FMGE Dec 2020",
    q: "Lateral medullary (Wallenberg) syndrome results from:",
    img: null,
    options: ["A. Anterior spinal artery occlusion", "B. PICA (posterior inferior cerebellar artery) occlusion", "C. Basilar artery occlusion", "D. AICA occlusion"],
    answer: 1,
    explanation: "Wallenberg = PICA occlusion → lateral medullary infarct. Features: ipsilateral face pain/temp loss (CN V), ipsilateral Horner's (descending sympathetics), dysphagia/hoarseness (IX, X) + contralateral body pain/temp loss (spinothalamic).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_stroke_006",
    topic: "stroke-tia",
    year: "FMGE Jun 2017",
    q: "Most common site of berry aneurysm causing SAH:",
    img: null,
    options: ["A. MCA bifurcation", "B. Anterior communicating artery", "C. Basilar tip", "D. Posterior communicating artery"],
    answer: 1,
    explanation: "Berry aneurysms most commonly occur at anterior communicating artery (~30%), followed by posterior communicating artery, MCA bifurcation. They are congenital (associated with ADPKD, coarctation) and are the most common cause of SAH.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ MALARIA ============
  {
    id: "med_mal_001",
    topic: "malaria-medicine",
    year: "FMGE Dec 2019",
    q: "Most dangerous Plasmodium species causing cerebral malaria is:",
    img: null,
    options: ["A. P. falciparum", "B. P. vivax", "C. P. malariae", "D. P. ovale"],
    answer: 0,
    explanation: "P. falciparum causes severe malaria: infects all RBC ages, causes cytoadherence, rosetting, sequestration in capillaries → cerebral malaria, severe anaemia, ARDS, multi-organ failure, blackwater fever. Highest mortality.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_mal_002",
    topic: "malaria-medicine",
    year: "FMGE Jun 2018",
    q: "Blackwater fever is a complication of:",
    img: null,
    options: ["A. P. falciparum malaria", "B. P. vivax malaria", "C. P. malariae", "D. Kala-azar"],
    answer: 0,
    explanation: "Blackwater fever = massive intravascular hemolysis + hemoglobinuria (dark/black urine) in P. falciparum. Sometimes triggered by quinine in G6PD-deficient patients. Causes AKI and high mortality.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_mal_003",
    topic: "malaria-medicine",
    year: "FMGE Dec 2017",
    q: "Radical cure (prevention of relapse) in P. vivax malaria is achieved by:",
    img: null,
    options: ["A. Chloroquine", "B. Primaquine", "C. Doxycycline", "D. Artesunate"],
    answer: 1,
    explanation: "Primaquine eliminates hypnozoites (dormant liver stage) of P. vivax and P. ovale, preventing relapse. Given for 14 days. Contraindicated in G6PD deficiency (causes haemolysis). Chloroquine treats only the blood stage.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_mal_004",
    topic: "malaria-medicine",
    year: "FMGE Jun 2019",
    q: "Quartan fever (72-hour cycle) is caused by:",
    img: null,
    options: ["A. P. vivax", "B. P. malariae", "C. P. falciparum", "D. P. ovale"],
    answer: 1,
    explanation: "P. malariae = quartan malaria (fever every 72h). P. vivax and P. ovale = benign tertian (48h). P. falciparum = malignant tertian (irregular ~36–48h). P. malariae also causes nephrotic syndrome in children (quartan malarial nephropathy).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_mal_005",
    topic: "malaria-medicine",
    year: "FMGE Dec 2020",
    q: "First-line treatment for severe/complicated P. falciparum malaria per WHO:",
    img: null,
    options: ["A. IV Chloroquine", "B. IV Quinine", "C. IV Artesunate", "D. Oral Mefloquine"],
    answer: 2,
    explanation: "IV Artesunate replaced IV quinine as first-line for severe malaria (WHO 2010). Superior efficacy, faster parasite clearance, and fewer adverse effects. IV quinine is second-line (adjunct doxycycline/clindamycin added).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_mal_006",
    topic: "malaria-medicine",
    year: "FMGE Jun 2021",
    q: "Peripheral blood smear finding in P. falciparum NOT seen in P. vivax:",
    img: null,
    options: ["A. Ring forms (trophozoites)", "B. Schuffner's dots", "C. Banana-shaped gametocytes", "D. Multiple parasites per RBC"],
    answer: 2,
    explanation: "Banana/crescent-shaped gametocytes are specific to P. falciparum. P. vivax has round gametocytes. P. falciparum features: multiple rings/RBC, appliqué forms, no enlarged RBCs, no Schüffner's dots (those are P. vivax). Only gametocytes circulate peripherally in P. falciparum (mature schizonts sequestered).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_mal_007",
    topic: "malaria-medicine",
    year: "FMGE Dec 2016",
    q: "Main urban malaria vector in India is:",
    img: null,
    options: ["A. Anopheles stephensi", "B. Anopheles culicifacies", "C. Aedes aegypti", "D. Culex quinquefasciatus"],
    answer: 0,
    explanation: "A. stephensi is the main urban malaria vector in India. A. culicifacies is the main rural vector (responsible for 60% of malaria transmission in India). Only female Anopheles transmit malaria.",
    tags: ["PYQ"]
  },

  // ============ ASTHMA ============
  {
    id: "med_asthma_001",
    topic: "asthma",
    year: "FMGE Dec 2019",
    q: "Gold standard investigation for diagnosis of asthma:",
    img: null,
    options: ["A. Peak expiratory flow rate (PEFR)", "B. Spirometry showing ≥12% FEV1 improvement post-bronchodilator", "C. Methacholine challenge test", "D. Chest X-ray showing hyperinflation"],
    answer: 1,
    explanation: "Spirometry showing reversible airway obstruction is the gold standard: FEV1/FVC <0.7 + ≥12% (and ≥200 mL) improvement in FEV1 after bronchodilator. Methacholine challenge is used when baseline spirometry is normal.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_asthma_002",
    topic: "asthma",
    year: "FMGE Jun 2018",
    q: "Charcot-Leyden crystals in sputum are seen in:",
    img: null,
    options: ["A. Asthma (eosinophilic inflammation)", "B. Chronic bronchitis", "C. Pneumococcal pneumonia (rusty sputum)", "D. Pulmonary TB (AFB)"],
    answer: 0,
    explanation: "Charcot-Leyden crystals are lysophospholipase crystals from eosinophil granules — seen in asthma and ABPA. Curschmann's spirals (mucus plugs) are another asthma finding. Creola bodies = shed epithelial cells in severe asthma.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_asthma_003",
    topic: "asthma",
    year: "FMGE Dec 2018",
    q: "Samter's triad (aspirin-exacerbated respiratory disease) consists of:",
    img: null,
    options: ["A. Asthma + sinusitis + urticaria", "B. Asthma + nasal polyps + aspirin/NSAID sensitivity", "C. COPD + nasal polyps + aspirin allergy", "D. Asthma + atopic dermatitis + allergic rhinitis"],
    answer: 1,
    explanation: "Samter's triad = Asthma + Nasal polyps + Aspirin/NSAID hypersensitivity. Mediated by COX-1 inhibition → excess leukotriene synthesis → bronchoconstriction (not IgE-mediated). Treat with NSAID avoidance + leukotriene modifiers.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_asthma_004",
    topic: "asthma",
    year: "FMGE Jun 2019",
    q: "First-line long-term controller therapy in mild persistent asthma (GINA Step 2):",
    img: null,
    options: ["A. Inhaled corticosteroids (ICS)", "B. LABA alone", "C. Oral theophylline", "D. Leukotriene receptor antagonist"],
    answer: 0,
    explanation: "Low-dose ICS (budesonide, fluticasone) are Step 2 first-line for mild persistent asthma. LABA must never be used alone in asthma (must be combined with ICS). Leukotriene antagonists are alternatives to ICS at Step 2.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_asthma_005",
    topic: "asthma",
    year: "FMGE Dec 2020",
    q: "Reliever (rescue) medication for acute asthma attack:",
    img: null,
    options: ["A. Salbutamol/albuterol (SABA) via nebulizer/MDI", "B. Salmeterol (LABA) via DPI", "C. IV aminophylline", "D. Oral montelukast"],
    answer: 0,
    explanation: "Short-acting beta-2 agonists (SABA) like salbutamol/albuterol are first-line rescue therapy in acute asthma. Rapid onset bronchodilation. Ipratropium added for severe attacks. IV magnesium sulfate for life-threatening asthma.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ COPD ============
  {
    id: "med_copd_001",
    topic: "copd",
    year: "FMGE Dec 2019",
    q: "COPD is diagnosed by spirometry showing (GOLD criteria):",
    img: null,
    options: ["A. FEV1 <80% predicted", "B. Post-bronchodilator FEV1/FVC < 0.70", "C. TLC > 120% predicted", "D. DLCO < 70% predicted"],
    answer: 1,
    explanation: "COPD = post-bronchodilator FEV1/FVC <0.70 (fixed ratio criterion, GOLD). This confirms non-fully reversible airflow limitation. GOLD severity: Grade I (FEV1 ≥80%), II (50–79%), III (30–49%), IV (<30%).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_copd_002",
    topic: "copd",
    year: "FMGE Jun 2018",
    q: "Blue bloater (chronic bronchitis phenotype) in COPD is characterized by:",
    img: null,
    options: ["A. Barrel chest, pursed lip breathing, hyperinflation, normal PaCO2", "B. Chronic productive cough, hypercapnia, cyanosis, polycythemia, cor pulmonale", "C. Productive cough only in morning", "D. Normal spirometry, exercise intolerance"],
    answer: 1,
    explanation: "Blue bloater = chronic bronchitis: hypercapnia (CO2 retention), cyanosis, polycythemia, peripheral edema, cor pulmonale. Pink puffer = emphysema: breathless, hyperinflated, normal O2 with pursed-lip breathing, no cyanosis.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_copd_003",
    topic: "copd",
    year: "FMGE Dec 2017",
    q: "Centrilobular emphysema is associated with:",
    img: null,
    options: ["A. Cigarette smoking (upper lobe predominant)", "B. Alpha-1 antitrypsin deficiency (panacinar, lower lobe)", "C. Cadmium inhalation", "D. Coal worker's pneumoconiosis"],
    answer: 0,
    explanation: "Centriacinar/centrilobular emphysema = respiratory bronchioles affected, upper lobe predominance — associated with smoking. Panacinar emphysema (entire acinus, lower lobes) = alpha-1 antitrypsin (AAT) deficiency.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_copd_004",
    topic: "copd",
    year: "FMGE Jun 2020",
    q: "Only intervention proven to reduce mortality in severe hypoxemic COPD:",
    img: null,
    options: ["A. Long-term oxygen therapy (LTOT >15 h/day)", "B. Inhaled corticosteroids", "C. Roflumilast (PDE-4 inhibitor)", "D. N-acetylcysteine mucolytic"],
    answer: 0,
    explanation: "LTOT (≥15 h/day) is the only therapy proven to reduce mortality in COPD patients with PaO2 ≤55 mmHg (or ≤60 with cor pulmonale/polycythemia). Smoking cessation slows progression but the mortality benefit of LTOT in hypoxemic patients is well established.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ IBD ============
  {
    id: "med_ibd_001",
    topic: "ibd",
    year: "FMGE Dec 2019",
    q: "Which distinguishes Crohn's disease from ulcerative colitis?",
    img: null,
    options: ["A. Transmural inflammation, skip lesions, perianal disease", "B. Continuous involvement starting from rectum", "C. Pseudopolyps and toxic megacolon", "D. Response to aminosalicylates"],
    answer: 0,
    explanation: "Crohn's: transmural, skip lesions, cobblestone mucosa, granulomas, perianal fistulas, mouth-to-anus involvement. UC: mucosal only, continuous from rectum, pseudopolyps, higher risk of CRC and toxic megacolon.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_ibd_002",
    topic: "ibd",
    year: "FMGE Jun 2018",
    q: "String sign of Kantor on barium follow-through is seen in:",
    img: null,
    options: ["A. Crohn's disease (terminal ileum stricture)", "B. Ulcerative colitis (backwash ileitis)", "C. Intestinal TB (Stierlin's sign)", "D. Carcinoma of terminal ileum"],
    answer: 0,
    explanation: "String sign of Kantor = thin string-like narrowing of terminal ileum on barium due to Crohn's fibrosis/spasm. Indicates severe stenosis. Intestinal TB shows 'Stierlin's sign' (rapid transit through ileocaecal region).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_ibd_003",
    topic: "ibd",
    year: "FMGE Dec 2018",
    q: "Toxic megacolon most commonly occurs in:",
    img: null,
    options: ["A. Crohn's disease", "B. Ulcerative colitis", "C. Ischemic colitis", "D. Diverticular disease"],
    answer: 1,
    explanation: "Toxic megacolon = non-obstructive colonic dilation >6 cm + systemic toxicity (fever, tachycardia, leukocytosis). Most common in UC (also Crohn's and C. difficile). Diameter >9 cm = imminent perforation risk.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_ibd_004",
    topic: "ibd",
    year: "FMGE Jun 2019",
    q: "Most common extra-intestinal manifestation of IBD is:",
    img: null,
    options: ["A. Peripheral arthropathy (arthritis)", "B. Primary sclerosing cholangitis (PSC)", "C. Uveitis/iritis", "D. Erythema nodosum"],
    answer: 0,
    explanation: "Peripheral arthropathy (non-deforming, large joint, parallels bowel activity) is the most common EIM of IBD (~10–20%). PSC is specifically associated with UC (can progress even after colectomy).",
    tags: ["PYQ"]
  },
  {
    id: "med_ibd_005",
    topic: "ibd",
    year: "FMGE Dec 2020",
    q: "First-line treatment for mild-to-moderate ulcerative colitis:",
    img: null,
    options: ["A. 5-ASA (mesalazine/sulfasalazine)", "B. Oral corticosteroids", "C. Infliximab (anti-TNF)", "D. Azathioprine (immunomodulator)"],
    answer: 0,
    explanation: "5-ASA compounds are first-line for both induction and maintenance in mild-to-moderate UC. Rectal 5-ASA for proctitis. Topical + oral 5-ASA combined is most effective. Steroids for moderate-severe flares (not maintenance).",
    tags: ["PYQ"]
  },

  // ============ CIRRHOSIS & PORTAL HTN ============
  {
    id: "med_cirr_001",
    topic: "cirrhosis-portal-htn",
    year: "FMGE Dec 2019",
    q: "Most common cause of portal hypertension in India:",
    img: null,
    options: ["A. Alcoholic cirrhosis", "B. Non-cirrhotic portal fibrosis (NCPF)", "C. Viral hepatitis cirrhosis (HBV/HCV)", "D. Budd-Chiari syndrome"],
    answer: 2,
    explanation: "Viral hepatitis (HBV/HCV)-related cirrhosis is the most common cause of portal hypertension in India. NCPF (non-cirrhotic portal fibrosis) is an important India-specific non-cirrhotic cause seen in young adults with splenomegaly.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_cirr_002",
    topic: "cirrhosis-portal-htn",
    year: "FMGE Jun 2018",
    q: "Child-Pugh score components include all EXCEPT:",
    img: null,
    options: ["A. Serum albumin", "B. Serum creatinine", "C. Serum bilirubin", "D. Ascites grade"],
    answer: 1,
    explanation: "Child-Pugh = Bilirubin + Albumin + PT/INR + Ascites + Encephalopathy (5 parameters). Creatinine is NOT in Child-Pugh; it IS in MELD score (MELD = creatinine + bilirubin + INR).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_cirr_003",
    topic: "cirrhosis-portal-htn",
    year: "FMGE Dec 2017",
    q: "SBP (spontaneous bacterial peritonitis) is diagnosed at ascitic fluid PMN count:",
    img: null,
    options: ["A. >100 cells/μL", "B. >250 cells/μL", "C. >500 cells/μL", "D. >1000 cells/μL"],
    answer: 1,
    explanation: "SBP = ascitic fluid PMN >250 cells/μL, even without positive culture. Most common organism: E. coli. Treatment: IV cefotaxime for 5 days. Prophylaxis: norfloxacin in high-risk patients (low protein ascites, prior SBP).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_cirr_004",
    topic: "cirrhosis-portal-htn",
    year: "FMGE Jun 2019",
    q: "Caput medusae is caused by:",
    img: null,
    options: ["A. IVC obstruction", "B. Portal hypertension → para-umbilical vein dilation (flow away from umbilicus)", "C. SVC obstruction", "D. Hepatic vein thrombosis"],
    answer: 1,
    explanation: "Caput medusae = dilated para-umbilical veins radiating away from umbilicus (centrifugally), seen in portal hypertension. IVC obstruction causes venous dilation on flanks flowing upward (centripetally).",
    tags: ["PYQ"]
  },

  // ============ EPILEPSY ============
  {
    id: "med_epi_001",
    topic: "epilepsy",
    year: "FMGE Dec 2019",
    q: "Drug of choice for childhood absence seizures is:",
    img: null,
    options: ["A. Ethosuximide", "B. Phenytoin", "C. Carbamazepine", "D. Phenobarbitone"],
    answer: 0,
    explanation: "Ethosuximide (T-type Ca²⁺ channel blocker in thalamus) is first-line for pure absence seizures. Valproate if absence coexists with other seizure types. Carbamazepine and phenytoin may WORSEN absence seizures.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_epi_002",
    topic: "epilepsy",
    year: "FMGE Jun 2018",
    q: "First-line treatment for status epilepticus is:",
    img: null,
    options: ["A. IV Lorazepam or IV Diazepam", "B. IV Phenytoin loading dose", "C. IM Phenobarbitone", "D. IV Levetiracetam"],
    answer: 0,
    explanation: "IV benzodiazepines (lorazepam 0.1 mg/kg or diazepam 0.15 mg/kg) are first-line for SE. If SE persists after two BZD doses → second-line: IV fosphenytoin, valproate, or levetiracetam. Refractory SE → anaesthesia.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_epi_003",
    topic: "epilepsy",
    year: "FMGE Dec 2018",
    q: "Most common cause of acquired epilepsy in young adults in India:",
    img: null,
    options: ["A. Idiopathic/genetic epilepsy", "B. Neurocysticercosis", "C. Brain tumors", "D. Post-traumatic epilepsy"],
    answer: 1,
    explanation: "Neurocysticercosis (NCC) from Taenia solium larvae is the most common cause of acquired epilepsy in developing countries including India. Ring-enhancing lesion on CT head is characteristic. Treat with albendazole + corticosteroids.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_epi_004",
    topic: "epilepsy",
    year: "FMGE Jun 2019",
    q: "AED causing gingival hyperplasia and hirsutism is:",
    img: null,
    options: ["A. Valproate", "B. Carbamazepine", "C. Phenytoin", "D. Ethosuximide"],
    answer: 2,
    explanation: "Phenytoin causes gingival hyperplasia, hirsutism, coarsening of facial features, acne, and peripheral neuropathy. Also: ataxia, diplopia, nystagmus, Stevens-Johnson syndrome. Fetal hydantoin syndrome (cleft palate, digit hypoplasia).",
    tags: ["PYQ"]
  },

  // ============ MENINGITIS ============
  {
    id: "med_mening_001",
    topic: "meningitis-encephalitis",
    year: "FMGE Dec 2019",
    q: "Most common cause of bacterial meningitis in adults:",
    img: null,
    options: ["A. Streptococcus pneumoniae", "B. Neisseria meningitidis", "C. Haemophilus influenzae", "D. Listeria monocytogenes"],
    answer: 0,
    explanation: "S. pneumoniae is the most common cause of bacterial meningitis in adults. N. meningitidis in young adults/college students (epidemic). H. influenzae in unvaccinated children. Listeria in neonates, elderly, immunocompromised.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_mening_002",
    topic: "meningitis-encephalitis",
    year: "FMGE Jun 2018",
    q: "CSF findings in bacterial meningitis:",
    img: null,
    options: ["A. Clear, low cells, normal glucose", "B. Turbid, high neutrophils (>1000), low glucose, high protein", "C. Xanthochromic, lymphocytes, normal glucose", "D. Clear, lymphocytes, normal glucose, normal protein"],
    answer: 1,
    explanation: "Bacterial: turbid/purulent, neutrophilic pleocytosis >1000 cells, protein >100 mg/dL, glucose <40 mg/dL (CSF:serum ratio <0.4). Viral = lymphocytic, normal glucose. TB = lymphocytic, very low glucose, very high protein.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_mening_003",
    topic: "meningitis-encephalitis",
    year: "FMGE Dec 2017",
    q: "India ink preparation diagnoses:",
    img: null,
    options: ["A. TB meningitis", "B. Bacterial meningitis", "C. Cryptococcal meningitis", "D. Herpes encephalitis"],
    answer: 2,
    explanation: "India ink shows the polysaccharide capsule of Cryptococcus neoformans as a clear halo around yeast cells. Seen in HIV/AIDS (CD4 <100). Also diagnosed by CrAg (cryptococcal antigen) in CSF/serum — more sensitive.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_mening_004",
    topic: "meningitis-encephalitis",
    year: "FMGE Jun 2020",
    q: "Most common cause of sporadic viral encephalitis and treatment:",
    img: null,
    options: ["A. HSV-1; IV Acyclovir", "B. Japanese encephalitis virus; IV Ribavirin", "C. Rabies; post-exposure prophylaxis", "D. Enterovirus; no specific treatment"],
    answer: 0,
    explanation: "HSV-1 is the most common cause of sporadic (non-epidemic) viral encephalitis. Temporal lobe involvement is characteristic (personality change, memory loss, seizures). MRI = T2 hyperintensity in temporal lobes. Treat with IV Acyclovir 10 mg/kg q8h for 14–21 days.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_mening_005",
    topic: "meningitis-encephalitis",
    year: "FMGE Dec 2021",
    q: "Kernig's sign in meningitis is:",
    img: null,
    options: ["A. Pain on neck flexion (anterior)", "B. Inability to extend knee >135° when hip is flexed 90°", "C. Hip and knee flex on passive neck flexion", "D. Reflex flexion of the opposite leg"],
    answer: 1,
    explanation: "Kernig's sign: hip flexed 90° → resistance/pain on extending knee beyond 135° (hamstring spasm from meningeal irritation). Brudzinski's sign: passive neck flexion → involuntary bilateral hip/knee flexion.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ SLE ============
  {
    id: "med_sle_001",
    topic: "sle-medicine",
    year: "FMGE Dec 2019",
    q: "Most sensitive screening test for SLE is:",
    img: null,
    options: ["A. ANA (antinuclear antibody)", "B. Anti-dsDNA", "C. Anti-Sm", "D. Anti-Ro (SSA)"],
    answer: 0,
    explanation: "ANA is the most sensitive screening test for SLE (positive in ~95–99% of SLE patients). However, ANA is non-specific (also positive in other autoimmune conditions and even 5% of normal population at low titers).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_sle_002",
    topic: "sle-medicine",
    year: "FMGE Jun 2018",
    q: "Most specific antibodies for SLE are:",
    img: null,
    options: ["A. Anti-dsDNA only", "B. Anti-Sm only", "C. Both anti-dsDNA and anti-Sm", "D. Anti-histone"],
    answer: 2,
    explanation: "Anti-dsDNA (titers correlate with disease activity, associated with nephritis) and anti-Sm (Smith) are both highly specific for SLE. Anti-histone = drug-induced lupus. Anti-Ro = neonatal lupus/Sjögren's.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_sle_003",
    topic: "sle-medicine",
    year: "FMGE Dec 2018",
    q: "Malar (butterfly) rash of SLE characteristically spares:",
    img: null,
    options: ["A. Forehead", "B. Nasolabial folds", "C. Malar eminences", "D. Bridge of nose"],
    answer: 1,
    explanation: "Malar rash: erythematous flat/raised rash over both cheeks and nasal bridge in butterfly distribution — spares the nasolabial folds (distinguishes from rosacea which involves nasolabial folds). Worsened by UV light.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_sle_004",
    topic: "sle-medicine",
    year: "FMGE Jun 2019",
    q: "Drug-induced lupus most commonly caused by:",
    img: null,
    options: ["A. Hydralazine and Procainamide", "B. Penicillin and tetracycline", "C. Aspirin and ibuprofen", "D. Rifampicin and INH"],
    answer: 0,
    explanation: "Most common causes of drug-induced lupus: Hydralazine, Procainamide, Isoniazid, Minocycline, TNF-inhibitors. Hallmark: anti-histone antibodies. Unlike SLE, renal and CNS involvement are rare. Resolves on stopping the drug.",
    tags: ["PYQ"]
  },

  // ============ TYPHOID ============
  {
    id: "med_typh_001",
    topic: "typhoid",
    year: "FMGE Dec 2019",
    q: "Gold standard for diagnosis of typhoid fever is:",
    img: null,
    options: ["A. Widal test", "B. Blood culture (1st week)", "C. Stool culture (3rd week)", "D. Bone marrow culture"],
    answer: 3,
    explanation: "Bone marrow culture is the gold standard for typhoid (sensitivity ~90–95%, even after antibiotics). Blood culture is the most practical (80–90% sensitivity in 1st week). Widal is supportive but has poor sensitivity/specificity.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_typh_002",
    topic: "typhoid",
    year: "FMGE Jun 2018",
    q: "Rose spots in typhoid appear on:",
    img: null,
    options: ["A. Face and neck in 1st week", "B. Abdomen/lower chest in 2nd week (10–20 lesions)", "C. Extremities in 3rd week", "D. Palms and soles throughout illness"],
    answer: 1,
    explanation: "Rose spots = pale salmon-colored blanching macules on abdomen/lower chest in the 2nd week (day 7–14). They represent bacterial emboli in superficial cutaneous vessels. Seen in only 25–30% of cases.",
    tags: ["PYQ"]
  },
  {
    id: "med_typh_003",
    topic: "typhoid",
    year: "FMGE Jun 2019",
    q: "Drug of choice for uncomplicated typhoid fever in India:",
    img: null,
    options: ["A. Ciprofloxacin / fluoroquinolone", "B. Chloramphenicol", "C. Amoxicillin", "D. Co-trimoxazole"],
    answer: 0,
    explanation: "Fluoroquinolones (ciprofloxacin/ofloxacin) remain most used for uncomplicated typhoid in India. For resistant strains (NARST/MDR typhoid): azithromycin (oral) or ceftriaxone (IV). Chloramphenicol is now second-line due to resistance.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_typh_004",
    topic: "typhoid",
    year: "FMGE Dec 2020",
    q: "Most common complication of typhoid fever is:",
    img: null,
    options: ["A. Intestinal perforation", "B. Hepatitis", "C. Myocarditis", "D. Intestinal hemorrhage"],
    answer: 3,
    explanation: "Intestinal hemorrhage (from Peyer's patch ulcers in terminal ileum) is the most common complication. Intestinal perforation (3rd week, ileum) is the most serious/lethal complication. Both result from necrosis of Peyer's patches.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ DENGUE ============
  {
    id: "med_den_001",
    topic: "dengue-medicine",
    year: "FMGE Dec 2019",
    q: "Vector of dengue fever in India:",
    img: null,
    options: ["A. Aedes aegypti (daytime biter)", "B. Anopheles mosquito (night biter)", "C. Culex quinquefasciatus", "D. Mansonia"],
    answer: 0,
    explanation: "Aedes aegypti is the primary vector for dengue (also chikungunya, Zika, yellow fever). Daytime biter, breeds in small clean water collections. Aedes albopictus is a secondary/jungle vector.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_den_002",
    topic: "dengue-medicine",
    year: "FMGE Jun 2018",
    q: "Dengue NS1 antigen is detectable in serum during:",
    img: null,
    options: ["A. Febrile phase (day 1–5 of illness)", "B. Critical phase (day 4–6) only", "C. Recovery phase (defervescence)", "D. Before onset of symptoms"],
    answer: 0,
    explanation: "NS1 antigen is detectable from day 1 of fever and persists for ~5 days — useful for early diagnosis before antibody development. IgM antibody appears from day 3–5 (primary) or day 1 (secondary infection).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_den_003",
    topic: "dengue-medicine",
    year: "FMGE Dec 2018",
    q: "Dengue hemorrhagic fever (WHO) requires all EXCEPT:",
    img: null,
    options: ["A. Fever 2–7 days", "B. Thrombocytopenia (<100,000/mm³)", "C. Evidence of plasma leakage", "D. Positive dengue blood culture"],
    answer: 3,
    explanation: "DHF criteria: Fever + Hemorrhagic manifestations + Thrombocytopenia <100,000 + Plasma leakage (hematocrit rise ≥20%, pleural effusion/ascites). Dengue is viral — blood culture is not used. NS1/PCR/serology are used.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_den_004",
    topic: "dengue-medicine",
    year: "FMGE Jun 2019",
    q: "Treatment of dengue hemorrhagic fever:",
    img: null,
    options: ["A. IV crystalloid fluids + supportive care (avoid aspirin)", "B. Aspirin + platelet transfusion", "C. Ribavirin antiviral", "D. Corticosteroids routinely"],
    answer: 0,
    explanation: "Dengue management is supportive: IV fluids for plasma leakage, paracetamol for fever. AVOID aspirin/NSAIDs (platelet dysfunction + Reye's). Platelet transfusion only if <20,000 or active significant bleeding. No specific antiviral exists.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ PNEUMONIA ============
  {
    id: "med_pneu_001",
    topic: "pneumonia",
    year: "FMGE Dec 2019",
    q: "Most common causative organism of community-acquired pneumonia (CAP):",
    img: null,
    options: ["A. Streptococcus pneumoniae", "B. Haemophilus influenzae", "C. Mycoplasma pneumoniae", "D. Klebsiella pneumoniae"],
    answer: 0,
    explanation: "Streptococcus pneumoniae (pneumococcus) is the most common cause of CAP at all ages. Features: sudden onset, high fever with rigors, rust-colored sputum, pleuritic chest pain, lobar consolidation on CXR.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_pneu_002",
    topic: "pneumonia",
    year: "FMGE Jun 2018",
    q: "Rust-colored sputum is characteristic of:",
    img: null,
    options: ["A. Klebsiella pneumoniae (currant-jelly)", "B. Streptococcus pneumoniae (lobar pneumonia)", "C. Staphylococcal pneumonia (blood-stained)", "D. Pseudomonas (blue-green)"],
    answer: 1,
    explanation: "Rust-colored (prune juice) sputum = Streptococcus pneumoniae from decomposed RBCs. Currant-jelly (bloody, mucoid) = Klebsiella. Foul-smelling/putrid = anaerobic aspiration pneumonia. Salmon-pink frothy = pulmonary edema.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_pneu_003",
    topic: "pneumonia",
    year: "FMGE Dec 2017",
    q: "Drug of choice for Legionella pneumophila pneumonia:",
    img: null,
    options: ["A. Amoxicillin", "B. Azithromycin or Levofloxacin", "C. Ceftriaxone", "D. Vancomycin"],
    answer: 1,
    explanation: "Legionella is intracellular — beta-lactams don't penetrate. DOC: macrolides (azithromycin) or fluoroquinolones (levofloxacin). Diagnosis: urine Legionella antigen (detects only L. pneumophila serogroup 1). Presents with hyponatremia + diarrhoea.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_pneu_004",
    topic: "pneumonia",
    year: "FMGE Jun 2019",
    q: "CURB-65 score for assessing CAP severity — components are:",
    img: null,
    options: ["A. CRP, Urea, RR, BP, Age ≥65", "B. Confusion, Urea >7 mmol/L, RR ≥30, BP <90/60, Age ≥65", "C. CT findings, Urea, RR, BP, Age ≥65", "D. Creatinine, Urea, RR, BP, Age"],
    answer: 1,
    explanation: "CURB-65: Confusion (new mental changes) + Urea >7 mmol/L + RR ≥30/min + BP <90 systolic or ≤60 diastolic + Age ≥65. Score 0–1: home; 2: hospital; ≥3: consider ICU. PSI/PORT score is more comprehensive.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_pneu_005",
    topic: "pneumonia",
    year: "FMGE Dec 2020",
    q: "Hospital-acquired pneumonia (after 48h of admission) is most commonly caused by:",
    img: null,
    options: ["A. Streptococcus pneumoniae", "B. Gram-negative organisms (Pseudomonas, Klebsiella, Acinetobacter)", "C. Mycoplasma pneumoniae", "D. Legionella"],
    answer: 1,
    explanation: "HAP/VAP is dominated by Gram-negative bacilli: Pseudomonas aeruginosa, Klebsiella, Acinetobacter, E. coli (especially late-onset/ventilated patients). Early-onset HAP (<5 days) may involve MRSA. Empirical broad-spectrum antibiotics covering these organisms.",
    tags: ["PYQ"]
  },

  // ============ PLEURAL EFFUSION ============
  {
    id: "med_pe_001",
    topic: "pleural-effusion",
    year: "FMGE Dec 2019",
    q: "Light's criteria are used to differentiate pleural effusion as:",
    img: null,
    options: ["A. Exudate vs transudate", "B. Chylous vs haemorrhagic", "C. Bacterial vs viral", "D. Malignant vs benign"],
    answer: 0,
    explanation: "Light's criteria (protein ratio, LDH ratio, pleural LDH) classify exudates: protein >0.5, LDH >0.6, or LDH >2/3 upper normal serum LDH.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_pe_002",
    topic: "pleural-effusion",
    year: "FMGE Jun 2018",
    q: "Most common cause of transudative pleural effusion is:",
    img: null,
    options: ["A. Malignancy", "B. Congestive heart failure", "C. Tuberculosis", "D. Parapneumonic"],
    answer: 1,
    explanation: "Left heart failure raises pulmonary capillary pressure causing bilateral transudative effusions.",
    tags: ["PYQ"]
  },
  {
    id: "med_pe_003",
    topic: "pleural-effusion",
    year: "FMGE Dec 2018",
    q: "Most common cause of exudative pleural effusion in India is:",
    img: null,
    options: ["A. Rheumatoid arthritis", "B. Tuberculosis", "C. Heart failure", "D. Nephrotic syndrome"],
    answer: 1,
    explanation: "Tubercular pleural effusion is the leading exudative cause in developing countries.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_pe_004",
    topic: "pleural-effusion",
    year: "FMGE Jun 2019",
    q: "On physical examination, dull note and decreased breath sounds with absent vocal fremitus suggest:",
    img: null,
    options: ["A. Pneumothorax", "B. Pleural effusion", "C. Consolidation", "D. Emphysema"],
    answer: 1,
    explanation: "Pleural fluid causes stony dullness; consolidation has dullness but increased fremitus and bronchial breath sounds.",
    tags: ["PYQ"]
  },
  {
    id: "med_pe_005",
    topic: "pleural-effusion",
    year: "FMGE Dec 2020",
    q: "Low glucose in pleural fluid is classically seen in:",
    img: null,
    options: ["A. Heart failure", "B. Rheumatoid arthritis/TB/malignancy", "C. Nephrotic syndrome", "D. Liver cirrhosis"],
    answer: 1,
    explanation: "Pleural fluid glucose <60 mg/dL is seen in RA, TB, empyema, malignancy, and oesophageal rupture.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ LUNG CANCER ============
  {
    id: "med_lc_001",
    topic: "lung-cancer",
    year: "FMGE Dec 2019",
    q: "Most common primary lung cancer is:",
    img: null,
    options: ["A. Small cell carcinoma", "B. Adenocarcinoma", "C. Squamous cell carcinoma", "D. Large cell carcinoma"],
    answer: 1,
    explanation: "Adenocarcinoma is now the most common lung cancer overall (including non-smokers); peripheral location.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_lc_002",
    topic: "lung-cancer",
    year: "FMGE Jun 2018",
    q: "Paraneoplastic SIADH and Cushing syndrome are classically associated with:",
    img: null,
    options: ["A. Adenocarcinoma", "B. Small cell lung cancer", "C. Squamous cell carcinoma", "D. Carcinoid"],
    answer: 1,
    explanation: "SCLC produces ADH and ACTH ectopically; it also causes Lambert-Eaton syndrome.",
    tags: ["PYQ"]
  },
  {
    id: "med_lc_003",
    topic: "lung-cancer",
    year: "FMGE Dec 2018",
    q: "Pancoast tumor causes Horner syndrome by involving:",
    img: null,
    options: ["A. Phrenic nerve", "B. Stellate ganglion (cervical sympathetic chain)", "C. Recurrent laryngeal nerve", "D. Vagus nerve"],
    answer: 1,
    explanation: "Superior sulcus tumor invades the stellate ganglion causing ptosis, miosis, and anhidrosis.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_lc_004",
    topic: "lung-cancer",
    year: "FMGE Jun 2019",
    q: "Hypercalcemia as a paraneoplastic syndrome is most associated with:",
    img: null,
    options: ["A. Small cell carcinoma", "B. Squamous cell carcinoma (PTHrP)", "C. Adenocarcinoma", "D. Mesothelioma"],
    answer: 1,
    explanation: "SCC secretes PTHrP causing hypercalcemia of malignancy.",
    tags: ["PYQ"]
  },
  {
    id: "med_lc_005",
    topic: "lung-cancer",
    year: "FMGE Dec 2020",
    q: "Best imaging for staging lung cancer and mediastinal involvement is:",
    img: null,
    options: ["A. Chest X-ray", "B. CT chest + PET scan", "C. MRI spine only", "D. Bone scan alone"],
    answer: 1,
    explanation: "CT-PET provides metabolic and anatomical staging information together.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ UTI & PYELONEPHRITIS ============
  {
    id: "med_uti_001",
    topic: "uti-pyelonephritis",
    year: "FMGE Dec 2019",
    q: "Most common causative organism in community-acquired UTI is:",
    img: null,
    options: ["A. Klebsiella pneumoniae", "B. Escherichia coli", "C. Enterococcus faecalis", "D. Proteus mirabilis"],
    answer: 1,
    explanation: "E. coli accounts for ~80% of community UTIs due to its ability to adhere to uroepithelium.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_uti_002",
    topic: "uti-pyelonephritis",
    year: "FMGE Jun 2018",
    q: "Significant bacteriuria is defined as:",
    img: null,
    options: ["A. >10^3 CFU/mL", "B. >10^5 CFU/mL in midstream urine", "C. Any growth on culture", "D. >10^4 only in females"],
    answer: 1,
    explanation: "≥10^5 colony-forming units per mL in a properly collected MSU specimen.",
    tags: ["PYQ"]
  },
  {
    id: "med_uti_003",
    topic: "uti-pyelonephritis",
    year: "FMGE Dec 2018",
    q: "Drug of choice for uncomplicated UTI in non-pregnant women in India is often:",
    img: null,
    options: ["A. Nitrofurantoin", "B. IV vancomycin", "C. Metronidazole", "D. Fluconazole"],
    answer: 0,
    explanation: "Nitrofurantoin or co-trimoxazole (where sensitivity allows) are first-line for uncomplicated cystitis.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_uti_004",
    topic: "uti-pyelonephritis",
    year: "FMGE Jun 2019",
    q: "Acute pyelonephritis is clinically characterised by:",
    img: null,
    options: ["A. Dysuria alone", "B. Fever, flank pain, and costovertebral angle tenderness", "C. Proteinuria without fever", "D. Haematuria without pain"],
    answer: 1,
    explanation: "Upper urinary tract infection causes systemic features: fever, rigors, loin pain, and CVA tenderness.",
    tags: ["PYQ"]
  },
  {
    id: "med_uti_005",
    topic: "uti-pyelonephritis",
    year: "FMGE Dec 2020",
    q: "Sterile pyuria (pus cells without bacterial growth) is classically associated with:",
    img: null,
    options: ["A. E. coli cystitis", "B. Renal tuberculosis", "C. Streptococcal cystitis", "D. Candida UTI"],
    answer: 1,
    explanation: "Renal TB is the classic cause; other causes include chlamydial urethritis, interstitial nephritis.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ PEPTIC ULCER DISEASE ============
  {
    id: "med_pud_001",
    topic: "peptic-ulcer",
    year: "FMGE Dec 2019",
    q: "Most common cause of peptic ulcer disease worldwide is:",
    img: null,
    options: ["A. NSAIDs", "B. H. pylori infection", "C. Stress", "D. Alcohol"],
    answer: 1,
    explanation: "H. pylori is implicated in ~95% of duodenal ulcers and ~70% of gastric ulcers.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_pud_002",
    topic: "peptic-ulcer",
    year: "FMGE Jun 2018",
    q: "Classic feature distinguishing duodenal from gastric ulcer pain is:",
    img: null,
    options: ["A. Duodenal: relieved by food, worse 2-3h after", "B. Gastric: relieved by food and worse 2-3h after", "C. Both worse immediately after food", "D. No difference"],
    answer: 0,
    explanation: "Duodenal ulcer pain is relieved by food and recurs 2–3 hours later (hunger pain); gastric ulcer pain is often worsened by food.",
    tags: ["PYQ"]
  },
  {
    id: "med_pud_003",
    topic: "peptic-ulcer",
    year: "FMGE Dec 2018",
    q: "Triple therapy for H. pylori eradication includes PPI plus:",
    img: null,
    options: ["A. Amoxicillin + Clarithromycin", "B. Vancomycin + Gentamicin", "C. Metronidazole + Fluconazole", "D. Tetracycline only"],
    answer: 0,
    explanation: "Standard triple therapy: PPI + clarithromycin + amoxicillin for 7–14 days.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_pud_004",
    topic: "peptic-ulcer",
    year: "FMGE Jun 2019",
    q: "Perforation of peptic ulcer most commonly occurs at:",
    img: null,
    options: ["A. Gastric body", "B. Anterior wall of duodenum", "C. Pylorus", "D. Fundus of stomach"],
    answer: 1,
    explanation: "Anterior duodenal ulcers typically perforate, while posterior ones tend to bleed by eroding the gastroduodenal artery.",
    tags: ["PYQ"]
  },
  {
    id: "med_pud_005",
    topic: "peptic-ulcer",
    year: "FMGE Dec 2020",
    q: "Zollinger-Ellison syndrome is due to:",
    img: null,
    options: ["A. H. pylori alone", "B. Gastrinoma (gastrin-secreting tumor)", "C. Carcinoid tumor of jejunum", "D. VIPoma"],
    answer: 1,
    explanation: "Gastrin-secreting tumor in pancreas/duodenum causes multiple refractory ulcers with diarrhoea.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ GERD & BARRETT'S ============
  {
    id: "med_gerd_001",
    topic: "gerd-barretts",
    year: "FMGE Dec 2019",
    q: "Lower oesophageal sphincter incompetence leads to:",
    img: null,
    options: ["A. Achalasia", "B. GERD", "C. Zenker diverticulum", "D. Oesophageal carcinoma alone"],
    answer: 1,
    explanation: "Reduced LOS tone is the primary pathophysiological mechanism in GERD.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_gerd_002",
    topic: "gerd-barretts",
    year: "FMGE Jun 2018",
    q: "Barrett's oesophagus is diagnosed by:",
    img: null,
    options: ["A. Barium swallow alone", "B. Endoscopy with biopsy showing intestinal metaplasia", "C. pH monitoring only", "D. Manometry"],
    answer: 1,
    explanation: "Intestinal metaplasia (goblet cells replacing squamous epithelium) above Z-line on biopsy is diagnostic.",
    tags: ["PYQ"]
  },
  {
    id: "med_gerd_003",
    topic: "gerd-barretts",
    year: "FMGE Dec 2018",
    q: "Barrett's oesophagus predisposes to:",
    img: null,
    options: ["A. Squamous cell carcinoma", "B. Oesophageal adenocarcinoma", "C. Achalasia", "D. Boerhaave syndrome"],
    answer: 1,
    explanation: "Intestinal metaplasia is a premalignant condition progressing to adenocarcinoma.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_gerd_004",
    topic: "gerd-barretts",
    year: "FMGE Jun 2019",
    q: "First-line pharmacological treatment for GERD is:",
    img: null,
    options: ["A. H2 blockers", "B. Proton pump inhibitors", "C. Antacids alone", "D. Prokinetics only"],
    answer: 1,
    explanation: "PPIs are superior acid suppressants and are first-line for erosive and non-erosive GERD.",
    tags: ["PYQ"]
  },

  // ============ GOUT & PSEUDOGOUT ============
  {
    id: "med_gout_001",
    topic: "gout-pseudogout",
    year: "FMGE Dec 2019",
    q: "Classic drug that precipitates acute gout is:",
    img: null,
    options: ["A. Aspirin at low dose", "B. Allopurinol initiation without prophylaxis", "C. Colchicine alone", "D. Indomethacin"],
    answer: 1,
    explanation: "Starting allopurinol without colchicine prophylaxis can mobilise urate crystals and trigger acute attacks.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_gout_002",
    topic: "gout-pseudogout",
    year: "FMGE Jun 2018",
    q: "Drug of choice for acute gout attack is:",
    img: null,
    options: ["A. Allopurinol", "B. NSAIDs (e.g. indomethacin) or colchicine", "C. Uricosuric agents", "D. Pegloticase"],
    answer: 1,
    explanation: "Indomethacin, colchicine, or steroids are used for acute attacks; urate-lowering therapy is initiated after.",
    tags: ["PYQ"]
  },
  {
    id: "med_gout_003",
    topic: "gout-pseudogout",
    year: "FMGE Dec 2018",
    q: "Uric acid target for gout patients on ULT is generally:",
    img: null,
    options: ["A. <8 mg/dL", "B. <6 mg/dL", "C. <10 mg/dL", "D. <12 mg/dL"],
    answer: 1,
    explanation: "Serum urate <6 mg/dL reduces crystal burden and prevents attacks.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_gout_004",
    topic: "gout-pseudogout",
    year: "FMGE Jun 2019",
    q: "CPPD crystals differ from urate crystals by being:",
    img: null,
    options: ["A. Needle-shaped negatively birefringent", "B. Rhomboid positively birefringent", "C. No birefringence", "D. Round non-crystalline"],
    answer: 1,
    explanation: "Calcium pyrophosphate crystals are short rhomboidal and show positive birefringence.",
    tags: ["PYQ"]
  },
  {
    id: "med_gout_005",
    topic: "gout-pseudogout",
    year: "FMGE Dec 2020",
    q: "Pseudogout most commonly affects:",
    img: null,
    options: ["A. First MTP joint", "B. Knee joint", "C. Hip", "D. Elbow"],
    answer: 1,
    explanation: "CPPD disease (pseudogout) classically involves the knee.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ THYROID DISORDERS (MEDICINE) ============
  {
    id: "med_thy_001",
    topic: "thyroid-medicine",
    year: "FMGE Dec 2019",
    q: "Most common cause of hypothyroidism in developed countries is:",
    img: null,
    options: ["A. Iodine deficiency", "B. Hashimoto thyroiditis", "C. Post-thyroidectomy", "D. Drug-induced"],
    answer: 1,
    explanation: "Hashimoto's (autoimmune) thyroiditis is the leading cause in iodine-sufficient regions.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_thy_002",
    topic: "thyroid-medicine",
    year: "FMGE Jun 2018",
    q: "Most common cause of hyperthyroidism is:",
    img: null,
    options: ["A. Toxic multinodular goitre", "B. Graves disease", "C. Thyroid adenoma", "D. Amiodarone"],
    answer: 1,
    explanation: "Graves disease (TSH-receptor antibody stimulation) accounts for ~80% of hyperthyroid cases.",
    tags: ["PYQ"]
  },
  {
    id: "med_thy_003",
    topic: "thyroid-medicine",
    year: "FMGE Dec 2018",
    q: "TSH in primary hypothyroidism is:",
    img: null,
    options: ["A. Low", "B. High", "C. Normal always", "D. Fluctuating without pattern"],
    answer: 1,
    explanation: "Loss of negative feedback from low T3/T4 raises TSH in primary thyroid failure.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_thy_004",
    topic: "thyroid-medicine",
    year: "FMGE Jun 2019",
    q: "Treatment of choice for Graves hyperthyroidism in non-pregnant adult is:",
    img: null,
    options: ["A. Propranolol alone", "B. Radioiodine I-131 or antithyroids", "C. Calcitonin", "D. Thyroid replacement"],
    answer: 1,
    explanation: "Antithyroids (carbimazole/propylthiouracil) or radioiodine ablation are standard.",
    tags: ["PYQ"]
  },
  {
    id: "med_thy_005",
    topic: "thyroid-medicine",
    year: "FMGE Dec 2020",
    q: "Classic eye finding in Graves disease is:",
    img: null,
    options: ["A. Cataract", "B. Proptosis (exophthalmos)", "C. Papilloedema", "D. Macular degeneration"],
    answer: 1,
    explanation: "Thyroid-associated orbitopathy causes proptosis due to orbital soft tissue inflammation.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ RHEUMATOID ARTHRITIS (MEDICINE) ============
  {
    id: "med_ra_001",
    topic: "rheumatoid-arthritis",
    year: "FMGE Dec 2019",
    q: "Symmetric polyarthritis of small joints with morning stiffness >1 hour is diagnostic of:",
    img: null,
    options: ["A. Osteoarthritis", "B. Rheumatoid arthritis", "C. Gout", "D. Reactive arthritis"],
    answer: 1,
    explanation: "Symmetric small-joint involvement, morning stiffness, RF/anti-CCP positivity characterise RA.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_ra_002",
    topic: "rheumatoid-arthritis",
    year: "FMGE Jun 2018",
    q: "Extra-articular manifestation of RA that can cause sudden death is:",
    img: null,
    options: ["A. Raynaud phenomenon", "B. Atlanto-axial subluxation", "C. Rheumatoid nodule", "D. Pleuritis"],
    answer: 1,
    explanation: "Atlantoaxial instability from odontoid erosion can compress the cord and be fatal.",
    tags: ["PYQ"]
  },
  {
    id: "med_ra_003",
    topic: "rheumatoid-arthritis",
    year: "FMGE Dec 2018",
    q: "Felty syndrome consists of RA + splenomegaly + :",
    img: null,
    options: ["A. Hepatomegaly", "B. Leucopenia/Neutropenia", "C. Thrombocytosis", "D. Polycythaemia"],
    answer: 1,
    explanation: "Felty syndrome: seropositive RA, splenomegaly, neutropenia — increased infection risk.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_ra_004",
    topic: "rheumatoid-arthritis",
    year: "FMGE Jun 2019",
    q: "Caplan syndrome is RA associated with:",
    img: null,
    options: ["A. Renal amyloidosis", "B. Pulmonary nodules in pneumoconiosis", "C. Cardiac tamponade", "D. Vasculitis only"],
    answer: 1,
    explanation: "Caplan syndrome: large pulmonary nodules in coalworkers/miners with RA.",
    tags: ["PYQ"]
  },

  // ============ SLE (MEDICINE) ============
  {
    id: "med_sle_001",
    topic: "sle-medicine",
    year: "FMGE Dec 2019",
    q: "Most common cause of death in SLE patients currently is:",
    img: null,
    options: ["A. Renal failure alone", "B. Infections and cardiovascular disease", "C. Neuropsychiatric SLE", "D. Haematological crisis"],
    answer: 1,
    explanation: "Infections (often from immunosuppression) and accelerated CVD are leading causes of death.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_sle_002",
    topic: "sle-medicine",
    year: "FMGE Jun 2018",
    q: "Butterfly malar rash in SLE spares:",
    img: null,
    options: ["A. Cheeks", "B. Nasolabial folds", "C. Nasal bridge", "D. Periorbital skin"],
    answer: 1,
    explanation: "Malar rash crosses nasal bridge, covers cheeks but characteristically spares nasolabial folds.",
    tags: ["PYQ"]
  },
  {
    id: "med_sle_003",
    topic: "sle-medicine",
    year: "FMGE Dec 2018",
    q: "Drug-induced lupus is most commonly associated with:",
    img: null,
    options: ["A. Aspirin", "B. Hydralazine, procainamide, isoniazid", "C. Metformin", "D. Atorvastatin"],
    answer: 1,
    explanation: "Anti-histone antibodies with DIL due to hydralazine, procainamide; rare ANA-sparing dsDNA.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ RABIES ============
  {
    id: "med_rab_001",
    topic: "rabies",
    year: "FMGE Dec 2019",
    q: "Pathognomonic histological finding in rabies is:",
    img: null,
    options: ["A. Cowdry A inclusions", "B. Negri bodies in hippocampal neurons", "C. Multinucleate giant cells", "D. Russell bodies"],
    answer: 1,
    explanation: "Negri bodies (cytoplasmic eosinophilic inclusions) in Purkinje and hippocampal cells are pathognomonic.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_rab_002",
    topic: "rabies",
    year: "FMGE Jun 2018",
    q: "Post-exposure prophylaxis for rabies in a previously unvaccinated person includes:",
    img: null,
    options: ["A. Vaccine alone (5 doses)", "B. Wound wash + rabies immunoglobulin + vaccine", "C. Antibiotics alone", "D. Only wound wash"],
    answer: 1,
    explanation: "Category III: HRIG infiltrated at wound + vaccine schedule (days 0,3,7,14,28).",
    tags: ["PYQ"]
  },
  {
    id: "med_rab_003",
    topic: "rabies",
    year: "FMGE Dec 2018",
    q: "Classic feature of furious (encephalitic) rabies is:",
    img: null,
    options: ["A. Flaccid paralysis", "B. Hydrophobia and aerophobia", "C. Jaundice", "D. Skin rash"],
    answer: 1,
    explanation: "Painful laryngeal/pharyngeal spasms on swallowing (hydrophobia) are characteristic.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_rab_004",
    topic: "rabies",
    year: "FMGE Jun 2019",
    q: "Incubation period of rabies is most commonly:",
    img: null,
    options: ["A. 1–5 days", "B. 20–90 days", "C. 6–12 months only", "D. >2 years always"],
    answer: 1,
    explanation: "Average incubation is 1–3 months; depends on site and severity of wound (head bites shorter).",
    tags: ["PYQ"]
  },

  // ---- top-up: +1 per underfilled topic ----
  {
    id: "med_cirr_005",
    topic: "cirrhosis-portal-htn",
    year: "FMGE Jun 2019",
    q: "Most common cause of portal hypertension in India is:",
    img: null,
    options: ["A. Budd-Chiari syndrome", "B. Liver cirrhosis (usually alcohol or HBV/HCV)", "C. Portal vein thrombosis", "D. Right heart failure"],
    answer: 1,
    explanation: "Cirrhosis-related intrahepatic portal HTN is the most common cause worldwide and in India.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_copd_005",
    topic: "copd",
    year: "FMGE Jun 2019",
    q: "FEV1/FVC ratio <0.7 post-bronchodilator is diagnostic of:",
    img: null,
    options: ["A. Asthma", "B. COPD (obstructive ventilatory defect)", "C. Pulmonary fibrosis", "D. Normal spirometry"],
    answer: 1,
    explanation: "GOLD criteria: fixed post-BD FEV1/FVC <0.70 confirms airflow limitation in COPD.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_den_005",
    topic: "dengue-medicine",
    year: "FMGE Jun 2019",
    q: "Warning signs in dengue that indicate impending severe disease include:",
    img: null,
    options: ["A. Mild fever and headache", "B. Abdominal pain, persistent vomiting, rapid clinical deterioration, mucosal bleed", "C. Simple rash without any systemic signs", "D. Lymphadenopathy only"],
    answer: 1,
    explanation: "WHO 2009 warning signs: abdominal pain/tenderness, persistent vomiting, clinical fluid accumulation, mucosal bleed, lethargy, liver enlargement >2 cm, rising HCT with rapid platelet drop.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_epi_005",
    topic: "epilepsy",
    year: "FMGE Jun 2019",
    q: "Drug of choice for absence seizures in children is:",
    img: null,
    options: ["A. Phenytoin", "B. Ethosuximide (or valproate)", "C. Carbamazepine", "D. Phenobarbitone"],
    answer: 1,
    explanation: "Ethosuximide is first-line for pure absence; valproate is used when absence co-exists with generalised tonic-clonic seizures.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_gerd_005",
    topic: "gerd-barretts",
    year: "FMGE Jun 2019",
    q: "Surveillance interval for non-dysplastic Barrett's oesophagus is typically:",
    img: null,
    options: ["A. Every 6 months", "B. Every 3–5 years endoscopy", "C. Annual CT scan", "D. No surveillance needed"],
    answer: 1,
    explanation: "Non-dysplastic Barrett's: endoscopic surveillance every 3–5 years per BSG/ACG guidelines.",
    tags: ["PYQ"]
  },
  {
    id: "med_rab_005",
    topic: "rabies",
    year: "FMGE Jun 2019",
    q: "Paralytic (dumb) rabies is characterised by:",
    img: null,
    options: ["A. Hydrophobia and agitation", "B. Ascending flaccid paralysis resembling Guillain-Barré syndrome", "C. Seizures only", "D. Rapid death within 24 hours always"],
    answer: 1,
    explanation: "Paralytic form (~20%): ascending paralysis from the bite site without agitation; often misdiagnosed as GBS.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_ra_005",
    topic: "rheumatoid-arthritis",
    year: "FMGE Jun 2019",
    q: "Most specific antibody for rheumatoid arthritis is:",
    img: null,
    options: ["A. ANA", "B. Anti-CCP (anti-cyclic citrullinated peptide)", "C. Anti-dsDNA", "D. ANCA"],
    answer: 1,
    explanation: "Anti-CCP has ~97% specificity for RA and can be positive years before clinical disease.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "med_typh_005",
    topic: "typhoid",
    year: "FMGE Jun 2019",
    q: "Most common complication of typhoid fever requiring emergency surgery is:",
    img: null,
    options: ["A. Hepatitis", "B. Intestinal perforation (ileal)", "C. Myocarditis", "D. Encephalopathy"],
    answer: 1,
    explanation: "Perforation of Peyer's patches in the terminal ileum (3rd week) is the most dangerous surgical complication.",
    tags: ["PYQ", "high-yield"]
  },


        {
                id: "med_hep_009",
                topic: "viral-hepatitis",
                year: "FMGE Jun 2022",
                q: "A pregnant woman with high HBV DNA in third trimester should receive which antiviral to reduce vertical transmission?",
                img: null,
                options: ["A. Interferon alfa", "B. Tenofovir disoproxil fumarate", "C. Lamivudine only after delivery", "D. Ribavirin"],
                answer: 1,
                explanation: "In chronic HBV during pregnancy, mothers with high viral load (typically >200,000 IU/mL) are given tenofovir in the third trimester to reduce perinatal transmission. Newborn prophylaxis remains essential: hepatitis B vaccine + HBIG within 12 hours of birth.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_hep_010",
                topic: "viral-hepatitis",
                year: "FMGE Dec 2021",
                q: "Which serologic marker indicates high infectivity in hepatitis B?",
                img: null,
                options: ["A. Anti-HBs", "B. Anti-HBc IgG", "C. HBeAg", "D. Anti-HBe"],
                answer: 2,
                explanation: "HBeAg positivity correlates with active viral replication and high infectivity. Seroconversion to anti-HBe usually indicates lower infectivity. HBsAg indicates current infection, while anti-HBs indicates immunity.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "med_neph_009",
                topic: "nephrotic-nephritic",
                year: "FMGE Jun 2022",
                q: "Which is the most common cause of nephrotic syndrome in adults?",
                img: null,
                options: ["A. Minimal change disease", "B. Membranous nephropathy", "C. Post-streptococcal glomerulonephritis", "D. IgA nephropathy"],
                answer: 1,
                explanation: "In adults, membranous nephropathy is a common primary cause of nephrotic syndrome. In children, minimal change disease is most common. Nephrotic syndrome features: heavy proteinuria (>3.5 g/day), hypoalbuminemia, edema, hyperlipidemia, and lipiduria.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_neph_010",
                topic: "nephrotic-nephritic",
                year: "FMGE Dec 2021",
                q: "RBC casts in urine are classically seen in:",
                img: null,
                options: ["A. Nephrotic syndrome", "B. Acute glomerulonephritis (nephritic syndrome)", "C. Pre-renal azotemia", "D. Simple cystitis"],
                answer: 1,
                explanation: "RBC casts indicate glomerular bleeding and are a hallmark of nephritic syndrome (e.g., post-infectious GN, IgA nephropathy, RPGN). Nephritic syndrome usually presents with hematuria, hypertension, edema, and reduced GFR.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "med_aki_007",
                topic: "aki-ckd",
                year: "FMGE Jun 2022",
                q: "RIFLE/AKIN/KDIGO classify AKI primarily based on:",
                img: null,
                options: ["A. Urine protein level only", "B. Rise in serum creatinine and/or reduction in urine output", "C. Serum potassium only", "D. Need for dialysis only"],
                answer: 1,
                explanation: "Modern AKI definitions (especially KDIGO) use increase in serum creatinine and decrease in urine output. KDIGO AKI: increase in creatinine by 0.3 mg/dL within 48 h, or 1.5 times baseline within 7 days, or urine output <0.5 mL/kg/h for 6 h.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_aki_008",
                topic: "aki-ckd",
                year: "FMGE Dec 2021",
                q: "The most common cause of chronic kidney disease (CKD) worldwide is:",
                img: null,
                options: ["A. Glomerulonephritis", "B. Diabetes mellitus", "C. Polycystic kidney disease", "D. Obstructive uropathy"],
                answer: 1,
                explanation: "Diabetes mellitus is the leading cause of CKD globally, followed by hypertension. Diabetic kidney disease is characterized by albuminuria and progressive decline in GFR over years.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_aki_009",
                topic: "aki-ckd",
                year: "FMGE Jun 2021",
                q: "Indication for urgent dialysis in AKI includes all EXCEPT:",
                img: null,
                options: ["A. Refractory hyperkalemia", "B. Severe metabolic acidosis not responding to therapy", "C. Uremic encephalopathy/pericarditis", "D. Mild asymptomatic rise in creatinine"],
                answer: 3,
                explanation: "Emergency dialysis indications are remembered by AEIOU: Acidosis, Electrolyte imbalance (especially hyperkalemia), Intoxication, Overload (pulmonary edema), and Uremic complications. Mild asymptomatic creatinine rise alone is not an emergency indication.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_aki_010",
                topic: "aki-ckd",
                year: "FMGE Dec 2020",
                q: "Most common cause of AKI in hospitalized patients is:",
                img: null,
                options: ["A. Post-renal obstruction", "B. Acute tubular necrosis (ischemic or nephrotoxic)", "C. Rapidly progressive glomerulonephritis", "D. Interstitial nephritis"],
                answer: 1,
                explanation: "In hospitalized and ICU patients, acute tubular necrosis is a leading cause of intrinsic AKI, usually due to ischemia (sepsis, shock) or nephrotoxins (contrast, aminoglycosides). Urinalysis may show muddy brown granular casts.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "med_stroke_007",
                topic: "stroke-tia",
                year: "FMGE Jun 2022",
                q: "The most common type of stroke is:",
                img: null,
                options: ["A. Subarachnoid hemorrhage", "B. Intracerebral hemorrhage", "C. Ischemic stroke", "D. Cerebral venous thrombosis"],
                answer: 2,
                explanation: "Ischemic stroke accounts for around 80-85% of all strokes. Hemorrhagic stroke (intracerebral + subarachnoid hemorrhage) accounts for the rest. Early CT brain helps differentiate ischemic from hemorrhagic stroke.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_stroke_008",
                topic: "stroke-tia",
                year: "FMGE Dec 2021",
                q: "Intravenous alteplase (tPA) for acute ischemic stroke is generally given within:",
                img: null,
                options: ["A. 1 hour of symptom onset", "B. 3-4.5 hours of symptom onset in eligible patients", "C. 12 hours in all patients", "D. 24 hours in all patients"],
                answer: 1,
                explanation: "IV thrombolysis with alteplase is recommended within 4.5 hours of onset in selected patients after excluding hemorrhage on CT and contraindications. Mechanical thrombectomy has a wider window in selected large vessel occlusion cases.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_stroke_009",
                topic: "stroke-tia",
                year: "FMGE Jun 2021",
                q: "A transient ischemic attack (TIA) is defined as focal neurologic deficit that resolves within:",
                img: null,
                options: ["A. 6 hours", "B. 12 hours", "C. 24 hours (classical definition)", "D. 72 hours"],
                answer: 2,
                explanation: "Classically, TIA was defined as neurologic deficit resolving within 24 hours. Tissue-based modern definitions describe TIA as transient neurologic dysfunction without acute infarction on imaging.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_stroke_010",
                topic: "stroke-tia",
                year: "FMGE Dec 2020",
                q: "Most common site of hypertensive intracerebral hemorrhage is:",
                img: null,
                options: ["A. Cerebellum", "B. Pons", "C. Basal ganglia (putamen)", "D. Occipital lobe"],
                answer: 2,
                explanation: "Chronic hypertension causes lipohyalinosis and Charcot-Bouchard microaneurysms, classically leading to deep hemorrhages in basal ganglia (especially putamen), thalamus, pons, and cerebellum.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "med_mal_008",
                topic: "malaria-medicine",
                year: "FMGE Jun 2022",
                q: "Most severe form of malaria with high mortality is caused by:",
                img: null,
                options: ["A. Plasmodium vivax", "B. Plasmodium ovale", "C. Plasmodium malariae", "D. Plasmodium falciparum"],
                answer: 3,
                explanation: "Plasmodium falciparum causes severe malaria due to cytoadherence and microvascular sequestration, leading to cerebral malaria, acute kidney injury, ARDS, severe anemia, and metabolic acidosis.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_mal_009",
                topic: "malaria-medicine",
                year: "FMGE Dec 2021",
                q: "Radical cure to eradicate hypnozoites in P. vivax and P. ovale requires:",
                img: null,
                options: ["A. Chloroquine only", "B. Artemisinin combination therapy only", "C. Primaquine (after checking G6PD status)", "D. Quinine plus doxycycline"],
                answer: 2,
                explanation: "Liver hypnozoites in vivax/ovale are eradicated by primaquine (or tafenoquine where applicable). G6PD testing is needed before primaquine to avoid severe hemolysis in deficient individuals.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_mal_010",
                topic: "malaria-medicine",
                year: "FMGE Jun 2021",
                q: "First-line treatment for severe falciparum malaria is:",
                img: null,
                options: ["A. Oral chloroquine", "B. IV artesunate", "C. Oral artemether-lumefantrine only", "D. Primaquine only"],
                answer: 1,
                explanation: "WHO recommends IV artesunate as first-line therapy for severe malaria. After stabilization and ability to take oral medication, complete treatment with an effective ACT regimen.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "med_asthma_006",
                topic: "asthma",
                year: "FMGE Jun 2022",
                q: "Most characteristic spirometry finding in bronchial asthma is:",
                img: null,
                options: ["A. Irreversible airflow obstruction", "B. Reversible airflow obstruction with significant bronchodilator response", "C. Restrictive pattern", "D. Reduced TLC with normal FEV1/FVC"],
                answer: 1,
                explanation: "Asthma shows variable and reversible airflow limitation. Significant bronchodilator response is classically an increase in FEV1 by at least 12% and at least 200 mL from baseline after inhaled bronchodilator.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_asthma_007",
                topic: "asthma",
                year: "FMGE Dec 2021",
                q: "Controller medication of first choice in persistent asthma is:",
                img: null,
                options: ["A. Oral theophylline", "B. Inhaled corticosteroid", "C. Short-acting beta-2 agonist alone", "D. Oral antihistamine"],
                answer: 1,
                explanation: "Inhaled corticosteroids are the cornerstone of long-term control therapy in persistent asthma because they reduce airway inflammation, exacerbations, and improve symptoms and lung function.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_asthma_008",
                topic: "asthma",
                year: "FMGE Jun 2021",
                q: "Status asthmaticus is best defined as:",
                img: null,
                options: ["A. Mild episodic asthma", "B. Severe acute asthma not responding to initial bronchodilator therapy", "C. Chronic cough variant asthma", "D. Exercise-induced bronchospasm only"],
                answer: 1,
                explanation: "Status asthmaticus is a severe life-threatening asthma exacerbation refractory to initial standard treatment. It may lead to respiratory failure and requires urgent aggressive management.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_asthma_009",
                topic: "asthma",
                year: "FMGE Dec 2020",
                q: "In acute severe asthma, first-line immediate treatment includes:",
                img: null,
                options: ["A. Oral antibiotics only", "B. Nebulized short-acting beta-2 agonist plus oxygen and systemic corticosteroid", "C. Long-acting beta-2 agonist alone", "D. Leukotriene antagonist alone"],
                answer: 1,
                explanation: "Acute severe asthma management starts with oxygen, repeated inhaled/nebulized SABA (salbutamol), early systemic corticosteroids, and adding ipratropium in severe attacks. Response is monitored using PEFR/SpO2/ABG.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_asthma_010",
                topic: "asthma",
                year: "FMGE Jun 2020",
                q: "Aspirin-exacerbated respiratory disease (AERD) classically includes asthma with:",
                img: null,
                options: ["A. Bronchiectasis and hemoptysis", "B. Nasal polyps and aspirin/NSAID sensitivity", "C. Pleural effusion", "D. Pulmonary fibrosis"],
                answer: 1,
                explanation: "AERD (Samter triad) consists of asthma, chronic rhinosinusitis with nasal polyps, and respiratory reactions to aspirin/other COX-1 inhibiting NSAIDs.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "med_copd_006",
                topic: "copd",
                year: "FMGE Jun 2022",
                q: "Most important risk factor for COPD is:",
                img: null,
                options: ["A. Air conditioning", "B. Cigarette smoking", "C. Seasonal allergy", "D. Obesity"],
                answer: 1,
                explanation: "Cigarette smoking is the most important and common risk factor for COPD. Other factors include biomass fuel exposure, occupational dust/fumes, and alpha-1 antitrypsin deficiency.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_copd_007",
                topic: "copd",
                year: "FMGE Dec 2021",
                q: "Spirometric criterion for airflow obstruction in COPD is post-bronchodilator FEV1/FVC:",
                img: null,
                options: ["A. <0.70", "B. >0.80", "C. =1.0", "D. <0.50 only"],
                answer: 0,
                explanation: "Diagnosis of COPD requires persistent airflow limitation on spirometry: post-bronchodilator FEV1/FVC ratio below 0.70 according to GOLD criteria.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_copd_008",
                topic: "copd",
                year: "FMGE Jun 2021",
                q: "Long-term oxygen therapy improves survival in COPD patients with:",
                img: null,
                options: ["A. Mild dyspnea only", "B. Chronic severe resting hypoxemia", "C. Productive cough only", "D. Frequent wheeze only"],
                answer: 1,
                explanation: "LTOT improves survival in COPD with chronic severe resting hypoxemia (e.g., PaO2 <=55 mmHg or SaO2 <=88%, with specific extended criteria). It should be used for adequate daily duration.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_copd_009",
                topic: "copd",
                year: "FMGE Dec 2020",
                q: "Type II respiratory failure in advanced COPD is characterized by:",
                img: null,
                options: ["A. Low PaO2 and low PaCO2", "B. Low PaO2 and high PaCO2", "C. Normal PaO2 and low PaCO2", "D. High PaO2 and high PaCO2"],
                answer: 1,
                explanation: "Type II (hypercapnic) respiratory failure features hypoxemia with hypercapnia, often due to alveolar hypoventilation in severe COPD exacerbation.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_copd_010",
                topic: "copd",
                year: "FMGE Jun 2020",
                q: "In acute exacerbation of COPD with hypercapnic respiratory failure, preferred ventilatory support is:",
                img: null,
                options: ["A. Immediate invasive ventilation in all", "B. Non-invasive ventilation (BiPAP) when no contraindication", "C. High-flow oxygen at 15 L/min in all", "D. Nebulization only"],
                answer: 1,
                explanation: "NIV (commonly BiPAP) is first-line in many AECOPD patients with hypercapnic acidosis, reducing intubation and mortality when applied appropriately.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "med_ibd_006",
                topic: "ibd",
                year: "FMGE Jun 2022",
                q: "Which feature is more typical of Crohn disease than ulcerative colitis?",
                img: null,
                options: ["A. Continuous colonic involvement starting at rectum", "B. Transmural inflammation with skip lesions", "C. Disease limited to mucosa", "D. Primary sclerosing cholangitis association"],
                answer: 1,
                explanation: "Crohn disease has transmural inflammation, skip lesions, fistula/stricture tendency, and can involve any part of GI tract from mouth to anus. Ulcerative colitis usually has continuous mucosal inflammation starting in rectum.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_ibd_007",
                topic: "ibd",
                year: "FMGE Dec 2021",
                q: "Toxic megacolon is a severe complication more classically associated with:",
                img: null,
                options: ["A. Crohn disease only", "B. Ulcerative colitis", "C. Irritable bowel syndrome", "D. Celiac disease"],
                answer: 1,
                explanation: "Toxic megacolon is an acute colonic dilatation with systemic toxicity, classically seen in severe ulcerative colitis (also possible with infective colitis). It is a medical and surgical emergency.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_ibd_008",
                topic: "ibd",
                year: "FMGE Jun 2021",
                q: "Most common extraintestinal manifestation of IBD is:",
                img: null,
                options: ["A. Uveitis", "B. Peripheral arthritis", "C. Pyoderma gangrenosum", "D. Primary sclerosing cholangitis"],
                answer: 1,
                explanation: "Peripheral arthropathy is one of the most common extraintestinal manifestations in IBD. Other manifestations include uveitis, erythema nodosum, PSC, and skin lesions.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_ibd_009",
                topic: "ibd",
                year: "FMGE Dec 2020",
                q: "Definitive curative surgery is possible in:",
                img: null,
                options: ["A. Crohn disease", "B. Ulcerative colitis (proctocolectomy)", "C. Both Crohn and UC", "D. Neither"],
                answer: 1,
                explanation: "Total proctocolectomy can be curative for ulcerative colitis because disease is limited to colon and rectum. Crohn disease can recur after surgery because it may involve any GI segment.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_ibd_010",
                topic: "ibd",
                year: "FMGE Jun 2020",
                q: "First-line drug for mild to moderate ulcerative colitis is:",
                img: null,
                options: ["A. Methotrexate", "B. Mesalamine (5-ASA)", "C. Cyclosporine", "D. Infliximab only"],
                answer: 1,
                explanation: "5-ASA agents (mesalamine) are first-line for mild-moderate ulcerative colitis. Corticosteroids are used for flares, and biologics/immunomodulators are used for moderate-severe or refractory disease.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "med_cirr_006",
                topic: "cirrhosis-portal-htn",
                year: "FMGE Jun 2022",
                q: "Most common cause of portal hypertension is:",
                img: null,
                options: ["A. Portal vein thrombosis", "B. Cirrhosis of liver", "C. Budd-Chiari syndrome", "D. Right heart failure"],
                answer: 1,
                explanation: "Cirrhosis is the most common cause of portal hypertension due to increased intrahepatic resistance and dynamic vasoconstriction in cirrhotic liver architecture.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_cirr_007",
                topic: "cirrhosis-portal-htn",
                year: "FMGE Dec 2021",
                q: "Primary prophylaxis for variceal bleed in cirrhosis is:",
                img: null,
                options: ["A. Proton pump inhibitor", "B. Non-selective beta blocker (e.g., propranolol/carvedilol) or endoscopic variceal ligation", "C. Broad spectrum antibiotics only", "D. Lactulose only"],
                answer: 1,
                explanation: "In patients with significant esophageal varices, non-selective beta-blockers or EVL are used for primary prophylaxis against first variceal bleeding episode.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_cirr_008",
                topic: "cirrhosis-portal-htn",
                year: "FMGE Jun 2021",
                q: "Most common precipitating factor for hepatic encephalopathy is:",
                img: null,
                options: ["A. High protein diet alone", "B. Gastrointestinal bleeding", "C. Hyperthyroidism", "D. Hypercalcemia"],
                answer: 1,
                explanation: "Common precipitants of hepatic encephalopathy include GI bleed, infection, constipation, electrolyte imbalance, dehydration, sedatives, and renal dysfunction.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_cirr_009",
                topic: "cirrhosis-portal-htn",
                year: "FMGE Dec 2020",
                q: "Drug of first choice in chronic management of hepatic encephalopathy is:",
                img: null,
                options: ["A. Metronidazole", "B. Lactulose", "C. Furosemide", "D. Omeprazole"],
                answer: 1,
                explanation: "Lactulose is first-line for treatment and prevention of recurrent hepatic encephalopathy. It acidifies colonic contents, trapping ammonia as ammonium and acting as cathartic.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_cirr_010",
                topic: "cirrhosis-portal-htn",
                year: "FMGE Jun 2020",
                q: "Spontaneous bacterial peritonitis in cirrhosis is diagnosed when ascitic PMN count is:",
                img: null,
                options: ["A. >=100 cells/mm3", "B. >=250 cells/mm3", "C. >=500 cells/mm3", "D. >=1000 cells/mm3"],
                answer: 1,
                explanation: "SBP is diagnosed with ascitic fluid neutrophil count at least 250 cells/mm3, even if culture is negative. Third-generation cephalosporins are commonly used for treatment.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "med_epi_006",
                topic: "epilepsy",
                year: "FMGE Jun 2022",
                q: "First-line drug for generalized tonic-clonic seizures in many adults is:",
                img: null,
                options: ["A. Ethosuximide", "B. Sodium valproate", "C. Carbamazepine", "D. Acetazolamide"],
                answer: 1,
                explanation: "Sodium valproate is effective in generalized epilepsies, but it is avoided in women of childbearing potential when possible because of teratogenicity. Alternatives include levetiracetam or lamotrigine depending on seizure type and context.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_epi_007",
                topic: "epilepsy",
                year: "FMGE Dec 2021",
                q: "Drug of choice for absence seizures is:",
                img: null,
                options: ["A. Phenytoin", "B. Ethosuximide", "C. Carbamazepine", "D. Phenobarbital"],
                answer: 1,
                explanation: "Ethosuximide is the classic drug of choice for typical absence seizures. Valproate is also effective, especially when mixed seizure types coexist.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_epi_008",
                topic: "epilepsy",
                year: "FMGE Jun 2021",
                q: "Initial emergency treatment of status epilepticus is:",
                img: null,
                options: ["A. Oral valproate", "B. IV benzodiazepine (e.g., lorazepam/diazepam)", "C. Oral carbamazepine", "D. Ketogenic diet"],
                answer: 1,
                explanation: "Status epilepticus management begins with airway-breathing-circulation support and rapid benzodiazepine administration (IV lorazepam preferred). If persistent, second-line agents such as levetiracetam, valproate, or fosphenytoin are used.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_epi_009",
                topic: "epilepsy",
                year: "FMGE Dec 2020",
                q: "Temporal lobe (focal impaired-awareness) seizures commonly present with:",
                img: null,
                options: ["A. Sudden drop attacks only", "B. Aura and automatisms", "C. Absence staring spells only", "D. Pure motor Jacksonian march only"],
                answer: 1,
                explanation: "Temporal lobe seizures often begin with aura (epigastric rising sensation, fear, deja vu) followed by impaired awareness and automatisms such as lip smacking or hand fumbling.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_epi_010",
                topic: "epilepsy",
                year: "FMGE Jun 2020",
                q: "Most important investigation to classify epilepsy syndrome and recurrence risk is:",
                img: null,
                options: ["A. X-ray skull", "B. EEG", "C. Serum calcium", "D. Urine ketones"],
                answer: 1,
                explanation: "EEG helps classify seizure type/syndrome and can support diagnosis. Neuroimaging (preferably MRI) is also important to identify structural causes, especially in focal epilepsy.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "med_mening_006",
                topic: "meningitis-encephalitis",
                year: "FMGE Jun 2022",
                q: "Most common cause of acute bacterial meningitis in young adults is:",
                img: null,
                options: ["A. Streptococcus pneumoniae", "B. Neisseria meningitidis", "C. Listeria monocytogenes", "D. Haemophilus influenzae type b"],
                answer: 1,
                explanation: "Neisseria meningitidis is a common cause in adolescents and young adults, while Streptococcus pneumoniae predominates overall in adults and elderly.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_mening_007",
                topic: "meningitis-encephalitis",
                year: "FMGE Dec 2021",
                q: "CSF findings in pyogenic bacterial meningitis classically show:",
                img: null,
                options: ["A. Lymphocytic predominance, normal glucose", "B. Neutrophilic pleocytosis, high protein, low glucose", "C. Normal cell count and low protein", "D. Eosinophilic predominance"],
                answer: 1,
                explanation: "Typical bacterial meningitis CSF profile: raised opening pressure, high neutrophils, elevated protein, and low glucose due to bacterial consumption and impaired transport.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_mening_008",
                topic: "meningitis-encephalitis",
                year: "FMGE Jun 2021",
                q: "Most common cause of sporadic fatal viral encephalitis is:",
                img: null,
                options: ["A. Japanese encephalitis virus", "B. HSV-1", "C. Enterovirus", "D. CMV"],
                answer: 1,
                explanation: "HSV-1 is the most common cause of sporadic, severe encephalitis and often involves temporal lobes. Early acyclovir significantly reduces mortality.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_mening_009",
                topic: "meningitis-encephalitis",
                year: "FMGE Dec 2020",
                q: "Empiric treatment for suspected acute bacterial meningitis should be:",
                img: null,
                options: ["A. Delayed until CSF culture report", "B. Started immediately after blood cultures (and lumbar puncture if no delay), without waiting for culture results", "C. Started only if CT is normal", "D. Oral antibiotics first"],
                answer: 1,
                explanation: "Bacterial meningitis is a medical emergency. Empiric IV antibiotics should be started promptly, ideally after blood cultures and without delaying therapy for imaging/lumbar puncture when delay is expected.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_mening_010",
                topic: "meningitis-encephalitis",
                year: "FMGE Jun 2020",
                q: "Drug of choice for herpes simplex encephalitis is:",
                img: null,
                options: ["A. Ceftriaxone", "B. Acyclovir IV", "C. Amphotericin B", "D. Metronidazole"],
                answer: 1,
                explanation: "IV acyclovir is the treatment of choice for HSV encephalitis and should be started empirically when HSV encephalitis is suspected clinically.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "med_sle_008",
                topic: "sle-medicine",
                year: "FMGE Jun 2022",
                q: "Most sensitive screening test for SLE is:",
                img: null,
                options: ["A. Anti-dsDNA", "B. ANA", "C. Anti-Sm", "D. LE cell test"],
                answer: 1,
                explanation: "ANA is highly sensitive for SLE but not specific. Anti-dsDNA and anti-Sm are more specific markers; anti-dsDNA also correlates with lupus nephritis activity.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_sle_009",
                topic: "sle-medicine",
                year: "FMGE Dec 2021",
                q: "Lupus nephritis diagnosis and classification require:",
                img: null,
                options: ["A. Urine routine only", "B. Renal biopsy", "C. Ultrasound kidney", "D. Serum creatinine only"],
                answer: 1,
                explanation: "Renal biopsy is essential in suspected lupus nephritis to classify histologic class (ISN/RPS) and guide immunosuppressive treatment decisions.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_sle_010",
                topic: "sle-medicine",
                year: "FMGE Jun 2021",
                q: "Drug recommended for almost all SLE patients unless contraindicated is:",
                img: null,
                options: ["A. Cyclophosphamide", "B. Hydroxychloroquine", "C. Rituximab", "D. Methotrexate"],
                answer: 1,
                explanation: "Hydroxychloroquine is a foundational therapy in SLE for most patients, reducing flares and long-term damage. Ophthalmic monitoring is required for retinal toxicity risk.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "med_typh_006",
                topic: "typhoid",
                year: "FMGE Jun 2022",
                q: "Causative organism of typhoid fever is:",
                img: null,
                options: ["A. Salmonella typhi", "B. Shigella dysenteriae", "C. Vibrio cholerae", "D. E. coli"],
                answer: 0,
                explanation: "Typhoid fever is caused by Salmonella enterica serovar Typhi, while paratyphoid is due to Salmonella Paratyphi A/B/C.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_typh_007",
                topic: "typhoid",
                year: "FMGE Dec 2021",
                q: "Most sensitive investigation for diagnosing typhoid in first week of illness is:",
                img: null,
                options: ["A. Widal test", "B. Blood culture", "C. Stool culture", "D. Urine culture"],
                answer: 1,
                explanation: "Blood culture is most useful early (first week). Widal has limitations due to poor sensitivity/specificity and background antibody prevalence.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_typh_008",
                topic: "typhoid",
                year: "FMGE Jun 2021",
                q: "Classical potentially fatal GI complication in untreated typhoid is:",
                img: null,
                options: ["A. Intestinal obstruction", "B. Ileal perforation and hemorrhage", "C. Appendicitis", "D. Rectal prolapse"],
                answer: 1,
                explanation: "Typhoid ulcers over Peyer patches in terminal ileum can cause bleeding and perforation, especially during the third week of disease.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_typh_009",
                topic: "typhoid",
                year: "FMGE Dec 2020",
                q: "Current commonly used effective therapy for uncomplicated typhoid in many regions is:",
                img: null,
                options: ["A. Chloramphenicol in all cases", "B. Azithromycin or ceftriaxone based on local sensitivity", "C. Penicillin G", "D. Amphotericin B"],
                answer: 1,
                explanation: "Due to multidrug resistance and fluoroquinolone resistance, treatment is guided by local patterns, with azithromycin and third-generation cephalosporins commonly used.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_typh_010",
                topic: "typhoid",
                year: "FMGE Jun 2020",
                q: "Typhoid conjugate vaccine (TCV) is primarily given to:",
                img: null,
                options: ["A. Elderly only", "B. Children in endemic areas", "C. Neonates at birth only", "D. Pregnant women only"],
                answer: 1,
                explanation: "TCV is prioritized in children in endemic settings as part of typhoid control strategy, alongside water, sanitation, and hygiene measures.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "med_den_006",
                topic: "dengue-medicine",
                year: "FMGE Jun 2022",
                q: "Vector transmitting dengue is:",
                img: null,
                options: ["A. Anopheles mosquito", "B. Aedes aegypti mosquito", "C. Culex mosquito", "D. Sandfly"],
                answer: 1,
                explanation: "Dengue is transmitted primarily by Aedes aegypti, a daytime biting mosquito that also transmits chikungunya and Zika.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_den_007",
                topic: "dengue-medicine",
                year: "FMGE Dec 2021",
                q: "Warning sign suggestive of severe dengue includes:",
                img: null,
                options: ["A. Mild myalgia only", "B. Persistent vomiting and abdominal pain", "C. Isolated rhinorrhea", "D. Constipation"],
                answer: 1,
                explanation: "WHO warning signs include persistent vomiting, severe abdominal pain, mucosal bleed, clinical fluid accumulation, lethargy/restlessness, rising hematocrit with falling platelets.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_den_008",
                topic: "dengue-medicine",
                year: "FMGE Jun 2021",
                q: "Best early laboratory test to diagnose dengue in first 5 days is:",
                img: null,
                options: ["A. IgG antibody", "B. NS1 antigen detection", "C. Widal test", "D. Weil-Felix test"],
                answer: 1,
                explanation: "NS1 antigen is useful in early febrile phase, while IgM antibodies become detectable later (usually from day 5 onward).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_den_009",
                topic: "dengue-medicine",
                year: "FMGE Dec 2020",
                q: "Mainstay of treatment in dengue is:",
                img: null,
                options: ["A. Routine antibiotics", "B. Careful fluid management and supportive care", "C. Steroids in all patients", "D. Platelet transfusion in all cases"],
                answer: 1,
                explanation: "Dengue management is primarily supportive with close monitoring and judicious fluid therapy. Platelet transfusion is not routine and is based on bleeding risk/active hemorrhage context.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_den_010",
                topic: "dengue-medicine",
                year: "FMGE Jun 2020",
                q: "Hematocrit trend in dengue shock syndrome typically shows:",
                img: null,
                options: ["A. Falling hematocrit due to hemolysis", "B. Rising hematocrit due to plasma leakage", "C. Normal hematocrit always", "D. Variable without significance"],
                answer: 1,
                explanation: "In severe dengue, plasma leakage causes hemoconcentration and rising hematocrit. A falling hematocrit with instability may suggest significant bleeding.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "med_pneu_006",
                topic: "pneumonia",
                year: "FMGE Jun 2022",
                q: "Most common cause of community-acquired pneumonia in adults is:",
                img: null,
                options: ["A. Klebsiella pneumoniae", "B. Streptococcus pneumoniae", "C. Pseudomonas aeruginosa", "D. Staphylococcus aureus"],
                answer: 1,
                explanation: "Streptococcus pneumoniae remains the most common bacterial cause of community-acquired pneumonia in adults.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_pneu_007",
                topic: "pneumonia",
                year: "FMGE Dec 2021",
                q: "CURB-65 score in pneumonia is used to assess:",
                img: null,
                options: ["A. Etiologic organism", "B. Severity and need for hospitalization", "C. Drug resistance", "D. Vaccination status"],
                answer: 1,
                explanation: "CURB-65 (Confusion, Urea, Respiratory rate, Blood pressure, age >=65) helps stratify severity and site-of-care decisions in CAP.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_pneu_008",
                topic: "pneumonia",
                year: "FMGE Jun 2021",
                q: "Atypical pneumonia is commonly caused by:",
                img: null,
                options: ["A. Mycoplasma pneumoniae", "B. Streptococcus pyogenes", "C. E. coli", "D. Enterococcus"],
                answer: 0,
                explanation: "Mycoplasma pneumoniae is a classic cause of atypical pneumonia with dry cough and diffuse interstitial infiltrates.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_pneu_009",
                topic: "pneumonia",
                year: "FMGE Dec 2020",
                q: "Most frequent organism causing ventilator-associated pneumonia is:",
                img: null,
                options: ["A. Pseudomonas aeruginosa", "B. Mycoplasma pneumoniae", "C. Chlamydia psittaci", "D. Corynebacterium diphtheriae"],
                answer: 0,
                explanation: "VAP is commonly due to gram-negative bacilli including Pseudomonas and also MRSA; local microbiology guides empiric therapy.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_pneu_010",
                topic: "pneumonia",
                year: "FMGE Jun 2020",
                q: "Radiologic hallmark of lobar pneumonia is:",
                img: null,
                options: ["A. Diffuse reticulonodular pattern", "B. Homogeneous consolidation of a lobe", "C. Multiple cavitary lesions always", "D. Pleural plaque"],
                answer: 1,
                explanation: "Lobar pneumonia typically appears as homogeneous segmental/lobar consolidation, often with air bronchograms on chest imaging.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "med_pe_006",
                topic: "pleural-effusion",
                year: "FMGE Jun 2022",
                q: "Light's criteria are used to differentiate:",
                img: null,
                options: ["A. Pleural vs pericardial fluid", "B. Exudative vs transudative pleural effusion", "C. Chylous vs pseudochylous effusion", "D. Empyema vs lung abscess"],
                answer: 1,
                explanation: "Light's criteria classify effusion as exudate if any criterion is met: pleural fluid protein/serum protein >0.5, pleural LDH/serum LDH >0.6, or pleural LDH > two-thirds upper normal serum LDH.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_pe_007",
                topic: "pleural-effusion",
                year: "FMGE Dec 2021",
                q: "Most common cause of transudative pleural effusion is:",
                img: null,
                options: ["A. Tuberculosis", "B. Congestive heart failure", "C. Malignancy", "D. Pulmonary embolism"],
                answer: 1,
                explanation: "Transudative pleural effusions are usually due to systemic factors like increased hydrostatic pressure or decreased oncotic pressure; CHF is the most common cause.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_pe_008",
                topic: "pleural-effusion",
                year: "FMGE Jun 2021",
                q: "Pleural fluid ADA is especially useful in diagnosis of:",
                img: null,
                options: ["A. Malignant pleural effusion", "B. Tuberculous pleural effusion", "C. Transudative effusion", "D. Chylothorax"],
                answer: 1,
                explanation: "Elevated adenosine deaminase in lymphocyte-predominant exudative pleural fluid supports tuberculous pleural effusion, especially in high prevalence settings.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_pe_009",
                topic: "pleural-effusion",
                year: "FMGE Dec 2020",
                q: "Milky pleural fluid with high triglycerides suggests:",
                img: null,
                options: ["A. Empyema", "B. Chylothorax", "C. Hemothorax", "D. Serous effusion"],
                answer: 1,
                explanation: "Chylothorax results from thoracic duct leakage and classically has milky fluid with high triglyceride concentration.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_pe_010",
                topic: "pleural-effusion",
                year: "FMGE Jun 2020",
                q: "Most common cause of exudative pleural effusion in India is:",
                img: null,
                options: ["A. Congestive heart failure", "B. Tuberculosis", "C. Nephrotic syndrome", "D. Cirrhosis"],
                answer: 1,
                explanation: "In high TB burden countries, tuberculosis is a leading cause of exudative pleural effusion, while malignancy is also an important cause.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "med_lc_006",
                topic: "lung-cancer",
                year: "FMGE Jun 2022",
                q: "Most common histological type of lung cancer overall is:",
                img: null,
                options: ["A. Small cell carcinoma", "B. Squamous cell carcinoma", "C. Adenocarcinoma", "D. Large cell carcinoma"],
                answer: 2,
                explanation: "Adenocarcinoma is currently the most common lung cancer subtype overall, including in non-smokers and females.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_lc_007",
                topic: "lung-cancer",
                year: "FMGE Dec 2021",
                q: "Most strongly smoking-associated lung cancer subtype is:",
                img: null,
                options: ["A. Adenocarcinoma", "B. Small cell carcinoma", "C. Carcinoid tumor", "D. Bronchioloalveolar carcinoma"],
                answer: 1,
                explanation: "Small cell lung carcinoma has a very strong association with smoking and is usually centrally located with early metastasis.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_lc_008",
                topic: "lung-cancer",
                year: "FMGE Jun 2021",
                q: "Pancoast tumor typically causes:",
                img: null,
                options: ["A. Superior vena cava syndrome only", "B. Shoulder pain with Horner syndrome due to apical tumor invasion", "C. Massive hemoptysis only", "D. Pleural effusion only"],
                answer: 1,
                explanation: "Superior sulcus (Pancoast) tumors at lung apex may invade brachial plexus and sympathetic chain, causing shoulder/arm pain and Horner syndrome.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_lc_009",
                topic: "lung-cancer",
                year: "FMGE Dec 2020",
                q: "Paraneoplastic SIADH is classically associated with:",
                img: null,
                options: ["A. Adenocarcinoma lung", "B. Small cell lung carcinoma", "C. Squamous cell carcinoma lung", "D. Mesothelioma"],
                answer: 1,
                explanation: "Small cell carcinoma commonly causes ectopic ADH and ACTH production, leading to SIADH and Cushing syndrome respectively.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_lc_010",
                topic: "lung-cancer",
                year: "FMGE Jun 2020",
                q: "Most common paraneoplastic syndrome in squamous cell carcinoma lung is:",
                img: null,
                options: ["A. Hypercalcemia due to PTHrP", "B. SIADH", "C. Cushing syndrome", "D. Lambert-Eaton syndrome"],
                answer: 0,
                explanation: "Squamous cell carcinoma can produce PTH-related peptide causing hypercalcemia. SIADH and ectopic ACTH are more typical of small cell carcinoma.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "med_uti_006",
                topic: "uti-pyelonephritis",
                year: "FMGE Jun 2022",
                q: "Most common causative organism of uncomplicated UTI is:",
                img: null,
                options: ["A. Staphylococcus aureus", "B. Escherichia coli", "C. Pseudomonas aeruginosa", "D. Klebsiella oxytoca"],
                answer: 1,
                explanation: "E. coli is the most common pathogen in uncomplicated cystitis and pyelonephritis due to uropathogenic virulence factors.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_uti_007",
                topic: "uti-pyelonephritis",
                year: "FMGE Dec 2021",
                q: "Urine finding most suggestive of acute pyelonephritis is:",
                img: null,
                options: ["A. RBC casts", "B. WBC casts", "C. Fatty casts", "D. Broad waxy casts"],
                answer: 1,
                explanation: "WBC casts indicate renal parenchymal inflammation and are classically associated with acute pyelonephritis or interstitial nephritis.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_uti_008",
                topic: "uti-pyelonephritis",
                year: "FMGE Jun 2021",
                q: "Asymptomatic bacteriuria should be treated routinely in:",
                img: null,
                options: ["A. Elderly men in nursing homes", "B. Pregnant women", "C. Diabetics without symptoms", "D. Patients with long-term catheters"],
                answer: 1,
                explanation: "Asymptomatic bacteriuria is treated in pregnancy (and before invasive urologic procedures) because treatment reduces pyelonephritis and adverse pregnancy outcomes.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_uti_009",
                topic: "uti-pyelonephritis",
                year: "FMGE Dec 2020",
                q: "Nitrite positivity on urine dipstick suggests infection with:",
                img: null,
                options: ["A. Gram-negative nitrate-reducing bacteria", "B. Candida species", "C. Mycobacterium tuberculosis", "D. Enterococcus only"],
                answer: 0,
                explanation: "Nitrite positivity indicates organisms that reduce nitrate to nitrite, commonly Enterobacteriaceae such as E. coli.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_uti_010",
                topic: "uti-pyelonephritis",
                year: "FMGE Jun 2020",
                q: "Most common route of infection in pyelonephritis is:",
                img: null,
                options: ["A. Hematogenous spread", "B. Ascending infection from lower urinary tract", "C. Lymphatic spread", "D. Direct traumatic inoculation"],
                answer: 1,
                explanation: "Most pyelonephritis occurs by ascending spread from the lower urinary tract to kidneys, especially in the presence of vesicoureteral reflux or obstruction.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "med_pud_006",
                topic: "peptic-ulcer",
                year: "FMGE Jun 2022",
                q: "Most common cause of duodenal ulcer is:",
                img: null,
                options: ["A. Helicobacter pylori infection", "B. Zollinger-Ellison syndrome", "C. Crohn disease", "D. Stress ulcer"],
                answer: 0,
                explanation: "H. pylori is strongly associated with duodenal ulcer disease; NSAID use is another major cause of peptic ulcer disease.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_pud_007",
                topic: "peptic-ulcer",
                year: "FMGE Dec 2021",
                q: "Best non-invasive test to confirm eradication of H. pylori is:",
                img: null,
                options: ["A. IgG antibody titer", "B. Urea breath test", "C. Serum gastrin", "D. Stool occult blood"],
                answer: 1,
                explanation: "Urea breath test and stool antigen test are preferred for post-treatment confirmation. Antibody titers are not reliable for eradication confirmation.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_pud_008",
                topic: "peptic-ulcer",
                year: "FMGE Jun 2021",
                q: "Pain pattern classically associated with duodenal ulcer is:",
                img: null,
                options: ["A. Increased immediately after meals", "B. Relieved by food and may occur at night", "C. No relation to meals", "D. Always radiating to back"],
                answer: 1,
                explanation: "Duodenal ulcer pain often improves with meals and may recur a few hours later or at night. Gastric ulcer pain tends to worsen with meals.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_pud_009",
                topic: "peptic-ulcer",
                year: "FMGE Dec 2020",
                q: "Most common complication of peptic ulcer disease is:",
                img: null,
                options: ["A. Perforation", "B. Bleeding", "C. Gastric outlet obstruction", "D. Penetration"],
                answer: 1,
                explanation: "Upper GI bleeding is the most common complication of peptic ulcer disease; perforation is a severe surgical emergency.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_pud_010",
                topic: "peptic-ulcer",
                year: "FMGE Jun 2020",
                q: "First-line acid suppression therapy in peptic ulcer disease is:",
                img: null,
                options: ["A. H2 receptor blockers only", "B. Proton pump inhibitors", "C. Antacids only", "D. Misoprostol only"],
                answer: 1,
                explanation: "PPIs are the most effective acid suppressants for ulcer healing and are integral to H. pylori eradication regimens and NSAID-related ulcer management.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "med_gerd_006",
                topic: "gerd-barretts",
                year: "FMGE Jun 2022",
                q: "Most common symptom of GERD is:",
                img: null,
                options: ["A. Hematemesis", "B. Heartburn", "C. Dysphagia always", "D. Melena"],
                answer: 1,
                explanation: "Typical GERD symptoms are heartburn and acid regurgitation. Alarm symptoms include dysphagia, weight loss, bleeding, and anemia.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_gerd_007",
                topic: "gerd-barretts",
                year: "FMGE Dec 2021",
                q: "Barrett esophagus is characterized by:",
                img: null,
                options: ["A. Squamous metaplasia of distal esophagus", "B. Intestinal metaplasia of distal esophagus", "C. Dysplasia of gastric antrum", "D. Eosinophilic infiltration only"],
                answer: 1,
                explanation: "Barrett esophagus is replacement of distal esophageal squamous epithelium by specialized intestinal-type columnar epithelium due to chronic reflux.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_gerd_008",
                topic: "gerd-barretts",
                year: "FMGE Jun 2021",
                q: "Barrett esophagus increases risk of:",
                img: null,
                options: ["A. Squamous cell carcinoma esophagus", "B. Esophageal adenocarcinoma", "C. Gastric lymphoma", "D. Duodenal carcinoma"],
                answer: 1,
                explanation: "Barrett esophagus is a premalignant condition for esophageal adenocarcinoma, especially with dysplasia.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_gerd_009",
                topic: "gerd-barretts",
                year: "FMGE Dec 2020",
                q: "Most effective medical therapy for symptomatic GERD is:",
                img: null,
                options: ["A. Antacids only", "B. Proton pump inhibitor", "C. Sucralfate only", "D. Prokinetic alone"],
                answer: 1,
                explanation: "PPIs are the most effective drugs for symptom control and esophagitis healing in GERD.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_gerd_010",
                topic: "gerd-barretts",
                year: "FMGE Jun 2020",
                q: "Gold standard test for pathologic acid reflux quantification is:",
                img: null,
                options: ["A. Barium swallow", "B. 24-hour esophageal pH monitoring", "C. Plain chest X-ray", "D. Stool occult blood"],
                answer: 1,
                explanation: "Ambulatory 24-hour pH monitoring is the gold standard for documenting acid reflux when diagnosis is uncertain or before anti-reflux surgery.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "med_gout_006",
                topic: "gout-pseudogout",
                year: "FMGE Jun 2022",
                q: "Crystal seen in gout on polarized microscopy is:",
                img: null,
                options: ["A. Positively birefringent rhomboid crystals", "B. Negatively birefringent needle-shaped monosodium urate crystals", "C. Cholesterol crystals", "D. Oxalate crystals"],
                answer: 1,
                explanation: "Gout shows needle-shaped monosodium urate crystals with strong negative birefringence. Pseudogout shows rhomboid calcium pyrophosphate crystals with weak positive birefringence.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_gout_007",
                topic: "gout-pseudogout",
                year: "FMGE Dec 2021",
                q: "Most common joint affected in acute gout is:",
                img: null,
                options: ["A. Knee", "B. First metatarsophalangeal joint", "C. Shoulder", "D. Hip"],
                answer: 1,
                explanation: "Podagra, acute inflammation of first MTP joint, is classic for gout.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_gout_008",
                topic: "gout-pseudogout",
                year: "FMGE Jun 2021",
                q: "Drug used for long-term urate lowering in gout is:",
                img: null,
                options: ["A. Colchicine only", "B. Allopurinol", "C. Diclofenac", "D. Prednisolone"],
                answer: 1,
                explanation: "Allopurinol (xanthine oxidase inhibitor) is commonly used for chronic urate lowering. It is not started during uncontrolled acute flare unless already on therapy.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_gout_009",
                topic: "gout-pseudogout",
                year: "FMGE Dec 2020",
                q: "Pseudogout is associated with deposition of:",
                img: null,
                options: ["A. Monosodium urate", "B. Calcium pyrophosphate dihydrate", "C. Hydroxyapatite", "D. Cystine"],
                answer: 1,
                explanation: "Pseudogout (CPPD disease) involves calcium pyrophosphate crystal deposition and often affects larger joints like knee.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_gout_010",
                topic: "gout-pseudogout",
                year: "FMGE Jun 2020",
                q: "X-ray feature classically seen in chronic tophaceous gout is:",
                img: null,
                options: ["A. Uniform joint space narrowing only", "B. Punched-out erosions with overhanging edges", "C. Bamboo spine", "D. Chondrocalcinosis only"],
                answer: 1,
                explanation: "Chronic gout can show juxta-articular punched-out erosions with overhanging margins and soft tissue tophi.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "med_thy_006",
                topic: "thyroid-medicine",
                year: "FMGE Jun 2022",
                q: "Most common cause of hyperthyroidism is:",
                img: null,
                options: ["A. Toxic multinodular goiter", "B. Graves disease", "C. Subacute thyroiditis", "D. TSH secreting adenoma"],
                answer: 1,
                explanation: "Graves disease is the most common cause of hyperthyroidism and is mediated by TSH receptor-stimulating antibodies.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_thy_007",
                topic: "thyroid-medicine",
                year: "FMGE Dec 2021",
                q: "Most sensitive test for primary hypothyroidism is:",
                img: null,
                options: ["A. Total T3", "B. Serum TSH", "C. Total T4", "D. Reverse T3"],
                answer: 1,
                explanation: "Serum TSH is the most sensitive screening test for primary thyroid dysfunction; in primary hypothyroidism TSH rises due to loss of feedback.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_thy_008",
                topic: "thyroid-medicine",
                year: "FMGE Jun 2021",
                q: "Drug of choice for treatment of hypothyroidism is:",
                img: null,
                options: ["A. Liothyronine only", "B. Levothyroxine", "C. Propylthiouracil", "D. Methimazole"],
                answer: 1,
                explanation: "Levothyroxine (T4) is standard replacement therapy for hypothyroidism due to stable pharmacokinetics and peripheral conversion to T3.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_thy_009",
                topic: "thyroid-medicine",
                year: "FMGE Dec 2020",
                q: "Most common cause of hypothyroidism in iodine-sufficient areas is:",
                img: null,
                options: ["A. Iodine deficiency", "B. Hashimoto thyroiditis", "C. Pituitary disease", "D. Drug induced"],
                answer: 1,
                explanation: "Autoimmune Hashimoto thyroiditis is the leading cause of hypothyroidism where iodine intake is adequate.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_thy_010",
                topic: "thyroid-medicine",
                year: "FMGE Jun 2020",
                q: "Best initial test in evaluating thyroid nodule function is:",
                img: null,
                options: ["A. Serum calcitonin", "B. Serum TSH", "C. CT neck", "D. PET scan"],
                answer: 1,
                explanation: "Serum TSH is first step in thyroid nodule evaluation; suppressed TSH suggests autonomous nodule and indicates radionuclide scan.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "med_ra_006",
                topic: "rheumatoid-arthritis",
                year: "FMGE Jun 2022",
                q: "Most specific antibody for rheumatoid arthritis is:",
                img: null,
                options: ["A. ANA", "B. Anti-CCP antibody", "C. Anti-dsDNA", "D. p-ANCA"],
                answer: 1,
                explanation: "Anti-CCP (ACPA) has high specificity for RA and is associated with erosive disease. Rheumatoid factor is less specific.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_ra_007",
                topic: "rheumatoid-arthritis",
                year: "FMGE Dec 2021",
                q: "Classic joint involvement pattern in RA is:",
                img: null,
                options: ["A. Asymmetric oligoarthritis of lower limbs only", "B. Symmetric small-joint polyarthritis", "C. Axial spine-only involvement", "D. First MTP acute monoarthritis"],
                answer: 1,
                explanation: "RA typically presents as symmetric polyarthritis involving small joints of hands and feet, with prolonged morning stiffness.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_ra_008",
                topic: "rheumatoid-arthritis",
                year: "FMGE Jun 2021",
                q: "First-line DMARD commonly used in RA is:",
                img: null,
                options: ["A. Methotrexate", "B. Prednisolone only", "C. NSAID only", "D. Colchicine"],
                answer: 0,
                explanation: "Methotrexate is anchor DMARD in RA unless contraindicated. Folic acid supplementation is routinely co-prescribed.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_ra_009",
                topic: "rheumatoid-arthritis",
                year: "FMGE Dec 2020",
                q: "Characteristic deformity in advanced RA includes:",
                img: null,
                options: ["A. Heberden nodes", "B. Ulnar deviation with swan-neck/boutonniere deformities", "C. Mallet finger", "D. Trigger thumb"],
                answer: 1,
                explanation: "Chronic RA can cause ulnar deviation, swan-neck and boutonniere deformities due to synovial inflammation and tendon/ligament damage.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_ra_010",
                topic: "rheumatoid-arthritis",
                year: "FMGE Jun 2020",
                q: "Most common cervical spine complication in RA is:",
                img: null,
                options: ["A. Atlantoaxial subluxation", "B. Lumbar spondylolisthesis", "C. Cervical disc prolapse", "D. Odontoid fracture"],
                answer: 0,
                explanation: "RA can involve cervical spine causing atlantoaxial instability/subluxation due to ligamentous destruction; screening is needed before anesthesia/surgery.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "med_rab_006",
                topic: "rabies",
                year: "FMGE Jun 2022",
                q: "Rabies is caused by a virus belonging to family:",
                img: null,
                options: ["A. Orthomyxoviridae", "B. Rhabdoviridae", "C. Paramyxoviridae", "D. Flaviviridae"],
                answer: 1,
                explanation: "Rabies virus is a bullet-shaped RNA virus belonging to family Rhabdoviridae and genus Lyssavirus.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_rab_007",
                topic: "rabies",
                year: "FMGE Dec 2021",
                q: "Most important immediate first aid after dog bite is:",
                img: null,
                options: ["A. Apply tight bandage", "B. Thorough wound washing with soap and water", "C. Give antibiotics only", "D. Suture wound immediately"],
                answer: 1,
                explanation: "Immediate vigorous wound washing with soap and water is the most important first step in rabies post-exposure prophylaxis and significantly reduces viral load.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_rab_008",
                topic: "rabies",
                year: "FMGE Jun 2021",
                q: "Hydrophobia in rabies is due to:",
                img: null,
                options: ["A. Renal failure", "B. Painful pharyngeal and laryngeal muscle spasms triggered by attempts to swallow", "C. Severe dehydration alone", "D. Meningeal irritation only"],
                answer: 1,
                explanation: "Hydrophobia is characteristic of furious rabies and occurs due to painful involuntary spasms of pharyngeal muscles on attempting to swallow liquids.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_rab_009",
                topic: "rabies",
                year: "FMGE Dec 2020",
                q: "Category III rabies exposure requires:",
                img: null,
                options: ["A. Vaccine only", "B. Rabies vaccine plus rabies immunoglobulin with wound infiltration", "C. Observation only", "D. Tetanus prophylaxis only"],
                answer: 1,
                explanation: "Category III exposure includes transdermal bites/scratches, licks on broken skin, mucosal contamination, and requires vaccine plus RIG in previously unvaccinated individuals.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "med_rab_010",
                topic: "rabies",
                year: "FMGE Jun 2020",
                q: "Negri bodies in rabies are found in:",
                img: null,
                options: ["A. Hepatocytes", "B. Neurons, especially hippocampus and Purkinje cells", "C. Renal tubules", "D. Lymph nodes"],
                answer: 1,
                explanation: "Negri bodies are eosinophilic intracytoplasmic inclusions in neurons, classically in hippocampal pyramidal cells and cerebellar Purkinje cells.",
                tags: ["PYQ", "high-yield"]
        },

];

export default medicine;
