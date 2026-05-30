const obgy = [

  // ============ PRE-ECLAMPSIA ============
  {
    id: "obgy_pe_001",
    topic: "pre-eclampsia",
    year: "FMGE Dec 2019",
    q: "Pre-eclampsia is defined as new onset hypertension (≥140/90) after 20 weeks of gestation along with:",
    img: null,
    options: ["A. Significant proteinuria (≥300 mg/24h) OR end-organ dysfunction", "B. Edema only", "C. Headache and visual changes", "D. Proteinuria ≥5 g/24h"],
    answer: 0,
    explanation: "Pre-eclampsia = BP ≥140/90 mmHg after 20 weeks + significant proteinuria (≥300 mg/24h OR ≥2+ on dipstick) OR end-organ dysfunction (thrombocytopenia, renal insufficiency, liver dysfunction, IUGR, pulmonary edema). Edema alone is not diagnostic.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_pe_002",
    topic: "pre-eclampsia",
    year: "FMGE Jun 2018",
    q: "Drug of choice for seizure prophylaxis and treatment in eclampsia is:",
    img: null,
    options: ["A. IV Phenytoin", "B. IV Magnesium sulfate (MgSO4)", "C. IV Diazepam", "D. Oral labetalol"],
    answer: 1,
    explanation: "IV Magnesium sulfate (Pritchard / Zuspan regimen) is the drug of choice for eclampsia: anticonvulsant effect via NMDA receptor blockade + vasodilation. Antidote for Mg toxicity: IV Calcium gluconate (10 mL of 10% solution). MgSO4 is superior to phenytoin and diazepam for preventing recurrent seizures.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_pe_003",
    topic: "pre-eclampsia",
    year: "FMGE Dec 2018",
    q: "HELLP syndrome in pre-eclampsia stands for:",
    img: null,
    options: ["A. Hemolysis, Elevated Liver enzymes, Low Platelets", "B. Hypertension, Edema, Low Platelets, Proteinuria", "C. Hemorrhage, Elevated LFT, Low Potassium, Proteinuria", "D. Hemolysis, Elevated LDH, Liver failure, Petechiae"],
    answer: 0,
    explanation: "HELLP syndrome = Hemolysis (microangiopathic) + Elevated Liver enzymes (AST, ALT) + Low Platelets (<100,000). Variant of severe pre-eclampsia. Associated with high maternal morbidity: DIC, liver rupture, ARF. Definitive treatment: delivery.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_pe_004",
    topic: "pre-eclampsia",
    year: "FMGE Jun 2019",
    q: "Antihypertensive drug of choice for acute severe hypertension in pregnancy:",
    img: null,
    options: ["A. ACE inhibitors (enalapril)", "B. Labetalol IV or Hydralazine IV or Nifedipine oral", "C. Furosemide IV", "D. Atenolol oral"],
    answer: 1,
    explanation: "For acute severe hypertension in pregnancy (BP ≥160/110): IV labetalol, IV hydralazine, or oral nifedipine are first-line. ACE inhibitors and ARBs are CONTRAINDICATED in pregnancy (teratogenic — fetal renal agenesis). Atenolol causes IUGR.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_pe_005",
    topic: "pre-eclampsia",
    year: "FMGE Dec 2020",
    q: "Definitive treatment of pre-eclampsia/eclampsia is:",
    img: null,
    options: ["A. Antihypertensives long term", "B. Bed rest and low-salt diet", "C. Delivery of the baby and placenta", "D. Magnesium sulfate continuous infusion"],
    answer: 2,
    explanation: "The ONLY definitive cure for pre-eclampsia/eclampsia is delivery. Maternal hypertension and organ dysfunction resolve after delivery. If eclampsia occurs at <34 weeks, stabilize with MgSO4 + antihypertensives and aim for delivery when safe.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_pe_006",
    topic: "pre-eclampsia",
    year: "FMGE Jun 2021",
    q: "Which sign of magnesium sulfate toxicity should be monitored and indicates need to stop infusion?",
    img: null,
    options: ["A. Decreased reflexes (loss of patellar reflex)", "B. Hyperreflexia", "C. Hypertension", "D. Tachycardia"],
    answer: 0,
    explanation: "Magnesium sulfate toxicity sequence: loss of patellar reflex (Mg ~7 mEq/L) → respiratory depression (~10 mEq/L) → cardiac arrest (~15 mEq/L). Monitor: hourly urine output >25 mL/h, respiratory rate >12/min, patellar reflex present. Stop Mg if reflex disappears.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_pe_007",
    topic: "pre-eclampsia",
    year: "FMGE Dec 2017",
    q: "Low-dose aspirin in pre-eclampsia prevention is given from:",
    img: null,
    options: ["A. 36 weeks gestation", "B. 16 weeks gestation (12–16 weeks) in high-risk women", "C. Preconceptionally only", "D. After first episode of hypertension"],
    answer: 1,
    explanation: "Low-dose aspirin (75–150 mg/day) starting at 12–16 weeks gestation reduces pre-eclampsia risk by 24% in high-risk women (previous pre-eclampsia, multifetal gestation, hypertension, diabetes, renal disease). Works by inhibiting COX-1-mediated thromboxane A2.",
    tags: ["PYQ"]
  },
  {
    id: "obgy_pe_008",
    topic: "pre-eclampsia",
    year: "FMGE Jun 2020",
    q: "Pre-eclampsia is thought to be primarily due to:",
    img: null,
    options: ["A. Autoimmune attack on trophoblast", "B. Abnormal placentation with inadequate trophoblastic invasion of spiral arteries → ischemia", "C. Gestational hypertension that worsens", "D. Maternal renal disease"],
    answer: 1,
    explanation: "Pathophysiology of pre-eclampsia: inadequate trophoblastic invasion of spiral arteries → they remain high-resistance vessels → placental ischemia → release of sFlt-1 (anti-VEGF) → systemic endothelial dysfunction → hypertension + proteinuria.",
    tags: ["PYQ"]
  },
  {
    id: "obgy_pe_009",
    topic: "pre-eclampsia",
    year: "FMGE Dec 2019",
    q: "Severe pre-eclampsia criterion includes BP of:",
    img: null,
    options: ["A. ≥140/90 after 20 weeks", "B. ≥160/110 on two occasions 6h apart", "C. ≥130/80 at any gestation", "D. ≥150/100 in first trimester"],
    answer: 1,
    explanation: "Severe pre-eclampsia features: BP ≥160/110, proteinuria ≥5g/24h, oliguria <500mL/24h, thrombocytopenia <100K, pulmonary edema, new onset headache/visual disturbances, epigastric pain (liver involvement), IUGR. Any one criterion → severe.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ ANTEPARTUM HEMORRHAGE (APH) ============
  {
    id: "obgy_aph_001",
    topic: "aph",
    year: "FMGE Dec 2019",
    q: "APH is defined as bleeding from the genital tract after how many weeks of pregnancy?",
    img: null,
    options: ["A. 20 weeks", "B. 28 weeks", "C. 32 weeks", "D. 36 weeks"],
    answer: 1,
    explanation: "APH = bleeding from genital tract after 28 weeks of gestation (period of viability) and before delivery. It includes placenta previa, placental abruption, and 'local causes'. In UK, definition is ≥24 weeks; in India, 28 weeks is used.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_aph_002",
    topic: "aph",
    year: "FMGE Jun 2018",
    q: "Classic presentation of placenta previa is:",
    img: null,
    options: ["A. Painful vaginal bleeding with board-like uterus", "B. Painless bright red vaginal bleeding", "C. Abdominal pain with dark blood and no fetal parts felt", "D. Ruptured membranes followed by bleeding"],
    answer: 1,
    explanation: "Placenta previa: painless, bright red, sudden hemorrhage, often at rest, without pain (placenta in lower segment bleeds as LUS forms). Uterus is soft. Fetal parts may be abnormally presented (transverse/oblique lie). Do NOT do digital PV exam.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_aph_003",
    topic: "aph",
    year: "FMGE Dec 2018",
    q: "Placental abruption presents with:",
    img: null,
    options: ["A. Painless bright red bleeding, soft uterus", "B. Painful bleeding with tense, board-like uterus and fetal distress", "C. Post-coital spotting only", "D. Vaginal discharge with mild cramping"],
    answer: 1,
    explanation: "Placental abruption (abruptio placentae): painful (tearing abdominal pain), concealed dark blood, tense/woody-hard uterus (retroplacental clot), fetal heart abnormalities. Couvelaire uterus = hemorrhage into myometrium causing blue-black uterus (seen at CS).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_aph_004",
    topic: "aph",
    year: "FMGE Jun 2019",
    q: "Kleihauer-Betke test is used to detect:",
    img: null,
    options: ["A. Fetal hemoglobin in maternal circulation (fetomaternal hemorrhage)", "B. Chromosomal abnormality in fetus", "C. Amniotic fluid in maternal blood", "D. Placental tissue type"],
    answer: 0,
    explanation: "Kleihauer-Betke acid elution test detects fetal RBCs in maternal blood (fetal HbF resists acid elution; adult HbA elutes to 'ghost cells'). Used to quantify fetomaternal hemorrhage and calculate additional Rhesus immunoglobulin (RhIg) needed.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_aph_005",
    topic: "aph",
    year: "FMGE Dec 2020",
    q: "Couvelaire uterus (uteroplacental apoplexy) occurs in:",
    img: null,
    options: ["A. Placenta previa", "B. Severe placental abruption", "C. Uterine rupture", "D. Vasa previa"],
    answer: 1,
    explanation: "Couvelaire uterus = blood infiltrates myometrium in severe placental abruption → uterus becomes purple-blue and fails to contract (atonic). Seen at cesarean section. Hysterectomy may be needed if uterus doesn't respond to oxytocics.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_aph_006",
    topic: "aph",
    year: "FMGE Jun 2021",
    q: "Diagnosis of placenta previa is confirmed by:",
    img: null,
    options: ["A. Per-vaginal digital examination", "B. Transabdominal ultrasound (TVS for confirmation)", "C. CT pelvis", "D. MRI only"],
    answer: 1,
    explanation: "Placenta previa is diagnosed by ultrasound (transabdominal then transvaginal — TVS is safe and more accurate). PV examination is CONTRAINDICATED (risk of torrential hemorrhage). TVS is the gold standard for grading placenta previa and assessing placental edge distance from internal os.",
    tags: ["PYQ"]
  },
  {
    id: "obgy_aph_007",
    topic: "aph",
    year: "FMGE Dec 2021",
    q: "Vasa previa — which vessel is at risk?",
    img: null,
    options: ["A. Umbilical vein in Wharton's jelly", "B. Fetal vessels crossing internal os, unprotected by placental tissue or Wharton's jelly", "C. Maternal spiral arteries", "D. Uterine arteries"],
    answer: 1,
    explanation: "Vasa previa = fetal blood vessels (velamentous cord insertion) cross the internal cervical os ahead of the presenting part. Rupture of membranes → fetal vessel rupture → fetal exsanguination (mortality ~60% undiagnosed). Painless bleeding + fetal bradycardia → urgent CS.",
    tags: ["PYQ"]
  },
  {
    id: "obgy_aph_008",
    topic: "aph",
    year: "FMGE Jun 2020",
    q: "Most common cause of APH is:",
    img: null,
    options: ["A. Placenta previa", "B. Placental abruption", "C. Indeterminate/local causes", "D. Vasa previa"],
    answer: 2,
    explanation: "Indeterminate or 'unexplained' APH (no identifiable cause from placenta or local causes) accounts for ~50% of APH. Placental abruption = ~30%, Placenta previa = ~20%, others (vasa previa, local cervical/vaginal causes) = rare.",
    tags: ["PYQ"]
  },

  // ============ PPH ============
  {
    id: "obgy_pph_001",
    topic: "pph",
    year: "FMGE Dec 2019",
    q: "PPH is defined as blood loss of >500 mL after:",
    img: null,
    options: ["A. After any delivery within 24 hours", "B. Vaginal delivery within 24h, or >1000 mL after CS", "C. Only after CS", "D. After delivery + 7 days"],
    answer: 1,
    explanation: "Primary PPH = blood loss >500 mL after vaginal delivery OR >1000 mL after CS within first 24 hours. Severe PPH = >1000 mL. Secondary PPH = abnormal bleeding between 24 hours and 12 weeks postpartum.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_pph_002",
    topic: "pph",
    year: "FMGE Jun 2018",
    q: "Most common cause of PPH is:",
    img: null,
    options: ["A. Uterine atony (4 Ts)", "B. Retained placenta", "C. Genital tract trauma", "D. Coagulopathy"],
    answer: 0,
    explanation: "Uterine atony (failure to contract) accounts for 70–80% of PPH. The 4 Ts: Tone (atony, 70%), Tissue (retained placenta, 20%), Trauma (lacerations, 10%), Thrombin (coagulopathy, 1%). 'Tone' = most common = first thing to treat.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_pph_003",
    topic: "pph",
    year: "FMGE Dec 2018",
    q: "First-line uterotonic for PPH prevention and treatment is:",
    img: null,
    options: ["A. Oxytocin", "B. Ergometrine (ergot)", "C. Misoprostol", "D. Carboprost (PGF2α)"],
    answer: 0,
    explanation: "Oxytocin (10 IU IM or 20 IU in 500 mL IV infusion) is first-line for PPH prevention (AMTSL) and treatment. Ergometrine: contraindicated in hypertension. Misoprostol: used where oxytocin unavailable (oral/sublingual). Carboprost: contraindicated in asthma.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_pph_004",
    topic: "pph",
    year: "FMGE Jun 2019",
    q: "B-Lynch suture for PPH acts by:",
    img: null,
    options: ["A. Ligating uterine arteries", "B. Compression suture (brace suture) — squeezes uterus and reduces blood flow", "C. Closing the uterine incision after CS", "D. Tamponading the uterine cavity"],
    answer: 1,
    explanation: "B-Lynch suture = uterine compression (brace) suture used for uterine atony when oxytocics fail. Continuous suture 'braces' the uterus from outside, providing sustained compression. Alternative to hysterectomy. Bakri balloon provides internal uterine tamponade.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_pph_005",
    topic: "pph",
    year: "FMGE Dec 2020",
    q: "AMTSL (Active Management of Third Stage of Labour) components include all EXCEPT:",
    img: null,
    options: ["A. Oxytocin 10 IU IM within 1 min of birth", "B. Controlled cord traction (Brandt-Andrews)", "C. Immediate cord clamping", "D. Uterine massage after placenta delivery"],
    answer: 2,
    explanation: "AMTSL = (1) Oxytocin 10 IU IM within 1 min of delivery + (2) Controlled cord traction (after signs of separation) + (3) Uterine massage after placenta delivery. Delayed cord clamping (1–3 min) is now recommended — so immediate clamping is NOT part of AMTSL.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_pph_006",
    topic: "pph",
    year: "FMGE Jun 2021",
    q: "Most common cause of secondary PPH (24h–12 weeks postpartum) is:",
    img: null,
    options: ["A. Uterine atony", "B. Retained placental tissue / products of conception", "C. Coagulopathy", "D. Subinvolution of placental site"],
    answer: 1,
    explanation: "Secondary PPH: most common cause = retained products of conception (RPOC) causing endometritis and failure of uterine involution. Also: subinvolution of placental site (no retained tissue, vascular changes persist). Treatment: evacuation + antibiotics.",
    tags: ["PYQ"]
  },
  {
    id: "obgy_pph_007",
    topic: "pph",
    year: "FMGE Dec 2021",
    q: "Tranexamic acid in PPH acts by:",
    img: null,
    options: ["A. Oxytocic action on myometrium", "B. Antifibrinolytic — inhibits plasminogen activators", "C. Prostaglandin synthesis inhibition", "D. Platelet aggregation stimulation"],
    answer: 1,
    explanation: "Tranexamic acid inhibits fibrinolysis by blocking lysine-binding sites on plasminogen → prevents clot breakdown. WHO recommends tranexamic acid (1 g IV) within 3 hours of PPH onset in addition to uterotonics. Reduces PPH mortality by ~30% (WOMAN trial).",
    tags: ["PYQ", "high-yield"]
  },

  // ============ PCOS ============
  {
    id: "obgy_pcos_001",
    topic: "pcos",
    year: "FMGE Dec 2019",
    q: "Rotterdam criteria for PCOS diagnosis requires how many of the following: oligo/anovulation, hyperandrogenism, polycystic ovaries on USG?",
    img: null,
    options: ["A. All 3 must be present", "B. Any 2 of 3 criteria (after excluding other causes)", "C. Any 1 of 3", "D. Only USG criteria is sufficient"],
    answer: 1,
    explanation: "Rotterdam 2003 criteria: PCOS = ≥2 of 3: (1) Oligo/anovulation, (2) Clinical or biochemical hyperandrogenism, (3) Polycystic ovaries on USG (≥12 follicles 2–9mm OR ovarian volume >10 mL). Exclusions: CAH, hyperprolactinemia, thyroid disease.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_pcos_002",
    topic: "pcos",
    year: "FMGE Jun 2018",
    q: "LH:FSH ratio in PCOS is typically:",
    img: null,
    options: ["A. 1:1 (normal)", "B. >2:1 or >3:1", "C. <1:1 (FSH dominant)", "D. Variable, not useful"],
    answer: 1,
    explanation: "PCOS typically shows elevated LH with normal or low FSH → LH:FSH ratio >2:1 (or >3:1 in classic cases). Elevated LH drives androgen production; low FSH impairs follicular maturation → anovulation.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_pcos_003",
    topic: "pcos",
    year: "FMGE Dec 2018",
    q: "First-line treatment for infertility in PCOS is:",
    img: null,
    options: ["A. GnRH agonists", "B. Clomiphene citrate", "C. Metformin alone", "D. IVF immediately"],
    answer: 1,
    explanation: "Clomiphene citrate (selective estrogen receptor modulator — SERM) is first-line for ovulation induction in PCOS. It blocks estrogen feedback → increases FSH → follicular development. Letrozole (aromatase inhibitor) is superior in metformin-resistant cases.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_pcos_004",
    topic: "pcos",
    year: "FMGE Jun 2019",
    q: "USG finding of polycystic ovary (PCO) on Rotterdam criteria:",
    img: null,
    options: ["A. ≥12 follicles measuring 2–9 mm per ovary OR ovarian volume >10 mL", "B. Single dominant follicle >20 mm", "C. Multiple follicles >25 mm with thickened capsule", "D. Ovarian volume >5 mL with one cyst >3 cm"],
    answer: 0,
    explanation: "Rotterdam USG criterion for PCO: ≥12 follicles measuring 2–9 mm in diameter in one ovary OR ovarian volume >10 mL (length × width × height × 0.523), in absence of a dominant follicle, corpus luteum, or cyst. 'String of pearls' sign.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_pcos_005",
    topic: "pcos",
    year: "FMGE Dec 2020",
    q: "Insulin sensitizer used in PCOS to improve menstrual regularity and reduce androgen levels:",
    img: null,
    options: ["A. Metformin", "B. Rosiglitazone", "C. Pioglitazone", "D. All of the above"],
    answer: 0,
    explanation: "Metformin (biguanide) reduces insulin resistance in PCOS → lowers LH and androgen levels, improves menstrual cyclicity, promotes ovulation. First-line for metabolic features. Combined with clomiphene for ovulation induction in insulin-resistant patients.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_pcos_006",
    topic: "pcos",
    year: "FMGE Jun 2021",
    q: "Long-term risk associated with untreated anovulation in PCOS:",
    img: null,
    options: ["A. Cervical cancer", "B. Endometrial cancer (unopposed estrogen)", "C. Ovarian cancer", "D. Fallopian tube cancer"],
    answer: 1,
    explanation: "Chronic anovulation → unopposed estrogen stimulation of endometrium (no progesterone from corpus luteum) → endometrial hyperplasia → endometrial carcinoma. Cyclical progestogen (or OCP) protects the endometrium. PCOS patients need regular endometrial monitoring.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_pcos_007",
    topic: "pcos",
    year: "FMGE Dec 2016",
    q: "Ovarian drilling (laparoscopic) in PCOS is indicated when:",
    img: null,
    options: ["A. PCOS with severe obesity", "B. Clomiphene-resistant anovulation with normal tubes", "C. Patient is unwilling for medical therapy", "D. Primary diagnosis of PCOS"],
    answer: 1,
    explanation: "Laparoscopic ovarian drilling (LOD) = 4–10 diathermy points per ovary → destroys androgen-producing theca cells, reduces LH/androgen levels. Indicated for clomiphene-resistant PCOS with normal BMI and patent tubes. Avoids OHSS risk of gonadotropin therapy.",
    tags: ["PYQ"]
  },

  // ============ CARCINOMA CERVIX ============
  {
    id: "obgy_cx_001",
    topic: "ca-cervix",
    year: "FMGE Dec 2019",
    q: "Most common causative agent for carcinoma cervix is:",
    img: null,
    options: ["A. HPV 16 and 18 (high-risk strains)", "B. HPV 6 and 11 (low-risk strains)", "C. Herpes simplex virus type 2", "D. Chlamydia trachomatis"],
    answer: 0,
    explanation: "HPV 16 and 18 are responsible for ~70% of cervical cancers. HPV 16 → mainly squamous cell carcinoma; HPV 18 → mainly adenocarcinoma. HPV 6 and 11 → condylomata acuminata (genital warts) — NOT cancer. HPV vaccines (Gardasil, Cervarix) protect against 16, 18.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_cx_002",
    topic: "ca-cervix",
    year: "FMGE Jun 2018",
    q: "Most common histological type of cervical cancer:",
    img: null,
    options: ["A. Squamous cell carcinoma (~70–80%)", "B. Adenocarcinoma", "C. Adenosquamous carcinoma", "D. Clear cell carcinoma"],
    answer: 0,
    explanation: "Squamous cell carcinoma accounts for ~70–80% of cervical cancers. Adenocarcinoma = 15–20% (rising incidence). Arises at squamocolumnar junction (transformation zone) — the most vulnerable area. Regular Pap smear screens this zone.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_cx_003",
    topic: "ca-cervix",
    year: "FMGE Dec 2018",
    q: "Koilocytes (on Pap smear or biopsy) indicate:",
    img: null,
    options: ["A. Endometrial cells in cervical smear", "B. HPV infection (koilocytic atypia)", "C. Invasive cervical cancer", "D. Herpes simplex infection"],
    answer: 1,
    explanation: "Koilocytes = HPV-infected squamous cells with perinuclear cytoplasmic clearing (halo) and irregular, enlarged hyperchromatic nucleus. Pathognomonic of HPV cytopathic effect. Seen in CIN and condylomata. Indicates productive HPV infection.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_cx_004",
    topic: "ca-cervix",
    year: "FMGE Jun 2019",
    q: "Pap smear screens for changes in the:",
    img: null,
    options: ["A. Endometrium", "B. Transformation zone of cervix", "C. Vaginal walls", "D. Entire genital tract"],
    answer: 1,
    explanation: "Pap smear samples the squamocolumnar junction (transformation zone / TZ) of the cervix — the site where most CIN and cancers develop. The TZ moves endocervically with age and estrogen withdrawal. Adequate smear must include cells from TZ.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_cx_005",
    topic: "ca-cervix",
    year: "FMGE Dec 2020",
    q: "Staging of cervical cancer is based on:",
    img: null,
    options: ["A. Clinical examination + imaging (updated FIGO 2018 allows imaging/pathology)", "B. Surgical pathology only", "C. CT staging only", "D. Laparoscopy staging"],
    answer: 0,
    explanation: "FIGO staging of cervical cancer is primarily clinical. FIGO 2018 update allows imaging (CT/MRI/PET-CT) and pathological findings to inform staging. Stage IB1 = <2 cm confined to cervix. Stage IVA = bladder/rectal involvement. Stage IVB = distant metastasis.",
    tags: ["PYQ"]
  },
  {
    id: "obgy_cx_006",
    topic: "ca-cervix",
    year: "FMGE Jun 2021",
    q: "Wertheim's hysterectomy for cervical cancer involves:",
    img: null,
    options: ["A. Simple total hysterectomy + bilateral salpingo-oophorectomy", "B. Radical hysterectomy with parametria, upper vaginal cuff, and bilateral pelvic lymph node dissection", "C. Subtotal hysterectomy preserving cervix", "D. Trachelectomy (cervix-sparing)"],
    answer: 1,
    explanation: "Wertheim's radical hysterectomy = uterus + cervix + upper 2 cm vagina + parametria + bilateral pelvic lymph node dissection. Indicated for Stage IB–IIA cervical cancer in young operable patients. Preserves ovarian function in young patients (ovaries retained).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_cx_007",
    topic: "ca-cervix",
    year: "FMGE Dec 2021",
    q: "Recommended cervical screening interval for a 30-year-old woman with previous normal Pap smear:",
    img: null,
    options: ["A. Every 6 months", "B. Every year", "C. Every 3 years (cytology alone) or 5 years (cytology + HPV co-testing)", "D. Only if symptomatic"],
    answer: 2,
    explanation: "ACOG/WHO recommendations: Women 21–65 years → Pap every 3 years OR Pap + HPV co-test every 5 years (preferred ≥30 years). Annual screening is not recommended for average-risk women with prior normal results (reduces overdiagnosis/overtreatment).",
    tags: ["PYQ"]
  },
  {
    id: "obgy_cx_008",
    topic: "ca-cervix",
    year: "FMGE Jun 2020",
    q: "HPV vaccine is most effective when given:",
    img: null,
    options: ["A. After first sexual intercourse", "B. Before first sexual intercourse (9–14 years)", "C. At any age regardless of prior HPV exposure", "D. Only after abnormal Pap smear"],
    answer: 1,
    explanation: "HPV vaccines (Cervarix, Gardasil) are most effective before first sexual exposure (before HPV acquisition). Recommended: 9–14 years (2-dose schedule). Can be given up to 26 years (3-dose). Vaccines do NOT treat existing HPV infection — preventive only.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ FIBROIDS (LEIOMYOMA) ============
  {
    id: "obgy_fib_001",
    topic: "fibroids",
    year: "FMGE Dec 2019",
    q: "Most common benign uterine tumor is:",
    img: null,
    options: ["A. Fibroid (leiomyoma)", "B. Endometrial polyp", "C. Adenomyoma", "D. Uterine sarcoma"],
    answer: 0,
    explanation: "Uterine leiomyoma (fibroid) is the most common benign tumor of the female reproductive tract. Smooth muscle tumor, estrogen-dependent, regresses post-menopause. Prevalence 25–50% of women >30 years. Most are asymptomatic.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_fib_002",
    topic: "fibroids",
    year: "FMGE Jun 2018",
    q: "Most common type of uterine fibroid (by location) is:",
    img: null,
    options: ["A. Submucosal", "B. Intramural (within myometrium)", "C. Subserosal", "D. Cervical"],
    answer: 1,
    explanation: "Intramural fibroids (within myometrium) are the most common (70%). Submucosal (5–10%) cause the most menorrhagia (extend into cavity). Subserosal = least symptomatic regarding bleeding. Submucosal fibroids cause infertility most.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_fib_003",
    topic: "fibroids",
    year: "FMGE Dec 2018",
    q: "Red degeneration of fibroid is specifically associated with:",
    img: null,
    options: ["A. Postmenopausal state", "B. Pregnancy (rapid growth causes infarction)", "C. Malignant change", "D. OCP use"],
    answer: 1,
    explanation: "Red degeneration (carneous degeneration) = acute infarction with hemolysis of blood pigment, causing red/hemorrhagic appearance. Occurs specifically during pregnancy (rapid growth + thrombosis of peripheral vessels). Presents with acute localized pain, fever, tenderness over fibroid.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_fib_004",
    topic: "fibroids",
    year: "FMGE Jun 2019",
    q: "Medical treatment to reduce fibroid size before myomectomy:",
    img: null,
    options: ["A. Combined oral contraceptive pill", "B. GnRH agonists (leuprolide, goserelin) for 3–6 months preoperatively", "C. Progestogen (norethisterone)", "D. Danazol"],
    answer: 1,
    explanation: "GnRH agonists create a hypoestrogenic state → fibroid shrinkage by 30–50% over 3–6 months. Used preoperatively to reduce size/vascularity of fibroids before myomectomy. Also corrects anemia. Cannot be used long-term (bone loss, menopause symptoms).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_fib_005",
    topic: "fibroids",
    year: "FMGE Dec 2020",
    q: "Fibroid uterus with regular surface (vs. irregular surface in cancer) is described as:",
    img: null,
    options: ["A. Firm, mobile, irregular multi-nodular enlargement", "B. Soft, fixed, boggy uterus", "C. Uniformly enlarged uterus", "D. Small, atrophic uterus"],
    answer: 0,
    explanation: "Fibroid uterus on examination: irregularly enlarged, firm (fibrous), mobile (unless very large), non-tender, nodular/lobulated surface. Each node is a fibroid. Uniformly enlarged softer uterus suggests adenomyosis ('bulky, globular, tender' uterus).",
    tags: ["PYQ"]
  },
  {
    id: "obgy_fib_006",
    topic: "fibroids",
    year: "FMGE Jun 2021",
    q: "Most common symptom of uterine fibroid is:",
    img: null,
    options: ["A. Menorrhagia (heavy menstrual bleeding)", "B. Acute pelvic pain", "C. Dyspareunia", "D. Urinary incontinence"],
    answer: 0,
    explanation: "Menorrhagia (heavy menstrual bleeding) is the most common symptom — caused by enlarged uterine cavity, impaired contractility, congested endometrium. Other symptoms: bulk symptoms (urinary frequency, constipation), pelvic pressure, subfertility.",
    tags: ["PYQ"]
  },

  // ============ ENDOMETRIOSIS ============
  {
    id: "obgy_endo_001",
    topic: "endometriosis",
    year: "FMGE Dec 2019",
    q: "Most common site of endometriosis is:",
    img: null,
    options: ["A. Ovaries (chocolate cyst/endometrioma)", "B. Uterosacral ligaments", "C. Pouch of Douglas", "D. Bladder"],
    answer: 0,
    explanation: "Ovaries are the most common site of endometriosis (75% of cases), where endometrial implants form 'chocolate cysts' (endometriomas) — filled with dark brown, inspissated blood ('chocolate' colored). Most common theory: Sampson's retrograde menstruation.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_endo_002",
    topic: "endometriosis",
    year: "FMGE Jun 2018",
    q: "Gold standard for diagnosis of endometriosis is:",
    img: null,
    options: ["A. CA-125 level", "B. MRI pelvis", "C. Diagnostic laparoscopy with histological confirmation", "D. Transvaginal ultrasound"],
    answer: 2,
    explanation: "Diagnostic laparoscopy with biopsy and histology is the gold standard for endometriosis diagnosis. Visual inspection may show blue-black powder-burn lesions, puckering, chocolate cysts. CA-125 can be elevated but is non-specific.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_endo_003",
    topic: "endometriosis",
    year: "FMGE Dec 2018",
    q: "Classic triad of endometriosis is:",
    img: null,
    options: ["A. Menorrhagia + dyspareunia + infertility", "B. Dysmenorrhea (progressive) + dyspareunia + infertility", "C. Amenorrhea + abdominal pain + mass", "D. Intermenstrual bleeding + pelvic pain + discharge"],
    answer: 1,
    explanation: "Classic triad: (1) Progressive/secondary dysmenorrhea (pain worsens over years), (2) Deep dyspareunia, (3) Subfertility/infertility. 'Secondary dysmenorrhea worsening over years' is a hallmark. Pain from endometriosis is characteristically cyclical and correlates with menstruation.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_endo_004",
    topic: "endometriosis",
    year: "FMGE Jun 2019",
    q: "Medical treatment for endometriosis includes all EXCEPT:",
    img: null,
    options: ["A. GnRH agonists (create hypoestrogenic state)", "B. Danazol (androgenic)", "C. Combined OCP", "D. Clomiphene citrate"],
    answer: 3,
    explanation: "Clomiphene citrate is used for ovulation INDUCTION — it would WORSEN endometriosis (more estrogen → more implant growth). Medical treatment: GnRH agonists (leuprolide), progestogens, danazol, aromatase inhibitors, combined OCP. All suppress estrogen or reduce endometrial tissue.",
    tags: ["PYQ"]
  },
  {
    id: "obgy_endo_005",
    topic: "endometriosis",
    year: "FMGE Dec 2020",
    q: "Adenomyosis differs from endometriosis in that:",
    img: null,
    options: ["A. Adenomyosis = endometrial glands and stroma within the myometrium (same organ)", "B. Adenomyosis affects the ovaries exclusively", "C. Adenomyosis responds to GnRH agonists permanently", "D. Adenomyosis does not cause dysmenorrhea"],
    answer: 0,
    explanation: "Adenomyosis = endometrial glands/stroma embedded within myometrium (uterine muscle) — same organ. Endometriosis = endometrial tissue OUTSIDE uterus. Adenomyosis: uniformly enlarged, globular, tender 'bog-standard' uterus; menorrhagia + dysmenorrhea; no infertility usually.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ ECTOPIC PREGNANCY ============
  {
    id: "obgy_ect_001",
    topic: "ectopic-pregnancy",
    year: "FMGE Dec 2019",
    q: "Most common site of ectopic pregnancy is:",
    img: null,
    options: ["A. Isthmus of fallopian tube", "B. Ampulla of fallopian tube (~75%)", "C. Ovary", "D. Cornual (interstitial) site"],
    answer: 1,
    explanation: "Ampulla of fallopian tube = most common site of ectopic pregnancy (~75%). Isthmus ectopic (~12%) — ruptures earlier due to narrow lumen. Cornual/interstitial (~2%) — ruptures latest (at 12–14 weeks) with catastrophic hemorrhage.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_ect_002",
    topic: "ectopic-pregnancy",
    year: "FMGE Jun 2018",
    q: "Most important risk factor for ectopic pregnancy is:",
    img: null,
    options: ["A. Prior cesarean section", "B. Prior pelvic inflammatory disease (PID)/salpingitis", "C. Oral contraceptive use", "D. Endometriosis"],
    answer: 1,
    explanation: "Prior PID/salpingitis (tubal damage from gonorrhoea/chlamydia) is the most important risk factor for ectopic pregnancy (~50% of cases). PID → tubal scarring, cilia damage → delayed ovum transport → implantation in tube.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_ect_003",
    topic: "ectopic-pregnancy",
    year: "FMGE Dec 2018",
    q: "Medical management of ectopic pregnancy with methotrexate is indicated when:",
    img: null,
    options: ["A. Ectopic size >5 cm", "B. Ectopic <3.5 cm, β-hCG <5000 IU/L, hemodynamically stable, no fetal heartbeat", "C. Any ectopic regardless of size", "D. After rupture to prevent secondary bleeding"],
    answer: 1,
    explanation: "Methotrexate (folic acid antagonist — prevents trophoblast proliferation) criteria: Unruptured ectopic <3.5 cm + β-hCG <5000 IU/L + hemodynamically stable + no FHB. Single or double dose IM. Follow β-hCG until <5 IU/L. Contraindication: renal/liver disease.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_ect_004",
    topic: "ectopic-pregnancy",
    year: "FMGE Jun 2019",
    q: "Cullen's sign (periumbilical bruising) in ectopic pregnancy indicates:",
    img: null,
    options: ["A. Developing ectopic", "B. Hemoperitoneum (ruptured ectopic with intraperitoneal bleeding)", "C. Appendicitis", "D. Pelvic peritonitis"],
    answer: 1,
    explanation: "Cullen's sign = periumbilical ecchymosis from hemoperitoneum — blood dissects along the falciform ligament to umbilicus. In ectopic pregnancy, indicates ruptured ectopic with significant intraperitoneal hemorrhage. Also seen in hemorrhagic pancreatitis.",
    tags: ["PYQ"]
  },
  {
    id: "obgy_ect_005",
    topic: "ectopic-pregnancy",
    year: "FMGE Dec 2020",
    q: "Transvaginal ultrasound can detect intrauterine pregnancy (IUP) when β-hCG is:",
    img: null,
    options: ["A. >100 IU/L", "B. >1500–2000 IU/L (discriminatory zone)", "C. >5000 IU/L only", "D. Any level"],
    answer: 1,
    explanation: "β-hCG discriminatory zone = 1500–2000 IU/L for TVS. At this level, IUP should be visible on TVS. If no IUP seen and β-hCG >discriminatory zone → ectopic pregnancy strongly suspected. Serial β-hCG doubling every 48h in normal IUP; slower rise in ectopic.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ CONTRACEPTION ============
  {
    id: "obgy_con_001",
    topic: "contraception",
    year: "FMGE Dec 2019",
    q: "Most effective reversible contraceptive method is:",
    img: null,
    options: ["A. Condom", "B. Combined oral contraceptive pill", "C. Copper IUD (IUCD)", "D. Depot medroxyprogesterone acetate (DMPA)"],
    answer: 2,
    explanation: "Copper IUD is one of the most effective reversible contraceptive methods (failure rate <1%), comparable to tubal ligation. Works by copper ion toxicity to sperm, hostile uterine environment, prevents fertilization. Also effective as emergency contraception within 5 days.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_con_002",
    topic: "contraception",
    year: "FMGE Jun 2018",
    q: "Combined oral contraceptive pill (COCP) mechanism of action:",
    img: null,
    options: ["A. Inhibits ovulation (primary mechanism) + thickens cervical mucus + thins endometrium", "B. Prevents implantation only", "C. Blocks sperm motility", "D. Prevents fertilization only"],
    answer: 0,
    explanation: "COCP: (1) Primary — inhibits GnRH → no LH surge → inhibits ovulation; (2) Thickens cervical mucus → impairs sperm penetration; (3) Thins endometrium → hostile to implantation. Pearl index ~0.3 (perfect use).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_con_003",
    topic: "contraception",
    year: "FMGE Dec 2018",
    q: "Emergency contraception with levonorgestrel (Plan B) is effective within:",
    img: null,
    options: ["A. 24 hours only", "B. 72 hours (most effective), can be used up to 120 hours", "C. 7 days", "D. 48 hours only"],
    answer: 1,
    explanation: "Levonorgestrel EC (1.5 mg single dose or 0.75 mg × 2): most effective within 72 hours (85% efficacy), can be used up to 120h (5 days). Works mainly by inhibiting/delaying ovulation. Ulipristal acetate (ella) is effective for 5 days. Copper IUD most effective EC (<1% failure).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_con_004",
    topic: "contraception",
    year: "FMGE Jun 2019",
    q: "COCP is CONTRAINDICATED in:",
    img: null,
    options: ["A. Dysmenorrhea", "B. Migraine with aura, history of DVT/stroke, ≥35 years + smoker", "C. Endometriosis", "D. Irregular cycles"],
    answer: 1,
    explanation: "Absolute contraindications to COCP (WHO MEC 4): migraine with aura, history of DVT/PE/stroke, hypertension ≥160/100, coronary artery disease, >35 years + heavy smoker, active hepatitis/liver tumor, pregnancy. Estrogen promotes thrombosis.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_con_005",
    topic: "contraception",
    year: "FMGE Dec 2020",
    q: "Depot medroxyprogesterone acetate (DMPA/Depo-Provera) injection is given every:",
    img: null,
    options: ["A. Monthly (4 weeks)", "B. Every 2 months", "C. Every 3 months (12 weeks)", "D. Every 6 months"],
    answer: 2,
    explanation: "DMPA (150 mg IM) is given every 3 months (13 weeks). It is a progestogen-only injectable contraceptive with ~99.7% efficacy. Works by inhibiting ovulation + thickening cervical mucus. Fertility may take 6–12 months to return after stopping.",
    tags: ["PYQ"]
  },
  {
    id: "obgy_con_006",
    topic: "contraception",
    year: "FMGE Jun 2021",
    q: "Lactational amenorrhea method (LAM) requires all THREE conditions:",
    img: null,
    options: ["A. Amenorrhea + exclusive breastfeeding + baby <6 months", "B. Amenorrhea + breastfeeding + baby <12 months", "C. Any breastfeeding + baby <6 months", "D. Amenorrhea + baby <6 months (breastfeeding optional)"],
    answer: 0,
    explanation: "LAM (98% effective if all 3 conditions met): (1) Amenorrhea (no menstruation since delivery), (2) Full/exclusive breastfeeding (≥6 feeds/day, no supplements), (3) Baby <6 months. Any condition broken → use another contraceptive method.",
    tags: ["PYQ"]
  },
  {
    id: "obgy_con_007",
    topic: "contraception",
    year: "FMGE Dec 2021",
    q: "Copper IUD prevents pregnancy primarily by:",
    img: null,
    options: ["A. Preventing ovulation", "B. Copper ions being spermicidal + hostile uterine environment preventing fertilization", "C. Hormonal suppression of endometrium", "D. Physical barrier to sperm"],
    answer: 1,
    explanation: "Copper IUD: copper ions are toxic to sperm (impair motility and capacitation), create inflammatory reaction in uterus (hostile to fertilization). Does NOT prevent ovulation. Does NOT primarily work as post-fertilization agent (controversial). Duration: 5–10 years depending on type.",
    tags: ["PYQ"]
  },
  {
    id: "obgy_con_008",
    topic: "contraception",
    year: "FMGE Jun 2020",
    q: "Tubal ligation (female sterilization) most commonly uses:",
    img: null,
    options: ["A. Pomeroy's technique (modified — popular in India)", "B. Hulka clips only", "C. Open laparotomy exclusively", "D. Chemical sclerosants"],
    answer: 0,
    explanation: "Modified Pomeroy technique is the most common method: a loop of tube ligated with chromic catgut and the knuckle excised. When suture absorbs, tube ends separate → permanent sterilization. Done postpartum (mini-lap) or interval (laparoscopy with Falope ring or clip).",
    tags: ["PYQ"]
  },

  // ============ GESTATIONAL TROPHOBLASTIC DISEASE (GTD) ============
  {
    id: "obgy_gtd_001",
    topic: "gtd",
    year: "FMGE Dec 2019",
    q: "Snowstorm pattern on ultrasound in first trimester is characteristic of:",
    img: null,
    options: ["A. Multiple gestation", "B. Hydatidiform mole", "C. Fibroid uterus", "D. Ovarian hyperstimulation"],
    answer: 1,
    explanation: "Hydatidiform mole: USG shows 'snowstorm' appearance — intrauterine echogenic mass with multiple small cystic spaces (hydropic villi) replacing normal placenta. No fetal parts in complete mole. Theca lutein cysts in ovaries from very high β-hCG.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_gtd_002",
    topic: "gtd",
    year: "FMGE Jun 2018",
    q: "Complete hydatidiform mole karyotype is:",
    img: null,
    options: ["A. 46,XX (diploid, entirely paternal origin)", "B. 69,XXX (triploid, partial mole)", "C. 45,XO", "D. 47,XXY"],
    answer: 0,
    explanation: "Complete mole: 46,XX (diploid), entirely paternal origin (androgenesis — empty egg fertilized by one sperm that duplicates, or two sperm). No fetal tissue. Partial mole: triploid (69,XXX/XXY) — two paternal + one maternal set. Fetal/embryonic tissue present.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_gtd_003",
    topic: "gtd",
    year: "FMGE Dec 2018",
    q: "Most common site of metastasis from gestational trophoblastic neoplasia (GTN) is:",
    img: null,
    options: ["A. Bone", "B. Lungs", "C. Brain", "D. Liver"],
    answer: 1,
    explanation: "Lung is the most common site of GTN metastasis (~80%). 'Cannonball' metastases on CXR. Brain (2nd most common) and liver metastases indicate poor prognosis. GTN is highly chemosensitive — even metastatic disease is curable with methotrexate/actinomycin-D.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_gtd_004",
    topic: "gtd",
    year: "FMGE Jun 2019",
    q: "Marker to monitor hydatidiform mole after evacuation is:",
    img: null,
    options: ["A. CA-125", "B. β-hCG (serial monitoring until negative)", "C. AFP", "D. LDH"],
    answer: 1,
    explanation: "β-hCG is the tumor marker for GTD — produced by trophoblastic tissue. After mole evacuation: weekly β-hCG until 3 consecutive normals, then monthly for 6–12 months. Rising/plateauing β-hCG → persistent GTD/malignant GTN → chemotherapy (methotrexate).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_gtd_005",
    topic: "gtd",
    year: "FMGE Dec 2020",
    q: "Treatment of hydatidiform mole is:",
    img: null,
    options: ["A. Expectant management", "B. Suction evacuation (suction curettage) + β-hCG follow-up", "C. Hysterectomy in all cases", "D. Methotrexate chemotherapy immediately"],
    answer: 1,
    explanation: "Suction curettage (suction evacuation) is the treatment of choice for hydatidiform mole, followed by serial β-hCG monitoring. Hysterectomy is an option in women who have completed family or with heavy bleeding. Methotrexate only if persistent GTD or malignant transformation.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ NORMAL LABOUR ============
  {
    id: "obgy_lab_001",
    topic: "normal-labor",
    year: "FMGE Dec 2019",
    q: "Normal duration of active phase of first stage of labour in primigravida:",
    img: null,
    options: ["A. 0–4 cm dilation (latent phase)", "B. 4–10 cm dilation, average rate ≥1 cm/hour (active phase)", "C. Full dilation to delivery (second stage)", "D. Delivery to placenta delivery (third stage)"],
    answer: 1,
    explanation: "Stages of labour: First stage = uterine contractions → complete cervical dilation (0–10 cm). Latent phase = 0–4 cm; active phase = 4–10 cm (Friedman: rate ≥1.2 cm/h in primigravida, ≥1.5 cm/h in multigravida). Second stage = full dilation → delivery of fetus.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_lab_002",
    topic: "normal-labor",
    year: "FMGE Jun 2018",
    q: "Most common presentation of fetus at term is:",
    img: null,
    options: ["A. Left occiput anterior (LOA)", "B. Right occiput anterior (ROA)", "C. Vertex, occiput anterior (OA) generally", "D. Face presentation"],
    answer: 0,
    explanation: "LOA (left occiput anterior) is the most common fetal position at term. The fetus presents by vertex (occiput), and the occiput is most commonly to the left (mother's left) and anterior. The cardinal movements of labour include flexion, internal rotation to OA, extension, external rotation.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_lab_003",
    topic: "normal-labor",
    year: "FMGE Dec 2018",
    q: "Bishop score ≥8 indicates:",
    img: null,
    options: ["A. Unfavorable cervix — induction unlikely to succeed", "B. Favorable cervix — induction of labour likely to succeed (no cervical ripening needed)", "C. Cervix is in active labour", "D. Cervical incompetence"],
    answer: 1,
    explanation: "Bishop score assesses cervical favorability: Dilation + Effacement + Station + Consistency + Position. Score ≥8 = favorable cervix, induction likely successful. Score <6 = unfavorable, cervical ripening (misoprostol/dinoprostone) indicated first. Max score = 13.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_lab_004",
    topic: "normal-labor",
    year: "FMGE Jun 2019",
    q: "Cardinal movements of labour in vertex presentation are (in order):",
    img: null,
    options: ["A. Engagement → Descent → Flexion → Internal rotation → Extension → External rotation → Expulsion", "B. Flexion → Engagement → Descent → Extension → Rotation → Expulsion", "C. Descent → Internal rotation → Flexion → Extension → External rotation", "D. Engagement → Flexion → Descent → Extension → Rotation"],
    answer: 0,
    explanation: "Cardinal movements: (1) Engagement, (2) Descent, (3) Flexion, (4) Internal rotation (to OA), (5) Extension (under pubic symphysis), (6) External rotation (restitution), (7) Expulsion (anterior then posterior shoulder). All occur as head adapts to pelvic planes.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ CA ENDOMETRIUM ============
  {
    id: "obgy_em_001",
    topic: "ca-endometrium",
    year: "FMGE Dec 2019",
    q: "Most common gynecological malignancy in developed countries:",
    img: null,
    options: ["A. Cervical cancer", "B. Ovarian cancer", "C. Endometrial cancer", "D. Vulvar cancer"],
    answer: 2,
    explanation: "Endometrial carcinoma is the most common gynecological malignancy in developed countries (USA, UK). In developing countries (India), cervical cancer is more common. Risk factors: obesity, unopposed estrogen, nulliparity, diabetes, PCOS, tamoxifen use.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_em_002",
    topic: "ca-endometrium",
    year: "FMGE Jun 2018",
    q: "Classic symptom of endometrial carcinoma is:",
    img: null,
    options: ["A. Heavy menstrual bleeding in premenopausal women", "B. Postmenopausal bleeding (PMB) — must be investigated", "C. Dysmenorrhea", "D. Discharge without bleeding"],
    answer: 1,
    explanation: "Postmenopausal bleeding (PMB) is the classic presenting symptom — investigate ALL cases of PMB (any cause including endometrial cancer, atrophy, polyp). Endometrial carcinoma accounts for ~10–15% of PMB. Investigation: TVS (endometrial thickness >4 mm) → endometrial biopsy.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_em_003",
    topic: "ca-endometrium",
    year: "FMGE Dec 2018",
    q: "Most common histological type of endometrial carcinoma:",
    img: null,
    options: ["A. Serous papillary carcinoma", "B. Endometrioid adenocarcinoma (Type I, ~80%)", "C. Clear cell carcinoma", "D. Mucinous carcinoma"],
    answer: 1,
    explanation: "Type I: Endometrioid adenocarcinoma (~80%) — estrogen-related, low-grade, good prognosis. Type II: Serous papillary or clear cell — not estrogen-related, high-grade, poor prognosis (associated with Lynch syndrome). Type II occurs in older, leaner women.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_em_004",
    topic: "ca-endometrium",
    year: "FMGE Jun 2020",
    q: "Treatment of Stage I endometrial cancer is:",
    img: null,
    options: ["A. Radical hysterectomy (Wertheim)", "B. Total hysterectomy + bilateral salpingo-oophorectomy (TH + BSO) ± pelvic node dissection", "C. Radiotherapy alone", "D. Chemotherapy alone"],
    answer: 1,
    explanation: "Standard treatment for Stage I endometrial cancer: Total hysterectomy (TH) + bilateral salpingo-oophorectomy (BSO) ± pelvic and para-aortic lymph node dissection. Adjuvant radiotherapy for high-risk features. Radical hysterectomy is for cervical cancer (Stage IB–IIA).",
    tags: ["PYQ", "high-yield"]
  },

  // ============ CA OVARY ============
  {
    id: "obgy_ov_001",
    topic: "ca-ovary",
    year: "FMGE Dec 2019",
    q: "Most common ovarian tumor overall is:",
    img: null,
    options: ["A. Serous cystadenoma (benign)", "B. Mucinous cystadenoma", "C. Dermoid cyst (mature teratoma)", "D. Endometrioid carcinoma"],
    answer: 0,
    explanation: "Serous cystadenoma is the most common ovarian tumor overall (~30% of all ovarian tumors). Serous cystadenocarcinoma is the most common malignant ovarian tumor (~50% of ovarian cancers). Mucinous cystadenoma can be very large ('multilocular, reaches xiphisternum').",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_ov_002",
    topic: "ca-ovary",
    year: "FMGE Jun 2018",
    q: "Pseudomyxoma peritonei is associated with:",
    img: null,
    options: ["A. Serous ovarian carcinoma", "B. Mucinous ovarian tumor (often appendiceal primary)", "C. Dermoid cyst", "D. Dysgerminoma"],
    answer: 1,
    explanation: "Pseudomyxoma peritonei = accumulation of gelatinous mucin throughout peritoneal cavity. Most often arises from mucinous tumors of the appendix (with secondary ovarian involvement). Presents with abdominal distension, 'jelly belly'. Treatment: cytoreductive surgery + HIPEC.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_ov_003",
    topic: "ca-ovary",
    year: "FMGE Dec 2018",
    q: "Krukenberg tumor of the ovary is:",
    img: null,
    options: ["A. Primary ovarian mucinous carcinoma", "B. Metastatic signet-ring cell adenocarcinoma (usually from stomach)", "C. Granulosa cell tumor", "D. Brenner tumor"],
    answer: 1,
    explanation: "Krukenberg tumor = bilateral metastatic ovarian tumors from primary GI malignancy (most commonly gastric carcinoma). Signet-ring cells with mucin. Classic presentation: young woman with bilateral ovarian masses + gastric cancer. Can also arise from colon, breast, appendix.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_ov_004",
    topic: "ca-ovary",
    year: "FMGE Jun 2019",
    q: "Dermoid cyst (mature cystic teratoma) complicates pregnancy by:",
    img: null,
    options: ["A. Malignant transformation", "B. Torsion (most common complication in pregnancy)", "C. Rupture causing chemical peritonitis", "D. Preterm labour by compression"],
    answer: 1,
    explanation: "Dermoid cyst is the most common ovarian tumor in pregnancy and is most commonly complicated by TORSION (twisting of the pedicle) due to enlarging uterus displacing it. Contains teeth, hair, sebum (from all three germ layers). Calcification visible on X-ray.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_ov_005",
    topic: "ca-ovary",
    year: "FMGE Dec 2020",
    q: "CA-125 is elevated in:",
    img: null,
    options: ["A. Epithelial ovarian cancer (most useful marker)", "B. Germ cell tumors only", "C. Granulosa cell tumors only", "D. Mucinous tumors only"],
    answer: 0,
    explanation: "CA-125 is the most important tumor marker for epithelial ovarian cancer (especially serous type). Normal <35 IU/mL. Elevated in 80% of advanced ovarian cancer. Also elevated in endometriosis, PID, benign ovarian cysts — not specific for cancer. Used for monitoring treatment response.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_ov_006",
    topic: "ca-ovary",
    year: "FMGE Jun 2021",
    q: "Dysgerminoma of ovary corresponds to which testicular tumor?",
    img: null,
    options: ["A. Seminoma", "B. Embryonal carcinoma", "C. Teratoma", "D. Choriocarcinoma"],
    answer: 0,
    explanation: "Dysgerminoma (ovary) = equivalent to seminoma (testis). Both are germ cell tumors composed of primitive undifferentiated germ cells. Both are radiosensitive. Dysgerminoma: most common malignant germ cell tumor of ovary, young women, LDH elevated, bilateral in 15%.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ GESTATIONAL DIABETES ============
  {
    id: "obgy_gd_001",
    topic: "gestational-diabetes",
    year: "FMGE Dec 2019",
    q: "Gestational diabetes mellitus (GDM) is screened by:",
    img: null,
    options: ["A. Fasting glucose >126 mg/dL", "B. 75g OGTT at 24–28 weeks", "C. HbA1c alone", "D. Urinalysis for glucose"],
    answer: 1,
    explanation: "Universal screening with 75g 2-hour OGTT at 24–28 weeks is standard; WHO criteria (fasting ≥92, 1h ≥180, 2h ≥153 mg/dL).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_gd_002",
    topic: "gestational-diabetes",
    year: "FMGE Jun 2018",
    q: "Macrosomia in gestational diabetes is due to:",
    img: null,
    options: ["A. Maternal hyperglycaemia → fetal hyperinsulinaemia → excess anabolism", "B. Placental abnormality alone", "C. Increased maternal growth hormone", "D. Intrauterine infection"],
    answer: 0,
    explanation: "Pedersen's hypothesis: maternal glucose crosses placenta, fetal pancreas secretes insulin, driving macrosomia.",
    tags: ["PYQ"]
  },
  {
    id: "obgy_gd_003",
    topic: "gestational-diabetes",
    year: "FMGE Dec 2018",
    q: "Insulin is preferred over oral antidiabetics in GDM because:",
    img: null,
    options: ["A. Cheaper", "B. Does not cross placenta (minimises fetal exposure)", "C. Less monitoring needed", "D. Easier administration"],
    answer: 1,
    explanation: "Insulin does not cross the placenta; metformin/glyburide do, though metformin is sometimes used second-line.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_gd_004",
    topic: "gestational-diabetes",
    year: "FMGE Jun 2019",
    q: "Shoulder dystocia is the major obstetric complication of:",
    img: null,
    options: ["A. Pre-eclampsia", "B. Macrosomia in GDM", "C. Oligohydramnios", "D. Breech presentation"],
    answer: 1,
    explanation: "Large fetal head delivers but macrosomic shoulders get impacted above maternal symphysis.",
    tags: ["PYQ"]
  },
  {
    id: "obgy_gd_005",
    topic: "gestational-diabetes",
    year: "FMGE Dec 2020",
    q: "GDM resolves postpartum but increases lifetime risk of:",
    img: null,
    options: ["A. Hypothyroidism", "B. Type 2 DM (~50% within 5–10 years)", "C. Inflammatory bowel disease", "D. Autoimmune hepatitis"],
    answer: 1,
    explanation: "Women with GDM have ~7× risk of developing T2DM; annual OGTT surveillance is recommended.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ DYSTOCIA / ABNORMAL LABOR ============
  {
    id: "obgy_dys_001",
    topic: "dystocia",
    year: "FMGE Dec 2019",
    q: "Prolonged latent phase of labour is defined as latent phase lasting >:",
    img: null,
    options: ["A. 4 hours", "B. 20 hours in primigravida or >14 hours in multigravida", "C. 8 hours", "D. 24 hours in all women"],
    answer: 1,
    explanation: "Prolonged latent phase: >20h primip, >14h multip — managed with rest/sedation or cautious oxytocin.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_dys_002",
    topic: "dystocia",
    year: "FMGE Jun 2018",
    q: "Active phase arrest (secondary arrest of dilatation) after adequate contractions requires:",
    img: null,
    options: ["A. Expectant management", "B. Caesarean section", "C. Uterine massage alone", "D. Immediate amniotomy alone"],
    answer: 1,
    explanation: "Active phase arrest despite adequate uterine activity and normal pelvis after 4 hours → CS.",
    tags: ["PYQ"]
  },
  {
    id: "obgy_dys_003",
    topic: "dystocia",
    year: "FMGE Dec 2018",
    q: "Most common cause of cephalopelvic disproportion (CPD) is:",
    img: null,
    options: ["A. Fetal macrosomia", "B. Contracted pelvis (generally contracted/android)", "C. Asynclitism only", "D. Posterior position"],
    answer: 1,
    explanation: "Flat/android pelvis with reduced AP and transverse diameters is the most common bony cause.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_dys_004",
    topic: "dystocia",
    year: "FMGE Jun 2019",
    q: "Oxytocin augmentation in dystocia should be stopped when:",
    img: null,
    options: ["A. Patient requests", "B. Uterine hyperstimulation or fetal heart rate abnormality", "C. Dilatation reaches 6 cm", "D. 2 hours of augmentation complete"],
    answer: 1,
    explanation: "Hyperstimulation (>5 contractions/10 min or tachysystole) and FHR decelerations mandate stopping.",
    tags: ["PYQ"]
  },
  {
    id: "obgy_dys_005",
    topic: "dystocia",
    year: "FMGE Dec 2020",
    q: "Partogram is used to monitor:",
    img: null,
    options: ["A. Fetal heart only", "B. Progress of labour (dilatation, descent, contractions, maternal vitals)", "C. CTG only", "D. Fetal Doppler"],
    answer: 1,
    explanation: "Partogram plots cervical dilatation, descent of presenting part, contractions, and vitals to detect abnormal labour.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ INFERTILITY ============
  {
    id: "obgy_inf_001",
    topic: "infertility",
    year: "FMGE Dec 2019",
    q: "Infertility is defined as failure to conceive after:",
    img: null,
    options: ["A. 6 months of unprotected sex", "B. 1 year of regular unprotected intercourse", "C. 2 years only if both partners <30", "D. 3 years"],
    answer: 1,
    explanation: "WHO defines infertility as failure to achieve pregnancy after 12 months of regular unprotected sex.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_inf_002",
    topic: "infertility",
    year: "FMGE Jun 2018",
    q: "Most common cause of female infertility in India is:",
    img: null,
    options: ["A. Uterine fibroids", "B. Tubal factor (post-pelvic infection/PID)", "C. Premature ovarian failure", "D. Hypothyroidism"],
    answer: 1,
    explanation: "Tubal blockage from previous PID/Chlamydia is the leading cause in developing countries.",
    tags: ["PYQ"]
  },
  {
    id: "obgy_inf_003",
    topic: "infertility",
    year: "FMGE Dec 2018",
    q: "Day 21 progesterone level is used to confirm:",
    img: null,
    options: ["A. Uterine factor", "B. Ovulation in a 28-day cycle", "C. Sperm quality", "D. Tubal patency"],
    answer: 1,
    explanation: "Mid-luteal progesterone >30 nmol/L (>10 ng/mL) confirms ovulation.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_inf_004",
    topic: "infertility",
    year: "FMGE Jun 2019",
    q: "Hysterosalpingography (HSG) assesses:",
    img: null,
    options: ["A. Ovarian reserve", "B. Uterine cavity and tubal patency", "C. Sperm count", "D. Endometrial thickness"],
    answer: 1,
    explanation: "Contrast fills uterine cavity and spills into tubes confirming or ruling out obstruction.",
    tags: ["PYQ"]
  },
  {
    id: "obgy_inf_005",
    topic: "infertility",
    year: "FMGE Dec 2020",
    q: "Clomiphene citrate acts by:",
    img: null,
    options: ["A. Directly stimulating ovaries", "B. Blocking oestrogen receptors in hypothalamus → increased FSH/LH", "C. Providing progesterone support", "D. Inhibiting GnRH"],
    answer: 1,
    explanation: "Anti-oestrogen effect increases GnRH pulse frequency, raising FSH and inducing ovulation.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ PUERPERAL SEPSIS ============
  {
    id: "obgy_ps_001",
    topic: "puerperal-sepsis",
    year: "FMGE Dec 2019",
    q: "Puerperal pyrexia is defined as temperature ≥38°C persisting for ≥24 hours within:",
    img: null,
    options: ["A. 24 hours of delivery", "B. First 10 days postpartum (excluding first 24h)", "C. 6 weeks postpartum", "D. Only in the first 48 hours"],
    answer: 1,
    explanation: "Temperature >38°C on any 2 of the first 10 days postpartum (exclusive of first 24h) = puerperal pyrexia.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_ps_002",
    topic: "puerperal-sepsis",
    year: "FMGE Jun 2018",
    q: "Most common cause of puerperal sepsis is:",
    img: null,
    options: ["A. Clostridium species", "B. Beta-haemolytic Streptococcus group A (Strep pyogenes) or E. coli", "C. Candida", "D. Staphylococcus only"],
    answer: 1,
    explanation: "Group A Streptococcus and Gram-negative organisms predominate; E. coli is common in urinary source.",
    tags: ["PYQ"]
  },
  {
    id: "obgy_ps_003",
    topic: "puerperal-sepsis",
    year: "FMGE Dec 2018",
    q: "Endometritis after caesarean section is best prevented by:",
    img: null,
    options: ["A. Postoperative antibiotics for 5 days", "B. Single dose prophylactic antibiotics before skin incision", "C. Vaginal antiseptic only", "D. Delayed cord clamping"],
    answer: 1,
    explanation: "Single-dose cephalosporin given before incision reduces endometritis and wound infection rates.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_ps_004",
    topic: "puerperal-sepsis",
    year: "FMGE Jun 2019",
    q: "Septic pelvic thrombophlebitis should be suspected when fever persists despite appropriate antibiotics in a:",
    img: null,
    options: ["A. Appendicitis patient", "B. Postpartum or post-cesarean patient with negative cultures", "C. Antepartum preeclamptic", "D. Patient with PROM only"],
    answer: 1,
    explanation: "Fever that resolves with heparin but not antibiotics in a postpartum woman suggests SPT.",
    tags: ["PYQ"]
  },

  // ============ INDUCTION OF LABOR ============
  {
    id: "obgy_il_001",
    topic: "induction-labor",
    year: "FMGE Dec 2019",
    q: "Bishop score is used to assess:",
    img: null,
    options: ["A. Fetal maturity", "B. Cervical favourability for induction of labour", "C. Pelvic dimensions", "D. Fetal wellbeing"],
    answer: 1,
    explanation: "Bishop score (dilatation, effacement, station, consistency, position) predicts successful induction.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_il_002",
    topic: "induction-labor",
    year: "FMGE Jun 2018",
    q: "Prostaglandins (e.g. misoprostol/dinoprostone) are used for:",
    img: null,
    options: ["A. Stopping labour", "B. Cervical ripening and induction of labour", "C. Treating PPH only", "D. Tocolysis"],
    answer: 1,
    explanation: "Prostaglandin E1 (misoprostol) and E2 (dinoprostone) soften and ripen the cervix.",
    tags: ["PYQ"]
  },
  {
    id: "obgy_il_003",
    topic: "induction-labor",
    year: "FMGE Dec 2018",
    q: "Contraindication to oxytocin induction includes:",
    img: null,
    options: ["A. Post-term pregnancy", "B. Classical uterine scar / previous uterine rupture", "C. PROM at term", "D. Macrosomia alone"],
    answer: 1,
    explanation: "Classical CS scar has >5% rupture risk; oxytocin further increases this risk.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_il_004",
    topic: "induction-labor",
    year: "FMGE Jun 2019",
    q: "Indications for induction of labour include:",
    img: null,
    options: ["A. Elective scheduling only", "B. Post-term pregnancy, IUGR, pre-eclampsia, PROM", "C. Maternal anxiety", "D. Placenta praevia"],
    answer: 1,
    explanation: "Medical indications include post-dates (>41+0 weeks), PROM, pre-eclampsia, and fetal compromise.",
    tags: ["PYQ"]
  },

  // ---- top-up: +1 per underfilled topic ----
  {
    id: "obgy_em_005",
    topic: "ca-endometrium",
    year: "FMGE Jun 2019",
    q: "Most common presenting symptom of endometrial carcinoma is:",
    img: null,
    options: ["A. Vaginal discharge", "B. Postmenopausal bleeding", "C. Pelvic mass", "D. Urinary symptoms"],
    answer: 1,
    explanation: "Postmenopausal bleeding (PMB) is endometrial cancer until proved otherwise; requires endometrial biopsy.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_il_005",
    topic: "induction-labor",
    year: "FMGE Jun 2019",
    q: "A Bishop score ≥8 indicates:",
    img: null,
    options: ["A. Cervix is unfavourable; ripen first", "B. Cervix is favourable; likelihood of successful induction is high", "C. Emergency caesarean is needed", "D. Labour has already started"],
    answer: 1,
    explanation: "Score ≥8: favourable cervix, success rate of induction comparable to spontaneous labour.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_lab_005",
    topic: "normal-labor",
    year: "FMGE Jun 2019",
    q: "Active phase of labour begins at cervical dilatation of:",
    img: null,
    options: ["A. 2 cm", "B. 6 cm (WHO 2018 / ACOG)", "C. 3 cm", "D. 10 cm"],
    answer: 1,
    explanation: "WHO 2018 and ACOG 2014 redefine active phase onset at 6 cm; previously 4 cm.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "obgy_ps_005",
    topic: "puerperal-sepsis",
    year: "FMGE Jun 2019",
    q: "Most important single measure to prevent puerperal sepsis is:",
    img: null,
    options: ["A. Postpartum antibiotics for all", "B. Strict aseptic technique and hand hygiene during delivery", "C. Caesarean section", "D. Vaginal packing"],
    answer: 1,
    explanation: "Handwashing and aseptic technique remain the cornerstone of preventing puerperal infection.",
    tags: ["PYQ", "high-yield"]
  },


        {
                id: "obgy_pe_010",
                topic: "pre-eclampsia",
                year: "FMGE Jun 2022",
                q: "Drug of choice for prevention and treatment of eclamptic seizures is:",
                img: null,
                options: ["A. Diazepam", "B. Magnesium sulfate", "C. Phenytoin", "D. Mannitol"],
                answer: 1,
                explanation: "Magnesium sulfate is the drug of choice for prevention and control of seizures in severe pre-eclampsia and eclampsia. Antihypertensives control blood pressure, but magnesium sulfate prevents recurrent convulsions.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "obgy_aph_009",
                topic: "aph",
                year: "FMGE Jun 2022",
                q: "Most common cause of antepartum hemorrhage in late pregnancy is:",
                img: null,
                options: ["A. Ruptured ectopic pregnancy", "B. Placenta previa", "C. Cervical erosion", "D. Hydatidiform mole"],
                answer: 1,
                explanation: "Placenta previa is the most common cause of antepartum hemorrhage after 28 weeks, whereas placental abruption is the most common cause of serious APH.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_aph_010",
                topic: "aph",
                year: "FMGE Dec 2021",
                q: "Classical bleeding pattern in placenta previa is:",
                img: null,
                options: ["A. Painful bleeding with rigid tender uterus", "B. Painless recurrent bright red bleeding", "C. Dark bleeding with shock out of proportion", "D. Bleeding only after delivery"],
                answer: 1,
                explanation: "Placenta previa classically causes painless, recurrent, bright red vaginal bleeding. Painful bleeding with uterine tenderness suggests placental abruption instead.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "obgy_pph_008",
                topic: "pph",
                year: "FMGE Jun 2022",
                q: "Most common cause of primary postpartum hemorrhage is:",
                img: null,
                options: ["A. Retained placenta", "B. Uterine atony", "C. Genital tract trauma", "D. Coagulopathy"],
                answer: 1,
                explanation: "Uterine atony is the most common cause of primary PPH and is remembered as one of the 4 Ts: Tone, Tissue, Trauma, Thrombin.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_pph_009",
                topic: "pph",
                year: "FMGE Dec 2021",
                q: "Drug of choice for management of atonic postpartum hemorrhage is:",
                img: null,
                options: ["A. Magnesium sulfate", "B. Oxytocin", "C. Misoprostol only always", "D. Nifedipine"],
                answer: 1,
                explanation: "Oxytocin is the first-line uterotonic for prevention and treatment of atonic PPH. Other uterotonics include methylergometrine, carboprost, and misoprostol depending on contraindications.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_pph_010",
                topic: "pph",
                year: "FMGE Jun 2021",
                q: "A B-Lynch suture is used to control:",
                img: null,
                options: ["A. Cervical incompetence", "B. Atonic postpartum hemorrhage", "C. Placenta previa only", "D. Ectopic pregnancy"],
                answer: 1,
                explanation: "B-Lynch compression sutures are a uterus-sparing surgical technique used in refractory atonic PPH when medical methods fail.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "obgy_pcos_008",
                topic: "pcos",
                year: "FMGE Jun 2022",
                q: "The most widely used diagnostic criteria for PCOS are:",
                img: null,
                options: ["A. NIH criteria only", "B. Rotterdam criteria", "C. FIGO staging", "D. ACOG amenorrhea criteria"],
                answer: 1,
                explanation: "Rotterdam criteria diagnose PCOS when two of the following are present after exclusion of other causes: oligo/anovulation, hyperandrogenism, and polycystic ovaries on ultrasound.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_pcos_009",
                topic: "pcos",
                year: "FMGE Dec 2021",
                q: "Drug commonly used for ovulation induction in infertile women with PCOS is:",
                img: null,
                options: ["A. Combined oral contraceptive pill", "B. Letrozole", "C. Danazol", "D. Depot medroxyprogesterone"],
                answer: 1,
                explanation: "Letrozole is now commonly preferred as first-line ovulation induction agent in PCOS-related infertility. Clomiphene citrate was previously standard.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_pcos_010",
                topic: "pcos",
                year: "FMGE Jun 2021",
                q: "Most common endocrine abnormality associated with PCOS is:",
                img: null,
                options: ["A. Hyperprolactinemia in all cases", "B. Insulin resistance", "C. Low FSH only", "D. High TSH only"],
                answer: 1,
                explanation: "Insulin resistance is central to the pathophysiology of many PCOS patients and contributes to hyperinsulinemia, hyperandrogenism, obesity, and metabolic risk.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "obgy_cx_009",
                topic: "ca-cervix",
                year: "FMGE Jun 2022",
                q: "Most common histological type of carcinoma cervix is:",
                img: null,
                options: ["A. Adenocarcinoma", "B. Squamous cell carcinoma", "C. Sarcoma", "D. Small cell carcinoma"],
                answer: 1,
                explanation: "Squamous cell carcinoma is the most common histological type of cervical cancer, commonly arising at the transformation zone.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_cx_010",
                topic: "ca-cervix",
                year: "FMGE Dec 2021",
                q: "Most important etiological factor for carcinoma cervix is persistent infection with:",
                img: null,
                options: ["A. HSV-2", "B. High-risk HPV types 16 and 18", "C. EBV", "D. CMV"],
                answer: 1,
                explanation: "Persistent infection with high-risk human papillomavirus, especially types 16 and 18, is the principal cause of carcinoma cervix.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "obgy_fib_007",
                topic: "fibroids",
                year: "FMGE Jun 2022",
                q: "Most common benign tumor of uterus is:",
                img: null,
                options: ["A. Endometrial polyp", "B. Leiomyoma", "C. Adenomyoma", "D. Choriocarcinoma"],
                answer: 1,
                explanation: "Leiomyoma (fibroid) is the most common benign tumor of the uterus and is estrogen-dependent, often regressing after menopause.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_fib_008",
                topic: "fibroids",
                year: "FMGE Dec 2021",
                q: "Most common symptom of fibroid uterus is:",
                img: null,
                options: ["A. Amenorrhea", "B. Menorrhagia", "C. Dyspnea", "D. Hemoptysis"],
                answer: 1,
                explanation: "Menorrhagia is the most common presenting complaint in women with symptomatic fibroids, especially with intramural or submucous fibroids.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_fib_009",
                topic: "fibroids",
                year: "FMGE Jun 2021",
                q: "Fibroid most associated with infertility and heavy bleeding is:",
                img: null,
                options: ["A. Subserosal fibroid", "B. Submucous fibroid", "C. Broad ligament fibroid", "D. Cervical fibroid only"],
                answer: 1,
                explanation: "Submucous fibroids distort the uterine cavity and are particularly associated with infertility, recurrent abortion, and heavy menstrual bleeding.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_fib_010",
                topic: "fibroids",
                year: "FMGE Dec 2020",
                q: "Most common degeneration in fibroid uterus is:",
                img: null,
                options: ["A. Fatty degeneration", "B. Hyaline degeneration", "C. Malignant degeneration", "D. Calcification in all cases"],
                answer: 1,
                explanation: "Hyaline degeneration is the most common degenerative change seen in fibroids. Red degeneration is classically associated with pregnancy.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "obgy_endo_006",
                topic: "endometriosis",
                year: "FMGE Jun 2022",
                q: "Most common site of endometriosis is:",
                img: null,
                options: ["A. Fallopian tube lumen", "B. Ovary", "C. Vulva", "D. Endocervix"],
                answer: 1,
                explanation: "Ovary is the most common site of endometriosis, often forming endometrioma or 'chocolate cyst'. Pelvic peritoneum, uterosacral ligaments, and pouch of Douglas are other common sites.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_endo_007",
                topic: "endometriosis",
                year: "FMGE Dec 2021",
                q: "Most typical symptom of endometriosis is:",
                img: null,
                options: ["A. Painless menorrhagia", "B. Progressive secondary dysmenorrhea", "C. Primary amenorrhea", "D. Postmenopausal bleeding"],
                answer: 1,
                explanation: "Endometriosis typically presents with progressive secondary dysmenorrhea, chronic pelvic pain, dyspareunia, and infertility.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_endo_008",
                topic: "endometriosis",
                year: "FMGE Jun 2021",
                q: "Gold standard for diagnosis of endometriosis is:",
                img: null,
                options: ["A. Ultrasound only", "B. Diagnostic laparoscopy with biopsy", "C. Serum CA-125", "D. MRI pelvis only"],
                answer: 1,
                explanation: "Definitive diagnosis of endometriosis is made by laparoscopy with visualization of lesions and histopathological confirmation when needed.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_endo_009",
                topic: "endometriosis",
                year: "FMGE Dec 2020",
                q: "A classic ovarian endometriotic cyst contains:",
                img: null,
                options: ["A. Clear watery fluid", "B. Altered old blood giving 'chocolate' appearance", "C. Pus", "D. Sebaceous material and hair"],
                answer: 1,
                explanation: "Endometriomas are called chocolate cysts because they contain thick altered blood from repeated cyclical hemorrhage.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_endo_010",
                topic: "endometriosis",
                year: "FMGE Jun 2020",
                q: "Most appropriate initial medical therapy for symptomatic endometriosis in a woman not seeking pregnancy is:",
                img: null,
                options: ["A. Oxytocin", "B. Combined oral contraceptives or progestins", "C. Methotrexate", "D. Clomiphene citrate"],
                answer: 1,
                explanation: "For pain relief in endometriosis, hormonal suppression with combined oral contraceptives or progestins is commonly used first-line in women not currently seeking fertility.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "obgy_ect_006",
                topic: "ectopic-pregnancy",
                year: "FMGE Jun 2022",
                q: "Most common site of ectopic pregnancy is:",
                img: null,
                options: ["A. Ovary", "B. Ampulla of fallopian tube", "C. Cervix", "D. Cornua only"],
                answer: 1,
                explanation: "The ampullary part of the fallopian tube is the most common site of ectopic pregnancy. Other tubal sites include isthmus and fimbria.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_ect_007",
                topic: "ectopic-pregnancy",
                year: "FMGE Dec 2021",
                q: "Classical triad of ectopic pregnancy is:",
                img: null,
                options: ["A. Fever, amenorrhea, dysuria", "B. Amenorrhea, abdominal pain, vaginal bleeding", "C. Headache, edema, bleeding", "D. Cough, pain, syncope"],
                answer: 1,
                explanation: "The classic triad is amenorrhea, abdominal pain, and vaginal bleeding, though not all patients present with all three features.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_ect_008",
                topic: "ectopic-pregnancy",
                year: "FMGE Jun 2021",
                q: "Best investigation for early diagnosis of ectopic pregnancy is:",
                img: null,
                options: ["A. Abdominal X-ray", "B. Transvaginal ultrasonography with serial beta-hCG", "C. CT pelvis", "D. Hysterosalpingography"],
                answer: 1,
                explanation: "Transvaginal ultrasound combined with serial serum beta-hCG is the key approach for diagnosis of early ectopic pregnancy.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_ect_009",
                topic: "ectopic-pregnancy",
                year: "FMGE Dec 2020",
                q: "Medical management of unruptured ectopic pregnancy commonly uses:",
                img: null,
                options: ["A. Oxytocin", "B. Methotrexate", "C. Letrozole", "D. Misoprostol"],
                answer: 1,
                explanation: "Methotrexate is used for selected stable patients with unruptured ectopic pregnancy meeting size and follow-up criteria.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_ect_010",
                topic: "ectopic-pregnancy",
                year: "FMGE Jun 2020",
                q: "Most important life-threatening complication of ectopic pregnancy is:",
                img: null,
                options: ["A. Endometritis", "B. Rupture with hemorrhagic shock", "C. Menorrhagia", "D. Urinary retention"],
                answer: 1,
                explanation: "Tubal rupture with intraperitoneal hemorrhage causing shock is the major life-threatening complication of ectopic pregnancy and requires urgent management.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "obgy_con_009",
                topic: "contraception",
                year: "FMGE Jun 2022",
                q: "Most effective reversible long-term contraceptive method is:",
                img: null,
                options: ["A. Combined oral pills", "B. Copper IUCD", "C. Lactational amenorrhea method", "D. Barrier method"],
                answer: 1,
                explanation: "Long-acting reversible contraceptives like IUCDs and implants are highly effective with low typical-use failure rates. Copper IUCD is a common high-efficacy reversible method.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_con_010",
                topic: "contraception",
                year: "FMGE Dec 2021",
                q: "Emergency contraception can be provided by:",
                img: null,
                options: ["A. Levonorgestrel within 72 hours", "B. Depot medroxyprogesterone after 2 weeks", "C. Monthly injectable after missed period", "D. Progestin implant after confirmation of pregnancy"],
                answer: 0,
                explanation: "Levonorgestrel emergency contraception is effective when used as early as possible, preferably within 72 hours. Copper IUCD is another highly effective emergency option within 5 days.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "obgy_gtd_006",
                topic: "gtd",
                year: "FMGE Jun 2022",
                q: "Most common form of gestational trophoblastic disease is:",
                img: null,
                options: ["A. Choriocarcinoma", "B. Hydatidiform mole", "C. Placental site trophoblastic tumor", "D. Epithelioid trophoblastic tumor"],
                answer: 1,
                explanation: "Hydatidiform mole is the most common GTD. It includes complete and partial mole forms with different genetic patterns and malignant potential.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_gtd_007",
                topic: "gtd",
                year: "FMGE Dec 2021",
                q: "Complete molar pregnancy is classically associated with karyotype:",
                img: null,
                options: ["A. 69,XXY", "B. 46,XX paternal origin", "C. 45,X", "D. 47,XXX"],
                answer: 1,
                explanation: "Most complete moles are 46,XX and androgenetic (paternal-only genome), usually due to fertilization of an empty ovum by one sperm that duplicates its DNA.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_gtd_008",
                topic: "gtd",
                year: "FMGE Jun 2021",
                q: "Most sensitive marker used for diagnosis and follow-up of GTD is:",
                img: null,
                options: ["A. AFP", "B. beta-hCG", "C. CA-125", "D. LDH"],
                answer: 1,
                explanation: "Serum beta-hCG is the key marker for diagnosis, monitoring treatment response, and detecting persistent trophoblastic disease.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_gtd_009",
                topic: "gtd",
                year: "FMGE Dec 2020",
                q: "Classical ultrasound appearance of hydatidiform mole is:",
                img: null,
                options: ["A. Target sign", "B. Snowstorm appearance", "C. Honeycomb liver", "D. String of pearls"],
                answer: 1,
                explanation: "Hydatidiform mole classically shows diffuse echogenic material with multiple cystic spaces, often described as a snowstorm pattern.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_gtd_010",
                topic: "gtd",
                year: "FMGE Jun 2020",
                q: "Definitive initial management of molar pregnancy is:",
                img: null,
                options: ["A. Hysterectomy in all women", "B. Suction evacuation and curettage", "C. Induction with oxytocin alone", "D. Methotrexate for all cases"],
                answer: 1,
                explanation: "Suction evacuation is standard initial treatment for most molar pregnancies, followed by serial beta-hCG monitoring to detect persistent GTN.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "obgy_em_006",
                topic: "ca-endometrium",
                year: "FMGE Dec 2022",
                q: "Most common histological type of endometrial carcinoma is:",
                img: null,
                options: ["A. Serous carcinoma", "B. Endometrioid adenocarcinoma", "C. Clear cell carcinoma", "D. Squamous carcinoma"],
                answer: 1,
                explanation: "Endometrioid adenocarcinoma is the most common subtype and is often associated with unopposed estrogen exposure.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_em_007",
                topic: "ca-endometrium",
                year: "FMGE Jun 2022",
                q: "Important risk factor for endometrial carcinoma is:",
                img: null,
                options: ["A. Multiparity", "B. Unopposed estrogen exposure", "C. Smoking", "D. Early menopause"],
                answer: 1,
                explanation: "Chronic unopposed estrogen stimulation, as seen in obesity, anovulation, and estrogen-only therapy, increases risk of endometrial carcinoma.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_em_008",
                topic: "ca-endometrium",
                year: "FMGE Dec 2021",
                q: "Most common presenting symptom of carcinoma endometrium is:",
                img: null,
                options: ["A. Postmenopausal bleeding", "B. Dysmenorrhea", "C. Primary infertility", "D. Amenorrhea"],
                answer: 0,
                explanation: "Postmenopausal bleeding is the classic early symptom and warrants prompt endometrial evaluation.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_em_009",
                topic: "ca-endometrium",
                year: "FMGE Jun 2021",
                q: "Investigation of choice for definitive diagnosis of endometrial carcinoma is:",
                img: null,
                options: ["A. Pap smear", "B. Endometrial biopsy", "C. Serum CA-125", "D. HSG"],
                answer: 1,
                explanation: "Endometrial biopsy provides tissue diagnosis and is the definitive method for confirming carcinoma endometrium.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_em_010",
                topic: "ca-endometrium",
                year: "FMGE Dec 2020",
                q: "Standard primary treatment for early-stage carcinoma endometrium is:",
                img: null,
                options: ["A. Chemotherapy alone", "B. Total hysterectomy with bilateral salpingo-oophorectomy", "C. Radical trachelectomy", "D. Radiation alone in all patients"],
                answer: 1,
                explanation: "Surgery with total hysterectomy and bilateral salpingo-oophorectomy is the standard management for most early-stage endometrial cancers.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "obgy_ov_007",
                topic: "ca-ovary",
                year: "FMGE Dec 2022",
                q: "Most common malignant ovarian tumor in adults is:",
                img: null,
                options: ["A. Dysgerminoma", "B. Epithelial ovarian carcinoma", "C. Granulosa cell tumor", "D. Choriocarcinoma"],
                answer: 1,
                explanation: "Epithelial tumors are the most common malignant ovarian tumors in adult women.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_ov_008",
                topic: "ca-ovary",
                year: "FMGE Jun 2022",
                q: "Most commonly used tumor marker for epithelial ovarian carcinoma is:",
                img: null,
                options: ["A. AFP", "B. CA-125", "C. beta-hCG", "D. CEA"],
                answer: 1,
                explanation: "CA-125 is widely used in epithelial ovarian cancer for monitoring response and recurrence, though it is not ideal as a population screening test.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_ov_009",
                topic: "ca-ovary",
                year: "FMGE Dec 2021",
                q: "Most common site of spread of ovarian carcinoma is:",
                img: null,
                options: ["A. Hematogenous spread to brain", "B. Transcoelomic spread within peritoneal cavity", "C. Direct spread only to vagina", "D. Lymphatic spread only to inguinal nodes"],
                answer: 1,
                explanation: "Ovarian carcinoma commonly spreads by exfoliation and transcoelomic seeding throughout the peritoneal cavity.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_ov_010",
                topic: "ca-ovary",
                year: "FMGE Jun 2021",
                q: "Initial best imaging modality for evaluation of suspected ovarian mass is:",
                img: null,
                options: ["A. X-ray abdomen", "B. Transvaginal ultrasonography", "C. PET scan", "D. IVP"],
                answer: 1,
                explanation: "Transvaginal ultrasonography is the first-line imaging test for adnexal masses and helps risk stratification.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "obgy_dys_006",
                topic: "dystocia",
                year: "FMGE Dec 2022",
                q: "Shoulder dystocia is commonly diagnosed when:",
                img: null,
                options: ["A. Fetal head does not engage", "B. Anterior shoulder fails to deliver after head delivery", "C. Placenta fails to separate", "D. Cervix fails to dilate in latent phase"],
                answer: 1,
                explanation: "Shoulder dystocia is an obstetric emergency where, after head delivery, the shoulders fail to deliver spontaneously due to impaction.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_dys_007",
                topic: "dystocia",
                year: "FMGE Jun 2022",
                q: "First-line maneuver in shoulder dystocia is:",
                img: null,
                options: ["A. Internal podalic version", "B. McRoberts maneuver", "C. Forceful fundal pressure", "D. Symphysiotomy"],
                answer: 1,
                explanation: "McRoberts maneuver with suprapubic pressure is typically the initial maneuver for shoulder dystocia.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_dys_008",
                topic: "dystocia",
                year: "FMGE Dec 2021",
                q: "In shoulder dystocia, fundal pressure should be:",
                img: null,
                options: ["A. Applied strongly", "B. Avoided", "C. Applied only after episiotomy", "D. Replaced by oxytocin infusion"],
                answer: 1,
                explanation: "Fundal pressure is contraindicated as it can worsen impaction and increase risk of maternal and fetal injury.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_dys_009",
                topic: "dystocia",
                year: "FMGE Jun 2021",
                q: "Common fetal complication of shoulder dystocia is:",
                img: null,
                options: ["A. Clubfoot", "B. Brachial plexus injury", "C. Hydrocephalus", "D. Cleft palate"],
                answer: 1,
                explanation: "Traction during difficult shoulder delivery may cause brachial plexus injury, classically Erb palsy.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_dys_010",
                topic: "dystocia",
                year: "FMGE Dec 2020",
                q: "Partograph helps in identifying:",
                img: null,
                options: ["A. Placenta previa", "B. Labor dystocia and abnormal progress", "C. Fetal anomalies", "D. Postpartum hemorrhage risk only"],
                answer: 1,
                explanation: "Partograph tracks cervical dilatation and labor progress, helping early recognition of prolonged labor and dystocia.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "obgy_gd_006",
                topic: "gestational-diabetes",
                year: "FMGE Dec 2022",
                q: "Gestational diabetes mellitus is glucose intolerance first recognized during:",
                img: null,
                options: ["A. Childhood", "B. Lactation", "C. Pregnancy", "D. Menopause"],
                answer: 2,
                explanation: "GDM is defined as carbohydrate intolerance of variable severity with onset or first recognition during pregnancy.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_gd_007",
                topic: "gestational-diabetes",
                year: "FMGE Jun 2022",
                q: "Common fetal complication associated with poorly controlled GDM is:",
                img: null,
                options: ["A. IUGR in all cases", "B. Macrosomia", "C. Neural tube defect due to folate deficiency", "D. Congenital rubella syndrome"],
                answer: 1,
                explanation: "Maternal hyperglycemia can cause fetal hyperinsulinemia and macrosomia, increasing birth trauma risk.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_gd_008",
                topic: "gestational-diabetes",
                year: "FMGE Dec 2021",
                q: "Preferred pharmacologic treatment when diet therapy fails in GDM is:",
                img: null,
                options: ["A. ACE inhibitors", "B. Insulin", "C. Statins", "D. Warfarin"],
                answer: 1,
                explanation: "Insulin remains the standard and safest well-established pharmacologic therapy when medical nutrition therapy is inadequate.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_gd_009",
                topic: "gestational-diabetes",
                year: "FMGE Jun 2021",
                q: "Neonatal complication seen in infants of diabetic mothers is:",
                img: null,
                options: ["A. Hypercalcemia", "B. Hypoglycemia", "C. Polycythemia absent", "D. Hypobilirubinemia"],
                answer: 1,
                explanation: "After birth, persistent fetal hyperinsulinemia may lead to neonatal hypoglycemia.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_gd_010",
                topic: "gestational-diabetes",
                year: "FMGE Dec 2020",
                q: "Women with prior GDM should be screened postpartum for:",
                img: null,
                options: ["A. Thyroid storm", "B. Persistent diabetes mellitus", "C. Cushing syndrome", "D. Addison disease"],
                answer: 1,
                explanation: "Postpartum glucose testing is required because women with GDM have increased future risk of type 2 diabetes.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "obgy_il_006",
                topic: "induction-labor",
                year: "FMGE Dec 2022",
                q: "Most commonly used prostaglandin for cervical ripening in induction of labor is:",
                img: null,
                options: ["A. Dinoprostone (PGE2)", "B. PGF2alpha", "C. Misoprostol topical only", "D. Prostaglandins are contraindicated"],
                answer: 0,
                explanation: "Dinoprostone (PGE2) is widely used for cervical ripening. Misoprostol may also be used in selected protocols.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_il_007",
                topic: "induction-labor",
                year: "FMGE Jun 2022",
                q: "A favorable cervix before induction is assessed by:",
                img: null,
                options: ["A. Apgar score", "B. Bishop score", "C. SOFA score", "D. MELD score"],
                answer: 1,
                explanation: "Bishop score evaluates cervical favorability and predicts success of labor induction.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_il_008",
                topic: "induction-labor",
                year: "FMGE Dec 2021",
                q: "Absolute contraindication to induction of labor is:",
                img: null,
                options: ["A. Postdated pregnancy", "B. Severe preeclampsia", "C. Placenta previa", "D. Oligohydramnios"],
                answer: 2,
                explanation: "Placenta previa is a contraindication to vaginal delivery and therefore to labor induction.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_il_009",
                topic: "induction-labor",
                year: "FMGE Jun 2021",
                q: "Most commonly used agent for augmentation of labor is:",
                img: null,
                options: ["A. Oxytocin", "B. Magnesium sulfate", "C. Methylergometrine", "D. Terbutaline"],
                answer: 0,
                explanation: "Oxytocin infusion is commonly used to augment uterine contractions in labor under monitoring.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_il_010",
                topic: "induction-labor",
                year: "FMGE Dec 2020",
                q: "Artificial rupture of membranes during induction is called:",
                img: null,
                options: ["A. Cerclage", "B. Amniotomy", "C. Episiotomy", "D. Symphysiotomy"],
                answer: 1,
                explanation: "Amniotomy refers to intentional rupture of membranes and can be used as part of induction/augmentation protocols.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "obgy_inf_006",
                topic: "infertility",
                year: "FMGE Dec 2022",
                q: "Infertility is defined as failure to conceive after regular unprotected intercourse for:",
                img: null,
                options: ["A. 3 months", "B. 6 months", "C. 12 months", "D. 24 months"],
                answer: 2,
                explanation: "Standard definition uses inability to conceive after 12 months of regular unprotected intercourse.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_inf_007",
                topic: "infertility",
                year: "FMGE Jun 2022",
                q: "Most common female factor causing infertility is:",
                img: null,
                options: ["A. Tubal factor", "B. Ovulatory dysfunction", "C. Uterine septum", "D. Cervical stenosis"],
                answer: 1,
                explanation: "Ovulatory disorders, especially related to PCOS, are common female causes of infertility.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_inf_008",
                topic: "infertility",
                year: "FMGE Dec 2021",
                q: "Initial investigation in evaluation of male factor infertility is:",
                img: null,
                options: ["A. Scrotal MRI", "B. Semen analysis", "C. Testicular biopsy", "D. Vasography"],
                answer: 1,
                explanation: "Semen analysis is the first-line test in male infertility assessment.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_inf_009",
                topic: "infertility",
                year: "FMGE Jun 2021",
                q: "Best test to assess tubal patency in infertility workup is:",
                img: null,
                options: ["A. Endometrial biopsy", "B. Hysterosalpingography", "C. Pap smear", "D. Colposcopy"],
                answer: 1,
                explanation: "HSG is a common initial test for tubal patency; laparoscopy with chromopertubation is more definitive.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_inf_010",
                topic: "infertility",
                year: "FMGE Dec 2020",
                q: "Drug commonly used for ovulation induction is:",
                img: null,
                options: ["A. Clomiphene citrate", "B. Methotrexate", "C. Mifepristone", "D. Bromocriptine in all cases"],
                answer: 0,
                explanation: "Clomiphene citrate is a commonly used ovulation induction agent in selected anovulatory infertility cases.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "obgy_lab_006",
                topic: "normal-labor",
                year: "FMGE Dec 2022",
                q: "Normal duration of active phase cervical dilatation in labor is approximately:",
                img: null,
                options: ["A. 0.2 cm/hr", "B. 0.5 cm/hr", "C. 1 cm/hr or more in primigravida", "D. 3 cm/hr"],
                answer: 2,
                explanation: "A traditional benchmark is about 1 cm/hr progress in active labor for primigravida, though modern labor curves vary.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_lab_007",
                topic: "normal-labor",
                year: "FMGE Jun 2022",
                q: "Cardinal movement following engagement is:",
                img: null,
                options: ["A. Extension", "B. Internal rotation", "C. Descent", "D. Restitution"],
                answer: 2,
                explanation: "Cardinal movements include engagement, descent, flexion, internal rotation, extension, restitution, and external rotation.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_lab_008",
                topic: "normal-labor",
                year: "FMGE Dec 2021",
                q: "Partograph alert line indicates:",
                img: null,
                options: ["A. Immediate cesarean section", "B. Expected minimum progress of labor", "C. Fetal demise", "D. Placental separation"],
                answer: 1,
                explanation: "The alert line represents expected labor progress; crossing it suggests slow progress requiring closer monitoring or referral.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_lab_009",
                topic: "normal-labor",
                year: "FMGE Jun 2021",
                q: "Third stage of labor is from delivery of baby to:",
                img: null,
                options: ["A. Full cervical dilatation", "B. Placental delivery", "C. Onset of contractions", "D. Completion of puerperium"],
                answer: 1,
                explanation: "The third stage begins after baby delivery and ends with expulsion of placenta and membranes.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_lab_010",
                topic: "normal-labor",
                year: "FMGE Dec 2020",
                q: "Most common presentation in normal labor is:",
                img: null,
                options: ["A. Breech", "B. Face", "C. Vertex", "D. Shoulder"],
                answer: 2,
                explanation: "Vertex presentation is the most common and favorable presentation for vaginal birth.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "obgy_ps_006",
                topic: "puerperal-sepsis",
                year: "FMGE Dec 2022",
                q: "Puerperal sepsis is infection of genital tract occurring up to:",
                img: null,
                options: ["A. 7 days postpartum", "B. 10 days postpartum", "C. 42 days postpartum", "D. 6 months postpartum"],
                answer: 2,
                explanation: "WHO definition includes infection from rupture of membranes or labor through the 42nd day postpartum.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_ps_007",
                topic: "puerperal-sepsis",
                year: "FMGE Jun 2022",
                q: "Most common etiological organisms in puerperal sepsis are:",
                img: null,
                options: ["A. Anaerobes only", "B. Mixed aerobic and anaerobic flora", "C. Mycobacteria", "D. Viruses only"],
                answer: 1,
                explanation: "Puerperal infections are typically polymicrobial, involving both aerobic and anaerobic organisms.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_ps_008",
                topic: "puerperal-sepsis",
                year: "FMGE Dec 2021",
                q: "Important risk factor for puerperal sepsis is:",
                img: null,
                options: ["A. Strict asepsis", "B. Prolonged labor and repeated vaginal examinations", "C. Early ambulation", "D. Breastfeeding"],
                answer: 1,
                explanation: "Prolonged labor and multiple vaginal examinations increase ascending infection risk.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_ps_009",
                topic: "puerperal-sepsis",
                year: "FMGE Jun 2021",
                q: "Initial management of puerperal sepsis includes:",
                img: null,
                options: ["A. Delay antibiotics until culture report", "B. Broad-spectrum intravenous antibiotics", "C. Observe for 72 hours only", "D. Immediate hysterectomy in all cases"],
                answer: 1,
                explanation: "Early broad-spectrum IV antibiotics, supportive care, and source control are key to management.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "obgy_ps_010",
                topic: "puerperal-sepsis",
                year: "FMGE Dec 2020",
                q: "Classical sign suggestive of postpartum endometritis is:",
                img: null,
                options: ["A. Bradycardia with hypertension", "B. Uterine tenderness with foul-smelling lochia", "C. Painless jaundice", "D. Bilateral pedal edema only"],
                answer: 1,
                explanation: "Postpartum endometritis commonly presents with fever, uterine tenderness, and foul-smelling lochia.",
                tags: ["PYQ", "high-yield"]
        },

];

export default obgy;
