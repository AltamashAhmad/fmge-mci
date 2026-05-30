const pediatrics = [

  // ============ NEONATAL RESUSCITATION ============
  {
    id: "peds_nrp_001",
    topic: "nrp",
    year: "FMGE Dec 2019",
    q: "The first step in neonatal resuscitation (NRP) after birth is:",
    img: null,
    options: ["A. Intubation", "B. Positive pressure ventilation (PPV) with bag and mask", "C. Initial steps: warm, dry, stimulate, position airway, assess breathing", "D. Chest compressions"],
    answer: 2,
    explanation: "NRP initial assessment: (1) Is the baby term? (2) Good tone? (3) Crying/breathing? If YES all three → routine care. Otherwise: Warm, Dry, Stimulate, Position airway (sniff), Suction if needed → assess HR and breathing. PPV if apneic/gasping or HR <100. Chest compressions if HR <60 despite 30s PPV.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_nrp_002",
    topic: "nrp",
    year: "FMGE Jun 2018",
    q: "APGAR score is assessed at which time intervals after birth?",
    img: null,
    options: ["A. 1 minute only", "B. 1 minute and 5 minutes (and every 5 min if still <7)", "C. 5 minutes only", "D. 10 minutes only"],
    answer: 1,
    explanation: "APGAR score (0–10) at 1 min and 5 min. Components: Appearance (skin color), Pulse (HR), Grimace (reflex irritability), Activity (muscle tone), Respiration. 7–10 = normal; 4–6 = moderate depression; <4 = severe. 1-min score guides resuscitation; 5-min score predicts neurological outcome.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_nrp_003",
    topic: "nrp",
    year: "FMGE Dec 2018",
    q: "In neonatal resuscitation, the recommended compression-to-ventilation ratio is:",
    img: null,
    options: ["A. 15:2", "B. 30:2", "C. 3:1 (90 compressions + 30 breaths = 120 events/min)", "D. 5:1"],
    answer: 2,
    explanation: "NRP cardiac compressions: 3:1 ratio (3 compressions + 1 breath = 4 events in 2 seconds = 90 compressions + 30 ventilations per minute). This differs from pediatric (30:2 or 15:2) and adult (30:2) CPR. Chest compression: lower 1/3 of sternum, 2-thumb technique preferred.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_nrp_004",
    topic: "nrp",
    year: "FMGE Jun 2019",
    q: "Meconium-stained amniotic fluid with a depressed neonate — current NRP recommendation:",
    img: null,
    options: ["A. Suction mouth/nose before delivery of shoulders (DeLee suctioning)", "B. Intubate and suction trachea routinely in all cases", "C. Provide routine resuscitation as for any other depressed neonate — no routine tracheal suctioning", "D. Delay resuscitation until pediatrician arrives"],
    answer: 2,
    explanation: "NRP 2015 update: routine tracheal intubation and suctioning for meconium-stained amniotic fluid is NO LONGER recommended. Current: start resuscitation immediately (initial steps, PPV if needed). Intubate only if airway obstruction is suspected. DeLee suctioning before delivery is also abandoned.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_nrp_005",
    topic: "nrp",
    year: "FMGE Dec 2020",
    q: "Delayed cord clamping (DCC) in term neonates should be done after:",
    img: null,
    options: ["A. Immediately (within 10 seconds)", "B. At least 1 minute (or until cord stops pulsating)", "C. 5 minutes", "D. After placental delivery"],
    answer: 1,
    explanation: "Delayed cord clamping (≥1 minute) recommended by WHO/NRP for term and preterm neonates NOT requiring immediate resuscitation. Benefits: increased blood volume (+20%), higher Hb/ferritin, reduced IVH (preterm), improved neurodevelopmental outcomes. Cord milking is an alternative if DCC not feasible.",
    tags: ["PYQ"]
  },
  {
    id: "peds_nrp_006",
    topic: "nrp",
    year: "FMGE Jun 2021",
    q: "Hypothermia therapy (therapeutic hypothermia) in neonates is indicated for:",
    img: null,
    options: ["A. Prematurity <34 weeks", "B. Hypoxic-Ischemic Encephalopathy (HIE) in term neonates ≥36 weeks, started within 6 hours of birth", "C. Sepsis neonatorum", "D. Respiratory distress syndrome"],
    answer: 1,
    explanation: "Therapeutic hypothermia (cooling to 33–34°C for 72h): indicated for moderate-severe HIE in term neonates (≥36 weeks GA) with evidence of perinatal asphyxia. Must start within 6 hours of birth. Reduces death and neurodisability by ~25%. Monitor for hypoglycemia, coagulopathy, bradycardia.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ NEONATAL JAUNDICE ============
  {
    id: "peds_jaund_001",
    topic: "neonatal-jaundice",
    year: "FMGE Dec 2019",
    q: "Physiological jaundice in term neonates appears:",
    img: null,
    options: ["A. Within 24 hours of birth", "B. After 24 hours (day 2–3), peaks day 3–5, resolves by day 10–14", "C. After 2 weeks", "D. At birth"],
    answer: 1,
    explanation: "Physiological neonatal jaundice: appears after 24h, peaks at 3–5 days (term: <12 mg/dL; preterm: <15 mg/dL), resolves by 14 days (term) or 21 days (preterm). Due to: ↑RBC breakdown, immature liver UDP-glucuronosyltransferase, ↑enterohepatic circulation. Pathological: any jaundice <24h, total bilirubin in phototherapy range, conjugated bilirubin >1 mg/dL.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_jaund_002",
    topic: "neonatal-jaundice",
    year: "FMGE Jun 2018",
    q: "Hemolytic disease of newborn (Rh incompatibility) presents with jaundice:",
    img: null,
    options: ["A. After 24 hours (physiological)", "B. Within first 24 hours of life (pathological jaundice)", "C. After 1 week", "D. Only if Coombs test negative"],
    answer: 1,
    explanation: "Rh hemolytic disease (erythroblastosis fetalis): jaundice within first 24 hours = PATHOLOGICAL. Cause: maternal anti-D IgG crossing placenta → hemolysis. Features: jaundice <24h, anemia, hepatosplenomegaly, positive direct Coombs test. Prevent with anti-D immunoglobulin (Rhogam) to Rh-negative mother.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_jaund_003",
    topic: "neonatal-jaundice",
    year: "FMGE Dec 2018",
    q: "Exchange transfusion in neonatal jaundice is indicated when:",
    img: null,
    options: ["A. TSB >10 mg/dL in term neonate", "B. TSB at or above exchange level in AAP guidelines (varies by gestational age, risk factors, hours of age) OR signs of acute bilirubin encephalopathy", "C. Physiological jaundice present", "D. Any hemolytic disease regardless of bilirubin level"],
    answer: 1,
    explanation: "Exchange transfusion: indicated when total serum bilirubin (TSB) reaches exchange threshold per hour-specific Bhutani nomogram (AAP guidelines), OR clinical signs of acute bilirubin encephalopathy (ABE: hypotonia→hypertonia, retrocollis, opisthotonus, fever, high-pitched cry). Used when phototherapy fails.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_jaund_004",
    topic: "neonatal-jaundice",
    year: "FMGE Jun 2019",
    q: "Kernicterus (bilirubin encephalopathy) — unconjugated bilirubin is toxic to:",
    img: null,
    options: ["A. Liver cells only", "B. Basal ganglia (especially globus pallidus), hippocampus, cerebellum", "C. Peripheral nerves only", "D. Kidney tubules"],
    answer: 1,
    explanation: "Kernicterus: unconjugated bilirubin crosses BBB (when albumin-binding capacity is exceeded) → deposits in basal ganglia (globus pallidus = yellow staining, 'kern' = German for nucleus), hippocampus, cerebellum. Acute: high-pitched cry, opisthotonos. Chronic: choreoathetosis, deafness, upward gaze palsy, dental dysplasia.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_jaund_005",
    topic: "neonatal-jaundice",
    year: "FMGE Dec 2020",
    q: "Breast milk jaundice (prolonged neonatal jaundice) is due to:",
    img: null,
    options: ["A. ABO/Rh incompatibility", "B. Beta-glucuronidase in breast milk → unconjugated bilirubin absorption (enterohepatic circulation)", "C. Liver failure", "D. Congenital hypothyroidism"],
    answer: 1,
    explanation: "Breast milk jaundice: prolonged unconjugated hyperbilirubinemia beyond 2 weeks in well-fed, gaining-weight breastfed infant. Caused by β-glucuronidase (deconjugates bilirubin → increases enterohepatic circulation). Peaks week 2, may last 3–12 weeks. Benign. Confirmation: jaundice resolves with 48h breast milk interruption.",
    tags: ["PYQ"]
  },
  {
    id: "peds_jaund_006",
    topic: "neonatal-jaundice",
    year: "FMGE Jun 2021",
    q: "Phototherapy for neonatal jaundice works by:",
    img: null,
    options: ["A. Increasing conjugation by the liver", "B. Converting unconjugated bilirubin into lumirubin + photo-isomers (water-soluble) that are excreted without conjugation", "C. Binding bilirubin to albumin", "D. Stimulating reticuloendothelial clearance"],
    answer: 1,
    explanation: "Phototherapy (blue-green light 460–490 nm): converts unconjugated bilirubin (water-insoluble, fat-soluble) by photoisomerization → lumirubin (water-soluble) and configurational isomers → excreted in bile and urine without hepatic conjugation. Most effective at wavelength 460–490 nm (blue light).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_jaund_007",
    topic: "neonatal-jaundice",
    year: "FMGE Dec 2021",
    q: "Conjugated (direct) hyperbilirubinemia in a neonate always indicates:",
    img: null,
    options: ["A. Physiological jaundice", "B. Pathological — investigation mandatory (biliary atresia, neonatal hepatitis, choledochal cyst, metabolic disease)", "C. Breast milk jaundice", "D. ABO incompatibility"],
    answer: 1,
    explanation: "Conjugated (direct) bilirubin >1 mg/dL or >20% of total bilirubin = ALWAYS pathological in neonates. Causes: biliary atresia (most important — needs Kasai procedure before 60 days), neonatal hepatitis (TORCH), choledochal cyst, Alagille syndrome, alpha-1-antitrypsin deficiency, metabolic diseases. Acholic stools = biliary obstruction.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ NEONATAL SEPSIS ============
  {
    id: "peds_sep_001",
    topic: "neonatal-sepsis",
    year: "FMGE Dec 2019",
    q: "Most common cause of early-onset neonatal sepsis (<72 hours) in India is:",
    img: null,
    options: ["A. E. coli", "B. Group B Streptococcus (GBS)", "C. Klebsiella pneumoniae", "D. S. aureus"],
    answer: 2,
    explanation: "In India: Klebsiella and E. coli are more common causes of both early and late-onset neonatal sepsis (vs. Western countries where GBS predominates for early-onset). GBS is most common in USA/Europe early-onset NNS. S. aureus and coagulase-negative Staph more common in late-onset (>72h, usually NICU-acquired).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_sep_002",
    topic: "neonatal-sepsis",
    year: "FMGE Jun 2019",
    q: "Best single screening marker for neonatal sepsis is:",
    img: null,
    options: ["A. Total leukocyte count (TLC)", "B. C-reactive protein (CRP) (serial measurement)", "C. Blood culture (gold standard for diagnosis, not screening)", "D. Absolute neutrophil count (ANC)"],
    answer: 1,
    explanation: "Blood culture = gold standard for diagnosis of neonatal sepsis. For SCREENING: CRP is most useful single marker (serial CRP more reliable than single). I:T ratio (immature:total neutrophil ratio) >0.2 = sepsis screen positive (most sensitive). Sepsis screen positive = 3 or more of: TLC<5000 or >15000, ANC <1800, I:T >0.2, CRP>1, micro-ESR >15.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_sep_003",
    topic: "neonatal-sepsis",
    year: "FMGE Dec 2020",
    q: "Empiric antibiotic therapy for suspected neonatal sepsis (standard regimen) is:",
    img: null,
    options: ["A. Ampicillin + Gentamicin (first-line combination)", "B. Vancomycin + Meropenem", "C. Amoxicillin alone", "D. Cefotaxime alone"],
    answer: 0,
    explanation: "Standard empiric regimen for neonatal sepsis: Ampicillin (covers GBS, Listeria) + Gentamicin (gram-negative coverage, synergy). For late-onset/NICU-acquired sepsis or failed initial treatment: Vancomycin + Gentamicin or Vancomycin + Cefotaxime/Meropenem (based on local antibiogram).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_sep_004",
    topic: "neonatal-sepsis",
    year: "FMGE Jun 2021",
    q: "Risk factors for early-onset neonatal sepsis include all EXCEPT:",
    img: null,
    options: ["A. Prolonged rupture of membranes (>18 hours)", "B. Maternal GBS colonization (in Western countries)", "C. Elective cesarean section in absence of labor or ROM", "D. Chorioamnionitis"],
    answer: 2,
    explanation: "Elective cesarean section (without labor or ROM) is PROTECTIVE against neonatal sepsis. Risk factors: PROM (>18h), chorioamnionitis (maternal fever, uterine tenderness), maternal GBS colonization (Western countries), prematurity, low birth weight, birth asphyxia, multiple pregnancies.",
    tags: ["PYQ"]
  },
  {
    id: "peds_sep_005",
    topic: "neonatal-sepsis",
    year: "FMGE Dec 2021",
    q: "Neonatal meningitis — most common causative organism in India:",
    img: null,
    options: ["A. S. pneumoniae", "B. Klebsiella and E. coli (gram-negative organisms dominate in India)", "C. Listeria monocytogenes", "D. N. meningitidis"],
    answer: 1,
    explanation: "Neonatal meningitis in India: gram-negative organisms (Klebsiella, E. coli) are most common, followed by S. aureus. GBS and Listeria are more common in developed countries. CSF in neonatal meningitis: protein >150 mg/dL, glucose <20 mg/dL, WBC >20 cells/μL (mostly neutrophils). Culture is gold standard.",
    tags: ["PYQ"]
  },

  // ============ GROWTH & DEVELOPMENT MILESTONES ============
  {
    id: "peds_dev_001",
    topic: "development-milestones",
    year: "FMGE Dec 2019",
    q: "A child who smiles (social smile) is approximately:",
    img: null,
    options: ["A. 2 weeks", "B. 6 weeks (1.5 months)", "C. 3 months", "D. 1 month"],
    answer: 1,
    explanation: "Key developmental milestones: Social smile = 6 weeks. Head control (prone) = 3 months. Rolls over = 4–5 months. Sits with support = 5 months; without support = 7–8 months. Pincer grasp = 9–10 months. Walks = 12–15 months. Single words = 12 months. Two-word phrases = 2 years.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_dev_002",
    topic: "development-milestones",
    year: "FMGE Jun 2018",
    q: "A child walks without support at:",
    img: null,
    options: ["A. 9 months", "B. 12 months (range 10–15 months)", "C. 18 months", "D. 8 months"],
    answer: 1,
    explanation: "Walking without support: ~12 months (10–15 months range). Walks upstairs with support = 18 months. Runs = 18 months–2 years. Jumps = 2–2.5 years. Hops on one foot = 4 years. Red flag: Not walking by 18 months → investigate (neuromuscular disease, hip dysplasia, vision/hearing problem).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_dev_003",
    topic: "development-milestones",
    year: "FMGE Dec 2018",
    q: "A child uses 2-word phrases (e.g., 'mama come') at approximately:",
    img: null,
    options: ["A. 12 months", "B. 18 months", "C. 24 months (2 years)", "D. 36 months"],
    answer: 2,
    explanation: "Language milestones: Coos = 2 months. Babbles (monosyllables) = 6 months. Dada/mama non-specifically = 8 months. First meaningful word (mama/dada) = 12 months. 2–3 words vocabulary = 15 months. 10+ words = 18 months. 2-word phrases = 24 months. 3-word sentences = 3 years.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_dev_004",
    topic: "development-milestones",
    year: "FMGE Jun 2019",
    q: "Anterior fontanelle closes at:",
    img: null,
    options: ["A. 3–6 months", "B. 12–18 months", "C. 6–8 months", "D. 24–30 months"],
    answer: 1,
    explanation: "Anterior fontanelle (AF): largest, diamond-shaped, at junction of frontal and parietal bones. Normal range for closure: 9–18 months (mean 12–14 months). Delayed closure: hypothyroidism, rickets, hydrocephalus, trisomy 21, achondroplasia. Early closure: microcephaly, craniosynostosis. Posterior fontanelle: closes at 6–8 weeks.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_dev_005",
    topic: "development-milestones",
    year: "FMGE Dec 2020",
    q: "Birth weight should double by which age?",
    img: null,
    options: ["A. 3 months", "B. 5 months", "C. 12 months", "D. 2 years"],
    answer: 1,
    explanation: "Birth weight (average 3 kg): doubles by 5 months, triples by 12 months, quadruples by 2 years. Height: birth = 50 cm, increases 25 cm in year 1, 12.5 cm in year 2, 7.5 cm/year after 2 years. Birth weight regained by 10th–14th day. Weight loss up to 10% of birth weight physiological in first week.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_dev_006",
    topic: "development-milestones",
    year: "FMGE Jun 2021",
    q: "Pincer grasp (using thumb and index finger) develops at approximately:",
    img: null,
    options: ["A. 6 months", "B. 9–10 months", "C. 12 months", "D. 3 months"],
    answer: 1,
    explanation: "Fine motor milestones: Hands open (reduces grasp reflex) = 3 months. Voluntary grasp = 5 months. Transfers object hand to hand = 6 months. Immature pincer (raking) = 8 months. True pincer grasp (thumb + index tip) = 9–10 months. Release object = 12 months. Tower of 2 cubes = 15 months; 6 cubes = 2 years.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_dev_007",
    topic: "development-milestones",
    year: "FMGE Dec 2021",
    q: "Stranger anxiety (fear of strangers) typically begins at:",
    img: null,
    options: ["A. 3 months", "B. 6–8 months", "C. 12 months", "D. 18 months"],
    answer: 1,
    explanation: "Stranger anxiety begins at 6–8 months (when infant distinguishes familiar from unfamiliar faces). Separation anxiety: peaks at 9–18 months. Object permanence develops at ~8–9 months. Parallel play = 2–3 years. Cooperative play = 4 years. Egocentric play = 18 months–3 years.",
    tags: ["PYQ"]
  },
  {
    id: "peds_dev_008",
    topic: "development-milestones",
    year: "FMGE Jun 2020",
    q: "Bayley Scales of Infant Development is used to assess development in children up to:",
    img: null,
    options: ["A. 2 years", "B. 42 months (3.5 years)", "C. 5 years", "D. 12 years"],
    answer: 1,
    explanation: "Bayley Scales of Infant and Toddler Development (BSID-III): standardized test for developmental assessment of children 1–42 months. Assesses cognitive, language, motor, social-emotional, adaptive behavior. Used to identify developmental delay and monitor high-risk infants (preterm, NICU graduates).",
    tags: ["PYQ"]
  },

  // ============ IMMUNIZATION SCHEDULE ============
  {
    id: "peds_imm_001",
    topic: "immunization-schedule",
    year: "FMGE Dec 2019",
    q: "As per India's National Immunization Schedule, OPV is given at birth and at:",
    img: null,
    options: ["A. 6, 10, 14 weeks and 9 months only", "B. 6, 10, 14 weeks + booster at 16–24 months", "C. 6 weeks only", "D. Monthly for 6 months"],
    answer: 1,
    explanation: "India's NIS for OPV: Birth dose (bOPV) + 6, 10, 14 weeks (along with pentavalent) + booster at 16–24 months. IPV is given at 6 and 14 weeks (fractional dose ID, introduced 2015). Supplemental immunization activities (SIAs): pulse polio rounds. India polio-free since 2014.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_imm_002",
    topic: "immunization-schedule",
    year: "FMGE Jun 2018",
    q: "MMR vaccine is given in India at:",
    img: null,
    options: ["A. 6 months only", "B. 9 months (MR/MMR) and 15–18 months (second dose)", "C. 12 months only", "D. 6 and 18 months"],
    answer: 1,
    explanation: "India's NIS: Measles-Rubella (MR) at 9–12 months + second dose at 16–24 months (as MMR or MR). Some states use MMR (measles, mumps, rubella) for second dose. MR campaign 2017–20 covered 9 months–15 years. Live attenuated — contraindicated in immunocompromised.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_imm_003",
    topic: "immunization-schedule",
    year: "FMGE Dec 2018",
    q: "Varicella vaccine is recommended at age:",
    img: null,
    options: ["A. 2 months", "B. 12–15 months (1st dose) and 4–6 years (2nd dose) in IAP schedule", "C. 6 months", "D. At birth"],
    answer: 1,
    explanation: "IAP (Indian Academy of Pediatrics) schedule for Varicella: 1st dose at 12–15 months, 2nd dose at 4–6 years (or 3 months after 1st dose if given later). Not in India's Government NIS (optional vaccine). Contraindicated in immunocompromised. If exposed unvaccinated child: varicella-zoster IG within 96h.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_imm_004",
    topic: "immunization-schedule",
    year: "FMGE Jun 2019",
    q: "Hepatitis B vaccine schedule for newborn of HBsAg-positive mother:",
    img: null,
    options: ["A. First dose at 6 weeks only", "B. Hep B vaccine at birth + HBIG within 12 hours → 0, 1, 6 months schedule", "C. Three doses at 6, 10, 14 weeks (no birth dose needed)", "D. Vaccine at birth + HBIG not necessary if vaccinated"],
    answer: 1,
    explanation: "Newborn of HBsAg+ mother: (1) Hep B vaccine within 12h of birth + (2) HBIG (hepatitis B immunoglobulin) 0.5 mL within 12h at different site. Then complete 3-dose series. If mother's status unknown: give vaccine at birth. HBIG + vaccine = 95% effective in preventing mother-to-child transmission.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_imm_005",
    topic: "immunization-schedule",
    year: "FMGE Dec 2020",
    q: "DPT (DTP) booster doses in India's NIS are given at:",
    img: null,
    options: ["A. 6, 10, 14 weeks only (no boosters)", "B. 16–24 months (1st booster) and 5–6 years (2nd booster/DT)", "C. Every year until 10 years of age", "D. Only at 18 months"],
    answer: 1,
    explanation: "India NIS DPT: Primary series at 6, 10, 14 weeks (as pentavalent). DPT 1st booster at 16–24 months + OPV. DPT 2nd booster (or DT) at 5–6 years. TT at 10 years and 16 years. Adult Td every 10 years. Pertussis component dropped after 6 years (DT/Td used instead).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_imm_006",
    topic: "immunization-schedule",
    year: "FMGE Jun 2021",
    q: "Rotavirus vaccine in India (government NIS) is given at:",
    img: null,
    options: ["A. 6 and 14 weeks only", "B. 6, 10, 14 weeks (3 doses oral rotavirus vaccine)", "C. 9 months (with MR)", "D. Only in diarrhea-endemic states"],
    answer: 1,
    explanation: "Rotavirus vaccine (Rotavac 116E, 5 mg/dose): introduced in India's NIS 2016 in phased manner. Oral live vaccine at 6, 10, 14 weeks. Reduces severe rotaviral gastroenteritis by ~55–66% in Indian trials. Rotavirus is the most common cause of severe dehydrating diarrhea in children <5 years.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_imm_007",
    topic: "immunization-schedule",
    year: "FMGE Dec 2021",
    q: "Pneumococcal conjugate vaccine (PCV) in India's NIS is given at:",
    img: null,
    options: ["A. 6, 10, 14 weeks + booster at 9 months", "B. 6 and 14 weeks + booster at 9 months (2+1 schedule)", "C. 12–15 months only", "D. Not part of NIS — IAP only"],
    answer: 1,
    explanation: "PCV13 was introduced in India's NIS from 2017 in phased manner. Schedule: 6 weeks, 14 weeks, booster at 9 months (2+1 schedule). Protects against S. pneumoniae (13 serotypes) — most common cause of bacterial pneumonia, meningitis, otitis media in children. Reduces antibiotic-resistant pneumococcal disease.",
    tags: ["PYQ"]
  },
  {
    id: "peds_imm_008",
    topic: "immunization-schedule",
    year: "FMGE Jun 2020",
    q: "The 'zero dose' vaccines given at birth in India's NIS are:",
    img: null,
    options: ["A. BCG, bOPV, Hep B", "B. BCG, DPT, OPV", "C. BCG and MMR", "D. BCG only"],
    answer: 0,
    explanation: "Birth dose (zero dose) vaccines in India's NIS: BCG (0.05 mL ID, left deltoid), bOPV (2 drops oral), and Hepatitis B (0.5 mL IM, right anterolateral thigh). All given at birth/within 24 hours. BCG given <1 month prevents miliary TB and meningitis.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ PROTEIN-ENERGY MALNUTRITION ============
  {
    id: "peds_pem_001",
    topic: "pem",
    year: "FMGE Dec 2019",
    q: "Kwashiorkor is characterized by which pathognomonic feature?",
    img: null,
    options: ["A. Muscle wasting with visible ribs", "B. Pitting edema (from hypoalbuminemia) + 'flaky paint' skin + hair changes", "C. Extreme emaciation without edema", "D. Night blindness"],
    answer: 1,
    explanation: "Kwashiorkor (protein deficiency with adequate calories): PITTING EDEMA (hypoalbuminemia), 'flaky paint' or 'crazy pavement' dermatosis, hair changes (flag sign = alternating light/dark), hepatomegaly (fatty), moon face. Marasmus (total calorie deficiency): severe wasting, no edema, old man appearance, 'skin and bones.'",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_pem_002",
    topic: "pem",
    year: "FMGE Jun 2018",
    q: "Severe Acute Malnutrition (SAM) is defined as MUAC:",
    img: null,
    options: ["A. <12.5 cm (yellow zone, MAM)", "B. <11.5 cm (red zone, SAM)", "C. <13.5 cm", "D. <10 cm only"],
    answer: 1,
    explanation: "MUAC (Mid-Upper Arm Circumference) for children 6–59 months: SAM = <11.5 cm; MAM (Moderate Acute Malnutrition) = 11.5–12.5 cm; Normal = ≥12.5 cm. W/H (weight-for-height) <-3 SD or bilateral pitting edema also = SAM. SAM with complications → inpatient treatment (F-75, F-100 therapeutic diet).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_pem_003",
    topic: "pem",
    year: "FMGE Dec 2018",
    q: "Refeeding syndrome in SAM management refers to:",
    img: null,
    options: ["A. Overfeeding calories leading to obesity", "B. Rapid reintroduction of carbohydrates → insulin surge → hypophosphatemia + hypokalemia + hypomagnesemia + cardiac/respiratory failure", "C. Diarrhea from milk feeds", "D. Bacterial overgrowth"],
    answer: 1,
    explanation: "Refeeding syndrome: occurs when severely malnourished patients are refed too rapidly. Insulin-driven cellular uptake of phosphate, potassium, magnesium → severe electrolyte deficiencies → cardiac arrhythmias, respiratory failure, muscle weakness, seizures. Prevention: start at 50% of estimated needs, increase gradually.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_pem_004",
    topic: "pem",
    year: "FMGE Jun 2019",
    q: "In SAM management, the WHO recommended initial feed is:",
    img: null,
    options: ["A. Full-calorie F-100 from day 1", "B. F-75 (75 kcal/100 mL) in stabilization phase, then F-100 in rehabilitation phase", "C. Regular cow's milk", "D. ORS only for first 24 hours"],
    answer: 1,
    explanation: "WHO SAM protocol: Stabilization phase (days 1–7): F-75 (75 kcal/100mL, low protein) — corrects metabolic instability without stressing heart. Rehabilitation phase (weeks 2–6): switch to F-100 (100 kcal/100mL, higher protein) for catch-up growth. Also: RUTF (ready-to-use therapeutic food) for uncomplicated SAM at community level.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_pem_005",
    topic: "pem",
    year: "FMGE Dec 2020",
    q: "Stunting (chronic malnutrition) is defined as:",
    img: null,
    options: ["A. Weight-for-age <-2 SD", "B. Height-for-age <-2 SD (below -2 SD from median = stunted)", "C. Weight-for-height <-2 SD (wasted)", "D. MUAC <12.5 cm"],
    answer: 1,
    explanation: "Growth faltering indicators: Stunting = Height(length)-for-age <-2 SD (chronic undernutrition). Wasting = Weight-for-height <-2 SD (acute undernutrition). Underweight = Weight-for-age <-2 SD. SAM = W/H <-3 SD or MUAC <11.5 cm or bilateral edema. India has highest prevalence of stunted children globally.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_pem_006",
    topic: "pem",
    year: "FMGE Jun 2021",
    q: "Flag sign in hair is seen in:",
    img: null,
    options: ["A. Iron deficiency anemia", "B. Kwashiorkor — alternating light (hypopigmented) and dark (normal) hair bands", "C. Rickets", "D. Pellagra"],
    answer: 1,
    explanation: "Flag sign (Signo de la bandera): alternating hypopigmented (protein-deficient) and normal (protein-adequate) bands in hair shaft — reflects episodic protein deficiency in kwashiorkor. Hair also becomes sparse, silky, easily pluckable. Similar 'banding' in nails. Specific for protein deficiency.",
    tags: ["PYQ"]
  },

  // ============ CONGENITAL HEART DISEASE ============
  {
    id: "peds_chd_001",
    topic: "chd-pediatric",
    year: "FMGE Dec 2019",
    q: "Most common congenital heart defect is:",
    img: null,
    options: ["A. ASD (atrial septal defect)", "B. VSD (ventricular septal defect — 30–35% of all CHD)", "C. TOF (Tetralogy of Fallot)", "D. PDA (patent ductus arteriosus)"],
    answer: 1,
    explanation: "VSD = most common CHD (30–35%). Most small VSDs close spontaneously. Perimembranous location most common (70%). ASD = most common CHD in adults. TOF = most common CYANOTIC CHD. PDA common in premature infants. Coarctation of aorta = upper limb hypertension + diminished lower limb pulses.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_chd_002",
    topic: "chd-pediatric",
    year: "FMGE Jun 2018",
    q: "Tetralogy of Fallot (TOF) consists of:",
    img: null,
    options: ["A. VSD + ASD + PDA + coarctation", "B. VSD + Pulmonary stenosis + Overriding aorta + Right ventricular hypertrophy", "C. ASD + PDA + Left axis deviation", "D. VSD + Transposition + Pulmonary atresia"],
    answer: 1,
    explanation: "TOF (4 components): (1) VSD, (2) Pulmonary stenosis (RVOTO), (3) Overriding aorta (dextroposition), (4) RV hypertrophy. Cyanosis from right-to-left shunt through VSD. 'Tet spells' (hypercyanotic spells): child squats to increase SVR → reduces R-to-L shunt. Treatment: propranolol (acute) + surgical repair.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_chd_003",
    topic: "chd-pediatric",
    year: "FMGE Dec 2018",
    q: "Eisenmenger syndrome occurs when:",
    img: null,
    options: ["A. Large L-to-R shunt → pulmonary hypertension → reversal to R-to-L shunt → cyanosis", "B. Small VSD causes isolated right-sided disease", "C. Pulmonary stenosis alone causes cyanosis", "D. ASD closes spontaneously"],
    answer: 0,
    explanation: "Eisenmenger syndrome: initially large L-to-R shunt (VSD>ASD>PDA) → pulmonary vascular disease from high pressure/flow → pulmonary HTN rises → equalization → R-to-L shunt reversal → cyanosis. Irreversible pulmonary vascular disease. Contraindication to surgical repair once established. Treat with targeted pulmonary vasodilators.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_chd_004",
    topic: "chd-pediatric",
    year: "FMGE Jun 2019",
    q: "Transposition of great arteries (TGA) — immediate management after birth includes:",
    img: null,
    options: ["A. Oxygen therapy and wait for natural improvement", "B. Prostaglandin E1 (PGE1) to keep PDA open for mixing of blood + urgent balloon atrial septostomy", "C. Immediate surgical switch operation", "D. Digoxin for heart failure"],
    answer: 1,
    explanation: "TGA: aorta arises from RV, pulmonary artery from LV → parallel circulations, incompatible with life unless mixing occurs. Immediate: PGE1 to keep PDA open + balloon atrial septostomy (Rashkind procedure) to improve mixing. Definitive: arterial switch operation within 2 weeks (before LV pressure drops).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_chd_005",
    topic: "chd-pediatric",
    year: "FMGE Dec 2020",
    q: "'Boot-shaped' heart on CXR is characteristic of:",
    img: null,
    options: ["A. ASD (right atrial enlargement)", "B. TOF (small pulmonary artery + upturned apex due to RVH)", "C. Ebstein's anomaly", "D. PDA"],
    answer: 1,
    explanation: "Boot-shaped (coeur en sabot) heart: TOF — RVH + small/absent main pulmonary artery segment + upturned apex = boot shape. 'Egg-on-side' heart: TGA — narrow superior mediastinum + oval heart. 'Snowman' heart: TAPVR with supracardiac connection. Box-shaped heart: Ebstein's anomaly.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_chd_006",
    topic: "chd-pediatric",
    year: "FMGE Jun 2021",
    q: "Which CHD is associated with Turner syndrome?",
    img: null,
    options: ["A. VSD", "B. Coarctation of aorta + bicuspid aortic valve", "C. TOF", "D. ASD"],
    answer: 1,
    explanation: "Turner syndrome (45, XO): Coarctation of aorta (most common CHD in Turner, ~30%) + bicuspid aortic valve. Down syndrome: ASD, VSD, AVSD (endocardial cushion defect/AV canal). Marfan: aortic root dilation, aortic dissection. Noonan syndrome: pulmonary stenosis. Williams syndrome: supravalvular AS.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_chd_007",
    topic: "chd-pediatric",
    year: "FMGE Dec 2021",
    q: "Patent ductus arteriosus (PDA) in preterm neonates is closed medically with:",
    img: null,
    options: ["A. Alprostadil (PGE1) — keeps it open", "B. Indomethacin or Ibuprofen (COX inhibitors — reduce PGE2)", "C. Furosemide alone", "D. Digoxin"],
    answer: 1,
    explanation: "PDA closure: Indomethacin (or ibuprofen) = COX inhibitor → reduces prostaglandin E2 → ductal constriction. Given within first 48–72h in preterm neonates. Contraindications: NEC, renal dysfunction, bleeding. If medical closure fails: surgical ligation. PGE1 (alprostadil) OPENS ductus (used in duct-dependent CHD).",
    tags: ["PYQ", "high-yield"]
  },

  // ============ IMNCI PROTOCOLS ============
  {
    id: "peds_imnci_001",
    topic: "imnci",
    year: "FMGE Dec 2019",
    q: "IMNCI (Integrated Management of Neonatal and Childhood Illness) age group covered:",
    img: null,
    options: ["A. 0–5 years", "B. 0–7 days (young infant protocol) and 2 months–5 years (childhood illness protocol)", "C. 5–15 years", "D. Neonates only (first 28 days)"],
    answer: 1,
    explanation: "IMNCI covers two age bands: (1) Young infant 0–7 days, (2) 2 months–5 years. Addresses major killers: pneumonia, diarrhea, malnutrition, malaria, and neonatal conditions. Uses symptom-based approach (no laboratory tests needed). Integrated into primary health care.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_imnci_002",
    topic: "imnci",
    year: "FMGE Jun 2018",
    q: "As per IMNCI, a child with cough for 2 weeks without other danger signs should be classified as:",
    img: null,
    options: ["A. Very severe disease", "B. No pneumonia: cough or cold", "C. Persistent cough — refer for TB evaluation", "D. Severe pneumonia"],
    answer: 2,
    explanation: "IMNCI: Cough ≥14 days or diarrhea ≥14 days → 'persistent problem' → refer for assessment (may be TB). Cough <14 days without fast breathing or chest indrawing = 'No pneumonia: cough or cold' (treat symptomatically). Fast breathing + no chest indrawing = Non-severe pneumonia (oral amoxicillin). Chest indrawing/danger signs = Severe pneumonia (refer).",
    tags: ["PYQ"]
  },
  {
    id: "peds_imnci_003",
    topic: "imnci",
    year: "FMGE Dec 2018",
    q: "Danger signs in a child age 2 months–5 years per IMNCI include all EXCEPT:",
    img: null,
    options: ["A. Unable to drink or breastfeed", "B. Convulsions (current or history)", "C. Unusually sleepy or unconscious", "D. Age 2 months exactly"],
    answer: 3,
    explanation: "IMNCI General Danger Signs (2m–5y): (1) Unable to drink/breastfeed, (2) Vomits everything, (3) Convulsions, (4) Unconscious/lethargic. Any danger sign = immediate referral. These signs indicate life-threatening illness requiring urgent care.",
    tags: ["PYQ"]
  },
  {
    id: "peds_imnci_004",
    topic: "imnci",
    year: "FMGE Jun 2020",
    q: "IMNCI fast breathing threshold for children aged 2–12 months is:",
    img: null,
    options: ["A. ≥50 breaths/min", "B. ≥40 breaths/min", "C. ≥60 breaths/min", "D. ≥30 breaths/min"],
    answer: 0,
    explanation: "IMNCI fast breathing cutoffs: <2 months: ≥60 breaths/min; 2–12 months: ≥50 breaths/min; 12 months–5 years: ≥40 breaths/min. Fast breathing without chest indrawing = Non-severe pneumonia → outpatient amoxicillin. Chest indrawing (lower chest wall goes in during inspiration) = Severe pneumonia.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_imnci_005",
    topic: "imnci",
    year: "FMGE Dec 2020",
    q: "Oral Rehydration Therapy (ORT) per IMNCI for mild-moderate dehydration in children uses:",
    img: null,
    options: ["A. IV fluids only", "B. ORS (50–100 mL/kg over 4h) + zinc supplementation (10–20 mg/day × 14 days)", "C. Plain water only", "D. Sugar-salt solution (SSS) home remedy"],
    answer: 1,
    explanation: "IMNCI diarrhea management: ORS 50–100 mL/kg over 4h for mild-moderate dehydration. WHO recommends low-osmolarity ORS (245 mOsm/L). Zinc supplementation: 20 mg/day for 14 days in children >6 months (10 mg/day <6 months) — reduces diarrhea severity and recurrence. Continue breastfeeding.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_imnci_006",
    topic: "imnci",
    year: "FMGE Jun 2021",
    q: "Young Infant (0–7 days) — IMNCI classify 'possible serious bacterial infection' if:",
    img: null,
    options: ["A. Only if confirmed by blood culture", "B. Any one of: convulsions, fast breathing (≥60), severe chest indrawing, umbilical redness/discharge, bulging fontanelle, fever or hypothermia", "C. If weight <2 kg only", "D. Jaundice only"],
    answer: 1,
    explanation: "Young infant (0–7 days) — IMNCI 'possible serious bacterial infection (PSBI)' if ANY: convulsions, fast breathing (≥60/min), severe chest indrawing, grunting, umbilical redness extending to skin, pus from umbilicus/skin pustules, bulging fontanelle, fever >37.5°C or hypothermia <35.5°C. Refer and give IM ampicillin+gentamicin.",
    tags: ["PYQ"]
  },

  // ============ GENETIC DISORDERS (PEDIATRICS) ============
  {
    id: "peds_gen_001",
    topic: "genetic-disorders-peds",
    year: "FMGE Dec 2019",
    q: "Down syndrome (Trisomy 21) karyotype in the most common form is:",
    img: null,
    options: ["A. 47, XY/XX, +21 (non-disjunction, 95% of cases)", "B. Translocation (14q21q) (Robertsonian translocation, 4%)", "C. Mosaic (46/47)", "D. 45 chromosomes"],
    answer: 0,
    explanation: "Down syndrome: 95% = non-disjunction (trisomy 21) → 47 chromosomes; risk increases with maternal age. 4% = Robertsonian translocation (usually inherited) — same karyotype risk regardless of maternal age. 1% = mosaicism (milder phenotype). Features: upslanting palpebral fissures, epicanthic folds, single palmar crease, hypotonia, intellectual disability.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_gen_002",
    topic: "genetic-disorders-peds",
    year: "FMGE Jun 2018",
    q: "Turner syndrome (45, XO) clinical features include all EXCEPT:",
    img: null,
    options: ["A. Short stature", "B. Webbed neck (pterygium colli)", "C. Primary amenorrhea (streak gonads)", "D. Tall stature with long limbs"],
    answer: 3,
    explanation: "Turner syndrome (45,X): Short stature, webbed neck, low posterior hairline, shield chest, widely spaced nipples, primary amenorrhea (streak ovaries), coarctation of aorta, horseshoe kidney. Tall stature + long limbs = Klinefelter/Marfan. Intelligence usually normal. Treat with GH + estrogen replacement.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_gen_003",
    topic: "genetic-disorders-peds",
    year: "FMGE Dec 2018",
    q: "Klinefelter syndrome (47, XXY) features include:",
    img: null,
    options: ["A. Short stature + primary ovarian failure", "B. Tall stature, small testes (hyalinized tubules), gynecomastia, azoospermia, elevated FSH/LH", "C. Intellectual disability in all cases", "D. Webbed neck and coarctation"],
    answer: 1,
    explanation: "Klinefelter syndrome (47, XXY): tall stature with long legs, small firm testes (hyalinization), gynecomastia, azoospermia/infertility, ↑FSH/LH, ↓testosterone. Most common sex chromosome aneuploidy in males. Usually diagnosed in adulthood during infertility evaluation. Testosterone replacement for hypogonadism.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_gen_004",
    topic: "genetic-disorders-peds",
    year: "FMGE Jun 2020",
    q: "Autosomal dominant condition with variable expression and anticipation is:",
    img: null,
    options: ["A. Cystic fibrosis", "B. Fragile X syndrome", "C. Phenylketonuria", "D. Tay-Sachs disease"],
    answer: 1,
    explanation: "Fragile X syndrome: X-linked dominant, trinucleotide repeat expansion (CGG in FMR1 gene). ANTICIPATION = worsens with each generation (premutation → full mutation). Most common inherited cause of intellectual disability in males. Features: large ears, long face, macro-orchidism, autism spectrum disorder.",
    tags: ["PYQ"]
  },
  {
    id: "peds_gen_005",
    topic: "genetic-disorders-peds",
    year: "FMGE Dec 2020",
    q: "Phenylketonuria (PKU) is screened at birth because:",
    img: null,
    options: ["A. It is clinically obvious at birth", "B. Early phenylalanine-restricted diet prevents intellectual disability (newborn screening with Guthrie test/tandem MS)", "C. Treatment is only effective if started after 2 years", "D. No treatment exists"],
    answer: 1,
    explanation: "PKU: autosomal recessive, PAH (phenylalanine hydroxylase) deficiency → phenylalanine accumulates → brain damage. Normal at birth (maternal enzyme protects). Guthrie test (bacterial inhibition assay) or tandem mass spectrometry for newborn screening at 72h–7 days. Early phenylalanine-restricted diet → normal development.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_gen_006",
    topic: "genetic-disorders-peds",
    year: "FMGE Jun 2021",
    q: "Most common cause of congenital hypothyroidism is:",
    img: null,
    options: ["A. TSH receptor mutation", "B. Thyroid dysgenesis (agenesis or ectopic thyroid, 85% of cases)", "C. Iodine deficiency in mother", "D. Thyroid peroxidase deficiency"],
    answer: 1,
    explanation: "Congenital hypothyroidism: most common cause = thyroid dysgenesis (aplasia, hypoplasia, or ectopic thyroid). Iodine deficiency = most common GLOBAL cause. Features if untreated: cretinism (intellectual disability, short stature, umbilical hernia, coarse facies, macroglossia). Newborn screening (TSH/T4) at day 3–5 enables early L-thyroxine treatment.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ KAWASAKI DISEASE ============
  {
    id: "peds_kaw_001",
    topic: "kawasaki",
    year: "FMGE Dec 2019",
    q: "Diagnostic criteria for Kawasaki disease require fever ≥5 days plus at least 4 of which features?",
    img: null,
    options: ["A. Rash, cervical lymphadenopathy, conjunctivitis, oral changes, hand/foot changes", "B. Fever + jaundice + lymphadenopathy + hepatomegaly", "C. Arthritis + rash + elevated CRP alone", "D. Only fever for 5 days required"],
    answer: 0,
    explanation: "Kawasaki disease diagnostic criteria: fever ≥5 days + ≥4 of: (1) Bilateral non-purulent conjunctivitis, (2) Erythema of lips/oral mucosa (strawberry tongue), (3) Polymorphous rash, (4) Hand/foot changes (acute: erythema/edema; subacute: periungual desquamation), (5) Cervical lymphadenopathy (≥1.5 cm). Most common cause of acquired heart disease in children in developed countries.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_kaw_002",
    topic: "kawasaki",
    year: "FMGE Jun 2018",
    q: "The most feared complication of Kawasaki disease is:",
    img: null,
    options: ["A. Renal failure", "B. Coronary artery aneurysm (CAA)", "C. Hepatitis", "D. Meningitis"],
    answer: 1,
    explanation: "Coronary artery aneurysm (CAA) occurs in 20–25% untreated Kawasaki disease → risk of MI, sudden death. Reduced to <5% with early IVIG treatment. Giant CAA (>8 mm) = highest risk. Echo at diagnosis and follow-up. IVIG 2 g/kg single dose + aspirin = first-line treatment.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_kaw_003",
    topic: "kawasaki",
    year: "FMGE Dec 2020",
    q: "Treatment of acute Kawasaki disease is:",
    img: null,
    options: ["A. Antibiotics + steroids", "B. IVIG (2 g/kg over 10–12 hours) + high-dose aspirin", "C. Steroid pulse therapy alone", "D. Antipyretics only"],
    answer: 1,
    explanation: "Kawasaki disease treatment: IVIG 2 g/kg single infusion + aspirin. Acute phase: high-dose aspirin (80–100 mg/kg/day in 4 doses for anti-inflammatory effect). Afebrile for ≥48h: reduce to low-dose aspirin (3–5 mg/kg/day) for antiplatelet effect. Continue low-dose aspirin for 6–8 weeks (longer if CAA persists). IVIG-resistant cases: steroids or infliximab.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_kaw_004",
    topic: "kawasaki",
    year: "FMGE Jun 2021",
    q: "Kawasaki-like multisystem inflammatory syndrome in children (MIS-C) is associated with:",
    img: null,
    options: ["A. Influenza virus", "B. SARS-CoV-2 (COVID-19) — post-infectious immune-mediated", "C. Group A Streptococcus", "D. Dengue virus"],
    answer: 1,
    explanation: "MIS-C (Multisystem Inflammatory Syndrome in Children): post-COVID-19 immune-mediated condition (typically 2–6 weeks after SARS-CoV-2 infection). Features overlap with Kawasaki (fever, rash, conjunctivitis, mucous membrane changes) + GI symptoms + cardiac involvement. Treatment: IVIG + aspirin ± steroids.",
    tags: ["PYQ"]
  },
  {
    id: "peds_kaw_005",
    topic: "kawasaki",
    year: "FMGE Dec 2021",
    q: "Kawasaki disease most commonly affects children of which age group?",
    img: null,
    options: ["A. Neonates (<1 month)", "B. Under 5 years (peak 1–2 years)", "C. School age (6–12 years)", "D. Adolescents"],
    answer: 1,
    explanation: "Kawasaki disease peaks in children under 5 years (80% of cases), peak at 1–2 years. Rare in infants <3 months and older children/adults. More common in boys (male:female = 1.5:1) and in East Asian populations (Japan highest incidence). Etiology unknown (postulated infectious trigger in genetically susceptible).",
    tags: ["PYQ"]
  },

  // ============ FEBRILE SEIZURES ============
  {
    id: "peds_fs_001",
    topic: "febrile-seizures",
    year: "FMGE Dec 2019",
    q: "Simple febrile seizure is defined as:",
    img: null,
    options: ["A. Focal seizure lasting >15 minutes in a febrile child", "B. Generalized, <15 minutes, single episode in 24h, in a child 6 months–6 years with NO CNS infection", "C. Seizure occurring without fever", "D. Seizure in neonate with temperature >38°C"],
    answer: 1,
    explanation: "Simple febrile seizure: (1) generalized (not focal), (2) duration <15 minutes, (3) single episode in 24 hours, (4) age 6 months–6 years, (5) associated with fever (>38°C), (6) no CNS infection or metabolic cause. Complex febrile seizure: focal OR >15 min OR recurs within 24h. Risk of epilepsy: simple = 1%; complex = 5–10%.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_fs_002",
    topic: "febrile-seizures",
    year: "FMGE Jun 2018",
    q: "The best treatment for acute febrile seizure in a child at home is:",
    img: null,
    options: ["A. Phenobarbital immediately", "B. Diazepam rectal/nasal + cooling + bring to hospital", "C. Paracetamol alone", "D. Withhold all treatment until reaching hospital"],
    answer: 1,
    explanation: "Acute management: Protect airway, place in recovery position. Diazepam rectal (0.5 mg/kg) or intranasal midazolam (0.2 mg/kg) at home if seizure >5 minutes. Fever control with paracetamol/ibuprofen. Hospitalize if first febrile seizure, complex features, or parental concern. LP to rule out meningitis if <12–18 months, post-ictal state, meningeal signs.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_fs_003",
    topic: "febrile-seizures",
    year: "FMGE Dec 2020",
    q: "Risk of recurrence of febrile seizures is highest if:",
    img: null,
    options: ["A. Child is >4 years at first episode", "B. First episode at age <12 months, family history of FS, lower peak temperature, quick onset after fever", "C. Seizure duration >10 minutes", "D. Child is fully vaccinated"],
    answer: 1,
    explanation: "Risk factors for febrile seizure recurrence: age <12 months at first episode, family history of febrile seizures, lower temperature at time of first FS, short duration between fever onset and seizure. Overall recurrence rate: 30–40%. Does NOT justify long-term anticonvulsant therapy unless multiple complex FS.",
    tags: ["PYQ"]
  },
  {
    id: "peds_fs_004",
    topic: "febrile-seizures",
    year: "FMGE Jun 2021",
    q: "Most common cause of febrile convulsions in children is:",
    img: null,
    options: ["A. Intracranial infections", "B. Upper respiratory tract infections (viral — most common trigger)", "C. Urinary tract infections only", "D. Pneumonia"],
    answer: 1,
    explanation: "Most common cause of febrile seizures: viral URTI (most common febrile illness in children triggering FS). Roseola infantum (HHV-6) is classically associated with febrile seizures. Influenza, adenovirus, RSV also associated. The seizure is triggered by the rapid rise in temperature, not by the height of fever.",
    tags: ["PYQ"]
  },
  {
    id: "peds_fs_005",
    topic: "febrile-seizures",
    year: "FMGE Dec 2021",
    q: "Lumbar puncture is mandatory after febrile seizure in children below which age?",
    img: null,
    options: ["A. Below 6 months", "B. Below 12–18 months (per AAP guidelines)", "C. Below 5 years always", "D. Only if focal seizure"],
    answer: 1,
    explanation: "AAP guidelines: LP should be strongly considered in children <12–18 months after first febrile seizure (meningeal signs may be absent at this age, fever source may be unclear). LP recommended if: meningeal signs, prolonged post-ictal state, immunocompromised, incomplete vaccination (Hib, PCV). Not routinely needed in simple FS in older children.",
    tags: ["PYQ"]
  },

  // ============ PEDIATRIC INFECTIONS ============
  {
    id: "peds_inf_001",
    topic: "pediatric-infections",
    year: "FMGE Dec 2019",
    q: "Koplik spots in measles appear:",
    img: null,
    options: ["A. After the rash appears", "B. 2–4 days before the maculopapular rash (prodromal phase) — on buccal mucosa opposite lower molars", "C. At the same time as the rash", "D. On the skin, not mucous membranes"],
    answer: 1,
    explanation: "Koplik spots: pathognomonic of measles — white/gray granular spots on bright red buccal mucosa (opposite lower molars), appear in prodromal phase 2–4 days before maculopapular rash. Rash starts on face/forehead → spreads downward (cephalocaudal). Prodrome: 3 C's (Cough, Coryza, Conjunctivitis) + fever.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_inf_002",
    topic: "pediatric-infections",
    year: "FMGE Jun 2018",
    q: "The most common cause of croup (laryngotracheobronchitis) is:",
    img: null,
    options: ["A. H. influenzae type b", "B. Parainfluenza virus type 1 and 3", "C. RSV (respiratory syncytial virus)", "D. Adenovirus"],
    answer: 1,
    explanation: "Croup (LTB): most common cause = Parainfluenza virus (types 1 and 3). Barking cough (seal-like), stridor (inspiratory), low-grade fever. 'Steeple sign' on AP neck X-ray (subglottic narrowing). Treat: cool mist/humidity, nebulized epinephrine (severe), dexamethasone. Epiglottitis (H. influenzae b) = 'thumbprint sign' on lateral neck X-ray.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_inf_003",
    topic: "pediatric-infections",
    year: "FMGE Dec 2018",
    q: "Roseola infantum (Exanthem subitum) is caused by:",
    img: null,
    options: ["A. Measles virus", "B. Human herpesvirus 6 (HHV-6)", "C. Varicella-zoster virus", "D. Rubella virus"],
    answer: 1,
    explanation: "Roseola infantum (6th disease, Exanthem subitum): HHV-6 (HHV-7 less common). Classic: 3–5 days of high fever → abrupt defervescence → rose-pink maculopapular rash appears (trunk → spreads peripherally). Nagayama spots (soft palate/uvula). Most common cause of febrile convulsions in children 6–24 months.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_inf_004",
    topic: "pediatric-infections",
    year: "FMGE Jun 2019",
    q: "RSV (Respiratory Syncytial Virus) most commonly causes which illness in infants?",
    img: null,
    options: ["A. Croup", "B. Bronchiolitis (most common cause in infants <2 years)", "C. Epiglottitis", "D. Bacterial pneumonia"],
    answer: 1,
    explanation: "RSV is the most common cause of bronchiolitis in infants <2 years (peak: winter months). Features: wheeze, hyperinflation, low-grade fever, bilateral crackles. Diagnosis: nasopharyngeal swab rapid antigen test. Treatment: supportive (oxygen, fluids). Palivizumab (monoclonal Ab) = prophylaxis for high-risk preterm infants.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_inf_005",
    topic: "pediatric-infections",
    year: "FMGE Dec 2020",
    q: "Erythema infectiosum (Fifth disease) — the characteristic finding is:",
    img: null,
    options: ["A. Koplik spots", "B. 'Slapped cheek' rash (bright red facial erythema) + lacy reticular rash on trunk and limbs — Parvovirus B19", "C. Vesicular rash in crops", "D. Petechial rash"],
    answer: 1,
    explanation: "Fifth disease (Erythema infectiosum): Parvovirus B19. Characteristic 'slapped cheek' appearance (bright erythema on cheeks) + lacy reticular rash on trunk/limbs. Prodrome: low-grade fever, headache. Dangerous in: sickle cell/hemolytic anemia → aplastic crisis; pregnant women → hydrops fetalis. Adults: arthropathy.",
    tags: ["PYQ"]
  },
  {
    id: "peds_inf_006",
    topic: "pediatric-infections",
    year: "FMGE Jun 2021",
    q: "Pertussis (whooping cough) — the whoop occurs during which phase?",
    img: null,
    options: ["A. Catarrhal phase (1–2 weeks)", "B. Paroxysmal phase (weeks 2–6) — paroxysmal coughing fits followed by inspiratory whoop", "C. Convalescent phase", "D. Incubation period"],
    answer: 1,
    explanation: "Pertussis (Bordetella pertussis): Catarrhal (coryza, mild cough, 1–2 weeks) → Paroxysmal (severe coughing paroxysms → WHOOP on inspiration, post-cough vomiting, cyanosis, 2–6 weeks) → Convalescent (gradual resolution). Most dangerous in infants <6 months: apnea instead of whoop. Pertussis toxin → lymphocytosis.",
    tags: ["PYQ", "high-yield"]
  },

  // ============ FLUIDS & ELECTROLYTES (PEDS) ============
  {
    id: "peds_fl_001",
    topic: "peds-fluids",
    year: "FMGE Dec 2019",
    q: "Daily maintenance fluid requirement for a 15 kg child (Holliday-Segar method):",
    img: null,
    options: ["A. 1500 mL/day", "B. 1250 mL/day", "C. 1000 mL/day", "D. 750 mL/day"],
    answer: 1,
    explanation: "Holliday-Segar method: First 10 kg = 100 mL/kg/day (10×100=1000). Next 10 kg = 50 mL/kg/day. >20 kg = 20 mL/kg/day. For 15 kg: 1000 + (5×50) = 1000 + 250 = 1250 mL/day. Alternate: '4-2-1' rule in mL/hour: first 10 kg = 4 mL/kg/h, next 10 = 2 mL/kg/h, >20 = 1 mL/kg/h.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_fl_002",
    topic: "peds-fluids",
    year: "FMGE Jun 2018",
    q: "WHO oral rehydration solution (ORS) composition (low osmolarity):",
    img: null,
    options: ["A. 90 mmol/L sodium, 20 g/L glucose", "B. 75 mmol/L sodium, 13.5 g/L glucose, total osmolarity 245 mOsm/L", "C. 90 mmol/L sodium, 111 mmol/L glucose (WHO-ORS original)", "D. 50 mmol/L sodium only"],
    answer: 1,
    explanation: "Low-osmolarity ORS (WHO/UNICEF 2003): Na 75 mmol/L, Cl 65 mmol/L, K 20 mmol/L, citrate 10 mmol/L, glucose 75 mmol/L (13.5 g/L), total osmolarity 245 mOsm/L. Preferred over original ORS (311 mOsm/L) — reduces stool output, vomiting, and IV fluid needs. Original ORS: Na 90 mmol/L.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_fl_003",
    topic: "peds-fluids",
    year: "FMGE Dec 2018",
    q: "Signs of severe dehydration in a child include:",
    img: null,
    options: ["A. Tears present, mouth moist, normal skin turgor", "B. Sunken eyes, absent tears, sunken fontanelle, very poor skin turgor (skin pinch returns slowly/stays), lethargy, >10% fluid deficit", "C. Mild thirst only", "D. Increased urine output"],
    answer: 1,
    explanation: "WHO dehydration assessment: No dehydration (<5% deficit): normal. Some dehydration (5–10%): restless, thirsty, sunken eyes, reduced skin turgor (2-second pinch), dry mouth, reduced tears. Severe dehydration (>10%): above + lethargic/unconscious, very sunken fontanelle, skin pinch >2 seconds ('goes back slowly'), no urine. IV/IO rehydration needed urgently.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_fl_004",
    topic: "peds-fluids",
    year: "FMGE Jun 2020",
    q: "Hypernatremic dehydration (serum Na >150 mEq/L) should be corrected:",
    img: null,
    options: ["A. As fast as possible — rapid IV normal saline", "B. Slowly over 48–72 hours (reduce Na by <10–12 mEq/L per 24h) to prevent cerebral edema", "C. With hypotonic fluids immediately", "D. No treatment needed if child is alert"],
    answer: 1,
    explanation: "Hypernatremic dehydration (Na >150): brain cells equilibrate by generating organic osmoles (idiogenic osmoles) to prevent shrinkage. Rapid correction → osmoles persist → water moves into brain → cerebral edema → seizures, herniation. Correct SLOWLY: 48–72 hours, reduce Na no faster than 10–12 mEq/L/24h. Use isotonic or slightly hypotonic fluids.",
    tags: ["PYQ"]
  },
  {
    id: "peds_fl_005",
    topic: "peds-fluids",
    year: "FMGE Dec 2021",
    q: "In pediatric septic shock, initial fluid resuscitation is:",
    img: null,
    options: ["A. 20 mL/kg NS IV bolus over 5–10 min (reassess after each bolus)", "B. 40 mL/kg over 2 hours", "C. Oral ORS only", "D. No fluids if BP is measurable"],
    answer: 0,
    explanation: "Pediatric septic shock (Surviving Sepsis Campaign): IV/IO fluid bolus 20 mL/kg over 5–10 minutes. Reassess after each bolus (HR, BP, perfusion, breath sounds). Repeat boluses up to 60 mL/kg in 1st hour if needed. FEAST trial (Africa) showed too much fluid can be harmful. Start vasopressors (norepinephrine) if unresponsive to fluids.",
    tags: ["PYQ"]
  },

  // ============ WILMS TUMOR & NEUROBLASTOMA ============
  {
    id: "peds_wt_001",
    topic: "wilms-neuroblastoma",
    year: "FMGE Dec 2019",
    q: "Wilms tumor (nephroblastoma) is most commonly diagnosed at age:",
    img: null,
    options: ["A. First year of life", "B. 3–4 years", "C. Adolescence", "D. Neonatal period"],
    answer: 1,
    explanation: "Wilms tumor: most common renal tumor of childhood, peak age 3–4 years. Presents with asymptomatic abdominal mass (most common), hypertension, hematuria. Associated syndromes: WAGR (Wilms+Aniridia+GU anomalies+intellectual disability — WT1 deletion), Beckwith-Wiedemann (WT2), Denys-Drash. Treatment: surgery + chemo (actinomycin D + vincristine) ± radiation. Excellent prognosis.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_wt_002",
    topic: "wilms-neuroblastoma",
    year: "FMGE Jun 2018",
    q: "Neuroblastoma arises from:",
    img: null,
    options: ["A. Kidney embryonic remnants", "B. Neural crest cells (sympathetic nervous system — adrenal medulla most common)", "C. Liver progenitor cells", "D. Lymph nodes"],
    answer: 1,
    explanation: "Neuroblastoma: most common extracranial solid tumor in children, arises from neural crest cells of sympathetic nervous system. Most common site: adrenal medulla (50%). Others: sympathetic chain (thorax, neck, pelvis). Elevated urinary catecholamines (VMA, HVA). N-MYC amplification = poor prognosis. MIBG scan for staging. Homer-Wright rosettes on histology.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_wt_003",
    topic: "wilms-neuroblastoma",
    year: "FMGE Dec 2020",
    q: "Raccoon eyes (periorbital ecchymosis) are classic sign of:",
    img: null,
    options: ["A. Wilms tumor", "B. Neuroblastoma with orbital metastases", "C. Acute lymphoblastic leukemia", "D. Retinoblastoma"],
    answer: 1,
    explanation: "Raccoon eyes (bilateral periorbital ecchymosis = 'panda eyes'): pathognomonic of orbital/periorbital neuroblastoma metastases. Also: subcutaneous blueberry-muffin nodules, opsoclonus-myoclonus syndrome (cerebellar encephalopathy), heterochromia, Horner syndrome. VMA/HVA in urine = diagnostic marker.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_wt_004",
    topic: "wilms-neuroblastoma",
    year: "FMGE Jun 2019",
    q: "Retinoblastoma in a child presents most commonly as:",
    img: null,
    options: ["A. Bilateral eye pain", "B. Leukocoria (white pupillary reflex/'cat's eye reflex')", "C. Sudden visual loss only", "D. Proptosis"],
    answer: 1,
    explanation: "Retinoblastoma (most common intraocular malignancy of childhood): presents with leukocoria (white pupillary reflex on photo) in 60%, strabismus, reduced vision. Average age: 18 months. Bilateral (40%) = hereditary (RB1 mutation). Unilateral = usually sporadic. Flexner-Wintersteiner rosettes on histology.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_wt_005",
    topic: "wilms-neuroblastoma",
    year: "FMGE Dec 2021",
    q: "Hepatoblastoma — elevated marker is:",
    img: null,
    options: ["A. CEA", "B. AFP (alpha-fetoprotein) — markedly elevated", "C. CA-125", "D. LDH only"],
    answer: 1,
    explanation: "Hepatoblastoma: most common hepatic malignancy in children <3 years. Markedly elevated AFP (often >100,000 ng/mL). Associated with Beckwith-Wiedemann syndrome, familial adenomatous polyposis (APC mutation), extreme prematurity. Treatment: surgical resection + cisplatin-based chemotherapy. AFP levels correlate with treatment response.",
    tags: ["PYQ"]
  },

  // ============ PEDIATRIC LEUKEMIA (ALL) ============
  {
    id: "peds_leu_001",
    topic: "pediatric-leukemia",
    year: "FMGE Dec 2019",
    q: "Most common malignancy in children is:",
    img: null,
    options: ["A. Wilms tumor", "B. Acute lymphoblastic leukemia (ALL)", "C. Neuroblastoma", "D. Brain tumor"],
    answer: 1,
    explanation: "ALL is the most common malignancy in children (25–30% of all pediatric cancers), peak age 2–5 years. B-cell ALL most common (85%). Features: anemia (pallor, fatigue), thrombocytopenia (petechiae), neutropenia (infections), bone pain, lymphadenopathy, hepatosplenomegaly, mediastinal mass (T-ALL). CNS involvement: headache, cranial nerve palsies.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_leu_002",
    topic: "pediatric-leukemia",
    year: "FMGE Jun 2018",
    q: "Best prognosis in pediatric ALL is associated with:",
    img: null,
    options: ["A. Age <1 year (infant ALL — worst)", "B. Age 1–9 years, WBC <50,000/μL, hyperdiploidy, t(12;21) ETV6-RUNX1", "C. T-cell ALL", "D. Philadelphia chromosome-positive ALL (Ph+ ALL)"],
    answer: 1,
    explanation: "Favorable prognostic factors in pediatric ALL: age 1–9 years, WBC <50,000/μL at diagnosis, B-cell precursor type, hyperdiploidy (>50 chromosomes), t(12;21)/ETV6-RUNX1 fusion (~25% B-ALL, best prognosis). Poor prognosis: infant ALL, Ph+, MLL rearrangement, hypodiploidy, T-ALL, WBC >100,000, CNS involvement.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_leu_003",
    topic: "pediatric-leukemia",
    year: "FMGE Dec 2020",
    q: "Central nervous system (CNS) prophylaxis in pediatric ALL is important because:",
    img: null,
    options: ["A. ALL never spreads to CNS", "B. CNS is a sanctuary site where chemotherapy poorly penetrates — intrathecal methotrexate prevents CNS relapse", "C. All standard chemotherapy drugs penetrate CNS effectively", "D. CNS prophylaxis is no longer needed with modern drugs"],
    answer: 1,
    explanation: "CNS sanctuary site: many systemic chemotherapy agents poorly penetrate blood-brain barrier. Without CNS-directed therapy, >50% ALL would relapse in CNS. CNS prophylaxis: intrathecal methotrexate ± intrathecal cytarabine, sometimes cranial radiation (high-risk). Triple intrathecal therapy (MTX + AraC + hydrocortisone) used in modern protocols.",
    tags: ["PYQ"]
  },
  {
    id: "peds_leu_004",
    topic: "pediatric-leukemia",
    year: "FMGE Jun 2021",
    q: "5-year survival rate for standard-risk childhood ALL with modern therapy is approximately:",
    img: null,
    options: ["A. 20–30%", "B. 50%", "C. >90%", "D. 70%"],
    answer: 2,
    explanation: "Pediatric ALL overall 5-year survival: >90% in high-income countries (one of the great successes of oncology). Standard-risk B-ALL: >95% event-free survival. Risk stratification guides therapy intensity. Treatment duration: 2–3 years (induction → consolidation → maintenance). Outcome in India: 60–70% due to treatment abandonment and infections.",
    tags: ["PYQ"]
  },
  {
    id: "peds_leu_005",
    topic: "pediatric-leukemia",
    year: "FMGE Dec 2021",
    q: "Down syndrome (trisomy 21) has increased risk of:",
    img: null,
    options: ["A. Wilms tumor only", "B. Acute leukemia (ALL and AML — especially AMKL/AML M7)", "C. Neuroblastoma", "D. No increased cancer risk"],
    answer: 1,
    explanation: "Down syndrome: 20× increased risk of acute leukemia. Risk of ALL increased. Transient Myeloproliferative Disorder (TMD/TAM) in neonates with Down syndrome → usually resolves. GATA1 mutation (somatic) in blasts → progression to AML M7 (megakaryoblastic) in 20–30% of TMD cases by age 4 years. Treated with low-dose cytarabine.",
    tags: ["PYQ"]
  },


  // ============ RESPIRATORY DISTRESS SYNDROME (RDS) ============
  {
    id: "ped_rds_001",
    topic: "rds",
    year: "FMGE Dec 2019",
    q: "Respiratory Distress Syndrome (IRDS) in neonates is due to deficiency of:",
    img: null,
    options: ["A. Immunoglobulin G", "B. Pulmonary surfactant (lecithin)", "C. Thyroid hormone", "D. Clotting factors"],
    answer: 1,
    explanation: "Surfactant (mainly dipalmitoylphosphatidylcholine) reduces alveolar surface tension; deficient in preterm neonates <34 weeks.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "ped_rds_002",
    topic: "rds",
    year: "FMGE Jun 2018",
    q: "Lecithin/sphingomyelin (L/S) ratio indicating fetal lung maturity is:",
    img: null,
    options: ["A. ≥1.0", "B. ≥2.0", "C. ≥0.5", "D. ≥3.0"],
    answer: 1,
    explanation: "L/S ratio ≥2.0 in amniotic fluid suggests adequate surfactant and lung maturity.",
    tags: ["PYQ"]
  },
  {
    id: "ped_rds_003",
    topic: "rds",
    year: "FMGE Dec 2018",
    q: "Antenatal corticosteroids (betamethasone) are given in preterm labour to:",
    img: null,
    options: ["A. Prevent infection", "B. Accelerate fetal lung maturity (surfactant production)", "C. Reduce maternal blood pressure", "D. Prevent neonatal jaundice"],
    answer: 1,
    explanation: "Steroids induce type II pneumocyte maturation and surfactant synthesis, reducing severity of RDS.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "ped_rds_004",
    topic: "rds",
    year: "FMGE Jun 2019",
    q: "Classic chest X-ray finding in neonatal RDS is:",
    img: null,
    options: ["A. Hyperinflation with flattened diaphragm", "B. Ground-glass opacification with air bronchograms", "C. Cardiomegaly only", "D. Unilateral consolidation"],
    answer: 1,
    explanation: "Diffuse ground-glass haziness with air bronchograms ('white-out') due to atelectasis is characteristic.",
    tags: ["PYQ"]
  },
  {
    id: "ped_rds_005",
    topic: "rds",
    year: "FMGE Dec 2020",
    q: "Treatment of choice for established neonatal RDS is:",
    img: null,
    options: ["A. Systemic steroids alone", "B. Exogenous surfactant replacement therapy (intratracheal)", "C. Antibiotics", "D. Oxygen by mask alone"],
    answer: 1,
    explanation: "Poractant alfa or calfactant given intratracheally reduces mortality and morbidity significantly.",
    tags: ["PYQ", "high-yield"]
  },


  {
    id: "peds_nrp_007",
    topic: "nrp",
    year: "FMGE Dec 2022",
    q: "Heart rate threshold for initiating chest compressions in NRP is:",
    img: null,
    options: ["A. HR <60 despite 30 seconds of effective PPV", "B. HR <100 at birth", "C. HR <80 despite oxygen", "D. HR <60 at birth immediately"],
    answer: 0,
    explanation: "If HR remains <60 bpm after 30 seconds of adequate positive pressure ventilation, chest compressions are started at 3:1 (compressions:breaths).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_nrp_008",
    topic: "nrp",
    year: "FMGE Jun 2022",
    q: "Epinephrine dose in neonatal resuscitation via endotracheal route is:",
    img: null,
    options: ["A. 0.05-0.1 mg/kg (ET route; IV preferred at 0.01-0.03 mg/kg)", "B. 0.01 mg/kg IV only", "C. 1 mg flat dose ET", "D. 0.5 mg/kg IV"],
    answer: 0,
    explanation: "IV/IO epinephrine (1:10,000) is preferred at 0.01–0.03 mg/kg; if ET given, higher dose 0.05–0.1 mg/kg is used.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_nrp_009",
    topic: "nrp",
    year: "FMGE Dec 2021",
    q: "Compression:ventilation ratio during CPR in neonates is:",
    img: null,
    options: ["A. 3:1 (90 compressions + 30 breaths = 120 events/min)", "B. 15:2", "C. 30:2", "D. 5:1"],
    answer: 0,
    explanation: "Neonatal resuscitation uses 3:1 ratio (3 compressions, 1 breath, repeat) giving 90 compressions and 30 breaths per minute.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_nrp_010",
    topic: "nrp",
    year: "FMGE Jun 2021",
    q: "Recommended initial FiO2 for PPV in term neonates (NRP) is:",
    img: null,
    options: ["A. Room air (21% O2)", "B. 100% O2", "C. 40% O2", "D. 60% O2"],
    answer: 0,
    explanation: "Current NRP guidelines recommend starting PPV with room air (21%) for term infants; titrate with pulse oximetry.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_jaund_008",
    topic: "neonatal-jaundice",
    year: "FMGE Dec 2022",
    q: "Phototherapy works by converting unconjugated bilirubin to:",
    img: null,
    options: ["A. Water-soluble isomers (lumirubin) excreted without conjugation", "B. Conjugated bilirubin via liver", "C. Biliverdin only", "D. Stercobilin"],
    answer: 0,
    explanation: "Blue-green light (430-490 nm) converts bilirubin to lumirubin and photo-isomers that are excreted in bile and urine without hepatic conjugation.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_jaund_009",
    topic: "neonatal-jaundice",
    year: "FMGE Jun 2022",
    q: "Exchange transfusion in neonatal jaundice replaces approximately what percentage of the neonate's blood?",
    img: null,
    options: ["A. ~85% (double-volume exchange using 2× blood volume)", "B. ~50% single volume", "C. 100% complete replacement", "D. 30% only"],
    answer: 0,
    explanation: "Double-volume exchange transfusion (2 × 80 mL/kg = 160 mL/kg) replaces approximately 85% of circulating RBCs and bilirubin.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_jaund_010",
    topic: "neonatal-jaundice",
    year: "FMGE Dec 2021",
    q: "Breast milk jaundice peaks at:",
    img: null,
    options: ["A. 2nd week of life and resolves by 4-12 weeks if breastfeeding continues", "B. Day 2-3 like physiological jaundice", "C. First 24 hours", "D. After 3 months"],
    answer: 0,
    explanation: "Breast milk jaundice is caused by beta-glucuronidase in breast milk increasing enterohepatic circulation; peaks 2nd week, self-resolving.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_dev_009",
    topic: "development-milestones",
    year: "FMGE Dec 2022",
    q: "Age at which a child can draw a triangle (copying a geometric figure) is:",
    img: null,
    options: ["A. 5 years", "B. 3 years", "C. 4 years", "D. 6 years"],
    answer: 0,
    explanation: "Developmental drawing milestones: circle (3 yr), cross (4 yr), triangle (5 yr), diamond (6 yr).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_dev_010",
    topic: "development-milestones",
    year: "FMGE Jun 2022",
    q: "Social smile (non-specific smile to face) first appears at:",
    img: null,
    options: ["A. 6 weeks (1.5 months)", "B. 1 month", "C. 3 months", "D. 4 months"],
    answer: 0,
    explanation: "Social smile to a face or voice appears at ~6 weeks; by 3 months the infant smiles broadly at familiar faces.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_imm_009",
    topic: "immunization-schedule",
    year: "FMGE Dec 2022",
    q: "BCG vaccine is given at birth to prevent severe forms of TB because:",
    img: null,
    options: ["A. It protects against miliary TB and TB meningitis in infants (~80% efficacy)", "B. It prevents pulmonary TB in adults equally", "C. It provides lifelong protection without boosters", "D. It reduces tuberculin skin test reactivity only"],
    answer: 0,
    explanation: "BCG given at birth has high efficacy (~80%) against haematogenous disseminated TB (miliary, meningitis) in infants.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_imm_010",
    topic: "immunization-schedule",
    year: "FMGE Jun 2022",
    q: "Under India's UIP, Japanese Encephalitis vaccine is given in endemic districts at age:",
    img: null,
    options: ["A. 9 months and 16-24 months", "B. 6 weeks", "C. Birth only", "D. 5 years only"],
    answer: 0,
    explanation: "JE vaccine (SA 14-14-2 live attenuated) is given in UIP at 9 months with a booster at 16-24 months in endemic areas.",
    tags: ["PYQ", "high-yield"]
  },

  {
    id: "peds_sep_006",
    topic: "neonatal-sepsis",
    year: "FMGE Dec 2022",
    q: "Most common organism causing early-onset neonatal sepsis (< 72 hours) is:",
    img: null,
    options: ["A. Group B Streptococcus (GBS)", "B. Klebsiella pneumoniae", "C. E. coli only", "D. Staphylococcus aureus"],
    answer: 0,
    explanation: "GBS (Streptococcus agalactiae) is the leading cause of early-onset sepsis globally; E. coli is the second most common.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_sep_007",
    topic: "neonatal-sepsis",
    year: "FMGE Jun 2022",
    q: "Most common organism causing late-onset neonatal sepsis (>72 hours) in India is:",
    img: null,
    options: ["A. Klebsiella pneumoniae", "B. GBS", "C. Listeria monocytogenes", "D. Enterococcus"],
    answer: 0,
    explanation: "In developing countries including India, Klebsiella pneumoniae (nosocomial, often ESBL-producing) is the leading cause of late-onset neonatal sepsis.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_sep_008",
    topic: "neonatal-sepsis",
    year: "FMGE Dec 2021",
    q: "Best single screening marker for neonatal sepsis is:",
    img: null,
    options: ["A. C-reactive protein (CRP) — serial measurements are most useful", "B. Total WBC count alone", "C. Blood culture (diagnostic but not screening)", "D. Procalcitonin alone"],
    answer: 0,
    explanation: "Serial CRP (>10 mg/L) has high sensitivity; procalcitonin rises earlier but serial CRP is the most practical marker.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_sep_009",
    topic: "neonatal-sepsis",
    year: "FMGE Jun 2021",
    q: "Gold standard for diagnosis of neonatal sepsis is:",
    img: null,
    options: ["A. Blood culture", "B. CRP >10 mg/L", "C. WBC <5000/mm³", "D. Immature:total neutrophil ratio >0.2"],
    answer: 0,
    explanation: "Blood culture remains the gold standard; minimum 1 mL blood in aerobic bottles required for adequate sensitivity.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_sep_010",
    topic: "neonatal-sepsis",
    year: "FMGE Dec 2020",
    q: "Empirical antibiotic regimen for early-onset neonatal sepsis is:",
    img: null,
    options: ["A. Ampicillin + gentamicin", "B. Cefotaxime + metronidazole", "C. Vancomycin + meropenem", "D. Piperacillin-tazobactam alone"],
    answer: 0,
    explanation: "Ampicillin (covers GBS, Listeria) + gentamicin (synergy, Gram-negatives) is the standard empirical regimen for early-onset neonatal sepsis.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_pem_007",
    topic: "pem",
    year: "FMGE Dec 2022",
    q: "Flaky paint dermatosis is a skin sign of:",
    img: null,
    options: ["A. Kwashiorkor", "B. Marasmus", "C. Pellagra", "D. Scurvy"],
    answer: 0,
    explanation: "Kwashiorkor causes hyperpigmented, desquamating skin lesions called 'flaky paint' or 'crazy paving' dermatosis.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_pem_008",
    topic: "pem",
    year: "FMGE Jun 2022",
    q: "In marasmus, the muscle wasting is most visible in the:",
    img: null,
    options: ["A. Buttocks and thighs — 'baggy pants' or 'old man facies' appearance", "B. Face (moonface)", "C. Abdomen (protuberant abdomen)", "D. Limb oedema"],
    answer: 0,
    explanation: "Marasmus causes severe muscle and fat wasting (old man facies, loose skin hanging over buttocks — 'baggy pants'), no oedema.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_pem_009",
    topic: "pem",
    year: "FMGE Dec 2021",
    q: "Refeeding syndrome in severe malnutrition is caused by:",
    img: null,
    options: ["A. Hypophosphataemia from rapid insulin-driven cellular phosphate uptake on refeeding", "B. Hypernatraemia from excessive saline", "C. Hypercalcaemia", "D. Hyperglycaemia"],
    answer: 0,
    explanation: "Rapid carbohydrate refeeding raises insulin → intracellular shift of phosphate, causing hypophosphataemia with cardiac, respiratory complications.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_pem_010",
    topic: "pem",
    year: "FMGE Jun 2021",
    q: "MUAC (mid-upper arm circumference) < _____ cm indicates severe acute malnutrition:",
    img: null,
    options: ["A. <11.5 cm", "B. <12.5 cm", "C. <13.5 cm", "D. <10 cm"],
    answer: 0,
    explanation: "MUAC <11.5 cm = severe acute malnutrition; 11.5–12.5 cm = moderate; >12.5 cm = normal (for children 6 mo–5 yr).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_chd_008",
    topic: "chd-pediatric",
    year: "FMGE Dec 2022",
    q: "Most common cyanotic congenital heart disease overall is:",
    img: null,
    options: ["A. Tetralogy of Fallot (TOF)", "B. Transposition of great arteries (TGA)", "C. Tricuspid atresia", "D. Total anomalous pulmonary venous return"],
    answer: 0,
    explanation: "TOF is the most common cyanotic CHD (5-10% of all CHDs); it consists of VSD, RVOT obstruction, overriding aorta, RVH.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_chd_009",
    topic: "chd-pediatric",
    year: "FMGE Jun 2022",
    q: "Tet spells in Tetralogy of Fallot are managed acutely by:",
    img: null,
    options: ["A. Knee-chest position + morphine + IV fluids + propranolol", "B. 100% O2 alone", "C. Digoxin", "D. Diuretics"],
    answer: 0,
    explanation: "Tet spell (hypercyanotic spell): knee-chest position increases SVR → reduces right-to-left shunt; morphine reduces hyperpnoea; fluids; propranolol.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_chd_010",
    topic: "chd-pediatric",
    year: "FMGE Dec 2021",
    q: "Most common acyanotic CHD is:",
    img: null,
    options: ["A. Ventricular septal defect (VSD)", "B. ASD", "C. Patent ductus arteriosus", "D. Pulmonary stenosis"],
    answer: 0,
    explanation: "VSD is the most common CHD overall (~30-35% of all congenital heart defects) and the most common acyanotic CHD.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_imnci_007",
    topic: "imnci",
    year: "FMGE Dec 2022",
    q: "IMNCI classifies a child with general danger signs as:",
    img: null,
    options: ["A. Very severe disease requiring urgent referral", "B. Moderate disease — treat outpatient", "C. Mild disease — home management", "D. Normal child"],
    answer: 0,
    explanation: "General danger signs (unable to drink, persistent vomiting, convulsions, lethargic/unconscious) → very severe disease, urgent hospital referral.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_imnci_008",
    topic: "imnci",
    year: "FMGE Jun 2022",
    q: "In IMNCI, fast breathing threshold for pneumonia in a child aged 2-11 months is:",
    img: null,
    options: ["A. ≥50 breaths/minute", "B. ≥40 breaths/minute", "C. ≥60 breaths/minute", "D. ≥30 breaths/minute"],
    answer: 0,
    explanation: "IMNCI cut-offs: <2 months ≥60/min; 2-11 months ≥50/min; 1-5 years ≥40/min.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_imnci_009",
    topic: "imnci",
    year: "FMGE Dec 2021",
    q: "IMNCI antibiotic for non-severe pneumonia in children is:",
    img: null,
    options: ["A. Amoxicillin orally for 5 days", "B. Benzyl penicillin IV", "C. Cotrimoxazole (replaced by amoxicillin)", "D. Ceftriaxone IM"],
    answer: 0,
    explanation: "Current WHO/IMNCI guidelines recommend oral amoxicillin for non-severe pneumonia, replacing cotrimoxazole.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_imnci_010",
    topic: "imnci",
    year: "FMGE Jun 2021",
    q: "Zinc supplementation in IMNCI diarrhoea management is given for:",
    img: null,
    options: ["A. 14 days (10 mg/day <6 months; 20 mg/day ≥6 months)", "B. 5 days only", "C. Until diarrhoea resolves", "D. 1 month"],
    answer: 0,
    explanation: "WHO recommends zinc for 14 days in diarrhoea to reduce severity and prevent recurrence for 2-3 months.",
    tags: ["PYQ", "high-yield"]
  },

  {
    id: "peds_gen_007",
    topic: "genetic-disorders-peds",
    year: "FMGE Dec 2022",
    q: "Down syndrome (Trisomy 21) is most commonly caused by:",
    img: null,
    options: ["A. Non-disjunction during maternal meiosis I (95% of cases)", "B. Translocation (5%)", "C. Mosaicism (1-2%)", "D. Paternal non-disjunction"],
    answer: 0,
    explanation: "95% of Down syndrome cases are due to maternal meiosis I non-disjunction; risk increases with maternal age.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_gen_008",
    topic: "genetic-disorders-peds",
    year: "FMGE Jun 2022",
    q: "Most reliable prenatal diagnostic test for chromosomal abnormalities is:",
    img: null,
    options: ["A. Amniocentesis (15-20 weeks) or CVS (10-12 weeks)", "B. Maternal serum AFP alone", "C. Nuchal translucency ultrasound alone", "D. Maternal blood count"],
    answer: 0,
    explanation: "Amniocentesis and CVS provide karyotype; CVS is done earlier (10-12 weeks) but has slightly higher fetal loss rate.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_gen_009",
    topic: "genetic-disorders-peds",
    year: "FMGE Dec 2021",
    q: "Turner syndrome (45,XO) characteristic features include:",
    img: null,
    options: ["A. Short stature, webbed neck, shield chest, coarctation of aorta, primary amenorrhoea", "B. Tall stature and marfanoid habitus", "C. Intellectual disability as primary feature", "D. Gynaecomastia and infertility in males"],
    answer: 0,
    explanation: "Turner (45,X) in females: streak gonads, primary amenorrhoea, short stature, webbed neck; cardiovascular: coarctation of aorta.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_gen_010",
    topic: "genetic-disorders-peds",
    year: "FMGE Jun 2021",
    q: "Klinefelter syndrome (47,XXY) is characterised by:",
    img: null,
    options: ["A. Tall male with small firm testes, azoospermia, gynaecomastia, elevated FSH/LH", "B. Female phenotype", "C. Normal fertility", "D. Mental retardation is the presenting feature"],
    answer: 0,
    explanation: "47,XXY: hypogonadism, small firm testes, gynaecomastia, infertility, elevated gonadotrophins; IQ usually normal or mildly reduced.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_kaw_006",
    topic: "kawasaki",
    year: "FMGE Dec 2022",
    q: "Most feared complication of Kawasaki disease is:",
    img: null,
    options: ["A. Coronary artery aneurysms (in 15-25% of untreated cases)", "B. Renal failure", "C. Pulmonary hypertension", "D. Liver failure"],
    answer: 0,
    explanation: "Coronary artery aneurysms are the major complication; IVIG reduces risk from ~25% to <5%. Giant aneurysms (>8mm) carry long-term risk.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_kaw_007",
    topic: "kawasaki",
    year: "FMGE Jun 2022",
    q: "Treatment of Kawasaki disease is:",
    img: null,
    options: ["A. IVIG 2 g/kg single dose + high-dose aspirin, then low-dose aspirin maintenance", "B. Systemic steroids alone", "C. Antibiotics (mistaken for bacterial infection)", "D. No treatment — self-limited"],
    answer: 0,
    explanation: "IVIG (2 g/kg) + aspirin given within 10 days of fever dramatically reduces coronary aneurysm risk. Low-dose aspirin maintained for 6-8 weeks.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_kaw_008",
    topic: "kawasaki",
    year: "FMGE Dec 2021",
    q: "Diagnostic criteria of Kawasaki disease require fever ≥5 days PLUS how many of 5 principal features?",
    img: null,
    options: ["A. 4 of 5 (or <4 with echocardiographic evidence)", "B. All 5", "C. 2 of 5", "D. 3 of 5"],
    answer: 0,
    explanation: "Classic KD: fever ≥5 days + 4/5 features (conjunctival injection, oral changes, rash, extremity changes, cervical lymphadenopathy). Incomplete KD when <4 but coronary changes present.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_kaw_009",
    topic: "kawasaki",
    year: "FMGE Jun 2021",
    q: "Strawberry tongue is seen in:",
    img: null,
    options: ["A. Kawasaki disease and scarlet fever", "B. Kawasaki disease only", "C. Scarlet fever only", "D. Measles"],
    answer: 0,
    explanation: "Bright red 'strawberry tongue' (prominent papillae) occurs in both Kawasaki disease and scarlet fever (streptococcal).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_kaw_010",
    topic: "kawasaki",
    year: "FMGE Dec 2020",
    q: "Peeling of skin from fingertips in Kawasaki disease occurs during:",
    img: null,
    options: ["A. Subacute phase (weeks 2-4) — periungual desquamation", "B. Acute febrile phase", "C. Convalescent phase only", "D. Does not occur"],
    answer: 0,
    explanation: "Periungual desquamation of fingers and toes is a characteristic feature appearing in the subacute phase of Kawasaki disease.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_fs_006",
    topic: "febrile-seizures",
    year: "FMGE Dec 2022",
    q: "Simple febrile seizures are defined as:",
    img: null,
    options: ["A. Generalised, duration <15 minutes, once in 24 hours, in a neurologically normal child aged 6 months–5 years", "B. Focal, can be prolonged, any age", "C. Occurring without fever", "D. Associated with meningitis"],
    answer: 0,
    explanation: "Simple FS: generalised tonic-clonic, <15 min, single in 24 h, no postictal neurological deficit, no intracranial infection.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_fs_007",
    topic: "febrile-seizures",
    year: "FMGE Jun 2022",
    q: "Risk of developing epilepsy after simple febrile seizures is:",
    img: null,
    options: ["A. ~2% (same as general population — only marginally higher)", "B. 50%", "C. 25%", "D. 10%"],
    answer: 0,
    explanation: "After simple FS, epilepsy risk is ~2%; complex FS with prolonged or focal features carry higher risk (~4-12%).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_fs_008",
    topic: "febrile-seizures",
    year: "FMGE Dec 2021",
    q: "Acute management of prolonged febrile seizure (>5 minutes) is:",
    img: null,
    options: ["A. Rectal/IV diazepam or buccal/intranasal midazolam", "B. Lumbar puncture immediately", "C. Phenobarbitone IV as first line", "D. No treatment — self-limited"],
    answer: 0,
    explanation: "Benzodiazepines (diazepam PR, midazolam buccal/nasal) are first-line rescue for prolonged febrile seizures.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_fs_009",
    topic: "febrile-seizures",
    year: "FMGE Jun 2021",
    q: "LP is indicated after febrile seizure in:",
    img: null,
    options: ["A. Children <12 months or when meningeal signs are present", "B. All febrile seizures routinely", "C. Only complex FS regardless of age", "D. LP is never indicated"],
    answer: 0,
    explanation: "LP is recommended in infants <12 months (meningeal signs unreliable), or if meningeal signs present, or not fully immunised.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_fs_010",
    topic: "febrile-seizures",
    year: "FMGE Dec 2020",
    q: "Prophylactic anticonvulsant therapy for febrile seizures is currently:",
    img: null,
    options: ["A. Not recommended for simple FS (risk-benefit unfavourable)", "B. Phenobarbitone for all febrile seizures", "C. Valproate for all cases", "D. Daily aspirin"],
    answer: 0,
    explanation: "Continuous anticonvulsant prophylaxis is not recommended for simple FS; intermittent diazepam at fever onset is sometimes used but evidence is limited.",
    tags: ["PYQ", "high-yield"]
  },

  {
    id: "peds_inf_007",
    topic: "pediatric-infections",
    year: "FMGE Dec 2022",
    q: "Steeple sign on X-ray neck (AP view) is seen in:",
    img: null,
    options: ["A. Croup (laryngotracheobronchitis — parainfluenza virus)", "B. Epiglottitis", "C. Bacterial tracheitis", "D. Foreign body aspiration"],
    answer: 0,
    explanation: "Steeple (pencil) sign = subglottic narrowing on AP neck X-ray in viral croup; thumb sign = swollen epiglottis in epiglottitis.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_inf_008",
    topic: "pediatric-infections",
    year: "FMGE Jun 2022",
    q: "Thumb sign on lateral neck X-ray is pathognomonic of:",
    img: null,
    options: ["A. Epiglottitis (Haemophilus influenzae type b)", "B. Croup", "C. Retropharyngeal abscess", "D. Peritonsillar abscess"],
    answer: 0,
    explanation: "Swollen epiglottis resembling a thumb on lateral neck X-ray is the thumb sign of acute epiglottitis.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_inf_009",
    topic: "pediatric-infections",
    year: "FMGE Dec 2021",
    q: "Whooping cough (pertussis) is caused by:",
    img: null,
    options: ["A. Bordetella pertussis (Gram-negative coccobacillus)", "B. Haemophilus influenzae", "C. Streptococcus pneumoniae", "D. Paramyxovirus"],
    answer: 0,
    explanation: "Bordetella pertussis produces pertussis toxin causing characteristic paroxysmal cough with inspiratory whoop and post-tussive vomiting.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_inf_010",
    topic: "pediatric-infections",
    year: "FMGE Jun 2021",
    q: "Treatment of choice for pertussis is:",
    img: null,
    options: ["A. Azithromycin (or clarithromycin/erythromycin)", "B. Amoxicillin", "C. Ceftriaxone", "D. Oseltamivir"],
    answer: 0,
    explanation: "Macrolides (azithromycin preferred for tolerability) eradicate Bordetella and prevent spread; cough paroxysms may continue.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_fl_006",
    topic: "peds-fluids",
    year: "FMGE Dec 2022",
    q: "Maintenance fluid requirement for a 20 kg child using Holliday-Segar method is:",
    img: null,
    options: ["A. 1500 mL/day (100 mL/kg for first 10 kg + 50 mL/kg for next 10 kg)", "B. 2000 mL/day flat", "C. 800 mL/day", "D. 100 mL/kg/day for all weights"],
    answer: 0,
    explanation: "Holliday-Segar: 100 mL/kg for first 10 kg (=1000) + 50 mL/kg for next 10 kg (=500) = 1500 mL/day for 20 kg child.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_fl_007",
    topic: "peds-fluids",
    year: "FMGE Jun 2022",
    q: "ORS solution recommended by WHO contains sodium concentration of:",
    img: null,
    options: ["A. 75 mmol/L (reduced osmolarity ORS)", "B. 90 mmol/L (standard ORS)", "C. 45 mmol/L", "D. 130 mmol/L"],
    answer: 0,
    explanation: "WHO 2002 reduced-osmolarity ORS: Na 75 mmol/L, glucose 75 mmol/L, total osmolarity 245 mOsm/L; reduces vomiting and stool output.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_fl_008",
    topic: "peds-fluids",
    year: "FMGE Dec 2021",
    q: "IV fluid of choice for initial resuscitation in severe dehydration with shock in children is:",
    img: null,
    options: ["A. Normal saline (0.9% NaCl) or Ringer's lactate 20 mL/kg bolus", "B. Hypotonic saline (0.45% NaCl)", "C. 5% dextrose", "D. Colloid (albumin) as first line"],
    answer: 0,
    explanation: "Isotonic crystalloid (NS or RL) 10-20 mL/kg bolus is standard for paediatric resuscitation; repeat if needed.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_fl_009",
    topic: "peds-fluids",
    year: "FMGE Jun 2021",
    q: "Plan C WHO diarrhoea management for severe dehydration uses:",
    img: null,
    options: ["A. Rapid IV rehydration: 100 mL/kg Ringer's lactate over 3-6 hours", "B. ORS only", "C. Clear fluids at home", "D. No rehydration — restrict fluids"],
    answer: 0,
    explanation: "WHO Plan C: IV RL (or NS) 100 mL/kg; for infants <12 months over 6 hours, for older children over 3 hours.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_fl_010",
    topic: "peds-fluids",
    year: "FMGE Dec 2020",
    q: "Hypernatraemic dehydration is corrected slowly to prevent:",
    img: null,
    options: ["A. Cerebral oedema (rapid osmotic shift causes brain swelling)", "B. Cardiac arrhythmias", "C. Renal failure", "D. Hypoglycaemia"],
    answer: 0,
    explanation: "Rapid correction of hypernatraemia causes water to shift into brain cells → cerebral oedema, seizures, death; correct over 48 hours.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_wt_006",
    topic: "wilms-neuroblastoma",
    year: "FMGE Dec 2022",
    q: "Wilms tumour (nephroblastoma) most commonly presents as:",
    img: null,
    options: ["A. Asymptomatic abdominal mass in a child <5 years", "B. Haematuria as the presenting feature", "C. Hypertension as sole presentation", "D. Weight loss and night sweats"],
    answer: 0,
    explanation: "Wilms tumour typically presents as a large smooth flank mass discovered incidentally; haematuria and hypertension may coexist.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_wt_007",
    topic: "wilms-neuroblastoma",
    year: "FMGE Jun 2022",
    q: "Neuroblastoma characteristically produces:",
    img: null,
    options: ["A. Elevated urinary catecholamines (VMA and HVA)", "B. Elevated AFP", "C. Elevated beta-HCG", "D. Elevated CEA"],
    answer: 0,
    explanation: "Neuroblastoma is a catecholamine-secreting tumour; urine VMA (vanillylmandelic acid) and HVA (homovanillic acid) are elevated in >90%.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_wt_008",
    topic: "wilms-neuroblastoma",
    year: "FMGE Dec 2021",
    q: "Pseudo-Hutchinson sign in neuroblastoma refers to:",
    img: null,
    options: ["A. Periorbital ecchymosis ('raccoon eyes') from orbital metastasis", "B. Skin nodules", "C. Proptosis from direct orbital extension", "D. Neck lymphadenopathy"],
    answer: 0,
    explanation: "Periorbital ecchymosis (raccoon eyes) is caused by skull/orbital metastases in neuroblastoma; proptosis may also occur.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_wt_009",
    topic: "wilms-neuroblastoma",
    year: "FMGE Jun 2021",
    q: "Beckwith-Wiedemann syndrome is a risk factor for:",
    img: null,
    options: ["A. Wilms tumour (also hepatoblastoma and adrenal cortical carcinoma)", "B. Neuroblastoma", "C. Ewing sarcoma", "D. Osteosarcoma"],
    answer: 0,
    explanation: "BWS (macroglossia, omphalocele, gigantism, visceromegaly) predisposes to embryonal tumours, especially Wilms tumour.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_wt_010",
    topic: "wilms-neuroblastoma",
    year: "FMGE Dec 2020",
    q: "Opsoclonus-myoclonus syndrome (dancing eyes-dancing feet) is a paraneoplastic syndrome of:",
    img: null,
    options: ["A. Neuroblastoma", "B. Wilms tumour", "C. Hepatoblastoma", "D. Retinoblastoma"],
    answer: 0,
    explanation: "Opsoclonus-myoclonus (cerebellar ataxia, random eye movements) is a paraneoplastic immune phenomenon in ~3% of neuroblastoma.",
    tags: ["PYQ", "high-yield"]
  },

  {
    id: "peds_leu_006",
    topic: "pediatric-leukemia",
    year: "FMGE Dec 2022",
    q: "Most common childhood malignancy is:",
    img: null,
    options: ["A. Acute lymphoblastic leukaemia (ALL)", "B. Acute myeloid leukaemia (AML)", "C. Chronic myeloid leukaemia", "D. Non-Hodgkin lymphoma"],
    answer: 0,
    explanation: "ALL accounts for ~75% of all childhood leukaemias and is the most common childhood cancer overall.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_leu_007",
    topic: "pediatric-leukemia",
    year: "FMGE Jun 2022",
    q: "Best prognostic subtype of ALL in children is:",
    img: null,
    options: ["A. B-cell precursor ALL with t(12;21) ETV6-RUNX1 (TEL-AML1) translocation", "B. T-cell ALL", "C. ALL with t(9;22) Philadelphia chromosome", "D. Infant ALL with MLL rearrangement"],
    answer: 0,
    explanation: "t(12;21) ETV6-RUNX1 is the most common ALL translocation in children and confers excellent prognosis (~90% cure rate).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_leu_008",
    topic: "pediatric-leukemia",
    year: "FMGE Dec 2021",
    q: "Auer rods in blast cells are diagnostic of:",
    img: null,
    options: ["A. Acute myeloid leukaemia (AML)", "B. ALL", "C. CML blast crisis", "D. CLL"],
    answer: 0,
    explanation: "Auer rods are crystalline azurophilic inclusions in myeloblasts seen only in AML; their presence distinguishes AML from ALL.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_leu_009",
    topic: "pediatric-leukemia",
    year: "FMGE Jun 2021",
    q: "Induction chemotherapy for childhood ALL includes:",
    img: null,
    options: ["A. Vincristine + prednisolone + L-asparaginase (± anthracycline)", "B. Cyclophosphamide + cytarabine only", "C. Hydroxyurea alone", "D. Methotrexate monotherapy"],
    answer: 0,
    explanation: "Standard ALL induction: vincristine, prednisolone (or dexamethasone), L-asparaginase ± daunorubicin achieves ~95% remission.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "peds_leu_010",
    topic: "pediatric-leukemia",
    year: "FMGE Dec 2020",
    q: "CNS prophylaxis in childhood ALL is important because:",
    img: null,
    options: ["A. CNS is a sanctuary site where systemic drugs penetrate poorly", "B. CNS is always involved at diagnosis", "C. ALL cannot be treated without cranial irradiation", "D. CSF drainage is therapeutic"],
    answer: 0,
    explanation: "CNS is a pharmacological sanctuary; intrathecal methotrexate (± cranial irradiation in high-risk) prevents CNS relapse.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "ped_rds_006",
    topic: "rds",
    year: "FMGE Dec 2022",
    q: "Surfactant deficiency in RDS causes:",
    img: null,
    options: ["A. Increased alveolar surface tension → alveolar collapse (atelectasis) on expiration", "B. Bronchospasm", "C. Pulmonary oedema from capillary leak", "D. Increased lung compliance"],
    answer: 0,
    explanation: "Surfactant reduces alveolar surface tension; without it, alveoli collapse at end-expiration → progressive atelectasis and hypoxia.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "ped_rds_007",
    topic: "rds",
    year: "FMGE Jun 2022",
    q: "Antenatal corticosteroids for prevention of RDS are given when preterm delivery is expected before:",
    img: null,
    options: ["A. 34 weeks gestation (betamethasone/dexamethasone 48 hours before delivery)", "B. 28 weeks only", "C. Any gestational age including term", "D. 37 weeks"],
    answer: 0,
    explanation: "Betamethasone 12 mg IM × 2 doses 24 h apart (or dexamethasone × 4 doses) reduces RDS, IVH, and NEC in preterm <34 weeks.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "ped_rds_008",
    topic: "rds",
    year: "FMGE Dec 2021",
    q: "Ground-glass opacity with air bronchograms on CXR is the typical finding in:",
    img: null,
    options: ["A. Neonatal RDS (hyaline membrane disease)", "B. Meconium aspiration syndrome", "C. Transient tachypnoea of newborn", "D. Pneumothorax"],
    answer: 0,
    explanation: "RDS CXR: diffuse bilateral ground-glass granularity with air bronchograms ('white-out' in severe cases); bell-shaped chest.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "ped_rds_009",
    topic: "rds",
    year: "FMGE Jun 2021",
    q: "Exogenous surfactant therapy in RDS is given via:",
    img: null,
    options: ["A. Intratracheal instillation (via ETT or LISA/MIST)", "B. Inhalation via nebuliser", "C. IV infusion", "D. Oral administration"],
    answer: 0,
    explanation: "Surfactant is instilled directly into the trachea via endotracheal tube; LISA (less invasive surfactant administration) via thin catheter is now preferred.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "ped_rds_010",
    topic: "rds",
    year: "FMGE Dec 2020",
    q: "Lecithin:sphingomyelin (L:S) ratio indicating fetal lung maturity is:",
    img: null,
    options: ["A. ≥2:1 (lung mature; <2 indicates immaturity)", "B. <1:1", "C. ≥3:1 only in diabetic mothers", "D. 1:1 at term"],
    answer: 0,
    explanation: "L:S ratio ≥2:1 in amniotic fluid indicates surfactant sufficiency and lung maturity; in diabetic mothers ≥3.5:1 is used.",
    tags: ["PYQ", "high-yield"]
  },

];

export default pediatrics;
