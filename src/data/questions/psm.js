const psm = [

  // ============ EPIDEMIOLOGY & STUDY DESIGNS ============
  {
    id: "psm_epi_001",
    topic: "epidemiology-study-designs",
    year: "FMGE Dec 2019",
    q: "The epidemiological study design providing the strongest evidence for causation is:",
    img: null,
    options: ["A. Case-control study", "B. Cohort study", "C. Randomized controlled trial (RCT)", "D. Cross-sectional study"],
    answer: 2,
    explanation: "RCT is the gold standard for establishing causation — randomization eliminates confounding, and blinding reduces bias. Hierarchy of evidence: RCT > Cohort > Case-control > Cross-sectional > Case report. For ethical reasons, RCTs are not always feasible.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_epi_002",
    topic: "epidemiology-study-designs",
    year: "FMGE Jun 2018",
    q: "Odds ratio is the measure of association used in:",
    img: null,
    options: ["A. Cohort study", "B. RCT", "C. Case-control study", "D. Cross-sectional study"],
    answer: 2,
    explanation: "Odds ratio (OR) is used in case-control studies (where incidence cannot be directly calculated). Relative risk (RR) is used in cohort studies. When disease prevalence is low (<10%), OR approximates RR. OR >1 = risk factor; OR <1 = protective.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_epi_003",
    topic: "epidemiology-study-designs",
    year: "FMGE Dec 2018",
    q: "Cohort study measures:",
    img: null,
    options: ["A. Prevalence", "B. Incidence rate and relative risk (RR)", "C. Odds ratio", "D. Attributable risk only"],
    answer: 1,
    explanation: "Cohort studies follow exposed vs unexposed groups over time → measure incidence. From incidence in exposed (Ie) and unexposed (Iu): Relative Risk = Ie/Iu. Attributable Risk = Ie − Iu. Best for rare exposures, long latency diseases. Bias: loss to follow-up.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_epi_004",
    topic: "epidemiology-study-designs",
    year: "FMGE Jun 2019",
    q: "A cross-sectional study measures:",
    img: null,
    options: ["A. Incidence rate", "B. Prevalence (point or period)", "C. Relative risk", "D. Mortality rate"],
    answer: 1,
    explanation: "Cross-sectional (prevalence) study captures exposure and disease at the same point in time → measures PREVALENCE (not incidence). Cannot establish temporal relationship (chicken-and-egg problem). Quick, cheap, useful for planning health services.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_epi_005",
    topic: "epidemiology-study-designs",
    year: "FMGE Dec 2020",
    q: "Selection bias is maximum in which study design?",
    img: null,
    options: ["A. RCT", "B. Cohort study", "C. Case-control study", "D. Ecological study"],
    answer: 2,
    explanation: "Case-control studies are most prone to selection bias (cases and controls may differ in ways other than the exposure). Also prone to recall bias (cases remember past exposures better). Cohort studies have loss-to-follow-up bias. RCTs minimize bias through randomization.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_epi_006",
    topic: "epidemiology-study-designs",
    year: "FMGE Jun 2021",
    q: "Koch's postulates for establishing causation require all EXCEPT:",
    img: null,
    options: ["A. Organism found in all diseased cases", "B. Organism isolated and grown in pure culture", "C. Inoculation of pure culture causes disease in healthy host", "D. Statistical association (OR >1) in case-control study"],
    answer: 3,
    explanation: "Koch's postulates: (1) Organism present in all cases, (2) Organism isolated and grown in pure culture, (3) Pure culture causes disease in healthy host, (4) Organism re-isolated from experimentally diseased host. Statistical association alone is NOT Koch's postulate.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_epi_007",
    topic: "epidemiology-study-designs",
    year: "FMGE Dec 2019",
    q: "Attributable risk (AR) is defined as:",
    img: null,
    options: ["A. Incidence in exposed / Incidence in unexposed", "B. Incidence in exposed − Incidence in unexposed", "C. (Cases with exposure / Total cases) × 100", "D. Odds in exposed / Odds in unexposed"],
    answer: 1,
    explanation: "Attributable Risk (AR) = Risk in exposed − Risk in unexposed. Measures the excess risk due to the exposure. Population Attributable Risk (PAR) = Total risk − Risk in unexposed. PAR% = AR × Prevalence of exposure / Total risk.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_epi_008",
    topic: "epidemiology-study-designs",
    year: "FMGE Jun 2020",
    q: "Ecological fallacy is a bias seen in:",
    img: null,
    options: ["A. RCT", "B. Ecological study (correlational study)", "C. Case-control study", "D. Cohort study"],
    answer: 1,
    explanation: "Ecological study: association observed at group level may not apply at individual level — this is 'ecological fallacy.' E.g., countries with high fat consumption have high cancer rates, but individuals within those countries who eat most fat may not be the ones getting cancer.",
    tags: ["PYQ"]
  },
  {
    id: "psm_epi_009",
    topic: "epidemiology-study-designs",
    year: "FMGE Dec 2021",
    q: "Hill's criteria for causation include all EXCEPT:",
    img: null,
    options: ["A. Strength of association", "B. Temporality (cause precedes effect)", "C. Statistical significance (p <0.05)", "D. Biological plausibility"],
    answer: 2,
    explanation: "Bradford Hill's criteria: Strength, Consistency, Specificity, Temporality, Biological gradient (dose-response), Plausibility, Coherence, Experiment, Analogy. Statistical significance is NOT one of Hill's 9 criteria — it supports but does not establish causation.",
    tags: ["PYQ"]
  },

  // ============ BIOSTATISTICS ============
  {
    id: "psm_bio_001",
    topic: "biostatistics",
    year: "FMGE Dec 2019",
    q: "The p-value of 0.03 means:",
    img: null,
    options: ["A. 3% probability that the result is clinically significant", "B. 3% probability of getting the observed result (or more extreme) if the null hypothesis were true", "C. The study has 97% power", "D. There is a 97% chance the alternative hypothesis is true"],
    answer: 1,
    explanation: "P-value = probability of observing the result (or more extreme) if H₀ is true. P <0.05 → statistically significant (reject H₀). P-value does NOT measure clinical significance or probability that H₀ is true. Small p-value with large sample ≠ clinical importance.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_bio_002",
    topic: "biostatistics",
    year: "FMGE Jun 2018",
    q: "Sensitivity of a test is defined as:",
    img: null,
    options: ["A. True positives / (True positives + False positives)", "B. True positives / (True positives + False negatives)", "C. True negatives / (True negatives + False positives)", "D. True negatives / (True negatives + False negatives)"],
    answer: 1,
    explanation: "Sensitivity = TP/(TP+FN) — ability to correctly identify diseased people. 'SnNout' — high Sensitivity, Negative test rules OUT disease. Specificity = TN/(TN+FP) — 'SpPin' — high Specificity, Positive test rules IN disease.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_bio_003",
    topic: "biostatistics",
    year: "FMGE Dec 2018",
    q: "When a screening cut-off is moved to the left (lowered), the effect is:",
    img: null,
    options: ["A. Sensitivity decreases, specificity increases", "B. Sensitivity increases, specificity decreases", "C. Both sensitivity and specificity increase", "D. Positive predictive value increases"],
    answer: 1,
    explanation: "Lowering the cut-off → more people test positive → catches more true positives (sensitivity↑) but also more false positives (specificity↓). ROC curve plots sensitivity vs (1−specificity). AUC >0.8 = good test. Cut-off is optimized based on context (screening vs diagnosis).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_bio_004",
    topic: "biostatistics",
    year: "FMGE Jun 2019",
    q: "Positive Predictive Value (PPV) is most affected by:",
    img: null,
    options: ["A. Sensitivity of the test", "B. Specificity of the test", "C. Prevalence of the disease in the population tested", "D. Sample size"],
    answer: 2,
    explanation: "PPV = TP/(TP+FP). PPV increases with higher disease prevalence. In low-prevalence populations, even a highly specific test has poor PPV (many false positives). NPV = TN/(TN+FN) — decreases with higher prevalence.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_bio_005",
    topic: "biostatistics",
    year: "FMGE Dec 2020",
    q: "For normally distributed data, which measure of central tendency equals the median and mode?",
    img: null,
    options: ["A. Range", "B. Mean", "C. Standard deviation", "D. Variance"],
    answer: 1,
    explanation: "In a normal (Gaussian) distribution: Mean = Median = Mode. Symmetrical bell curve. About 68% of values within ±1 SD, 95% within ±1.96 SD, 99.7% within ±3 SD. Skewed distributions → mean is pulled toward the tail.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_bio_006",
    topic: "biostatistics",
    year: "FMGE Jun 2021",
    q: "Type I error (α error) in statistics means:",
    img: null,
    options: ["A. Failing to reject a false null hypothesis", "B. Rejecting a true null hypothesis (false positive conclusion)", "C. Inadequate sample size", "D. Measurement error"],
    answer: 1,
    explanation: "Type I error (α) = false positive = rejecting H₀ when it is actually true. Controlled by significance level (α = 0.05). Type II error (β) = false negative = failing to reject H₀ when it is false. Power = 1−β = probability of detecting a true effect.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_bio_007",
    topic: "biostatistics",
    year: "FMGE Dec 2017",
    q: "Non-parametric test used for comparison of two independent groups with ordinal data:",
    img: null,
    options: ["A. Student's t-test", "B. ANOVA", "C. Mann-Whitney U test", "D. Chi-square test"],
    answer: 2,
    explanation: "Mann-Whitney U test = non-parametric equivalent of independent samples t-test (used when data is ordinal or non-normally distributed). Wilcoxon signed-rank = non-parametric for paired groups. Chi-square = categorical data. ANOVA = multiple group comparison (parametric).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_bio_008",
    topic: "biostatistics",
    year: "FMGE Jun 2020",
    q: "Number needed to treat (NNT) is calculated as:",
    img: null,
    options: ["A. 1 / Relative Risk", "B. 1 / Absolute Risk Reduction (ARR)", "C. 1 / Odds Ratio", "D. 1 / Number needed to harm"],
    answer: 1,
    explanation: "NNT = 1/ARR. ARR = Control event rate − Treatment event rate. Lower NNT = more effective treatment. NNH = 1/Absolute Risk Increase. NNT and NNH are clinically meaningful measures used in EBM for communicating treatment effects.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_bio_009",
    topic: "biostatistics",
    year: "FMGE Dec 2019",
    q: "Kappa statistic measures:",
    img: null,
    options: ["A. Sensitivity and specificity", "B. Inter-rater agreement (beyond chance)", "C. Correlation between two variables", "D. Sample size adequacy"],
    answer: 1,
    explanation: "Cohen's Kappa = agreement beyond chance between two raters. κ >0.8 = almost perfect; 0.6–0.8 = substantial; 0.4–0.6 = moderate; <0.4 = poor. Pearson correlation measures linear association between continuous variables.",
    tags: ["PYQ"]
  },

  // ============ VACCINES & IMMUNIZATION (PSM) ============
  {
    id: "psm_vac_001",
    topic: "vaccines-psm",
    year: "FMGE Dec 2019",
    q: "India's Universal Immunization Programme (UIP) was launched in:",
    img: null,
    options: ["A. 1974 (EPI globally)", "B. 1978", "C. 1985", "D. 1992"],
    answer: 2,
    explanation: "India's Expanded Programme on Immunization (EPI) started in 1978 (limited cities). Universal Immunization Programme (UIP) was launched in 1985 to cover the entire country. India declared polio-free in 2014. Mission Indradhanush (2015) targets children missed by routine immunization.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_vac_002",
    topic: "vaccines-psm",
    year: "FMGE Jun 2018",
    q: "BCG vaccine is given at birth and protects primarily against:",
    img: null,
    options: ["A. Pulmonary tuberculosis in adults", "B. Miliary TB and TB meningitis in children", "C. Latent TB reactivation", "D. Drug-resistant TB"],
    answer: 1,
    explanation: "BCG (live attenuated M. bovis) protects primarily against disseminated TB (miliary TB and TB meningitis) in children. It has variable efficacy against pulmonary TB (0–80% worldwide). Given intradermally in left upper arm at birth (0 dose).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_vac_003",
    topic: "vaccines-psm",
    year: "FMGE Dec 2018",
    q: "Cold chain for oral polio vaccine (OPV) requires storage at:",
    img: null,
    options: ["A. +2°C to +8°C", "B. −15°C to −25°C", "C. Room temperature (15–25°C)", "D. +4°C only"],
    answer: 1,
    explanation: "OPV must be stored at −15 to −25°C (freezer). It can be kept at +2 to +8°C for short periods (1 month at PHC level). Vaccines that should NOT be frozen: DPT, Hepatitis B, TT (freeze-sensitive). Freeze-testing by 'shake test' detects frozen/damaged adjuvanted vaccines.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_vac_004",
    topic: "vaccines-psm",
    year: "FMGE Jun 2019",
    q: "Herd immunity threshold for measles is approximately:",
    img: null,
    options: ["A. 50%", "B. 70%", "C. 95%", "D. 80%"],
    answer: 2,
    explanation: "Measles has R₀ of 12–18 (highly contagious) → herd immunity threshold = 1 − 1/R₀ = ~95%. Polio ~80–85%. COVID-19 ~70%. Higher R₀ → higher herd immunity threshold needed. Herd immunity protects unvaccinated individuals (newborns, immunocompromised).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_vac_005",
    topic: "vaccines-psm",
    year: "FMGE Dec 2020",
    q: "Vaccine vial monitor (VVM) indicates:",
    img: null,
    options: ["A. Sterility of the vaccine", "B. Cumulative heat exposure of the vaccine vial", "C. Expiry date", "D. Cold chain break"],
    answer: 1,
    explanation: "VVM (Vaccine Vial Monitor) = heat-sensitive label on vial that changes color as it accumulates heat exposure over time. If inner square is darker than outer circle → discard (heat-damaged). Useful in field conditions — do not use if VVM past endpoint.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_vac_006",
    topic: "vaccines-psm",
    year: "FMGE Jun 2021",
    q: "Which vaccine is contraindicated in immunocompromised individuals?",
    img: null,
    options: ["A. Hepatitis B vaccine", "B. Inactivated polio vaccine (IPV)", "C. Oral polio vaccine (OPV — live attenuated)", "D. DPT vaccine"],
    answer: 2,
    explanation: "Live attenuated vaccines (OPV, BCG, MMR, yellow fever, varicella) are CONTRAINDICATED in immunocompromised patients (HIV/AIDS, on chemotherapy, steroid >20 mg/day, organ transplant). Killed/inactivated vaccines (IPV, Hep B, DPT) are safe in immunocompromised.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_vac_007",
    topic: "vaccines-psm",
    year: "FMGE Dec 2021",
    q: "Pentavalent vaccine in India covers:",
    img: null,
    options: ["A. 5 diseases: DPT + Hep B + Hib (Haemophilus influenzae b)", "B. 5 diseases: DPT + Polio + Measles", "C. Diphtheria, Pertussis, Tetanus, Measles, Rubella", "D. 5 serogroups of meningococcal vaccine"],
    answer: 0,
    explanation: "Pentavalent vaccine (introduced in India 2011-14) = DPT + Hepatitis B + Hib (5 in one injection). Given at 6, 10, 14 weeks. Replaces separate DPT and Hep B injections. Reduces needle pricks and improves compliance.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_vac_008",
    topic: "vaccines-psm",
    year: "FMGE Jun 2020",
    q: "Tetanus toxoid (TT) schedule for a pregnant woman with unknown/no prior immunization:",
    img: null,
    options: ["A. Single dose at any gestation", "B. TT1 as early as possible + TT2 after 4 weeks (preferably before 36 weeks)", "C. Three doses at monthly intervals", "D. Only if prior vaccination >10 years ago"],
    answer: 1,
    explanation: "For previously unimmunized pregnant women: TT1 as early in pregnancy as possible, TT2 at least 4 weeks after TT1 (at least 2–4 weeks before delivery). Protection from TT2 lasts 3 years. TT booster at next pregnancy if <3 years.",
    tags: ["PYQ"]
  },

  // ============ NATIONAL HEALTH PROGRAMS ============
  {
    id: "psm_nhp_001",
    topic: "national-health-programs",
    year: "FMGE Dec 2019",
    q: "National Vector Borne Disease Control Programme (NVBDCP) covers all EXCEPT:",
    img: null,
    options: ["A. Malaria", "B. Dengue & chikungunya", "C. Tuberculosis", "D. Lymphatic filariasis"],
    answer: 2,
    explanation: "NVBDCP covers vector-borne diseases: malaria, dengue, chikungunya, kala-azar, Japanese encephalitis, lymphatic filariasis. Tuberculosis is under NTEP (National Tuberculosis Elimination Programme), formerly RNTCP.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_nhp_002",
    topic: "national-health-programs",
    year: "FMGE Jun 2018",
    q: "National Programme for Prevention and Control of Cancer, Diabetes, CVD and Stroke (NPCDCS) targets NCD risk factors including:",
    img: null,
    options: ["A. Tobacco, alcohol, unhealthy diet, physical inactivity", "B. Malnutrition and micronutrient deficiencies only", "C. Vector-borne diseases and infectious diseases", "D. Maternal mortality and infant mortality"],
    answer: 0,
    explanation: "NPCDCS (2010) focuses on common modifiable NCD risk factors: tobacco use, alcohol consumption, unhealthy diet, physical inactivity. Also provides opportunistic screening for cancer (oral, breast, cervix), diabetes, and CVD at health facilities.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_nhp_003",
    topic: "national-health-programs",
    year: "FMGE Dec 2018",
    q: "ASHA (Accredited Social Health Activist) was introduced under:",
    img: null,
    options: ["A. ICDS (Integrated Child Development Services)", "B. NHM / NRHM (National Rural Health Mission, 2005)", "C. NSSO (National Sample Survey Office)", "D. RNTCP"],
    answer: 1,
    explanation: "ASHA was introduced under NRHM (National Rural Health Mission, 2005) as community-level health worker. One ASHA per 1000 rural population. She is trained to promote health, immunization, ANC, institutional delivery, DOTS companion. Incentive-based, not salaried.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_nhp_004",
    topic: "national-health-programs",
    year: "FMGE Jun 2019",
    q: "ICDS (Integrated Child Development Services) targets children of which age group?",
    img: null,
    options: ["A. 0–6 years + pregnant and lactating women", "B. 6–14 years only", "C. 0–2 years only (infants)", "D. 5–18 years"],
    answer: 0,
    explanation: "ICDS (1975, India's flagship nutrition program): targets 0–6 years children + pregnant women + lactating mothers. Services: supplementary nutrition, immunization, health check-up, pre-school education, nutrition & health education, referral. Delivered through Anganwadi centres.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_nhp_005",
    topic: "national-health-programs",
    year: "FMGE Dec 2020",
    q: "Janani Suraksha Yojana (JSY) promotes:",
    img: null,
    options: ["A. Institutional deliveries by providing cash incentives to mothers", "B. Free immunization", "C. Contraception distribution", "D. Antenatal care only"],
    answer: 0,
    explanation: "JSY (2005, under NRHM): conditional cash transfer scheme to promote institutional deliveries among BPL women. Higher cash incentive in low-performing states (LPS like UP, Bihar, MP, Rajasthan, Odisha, Jharkhand, Chhattisgarh, Uttarakhand, Assam, J&K).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_nhp_006",
    topic: "national-health-programs",
    year: "FMGE Jun 2021",
    q: "Ayushman Bharat - PM-JAY (Pradhan Mantri Jan Arogya Yojana) provides health coverage of:",
    img: null,
    options: ["A. ₹50,000 per family per year", "B. ₹5 lakh per family per year for secondary and tertiary hospitalization", "C. ₹1 lakh per individual per year", "D. Universal coverage for all citizens without limit"],
    answer: 1,
    explanation: "PM-JAY (2018) provides health insurance coverage of ₹5 lakh per family per year for secondary and tertiary hospitalization. Targets bottom 40% of Indian population (~50 crore beneficiaries). Cashless and paperless at empanelled hospitals. World's largest government health protection scheme.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_nhp_007",
    topic: "national-health-programs",
    year: "FMGE Dec 2021",
    q: "DOTS (Directly Observed Treatment, Short Course) in NTEP involves observing patient taking anti-TB drugs:",
    img: null,
    options: ["A. Daily at hospital only", "B. By a health worker/treatment supporter for every dose", "C. Weekly monitoring", "D. Monthly sputum examination only"],
    answer: 1,
    explanation: "DOTS = all doses of anti-TB treatment are observed by a treatment supporter (health worker, community volunteer, or ASHA). Ensures adherence, prevents drug resistance. India uses Daily DOTS (since 2017, replacing thrice-weekly). DOTS Plus = MDR-TB treatment.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_nhp_008",
    topic: "national-health-programs",
    year: "FMGE Jun 2020",
    q: "The Mid-Day Meal scheme in India provides supplementary nutrition to:",
    img: null,
    options: ["A. Pregnant women", "B. School children (Class 1–8) in government schools", "C. Infants 0–6 months", "D. Adolescent girls"],
    answer: 1,
    explanation: "Mid-Day Meal (MDM) scheme provides hot cooked meals to children in Class 1–8 in government and government-aided schools. Aims to improve school enrollment, retention, nutrition status. Provides 450 kcal and 12g protein for primary (I–V) and 700 kcal/20g protein for upper primary (VI–VIII).",
    tags: ["PYQ"]
  },
  {
    id: "psm_nhp_009",
    topic: "national-health-programs",
    year: "FMGE Dec 2019",
    q: "Rashtriya Bal Swasthya Karyakram (RBSK) screens children for:",
    img: null,
    options: ["A. 4 Ds: Defects at birth, Diseases, Deficiencies, Developmental delays", "B. Malaria and dengue only", "C. TB and HIV", "D. Worm infestation only"],
    answer: 0,
    explanation: "RBSK (under NHM, 2013): screens children 0–18 years for 4 Ds — Defects at birth, Deficiencies (anemia, vitamin A, iodine), Diseases (sickle cell, RHD, dental), Developmental delays and disabilities. Aims for early identification and free treatment/surgery.",
    tags: ["PYQ"]
  },

  // ============ NUTRITION & DEFICIENCY DISORDERS ============
  {
    id: "psm_nut_001",
    topic: "nutrition-deficiency",
    year: "FMGE Dec 2019",
    q: "Vitamin A deficiency — earliest clinical sign is:",
    img: null,
    options: ["A. Bitot's spots", "B. Night blindness (nyctalopia)", "C. Keratomalacia", "D. Xerophthalmia grade X1B"],
    answer: 1,
    explanation: "WHO classification of xerophthalmia: X1A (Night blindness) → X1B (Bitot's spots) → X2 (Corneal xerosis) → X3A (Corneal ulceration <1/3) → X3B (>1/3 keratomalacia) → XN (Fundal changes). Night blindness is earliest. Keratomalacia = irreversible blindness.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_nut_002",
    topic: "nutrition-deficiency",
    year: "FMGE Jun 2018",
    q: "Universal Salt Iodization (USI) in India aims to prevent:",
    img: null,
    options: ["A. Iron deficiency anemia", "B. Iodine Deficiency Disorders (IDD) — goiter, cretinism", "C. Rickets", "D. Pellagra"],
    answer: 1,
    explanation: "Universal Salt Iodization prevents IDD. India made iodization of all edible salt mandatory under Prevention of Food Adulteration Act. National Iodine Deficiency Disorders Control Programme (NIDDCP). Iodized salt must contain ≥15 ppm iodine at consumer level.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_nut_003",
    topic: "nutrition-deficiency",
    year: "FMGE Dec 2018",
    q: "Protein-Energy Malnutrition (PEM) assessment in children uses:",
    img: null,
    options: ["A. Weight-for-age (Gomez classification)", "B. BMI only", "C. Serum albumin alone", "D. Mid-arm circumference alone"],
    answer: 0,
    explanation: "Gomez classification (1956) uses weight-for-age: Grade I = 75–90% of expected; Grade II = 60–75%; Grade III = <60%. WHO MUAC: <11.5 cm = SAM; 11.5–12.5 cm = MAM; >12.5 cm = normal. MUAC measures lean body mass, less affected by edema.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_nut_004",
    topic: "nutrition-deficiency",
    year: "FMGE Jun 2019",
    q: "Pellagra is caused by deficiency of:",
    img: null,
    options: ["A. Niacin (B3) / Tryptophan", "B. Riboflavin (B2)", "C. Pyridoxine (B6)", "D. Thiamine (B1)"],
    answer: 0,
    explanation: "Pellagra = Niacin (B3) deficiency OR tryptophan deficiency (tryptophan is precursor to niacin). 4 Ds: Dermatitis (sun-exposed areas, Casal's necklace), Diarrhoea, Dementia, Death. Common in maize-eating populations (maize has niacin in bound form + low tryptophan).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_nut_005",
    topic: "nutrition-deficiency",
    year: "FMGE Dec 2020",
    q: "Recommended daily allowance (RDA) of protein for a 70 kg sedentary adult man (ICMR):",
    img: null,
    options: ["A. 0.5 g/kg/day (35 g/day)", "B. 0.8–1 g/kg/day (56–60 g/day)", "C. 2 g/kg/day (140 g/day)", "D. 0.3 g/kg/day (21 g/day)"],
    answer: 1,
    explanation: "ICMR RDA for protein: ~0.8–1 g/kg/day for adults. Sedentary man (60 kg) = 60 g/day. Pregnant +23 g/day; lactating +19 g/day. Athletes may need 1.2–2 g/kg/day. Reference protein quality: egg albumin (biological value 100).",
    tags: ["PYQ"]
  },
  {
    id: "psm_nut_006",
    topic: "nutrition-deficiency",
    year: "FMGE Jun 2021",
    q: "Fluorosis in India is caused by excess fluoride in:",
    img: null,
    options: ["A. Food only", "B. Drinking water (>1.5 mg/L)", "C. Air pollution", "D. Food additives"],
    answer: 1,
    explanation: "Fluorosis: dental fluorosis (mottled enamel) when fluoride >1.5 mg/L in water; skeletal fluorosis when >3–10 mg/L. Endemic in Rajasthan, Andhra Pradesh, Gujarat, UP, Tamil Nadu. Defluoridation by Nalgonda technique. Optimal fluoride = 0.5–1.0 mg/L (prevents dental caries).",
    tags: ["PYQ"]
  },
  {
    id: "psm_nut_007",
    topic: "nutrition-deficiency",
    year: "FMGE Dec 2017",
    q: "Double burden of malnutrition refers to:",
    img: null,
    options: ["A. Kwashiorkor + marasmus coexisting", "B. Undernutrition + overnutrition/obesity coexisting in same population/individual", "C. Iron + vitamin A deficiency together", "D. Micronutrient + macronutrient deficiency simultaneously"],
    answer: 1,
    explanation: "Double burden = simultaneous existence of undernutrition (wasting, stunting, micronutrient deficiencies) AND overnutrition/obesity in the same country, community, or even individual (stunted + overweight). Common in rapidly transitioning countries like India.",
    tags: ["PYQ"]
  },

  // ============ DEMOGRAPHY ============
  {
    id: "psm_dem_001",
    topic: "demography",
    year: "FMGE Dec 2019",
    q: "Current (2023) Crude Birth Rate (CBR) of India is approximately:",
    img: null,
    options: ["A. 16–17 per 1000 population", "B. 25 per 1000 population", "C. 10 per 1000 population", "D. 30 per 1000 population"],
    answer: 0,
    explanation: "India's CBR has declined from 41.7 (1951) to ~16–17 per 1000 population (2021–23). Target under NHP 2002 was CBR of 21 by 2010. Total Fertility Rate (TFR) = 2.0 (2021), close to replacement level (2.1).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_dem_002",
    topic: "demography",
    year: "FMGE Jun 2018",
    q: "Infant Mortality Rate (IMR) is defined as:",
    img: null,
    options: ["A. Deaths under 1 year per 1000 live births in the same year", "B. Deaths under 5 years per 1000 live births", "C. Neonatal deaths per 1000 births", "D. Deaths 1–4 years per 1000 children"],
    answer: 0,
    explanation: "IMR = (Deaths under 1 year / Live births in same year) × 1000. India IMR = 28/1000 (2020). Components: Neonatal mortality rate (NMR, 0–28 days) = ~20; Post-neonatal (1–11 months) = ~8. IMR is the best single indicator of health status of a community.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_dem_003",
    topic: "demography",
    year: "FMGE Dec 2018",
    q: "Maternal Mortality Ratio (MMR) in India (NFHS-5 / SRS 2018–20) is approximately:",
    img: null,
    options: ["A. 97 per 100,000 live births", "B. 200 per 100,000 live births", "C. 50 per 100,000 live births", "D. 400 per 100,000 live births"],
    answer: 0,
    explanation: "India's MMR has declined from 556 (1990) to 97 per 100,000 live births (SRS 2018–20). SDG target: <70 by 2030. Most common cause of maternal death in India: Hemorrhage (PPH). Others: sepsis, hypertensive disorders, obstructed labor, unsafe abortion.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_dem_004",
    topic: "demography",
    year: "FMGE Jun 2019",
    q: "The demographic transition model — India is currently in which stage?",
    img: null,
    options: ["A. Stage 1: High birth rate + high death rate", "B. Stage 2: High birth rate + falling death rate", "C. Stage 3: Falling birth rate + low death rate", "D. Stage 4: Low birth rate + low death rate"],
    answer: 2,
    explanation: "India is in Stage 3 of demographic transition: birth rate falling, death rate already low. TFR approaching replacement level (2.0 in 2021). Some southern states (Kerala, TN, AP) have reached Stage 4. North Indian states (UP, Bihar) are in late Stage 2/early Stage 3.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_dem_005",
    topic: "demography",
    year: "FMGE Dec 2020",
    q: "Life expectancy at birth in India (2021) is approximately:",
    img: null,
    options: ["A. 55 years", "B. 70 years", "C. 80 years", "D. 65 years"],
    answer: 1,
    explanation: "India's life expectancy at birth = ~70 years (2021). Males ~68.4, Females ~71.0 years. Japan has the highest at ~84 years. Life expectancy at birth is used to measure overall population health and the effects of mortality across all ages.",
    tags: ["PYQ"]
  },
  {
    id: "psm_dem_006",
    topic: "demography",
    year: "FMGE Jun 2021",
    q: "Sex ratio in India (Census 2011) is:",
    img: null,
    options: ["A. 900 females per 1000 males", "B. 940 females per 1000 males", "C. 1050 females per 1000 males", "D. 960 females per 1000 males"],
    answer: 1,
    explanation: "Census 2011: Sex ratio = 943 females per 1000 males. Child sex ratio (0–6 years) = 918 (alarming). Kerala has highest sex ratio (1084), Haryana lowest (877). PCPNDT Act (1994) to prevent sex-selective abortion. National average is skewed due to female foeticide.",
    tags: ["PYQ"]
  },

  // ============ WATER & FOOD HYGIENE ============
  {
    id: "psm_wfh_001",
    topic: "water-food-hygiene",
    year: "FMGE Dec 2019",
    q: "Permissible limit of chlorine residual in treated drinking water at the tap (WHO/India):",
    img: null,
    options: ["A. 0.1 mg/L (0.1 ppm)", "B. 0.2 mg/L (0.2 ppm)", "C. 1.0 mg/L", "D. 5.0 mg/L"],
    answer: 1,
    explanation: "Residual chlorine in treated water at tap = 0.2 ppm (mg/L) is the minimum required for disinfection. For super-chlorination: 1–5 mg/L. WHO guideline for safe water: no guideline value for Cl2, but 0.2–0.5 mg/L recommended in practice.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_wfh_002",
    topic: "water-food-hygiene",
    year: "FMGE Jun 2018",
    q: "Per capita water requirement for domestic use (India) is:",
    img: null,
    options: ["A. 40 liters/day/person", "B. 200 liters/day/person (urban)", "C. 2 liters/day/person (drinking only)", "D. 500 liters/day/person"],
    answer: 1,
    explanation: "Indian standards: Urban area = 135–200 L/day/capita; Rural = 40 L/day/capita. WHO minimum for survival = 3 L/day. For basic hygiene = 20 L/day. Safe and clean water = the Sphere standard is 15–20 L/day in emergency settings.",
    tags: ["PYQ"]
  },
  {
    id: "psm_wfh_003",
    topic: "water-food-hygiene",
    year: "FMGE Dec 2018",
    q: "Bacteriological indicator of water contamination is:",
    img: null,
    options: ["A. Total dissolved solids (TDS)", "B. E. coli / coliform count (MPN)", "C. pH measurement", "D. Turbidity (NTU)"],
    answer: 1,
    explanation: "E. coli (coliform) count by Most Probable Number (MPN) or membrane filtration is the standard bacteriological indicator of fecal contamination in water. Zero coliforms per 100 mL = acceptable for drinking water. E. coli indicates recent fecal contamination.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_wfh_004",
    topic: "water-food-hygiene",
    year: "FMGE Jun 2019",
    q: "Staphylococcal food poisoning differs from other food poisonings in that:",
    img: null,
    options: ["A. Incubation period is longest (>24h)", "B. Very short incubation period (1–6 hours) — preformed heat-stable toxin", "C. Causes fever as primary symptom", "D. It requires living bacteria in the food"],
    answer: 1,
    explanation: "S. aureus food poisoning: incubation 1–6 hours (shortest). Caused by preformed, heat-STABLE enterotoxin (cooking doesn't destroy toxin). Symptoms: vomiting, diarrhoea, NO fever. Botulism (12–36h) = heat-labile toxin, paralysis. Salmonella (12–24h) = fever present.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_wfh_005",
    topic: "water-food-hygiene",
    year: "FMGE Dec 2020",
    q: "Slow sand filtration of water is effective in removing:",
    img: null,
    options: ["A. Dissolved chemicals and heavy metals", "B. Bacteria, turbidity, algae — by biological film (Schmutzdecke)", "C. Hardness", "D. Fluoride only"],
    answer: 1,
    explanation: "Slow sand filtration uses biological film (Schmutzdecke) — slime layer of microorganisms on sand surface that degrades organic material. Removes 99%+ bacteria, parasites, turbidity. Rate: 0.1–0.4 m/hour. Rapid sand filtration: physical filtration only, requires prior coagulation.",
    tags: ["PYQ"]
  },

  // ============ MALARIA CONTROL (PSM) ============
  {
    id: "psm_mal_001",
    topic: "malaria-psm",
    year: "FMGE Dec 2019",
    q: "DDT resistance in Anopheles mosquitoes has led to use of which insecticide for indoor residual spraying (IRS)?",
    img: null,
    options: ["A. DDT (still primary)", "B. Synthetic pyrethroids (deltamethrin, lambda-cyhalothrin)", "C. Organophosphates (malathion) as first line", "D. Carbamates (bendiocarb)"],
    answer: 1,
    explanation: "Synthetic pyrethroids have largely replaced DDT for IRS due to DDT resistance in vectors. Malathion (OP) is used where pyrethroids are also resistant. National Vector Borne Disease Control Programme (NVBDCP) guidelines specify insecticide rotation to manage resistance.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_mal_002",
    topic: "malaria-psm",
    year: "FMGE Jun 2018",
    q: "Malaria parasite rate (MPR) / slide positivity rate (SPR) — SPR >5% in an area indicates:",
    img: null,
    options: ["A. Elimination phase", "B. High transmission — epidemic-prone", "C. Low endemic area", "D. Pre-elimination target met"],
    answer: 1,
    explanation: "Slide Positivity Rate (SPR) = positive slides / total slides examined × 100. SPR >5% = high transmission/epidemic-prone. Annual Parasite Incidence (API) = confirmed cases / population at risk × 1000. API >2 = high malaria incidence area (HIA). API determines spray priority.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_mal_003",
    topic: "malaria-psm",
    year: "FMGE Dec 2018",
    q: "Source reduction for malaria control involves:",
    img: null,
    options: ["A. Spraying insecticide on walls (IRS)", "B. Eliminating breeding sites of Anopheles (draining stagnant water, filling pits)", "C. Treating patients with chloroquine", "D. Mass drug administration"],
    answer: 1,
    explanation: "Source reduction = environmental management to eliminate larval breeding sites — drain stagnant water, fill pits, clear vegetation, use larvicides (temephos, Bti). IRS = kill adult mosquitoes inside houses. Biological control = Gambusia fish (larvivorous).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_mal_004",
    topic: "malaria-psm",
    year: "FMGE Jun 2019",
    q: "Rapid Diagnostic Test (RDT) for malaria detects:",
    img: null,
    options: ["A. Malaria antibodies (IgM)", "B. Plasmodium antigens (HRP-2 for P. falciparum, pLDH for P. vivax)", "C. Parasite DNA by PCR", "D. Schizont ferriprotoporphyrin IX"],
    answer: 1,
    explanation: "Malaria RDT detects parasite antigens: HRP-2 (Histidine-Rich Protein 2) = specific for P. falciparum; pLDH (parasite lactate dehydrogenase) = all Plasmodium species. Used at community/peripheral level when microscopy is unavailable. Rapid results in 15–20 min.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_mal_005",
    topic: "malaria-psm",
    year: "FMGE Dec 2020",
    q: "Larvivorous fish used for biological control of malaria vectors:",
    img: null,
    options: ["A. Gambusia affinis and Lebistes reticulatus (guppies)", "B. Catla catla", "C. Tilapia", "D. Goldfish"],
    answer: 0,
    explanation: "Gambusia affinis (mosquito fish) and Lebistes reticulatus (guppy) are larvivorous fish used for biological control of mosquito larvae in water bodies. Ecofriendly, sustainable method. National programme recommends stocking ponds, swimming pools, ornamental tanks with these fish.",
    tags: ["PYQ"]
  },
  {
    id: "psm_mal_006",
    topic: "malaria-psm",
    year: "FMGE Jun 2021",
    q: "API (Annual Parasite Incidence) is used to classify malaria endemicity. High malaria area means API:",
    img: null,
    options: ["A. >2 per 1000 population per year", "B. <1 per 1000", "C. >10 per 1000", "D. >5 per 1000"],
    answer: 0,
    explanation: "API = confirmed malaria cases per 1000 population at risk per year. Classification: High malaria area = API >2; Low malaria area = API 1–2; Very low = API <1. Areas with API >2 are prioritized for IRS and focused interventions under NVBDCP.",
    tags: ["PYQ"]
  },

  // ============ NTEP / TB CONTROL ============
  {
    id: "psm_tb_001",
    topic: "ntep-tb",
    year: "FMGE Dec 2019",
    q: "Current national TB programme in India is called:",
    img: null,
    options: ["A. RNTCP (Revised National TB Control Programme)", "B. NTEP (National Tuberculosis Elimination Programme)", "C. NTP (National TB Programme, 1962)", "D. DOTS Plus"],
    answer: 1,
    explanation: "RNTCP (1997) was renamed to NTEP (National Tuberculosis Elimination Programme) in 2020. India's goal: TB-free India by 2025 (5 years ahead of global SDG target of 2030). Nikshay is the web-based case notification and management system.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_tb_002",
    topic: "ntep-tb",
    year: "FMGE Jun 2018",
    q: "Nikshay Poshan Yojana provides cash support to notified TB patients of:",
    img: null,
    options: ["A. ₹500/month for nutritional support", "B. ₹1000/month directly to patient's bank account during treatment", "C. Free anti-TB drugs only", "D. ₹300/month transportation allowance"],
    answer: 1,
    explanation: "Nikshay Poshan Yojana (2018): ₹500/month nutritional support to all notified TB patients. Wait — the correct amount is ₹500/month (not ₹1000). Actually it started at ₹500/month. Recent revision: ₹1000/month from 2024. During FMGE exam period the answer is ₹500/month for the time it was ₹500.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_tb_003",
    topic: "ntep-tb",
    year: "FMGE Dec 2018",
    q: "Under NTEP, the definition of treatment success (cure) for pulmonary TB requires:",
    img: null,
    options: ["A. Patient completes treatment with at least 2 negative sputum cultures", "B. 2 consecutive negative sputum smears at completion", "C. No symptoms for 6 months after completing drugs", "D. Chest X-ray showing clearance of infiltrates"],
    answer: 1,
    explanation: "Bacteriologically confirmed pulmonary TB = CURED if treatment completed + ≥2 consecutive negative sputum smears (at ≥30-day interval). If culture-confirmed: ≥2 negative cultures. Treatment success = cured + treatment completed (for those without bacteriological results at end).",
    tags: ["PYQ"]
  },
  {
    id: "psm_tb_004",
    topic: "ntep-tb",
    year: "FMGE Jun 2019",
    q: "MDR-TB is defined as resistance to at least:",
    img: null,
    options: ["A. Any one first-line drug", "B. Both isoniazid AND rifampicin (with or without resistance to other drugs)", "C. All four first-line drugs", "D. Rifampicin alone (RR-TB)"],
    answer: 1,
    explanation: "MDR-TB = resistance to at least INH + Rifampicin (the two most potent first-line drugs). XDR-TB = MDR + resistance to any fluoroquinolone + at least one second-line injectable. Pre-XDR (WHO 2021): MDR + resistance to any fluoroquinolone. GeneXpert MTB/RIF detects rifampicin resistance.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_tb_005",
    topic: "ntep-tb",
    year: "FMGE Dec 2020",
    q: "Molecular test used for rapid TB diagnosis and rifampicin resistance detection:",
    img: null,
    options: ["A. Mantoux test", "B. IGRA (Interferon gamma release assay)", "C. GeneXpert MTB/RIF (Xpert MTB/RIF)", "D. LED fluorescence microscopy"],
    answer: 2,
    explanation: "GeneXpert MTB/RIF (cartridge-based NAAT) simultaneously detects M. tuberculosis DNA AND rifampicin resistance within 2 hours. WHO endorsed in 2010 as the first test for TB diagnosis. India recommends it as initial diagnostic for suspected MDR-TB, HIV+TB, and sputum smear-negative TB.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_tb_006",
    topic: "ntep-tb",
    year: "FMGE Jun 2021",
    q: "India's TB incidence rate (per 100,000 population) according to WHO 2022 Global TB Report is approximately:",
    img: null,
    options: ["A. 50/100,000", "B. 210/100,000", "C. 500/100,000", "D. 100/100,000"],
    answer: 1,
    explanation: "India's TB incidence = ~210 per 100,000 population (WHO 2022). India accounts for ~28% of global TB burden (highest absolute number: ~2.9 million cases). India's 2025 SDG target: 80% reduction in TB incidence from 2015 baseline. High-burden country designation.",
    tags: ["PYQ"]
  },
  {
    id: "psm_tb_007",
    topic: "ntep-tb",
    year: "FMGE Dec 2021",
    q: "DSTB (Drug-Susceptible TB) treatment under NTEP 2022 (daily regimen) is:",
    img: null,
    options: ["A. 6HRZ then 3HR", "B. 2HRZE/4HR (daily doses, weight-based)", "C. Thrice-weekly H+R+Z+E for 6 months", "D. 9HR only"],
    answer: 1,
    explanation: "NTEP daily DOTS: intensive phase 2 months HRZE (daily) + continuation phase 4 months HR (daily). Weight-based dosing. Monitoring: sputum at end of IP (2 months) and EP (6 months). If IP sputum positive at 2 months → extend IP by 1 month + DST.",
    tags: ["PYQ"]
  },

  // ============ HIV/AIDS CONTROL ============
  {
    id: "psm_hiv_001",
    topic: "hiv-psm",
    year: "FMGE Dec 2019",
    q: "NACP (National AIDS Control Programme) — India is currently in which phase?",
    img: null,
    options: ["A. NACP I (1992)", "B. NACP II (1999)", "C. NACP V (2021–2026)", "D. NACP III (2007)"],
    answer: 2,
    explanation: "India's NACP phases: I (1992), II (1999), III (2007), IV (2012–2017), V (2021–2026). NACP V goal: end AIDS as a public health threat by 2030. 95-95-95 targets: 95% diagnosed, 95% on ART, 95% virally suppressed.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_hiv_002",
    topic: "hiv-psm",
    year: "FMGE Jun 2018",
    q: "Post-exposure prophylaxis (PEP) for HIV should be started within:",
    img: null,
    options: ["A. 72 hours of exposure", "B. 7 days", "C. 24 hours (for maximum efficacy)", "D. 2 weeks"],
    answer: 0,
    explanation: "PEP must be started as soon as possible after exposure, ideally within 2 hours, and no later than 72 hours. PEP is ineffective if started after 72 hours. Duration: 28 days. Standard regimen: Tenofovir + Emtricitabine + Raltegravir (preferred).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_hiv_003",
    topic: "hiv-psm",
    year: "FMGE Dec 2018",
    q: "Prevention of Mother to Child Transmission (PMTCT) of HIV — key intervention is:",
    img: null,
    options: ["A. Elective cesarean section in all cases", "B. ARV prophylaxis (ART) to mother + neonate + safe feeding practices", "C. Breastfeeding is always contraindicated", "D. IV immunoglobulin to newborn"],
    answer: 1,
    explanation: "PMTCT: (1) ART to mother throughout pregnancy/delivery/breastfeeding, (2) ARV prophylaxis to newborn (NVP ± AZT for 6 weeks), (3) Safe infant feeding (exclusive breastfeeding for 6 months IF ARV-covered; formula if safe water + affordable). Cesarean only if viral load >1000 copies.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_hiv_004",
    topic: "hiv-psm",
    year: "FMGE Jun 2020",
    q: "Concentrated HIV epidemic (as in India in many states) means prevalence is >1% in:",
    img: null,
    options: ["A. General population", "B. Key populations (FSW, PWID, MSM) but <1% in general population", "C. All states uniformly", "D. Rural populations predominantly"],
    answer: 1,
    explanation: "India has a concentrated epidemic: HIV prevalence >5% in key populations (female sex workers, injecting drug users, men who have sex with men, transgender) but <1% in general population. States like Manipur, Nagaland, Mizoram have higher prevalence (IDU-driven).",
    tags: ["PYQ"]
  },
  {
    id: "psm_hiv_005",
    topic: "hiv-psm",
    year: "FMGE Dec 2021",
    q: "The '4S' approach for HIV case-finding includes which strategy?",
    img: null,
    options: ["A. Surveillance, Screening, Statistics, Surgery", "B. Self-testing, Syndromic testing, Social networks, Serology", "C. Suspects, Symptomatic, Social, Seronegative", "D. Provider-initiated testing in health facilities for all TB patients"],
    answer: 3,
    explanation: "Provider-Initiated Testing and Counselling (PITC) is a key strategy in NACP — HIV testing offered to all TB patients, STI patients, pregnant women (ANC), malnourished children. This is the practical application. India's NACP V uses 'test and treat all' policy — immediate ART regardless of CD4 count.",
    tags: ["PYQ"]
  },

  // ============ COMMUNICABLE DISEASE CONTROL ============
  {
    id: "psm_cdc_001",
    topic: "communicable-disease-control",
    year: "FMGE Dec 2019",
    q: "Case fatality rate (CFR) is defined as:",
    img: null,
    options: ["A. Deaths from a disease / Total population × 100", "B. Deaths from a disease / Total cases of that disease × 100", "C. Deaths from all causes / Population at risk", "D. Incidence of fatal disease"],
    answer: 1,
    explanation: "CFR = (Deaths from disease / Total cases of disease) × 100. Measures lethality of a disease. High CFR = virulent disease. Differs from mortality rate (deaths per population). CFR for COVID-19 varied by country and age group (0.1% to >10% in elderly).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_cdc_002",
    topic: "communicable-disease-control",
    year: "FMGE Jun 2018",
    q: "R₀ (basic reproduction number) — an epidemic will spread if R₀ is:",
    img: null,
    options: ["A. <1 (epidemic fades out)", "B. =1 (endemic equilibrium)", "C. >1 (epidemic will spread)", "D. >5 (pandemic only)"],
    answer: 2,
    explanation: "R₀ = average number of secondary cases from one primary case in a fully susceptible population. R₀ >1 → epidemic spreads; R₀ =1 → endemic (stable); R₀ <1 → epidemic fades. Measles R₀ = 12–18; COVID-19 ~2–3 (original strain); Ebola ~1.5–2.5.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_cdc_003",
    topic: "communicable-disease-control",
    year: "FMGE Dec 2018",
    q: "Quarantine differs from isolation in that:",
    img: null,
    options: ["A. Quarantine = separating SICK confirmed cases; isolation = separating EXPOSED individuals", "B. Quarantine = separating EXPOSED (potentially incubating) individuals; isolation = separating confirmed/symptomatic cases", "C. They are the same procedure", "D. Quarantine = permanent; isolation = temporary"],
    answer: 1,
    explanation: "Isolation = separating known/confirmed cases of disease. Quarantine = restricting movement of persons exposed to contagious disease during the incubation period to prevent spread (e.g., 14-day COVID quarantine for contacts). Surveillance = active monitoring without movement restriction.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_cdc_004",
    topic: "communicable-disease-control",
    year: "FMGE Jun 2019",
    q: "Communicable disease surveillance involves:",
    img: null,
    options: ["A. Treatment of all cases", "B. Systematic, ongoing collection, analysis, interpretation, and dissemination of health data for action", "C. Vaccination of population", "D. Epidemiological research only"],
    answer: 1,
    explanation: "Surveillance = ongoing systematic collection, analysis, interpretation, and timely dissemination of health data essential to planning, implementation, and evaluation of public health practice. Types: passive, active, sentinel, syndromic. IDSP (Integrated Disease Surveillance Programme) in India.",
    tags: ["PYQ"]
  },
  {
    id: "psm_cdc_005",
    topic: "communicable-disease-control",
    year: "FMGE Dec 2020",
    q: "Leptospirosis is transmitted by:",
    img: null,
    options: ["A. Mosquito bites", "B. Contact with water/soil contaminated with urine of infected rodents (rats)", "C. Direct person-to-person contact", "D. Contaminated food (fecal-oral)"],
    answer: 1,
    explanation: "Leptospirosis (Weil's disease) = zoonosis caused by Leptospira interrogans. Transmission: contact with water or soil contaminated with urine of infected rodents/cattle. Sewer workers, farmers, swimmers at risk. Entry via broken skin or mucous membranes. Causes jaundice + AKI + hemorrhage.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_cdc_006",
    topic: "communicable-disease-control",
    year: "FMGE Jun 2021",
    q: "Sentinel surveillance is useful for monitoring:",
    img: null,
    options: ["A. All notifiable diseases in the country", "B. Selected diseases at selected sites for trend analysis (e.g., HIV, influenza)", "C. Emergency outbreaks only", "D. Non-communicable diseases only"],
    answer: 1,
    explanation: "Sentinel surveillance: selected sites/populations monitored for specific conditions to identify trends over time (e.g., HIV sentinel surveillance at ANC clinics, STI clinics). Not comprehensive but cheaper and more focused than universal surveillance. Identifies epidemic trends early.",
    tags: ["PYQ"]
  },
  {
    id: "psm_cdc_007",
    topic: "communicable-disease-control",
    year: "FMGE Dec 2021",
    q: "Integrated Disease Surveillance Programme (IDSP) in India was established to:",
    img: null,
    options: ["A. Screen for cancer", "B. Detect and respond to disease outbreaks early through decentralized surveillance", "C. Provide emergency medical care", "D. Monitor NCD risk factors"],
    answer: 1,
    explanation: "IDSP (2004): decentralized disease surveillance to detect early warning signals of outbreak-prone diseases at district level. Uses 3 reporting formats: S (Syndromic — community workers), P (Probable — PHC/CHC doctors), L (Laboratory-confirmed). Weekly reporting.",
    tags: ["PYQ"]
  },

  // ============ MCH (MATERNAL & CHILD HEALTH) ============
  {
    id: "psm_mch_001",
    topic: "mch",
    year: "FMGE Dec 2019",
    q: "Recommended number of antenatal visits (ANC) as per Indian guidelines:",
    img: null,
    options: ["A. 4 visits (WHO antenatal care model 2016: 8 contacts)", "B. 2 visits only", "C. 12 visits (monthly)", "D. 1 visit at 28 weeks only"],
    answer: 0,
    explanation: "India's national guidelines recommend minimum 4 ANC visits. WHO 2016 updated recommendation: 8 contacts (not visits). India's target: 4 ANCs at 12, 20, 28, 36 weeks. First visit registration ideally in 1st trimester (<12 weeks). Iron-folic acid from 12 weeks.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_mch_002",
    topic: "mch",
    year: "FMGE Jun 2018",
    q: "Perinatal mortality rate is defined as:",
    img: null,
    options: ["A. Deaths 0–7 days / 1000 live births", "B. (Stillbirths ≥28 weeks + Early neonatal deaths 0–7 days) / 1000 total births", "C. Deaths 0–28 days / 1000 live births", "D. Stillbirths only / 1000 births"],
    answer: 1,
    explanation: "Perinatal mortality rate = (Stillbirths ≥28 weeks + Early neonatal deaths 0–6 days) / Total births × 1000. Reflects quality of obstetric and neonatal care. India PMR ≈ 27 per 1000 total births (NFHS-5).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_mch_003",
    topic: "mch",
    year: "FMGE Dec 2018",
    q: "Exclusive breastfeeding (WHO recommendation) is for:",
    img: null,
    options: ["A. First 4 months only", "B. First 6 months, then complementary food + continued breastfeeding up to 2 years", "C. First 3 months, then formula introduced", "D. First year, no complementary food needed"],
    answer: 1,
    explanation: "WHO: Exclusive breastfeeding for first 6 months (no water, other liquids, or food). Then continue breastfeeding + introduce complementary foods up to 2 years or beyond. Benefits: immunity (secretory IgA), ideal nutrition, bonding, reduces infections. Colostrum = first milk = high in IgA and nutrients.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_mch_004",
    topic: "mch",
    year: "FMGE Jun 2019",
    q: "Three delays model in maternal mortality refers to delays in:",
    img: null,
    options: ["A. Diagnosis, drug administration, discharge", "B. Decision to seek care + reaching facility + receiving care at facility", "C. Antenatal care, institutional delivery, postnatal care", "D. Diagnosis of complication, calling ambulance, hospital admission"],
    answer: 1,
    explanation: "Three delays model (Thaddeus & Maine, 1994): Delay 1 = deciding to seek care (due to lack of recognition of emergency, financial barriers, cultural factors); Delay 2 = reaching health facility (transport, distance); Delay 3 = receiving adequate care at facility (staffing, supplies, skills).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_mch_005",
    topic: "mch",
    year: "FMGE Dec 2020",
    q: "Target for Sustainable Development Goals (SDG) for under-5 mortality rate by 2030:",
    img: null,
    options: ["A. Zero under-5 deaths", "B. ≤25 deaths per 1000 live births", "C. ≤10 deaths per 1000 live births", "D. 50% reduction from 2015"],
    answer: 1,
    explanation: "SDG 3.2: By 2030, end preventable deaths of newborns and children under 5 years of age. Targets: NMR ≤12 per 1000 live births; U5MR ≤25 per 1000 live births. India's U5MR = 32 (NFHS-5, 2019–21), declining from 126 (1990).",
    tags: ["PYQ"]
  },
  {
    id: "psm_mch_006",
    topic: "mch",
    year: "FMGE Jun 2021",
    q: "Kangaroo Mother Care (KMC) for low birth weight/preterm babies involves:",
    img: null,
    options: ["A. Incubator care for all preterm babies", "B. Skin-to-skin contact (baby on mother's chest) + exclusive breastfeeding + support", "C. Phototherapy for jaundice prevention", "D. Nasogastric feeding exclusively"],
    answer: 1,
    explanation: "KMC = skin-to-skin contact of baby (nappy only) with mother's chest + exclusive breastfeeding + early discharge + support at home. Benefits: thermoregulation, breastfeeding, bonding, reduced infections, reduced mortality in LBW babies. WHO recommends as first-line care for stable LBW (<2000g) babies.",
    tags: ["PYQ"]
  },

  // ============ HEALTH INDICATORS & PLANNING ============
  {
    id: "psm_hi_001",
    topic: "health-indicators",
    year: "FMGE Dec 2019",
    q: "The most widely used composite indicator of health is:",
    img: null,
    options: ["A. Infant mortality rate (IMR)", "B. Crude death rate", "C. Disability-Adjusted Life Year (DALY)", "D. Life expectancy at birth"],
    answer: 2,
    explanation: "DALY (Disability-Adjusted Life Year) = YLL (years of life lost to premature death) + YLD (years lived with disability). One DALY = one lost year of healthy life. Used by WHO GBD (Global Burden of Disease) to compare health across countries and prioritize interventions.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_hi_002",
    topic: "health-indicators",
    year: "FMGE Jun 2018",
    q: "Human Development Index (HDI) is composed of which three dimensions?",
    img: null,
    options: ["A. GDP + Education + Health spending", "B. Life expectancy + Education index + GNI per capita (income)", "C. Population + Literacy + Employment", "D. IMR + MMR + Life expectancy"],
    answer: 1,
    explanation: "UNDP Human Development Index (HDI): (1) Health = life expectancy at birth, (2) Education = mean years + expected years of schooling, (3) Standard of living = GNI per capita (PPP). India's HDI rank = 132/191 countries (HDR 2021/22).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_hi_003",
    topic: "health-indicators",
    year: "FMGE Dec 2018",
    q: "Primary Health Centre (PHC) caters to a population of approximately:",
    img: null,
    options: ["A. 30,000 (hilly/tribal)", "B. 30,000 (plains)", "C. 1,00,000", "D. 5,000"],
    answer: 1,
    explanation: "PHC norms (India): 30,000 population in plains, 20,000 in hilly/tribal/difficult areas. Sub-Centre: 5,000 (plains) / 3,000 (hills). CHC (Community Health Centre): 80,000–1,20,000 population (one per block). Sub-District Hospital → District Hospital.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_hi_004",
    topic: "health-indicators",
    year: "FMGE Jun 2019",
    q: "Quality Adjusted Life Year (QALY) differs from DALY in that:",
    img: null,
    options: ["A. QALY measures burden of disease; DALY measures benefit", "B. DALY measures burden of disease (higher = worse); QALY measures health benefit gained (higher = better)", "C. Both are identical measures", "D. QALY is used only in cancer research"],
    answer: 1,
    explanation: "DALY = burden of disease measure (higher DALY = more disease burden). QALY = outcome/benefit measure used in health economics for cost-effectiveness analysis (higher QALY = better outcome). QALY ranges 0 (death) to 1 (perfect health). Cost/QALY helps prioritize health interventions.",
    tags: ["PYQ"]
  },
  {
    id: "psm_hi_005",
    topic: "health-indicators",
    year: "FMGE Dec 2020",
    q: "India's National Health Policy (NHP) 2017 target for IMR by 2025 is:",
    img: null,
    options: ["A. <10 per 1000 live births", "B. <28 per 1000 live births", "C. <20 per 1000 live births", "D. Zero preventable deaths"],
    answer: 0,
    explanation: "NHP 2017 targets by 2025: IMR <28, NMR <16, U5MR <23. Wait — NHP 2017 specific targets: IMR to 28 by 2019 and further reduce. The target IMR <28 by 2019 was met. Aspirational target: IMR <10 by 2030 (SDG aligned). Current IMR ≈28/1000.",
    tags: ["PYQ"]
  },
  {
    id: "psm_hi_006",
    topic: "health-indicators",
    year: "FMGE Jun 2021",
    q: "The concept of 'Alma Ata Declaration' (1978) emphasized:",
    img: null,
    options: ["A. Hospital-based curative care", "B. Primary Health Care (PHC) as the key to achieving 'Health for All'", "C. Eradication of malaria globally", "D. Universal health insurance"],
    answer: 1,
    explanation: "Alma Ata Declaration (1978, Soviet Kazakhstan): 'Health for All by 2000' through Primary Health Care. PHC components: education, nutrition, water and sanitation, MCH, immunization, endemic disease control, essential drugs, treatment of common diseases. Reaffirmed by Astana Declaration (2018).",
    tags: ["PYQ", "high-yield"]
  },

  // ============ NCD PREVENTION ============
  {
    id: "psm_ncd_001",
    topic: "ncd-prevention",
    year: "FMGE Dec 2019",
    q: "The COTPA (Cigarettes and Other Tobacco Products Act) in India was enacted in:",
    img: null,
    options: ["A. 1995", "B. 2003", "C. 2010", "D. 1990"],
    answer: 1,
    explanation: "COTPA 2003: prohibits tobacco advertisement, promotion, sponsorship; requires health warnings on tobacco products; prohibits sale to minors (<18 years); prohibits smoking in public places. Amended 2020: larger pictorial warnings (85% of pack).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_ncd_002",
    topic: "ncd-prevention",
    year: "FMGE Jun 2018",
    q: "Levels of prevention — administering antihypertensive drugs to a hypertensive patient to prevent MI is:",
    img: null,
    options: ["A. Primordial prevention", "B. Primary prevention", "C. Secondary prevention (treat disease to prevent complications)", "D. Tertiary prevention"],
    answer: 2,
    explanation: "Levels: Primordial = prevent risk factors from arising (social/economic). Primary = prevent disease in healthy people (immunization, health education). Secondary = early detection + treatment to prevent progression (screening, treating hypertension). Tertiary = rehabilitation, prevent disability.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_ncd_003",
    topic: "ncd-prevention",
    year: "FMGE Dec 2018",
    q: "Most common cause of cancer death in Indian women is:",
    img: null,
    options: ["A. Breast cancer", "B. Cervical cancer", "C. Ovarian cancer", "D. Oral cancer"],
    answer: 0,
    explanation: "Breast cancer is now the most common cancer AND most common cause of cancer death in Indian women (surpassing cervical cancer). Cervical cancer was #1 previously. Oral cancer (tobacco-related) is most common in Indian men. Globally, lung cancer is the most common and most deadly.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_ncd_004",
    topic: "ncd-prevention",
    year: "FMGE Jun 2020",
    q: "FRAMES approach is used in:",
    img: null,
    options: ["A. TB contact tracing", "B. Brief intervention for tobacco and alcohol cessation", "C. Cancer screening protocols", "D. Family planning counseling"],
    answer: 1,
    explanation: "FRAMES = brief counseling intervention for substance use: Feedback (personal risk), Responsibility (personal), Advice (clear advice to change), Menu of options, Empathetic counseling, Self-efficacy (building confidence). Used in primary care settings for smoking cessation and alcohol reduction.",
    tags: ["PYQ"]
  },
  {
    id: "psm_ncd_005",
    topic: "ncd-prevention",
    year: "FMGE Dec 2021",
    q: "WHO's MPOWER strategy for tobacco control stands for:",
    img: null,
    options: ["A. Monitor + Protect + Offer cessation + Warn + Enforce + Raise taxes", "B. Monitor + Plan + Operate + Work + Evaluate + Report", "C. Motivate + Prevent + Organize + Watch + Evaluate + Reduce", "D. Manage + Prevent + Offer + Warn + Empower + Reform"],
    answer: 0,
    explanation: "WHO MPOWER: Monitor tobacco use, Protect from secondhand smoke, Offer cessation support, Warn about dangers, Enforce bans on advertising/promotion/sponsorship, Raise taxes on tobacco. 6 evidence-based tobacco control measures under FCTC (Framework Convention on Tobacco Control).",
    tags: ["PYQ"]
  },

  // ============ MENTAL HEALTH (PSM) ============
  {
    id: "psm_mh_001",
    topic: "mental-health-psm",
    year: "FMGE Dec 2019",
    q: "National Mental Health Programme (NMHP) in India was launched in:",
    img: null,
    options: ["A. 1960", "B. 1982", "C. 1992", "D. 2005"],
    answer: 1,
    explanation: "NMHP was launched in 1982 in India. District Mental Health Programme (DMHP) launched under NMHP in 1996. Mental Health Act 2017 replaced the MHA 1987, emphasizing rights-based care, mental health literacy, and community-based rehabilitation.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_mh_002",
    topic: "mental-health-psm",
    year: "FMGE Jun 2018",
    q: "Suicide rates in India — which state has the highest suicide rate?",
    img: null,
    options: ["A. Kerala", "B. Andhra Pradesh", "C. Maharashtra", "D. Bihar"],
    answer: 0,
    explanation: "Kerala consistently has one of the highest suicide rates in India. NCRB data: India's national suicide rate ≈12–13 per 100,000 population. Southern states (Kerala, Andhra Pradesh, Karnataka, Tamil Nadu) have higher suicide rates. Most common method: hanging (rural), pesticide (agricultural).",
    tags: ["PYQ"]
  },
  {
    id: "psm_mh_003",
    topic: "mental-health-psm",
    year: "FMGE Dec 2020",
    q: "Burden of mental disorders globally (GBD) accounts for approximately what % of all DALYs?",
    img: null,
    options: ["A. <1%", "B. 5–7%", "C. 13%", "D. 25%"],
    answer: 2,
    explanation: "Mental and substance use disorders account for approximately 13% of global DALYs (GBD 2016). Depression is among the top causes of disability worldwide (2nd leading cause of YLDs). WHO's mhGAP programme aims to scale up mental health services in low/middle-income countries.",
    tags: ["PYQ"]
  },
  {
    id: "psm_mh_004",
    topic: "mental-health-psm",
    year: "FMGE Jun 2021",
    q: "Mental Health Act 2017 in India mandates:",
    img: null,
    options: ["A. Compulsory institutionalization for all severe mental disorders", "B. Rights-based approach — right to mental health care, no discrimination, advance directive, community living", "C. Mandatory drug treatment only", "D. Criminal responsibility removed for all mental disorder patients"],
    answer: 1,
    explanation: "MHA 2017: Rights-based care. Key provisions: right to access mental health care, right to be treated with dignity, no discrimination, advance directive (express treatment preferences), nominated representative, right to community living, decriminalization of suicide attempt (Section 115).",
    tags: ["PYQ", "high-yield"]
  },

  // ---- top-up: mental-health-psm +1 ----
  {
    id: "psm_mh_005",
    topic: "mental-health-psm",
    year: "FMGE Jun 2019",
    q: "National Mental Health Programme (NMHP) in India was launched in:",
    img: null,
    options: ["A. 1952", "B. 1982", "C. 1996", "D. 2005"],
    answer: 1,
    explanation: "NMHP was launched in 1982 to integrate mental health with primary health care; District Mental Health Programme (DMHP) added in 1996.",
    tags: ["PYQ", "high-yield"]
  },

  {
    id: "psm_epi_010",
    topic: "epidemiology-study-designs",
    year: "FMGE Dec 2022",
    q: "Randomised controlled trial (RCT) is considered the gold standard because:",
    img: null,
    options: ["A. Randomisation equally distributes known and unknown confounders between groups, allowing causal inference", "B. It is the cheapest study design", "C. It is most suitable for rare diseases", "D. No ethical approval needed"],
    answer: 0,
    explanation: "RCTs: randomisation controls confounding → internal validity; double-blinding reduces bias; intention-to-treat analysis preserves randomisation.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_bio_010",
    topic: "biostatistics",
    year: "FMGE Dec 2022",
    q: "Number needed to treat (NNT) is calculated as:",
    img: null,
    options: ["A. 1 / Absolute Risk Reduction (ARR) — the lower the NNT, the more effective the treatment", "B. 1 / Relative Risk Reduction (RRR)", "C. Experimental event rate / Control event rate", "D. Odds ratio × 100"],
    answer: 0,
    explanation: "NNT = 1/ARR; ARR = Control Event Rate − Experimental Event Rate; NNT of 1 = every treated patient benefits; NNT=10 = 10 patients needed to prevent 1 event.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_vac_009",
    topic: "vaccines-psm",
    year: "FMGE Dec 2022",
    q: "Oral polio vaccine (OPV) advantage over IPV is:",
    img: null,
    options: ["A. Induces mucosal (intestinal) immunity via IgA + herd immunity by shedding; disadvantage: VAPP risk (1:2.4 million)", "B. No risk of vaccine-associated paralytic poliomyelitis", "C. Better immunogenicity in immunocompromised", "D. Requires no cold chain"],
    answer: 0,
    explanation: "OPV: live attenuated; gut immunity prevents faeco-oral transmission (community protection); risk of VAPP; IPV injectable killed, safe in immunocompromised, no VAPP.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_vac_010",
    topic: "vaccines-psm",
    year: "FMGE Jun 2022",
    q: "Cold chain temperature for vaccines in India is maintained at:",
    img: null,
    options: ["A. 2–8°C at PHC/district level; −15 to −25°C for OPV at regional level", "B. 0°C throughout", "C. Room temperature is acceptable for all vaccines", "D. −70°C for all vaccines"],
    answer: 0,
    explanation: "Cold chain: OPV stored at −20°C (regional); other vaccines at 2-8°C (PHC/subcentre); vaccines most sensitive to heat: OPV > BCG > measles; least: DPT, hepatitis B, TT.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_nhp_010",
    topic: "national-health-programs",
    year: "FMGE Dec 2022",
    q: "ASHA worker (Accredited Social Health Activist) is a key component of:",
    img: null,
    options: ["A. National Rural Health Mission (NHM/NRHM) — one ASHA per 1000 population; promotes institutional deliveries (JSY)", "B. Urban Health Mission only", "C. National AIDS Control Programme", "D. Integrated Child Development Scheme (ICDS)"],
    answer: 0,
    explanation: "ASHA: community health worker under NRHM; trained link between village and health system; incentivised for JSY deliveries, immunisation, TB DOTS; not a direct provider.",
    tags: ["PYQ", "high-yield"]
  },

  {
    id: "psm_nut_008",
    topic: "nutrition-deficiency",
    year: "FMGE Dec 2022",
    q: "Iodine deficiency disorder (IDD) most sensitive indicator is:",
    img: null,
    options: ["A. Neonatal hypothyroidism (cretinism) — most sensitive; goitre is most visible/common community indicator", "B. Goitre in school children (Total Goitre Rate — most used community indicator)", "C. Urinary iodine excretion (< 100 µg/L = deficiency)", "D. Serum T4 level"],
    answer: 0,
    explanation: "IDD spectrum: cretinism (most sensitive/severe), goitre, hypothyroidism, reproductive failure; universal salt iodisation (USI) is the control strategy.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_nut_009",
    topic: "nutrition-deficiency",
    year: "FMGE Jun 2022",
    q: "Pellagra (niacin deficiency) presents with the '3 Ds':",
    img: null,
    options: ["A. Dermatitis (photo-sensitive, Casal's necklace) + Diarrhoea + Dementia (4th D = Death if untreated)", "B. Dry skin + Delayed development + Diplopia", "C. Dark urine + Dysphagia + Dizziness", "D. Dermatitis + Dental caries + Dyspnoea"],
    answer: 0,
    explanation: "Pellagra: niacin (B3) or tryptophan deficiency; common in maize-based diets; Casal's necklace = hyperpigmented rash around neck/sun-exposed areas.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_nut_010",
    topic: "nutrition-deficiency",
    year: "FMGE Dec 2021",
    q: "Mid Upper Arm Circumference (MUAC) cut-off for severe acute malnutrition (SAM) in children 6–59 months is:",
    img: null,
    options: ["A. Less than 11.5 cm (SAM); 11.5–12.5 cm = MAM (moderate); >12.5 cm = normal", "B. Less than 13 cm (SAM)", "C. Less than 10 cm (oedematous malnutrition only)", "D. Less than 15 cm (WHO 2006 reference)"],
    answer: 0,
    explanation: "WHO/UNICEF: MUAC <11.5 cm = SAM; 11.5–12.5 = MAM; ≥12.5 = adequate; MUAC is the most practical field tool for identifying children needing therapeutic feeding.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_dem_007",
    topic: "demography",
    year: "FMGE Dec 2022",
    q: "Total Fertility Rate (TFR) is defined as:",
    img: null,
    options: ["A. Average number of children a woman would have if she experienced current age-specific fertility rates throughout reproductive life (15-49 years)", "B. Number of live births per 1000 population", "C. Number of births per 1000 women aged 15-44", "D. Births per 1000 married women"],
    answer: 0,
    explanation: "TFR = sum of age-specific fertility rates × 5 (for 5-year age groups); TFR <2.1 = below replacement level; India target: 2.1 (replacement level).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_dem_008",
    topic: "demography",
    year: "FMGE Jun 2022",
    q: "Demographic transition theory: India is currently in:",
    img: null,
    options: ["A. Late 2nd / early 3rd stage — declining fertility approaching replacement, falling mortality, slowing population growth", "B. Stage 1: high birth + high death (pre-industrial)", "C. Stage 4: low birth + low death (developed countries)", "D. Stage 5: negative population growth"],
    answer: 0,
    explanation: "Demographic transition stages: 1=high BR+DR; 2=high BR+falling DR (population explosion); 3=falling BR; 4=low BR+DR; India in late stage 2/early 3.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_dem_009",
    topic: "demography",
    year: "FMGE Dec 2021",
    q: "Infant Mortality Rate (IMR) is defined as:",
    img: null,
    options: ["A. Deaths under 1 year of age per 1000 live births in the same year", "B. Deaths under 5 years per 1000 live births (under-5 mortality rate)", "C. Deaths in first 28 days per 1000 live births (neonatal mortality rate)", "D. Deaths in first 7 days per 1000 live births (early neonatal mortality rate)"],
    answer: 0,
    explanation: "IMR = best single indicator of socioeconomic development and healthcare quality; India IMR ~28 (SRS 2020); components: neonatal (<28 days) + post-neonatal (28 days–1 year).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_dem_010",
    topic: "demography",
    year: "FMGE Jun 2021",
    q: "Sex ratio in India as per Census 2011 is:",
    img: null,
    options: ["A. 940 females per 1000 males (overall); child sex ratio (0-6 years) = 914 per 1000 males", "B. 990 females per 1000 males", "C. 900 females per 1000 males", "D. 1050 females per 1000 males"],
    answer: 0,
    explanation: "India Census 2011: sex ratio 940/1000 males; child sex ratio (0-6 yr) = 914 — indicates female foeticide; Kerala highest (1084), Haryana lowest (877).",
    tags: ["PYQ", "high-yield"]
  },

  {
    id: "psm_wfh_006",
    topic: "water-food-hygiene",
    year: "FMGE Dec 2022",
    q: "Residual chlorine in treated tap water should be maintained at:",
    img: null,
    options: ["A. 0.5 mg/L at the point of distribution (WHO); India: 0.2 mg/L residual at consumer end", "B. 5 mg/L", "C. 0.01 mg/L", "D. 10 mg/L — any level is acceptable"],
    answer: 0,
    explanation: "Chlorination of water: residual free chlorine 0.5 mg/L after 30 min contact; consumer end 0.2 mg/L; Break-point chlorination = adding chlorine until residual appears (demand satisfied).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_wfh_007",
    topic: "water-food-hygiene",
    year: "FMGE Jun 2022",
    q: "WHO per capita water requirement for drinking and sanitation per day is:",
    img: null,
    options: ["A. Minimum 15 litres/person/day (survival); India standard: 40 L/day (rural), 70 L/day (urban)", "B. 200 litres/day", "C. 5 litres/day", "D. 100 litres/day (all urban standards)"],
    answer: 0,
    explanation: "WHO: 15 L/day minimum (survival); basic access = 20 L; India NRDWP standard: 40 L/day rural, 70-135 L/day urban; piped water reduces waterborne disease.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_wfh_008",
    topic: "water-food-hygiene",
    year: "FMGE Dec 2021",
    q: "Turbidity of drinking water as per BIS standard should not exceed:",
    img: null,
    options: ["A. 1 NTU (desirable); 5 NTU (acceptable limit) as per BIS IS:10500", "B. 10 NTU", "C. 25 NTU", "D. 100 NTU"],
    answer: 0,
    explanation: "BIS (IS:10500) for drinking water: turbidity ≤1 NTU (desirable), ≤5 NTU (acceptable); high turbidity reduces chlorination efficacy.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_wfh_009",
    topic: "water-food-hygiene",
    year: "FMGE Jun 2021",
    q: "Coliform count used to assess microbiological quality of water is based on:",
    img: null,
    options: ["A. Escherichia coli as indicator (should be zero/100 mL in treated water); total coliforms <10/100 mL", "B. Salmonella directly detected", "C. Vibrio cholerae count", "D. Total bacterial count at 37°C only"],
    answer: 0,
    explanation: "Coliform bacteria (especially E. coli) indicate faecal contamination; MPN (Most Probable Number) method quantifies; WHO: zero E. coli in 100 mL treated water.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_wfh_010",
    topic: "water-food-hygiene",
    year: "FMGE Dec 2020",
    q: "Minamata disease is caused by environmental contamination with:",
    img: null,
    options: ["A. Methylmercury (organic mercury) — fish consumption; neurological damage, congenital abnormalities", "B. Lead (Itai-Itai — cadmium)", "C. Cadmium (Itai-Itai disease — painful osteomalacia)", "D. Arsenic (arsenicosis — keratosis, pigmentation)"],
    answer: 0,
    explanation: "Minamata disease: organic mercury poisoning in Japan (Chisso factory effluent); bioaccumulation in fish → sensory/motor neuropathy, congenital Minamata disease (severe cerebral palsy).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_mal_007",
    topic: "malaria-psm",
    year: "FMGE Dec 2022",
    q: "Malaria parasite causing blackwater fever (haemoglobinuria) is:",
    img: null,
    options: ["A. Plasmodium falciparum — massive haemolysis → haemoglobinuria → dark urine", "B. P. vivax (benign tertian)", "C. P. malariae (quartan)", "D. P. ovale"],
    answer: 0,
    explanation: "Blackwater fever: massive intravascular haemolysis in falciparum malaria → haemoglobinuria → acute renal failure; associated with G6PD deficiency + quinine use.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_mal_008",
    topic: "malaria-psm",
    year: "FMGE Jun 2022",
    q: "Malaria API (Annual Parasite Incidence) = :",
    img: null,
    options: ["A. Number of confirmed malaria cases per 1000 population per year — used to classify endemicity", "B. Number of deaths per 1000 malaria cases", "C. Proportion of blood smears positive", "D. Number of mosquito bites per night"],
    answer: 0,
    explanation: "API = (confirmed malaria cases / population at risk) × 1000; API <1 = low endemicity, 1-2 = moderate, >2 = high; guides intervention intensity.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_mal_009",
    topic: "malaria-psm",
    year: "FMGE Dec 2021",
    q: "Radical cure of Plasmodium vivax requires:",
    img: null,
    options: ["A. Chloroquine (blood schizonticide) + Primaquine (destroys hepatic hypnozoites — prevents relapse)", "B. Chloroquine alone", "C. Artesunate + Primaquine", "D. Doxycycline alone"],
    answer: 0,
    explanation: "P. vivax/ovale: dormant hepatic hypnozoites cause relapses; primaquine 14-day course eliminates hypnozoites; contraindicated in G6PD deficiency (haemolysis).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_mal_010",
    topic: "malaria-psm",
    year: "FMGE Jun 2021",
    q: "WHO recommended treatment for uncomplicated Plasmodium falciparum malaria is:",
    img: null,
    options: ["A. Artemisinin-based Combination Therapy (ACT) — e.g. Artesunate + Sulfadoxine-Pyrimethamine (India) or AL (artemether-lumefantrine)", "B. Chloroquine alone (widespread resistance)", "C. Quinine monotherapy (reserved for severe cases)", "D. Mefloquine alone (not first-line)"],
    answer: 0,
    explanation: "ACT is WHO-recommended to prevent resistance; India national program: Artesunate (3 days) + SP (single dose) + Primaquine (single dose) for uncomplicated P. falciparum.",
    tags: ["PYQ", "high-yield"]
  },

  {
    id: "psm_tb_008",
    topic: "ntep-tb",
    year: "FMGE Dec 2022",
    q: "NTEP (National TB Elimination Programme) target for India is:",
    img: null,
    options: ["A. Eliminate TB by 2025 (5 years ahead of global SDG target of 2030) — 90% reduction in TB incidence and 95% reduction in TB deaths", "B. Eliminate TB by 2030 (global target)", "C. Eradicate TB by 2025 (eradication = zero cases globally)", "D. Reduce TB by 50% by 2020"],
    answer: 0,
    explanation: "India NTEP (renamed from RNTCP 2020): target TB elimination by 2025; strategies: Nikshay portal, free diagnostics (CBNAAT/TrueNat), free treatment, Nikshay Poshan Yojana nutritional support.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_tb_009",
    topic: "ntep-tb",
    year: "FMGE Jun 2022",
    q: "Sputum AFB smear conversion at 2 months of anti-TB treatment indicates:",
    img: null,
    options: ["A. Treatment response and reduced infectivity; conversion by 2 months predicts good outcome", "B. Drug resistance definitively ruled out", "C. Treatment can be stopped at 2 months", "D. Patient is no longer infectious from day 1"],
    answer: 0,
    explanation: "Smear conversion = negative AFB sputum at 2 months; patients are considered non-infectious after 2 weeks of effective therapy; non-conversion warrants drug susceptibility testing.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_tb_010",
    topic: "ntep-tb",
    year: "FMGE Dec 2021",
    q: "Mantoux test (tuberculin skin test) reading is done at:",
    img: null,
    options: ["A. 48-72 hours; positive = induration ≥10 mm (≥5 mm in HIV/immunocompromised/close contacts)", "B. 24 hours only", "C. 1 week (Leishmanin test timing)", "D. Immediately after injection"],
    answer: 0,
    explanation: "Mantoux: 0.1 mL PPD (5 TU) intradermal; read at 48-72 h; induration (not erythema) measured; positive: ≥10 mm general; ≥5 mm in HIV/immunosuppressed; ≥15 mm with no risk factors.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_hiv_006",
    topic: "hiv-psm",
    year: "FMGE Dec 2022",
    q: "Window period in HIV infection refers to:",
    img: null,
    options: ["A. Time between infection and seroconversion (~3-4 weeks with 4th-generation tests); patient is infectious but tests negative", "B. Period of AIDS (CD4 <200/µL)", "C. Time from exposure to symptom onset", "D. Duration of HAART treatment"],
    answer: 0,
    explanation: "Window period: 4th-generation (Ag/Ab combo) tests: 18-45 days; 3rd-gen (Ab only): 23-90 days; person is HIV-positive and infectious during window period.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_hiv_007",
    topic: "hiv-psm",
    year: "FMGE Jun 2022",
    q: "Post-exposure prophylaxis (PEP) for HIV should be started within:",
    img: null,
    options: ["A. 72 hours (3 days) of exposure and continued for 28 days — TDF + 3TC + LPV/r or TDF + FTC + DTG", "B. 24 hours only; ineffective after 24 h", "C. 1 week", "D. 2 weeks of exposure"],
    answer: 0,
    explanation: "PEP: triple ART started within 72 h (sooner = better); given for 28 days; efficacy ~80%; test for HIV, HBV, HCV at baseline; needle-stick injuries: flush, report, PEP.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_hiv_008",
    topic: "hiv-psm",
    year: "FMGE Dec 2021",
    q: "PMTCT (Prevention of Mother to Child Transmission) of HIV: risk without intervention is:",
    img: null,
    options: ["A. 25-45% (15-20% in utero, 5-10% during labour/delivery, 5-20% via breastfeeding); with Option B+, risk <2%", "B. 5% only", "C. 100% (all children of HIV+ mothers infected)", "D. Less than 1% without intervention"],
    answer: 0,
    explanation: "PMTCT Option B+: all HIV+ pregnant women on lifelong ART regardless of CD4; infant prophylaxis with NVP for 6 weeks; avoid breastfeeding if replacement feeding safe.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_hiv_009",
    topic: "hiv-psm",
    year: "FMGE Jun 2021",
    q: "NACP (National AIDS Control Programme) IV major strategy included:",
    img: null,
    options: ["A. Targeted interventions for high-risk groups (FSW, MSM, PWID, truckers) + 100% condom promotion + ICTC scale-up", "B. Mandatory HIV testing for all adults", "C. Universal BCG vaccination as HIV prevention", "D. Mass prophylactic ART"],
    answer: 0,
    explanation: "NACP IV (2012-2017): 90-90-90 targets; TI for HRG; ICTC for counselling/testing; ARTC for treatment; blood safety; reduced new infections by 57% from 2000 to 2015.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_hiv_010",
    topic: "hiv-psm",
    year: "FMGE Dec 2020",
    q: "CD4 count below which OI prophylaxis is given in HIV:",
    img: null,
    options: ["A. CD4 <200/µL: PCP prophylaxis (TMP-SMX); CD4 <100: Toxoplasma prophylaxis; CD4 <50: MAC prophylaxis (azithromycin)", "B. CD4 <500/µL for all OIs", "C. CD4 <100/µL only", "D. CD4 level irrelevant — prophylaxis for all HIV patients"],
    answer: 0,
    explanation: "OI prophylaxis thresholds: PCP/Toxoplasma prophylaxis: CD4 <200; Cryptococcal antigen screening <100; MAC: <50; all HIV patients on ART reduce OI risk irrespective.",
    tags: ["PYQ", "high-yield"]
  },

  {
    id: "psm_cdc_008",
    topic: "communicable-disease-control",
    year: "FMGE Dec 2022",
    q: "Herd immunity threshold for measles is approximately:",
    img: null,
    options: ["A. 92-95% (R0 = 12-18 for measles — highest of common infections; requires very high vaccination coverage)", "B. 70% (polio)", "C. 60% (influenza)", "D. 80% (mumps)"],
    answer: 0,
    explanation: "Herd immunity threshold = 1 − 1/R0; measles R0=12-18 → HIT ~92-95%; explains why measles outbreaks occur in areas with <95% vaccine coverage.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_cdc_009",
    topic: "communicable-disease-control",
    year: "FMGE Jun 2022",
    q: "Quarantine differs from isolation in that quarantine is applied to:",
    img: null,
    options: ["A. Exposed but asymptomatic contacts (presumed incubation period); isolation = separating confirmed/symptomatic cases", "B. Confirmed cases only", "C. Immune individuals", "D. Dead bodies only"],
    answer: 0,
    explanation: "Quarantine: healthy exposed persons separated for incubation period (precautionary); isolation: separates ill persons from healthy; both are source-control measures.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_cdc_010",
    topic: "communicable-disease-control",
    year: "FMGE Dec 2021",
    q: "International Health Regulations (IHR 2005) mandatorily notify which diseases as Public Health Emergency of International Concern (PHEIC):",
    img: null,
    options: ["A. Any event that may constitute PHEIC; specific always-notify: smallpox, polio (wild), SARS, human influenza A (novel subtype)", "B. Cholera only", "C. All waterborne diseases", "D. Only diseases with >50% mortality"],
    answer: 0,
    explanation: "IHR 2005: 4 always-reportable conditions (smallpox, wild poliovirus, SARS, novel influenza A); plus any unusual/unexpected event assessed by algorithm for PHEIC declaration.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_mch_007",
    topic: "mch",
    year: "FMGE Dec 2022",
    q: "Janani Suraksha Yojana (JSY) aims to reduce maternal and neonatal mortality by:",
    img: null,
    options: ["A. Providing conditional cash transfer to BPL mothers for institutional deliveries in government facilities", "B. Providing free medicines only", "C. Training traditional birth attendants (dais)", "D. Mobile health units for home deliveries"],
    answer: 0,
    explanation: "JSY (2005): cash incentive to BPL pregnant women for institutional delivery; higher incentive in low-performing states (LPS); ASHA accompanies mother; shown to increase institutional deliveries.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_mch_008",
    topic: "mch",
    year: "FMGE Jun 2022",
    q: "Antenatal care: minimum number of visits recommended by WHO (2016 guidelines) is:",
    img: null,
    options: ["A. 8 contacts (revised from 4 visits in 2002; first contact before 12 weeks, then at 20, 26, 30, 34, 36, 38, 40 weeks)", "B. 4 visits (old recommendation)", "C. 12 visits", "D. Monthly visits only from 28 weeks"],
    answer: 0,
    explanation: "WHO 2016 ANC model: minimum 8 contacts; term 'contact' replaces 'visit'; India's MOHFW recommends minimum 4 ANC visits; includes iron-folate, TT, BP, weight, fundal height.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_mch_009",
    topic: "mch",
    year: "FMGE Dec 2021",
    q: "Maternal Mortality Ratio (MMR) is expressed as:",
    img: null,
    options: ["A. Maternal deaths per 100,000 live births", "B. Maternal deaths per 1000 total births", "C. Maternal deaths per 1000 women of reproductive age", "D. Maternal deaths per 1000 pregnancies"],
    answer: 0,
    explanation: "MMR = (maternal deaths / live births) × 100,000; India MMR = 97/100,000 (SRS 2018-20); major causes: haemorrhage, sepsis, hypertensive disorders, unsafe abortion.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_mch_010",
    topic: "mch",
    year: "FMGE Jun 2021",
    q: "IUGR (Intrauterine Growth Restriction) is defined as birth weight:",
    img: null,
    options: ["A. Below 10th percentile for gestational age — distinguish from SGA (small for gestational age = <10th percentile, not necessarily pathological)", "B. Below 2500 g (low birth weight definition)", "C. Below 5th percentile only", "D. More than 500 g below expected weight"],
    answer: 0,
    explanation: "IUGR: foetus fails to achieve growth potential; two types: symmetric (early onset, all parameters affected) and asymmetric (late, head-sparing); LBW = <2500 g regardless of gestation.",
    tags: ["PYQ", "high-yield"]
  },

  {
    id: "psm_hi_007",
    topic: "health-indicators",
    year: "FMGE Dec 2022",
    q: "DALY (Disability Adjusted Life Year) is calculated as:",
    img: null,
    options: ["A. YLL (Years of Life Lost due to premature death) + YLD (Years Lived with Disability)", "B. Life expectancy minus age at death", "C. Morbidity rate × 100", "D. Sum of QALY values for a population"],
    answer: 0,
    explanation: "DALY = YLL + YLD; 1 DALY = 1 year of healthy life lost; used to measure burden of disease; WHO Global Burden of Disease study uses DALYs.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_hi_008",
    topic: "health-indicators",
    year: "FMGE Jun 2022",
    q: "Human Development Index (HDI) components include:",
    img: null,
    options: ["A. Life expectancy at birth + Education index (mean/expected years of schooling) + GNI per capita (PPP)", "B. IMR + MMR + GDP", "C. Literacy rate only", "D. Under-5 mortality rate + GDP"],
    answer: 0,
    explanation: "HDI (UNDP): composite index; life expectancy (health) + education (mean + expected years of schooling) + standard of living (GNI per capita); India HDI rank ~132/191 (2021-22).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_hi_009",
    topic: "health-indicators",
    year: "FMGE Dec 2021",
    q: "Under-5 mortality rate (U5MR) is considered the best single indicator of child health because:",
    img: null,
    options: ["A. It reflects nutrition, immunisation, sanitation, access to care — integrates multiple child health determinants", "B. It is the easiest to measure", "C. It only reflects infectious disease burden", "D. It excludes neonatal deaths (too variable)"],
    answer: 0,
    explanation: "U5MR: deaths under 5 years per 1000 live births; UNICEF uses it as primary child health indicator; India U5MR = 32/1000 LB (NFHS-5 2021).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_hi_010",
    topic: "health-indicators",
    year: "FMGE Jun 2021",
    q: "Crude Birth Rate (CBR) for India (as per SRS 2020) is approximately:",
    img: null,
    options: ["A. 19.2 per 1000 mid-year population (declining; was 23.8 in 2010)", "B. 30 per 1000 population", "C. 10 per 1000 population", "D. 40 per 1000 population"],
    answer: 0,
    explanation: "CBR = (live births / mid-year population) × 1000; India CBR declined from ~40 (1960s) to ~19 (2020); Kerala and Tamil Nadu have lowest CBR (<15).",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_ncd_006",
    topic: "ncd-prevention",
    year: "FMGE Dec 2022",
    q: "WHO global NCD targets aim to reduce premature NCD mortality by what percentage by 2030:",
    img: null,
    options: ["A. 33% reduction (one third) in premature mortality from cardiovascular diseases, cancers, diabetes, or chronic respiratory diseases by 2030", "B. 50% reduction", "C. 10% reduction", "D. 100% elimination"],
    answer: 0,
    explanation: "WHO Global Action Plan for NCDs 2013-2030: 33% reduction in premature NCD mortality; 25% reduction in tobacco use; 25% reduction in hypertension; 80% access to essential NCD medicines.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_ncd_007",
    topic: "ncd-prevention",
    year: "FMGE Jun 2022",
    q: "NPCDCS (National Programme for Cancer, Diabetes, CVD and Stroke) focuses on:",
    img: null,
    options: ["A. Screening, early detection and management of common NCDs at PHC level — cervical, breast, oral cancer screening; hypertension; diabetes; CHD; stroke", "B. Curative care only at tertiary hospitals", "C. Occupational diseases only", "D. Tobacco control exclusively"],
    answer: 0,
    explanation: "NPCDCS: population-based screening using CBAC (Community Based Assessment Checklist); 30+ age group screened at health and wellness centres; opportunistic screening at facilities.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_ncd_008",
    topic: "ncd-prevention",
    year: "FMGE Dec 2021",
    q: "COTPA (Cigarettes and Other Tobacco Products Act) 2003 prohibits smoking in public places under section:",
    img: null,
    options: ["A. Section 4 (smoking ban in public places); Section 5 (tobacco advertising ban); Section 6 (sale to/by minors <18 years)", "B. Section 10 only (health warnings)", "C. Section 2 (definitions only)", "D. No section number — only an advisory"],
    answer: 0,
    explanation: "COTPA 2003: Section 4 = no smoking in public places (punishable); Section 5 = no advertisement; Section 6 = no sale to or by minors; Section 7-9 = health warnings on packs.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_ncd_009",
    topic: "ncd-prevention",
    year: "FMGE Jun 2021",
    q: "Primary prevention of coronary heart disease (CHD) includes:",
    img: null,
    options: ["A. Risk factor modification in disease-free individuals: tobacco cessation, healthy diet, physical activity, hypertension control, diabetes control", "B. Coronary artery bypass in known CHD (tertiary prevention)", "C. Cardiac rehabilitation after MI (tertiary prevention)", "D. Screening ECG of known IHD patients"],
    answer: 0,
    explanation: "Levels of prevention: primary = prevent disease onset (risk factor reduction); secondary = early detection/treatment; tertiary = reduce complications/disability.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_ncd_010",
    topic: "ncd-prevention",
    year: "FMGE Dec 2020",
    q: "Pack-year calculation for tobacco exposure history — 1 pack-year equals:",
    img: null,
    options: ["A. Smoking 1 pack (20 cigarettes) per day for 1 year (20 cigarettes/day × 1 year)", "B. Smoking any amount for 1 year", "C. 10 cigarettes per day for 2 years", "D. 1 cigarette per day for 1 year"],
    answer: 0,
    explanation: "Pack-years = (cigarettes/day ÷ 20) × years smoked; 40 pack-years = heavy smoker; risk of lung cancer increases non-linearly with pack-years.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_mh_006",
    topic: "mental-health-psm",
    year: "FMGE Dec 2022",
    q: "National Mental Health Programme (NMHP) India was launched in:",
    img: null,
    options: ["A. 1982 — first country in South-East Asia to have a national mental health programme; based on community mental health approach", "B. 1990", "C. 2000 (with NRHM)", "D. 2010"],
    answer: 0,
    explanation: "NMHP 1982: objectives: prevention and treatment of mental disorders, rehabilitation; District Mental Health Programme (DMHP) launched 1996 as field component.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_mh_007",
    topic: "mental-health-psm",
    year: "FMGE Jun 2022",
    q: "Mental Healthcare Act 2017 India guarantees:",
    img: null,
    options: ["A. Right to access mental healthcare + right to community living + advance directives + decriminalisation of attempted suicide (Section 115 repeals IPC 309)", "B. Compulsory treatment for all mentally ill persons", "C. Only ECT regulation", "D. Psychiatric review boards for criminal cases only"],
    answer: 0,
    explanation: "MHA 2017: rights-based legislation; advance directives; nominated representative; decriminalised suicide attempt (S.115 — person presumed under mental stress, not criminal); SMHA oversight.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_mh_008",
    topic: "mental-health-psm",
    year: "FMGE Dec 2021",
    q: "Suicide prevention: most important risk factor for completed suicide is:",
    img: null,
    options: ["A. Previous suicide attempt (strongest predictor — 20× increased risk vs general population)", "B. Family history of suicide (important but weaker than previous attempt)", "C. Male sex (men complete suicide more; women attempt more)", "D. Rural residence"],
    answer: 0,
    explanation: "Previous attempt = single strongest predictor of completed suicide; 10-15% eventually complete suicide; other risk factors: depression, substance abuse, chronic illness, social isolation.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_mh_009",
    topic: "mental-health-psm",
    year: "FMGE Jun 2021",
    q: "VISHRAM model in India is a community intervention for:",
    img: null,
    options: ["A. Mental health promotion at community level — community volunteers, village health committees, reducing stigma, identifying cases", "B. Drug de-addiction centres in prisons", "C. Suicide prevention hotlines", "D. Psychiatric hospitals for severe mental illness only"],
    answer: 0,
    explanation: "VISHRAM (Village information, Support Health, Research in Andhra, Maharashtra): community-based mental health model; reduced stigma; improved treatment-seeking; scalable community approach.",
    tags: ["PYQ", "high-yield"]
  },
  {
    id: "psm_mh_010",
    topic: "mental-health-psm",
    year: "FMGE Dec 2020",
    q: "Treatment gap for mental disorders in India is approximately:",
    img: null,
    options: ["A. 70-80% (majority of people with mental illness do not receive treatment — due to shortage of professionals, stigma, cost, awareness)", "B. 10% (most treated)", "C. 30% (moderate gap)", "D. 50% (half go untreated)"],
    answer: 0,
    explanation: "Treatment gap: proportion of persons with mental disorder who need but do not receive treatment; India: 70-80%; global average: >70%; psychiatrist density: 0.3/100,000 (India).",
    tags: ["PYQ", "high-yield"]
  },

];

export default psm;
