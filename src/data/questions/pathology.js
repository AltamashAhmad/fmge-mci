const pathology = [

  // ============ CELL INJURY & DEATH ============
  {
    id: "path_ci_001",
    topic: "cell-injury",
    year: "FMGE Dec 2019",
    q: "The most common type of cell death seen in myocardial infarction is:",
    img: null,
    options: ["A. Apoptosis", "B. Coagulative necrosis", "C. Liquefactive necrosis", "D. Caseous necrosis"],
    answer: 1,
    explanation: "Coagulative necrosis is the hallmark of ischemic cell death in solid organs (heart, kidney, spleen). Cell architecture is preserved (ghost outlines) due to protein denaturation. Exception: brain infarct → liquefactive necrosis. Caseous = TB (cheese-like). Fat necrosis = pancreas.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_ci_002",
    topic: "cell-injury",
    year: "FMGE Jun 2018",
    q: "Apoptosis (programmed cell death) is characterized by:",
    img: null,
    options: ["A. Cell swelling and membrane rupture", "B. Cell shrinkage, chromatin condensation, apoptotic bodies — NO inflammation", "C. Massive inflammation and necrosis", "D. Mitochondrial swelling and cell lysis"],
    answer: 1,
    explanation: "Apoptosis: cell shrinkage, chromatin condensation (pyknosis → karyorrhexis → karyolysis), membrane blebbing → apoptotic bodies phagocytosed without inflammation. Extrinsic pathway: FasL/TNFR → caspase-8. Intrinsic: Bcl-2 family → cytochrome c → caspase-9. Necrosis = inflammatory.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_ci_003",
    topic: "cell-injury",
    year: "FMGE Dec 2018",
    q: "Lipofuscin (wear-and-tear pigment) is seen in:",
    img: null,
    options: ["A. Young active cells undergoing rapid division", "B. Aged/atrophic cells — residual bodies from lysosomal digestion", "C. Acute inflammatory cells", "D. Cells with viral inclusions"],
    answer: 1,
    explanation: "Lipofuscin = golden-brown granular pigment in aged neurons, cardiac myocytes, hepatocytes. Indigestible residues of lipid peroxidation. Marker of cellular aging and 'brown atrophy.' Also seen in malnutrition. Not harmful but indicates chronic cell stress.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_ci_004",
    topic: "cell-injury",
    year: "FMGE Jun 2019",
    q: "Irreversible cell injury is best indicated by:",
    img: null,
    options: ["A. Cellular swelling (hydropic change)", "B. Mitochondrial swelling", "C. Flocculent densities in mitochondria + membrane defects", "D. Fatty change (steatosis)"],
    answer: 2,
    explanation: "Irreversible cell injury markers: (1) Flocculent (amorphous) densities in mitochondria, (2) Membrane discontinuities, (3) Nuclear changes (pyknosis/karyolysis/karyorrhexis), (4) Lysosomal rupture. Cellular swelling, fatty change, and mitochondrial swelling are reversible.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_ci_005",
    topic: "cell-injury",
    year: "FMGE Dec 2020",
    q: "Dystrophic calcification occurs in:",
    img: null,
    options: ["A. Normal serum calcium with dead/necrotic tissue", "B. Elevated serum calcium (hypercalcemia) in normal tissue", "C. Hyperparathyroidism causing calcium deposits", "D. Normal tissue with normal calcium"],
    answer: 0,
    explanation: "Dystrophic calcification: calcium deposits in NECROTIC/DEAD tissue with NORMAL serum calcium. E.g., TB, atherosclerotic plaques, old thrombi, tumors. Metastatic calcification: calcium deposits in NORMAL tissue due to HYPERCALCEMIA (hyperparathyroidism, vitamin D toxicity, sarcoidosis).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_ci_006",
    topic: "cell-injury",
    year: "FMGE Jun 2021",
    q: "Gangrene of the bowel leads to which type of necrosis?",
    img: null,
    options: ["A. Coagulative necrosis only", "B. Wet gangrene — liquefactive necrosis with putrefaction by bacteria", "C. Caseous necrosis", "D. Fibrinoid necrosis"],
    answer: 1,
    explanation: "Wet gangrene: ischemic necrosis + bacterial superinfection + putrefaction. Common in bowel, diabetic foot (wet). Liquefactive component due to bacterial enzymes. Dry gangrene: mummification, no infection, no putrefaction. Gas gangrene: Clostridium perfringens, gas bubbles in tissue.",
    tags: ["PYQ"]
  },
  {
    id: "path_ci_007",
    topic: "cell-injury",
    year: "FMGE Dec 2021",
    q: "Free radicals cause cell injury through all EXCEPT:",
    img: null,
    options: ["A. Lipid peroxidation of cell membranes", "B. DNA strand breaks", "C. Cross-linking of proteins", "D. Stimulating mitosis (cell division)"],
    answer: 3,
    explanation: "Free radical injury: lipid peroxidation (membrane damage), DNA strand breaks/mutations, protein oxidation/cross-linking, carbohydrate damage. Antioxidants: SOD (superoxide dismutase), catalase, glutathione peroxidase, vitamins C and E. Free radicals do NOT stimulate mitosis.",
    tags: ["PYQ"]
  },

  // ============ INFLAMMATION ============
  {
    id: "path_inf_001",
    topic: "inflammation",
    year: "FMGE Dec 2019",
    q: "The most important mediator of early (first 1–2 hours) vascular permeability in acute inflammation is:",
    img: null,
    options: ["A. Bradykinin", "B. Histamine (from mast cells)", "C. Prostaglandins", "D. Leukotrienes"],
    answer: 1,
    explanation: "Histamine is the FIRST mediator released in acute inflammation (from mast cells, basophils, platelets) → immediate transient vascular permeability (1st hour). Then serotonin (5-HT from platelets). Bradykinin = sustained response (hours 2–4). Prostaglandins = pain, fever. Leukotrienes = prolonged permeability, chemotaxis.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_inf_002",
    topic: "inflammation",
    year: "FMGE Jun 2018",
    q: "The predominant cell in CHRONIC inflammation is:",
    img: null,
    options: ["A. Neutrophils", "B. Eosinophils", "C. Lymphocytes and macrophages (monocytes)", "D. Basophils"],
    answer: 2,
    explanation: "Chronic inflammation: lymphocytes + macrophages (mononuclear cells) are predominant. Macrophages produce IL-1, TNF-α, IL-6. Lymphocytes produce lymphokines. Neutrophils dominate acute inflammation (first 6–24 hours). Eosinophils = parasitic infections, allergic reactions.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_inf_003",
    topic: "inflammation",
    year: "FMGE Dec 2018",
    q: "Granuloma in tuberculosis is composed of:",
    img: null,
    options: ["A. Neutrophils with necrosis", "B. Epithelioid cells + Langhans giant cells + central caseous necrosis + lymphocytes", "C. Plasma cells and macrophages only", "D. Fibrin and eosinophils"],
    answer: 1,
    explanation: "TB granuloma (caseating): central caseous necrosis surrounded by epithelioid macrophages, Langhans giant cells (horseshoe/peripheral nuclei), outer mantle of lymphocytes, plasma cells, and fibrosis. AFB may be seen. Non-caseating granuloma = sarcoidosis, Crohn's disease.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_inf_004",
    topic: "inflammation",
    year: "FMGE Jun 2019",
    q: "Cardinal signs of inflammation (Celsus) are:",
    img: null,
    options: ["A. Rubor, Tumor, Calor, Dolor, Functio laesa (5 signs)", "B. Only rubor, tumor, calor, dolor (4 signs, added 5th by Virchow)", "C. Pallor, edema, pain, fever", "D. Loss of function is the only sign visible externally"],
    answer: 0,
    explanation: "Classical cardinal signs: Rubor (redness), Tumor (swelling), Calor (heat), Dolor (pain) — described by Celsus. Functio laesa (loss of function) — added by Virchow/Galen. All 5 are the complete list. Due to vasodilation, vascular permeability, pain mediators (bradykinin, PGs).",
    tags: ["PYQ"]
  },
  {
    id: "path_inf_005",
    topic: "inflammation",
    year: "FMGE Dec 2020",
    q: "Leukocyte adhesion deficiency (LAD) is caused by deficiency of:",
    img: null,
    options: ["A. Myeloperoxidase", "B. CD18 (β2 integrin — LFA-1, Mac-1)", "C. IgG antibodies", "D. Complement C3"],
    answer: 1,
    explanation: "LAD type I: deficiency of CD18 (β2-integrin subunit) → defective leukocyte adhesion to endothelium. Recurrent bacterial infections, delayed cord separation, elevated circulating neutrophils. Chediak-Higashi: giant lysosomes. Chronic granulomatous disease (CGD): NADPH oxidase deficiency.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_inf_006",
    topic: "inflammation",
    year: "FMGE Jun 2021",
    q: "Fibrinous pericarditis grossly appears as:",
    img: null,
    options: ["A. Smooth glistening pericardium", "B. 'Bread and butter' pericardium (rough, shaggy fibrin deposits)", "C. Hemorrhagic effusion only", "D. Purulent (pus) collection"],
    answer: 1,
    explanation: "Fibrinous pericarditis ('bread and butter' or 'cor villosum'): fibrin strands on pericardial surface; seen in MI (Dressler's syndrome), uremia, rheumatic fever. Purulent (suppurative) = bacterial. Hemorrhagic = TB, malignancy. Serous = viral (most common cause: Coxsackie virus).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_inf_007",
    topic: "inflammation",
    year: "FMGE Dec 2021",
    q: "Complement system activation — classical pathway is activated by:",
    img: null,
    options: ["A. Mannose residues on bacterial surfaces", "B. Antigen-antibody complexes (IgM, IgG)", "C. LPS (lipopolysaccharide) of gram-negative bacteria directly", "D. Properdin and Factor B"],
    answer: 1,
    explanation: "Classical pathway: Ag-Ab complexes → C1q binding → C1r, C1s → C4, C2, C3. Lectin pathway: MBL binds mannose residues. Alternative pathway: LPS, properdin, factors B and D. All converge at C3 → C5–C9 (membrane attack complex). C3a, C5a = anaphylatoxins.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_inf_008",
    topic: "inflammation",
    year: "FMGE Jun 2020",
    q: "IL-1, TNF-α, and IL-6 are the main mediators of:",
    img: null,
    options: ["A. Immediate hypersensitivity", "B. Acute phase response — fever, leukocytosis, CRP elevation, acute phase proteins", "C. Granuloma formation", "D. Complement activation"],
    answer: 1,
    explanation: "IL-1, TNF-α, IL-6 (secreted by macrophages) → acute phase response: fever (act on hypothalamus via PGE2), leukocytosis (bone marrow), acute phase proteins (CRP, fibrinogen, haptoglobin from liver), cachexia, shock (TNF). IL-8 = neutrophil chemotaxis.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ WOUND HEALING ============
  {
    id: "path_wh_001",
    topic: "wound-healing",
    year: "FMGE Dec 2019",
    q: "Healing by primary intention (first intention) occurs in:",
    img: null,
    options: ["A. Large tissue defects with significant infection", "B. Clean surgical incisions with apposed edges, minimal tissue loss", "C. All wounds regardless of size", "D. Contaminated wounds left open"],
    answer: 1,
    explanation: "Primary intention: clean incised wound, apposed edges, minimal tissue loss, no infection → rapid re-epithelialization, minimal granulation tissue, thin scar. Secondary intention: large/contaminated wounds, more granulation tissue, wound contraction by myofibroblasts, wider scar.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_wh_002",
    topic: "wound-healing",
    year: "FMGE Jun 2019",
    q: "Tensile strength of a healed wound reaches a maximum of approximately:",
    img: null,
    options: ["A. 100% of original skin strength", "B. 70–80% of original skin strength", "C. 40–50% of original", "D. 90–100% recovers in 1 week"],
    answer: 1,
    explanation: "Maximum tensile strength of a healed wound = 70–80% of original (never 100%). Timeline: Day 3–5 = fibroblast proliferation (weakest phase); Week 1 = collagen synthesis (type III initially); Month 3 = collagen remodeling (type III → type I); Maximum strength at 3 months (70–80%).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_wh_003",
    topic: "wound-healing",
    year: "FMGE Dec 2020",
    q: "Keloid differs from hypertrophic scar in that:",
    img: null,
    options: ["A. Keloid stays within wound margins; hypertrophic scar extends beyond", "B. Keloid extends beyond wound margins, does NOT regress, more common in dark skin; hypertrophic scar stays within margins, may regress", "C. Both are identical", "D. Keloid is always premalignant"],
    answer: 1,
    explanation: "Keloid: extends BEYOND original wound boundaries, does not regress spontaneously, more common in dark-skinned individuals, thick type I collagen bundles. Hypertrophic scar: stays WITHIN wound margins, may regress over time, elevated but confined. Keloid is NOT premalignant.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_wh_004",
    topic: "wound-healing",
    year: "FMGE Jun 2021",
    q: "Factors that impair wound healing include all EXCEPT:",
    img: null,
    options: ["A. Diabetes mellitus", "B. Vitamin C deficiency (scurvy)", "C. Adequate blood supply", "D. Zinc deficiency"],
    answer: 2,
    explanation: "Adequate blood supply PROMOTES wound healing. Factors that IMPAIR healing: diabetes (impaired neutrophil function, hyperglycemia), vitamin C deficiency (impairs collagen synthesis), zinc deficiency (cofactor for enzymes), corticosteroids (anti-inflammatory), ischemia, infection, malnutrition, radiation.",
    tags: ["PYQ"]
  },
  {
    id: "path_wh_005",
    topic: "wound-healing",
    year: "FMGE Dec 2021",
    q: "The main cell responsible for wound contraction in secondary intention healing is:",
    img: null,
    options: ["A. Fibroblast", "B. Myofibroblast (smooth muscle actin-positive fibroblast)", "C. Macrophage", "D. Endothelial cell"],
    answer: 1,
    explanation: "Myofibroblasts (modified fibroblasts with smooth muscle α-actin) are responsible for wound contraction in secondary intention healing. They appear in granulation tissue at day 3–5. Contraction reduces wound area by up to 80%. Also seen in fibrotic conditions (liver cirrhosis, hypertrophic scar).",
    tags: ["PYQ", "high-yield"]
  },

  // ============ NEOPLASIA ============
  {
    id: "path_neo_001",
    topic: "neoplasia",
    year: "FMGE Dec 2019",
    q: "The hallmarks of malignancy (cancer) include all EXCEPT:",
    img: null,
    options: ["A. Sustained proliferative signaling", "B. Evasion of apoptosis", "C. Contact inhibition (maintains normal cell growth arrest)", "D. Replicative immortality (telomerase activation)"],
    answer: 2,
    explanation: "Loss of contact inhibition is a hallmark of cancer (normal cells stop dividing when they contact neighbors). Hanahan & Weinberg hallmarks: (1) sustaining proliferative signaling, (2) evading growth suppressors, (3) activating invasion/metastasis, (4) replicative immortality, (5) angiogenesis, (6) resisting cell death, (7) deregulating energy metabolism, (8) avoiding immune destruction.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_neo_002",
    topic: "neoplasia",
    year: "FMGE Jun 2018",
    q: "RB gene (retinoblastoma gene) is a classic example of a:",
    img: null,
    options: ["A. Proto-oncogene", "B. Tumor suppressor gene (anti-oncogene)", "C. DNA repair gene", "D. Housekeeping gene"],
    answer: 1,
    explanation: "Rb (retinoblastoma protein): tumor suppressor gene. Mutated in retinoblastoma (childhood — Knudson's 2-hit hypothesis), osteosarcoma, SCLC, breast cancer. Rb normally inhibits cell cycle (G1→S checkpoint). pRb phosphorylation by CDK4/6 releases E2F → cell proliferation. MDM2 inhibits p53.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_neo_003",
    topic: "neoplasia",
    year: "FMGE Dec 2018",
    q: "Transformation zone of the cervix is important because:",
    img: null,
    options: ["A. It is the site of maximal vascularity", "B. It is the most common site for cervical carcinoma and HPV-induced dysplasia", "C. It produces cervical mucus", "D. It is the junction of glandular and squamous epithelium seen only in pregnancy"],
    answer: 1,
    explanation: "Transformation zone (squamo-columnar junction, SCJ): junction of ectocervical squamous and endocervical columnar epithelium. Most vulnerable to HPV infection → CIN (cervical intraepithelial neoplasia) → cervical SCC. PAP smear samples the transformation zone. Colposcopy targets this area.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_neo_004",
    topic: "neoplasia",
    year: "FMGE Jun 2019",
    q: "Spread of carcinoma stomach to both ovaries (Krukenberg tumor) occurs by which route?",
    img: null,
    options: ["A. Haematogenous spread", "B. Lymphatic spread", "C. Transcoelomic (peritoneal) spread", "D. Direct invasion"],
    answer: 2,
    explanation: "Krukenberg tumor = bilateral ovarian metastases from stomach carcinoma (mucin-secreting signet ring cells). Spread via transcoelomic (peritoneal) route. Other examples of transcoelomic spread: ovarian carcinoma → peritoneal deposits. Haematogenous = liver, lung, bone, brain metastases.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_neo_005",
    topic: "neoplasia",
    year: "FMGE Dec 2020",
    q: "Philadelphia chromosome (t9;22) is characteristically seen in:",
    img: null,
    options: ["A. ALL (acute lymphoblastic leukemia)", "B. CML (chronic myeloid leukemia)", "C. AML", "D. Hodgkin lymphoma"],
    answer: 1,
    explanation: "Philadelphia chromosome: t(9;22) → BCR-ABL fusion gene → constitutively active tyrosine kinase → unregulated myeloid proliferation. Seen in >90% CML. Also in 25–30% adult ALL (worse prognosis). Imatinib (Gleevec) is the targeted therapy (BCR-ABL inhibitor) — transformed CML prognosis.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_neo_006",
    topic: "neoplasia",
    year: "FMGE Jun 2021",
    q: "Most common site of carcinoid tumor is:",
    img: null,
    options: ["A. Stomach", "B. Appendix", "C. Ileum", "D. Rectum"],
    answer: 1,
    explanation: "Carcinoid tumors (now called well-differentiated neuroendocrine tumors): most common site = appendix (incidental finding; rarely metastasizes). Most common site to METASTASIZE = ileum. Carcinoid syndrome (flushing, diarrhea, bronchospasm, tricuspid stenosis) = liver metastases of midgut carcinoid.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_neo_007",
    topic: "neoplasia",
    year: "FMGE Dec 2021",
    q: "Paraneoplastic syndromes are caused by:",
    img: null,
    options: ["A. Direct tumor invasion of adjacent organs", "B. Tumor-secreted hormones/peptides or immune-mediated effects remote from tumor", "C. Metastatic deposits in target organs", "D. Drug toxicity from chemotherapy"],
    answer: 1,
    explanation: "Paraneoplastic syndromes: remote effects NOT due to direct invasion or metastasis. Examples: SCLC → SIADH (ADH-like peptide), ACTH-like → Cushing; Squamous cell lung cancer → PTHrP → hypercalcemia; Thymoma → myasthenia gravis; Renal cell carcinoma → polycythemia (EPO).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_neo_008",
    topic: "neoplasia",
    year: "FMGE Jun 2020",
    q: "Which carcinogen is associated with angiosarcoma of the liver?",
    img: null,
    options: ["A. Aflatoxin B1", "B. Vinyl chloride monomer + thorotrast + arsenic", "C. Hepatitis B virus", "D. Alcohol"],
    answer: 1,
    explanation: "Hepatic angiosarcoma: vinyl chloride (PVC factory workers), thorotrast (old contrast agent), arsenic. Hepatocellular carcinoma (HCC): HBV, HCV, aflatoxin B1, alcohol-cirrhosis. Cholangiocarcinoma: primary sclerosing cholangitis, liver flukes (Clonorchis, Opisthorchis).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_neo_009",
    topic: "neoplasia",
    year: "FMGE Dec 2019",
    q: "Poorly differentiated (anaplastic) tumors are characterized by:",
    img: null,
    options: ["A. Well-formed glands and recognizable cell types", "B. Pleomorphism, hyperchromatism, high N:C ratio, abnormal mitoses, loss of polarity", "C. Slow growth and local disease only", "D. Absence of mitoses"],
    answer: 1,
    explanation: "Anaplasia (lack of differentiation): nuclear pleomorphism, hyperchromatic nuclei, high nucleus:cytoplasm ratio, abnormal mitoses (tripolar, quadripolar), tumor giant cells, loss of polarity, functional dedifferentiation. Generally = higher grade, more aggressive, worse prognosis.",
    tags: ["PYQ"]
  },

  // ============ TUMOR MARKERS ============
  {
    id: "path_tm_001",
    topic: "tumor-markers",
    year: "FMGE Dec 2019",
    q: "AFP (alpha-fetoprotein) is elevated in:",
    img: null,
    options: ["A. Prostate cancer", "B. Hepatocellular carcinoma + yolk sac tumor (endodermal sinus tumor)", "C. Colorectal cancer only", "D. Breast cancer"],
    answer: 1,
    explanation: "AFP: elevated in HCC (hepatocellular carcinoma) and yolk sac tumor (endodermal sinus tumor) — most common germ cell tumor in children. Also raised in pregnancy (screening for neural tube defects), cirrhosis. Normal in adults: <10 ng/mL. AFP >400 ng/mL + liver mass = strong evidence for HCC.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_tm_002",
    topic: "tumor-markers",
    year: "FMGE Jun 2018",
    q: "PSA (prostate-specific antigen) elevation is seen in:",
    img: null,
    options: ["A. Prostate cancer only", "B. Prostate cancer + BPH + prostatitis (organ-specific but NOT cancer-specific)", "C. Bladder cancer", "D. Testicular cancer"],
    answer: 1,
    explanation: "PSA is organ-specific (prostate) but NOT cancer-specific — also elevated in BPH, prostatitis, prostate trauma/biopsy. Used for screening + monitoring treatment response and recurrence in prostate cancer. Free PSA/total PSA ratio helps differentiate: lower ratio in cancer.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_tm_003",
    topic: "tumor-markers",
    year: "FMGE Dec 2018",
    q: "CA-125 is the tumor marker for:",
    img: null,
    options: ["A. Colorectal cancer", "B. Ovarian carcinoma (primarily epithelial)", "C. Breast cancer", "D. Pancreatic cancer"],
    answer: 1,
    explanation: "CA-125 is the primary tumor marker for epithelial ovarian carcinoma. Normal <35 U/mL. Used for diagnosis, monitoring treatment response, detecting recurrence. Not specific — also elevated in endometriosis, PID, fibroids, ascites. Combined with USG in pelvic mass evaluation.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_tm_004",
    topic: "tumor-markers",
    year: "FMGE Jun 2019",
    q: "CEA (carcinoembryonic antigen) is most useful for monitoring:",
    img: null,
    options: ["A. Early diagnosis of colorectal cancer", "B. Monitoring treatment response and recurrence of colorectal cancer", "C. Screening general population for cancer", "D. Diagnosing liver cancer"],
    answer: 1,
    explanation: "CEA is not useful for screening (poor sensitivity/specificity for early disease). Used for MONITORING after colorectal cancer surgery — rising CEA = recurrence/metastasis. Also elevated in gastric, breast, lung cancer, and non-malignant conditions (liver disease, heavy smoking). Normal <5 ng/mL.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_tm_005",
    topic: "tumor-markers",
    year: "FMGE Dec 2020",
    q: "Beta-hCG is a marker for:",
    img: null,
    options: ["A. Hepatocellular carcinoma", "B. Choriocarcinoma and non-seminomatous germ cell tumors (NSGCT)", "C. Prostate cancer", "D. Breast cancer"],
    answer: 1,
    explanation: "β-hCG: tumor marker for gestational trophoblastic disease (choriocarcinoma, hydatidiform mole) and NSGCT. Pure seminoma can have mildly elevated β-hCG but NOT AFP (AFP elevation rules out pure seminoma). Serum β-hCG used for monitoring GTD treatment and testicular cancer.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_tm_006",
    topic: "tumor-markers",
    year: "FMGE Jun 2021",
    q: "Calcitonin as a tumor marker is elevated in:",
    img: null,
    options: ["A. Papillary thyroid carcinoma", "B. Medullary thyroid carcinoma (C-cell tumor)", "C. Follicular thyroid carcinoma", "D. Anaplastic thyroid carcinoma"],
    answer: 1,
    explanation: "Medullary thyroid carcinoma (MTC): arises from C-cells (parafollicular) → secretes calcitonin (marker for diagnosis, monitoring, screening family members). 25% hereditary (MEN2A, MEN2B — RET proto-oncogene mutation). Amyloid stroma on histology. Most aggressive = anaplastic thyroid carcinoma.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_tm_007",
    topic: "tumor-markers",
    year: "FMGE Dec 2021",
    q: "LDH (lactate dehydrogenase) as a tumor marker is most useful in:",
    img: null,
    options: ["A. Breast cancer screening", "B. Monitoring Hodgkin lymphoma, NHL, seminoma, and neuroblastoma", "C. Prostate cancer staging", "D. Diagnosing HCC"],
    answer: 1,
    explanation: "LDH: non-specific tumor marker reflecting tumor burden and cell turnover. Useful for monitoring: Hodgkin/NHL lymphomas, testicular seminoma (no AFP/hCG), neuroblastoma, melanoma. Very high LDH + lymphoma = poor prognosis (IPI score). Elevated in hemolytic anemia, MI, liver disease (non-specific).",
    tags: ["PYQ"]
  },

  // ============ HEMODYNAMIC DISORDERS ============
  {
    id: "path_hd_001",
    topic: "hemodynamic-disorders",
    year: "FMGE Dec 2019",
    q: "Virchow's triad for thrombosis consists of:",
    img: null,
    options: ["A. Stasis + Endothelial injury + Hypercoagulability", "B. Inflammation + Infection + Ischemia", "C. Hemorrhage + Fibrinolysis + Platelet activation", "D. Embolism + Thrombosis + Infarction"],
    answer: 0,
    explanation: "Virchow's triad: (1) Endothelial injury (most important for arterial thrombi), (2) Abnormal blood flow/stasis (most important for venous thrombi), (3) Hypercoagulability (Factor V Leiden, protein C/S deficiency, AT-III deficiency, antiphospholipid syndrome).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_hd_002",
    topic: "hemodynamic-disorders",
    year: "FMGE Jun 2018",
    q: "Lines of Zahn are seen in:",
    img: null,
    options: ["A. Postmortem clot", "B. Antemortem thrombus (alternating pale platelet/fibrin and red RBC layers)", "C. Hemorrhagic infarct", "D. Fibrin degradation products"],
    answer: 1,
    explanation: "Lines of Zahn: alternating pale bands (platelets + fibrin) and red bands (red blood cells) in antemortem (ante = before death) thrombus. Distinguishes antemortem thrombus from postmortem clot (dark red, gelatinous, 'chicken fat' clot with no lines of Zahn).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_hd_003",
    topic: "hemodynamic-disorders",
    year: "FMGE Dec 2018",
    q: "Most common type of embolism is:",
    img: null,
    options: ["A. Fat embolism", "B. Air embolism", "C. Pulmonary thromboembolism from DVT", "D. Amniotic fluid embolism"],
    answer: 2,
    explanation: "Pulmonary thromboembolism (PE) = most common type of embolism. 95% from DVT (deep vein thrombosis) of lower limbs. Saddle embolus at bifurcation of pulmonary trunk = massive PE → sudden death. Infarcts in PE are haemorrhagic (dual blood supply via bronchial arteries).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_hd_004",
    topic: "hemodynamic-disorders",
    year: "FMGE Jun 2019",
    q: "Pitting edema is caused by:",
    img: null,
    options: ["A. Increased plasma oncotic pressure", "B. Increased hydrostatic pressure OR decreased oncotic pressure OR sodium retention", "C. Lymphatic obstruction only", "D. Inflammatory cytokines only"],
    answer: 1,
    explanation: "Edema mechanisms: (1) Increased capillary hydrostatic pressure (heart failure, portal HTN), (2) Decreased plasma oncotic pressure (hypoalbuminemia — nephrotic syndrome, liver disease, malnutrition), (3) Lymphatic obstruction (filariasis → non-pitting edema), (4) Na/H₂O retention (renal disease), (5) Increased vascular permeability (inflammation).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_hd_005",
    topic: "hemodynamic-disorders",
    year: "FMGE Dec 2020",
    q: "Hemorrhagic (red) infarct is characteristically seen in:",
    img: null,
    options: ["A. Heart and kidney", "B. Lung and intestine (dual blood supply / loose tissue)", "C. Spleen only", "D. Brain always"],
    answer: 1,
    explanation: "Red (hemorrhagic) infarct: (1) loose spongy tissue (lung, intestine), (2) dual blood supply (lung gets bronchial + pulmonary), (3) venous occlusion (ovarian torsion), (4) reperfusion of ischemic tissue. Pale (white) infarct: solid organs with end-arterial supply (heart, kidney, spleen).",
    tags: ["PYQ", "high-yield"]
  },

  // ============ AMYLOIDOSIS ============
  {
    id: "path_amy_001",
    topic: "amyloidosis",
    year: "FMGE Dec 2019",
    q: "Congo red staining of amyloid shows which characteristic under polarized light?",
    img: null,
    options: ["A. Metachromasia (purple to red)", "B. Apple-green birefringence", "C. Yellow fluorescence", "D. Blue color (alcian blue)"],
    answer: 1,
    explanation: "Congo red stain + polarized light → apple-green birefringence = pathognomonic of amyloid. Amyloid = cross-β pleated sheet configuration. Thioflavin T = yellow-green fluorescence. Metachromatic = crystal violet. PAS stain = magenta. Electron microscopy = 7.5–10 nm non-branching fibrils.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_amy_002",
    topic: "amyloidosis",
    year: "FMGE Jun 2018",
    q: "Secondary (reactive) systemic amyloidosis (AA amyloidosis) is most commonly associated with:",
    img: null,
    options: ["A. Multiple myeloma", "B. Chronic inflammatory conditions (RA, TB, osteomyelitis, bronchiectasis)", "C. Hereditary amyloidosis", "D. Alzheimer's disease"],
    answer: 1,
    explanation: "AA amyloidosis: serum amyloid A (SAA, acute phase reactant) precursor → AA fibrils. Caused by chronic inflammation: RA, ankylosing spondylitis, TB, osteomyelitis, bronchiectasis, inflammatory bowel disease. AL amyloidosis (most common type) = plasma cell dyscrasias (myeloma) → immunoglobulin light chains.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_amy_003",
    topic: "amyloidosis",
    year: "FMGE Dec 2018",
    q: "The most common organ involved in systemic amyloidosis is:",
    img: null,
    options: ["A. Heart", "B. Kidney (most common + most clinically significant — nephrotic syndrome)", "C. Liver", "D. Spleen"],
    answer: 1,
    explanation: "Kidney is most commonly involved and most clinically significant (nephrotic syndrome → renal failure). Spleen: 'sago spleen' (focal follicular deposits) or 'lardaceous spleen' (diffuse). Heart: amyloid cardiomyopathy (restrictive pattern). Liver: hepatomegaly. Brain: Alzheimer's (Aβ amyloid).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_amy_004",
    topic: "amyloidosis",
    year: "FMGE Jun 2021",
    q: "Amyloid beta (Aβ) in Alzheimer's disease is derived from:",
    img: null,
    options: ["A. Immunoglobulin light chains", "B. Amyloid precursor protein (APP) on chromosome 21", "C. Transthyretin (TTR)", "D. Serum amyloid A"],
    answer: 1,
    explanation: "Alzheimer's: Aβ from amyloid precursor protein (APP, chromosome 21) cleavage by β and γ-secretase → Aβ42 (more amyloidogenic) accumulates → senile plaques. Trisomy 21 (Down syndrome) → extra APP → early Alzheimer's by age 40. Also tau protein → neurofibrillary tangles (NFTs).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_amy_005",
    topic: "amyloidosis",
    year: "FMGE Dec 2020",
    q: "Cardiac amyloidosis (TTR amyloidosis) is a cause of:",
    img: null,
    options: ["A. Dilated cardiomyopathy", "B. Restrictive cardiomyopathy (stiff ventricles, diastolic dysfunction)", "C. Hypertrophic obstructive cardiomyopathy", "D. Mitral valve prolapse"],
    answer: 1,
    explanation: "Amyloid cardiomyopathy (AL or TTR/ATTR): amyloid deposits in myocardium → restrictive cardiomyopathy (diastolic dysfunction, stiff non-compliant ventricles). ECG: low voltage QRS despite echo showing thick walls ('voltage-mass mismatch'). ATTR cardiac amyloidosis treated with tafamidis.",
    tags: ["PYQ"]
  },

  // ============ IMMUNOPATHOLOGY ============
  {
    id: "path_ip_001",
    topic: "immunopathology",
    year: "FMGE Dec 2019",
    q: "Type I hypersensitivity (immediate/anaphylactic) is mediated by:",
    img: null,
    options: ["A. IgG antibodies", "B. IgE antibodies on mast cells/basophils", "C. T lymphocytes (CD8+)", "D. Complement activation"],
    answer: 1,
    explanation: "Type I (immediate) hypersensitivity: IgE-mediated. IgE binds to mast cells → on re-exposure to allergen → cross-linking of IgE → mast cell degranulation → histamine, tryptase, leukotrienes, prostaglandins. Anaphylaxis, asthma, hay fever, urticaria. Treat with epinephrine (anaphylaxis).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_ip_002",
    topic: "immunopathology",
    year: "FMGE Jun 2018",
    q: "Serum sickness (type III hypersensitivity) is characterized by:",
    img: null,
    options: ["A. IgE-mediated mast cell degranulation", "B. Immune complex deposition in vessel walls + complement activation → vasculitis", "C. Direct cytotoxic T cell killing", "D. Delayed granuloma formation (48–72h)"],
    answer: 1,
    explanation: "Type III (immune complex) hypersensitivity: Ag-Ab complexes → deposited in vessel walls/glomeruli/synovium → complement activation → neutrophil recruitment → vasculitis, nephritis, arthritis. Serum sickness: 7–14 days after antigen (horse serum antitoxin). SLE = classic type III.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_ip_003",
    topic: "immunopathology",
    year: "FMGE Dec 2018",
    q: "Contact dermatitis (e.g., poison ivy, nickel allergy) is an example of:",
    img: null,
    options: ["A. Type I hypersensitivity", "B. Type II hypersensitivity", "C. Type IV (delayed/cell-mediated) hypersensitivity", "D. Type III hypersensitivity"],
    answer: 2,
    explanation: "Type IV (delayed-type, DTH) hypersensitivity: T-cell mediated, 48–72 hour delay. CD4+ Th1 cells + macrophages. Examples: contact dermatitis (nickel, poison ivy), Mantoux/PPD test (TB), graft rejection, granuloma formation. NO antibodies or complement involved.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_ip_004",
    topic: "immunopathology",
    year: "FMGE Jun 2020",
    q: "DiGeorge syndrome is due to deficiency of:",
    img: null,
    options: ["A. B lymphocytes (no thymus)", "B. T lymphocytes (thymic aplasia — chromosome 22q11 deletion)", "C. NK cells", "D. Neutrophils"],
    answer: 1,
    explanation: "DiGeorge syndrome: chromosome 22q11.2 deletion → thymic aplasia → T-cell deficiency. Features: T-cell immunodeficiency (recurrent viral/fungal infections), hypoparathyroidism (hypocalcemia, tetany), conotruncal heart defects (TOF, truncus arteriosus), abnormal facies. 'CATCH-22': Cardiac, Abnormal facies, Thymic hypoplasia, Cleft palate, Hypocalcemia.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_ip_005",
    topic: "immunopathology",
    year: "FMGE Dec 2021",
    q: "Bruton's agammaglobulinemia (X-linked agammaglobulinemia) is due to:",
    img: null,
    options: ["A. T-cell deficiency", "B. Defect in BTK (Bruton tyrosine kinase) gene → absent B cells → no immunoglobulins", "C. Combined T and B cell deficiency", "D. Complement deficiency"],
    answer: 1,
    explanation: "X-linked agammaglobulinemia (XLA): BTK gene mutation → B-cell maturation arrest → no circulating B cells → no immunoglobulins. X-linked (males). Recurrent bacterial infections after 6 months (maternal IgG wanes). No germinal centers. Treat with IVIG. Absent tonsils.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_ip_006",
    topic: "immunopathology",
    year: "FMGE Jun 2019",
    q: "Autoimmune hemolytic anemia is an example of which type of hypersensitivity?",
    img: null,
    options: ["A. Type I", "B. Type II (cytotoxic) — antibody-mediated cell destruction", "C. Type III", "D. Type IV"],
    answer: 1,
    explanation: "Type II (cytotoxic) hypersensitivity: antibodies (IgG/IgM) directed against cell surface antigens → complement-mediated lysis OR ADCC (antibody-dependent cell-mediated cytotoxicity). Examples: AIHA, ITP, Goodpasture syndrome (anti-GBM), myasthenia gravis, hemolytic disease of newborn.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ MI PATHOLOGY ============
  {
    id: "path_mi_001",
    topic: "mi-pathology",
    year: "FMGE Dec 2019",
    q: "The earliest microscopic finding in myocardial infarction (within 4–12 hours) is:",
    img: null,
    options: ["A. Neutrophil infiltration", "B. Wavy fibers + coagulative necrosis (nuclear pyknosis)", "C. Granulation tissue formation", "D. Macrophage infiltration and collagen deposition"],
    answer: 1,
    explanation: "Timeline of MI pathology: 0–4h: wavy fibers (earliest), increased eosinophilia. 4–12h: early coagulation necrosis, margination of neutrophils. 12–24h: frank coagulative necrosis with pyknotic nuclei. 1–3 days: neutrophil infiltration. 3–7 days: macrophage infiltration. 1–3 weeks: granulation tissue (most vulnerable to rupture: days 5–10). 4–8 weeks: scar.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_mi_002",
    topic: "mi-pathology",
    year: "FMGE Jun 2018",
    q: "The best cardiac enzyme for diagnosing MI in the first 4–6 hours is:",
    img: null,
    options: ["A. CK-MB", "B. LDH-1", "C. Troponin I or T (high-sensitivity troponin)", "D. Myoglobin (rises first but not specific)"],
    answer: 2,
    explanation: "Cardiac troponin I (cTnI) and cTnT are the most sensitive AND specific markers for myocardial injury. Rise 3–4h after MI, peak 24–48h, remain elevated 7–14 days. High-sensitivity troponin (hsTn) detects injury within 1–2h. Myoglobin rises first (1–3h) but not cardiac-specific.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_mi_003",
    topic: "mi-pathology",
    year: "FMGE Dec 2018",
    q: "Dressler's syndrome following MI is due to:",
    img: null,
    options: ["A. Extension of infarct to adjacent myocardium", "B. Autoimmune pericarditis (anti-myocardial antibodies) 2–10 weeks post-MI", "C. Left ventricular aneurysm", "D. Papillary muscle rupture"],
    answer: 1,
    explanation: "Dressler's syndrome: autoimmune pericarditis (fibrinous or serofibrinous) 2–10 weeks after MI or cardiac surgery. Fever, pleuritic chest pain, pericardial friction rub. Treat with NSAIDs/aspirin ± colchicine. Steroids if refractory. Due to anti-myocardial/anti-pericardial antibodies.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_mi_004",
    topic: "mi-pathology",
    year: "FMGE Jun 2019",
    q: "Ventricular free wall rupture after MI occurs most commonly:",
    img: null,
    options: ["A. Day 1 of MI", "B. Days 3–5 (early), but peak risk days 5–10 when inflammation and enzymatic digestion are maximal", "C. 3 weeks post-MI", "D. Immediately after thrombolysis"],
    answer: 1,
    explanation: "Free wall rupture: occurs 3–10 days post-MI (peak days 5–7). Cause: neutrophil enzymatic digestion + macrophage infiltration → weakest point. Causes acute hemopericardium → tamponade → death. Other late complications: papillary muscle rupture (mitral regurgitation), VSD, LV aneurysm (weeks to months).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_mi_005",
    topic: "mi-pathology",
    year: "FMGE Dec 2020",
    q: "Right coronary artery (RCA) occlusion most commonly causes infarction of:",
    img: null,
    options: ["A. Anterior wall of LV + anterior 2/3 of IVS", "B. Posterior wall of LV + posterior 1/3 of IVS + right ventricle", "C. Lateral wall of LV", "D. Apex of LV only"],
    answer: 1,
    explanation: "RCA: supplies posterior LV, posterior 1/3 IVS, RV, SA node (60%), AV node (85–90%) → posterior MI (inferior MI on ECG). LAD: anterior LV, anterior 2/3 IVS, apex → anterior MI. LCX: lateral LV wall. Most common coronary artery involved in MI: LAD (40–50% → widowmaker).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_mi_006",
    topic: "mi-pathology",
    year: "FMGE Jun 2021",
    q: "Subendocardial infarction differs from transmural infarction in that:",
    img: null,
    options: ["A. Subendocardial involves full thickness of myocardium", "B. Subendocardial involves inner 1/3 of myocardium (most ischemia-prone), no ST elevation; transmural = full thickness with ST elevation", "C. Subendocardial is always fatal", "D. Only transmural can cause troponin elevation"],
    answer: 1,
    explanation: "Subendocardial (NSTEMI): inner 1/3 of myocardium (most vulnerable zone — farthest from coronary supply). No ST elevation. ECG: ST depression or T-wave changes. Transmural (STEMI): full thickness wall involvement → ST elevation. Both elevate troponin. Subendocardial less likely to rupture.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_mi_007",
    topic: "mi-pathology",
    year: "FMGE Dec 2021",
    q: "Dystrophic calcification in atherosclerotic plaques is important because it:",
    img: null,
    options: ["A. Stabilizes the plaque", "B. Indicates advanced, complex plaque — may increase plaque fragility and rupture risk", "C. Prevents MI", "D. Is a sign of healing and regression"],
    answer: 1,
    explanation: "Calcification in atheromatous plaques = dystrophic calcification (normal serum Ca). Indicates advanced atherosclerosis. Calcium scoring (coronary artery calcium/CAC score) on CT is a marker of atherosclerotic burden and cardiovascular risk. Higher CAC = higher event risk.",
    tags: ["PYQ"]
  },
  {
    id: "path_mi_008",
    topic: "mi-pathology",
    year: "FMGE Jun 2020",
    q: "The role of macrophage foam cells in atherosclerosis is:",
    img: null,
    options: ["A. Inhibit platelet aggregation", "B. Engulf oxidized LDL → foam cells → fatty streak → core of atherosclerotic plaque", "C. Secrete nitric oxide to dilate vessels", "D. Produce collagen to stabilize plaques"],
    answer: 1,
    explanation: "Atherosclerosis: oxidized LDL → taken up by macrophages (scavenger receptors) → foam cells → fatty streak (earliest lesion, reversible). Foam cells release cytokines (IL-1, TNF) → smooth muscle migration → fibrous cap formation. Vulnerable plaque = thin fibrous cap + large lipid core → rupture → ACS.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ INFECTIVE ENDOCARDITIS (PATHOLOGY) ============
  {
    id: "path_ie_001",
    topic: "infective-endocarditis",
    year: "FMGE Dec 2019",
    q: "Most common causative organism of native valve infective endocarditis is:",
    img: null,
    options: ["A. Streptococcus viridans (alpha-hemolytic strep)", "B. Staphylococcus aureus", "C. Enterococcus", "D. HACEK organisms"],
    answer: 0,
    explanation: "Streptococcus viridans: most common in native valve, subacute IE — enters bloodstream via dental procedures (damaged valve). S. aureus: most virulent, acute IE, prosthetic valves, IV drug users. HACEK (Haemophilus, Actinobacillus, Cardiobacterium, Eikenella, Kingella) = culture-negative IE.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_ie_002",
    topic: "infective-endocarditis",
    year: "FMGE Jun 2018",
    q: "Osler nodes in infective endocarditis are:",
    img: null,
    options: ["A. Splinter hemorrhages under nails", "B. Tender, raised nodules on finger pads and toes — immune complex deposition", "C. Non-tender macular lesions on palms/soles", "D. Flame-shaped retinal hemorrhages"],
    answer: 1,
    explanation: "Osler nodes: tender, raised, red-purple nodules on finger/toe pads = immune complex deposition. Janeway lesions: non-tender, flat, hemorrhagic macules on palms/soles = septic emboli. Both peripheral manifestations of IE. Roth spots = oval retinal hemorrhages. Clubbing = chronic IE.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_ie_003",
    topic: "infective-endocarditis",
    year: "FMGE Dec 2018",
    q: "Vegetation in infective endocarditis differs from non-bacterial thrombotic endocarditis (NBTE) in that:",
    img: null,
    options: ["A. IE vegetation: small, sterile; NBTE: large, infected", "B. IE: large, irregular, destructive vegetations with bacteria; NBTE: small, sterile, on lines of closure", "C. Both are identical", "D. NBTE only affects right-sided valves"],
    answer: 1,
    explanation: "IE vegetations: large, irregular, destructive, contain bacteria, located anywhere on valve. NBTE (marantic endocarditis): small, sterile, non-destructive, on lines of valve closure — seen in cancer (Trousseau's), chronic debilitating illness, SLE (Libman-Sacks, 'verrucous').",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_ie_004",
    topic: "infective-endocarditis",
    year: "FMGE Jun 2019",
    q: "Most common valve affected in infective endocarditis is:",
    img: null,
    options: ["A. Tricuspid valve (right-sided, IVDU)", "B. Mitral valve", "C. Aortic valve", "D. Pulmonary valve"],
    answer: 1,
    explanation: "Mitral valve is most commonly affected in native-valve IE overall. Mitral + Aortic = most common combination. Tricuspid = most common in IV drug users (right-sided IE). Pulmonary = rarest. Right-sided IE more common in IVDU (S. aureus from skin flora via contaminated needles).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_ie_005",
    topic: "infective-endocarditis",
    year: "FMGE Dec 2020",
    q: "Libman-Sacks endocarditis (non-infectious) is associated with:",
    img: null,
    options: ["A. Rheumatic fever", "B. Systemic lupus erythematosus (SLE)", "C. Infective endocarditis", "D. Carcinoid syndrome"],
    answer: 1,
    explanation: "Libman-Sacks endocarditis (verrucous endocarditis): NBTE in SLE — small, irregular vegetations on BOTH surfaces of mitral valve (classically). Antiphospholipid antibodies may contribute. Carcinoid syndrome → tricuspid and pulmonary valve fibrosis (right-sided). Rheumatic → chronic fibrous valve changes.",
    tags: ["PYQ"]
  },
  {
    id: "path_ie_006",
    topic: "infective-endocarditis",
    year: "FMGE Jun 2021",
    q: "Modified Duke criteria for diagnosing IE require:",
    img: null,
    options: ["A. 3 major OR 2 major + 2 minor criteria", "B. 2 major OR 1 major + 3 minor OR 5 minor criteria", "C. Positive blood culture alone", "D. Echo finding alone is sufficient"],
    answer: 1,
    explanation: "Duke criteria: DEFINITE IE = 2 major OR 1 major + 3 minor OR 5 minor criteria. Major: positive blood cultures (typical organisms, persistent), echo evidence (vegetation, abscess, new regurgitation). Minor: predisposing lesion, IVDU, fever >38°C, vascular phenomena, immunologic phenomena, blood culture.",
    tags: ["PYQ"]
  },

  // ============ RENAL PATHOLOGY ============
  {
    id: "path_rp_001",
    topic: "renal-pathology",
    year: "FMGE Dec 2019",
    q: "The most common cause of nephrotic syndrome in children is:",
    img: null,
    options: ["A. Membranous nephropathy", "B. Minimal change disease (lipoid nephrosis)", "C. Focal segmental glomerulosclerosis (FSGS)", "D. IgA nephropathy"],
    answer: 1,
    explanation: "Minimal change disease (MCD): most common cause of nephrotic syndrome in children (2–6 years). LM: normal. EM: effacement of podocyte foot processes. IF: negative (no deposits). Excellent response to steroids (90%). Associated with Hodgkin lymphoma in adults. IL-13 dysfunction implicated.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_rp_002",
    topic: "renal-pathology",
    year: "FMGE Jun 2018",
    q: "IgA nephropathy (Berger's disease) characteristically presents with:",
    img: null,
    options: ["A. Painless hematuria 10–14 days after sore throat", "B. Episodic gross hematuria DURING or soon after upper respiratory tract infection (synpharyngitic hematuria)", "C. Nephrotic syndrome in children", "D. Chronic hypertension in elderly"],
    answer: 1,
    explanation: "IgA nephropathy: SYNPHARYNGITIC hematuria (hematuria during/immediately after URTI — distinguishes from post-streptococcal GN which is 10–14 days AFTER). IF: mesangial IgA + C3 deposits. LM: mesangial hypercellularity. Most common glomerulonephritis worldwide. Variable prognosis.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_rp_003",
    topic: "renal-pathology",
    year: "FMGE Dec 2018",
    q: "Nephrotic syndrome is defined by proteinuria of:",
    img: null,
    options: ["A. >150 mg/day", "B. >3.5 g/day (>3500 mg/day) in adults", "C. >1 g/day", "D. Any level of proteinuria + edema"],
    answer: 1,
    explanation: "Nephrotic syndrome: >3.5 g/day proteinuria + hypoalbuminemia (<3 g/dL) + edema + hyperlipidemia + lipiduria. In children: >40 mg/m²/hour or >1 g/m²/day. Causes: MCD (children), MN (adults, secondary to malignancy/drugs), FSGS (Black adults, heroin, HIV), diabetic nephropathy.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_rp_004",
    topic: "renal-pathology",
    year: "FMGE Jun 2019",
    q: "'Wire-loop' appearance on light microscopy of kidney biopsy is seen in:",
    img: null,
    options: ["A. IgA nephropathy", "B. Membranous nephropathy", "C. Lupus nephritis (SLE) class IV — diffuse proliferative", "D. Minimal change disease"],
    answer: 2,
    explanation: "Wire-loop lesions: massive subendothelial immune complex deposits in glomerular capillary loops in lupus nephritis (class IV, diffuse proliferative — most severe). IF: full-house pattern (IgG, IgA, IgM, C3, C1q). 'Tram-track' = membranoproliferative GN (MPGN). Spike and dome = membranous.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_rp_005",
    topic: "renal-pathology",
    year: "FMGE Dec 2020",
    q: "Diabetic nephropathy — characteristic histological finding is:",
    img: null,
    options: ["A. Wire-loop lesions", "B. Kimmelstiel-Wilson nodules (nodular glomerulosclerosis)", "C. Crescent formation", "D. Mesangial IgA deposits"],
    answer: 1,
    explanation: "Kimmelstiel-Wilson (KW) nodules: nodular deposits of laminated matrix in mesangium — pathognomonic of diabetic nephropathy. Also diffuse glomerulosclerosis (GBM thickening + mesangial expansion) — more common but less specific. Capsular drop and fibrin cap = other DM lesions.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_rp_006",
    topic: "renal-pathology",
    year: "FMGE Jun 2021",
    q: "Rapidly progressive glomerulonephritis (RPGN) is characterized histologically by:",
    img: null,
    options: ["A. Minimal change on LM", "B. Crescents (proliferating parietal epithelial cells + monocytes) in Bowman's space", "C. Mesangial hypercellularity only", "D. Tubular atrophy only"],
    answer: 1,
    explanation: "RPGN: >50% glomeruli with crescents (proliferating parietal epithelial cells + fibrin + monocytes in Bowman's space). Leads to rapid renal failure (days to weeks). Types: Type I (anti-GBM/Goodpasture), Type II (immune complex — SLE, IgA, post-strep), Type III (pauci-immune ANCA-associated vasculitis).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_rp_007",
    topic: "renal-pathology",
    year: "FMGE Dec 2021",
    q: "Goodpasture syndrome is due to antibodies against:",
    img: null,
    options: ["A. Podocyte phospholipase A2 receptor", "B. α3 chain of type IV collagen (anti-GBM antibody)", "C. PR3 (proteinase 3) — ANCA", "D. Complement C3"],
    answer: 1,
    explanation: "Goodpasture syndrome: anti-GBM antibodies against α3 chain of type IV collagen (expressed in GBM + alveolar basement membrane) → pulmonary-renal syndrome: crescentic GN + pulmonary hemorrhage. IF: linear IgG deposits along GBM. Anti-PLA2R = membranous nephropathy.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_rp_008",
    topic: "renal-pathology",
    year: "FMGE Jun 2020",
    q: "Clear cell carcinoma of the kidney (renal cell carcinoma) is associated with:",
    img: null,
    options: ["A. Horseshoe kidney", "B. VHL (von Hippel-Lindau) gene mutation on chromosome 3p", "C. Tuberous sclerosis only", "D. ADPKD"],
    answer: 1,
    explanation: "Clear cell RCC (most common RCC, 75%): VHL tumor suppressor gene mutation (chromosome 3p) → ↑HIF → ↑VEGF, EPO → angiogenesis. VHL syndrome: bilateral, multifocal RCC + hemangioblastomas + pheochromocytoma. Treated with anti-VEGF (sunitinib, pazopanib) or mTOR inhibitors.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ LIVER PATHOLOGY ============
  {
    id: "path_lp_001",
    topic: "liver-pathology",
    year: "FMGE Dec 2019",
    q: "Mallory-Denk bodies (Mallory's hyaline) in hepatocytes are characteristic of:",
    img: null,
    options: ["A. Viral hepatitis", "B. Alcoholic hepatitis and non-alcoholic steatohepatitis (NASH)", "C. Primary biliary cholangitis", "D. Hemochromatosis"],
    answer: 1,
    explanation: "Mallory-Denk bodies: eosinophilic intracytoplasmic inclusions of aggregated cytokeratin 8/18 intermediate filaments. Classic in alcoholic hepatitis and NASH. Also seen in PBC, Wilson's disease, PSC. Histological features of alcoholic hepatitis: steatosis + Mallory bodies + lobular inflammation + ballooning degeneration.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_lp_002",
    topic: "liver-pathology",
    year: "FMGE Jun 2018",
    q: "Councilman bodies (apoptotic bodies) in the liver are seen in:",
    img: null,
    options: ["A. Alcoholic hepatitis", "B. Viral hepatitis (hepatocyte apoptosis)", "C. Hepatocellular carcinoma", "D. Primary biliary cholangitis"],
    answer: 1,
    explanation: "Councilman (acidophil) bodies: eosinophilic, shrunken hepatocytes undergoing apoptosis — round, bright eosinophilic intracytoplasmic bodies (condensed chromatin + cytoplasm). Classic in viral hepatitis (hepatocyte apoptosis by cytotoxic T cells). Also in yellow fever.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_lp_003",
    topic: "liver-pathology",
    year: "FMGE Dec 2018",
    q: "Wilson's disease (hepatolenticular degeneration) is due to deficiency of:",
    img: null,
    options: ["A. Alpha-1 antitrypsin", "B. Ceruloplasmin / ATP7B copper transporter — copper accumulation", "C. Iron storage protein (ferritin)", "D. Urea cycle enzyme"],
    answer: 1,
    explanation: "Wilson's disease: autosomal recessive, ATP7B mutation → impaired hepatic copper excretion into bile + decreased ceruloplasmin → copper accumulates in liver, brain, cornea, kidneys. Features: liver disease, neuropsychiatric, Kayser-Fleischer rings (copper in Descemet's membrane), Coombs-negative hemolytic anemia.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_lp_004",
    topic: "liver-pathology",
    year: "FMGE Jun 2019",
    q: "Nutmeg liver (congestive hepatopathy) is caused by:",
    img: null,
    options: ["A. Hepatitis B infection", "B. Right heart failure → central hepatic congestion (centrilobular sinusoidal congestion)", "C. Portal hypertension from cirrhosis", "D. Alcoholic hepatitis"],
    answer: 1,
    explanation: "Nutmeg liver: gross appearance with alternating dark (congested centrilobular zones) and pale (normal/steatotic periportal areas) areas — resembles cut nutmeg. Caused by right heart failure (elevated central venous pressure → hepatic vein congestion → centrilobular sinusoidal dilation).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_lp_005",
    topic: "liver-pathology",
    year: "FMGE Dec 2020",
    q: "Ground-glass hepatocytes on liver biopsy are a marker of:",
    img: null,
    options: ["A. Alcoholic hepatitis", "B. Chronic Hepatitis B infection (HBsAg accumulation in ER)", "C. NASH", "D. Wilson's disease"],
    answer: 1,
    explanation: "Ground-glass hepatocytes: pale, eosinophilic cytoplasm with granular appearance — HBsAg accumulation in distended ER. Found in HBsAg carriers (surface antigen positive, core antigen negative = low replication). Confirmed by Orcein/Victoria blue stain or immunohistochemistry for HBsAg.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_lp_006",
    topic: "liver-pathology",
    year: "FMGE Jun 2021",
    q: "Alpha-1 antitrypsin deficiency in the liver is characterized by:",
    img: null,
    options: ["A. Iron deposition (prussian blue +)", "B. PAS-positive, diastase-resistant globules in hepatocyte ER", "C. Copper deposition", "D. Fatty change only"],
    answer: 1,
    explanation: "Alpha-1 antitrypsin (A1AT) deficiency: misfolded A1AT accumulates in hepatocyte ER → PAS-positive, diastase-resistant globules (pink on PAS stain, resistant to digestion by diastase enzyme). Causes cirrhosis in children. Lung: panacinar emphysema (A1AT normally protects against elastase).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_lp_007",
    topic: "liver-pathology",
    year: "FMGE Dec 2021",
    q: "Hepatocellular carcinoma (HCC) — the best serum marker is:",
    img: null,
    options: ["A. CEA", "B. AFP (alpha-fetoprotein) > 400 ng/mL", "C. CA19-9", "D. CA-125"],
    answer: 1,
    explanation: "AFP >400 ng/mL in the context of liver cirrhosis/mass is highly suggestive of HCC (specificity >99%). AFP used for screening in cirrhotic patients (6-monthly AFP + USG). HCC usually arises in cirrhosis (HBV, HCV, alcohol, NAFLD). Hepatic arterial phase enhancement on CT/MRI = characteristic.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ ANEMIA (PATHOLOGY) ============
  {
    id: "path_an_001",
    topic: "anemia-pathology",
    year: "FMGE Dec 2019",
    q: "In iron deficiency anemia, the peripheral blood smear shows:",
    img: null,
    options: ["A. Macrocytic, hypochromic cells", "B. Microcytic, hypochromic cells with pencil cells and target cells", "C. Normocytic, normochromic cells", "D. Spherocytes"],
    answer: 1,
    explanation: "Iron deficiency anemia: microcytic (MCV <80 fL), hypochromic (MCHC <32 g/dL) anemia. PBS: pencil (cigar) cells, target cells, anisocytosis, poikilocytosis. Serum ferritin ↓ (earliest marker), TIBC ↑, serum iron ↓, transferrin saturation ↓. Most common cause worldwide: nutritional deficiency.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_an_002",
    topic: "anemia-pathology",
    year: "FMGE Jun 2018",
    q: "Megaloblastic anemia is characterized by:",
    img: null,
    options: ["A. Microcytic, hypochromic RBCs", "B. Macrocytic anemia + hypersegmented neutrophils (>5 lobes) + megaloblasts in bone marrow", "C. Target cells and sickle cells", "D. Spherocytes and osmotic fragility"],
    answer: 1,
    explanation: "Megaloblastic anemia: impaired DNA synthesis (B12/folate deficiency) → nuclear-cytoplasmic asynchrony. PBS: macrocytes, hypersegmented neutrophils (≥5 lobes = pathognomonic). BM: megaloblasts. B12 deficiency also causes subacute combined degeneration of spinal cord (posterior + lateral columns).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_an_003",
    topic: "anemia-pathology",
    year: "FMGE Dec 2018",
    q: "Hemolytic anemia is distinguished from other anemias by:",
    img: null,
    options: ["A. Low reticulocyte count", "B. Elevated reticulocyte count + elevated LDH + elevated indirect bilirubin + reduced haptoglobin", "C. Low indirect bilirubin", "D. Normal LDH"],
    answer: 1,
    explanation: "Hemolytic anemia hallmarks: ↑reticulocytes (compensatory), ↑LDH (RBC destruction), ↑indirect bilirubin (bilirubin from Hb) → jaundice, ↓haptoglobin (binds free Hb), urobilinogen in urine (intravascular → hemoglobinuria). Intravascular hemolysis: additionally hemoglobinemia, hemoglobinuria.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_an_004",
    topic: "anemia-pathology",
    year: "FMGE Jun 2019",
    q: "Hereditary spherocytosis is caused by deficiency of:",
    img: null,
    options: ["A. G6PD", "B. Spectrin or ankyrin (RBC membrane skeleton proteins)", "C. Pyruvate kinase", "D. Vitamin B12"],
    answer: 1,
    explanation: "Hereditary spherocytosis (HS): autosomal dominant (mostly), deficiency of spectrin, ankyrin, or band 3 → loss of membrane → spherocytes. Positive osmotic fragility test. Chronic hemolytic anemia + jaundice + splenomegaly + pigment gallstones. Aplastic crisis: Parvovirus B19.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_an_005",
    topic: "anemia-pathology",
    year: "FMGE Dec 2020",
    q: "Sickle cell disease (HbSS) — the pathological mechanism is:",
    img: null,
    options: ["A. Decreased globin synthesis", "B. HbS (Glu→Val at position 6 of β-chain) polymerizes when deoxygenated → sickling → vaso-occlusion", "C. Spherocyte formation", "D. Vitamin B12 deficiency"],
    answer: 1,
    explanation: "Sickle cell disease: missense mutation in β-globin (GAG→GTG) → Glu→Val at position 6 → HbS. Deoxygenation → HbS polymerization → rigid sickle cells → vaso-occlusion → pain crises, organ infarcts. Also hemolytic anemia (splenic sequestration, hand-foot syndrome). HbF prevents sickling (hydroxyurea ↑HbF).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_an_006",
    topic: "anemia-pathology",
    year: "FMGE Jun 2021",
    q: "G6PD deficiency causes hemolytic anemia precipitated by:",
    img: null,
    options: ["A. Cold exposure", "B. Oxidant stress: primaquine, dapsone, fava beans, infections, sulfonamides", "C. Blood transfusion", "D. Exercise-induced hemolysis"],
    answer: 1,
    explanation: "G6PD deficiency (X-linked): G6PD generates NADPH (glutathione) to protect RBCs from oxidative stress. Triggers: primaquine, dapsone, nitrofurantoin, sulfonamides, fava beans, infections → Heinz bodies (denatured Hb) + bite cells on PBS. Most common enzyme deficiency worldwide (protects against P. falciparum).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_an_007",
    topic: "anemia-pathology",
    year: "FMGE Dec 2021",
    q: "Beta-thalassemia major (Cooley's anemia) is characterized by:",
    img: null,
    options: ["A. Mild anemia with splenomegaly only", "B. Severe microcytic anemia, extramedullary hematopoiesis, crew-cut skull X-ray, requiring regular transfusions", "C. Sickle cells on PBS", "D. Spherocytes and jaundice"],
    answer: 1,
    explanation: "Beta-thalassemia major: absent/severe reduction of β-globin chains → α chain excess → precipitate → hemolysis + ineffective erythropoiesis → severe anemia from 6 months (HbF wanes). Bone marrow expansion → crewcut skull, chipmunk facies, hepatosplenomegaly. Treatment: regular transfusions + chelation, HSCT (curative).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_an_008",
    topic: "anemia-pathology",
    year: "FMGE Jun 2020",
    q: "Paroxysmal nocturnal hemoglobinuria (PNH) is caused by:",
    img: null,
    options: ["A. Deficiency of factor VIII", "B. PIG-A mutation → absence of GPI-anchored proteins (CD55, CD59) → complement-mediated hemolysis", "C. Autoimmune IgG against RBCs", "D. Spectrin deficiency"],
    answer: 1,
    explanation: "PNH: acquired somatic PIG-A mutation in stem cells → loss of GPI-anchor → absence of complement regulatory proteins CD55 (DAF) and CD59 (MIRL) → complement-mediated intravascular hemolysis. Triad: hemolytic anemia + thrombosis + pancytopenia. Ham test (acid hemolysis) — replaced by flow cytometry. Eculizumab = treatment.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ LEUKEMIA & LYMPHOMA ============
  {
    id: "path_ll_001",
    topic: "leukemia-lymphoma",
    year: "FMGE Dec 2019",
    q: "Reed-Sternberg cells are pathognomonic of:",
    img: null,
    options: ["A. Non-Hodgkin lymphoma", "B. Hodgkin lymphoma", "C. Multiple myeloma", "D. CLL"],
    answer: 1,
    explanation: "Reed-Sternberg (RS) cells: binucleate or bilobed giant cells with prominent eosinophilic 'owl-eye' nucleoli + abundant pale cytoplasm — pathognomonic of classical Hodgkin lymphoma. CD15+, CD30+, CD45−. RS cells are derived from germinal center B cells.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_ll_002",
    topic: "leukemia-lymphoma",
    year: "FMGE Jun 2018",
    q: "Auer rods (eosinophilic needle-like cytoplasmic inclusions) are seen in:",
    img: null,
    options: ["A. ALL (acute lymphoblastic leukemia)", "B. AML (acute myeloid leukemia)", "C. CLL", "D. CML blast crisis only"],
    answer: 1,
    explanation: "Auer rods: azurophilic, needle-like cytoplasmic inclusions (crystallized lysosomes/primary granules) in myeloblasts — pathognomonic of AML. Help differentiate AML from ALL. M3 (APL/acute promyelocytic leukemia) = abundant Auer rods (faggot cells). t(15;17) = M3 = treated with ATRA.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_ll_003",
    topic: "leukemia-lymphoma",
    year: "FMGE Dec 2018",
    q: "Smudge cells on peripheral blood smear are characteristic of:",
    img: null,
    options: ["A. CML", "B. CLL (chronic lymphocytic leukemia)", "C. AML", "D. Myeloma"],
    answer: 1,
    explanation: "Smudge (basket) cells: fragile lymphocytes smeared during blood film preparation — characteristic of CLL. CLL = most common adult leukemia in Western countries. CD5+, CD19+, CD23+, FMC7−. Presents with lymphocytosis, lymphadenopathy, splenomegaly, infections. Hypogammaglobulinemia.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_ll_004",
    topic: "leukemia-lymphoma",
    year: "FMGE Jun 2019",
    q: "Translocation t(8;14) involving c-MYC is seen in:",
    img: null,
    options: ["A. Follicular lymphoma", "B. Burkitt lymphoma", "C. Mantle cell lymphoma", "D. Hodgkin lymphoma"],
    answer: 1,
    explanation: "Burkitt lymphoma: t(8;14) — MYC oncogene juxtaposed to IgH locus → overexpression of MYC → uncontrolled proliferation. 'Starry sky' pattern (macrophages engulfing apoptotic cells). Associated with EBV (endemic jaw tumor in Africa). Ki-67 nearly 100% (most proliferative tumor). ALL t(12;21) = ETV6-RUNX1 (best prognosis). t(11;14) = Mantle cell lymphoma.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_ll_005",
    topic: "leukemia-lymphoma",
    year: "FMGE Dec 2020",
    q: "Multiple myeloma is characterized by all EXCEPT:",
    img: null,
    options: ["A. Monoclonal paraprotein (M-protein) in serum", "B. Lytic bone lesions (punched-out)", "C. Rouleaux formation on PBS", "D. Increased immunoglobulin diversity (polyclonal)"],
    answer: 3,
    explanation: "Multiple myeloma: clonal plasma cell malignancy. Features: monoclonal M-protein (usually IgG/IgA), Bence-Jones protein (free light chains in urine), lytic bone lesions (CRAB: hyperCalcemia, Renal failure, Anemia, Bone lesions), rouleaux, recurrent infections (hypogammaglobulinemia), amyloidosis. NOT polyclonal Ig.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_ll_006",
    topic: "leukemia-lymphoma",
    year: "FMGE Jun 2021",
    q: "Hodgkin lymphoma — which subtype has the best prognosis?",
    img: null,
    options: ["A. Lymphocyte-depleted", "B. Mixed cellularity", "C. Nodular sclerosis", "D. Lymphocyte-rich (lymphocyte predominant)"],
    answer: 3,
    explanation: "Hodgkin lymphoma prognosis (best to worst): Lymphocyte-rich/Lymphocyte predominant (best) → Nodular sclerosis → Mixed cellularity → Lymphocyte-depleted (worst). Nodular sclerosis = most common overall (70%, young women, mediastinal). Reed-Sternberg cells: fewer in LP, most in LD.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_ll_007",
    topic: "leukemia-lymphoma",
    year: "FMGE Dec 2021",
    q: "Characteristic chromosomal translocation in follicular lymphoma is:",
    img: null,
    options: ["A. t(9;22)", "B. t(14;18) — BCL2 overexpression", "C. t(8;14)", "D. t(15;17)"],
    answer: 1,
    explanation: "Follicular lymphoma: t(14;18) → BCL2 gene juxtaposed to IgH enhancer → BCL2 overexpression → inhibited apoptosis → lymphocyte accumulation. CD10+, CD20+, BCL2+. Indolent but incurable (usually). Transformation to DLBCL (Richter's transformation) = worse prognosis.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_ll_008",
    topic: "leukemia-lymphoma",
    year: "FMGE Jun 2020",
    q: "Myeloma bone disease is caused by:",
    img: null,
    options: ["A. Metastatic deposits in bone", "B. Myeloma cells activate osteoclasts (via RANKL) while inhibiting osteoblasts → lytic lesions with no sclerosis", "C. Amyloid deposition in bone", "D. Paraprotein crystallization"],
    answer: 1,
    explanation: "Myeloma bone disease: myeloma cells produce DKK1, IL-6, RANKL → osteoclast activation + osteoblast inhibition → pure LYTIC lesions (no sclerotic reaction = no increased uptake on bone scan). Pathological fractures, hypercalcemia. Bisphosphonates (zoledronic acid) prevent skeletal events.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_ll_009",
    topic: "leukemia-lymphoma",
    year: "FMGE Dec 2019",
    q: "CML (chronic myeloid leukemia) is best treated with:",
    img: null,
    options: ["A. Cyclophosphamide", "B. Imatinib (tyrosine kinase inhibitor targeting BCR-ABL)", "C. All-trans retinoic acid (ATRA)", "D. Rituximab"],
    answer: 1,
    explanation: "CML: imatinib (Gleevec) = BCR-ABL tyrosine kinase inhibitor → transformed prognosis (5-year survival >90%). Nilotinib, dasatinib = 2nd generation TKIs (imatinib resistance). Blast crisis phase → poor prognosis. Allogeneic HSCT = only curative option but imatinib usually preferred initially.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ BLEEDING DISORDERS (PATHOLOGY) ============
  {
    id: "path_bd_001",
    topic: "bleeding-disorders-path",
    year: "FMGE Dec 2019",
    q: "Hemophilia A is due to deficiency of:",
    img: null,
    options: ["A. Factor IX", "B. Factor VIII (classical hemophilia — X-linked recessive)", "C. Factor XII (Hageman factor)", "D. Von Willebrand factor"],
    answer: 1,
    explanation: "Hemophilia A: X-linked recessive, deficiency of Factor VIII (intrinsic/contact pathway). aPTT ↑, PT normal, BT normal, platelet count normal. Hemophilia B (Christmas disease): Factor IX deficiency (X-linked). Clinical: hemarthrosis, deep muscle hematomas, no petechiae (platelet-type). Treat with Factor VIII concentrate/recombinant.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_bd_002",
    topic: "bleeding-disorders-path",
    year: "FMGE Jun 2018",
    q: "In DIC (disseminated intravascular coagulation), lab findings show:",
    img: null,
    options: ["A. Elevated fibrinogen + normal PT + normal aPTT", "B. Low fibrinogen + elevated PT + elevated aPTT + elevated D-dimer + thrombocytopenia", "C. Isolated thrombocytopenia only", "D. Elevated Factor VIII only"],
    answer: 1,
    explanation: "DIC: simultaneous activation of coagulation AND fibrinolysis → consumption of clotting factors + platelets. Labs: ↓fibrinogen, ↑PT, ↑aPTT, ↑D-dimer (fibrin degradation), ↓platelets, ↑FDPs, schistocytes on PBS (microangiopathic hemolytic anemia). Causes: sepsis, obstetric emergencies, malignancy, trauma.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_bd_003",
    topic: "bleeding-disorders-path",
    year: "FMGE Dec 2018",
    q: "Von Willebrand disease (vWD) is characterized by:",
    img: null,
    options: ["A. Prolonged aPTT + normal BT + normal platelet count", "B. Prolonged BT + low Factor VIII activity + low vWF antigen", "C. Normal coagulation studies with only clinical bleeding", "D. Thrombocytopenia only"],
    answer: 1,
    explanation: "vWD: deficiency/dysfunction of von Willebrand factor (vWF). vWF: (1) mediates platelet adhesion to subendothelium, (2) carrier for Factor VIII. BT ↑ (platelet adhesion defect) + aPTT ↑ (Factor VIII ↓). Most common inherited bleeding disorder. Type 1 (most common): mild ↓vWF, autosomal dominant. DDAVP releases vWF from endothelium.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_bd_004",
    topic: "bleeding-disorders-path",
    year: "FMGE Jun 2019",
    q: "ITP (immune thrombocytopenic purpura) is characterized by:",
    img: null,
    options: ["A. Isolated thrombocytopenia with anti-platelet IgG antibodies — normal coagulation studies", "B. Thrombocytopenia + elevated PT + elevated aPTT", "C. Thrombocytopenia + microangiopathic hemolytic anemia (TTP/HUS)", "D. Thrombocytosis"],
    answer: 0,
    explanation: "ITP: anti-platelet IgG antibodies (against GPIIb/IIIa) → platelet destruction by spleen macrophages. Isolated thrombocytopenia, normal PT/aPTT, normal/increased megakaryocytes in BM. Petechiae, purpura, mucosal bleeding (NOT hemarthrosis). Treatment: corticosteroids, IVIG, anti-D, thrombopoietin agonists, splenectomy.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_bd_005",
    topic: "bleeding-disorders-path",
    year: "FMGE Dec 2020",
    q: "Thrombotic thrombocytopenic purpura (TTP) is caused by:",
    img: null,
    options: ["A. Factor VIII deficiency", "B. Deficiency/inhibitor of ADAMTS13 (vWF-cleaving protease) → platelet microthrombi", "C. Factor V Leiden mutation", "D. Antiphospholipid antibodies only"],
    answer: 1,
    explanation: "TTP: ADAMTS13 deficiency (congenital) or autoantibody inhibitor → accumulation of ultra-large vWF multimers → platelet microthrombi in microcirculation. Pentad: Microangiopathic hemolytic anemia, Thrombocytopenia, Neurological symptoms, renal failure, fever. Treat with plasma exchange (removes inhibitor + replaces ADAMTS13).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_bd_006",
    topic: "bleeding-disorders-path",
    year: "FMGE Jun 2021",
    q: "Heparin-induced thrombocytopenia (HIT) is characterized by:",
    img: null,
    options: ["A. Bleeding tendency due to low platelets", "B. Thrombocytopenia (paradoxical) + THROMBOSIS due to IgG antibodies against PF4-heparin complexes", "C. Isolated thrombocytopenia without thrombosis", "D. Disseminated intravascular coagulation pattern"],
    answer: 1,
    explanation: "HIT: IgG antibodies against PF4 (platelet factor 4)-heparin complex → platelet activation → PARADOXICAL thrombosis (venous + arterial) despite thrombocytopenia. 4T score for diagnosis. Management: IMMEDIATELY stop heparin + use alternative anticoagulant (argatroban, fondaparinux — NOT warfarin until platelets normalize).",
    tags: ["PYQ", "high-yield"]
  },


  {
    id: "path_neo_010",
    topic: "neoplasia",
    year: "FMGE Dec 2022",
    q: "Loss of heterozygosity (LOH) of a tumour suppressor gene leads to:",
    img: null,
    options: ["A. Loss of both alleles (Knudson's two-hit hypothesis) enabling tumour progression", "B. Activation of proto-oncogene", "C. Gene amplification", "D. Chromosomal translocation"],
    answer: 0,
    explanation: "Knudson's two-hit: both alleles of a TSG must be inactivated; in hereditary cancer first hit is germline, second is somatic LOH.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_inf_009",
    topic: "inflammation",
    year: "FMGE Dec 2022",
    q: "Granulomatous inflammation is characterised by aggregates of:",
    img: null,
    options: ["A. Activated macrophages (epithelioid cells) ± Langhans giant cells and lymphocytes", "B. Neutrophils as the dominant cell", "C. Eosinophils in large numbers", "D. Plasma cells only"],
    answer: 0,
    explanation: "Granuloma = activated macrophages (epithelioid histiocytes) ± giant cells ± central necrosis (caseous in TB); triggered by indigestible agents.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_inf_010",
    topic: "inflammation",
    year: "FMGE Jun 2022",
    q: "The Arachidonic acid pathway of inflammation is blocked by NSAIDs via inhibition of:",
    img: null,
    options: ["A. Cyclooxygenase (COX-1 and COX-2)", "B. Lipoxygenase", "C. Phospholipase A2 (corticosteroids inhibit this)", "D. Thromboxane synthetase only"],
    answer: 0,
    explanation: "NSAIDs inhibit COX-1/2 → reduce prostaglandins and thromboxane; steroids inhibit phospholipase A2 (broader, blocks both COX and LOX pathways).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_mi_009",
    topic: "mi-pathology",
    year: "FMGE Dec 2022",
    q: "Earliest histological change in myocardial infarction (within 0-12 hours) is:",
    img: null,
    options: ["A. Wavy fibres and coagulative necrosis — no cellular infiltrate yet", "B. Neutrophil infiltration", "C. Macrophage phagocytosis", "D. Granulation tissue"],
    answer: 0,
    explanation: "First 4-12 h: wavy myocyte fibres, contraction bands, eosinophilic cytoplasm (coagulative necrosis); neutrophils appear at 12-24 h.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_mi_010",
    topic: "mi-pathology",
    year: "FMGE Jun 2022",
    q: "Cardiac rupture (free wall) after MI most commonly occurs:",
    img: null,
    options: ["A. 3-7 days post-MI (peak of neutrophilic/macrophage lysis before fibrosis)", "B. Within first hour", "C. After 4 weeks when scar is complete", "D. Only in right ventricular MI"],
    answer: 0,
    explanation: "Free wall rupture peaks at 3-7 days when necrotic tissue is maximally softened by enzymatic lysis (mononuclear cells) before fibrotic replacement.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_rp_009",
    topic: "renal-pathology",
    year: "FMGE Dec 2022",
    q: "Wire loop lesions on renal biopsy are characteristic of:",
    img: null,
    options: ["A. Lupus nephritis (WHO class IV — diffuse proliferative)", "B. Diabetic nephropathy", "C. IgA nephropathy", "D. Minimal change disease"],
    answer: 0,
    explanation: "Wire loop lesions (subendothelial immune deposits thickening GBM on LM) are pathognomonic of class IV lupus nephritis.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_rp_010",
    topic: "renal-pathology",
    year: "FMGE Jun 2022",
    q: "Kimmelstiel-Wilson nodules are seen in:",
    img: null,
    options: ["A. Diabetic nephropathy (nodular glomerulosclerosis)", "B. Amyloidosis", "C. Membranous nephropathy", "D. MPGN"],
    answer: 0,
    explanation: "Kimmelstiel-Wilson nodules = nodular mesangial expansion with acellular PAS-positive deposits in diabetic nephropathy.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_an_009",
    topic: "anemia-pathology",
    year: "FMGE Dec 2022",
    q: "Hypersegmented neutrophils (>5 lobes) on peripheral smear indicate:",
    img: null,
    options: ["A. Megaloblastic anaemia (B12/folate deficiency)", "B. Iron deficiency anaemia", "C. Haemolytic anaemia", "D. Aplastic anaemia"],
    answer: 0,
    explanation: "Hypersegmented neutrophils (macropolycytes) are an early sensitive marker of megaloblastic anaemia due to impaired DNA synthesis.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_an_010",
    topic: "anemia-pathology",
    year: "FMGE Jun 2022",
    q: "In hereditary spherocytosis the defect is in:",
    img: null,
    options: ["A. Spectrin or ankyrin (RBC membrane skeleton proteins)", "B. G6PD enzyme", "C. Haemoglobin chain", "D. Pyruvate kinase"],
    answer: 0,
    explanation: "HS is caused by mutations in spectrin, ankyrin, band 3, or protein 4.2 — RBC membrane loses area relative to volume → spherocytes → splenic haemolysis.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_ll_010",
    topic: "leukemia-lymphoma",
    year: "FMGE Dec 2022",
    q: "Reed-Sternberg cells are pathognomonic of:",
    img: null,
    options: ["A. Hodgkin lymphoma (owl-eye large binucleate cells, CD15+, CD30+)", "B. Diffuse large B-cell lymphoma", "C. Burkitt lymphoma", "D. CLL"],
    answer: 0,
    explanation: "RS cells: large binucleate/bilobed cells with prominent 'owl-eye' nucleoli, CD15+/CD30+; necessary but not sufficient for HL diagnosis.",
    tags: ["PYQ", "high-yield"]
  },

  {
    id: "path_ci_008",
    topic: "cell-injury",
    year: "FMGE Dec 2022",
    q: "Dystrophic calcification occurs in:",
    img: null,
    options: ["A. Dead or dying tissue with normal serum calcium (e.g., atherosclerotic plaques, TB foci)", "B. Normal tissue with elevated serum calcium (metastatic)", "C. Only in bone tissue", "D. Requires elevated phosphate"],
    answer: 0,
    explanation: "Dystrophic calcification: abnormal tissue + normal Ca²⁺; metastatic calcification: normal tissue + elevated serum Ca²⁺ (hyperparathyroidism, hypervitaminosis D).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_ci_009",
    topic: "cell-injury",
    year: "FMGE Jun 2022",
    q: "Irreversible cell injury is heralded by:",
    img: null,
    options: ["A. Massive calcium influx into cytoplasm and mitochondrial membrane damage (MPT pore opening)", "B. Cell swelling (reversible)", "C. Ribosome detachment (reversible)", "D. Glycogen depletion (reversible)"],
    answer: 0,
    explanation: "The point of no return: mitochondrial permeability transition, massive Ca²⁺ influx, activation of phospholipases/proteases/endonucleases.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_ci_010",
    topic: "cell-injury",
    year: "FMGE Dec 2021",
    q: "Apoptosis differs from necrosis in that apoptosis:",
    img: null,
    options: ["A. Is programmed, affects single cells, no inflammation, cell shrinkage with membrane blebs", "B. Causes acute inflammation", "C. Results in cell swelling and lysis", "D. Always requires extrinsic caspase activation"],
    answer: 0,
    explanation: "Apoptosis: energy-dependent, programmed, cell shrinks, chromatin condensation, apoptotic bodies phagocytosed; necrosis: pathological, cell swells, lyses, triggers inflammation.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_tm_008",
    topic: "tumor-markers",
    year: "FMGE Dec 2022",
    q: "PSA (prostate specific antigen) is a tumour marker for:",
    img: null,
    options: ["A. Prostate carcinoma (also elevated in BPH and prostatitis — not specific)", "B. Testicular germ cell tumour", "C. Hepatocellular carcinoma", "D. Colon cancer"],
    answer: 0,
    explanation: "PSA (kallikrein-3) is organ-specific but not cancer-specific; used for screening, staging, and post-treatment monitoring of prostate cancer.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_tm_009",
    topic: "tumor-markers",
    year: "FMGE Jun 2022",
    q: "CA-125 is the tumour marker for:",
    img: null,
    options: ["A. Ovarian carcinoma (epithelial type — serous)", "B. Breast cancer", "C. Endometrial carcinoma", "D. Cervical cancer"],
    answer: 0,
    explanation: "CA-125 is elevated in >80% of advanced epithelial ovarian cancers; also elevated in endometriosis, PID, pregnancy (non-specific).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_tm_010",
    topic: "tumor-markers",
    year: "FMGE Dec 2021",
    q: "Beta-HCG as a tumour marker is elevated in all EXCEPT:",
    img: null,
    options: ["A. Seminoma (pure seminoma rarely elevates beta-HCG; AFP is not produced by seminoma)", "B. Choriocarcinoma", "C. Non-seminomatous germ cell tumours (mixed)", "D. Hydatidiform mole"],
    answer: 0,
    explanation: "Pure seminoma: AFP always normal, beta-HCG mildly elevated in <10%; any AFP elevation reclassifies to NSGCT. Choriocarcinoma: beta-HCG markedly elevated.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_lp_008",
    topic: "liver-pathology",
    year: "FMGE Dec 2022",
    q: "Mallory-Denk bodies (Mallory hyaline) are characteristically seen in:",
    img: null,
    options: ["A. Alcoholic hepatitis (also in NASH, Wilson disease, primary biliary cholangitis)", "B. Viral hepatitis only", "C. Hepatocellular carcinoma only", "D. Liver metastasis"],
    answer: 0,
    explanation: "Mallory-Denk bodies are eosinophilic aggregates of ubiquitinated intermediate filaments (cytokeratins 8/18) in hepatocyte cytoplasm.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_lp_009",
    topic: "liver-pathology",
    year: "FMGE Jun 2022",
    q: "Hepatic veins are affected in:",
    img: null,
    options: ["A. Budd-Chiari syndrome (hepatic vein thrombosis — centrilobular congestion)", "B. Portal vein thrombosis (portal hypertension)", "C. Right heart failure (congestive hepatopathy)", "D. Alcoholic cirrhosis"],
    answer: 0,
    explanation: "Budd-Chiari: hepatic vein/IVC occlusion → hepatomegaly, ascites, abdominal pain; associated with hypercoagulable states (PCV, pregnancy).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_lp_010",
    topic: "liver-pathology",
    year: "FMGE Dec 2021",
    q: "Nutmeg liver (mottled red-yellow cut surface) is the gross appearance in:",
    img: null,
    options: ["A. Chronic passive congestion (right heart failure — centrilobular necrosis)", "B. Acute viral hepatitis", "C. Fatty liver (uniform yellow)", "D. Hepatocellular carcinoma"],
    answer: 0,
    explanation: "Nutmeg liver: centrilobular congestion (red) surrounded by periportal fatty change (yellow) resembles nutmeg; caused by chronic venous congestion.",
    tags: ["PYQ", "high-yield"]
  },

  {
    id: "path_ip_007",
    topic: "immunopathology",
    year: "FMGE Dec 2022",
    q: "Type III hypersensitivity (immune complex) is responsible for:",
    img: null,
    options: ["A. Serum sickness, SLE nephritis, post-streptococcal GN, Arthus reaction", "B. Anaphylaxis (type I)", "C. Contact dermatitis (type IV)", "D. Transfusion haemolysis (type II)"],
    answer: 0,
    explanation: "Type III: antigen-antibody complexes deposit in tissues → complement activation → neutrophil infiltration and tissue damage.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_ip_008",
    topic: "immunopathology",
    year: "FMGE Jun 2022",
    q: "DiGeorge syndrome is caused by failure of development of:",
    img: null,
    options: ["A. Third and fourth pharyngeal pouches (absent thymus and parathyroids)", "B. Bone marrow failure", "C. Bursa equivalent (B-cell deficiency)", "D. Spleen"],
    answer: 0,
    explanation: "DiGeorge: 22q11.2 deletion → absent thymus (T-cell deficiency) + absent parathyroids (hypocalcaemia) + conotruncal cardiac defects.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_ip_009",
    topic: "immunopathology",
    year: "FMGE Dec 2021",
    q: "Bruton's agammaglobulinaemia is due to a defect in:",
    img: null,
    options: ["A. Bruton's tyrosine kinase (BTK) — X-linked B-cell maturation arrest", "B. T-cell receptor signalling", "C. NK cell cytotoxicity", "D. Phagocyte oxidative burst"],
    answer: 0,
    explanation: "X-linked Bruton's: BTK mutation → pro-B cells cannot mature → absent mature B cells and immunoglobulins → recurrent sinopulmonary bacterial infections.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_ip_010",
    topic: "immunopathology",
    year: "FMGE Jun 2021",
    q: "Chronic granulomatous disease is caused by a defect in:",
    img: null,
    options: ["A. NADPH oxidase (failure of respiratory burst → recurrent catalase-positive organism infections)", "B. Adenosine deaminase", "C. Myeloperoxidase", "D. CD18 (LAD)"],
    answer: 0,
    explanation: "CGD: X-linked (CYBB gene) NADPH oxidase defect → no superoxide → recurrent S. aureus, Aspergillus, Klebsiella, Serratia infections.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_ie_007",
    topic: "infective-endocarditis",
    year: "FMGE Dec 2022",
    q: "Most common organism causing infective endocarditis on native valves is:",
    img: null,
    options: ["A. Streptococcus viridans (oral flora)", "B. Staphylococcus aureus", "C. Enterococcus", "D. HACEK organisms"],
    answer: 0,
    explanation: "Viridans streptococci (S. sanguinis, S. mitis) cause subacute IE on abnormal valves after dental procedures; S. aureus causes acute IE.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_ie_008",
    topic: "infective-endocarditis",
    year: "FMGE Jun 2022",
    q: "Osler's nodes in infective endocarditis are:",
    img: null,
    options: ["A. Painful tender nodules on finger/toe pads (immune complex deposition)", "B. Non-painful haemorrhagic lesions on palms (Janeway lesions)", "C. Splinter haemorrhages under nails", "D. Roth spots in retina"],
    answer: 0,
    explanation: "Osler's nodes: PAINFUL; Janeway lesions: NON-painful; both are peripheral embolic/immune manifestations of IE.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_ie_009",
    topic: "infective-endocarditis",
    year: "FMGE Dec 2021",
    q: "Non-bacterial thrombotic endocarditis (marantic endocarditis) is associated with:",
    img: null,
    options: ["A. Debilitating chronic illness (cancer, SLE, uraemia) — sterile fibrin-platelet vegetations", "B. Acute bacterial sepsis", "C. Rheumatic fever", "D. IV drug use"],
    answer: 0,
    explanation: "NBTE: sterile vegetations along valve line of closure in cachectic patients; can embolise; associated with mucinous adenocarcinoma (Trousseau).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_ie_010",
    topic: "infective-endocarditis",
    year: "FMGE Jun 2021",
    q: "Duke criteria for infective endocarditis requires for definite diagnosis:",
    img: null,
    options: ["A. 2 major, 1 major + 3 minor, or 5 minor criteria", "B. 1 major criterion alone", "C. Positive blood culture alone", "D. Echocardiography alone"],
    answer: 0,
    explanation: "Modified Duke: Definite = 2 major OR 1 major + 3 minor OR 5 minor; Possible = 1 major + 1 minor OR 3 minor.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_bd_007",
    topic: "bleeding-disorders-path",
    year: "FMGE Dec 2022",
    q: "Bernard-Soulier syndrome is caused by deficiency of:",
    img: null,
    options: ["A. Glycoprotein Ib (GPIb-IX-V complex) — platelet receptor for von Willebrand factor", "B. GPIIb/IIIa (Glanzmann thrombasthenia)", "C. Factor VIII", "D. Fibrinogen"],
    answer: 0,
    explanation: "Bernard-Soulier: GPIb deficiency → platelets cannot adhere to vWF on subendothelium → large platelets, thrombocytopenia, prolonged BT.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_bd_008",
    topic: "bleeding-disorders-path",
    year: "FMGE Jun 2022",
    q: "Glanzmann thrombasthenia is caused by deficiency of:",
    img: null,
    options: ["A. GPIIb/IIIa (αIIbβ3) — platelet receptor for fibrinogen (aggregation defect)", "B. GPIb (Bernard-Soulier)", "C. vWF", "D. Platelet factor 4"],
    answer: 0,
    explanation: "Glanzmann: GPIIb/IIIa deficiency → normal platelet count, normal adhesion, but no aggregation → markedly prolonged BT, failure of clot retraction.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_bd_009",
    topic: "bleeding-disorders-path",
    year: "FMGE Dec 2021",
    q: "Haemophilia A is due to deficiency of:",
    img: null,
    options: ["A. Factor VIII (X-linked recessive)", "B. Factor IX (haemophilia B)", "C. Factor XI (haemophilia C)", "D. vWF"],
    answer: 0,
    explanation: "Haemophilia A: F VIII deficiency; Haemophilia B (Christmas disease): F IX deficiency; both X-linked — deep bleeds, haemarthroses, prolonged APTT.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_bd_010",
    topic: "bleeding-disorders-path",
    year: "FMGE Jun 2021",
    q: "DIC (disseminated intravascular coagulation) is characterised by:",
    img: null,
    options: ["A. Simultaneous thrombosis and haemorrhage; low fibrinogen, elevated D-dimers, prolonged PT/APTT", "B. Isolated thrombosis without bleeding", "C. Normal PT/APTT", "D. Elevated fibrinogen"],
    answer: 0,
    explanation: "DIC: systemic coagulation activation → microvascular thrombi + consumption of clotting factors and platelets → paradoxical bleeding.",
    tags: ["PYQ", "high-yield"]
  },

  {
    id: "path_wh_006",
    topic: "wound-healing",
    year: "FMGE Dec 2022",
    q: "Healing by primary intention (first intention) requires:",
    img: null,
    options: ["A. Clean wound with opposed edges, minimal tissue loss, forms a thin scar", "B. Large open wound healing from base", "C. Skin grafting always", "D. Secondary closure after granulation"],
    answer: 0,
    explanation: "Primary intention: clean surgical wound, edges approximated → re-epithelialisation within 24-48 h, minimal granulation tissue, thin scar.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_wh_007",
    topic: "wound-healing",
    year: "FMGE Jun 2022",
    q: "Granulation tissue is composed of:",
    img: null,
    options: ["A. New capillary loops (angiogenesis) + fibroblasts + loose ECM — appears day 3-5", "B. Mature collagen fibres only", "C. Neutrophils and necrotic debris", "D. Lymphocytes and plasma cells"],
    answer: 0,
    explanation: "Granulation tissue = proliferating capillary buds + myofibroblasts + loose collagen; key growth factors: VEGF (angiogenesis), TGF-β (fibrosis).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_wh_008",
    topic: "wound-healing",
    year: "FMGE Dec 2021",
    q: "Wound strength at the end of the first week is approximately:",
    img: null,
    options: ["A. 10% of normal skin strength", "B. 70% (3 months)", "C. 100% (fully restored)", "D. 50% at one week"],
    answer: 0,
    explanation: "Wound tensile strength: ~10% at 1 week, ~20% at 3 weeks, ~70% at 3 months; full pre-injury strength is never fully regained.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_wh_009",
    topic: "wound-healing",
    year: "FMGE Jun 2021",
    q: "Vitamin C deficiency impairs wound healing by affecting:",
    img: null,
    options: ["A. Collagen synthesis (hydroxylation of proline and lysine requires vitamin C)", "B. Angiogenesis only", "C. Neutrophil recruitment", "D. Platelet aggregation"],
    answer: 0,
    explanation: "Scurvy: vitamin C deficiency → impaired prolyl hydroxylase → unstable collagen → poor wound healing, perifollicular haemorrhage, corkscrew hairs.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_wh_010",
    topic: "wound-healing",
    year: "FMGE Dec 2020",
    q: "Keloid differs from hypertrophic scar in that keloid:",
    img: null,
    options: ["A. Extends beyond wound margins, does not regress, has thick disorganised type I collagen bundles", "B. Stays within wound margins (hypertrophic scar stays within)", "C. Regresses spontaneously over 6-12 months", "D. Is premalignant"],
    answer: 0,
    explanation: "Keloid: extends beyond original margins, does not regress, commoner in dark skin; hypertrophic scar: confined to wound, may regress, both are benign.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_hd_006",
    topic: "hemodynamic-disorders",
    year: "FMGE Dec 2022",
    q: "Lines of Zahn in a thrombus indicate:",
    img: null,
    options: ["A. Ante-mortem formation — alternating pale (fibrin-platelet) and dark (RBC) laminations", "B. Post-mortem clot (chicken fat appearance)", "C. Tumour embolus", "D. Infected thrombus"],
    answer: 0,
    explanation: "Lines of Zahn = antemortem thrombus; post-mortem clot is homogeneous (red dependent layer + yellow 'chicken fat' upper layer without laminations).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_hd_007",
    topic: "hemodynamic-disorders",
    year: "FMGE Jun 2022",
    q: "Paradoxical embolism occurs when a thrombus passes from venous to arterial circulation via:",
    img: null,
    options: ["A. Patent foramen ovale or ASD (right-to-left shunt)", "B. VSD normally (left-to-right shunt)", "C. Pulmonary arteriovenous malformation", "D. Both A and C"],
    answer: 3,
    explanation: "Paradoxical embolism: venous thrombus bypasses pulmonary circulation via patent foramen ovale, ASD, or pulmonary AVM → systemic arterial embolism.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_hd_008",
    topic: "hemodynamic-disorders",
    year: "FMGE Dec 2021",
    q: "Fat embolism syndrome after long bone fracture is due to:",
    img: null,
    options: ["A. Fat globules from medullary cavity entering ruptured vessels → pulmonary/cerebral/petechial triad", "B. Thromboembolism only", "C. Air embolism from open fracture", "D. Bone marrow cells in circulation"],
    answer: 0,
    explanation: "Fat embolism: 24-72 h post-fracture triad: respiratory distress (ARDS), neurological (confusion, coma), petechiae (axillae, conjunctiva).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_hd_009",
    topic: "hemodynamic-disorders",
    year: "FMGE Jun 2021",
    q: "Virchow's triad predisposes to thrombosis by comprising:",
    img: null,
    options: ["A. Endothelial injury + stasis + hypercoagulability", "B. Infection + inflammation + vascular damage", "C. Platelet activation + fibrinolysis + vessel wall injury", "D. Anaemia + polycythaemia + coagulopathy"],
    answer: 0,
    explanation: "Virchow's triad (1856): (1) endothelial/intimal injury, (2) stasis or turbulence, (3) hypercoagulability — any one or combination promotes thrombosis.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_hd_010",
    topic: "hemodynamic-disorders",
    year: "FMGE Dec 2020",
    q: "Oedema in nephrotic syndrome is caused by:",
    img: null,
    options: ["A. Hypoalbuminaemia → decreased plasma oncotic pressure → fluid transudation", "B. Increased capillary hydrostatic pressure (heart failure mechanism)", "C. Lymphatic obstruction", "D. Increased capillary permeability (inflammation)"],
    answer: 0,
    explanation: "Nephrotic: massive proteinuria → hypoalbuminaemia → reduced oncotic pressure → generalised pitting oedema and ascites.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_amy_006",
    topic: "amyloidosis",
    year: "FMGE Dec 2022",
    q: "Amyloid stains with Congo red and shows ___ under polarised light:",
    img: null,
    options: ["A. Apple-green birefringence", "B. Yellow birefringence", "C. Blue-white fluorescence only", "D. No birefringence"],
    answer: 0,
    explanation: "Congo red stain + apple-green birefringence under polarised light is pathognomonic of amyloid deposits due to its beta-pleated sheet configuration.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_amy_007",
    topic: "amyloidosis",
    year: "FMGE Jun 2022",
    q: "AL amyloid is derived from:",
    img: null,
    options: ["A. Immunoglobulin light chains (lambda > kappa) — associated with plasma cell dyscrasias", "B. Serum amyloid A protein (reactive AA)", "C. Beta-2 microglobulin (dialysis associated)", "D. Transthyretin (familial/senile)"],
    answer: 0,
    explanation: "AL (primary): light chain fragments deposited; associated with multiple myeloma and monoclonal gammopathy; heart, kidneys, peripheral nerves involved.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_amy_008",
    topic: "amyloidosis",
    year: "FMGE Dec 2021",
    q: "AA amyloid (reactive/secondary amyloidosis) is most commonly caused by:",
    img: null,
    options: ["A. Chronic inflammatory conditions (TB, RA, bronchiectasis, Crohn's disease)", "B. Multiple myeloma", "C. Haemodialysis", "D. Familial Mediterranean fever only"],
    answer: 0,
    explanation: "AA: serum amyloid A (acute phase protein) chronically elevated → fibrils deposit; kidneys are most affected → nephrotic syndrome.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_amy_009",
    topic: "amyloidosis",
    year: "FMGE Jun 2021",
    q: "Amyloid in Alzheimer disease is composed of:",
    img: null,
    options: ["A. Beta-amyloid (Aβ) peptide derived from amyloid precursor protein (APP)", "B. Tau protein (neurofibrillary tangles — separate lesion)", "C. Prion protein (CJD)", "D. Alpha-synuclein (Parkinson's)"],
    answer: 0,
    explanation: "Alzheimer's: senile plaques = Aβ42 peptide (from APP cleavage by β/γ-secretases); neurofibrillary tangles = hyperphosphorylated tau — distinct from amyloid.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "path_amy_010",
    topic: "amyloidosis",
    year: "FMGE Dec 2020",
    q: "The organ most commonly involved and most severely affected in systemic amyloidosis is:",
    img: null,
    options: ["A. Kidney (nephrotic syndrome is the most common presentation in AA/AL)", "B. Heart (most common in AL but not most common overall)", "C. Liver (hepatomegaly common)", "D. Spleen (lardaceous/sago spleen)"],
    answer: 0,
    explanation: "Kidneys are involved in almost all systemic amyloidoses; proteinuria and nephrotic syndrome are classic presenting features.",
    tags: ["PYQ", "high-yield"]
  },

];

export default pathology;
