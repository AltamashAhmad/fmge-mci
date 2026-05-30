const psychiatry = [

	// ============ BATCH 1: SCHIZOPHRENIA ============
	{
		id: "psy_scz_001",
		topic: "schizophrenia",
		year: "FMGE Dec 2019",
		q: "Duration required for diagnosis of schizophrenia (overall disturbance) is at least:",
		img: null,
		options: ["A. 1 week", "B. 1 month", "C. 6 months", "D. 12 months"],
		answer: 2,
		explanation: "Diagnostic criteria require continuous disturbance for at least 6 months.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "psy_scz_002",
		topic: "schizophrenia",
		year: "FMGE Jun 2018",
		q: "A first-rank symptom of schizophrenia is:",
		img: null,
		options: ["A. Anhedonia", "B. Thought insertion", "C. Social withdrawal", "D. Fatigue"],
		answer: 1,
		explanation: "Thought insertion is a Schneiderian first-rank symptom.",
		tags: ["PYQ"]
	},
	{
		id: "psy_scz_003",
		topic: "schizophrenia",
		year: "FMGE Dec 2018",
		q: "Predominant negative symptom among the following is:",
		img: null,
		options: ["A. Delusion", "B. Hallucination", "C. Avolition", "D. Thought broadcasting"],
		answer: 2,
		explanation: "Avolition reflects reduced motivation and is a core negative symptom.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "psy_scz_004",
		topic: "schizophrenia",
		year: "FMGE Jun 2019",
		q: "Most effective medication for treatment-resistant schizophrenia is:",
		img: null,
		options: ["A. Haloperidol", "B. Clozapine", "C. Fluoxetine", "D. Lithium"],
		answer: 1,
		explanation: "Clozapine is indicated for treatment-resistant cases.",
		tags: ["PYQ"]
	},
	{
		id: "psy_scz_005",
		topic: "schizophrenia",
		year: "FMGE Dec 2020",
		q: "Mandatory monitoring with clozapine is for:",
		img: null,
		options: ["A. Serum sodium", "B. Absolute neutrophil count", "C. Bilirubin weekly", "D. Thyroid profile daily"],
		answer: 1,
		explanation: "Regular ANC monitoring is essential due to agranulocytosis risk.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 1: MOOD DISORDERS ============
	{
		id: "psy_mood_001",
		topic: "mood-disorders",
		year: "FMGE Dec 2019",
		q: "A manic episode requires elevated/irritable mood for at least:",
		img: null,
		options: ["A. 2 days", "B. 4 days", "C. 1 week", "D. 1 month"],
		answer: 2,
		explanation: "Mania is diagnosed when symptoms persist for at least 1 week (or hospitalization needed).",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "psy_mood_002",
		topic: "mood-disorders",
		year: "FMGE Jun 2018",
		q: "Hypomania differs from mania mainly by:",
		img: null,
		options: ["A. Presence of psychosis always", "B. No marked functional impairment/hospitalization", "C. Duration >1 month", "D. Presence of catatonia"],
		answer: 1,
		explanation: "Hypomania lacks severe impairment and psychotic features.",
		tags: ["PYQ"]
	},
	{
		id: "psy_mood_003",
		topic: "mood-disorders",
		year: "FMGE Dec 2018",
		q: "Drug of choice for maintenance in bipolar disorder is:",
		img: null,
		options: ["A. Fluoxetine", "B. Lithium", "C. Diazepam", "D. Amitriptyline"],
		answer: 1,
		explanation: "Lithium remains a key mood stabilizer for maintenance.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "psy_mood_004",
		topic: "mood-disorders",
		year: "FMGE Jun 2019",
		q: "Most important adverse effect requiring monitoring during lithium therapy is:",
		img: null,
		options: ["A. Renal and thyroid dysfunction", "B. Cataract", "C. Pulmonary fibrosis", "D. Retinopathy"],
		answer: 0,
		explanation: "Lithium can cause nephrogenic and thyroid toxicity; regular monitoring is needed.",
		tags: ["PYQ"]
	},
	{
		id: "psy_mood_005",
		topic: "mood-disorders",
		year: "FMGE Dec 2020",
		q: "Minimum duration for major depressive episode is:",
		img: null,
		options: ["A. 3 days", "B. 1 week", "C. 2 weeks", "D. 2 months"],
		answer: 2,
		explanation: "At least two weeks of depressive symptoms are required.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 1: ANXIETY DISORDERS ============
	{
		id: "psy_anx_001",
		topic: "anxiety-disorders",
		year: "FMGE Dec 2019",
		q: "Generalized anxiety disorder requires excessive worry for at least:",
		img: null,
		options: ["A. 1 month", "B. 3 months", "C. 6 months", "D. 12 months"],
		answer: 2,
		explanation: "GAD is characterized by persistent anxiety and worry for 6 months or more.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "psy_anx_002",
		topic: "anxiety-disorders",
		year: "FMGE Jun 2018",
		q: "Acute panic attack is best treated immediately with:",
		img: null,
		options: ["A. SSRIs single dose", "B. Benzodiazepine", "C. Lithium", "D. Carbamazepine"],
		answer: 1,
		explanation: "Short-acting benzodiazepines can rapidly abort severe panic symptoms.",
		tags: ["PYQ"]
	},
	{
		id: "psy_anx_003",
		topic: "anxiety-disorders",
		year: "FMGE Dec 2018",
		q: "First-line long-term pharmacotherapy for panic disorder is:",
		img: null,
		options: ["A. SSRI", "B. Haloperidol", "C. Phenobarbital", "D. Clozapine"],
		answer: 0,
		explanation: "SSRIs are first-line for panic and many anxiety disorders.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "psy_anx_004",
		topic: "anxiety-disorders",
		year: "FMGE Jun 2019",
		q: "Specific phobia is treated most effectively with:",
		img: null,
		options: ["A. Psychoanalysis only", "B. Exposure-based CBT", "C. ECT", "D. MAOI only"],
		answer: 1,
		explanation: "Graduated exposure is highly effective for phobic disorders.",
		tags: ["PYQ"]
	},
	{
		id: "psy_anx_005",
		topic: "anxiety-disorders",
		year: "FMGE Dec 2020",
		q: "Performance-only social anxiety often uses as-needed:",
		img: null,
		options: ["A. Propranolol", "B. Clozapine", "C. Valproate", "D. Lamotrigine"],
		answer: 0,
		explanation: "Beta-blockers can reduce autonomic symptoms in performance situations.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 1: OCD ============
	{
		id: "psy_ocd_001",
		topic: "ocd",
		year: "FMGE Dec 2019",
		q: "First-line pharmacological treatment for OCD is:",
		img: null,
		options: ["A. SSRI", "B. Lithium", "C. Haloperidol monotherapy", "D. Diazepam long-term"],
		answer: 0,
		explanation: "High-dose SSRI and ERP-based CBT are standard first-line options.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "psy_ocd_002",
		topic: "ocd",
		year: "FMGE Jun 2018",
		q: "Most effective psychotherapeutic approach in OCD is:",
		img: null,
		options: ["A. Supportive therapy", "B. Exposure and response prevention", "C. Aversion therapy", "D. Hypnosis"],
		answer: 1,
		explanation: "ERP directly targets compulsions and avoidance patterns.",
		tags: ["PYQ"]
	},
	{
		id: "psy_ocd_003",
		topic: "ocd",
		year: "FMGE Dec 2018",
		q: "OCD insight can be:",
		img: null,
		options: ["A. Always absent", "B. Good, poor, or absent", "C. Always good", "D. Not part of diagnosis"],
		answer: 1,
		explanation: "Specifiers include insight level from good/fair to absent/delusional beliefs.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "psy_ocd_004",
		topic: "ocd",
		year: "FMGE Jun 2019",
		q: "Classic obsession-compulsion pair is:",
		img: null,
		options: ["A. Contamination obsession and washing compulsion", "B. Grandiosity and spending", "C. Delusion and thought insertion", "D. Flashbacks and avoidance"],
		answer: 0,
		explanation: "Contamination fears with repetitive washing are prototypical in OCD.",
		tags: ["PYQ"]
	},
	{
		id: "psy_ocd_005",
		topic: "ocd",
		year: "FMGE Dec 2020",
		q: "In SSRI-refractory OCD, common augmentation strategy is:",
		img: null,
		options: ["A. Add low-dose antipsychotic", "B. Add antihistamine", "C. Stop all treatment", "D. Add opioid"],
		answer: 0,
		explanation: "Antipsychotic augmentation is used in selected refractory patients.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 1: PTSD & STRESS ============
	{
		id: "psy_ptsd_001",
		topic: "ptsd",
		year: "FMGE Dec 2019",
		q: "Minimum duration of symptoms required for PTSD diagnosis is:",
		img: null,
		options: ["A. 2 days", "B. 1 week", "C. 1 month", "D. 6 months"],
		answer: 2,
		explanation: "PTSD requires symptom persistence for more than 1 month after trauma.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "psy_ptsd_002",
		topic: "ptsd",
		year: "FMGE Jun 2018",
		q: "Core PTSD symptom cluster includes:",
		img: null,
		options: ["A. Hyperglycemia", "B. Re-experiencing traumatic event", "C. Mania", "D. Catatonia"],
		answer: 1,
		explanation: "Intrusion symptoms like flashbacks/nightmares are hallmark features.",
		tags: ["PYQ"]
	},
	{
		id: "psy_ptsd_003",
		topic: "ptsd",
		year: "FMGE Dec 2018",
		q: "First-line pharmacotherapy in PTSD generally is:",
		img: null,
		options: ["A. SSRI", "B. Lithium", "C. Clozapine", "D. Disulfiram"],
		answer: 0,
		explanation: "SSRIs are commonly used for PTSD symptom reduction.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "psy_ptsd_004",
		topic: "ptsd",
		year: "FMGE Jun 2019",
		q: "Prazosin is particularly useful in PTSD for:",
		img: null,
		options: ["A. Hallucinations", "B. Nightmares/sleep disturbance", "C. Catatonia", "D. Obsessions"],
		answer: 1,
		explanation: "Alpha-1 blockade with prazosin may reduce trauma-related nightmares.",
		tags: ["PYQ"]
	},
	{
		id: "psy_ptsd_005",
		topic: "ptsd",
		year: "FMGE Dec 2020",
		q: "Acute stress disorder differs from PTSD mainly by:",
		img: null,
		options: ["A. Lack of trauma", "B. Symptom duration less than 1 month", "C. No anxiety symptoms", "D. Presence of mania"],
		answer: 1,
		explanation: "Acute stress disorder is diagnosed within the first month post-trauma.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 1: SUBSTANCE USE ============
	{
		id: "psy_sub_001",
		topic: "substance-use",
		year: "FMGE Dec 2019",
		q: "Antidote for opioid overdose is:",
		img: null,
		options: ["A. Naloxone", "B. Flumazenil", "C. Atropine", "D. Physostigmine"],
		answer: 0,
		explanation: "Naloxone is a competitive opioid receptor antagonist used in overdose.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "psy_sub_002",
		topic: "substance-use",
		year: "FMGE Jun 2018",
		q: "Drug used for maintenance therapy in opioid dependence includes:",
		img: null,
		options: ["A. Methadone", "B. Fluoxetine", "C. Haloperidol", "D. Propranolol"],
		answer: 0,
		explanation: "Methadone or buprenorphine are standard opioid substitution options.",
		tags: ["PYQ"]
	},
	{
		id: "psy_sub_003",
		topic: "substance-use",
		year: "FMGE Dec 2018",
		q: "Most serious alcohol withdrawal state is:",
		img: null,
		options: ["A. Hangover", "B. Delirium tremens", "C. Korsakoff syndrome", "D. Alcoholic hallucinosis only"],
		answer: 1,
		explanation: "Delirium tremens is severe withdrawal with autonomic instability and confusion.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "psy_sub_004",
		topic: "substance-use",
		year: "FMGE Jun 2019",
		q: "Before glucose in chronic alcohol user with confusion, give:",
		img: null,
		options: ["A. Vitamin B12", "B. Thiamine", "C. Pyridoxine", "D. Niacin"],
		answer: 1,
		explanation: "Thiamine should precede glucose to avoid precipitating Wernicke encephalopathy.",
		tags: ["PYQ"]
	},
	{
		id: "psy_sub_005",
		topic: "substance-use",
		year: "FMGE Dec 2020",
		q: "Disulfiram helps in alcohol dependence by causing:",
		img: null,
		options: ["A. Opioid blockade", "B. Aversive acetaldehyde reaction on alcohol intake", "C. Sedation only", "D. Dopamine agonism"],
		answer: 1,
		explanation: "Aldehyde dehydrogenase inhibition causes unpleasant reaction if alcohol is consumed.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 2: ANTIPSYCHOTICS ============
	{
		id: "psy_ap_001",
		topic: "antipsychotics-psychiatry",
		year: "FMGE Dec 2019",
		q: "Atypical antipsychotic with highest risk of metabolic syndrome is:",
		img: null,
		options: ["A. Haloperidol", "B. Olanzapine", "C. Aripiprazole", "D. Ziprasidone"],
		answer: 1,
		explanation: "Olanzapine/clozapine are strongly associated with weight gain and metabolic effects.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "psy_ap_002",
		topic: "antipsychotics-psychiatry",
		year: "FMGE Jun 2018",
		q: "Most common cause of acute dystonia after antipsychotic use is:",
		img: null,
		options: ["A. SSRI overdose", "B. Dopamine D2 blockade", "C. Serotonin excess", "D. GABA antagonism"],
		answer: 1,
		explanation: "Potent D2 antagonism, especially with first-generation agents, causes dystonia.",
		tags: ["PYQ"]
	},
	{
		id: "psy_ap_003",
		topic: "antipsychotics-psychiatry",
		year: "FMGE Dec 2018",
		q: "Drug used to treat neuroleptic malignant syndrome includes:",
		img: null,
		options: ["A. Dantrolene", "B. Disulfiram", "C. Naloxone", "D. Levodopa only"],
		answer: 0,
		explanation: "NMS management includes stopping antipsychotic and supportive care; dantrolene/bromocriptine may help.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "psy_ap_004",
		topic: "antipsychotics-psychiatry",
		year: "FMGE Jun 2019",
		q: "Antipsychotic with partial D2 agonist action is:",
		img: null,
		options: ["A. Aripiprazole", "B. Haloperidol", "C. Chlorpromazine", "D. Clozapine"],
		answer: 0,
		explanation: "Aripiprazole is a partial D2 agonist (dopamine system stabilizer).",
		tags: ["PYQ"]
	},
	{
		id: "psy_ap_005",
		topic: "antipsychotics-psychiatry",
		year: "FMGE Dec 2020",
		q: "Long-term risk most associated with chronic antipsychotic use is:",
		img: null,
		options: ["A. Tardive dyskinesia", "B. Hyperthyroidism", "C. Pancreatitis always", "D. Cataract in all"],
		answer: 0,
		explanation: "Tardive dyskinesia is a late extrapyramidal adverse effect.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 2: ANTIDEPRESSANTS ============
	{
		id: "psy_ad_001",
		topic: "antidepressants-psychiatry",
		year: "FMGE Dec 2019",
		q: "First-line antidepressants in most patients are:",
		img: null,
		options: ["A. TCAs", "B. SSRIs", "C. MAOIs", "D. Typical antipsychotics"],
		answer: 1,
		explanation: "SSRIs are generally preferred due to efficacy and tolerability.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "psy_ad_002",
		topic: "antidepressants-psychiatry",
		year: "FMGE Jun 2018",
		q: "Most dangerous acute complication of SSRI + MAOI combination is:",
		img: null,
		options: ["A. NMS", "B. Serotonin syndrome", "C. Agranulocytosis", "D. Stevens-Johnson syndrome"],
		answer: 1,
		explanation: "Excess serotonergic activity can cause hyperthermia, rigidity, autonomic instability.",
		tags: ["PYQ"]
	},
	{
		id: "psy_ad_003",
		topic: "antidepressants-psychiatry",
		year: "FMGE Dec 2018",
		q: "Antidepressant with smoking-cessation indication is:",
		img: null,
		options: ["A. Bupropion", "B. Sertraline", "C. Clomipramine", "D. Escitalopram"],
		answer: 0,
		explanation: "Bupropion is used in depression and smoking cessation support.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "psy_ad_004",
		topic: "antidepressants-psychiatry",
		year: "FMGE Jun 2019",
		q: "Antidepressant associated with sexual dysfunction commonly is:",
		img: null,
		options: ["A. SSRIs", "B. Bupropion", "C. Mirtazapine", "D. Agomelatine"],
		answer: 0,
		explanation: "Sexual side effects are frequent with SSRIs.",
		tags: ["PYQ"]
	},
	{
		id: "psy_ad_005",
		topic: "antidepressants-psychiatry",
		year: "FMGE Dec 2020",
		q: "Most cardiotoxic in overdose among antidepressants is:",
		img: null,
		options: ["A. SSRIs", "B. TCAs", "C. SNRIs", "D. Mirtazapine"],
		answer: 1,
		explanation: "TCAs can cause arrhythmias and QRS prolongation in overdose.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 2: DEMENTIA ============
	{
		id: "psy_dem_001",
		topic: "dementia",
		year: "FMGE Dec 2019",
		q: "Most common cause of dementia worldwide is:",
		img: null,
		options: ["A. Vascular dementia", "B. Alzheimer disease", "C. Lewy body dementia", "D. Frontotemporal dementia"],
		answer: 1,
		explanation: "Alzheimer disease is the most common etiology of dementia.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "psy_dem_002",
		topic: "dementia",
		year: "FMGE Jun 2018",
		q: "Early prominent feature in Alzheimer disease is impairment of:",
		img: null,
		options: ["A. Remote memory", "B. Recent memory", "C. Motor strength", "D. Visual acuity"],
		answer: 1,
		explanation: "Recent episodic memory decline appears early in AD.",
		tags: ["PYQ"]
	},
	{
		id: "psy_dem_003",
		topic: "dementia",
		year: "FMGE Dec 2018",
		q: "Fluctuating cognition with visual hallucinations suggests:",
		img: null,
		options: ["A. Alzheimer disease", "B. Lewy body dementia", "C. Normal pressure hydrocephalus", "D. Pseudodementia"],
		answer: 1,
		explanation: "Core features of DLB include fluctuation, hallucinations, and parkinsonism.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "psy_dem_004",
		topic: "dementia",
		year: "FMGE Jun 2019",
		q: "Drug class commonly used for mild-moderate Alzheimer disease is:",
		img: null,
		options: ["A. Cholinesterase inhibitors", "B. Typical antipsychotics", "C. Benzodiazepines", "D. Lithium salts"],
		answer: 0,
		explanation: "Donepezil/rivastigmine improve cholinergic transmission.",
		tags: ["PYQ"]
	},
	{
		id: "psy_dem_005",
		topic: "dementia",
		year: "FMGE Dec 2020",
		q: "Potentially reversible cognitive decline should screen for:",
		img: null,
		options: ["A. Vitamin B12 deficiency", "B. Eye color", "C. Height", "D. Blood group"],
		answer: 0,
		explanation: "B12 deficiency, hypothyroidism, etc., are treatable contributors to cognitive symptoms.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 2: CHILD PSYCHIATRY ============
	{
		id: "psy_child_001",
		topic: "child-psychiatry",
		year: "FMGE Dec 2019",
		q: "Core domain affected in autism spectrum disorder includes:",
		img: null,
		options: ["A. Vision only", "B. Social communication", "C. Hearing only", "D. Blood pressure"],
		answer: 1,
		explanation: "ASD involves social communication deficits with restricted/repetitive behaviors.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "psy_child_002",
		topic: "child-psychiatry",
		year: "FMGE Jun 2018",
		q: "First-line pharmacotherapy for ADHD is commonly:",
		img: null,
		options: ["A. Methylphenidate", "B. Haloperidol", "C. Carbamazepine", "D. Clozapine"],
		answer: 0,
		explanation: "Stimulants like methylphenidate are standard first-line medications.",
		tags: ["PYQ"]
	},
	{
		id: "psy_child_003",
		topic: "child-psychiatry",
		year: "FMGE Dec 2018",
		q: "Most effective non-pharmacologic intervention in autism is:",
		img: null,
		options: ["A. Psychoanalysis", "B. Behavioral and speech therapy", "C. ECT", "D. Hypnosis"],
		answer: 1,
		explanation: "Early intensive behavioral and language interventions improve outcomes.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "psy_child_004",
		topic: "child-psychiatry",
		year: "FMGE Jun 2019",
		q: "Atomoxetine acts primarily as:",
		img: null,
		options: ["A. Dopamine agonist", "B. Selective norepinephrine reuptake inhibitor", "C. Serotonin antagonist", "D. Anticholinergic"],
		answer: 1,
		explanation: "Atomoxetine is a non-stimulant SNRI used in ADHD.",
		tags: ["PYQ"]
	},
	{
		id: "psy_child_005",
		topic: "child-psychiatry",
		year: "FMGE Dec 2020",
		q: "Risperidone in autism is mainly used to reduce:",
		img: null,
		options: ["A. Core language deficit", "B. Irritability/aggression", "C. Visual acuity problems", "D. Hearing loss"],
		answer: 1,
		explanation: "Risperidone can help irritability and aggression associated with ASD.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 2: SUICIDE + PERSONALITY ============
	{
		id: "psy_sui_001",
		topic: "suicide-crisis",
		year: "FMGE Dec 2019",
		q: "Most important immediate step in suicidal patient is:",
		img: null,
		options: ["A. Start SSRI and discharge", "B. Ensure safety and assess intent/plan", "C. Give placebo", "D. Ignore ideation if young"],
		answer: 1,
		explanation: "Immediate suicide risk assessment and safety planning are priorities.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "psy_sui_002",
		topic: "suicide-crisis",
		year: "FMGE Jun 2018",
		q: "Psychiatric disorder most strongly associated with completed suicide is:",
		img: null,
		options: ["A. Adjustment disorder", "B. Depression", "C. Specific phobia", "D. Somatic symptom disorder"],
		answer: 1,
		explanation: "Major depressive disorder is a major contributor to suicide mortality.",
		tags: ["PYQ"]
	},
	{
		id: "psy_sui_003",
		topic: "personality-disorders",
		year: "FMGE Dec 2018",
		q: "Cluster B personality disorders include:",
		img: null,
		options: ["A. Paranoid, schizoid", "B. Borderline, antisocial", "C. Avoidant, dependent", "D. OCPD only"],
		answer: 1,
		explanation: "Cluster B: antisocial, borderline, histrionic, narcissistic.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "psy_sui_004",
		topic: "personality-disorders",
		year: "FMGE Jun 2019",
		q: "Most evidence-based psychotherapy for borderline personality disorder is:",
		img: null,
		options: ["A. Dialectical behavior therapy", "B. ECT", "C. Aversion therapy", "D. Deep brain stimulation"],
		answer: 0,
		explanation: "DBT is a core treatment for emotional dysregulation and self-harm behaviors.",
		tags: ["PYQ"]
	},
	{
		id: "psy_sui_005",
		topic: "personality-disorders",
		year: "FMGE Dec 2020",
		q: "Personality disorder characterized by pervasive distrust and suspiciousness is:",
		img: null,
		options: ["A. Histrionic", "B. Paranoid", "C. Dependent", "D. Avoidant"],
		answer: 1,
		explanation: "Paranoid personality disorder features chronic suspiciousness and mistrust.",
		tags: ["PYQ", "high-yield"]
	},

        // ---- top-up: suicide-crisis +3 ----
        {
                id: "psy_sui_006",
                topic: "suicide-crisis",
                year: "FMGE Dec 2019",
                q: "Under Mental Health Act 2017 (India), attempt to suicide is:",
                img: null,
                options: ["A. Punishable with imprisonment", "B. Decriminalised; presumed under severe stress, entitled to care", "C. Treated as a criminal offence under IPC 309", "D. Punishable with fine only"],
                answer: 1,
                explanation: "Section 115 MHA 2017 decriminalised suicide attempt; IPC 309 effectively not applied — person presumed to be under severe stress and given care.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_sui_007",
                topic: "suicide-crisis",
                year: "FMGE Jun 2019",
                q: "Most reliable predictor of completed suicide is:",
                img: null,
                options: ["A. Age <18", "B. Previous suicide attempt", "C. Mild depression", "D. Social support"],
                answer: 1,
                explanation: "A prior suicide attempt is the single strongest predictor of a future completed suicide.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_sui_008",
                topic: "suicide-crisis",
                year: "FMGE Dec 2020",
                q: "Most common method of suicide in India is:",
                img: null,
                options: ["A. Firearms", "B. Hanging", "C. Drug overdose", "D. Drowning"],
                answer: 1,
                explanation: "Hanging is the most common method of suicide in India; pesticide ingestion is also highly prevalent in rural areas.",
                tags: ["PYQ", "high-yield"]
        },

        // ---- top-up: personality-disorders +2 ----
        {
                id: "psy_sui_009",
                topic: "personality-disorders",
                year: "FMGE Jun 2019",
                q: "Borderline personality disorder is characterised by:",
                img: null,
                options: ["A. Grandiosity and lack of empathy", "B. Unstable mood, impulsivity, identity disturbance, fear of abandonment", "C. Chronic suspiciousness", "D. Restricted emotional expression"],
                answer: 1,
                explanation: "BPD hallmarks: emotional instability, impulsivity, disturbed identity, intense unstable relationships, chronic emptiness, fear of abandonment.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_sui_010",
                topic: "personality-disorders",
                year: "FMGE Dec 2020",
                q: "Antisocial personality disorder (ASPD) cannot be diagnosed below age:",
                img: null,
                options: ["A. 12 years", "B. 18 years", "C. 21 years", "D. 16 years"],
                answer: 1,
                explanation: "ASPD requires age ≥18; evidence of conduct disorder before age 15 must also be present (DSM-5).",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "psy_scz_006",
                topic: "schizophrenia",
                year: "FMGE Jun 2022",
                q: "First-rank symptoms of schizophrenia (Schneider) include all EXCEPT:",
                img: null,
                options: ["A. Thought insertion", "B. Auditory hallucinations in 3rd person", "C. Visual hallucinations", "D. Passivity phenomena (made feelings)"],
                answer: 2,
                explanation: "Schneider's first-rank symptoms: thought insertion, withdrawal, broadcasting; made feelings, impulses, actions (passivity); auditory hallucinations (3rd person commentary, voices repeating thoughts); delusional perception. Visual hallucinations are NOT first-rank symptoms.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_scz_007",
                topic: "schizophrenia",
                year: "FMGE Dec 2021",
                q: "Positive symptoms of schizophrenia include:",
                img: null,
                options: ["A. Alogia, avolition, affective flattening", "B. Hallucinations, delusions, disorganised speech", "C. Social withdrawal and cognitive impairment", "D. Anhedonia and apathy"],
                answer: 1,
                explanation: "Positive symptoms (added to normal): hallucinations, delusions, disorganised speech/behaviour, catatonia. Negative symptoms (subtracted from normal): alogia, avolition, affective flattening, anhedonia, asociality (5 As). Positive symptoms respond better to antipsychotics.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_scz_008",
                topic: "schizophrenia",
                year: "FMGE Jun 2021",
                q: "Clozapine is used in treatment-resistant schizophrenia but requires monitoring for:",
                img: null,
                options: ["A. Hepatic toxicity and jaundice", "B. Agranulocytosis (mandatory regular WBC monitoring)", "C. Renal failure", "D. Visual loss"],
                answer: 1,
                explanation: "Clozapine causes agranulocytosis in 1–2% patients (potentially fatal). Mandatory regular WBC/ANC monitoring: weekly for first 18 weeks, then fortnightly. Metabolic syndrome (weight gain, DM, dyslipidaemia) also common. Most effective antipsychotic for treatment-resistant schizophrenia.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_scz_009",
                topic: "schizophrenia",
                year: "FMGE Dec 2020",
                q: "Thought broadcasting in schizophrenia refers to:",
                img: null,
                options: ["A. Patient hearing other peoples' thoughts", "B. Patient's belief that their thoughts are being transmitted to others", "C. External thoughts being inserted into one's mind", "D. Thoughts being taken away from one's mind"],
                answer: 1,
                explanation: "Thought broadcasting: belief that one's own thoughts are being transmitted/broadcast to others. Thought insertion: external thoughts inserted into mind. Thought withdrawal: thoughts removed from mind. All are first-rank symptoms of schizophrenia.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_scz_010",
                topic: "schizophrenia",
                year: "FMGE Jun 2020",
                q: "Schizoaffective disorder requires the co-occurrence of:",
                img: null,
                options: ["A. Schizophrenia + any anxiety disorder", "B. Psychotic symptoms + major mood episode (depression or mania)", "C. Schizophrenia + substance use disorder", "D. Psychosis + dementia"],
                answer: 1,
                explanation: "Schizoaffective disorder: uninterrupted period of illness with both a major mood episode (MDD or mania) AND features of schizophrenia. Psychotic symptoms must persist for ≥2 weeks without major mood episode. Prognosis intermediate between schizophrenia and bipolar.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_mood_006",
                topic: "mood-disorders",
                year: "FMGE Jun 2022",
                q: "Minimum duration of a manic episode for diagnosis of Bipolar I disorder is:",
                img: null,
                options: ["A. 1 day", "B. 3 days", "C. 7 days (or any duration if hospitalised)", "D. 4 weeks"],
                answer: 2,
                explanation: "Bipolar I: manic episodes lasting ≥7 days OR of any duration if hospitalisation is required (due to severity). Hypomanic episode (Bipolar II): ≥4 consecutive days, no hospitalisation, no psychosis. Major depressive episode: ≥2 weeks.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_mood_007",
                topic: "mood-disorders",
                year: "FMGE Dec 2021",
                q: "Lithium toxicity is precipitated by all EXCEPT:",
                img: null,
                options: ["A. NSAIDs", "B. Dehydration and sodium depletion", "C. Thiazide diuretics", "D. Loop diuretics (furosemide)"],
                answer: 3,
                explanation: "Lithium toxicity is increased by: NSAIDs (reduce renal Li clearance), thiazide diuretics, dehydration, sodium restriction, ACE inhibitors. Loop diuretics (furosemide) INCREASE lithium excretion (safer). Therapeutic level: 0.6–1.2 mmol/L; toxic >1.5 mmol/L.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_mood_008",
                topic: "mood-disorders",
                year: "FMGE Jun 2021",
                q: "Dysthymia (persistent depressive disorder) requires depressed mood for at least:",
                img: null,
                options: ["A. 2 weeks", "B. 6 months", "C. 2 years (adults)", "D. 5 years"],
                answer: 2,
                explanation: "Persistent depressive disorder (dysthymia): depressed mood for ≥2 years (adults), ≥1 year (children/adolescents), present most of the day, more days than not. Less severe than MDD. Treated with antidepressants + psychotherapy.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_mood_009",
                topic: "mood-disorders",
                year: "FMGE Dec 2020",
                q: "Cognitive triad of depression (Beck) consists of:",
                img: null,
                options: ["A. Thought insertion, withdrawal, broadcasting", "B. Negative view of self, world (experience), and future", "C. Hallucinations, delusions, disorganisation", "D. Poverty of thought, speech, affect"],
                answer: 1,
                explanation: "Beck's cognitive triad of depression: negative views of (1) self ('I am worthless'), (2) current experience/world ('Everything is hopeless'), and (3) future ('Things will never improve'). Forms the basis of CBT for depression.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_mood_010",
                topic: "mood-disorders",
                year: "FMGE Jun 2020",
                q: "Cyclothymia is characterised by:",
                img: null,
                options: ["A. Recurrent major depressive episodes with psychosis", "B. Chronic fluctuating mood with hypomanic and depressive symptoms not meeting full criteria over ≥2 years", "C. Rapid cycling between mania and depression weekly", "D. Persistent euphoria only"],
                answer: 1,
                explanation: "Cyclothymia: ≥2 years (1 year in children) of hypomanic and depressive periods NOT meeting full criteria for bipolar or MDD. Never symptom-free for >2 months. Considered a milder bipolar spectrum disorder. Treat: mood stabilisers, psychotherapy.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_anx_006",
                topic: "anxiety-disorders",
                year: "FMGE Jun 2022",
                q: "Generalised anxiety disorder (GAD) requires excessive worry present for at least:",
                img: null,
                options: ["A. 2 weeks", "B. 1 month", "C. 6 months", "D. 1 year"],
                answer: 2,
                explanation: "GAD: excessive, uncontrollable worry about multiple areas of life for ≥6 months, with ≥3 symptoms (restlessness, fatigue, concentration difficulties, irritability, muscle tension, sleep disturbance). First-line: SSRI/SNRI + CBT.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_anx_007",
                topic: "anxiety-disorders",
                year: "FMGE Dec 2021",
                q: "Panic disorder treatment of choice (both acute and long-term) includes:",
                img: null,
                options: ["A. Benzodiazepines long-term only", "B. SSRIs (long-term) + CBT; benzodiazepines for acute attacks", "C. Antipsychotics", "D. Lithium"],
                answer: 1,
                explanation: "Panic disorder: SSRIs (paroxetine, sertraline) or SNRIs are first-line for long-term prevention. CBT (including interoceptive exposure) is equally effective. Benzodiazepines (alprazolam, lorazepam) for acute attacks only — avoid long-term (dependence risk).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_anx_008",
                topic: "anxiety-disorders",
                year: "FMGE Jun 2021",
                q: "Social anxiety disorder (social phobia) is characterised by:",
                img: null,
                options: ["A. Fear of leaving the house", "B. Intense fear of social situations and scrutiny by others, leading to avoidance", "C. Fear of specific objects (spiders, heights)", "D. Generalised worry about everything"],
                answer: 1,
                explanation: "Social anxiety disorder: marked fear of social/performance situations where person may be scrutinised. Leads to avoidance or intense distress. Differentiate from specific phobia (circumscribed fear) and agoraphobia (fear of situations where escape is difficult). Treat: SSRI + CBT.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_anx_009",
                topic: "anxiety-disorders",
                year: "FMGE Dec 2020",
                q: "Agoraphobia is defined as fear of:",
                img: null,
                options: ["A. Open spaces only", "B. Being in situations where escape may be difficult or help unavailable if panic occurs", "C. Specific animals", "D. Social embarrassment"],
                answer: 1,
                explanation: "Agoraphobia: fear of situations where escape is difficult or help unavailable during panic (crowded places, public transport, queues, bridges, outside alone). Patients restrict activities to 'safe' places. Can occur with or without panic disorder. Treat: SSRI + CBT/exposure.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_anx_010",
                topic: "anxiety-disorders",
                year: "FMGE Jun 2020",
                q: "Buspirone is used in GAD because it:",
                img: null,
                options: ["A. Is a benzodiazepine with fast onset", "B. Is a 5-HT1A partial agonist with anxiolytic effect and no dependence", "C. Is an antipsychotic", "D. Blocks beta-adrenergic receptors"],
                answer: 1,
                explanation: "Buspirone: 5-HT1A partial agonist. Anxiolytic without sedation, dependence, or abuse potential. Onset: 1–4 weeks (not suitable for acute anxiety). Useful in GAD, especially in patients with substance use history (avoids benzodiazepine risk).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_ocd_006",
                topic: "ocd",
                year: "FMGE Jun 2022",
                q: "First-line pharmacotherapy for OCD is:",
                img: null,
                options: ["A. Haloperidol", "B. SSRIs (fluoxetine, sertraline, fluvoxamine)", "C. Benzodiazepines", "D. Lithium"],
                answer: 1,
                explanation: "First-line treatment for OCD: SSRIs (at higher doses than depression — e.g., fluoxetine 40–80 mg) + ERP (Exposure and Response Prevention) CBT. If SSRI-resistant: clomipramine (TCA) or augmentation with antipsychotics (risperidone).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_ocd_007",
                topic: "ocd",
                year: "FMGE Dec 2021",
                q: "In OCD, obsessions are characterised by:",
                img: null,
                options: ["A. Ego-syntonic intrusive thoughts welcome to the patient", "B. Ego-dystonic, recurrent, intrusive thoughts causing anxiety, recognised as own thoughts", "C. Fixed false beliefs not amenable to reason", "D. Perceptions without external stimulus"],
                answer: 1,
                explanation: "OCD obsessions: ego-dystonic (unwanted, distressing), recurrent intrusive thoughts/images/urges, recognised as one's own mind (unlike thought insertion). Compulsions: repetitive behaviours or mental acts performed to reduce obsession-related anxiety.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_ocd_008",
                topic: "ocd",
                year: "FMGE Jun 2021",
                q: "Body dysmorphic disorder (BDD) is classified under:",
                img: null,
                options: ["A. Psychotic disorders", "B. Obsessive-compulsive and related disorders", "C. Somatic symptom disorders", "D. Anxiety disorders"],
                answer: 1,
                explanation: "BDD is classified under OCD and related disorders (DSM-5). Characterised by preoccupation with perceived defects in physical appearance, repetitive behaviours (mirror checking, camouflaging). Treatment: SSRI + CBT (not cosmetic surgery).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_ocd_009",
                topic: "ocd",
                year: "FMGE Dec 2020",
                q: "Trichotillomania (hair-pulling disorder) is classified under:",
                img: null,
                options: ["A. Impulse control disorders", "B. OCD and related disorders", "C. Substance use disorders", "D. Eating disorders"],
                answer: 1,
                explanation: "Trichotillomania (hair-pulling) and excoriation disorder (skin-picking) are classified under OCD and related disorders (DSM-5). Both involve repetitive body-focused behaviours. Treatment: habit reversal training (HRT) + N-acetylcysteine or SSRIs.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_ocd_010",
                topic: "ocd",
                year: "FMGE Jun 2020",
                q: "ERP (Exposure and Response Prevention) in OCD involves:",
                img: null,
                options: ["A. Exposing patient to feared stimuli while preventing the compulsive response", "B. Exposing patient to trauma memories in small doses", "C. Relaxation training only", "D. Pharmacotherapy only"],
                answer: 0,
                explanation: "ERP: deliberate exposure to obsession-provoking stimuli (e.g., touching a 'contaminated' doorknob) while preventing the compulsive response (e.g., not washing hands). Habituation occurs over time. Most effective psychological therapy for OCD.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_ptsd_006",
                topic: "ptsd",
                year: "FMGE Jun 2022",
                q: "PTSD symptoms must persist for more than how long after the traumatic event?",
                img: null,
                options: ["A. 2 days", "B. 2 weeks", "C. 1 month", "D. 6 months"],
                answer: 2,
                explanation: "PTSD: symptoms must persist for ≥1 month after the traumatic event. If symptoms last 3 days–1 month, it is Acute Stress Disorder (ASD). Four clusters: re-experiencing, avoidance, negative alterations in cognition/mood, hyperarousal.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_ptsd_007",
                topic: "ptsd",
                year: "FMGE Dec 2021",
                q: "First-line pharmacotherapy for PTSD is:",
                img: null,
                options: ["A. Benzodiazepines", "B. SSRIs (paroxetine, sertraline)", "C. Antipsychotics", "D. Mood stabilisers"],
                answer: 1,
                explanation: "SSRIs (paroxetine and sertraline are FDA-approved for PTSD) are first-line pharmacotherapy. Psychological therapy: Trauma-focused CBT and EMDR (Eye Movement Desensitisation and Reprocessing). Benzodiazepines are NOT recommended in PTSD (worsen outcomes).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_ptsd_008",
                topic: "ptsd",
                year: "FMGE Jun 2021",
                q: "Flashbacks in PTSD are an example of which symptom cluster?",
                img: null,
                options: ["A. Avoidance symptoms", "B. Re-experiencing symptoms", "C. Hyperarousal symptoms", "D. Negative cognition symptoms"],
                answer: 1,
                explanation: "Re-experiencing (intrusion) symptoms in PTSD: flashbacks (reliving the trauma as if happening now), nightmares, intrusive distressing memories, emotional/physiological distress at trauma cues. Flashbacks are distinguished from hallucinations by their content (trauma-related).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_ptsd_009",
                topic: "ptsd",
                year: "FMGE Dec 2020",
                q: "EMDR (Eye Movement Desensitisation and Reprocessing) is an evidence-based therapy for:",
                img: null,
                options: ["A. Schizophrenia", "B. PTSD", "C. OCD", "D. Bipolar disorder"],
                answer: 1,
                explanation: "EMDR: patient focuses on traumatic memory while engaging in bilateral stimulation (eye movements, taps, tones). WHO-recommended treatment for PTSD. Works by facilitating reprocessing of traumatic memories. Equal efficacy to trauma-focused CBT.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_ptsd_010",
                topic: "ptsd",
                year: "FMGE Jun 2020",
                q: "Complex PTSD (ICD-11) differs from PTSD by additionally including:",
                img: null,
                options: ["A. Shorter symptom duration", "B. Disturbances in self-organisation: affect dysregulation, negative self-concept, interpersonal difficulties", "C. Only somatic symptoms", "D. Psychotic features always present"],
                answer: 1,
                explanation: "Complex PTSD (ICD-11): all PTSD symptoms + disturbances in self-organisation (DSO) — emotional dysregulation, persistent negative self-concept, difficulties in relationships. Results from prolonged, repeated trauma (childhood abuse, prolonged captivity, torture).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_sub_006",
                topic: "substance-use",
                year: "FMGE Jun 2022",
                q: "Drug of choice for maintenance treatment of opioid use disorder:",
                img: null,
                options: ["A. Naloxone alone", "B. Methadone or buprenorphine/naloxone", "C. Disulfiram", "D. Acamprosate"],
                answer: 1,
                explanation: "Opioid use disorder maintenance: methadone (full mu-agonist, OPD-supervised) or buprenorphine/naloxone (Suboxone — partial agonist + antagonist to deter IV misuse). Naltrexone (antagonist) used for relapse prevention. Naloxone for overdose reversal only.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_sub_007",
                topic: "substance-use",
                year: "FMGE Dec 2021",
                q: "Disulfiram (Antabuse) is used in alcohol use disorder by causing:",
                img: null,
                options: ["A. Opiate receptor blockade", "B. Acetaldehyde accumulation when alcohol consumed (aversion therapy)", "C. Enhanced GABA activity to reduce craving", "D. Dopamine reduction"],
                answer: 1,
                explanation: "Disulfiram blocks aldehyde dehydrogenase → acetaldehyde accumulation when alcohol taken → flushing, nausea, vomiting, hypotension (disulfiram-alcohol reaction). Works as aversive conditioning. Contraindicated in severe cardiac disease, psychosis.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_sub_008",
                topic: "substance-use",
                year: "FMGE Jun 2021",
                q: "Wernicke's encephalopathy in chronic alcohol use is caused by deficiency of:",
                img: null,
                options: ["A. Vitamin B12", "B. Thiamine (Vitamin B1)", "C. Folate", "D. Niacin"],
                answer: 1,
                explanation: "Wernicke's encephalopathy: thiamine (B1) deficiency in chronic alcoholics. Classic triad: confusion (encephalopathy), ophthalmoplegia (nystagmus, lateral gaze palsy), ataxia. Treatment: IV thiamine BEFORE glucose (glucose worsens thiamine deficiency). Korsakoff's = irreversible amnesia from chronic thiamine deficiency.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_sub_009",
                topic: "substance-use",
                year: "FMGE Dec 2020",
                q: "CAGE questionnaire for alcohol use disorder screening consists of questions about:",
                img: null,
                options: ["A. Craving, Appetite, Guilt, Energy", "B. Cut down, Annoyed, Guilty, Eye-opener", "C. Consumption, Abstinence, Guilt, Episodes", "D. Confusion, Amnesia, Gait, Encephalopathy"],
                answer: 1,
                explanation: "CAGE: Cut down (tried to), Annoyed (by criticism), Guilty (about drinking), Eye-opener (drink first thing in morning). Score ≥2 positive = clinically significant alcohol problem. Sensitivity 93%, specificity 76% for alcohol use disorder.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_sub_010",
                topic: "substance-use",
                year: "FMGE Jun 2020",
                q: "Delirium tremens (alcohol withdrawal) occurs most commonly:",
                img: null,
                options: ["A. Immediately on stopping alcohol", "B. 48–72 hours after last drink (can occur up to 5 days)", "C. Only after 2 weeks of abstinence", "D. During intoxication"],
                answer: 1,
                explanation: "Delirium tremens: severe alcohol withdrawal occurring 48–72 hours (peak) after last drink. Features: autonomic hyperactivity, tremors, confusion, hallucinations (visual), seizures. Mortality ~5–15% untreated. Treatment: IV benzodiazepines (chlordiazepoxide, lorazepam).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_ap_006",
                topic: "antipsychotics-psychiatry",
                year: "FMGE Jun 2022",
                q: "Neuroleptic malignant syndrome (NMS) is characterised by the tetrad of:",
                img: null,
                options: ["A. Fever, muscle rigidity, altered consciousness, autonomic instability", "B. Hyperthermia, diarrhoea, confusion, bleeding", "C. Tremor, bradykinesia, rigidity, postural instability", "D. Fever, rash, joint pain, carditis"],
                answer: 0,
                explanation: "NMS: hyperthermia (>38°C), 'lead-pipe' muscle rigidity, altered consciousness, autonomic instability (diaphoresis, tachycardia, labile BP). Caused by any dopamine-blocking drug. Treatment: stop offending drug, dantrolene, bromocriptine, supportive care.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_ap_007",
                topic: "antipsychotics-psychiatry",
                year: "FMGE Dec 2021",
                q: "Tardive dyskinesia caused by antipsychotics is best managed by:",
                img: null,
                options: ["A. Increasing the antipsychotic dose", "B. Stopping or reducing antipsychotic + switching to clozapine, adding VMAT2 inhibitor (valbenazine)", "C. Adding benzodiazepines only", "D. Vitamin E alone"],
                answer: 1,
                explanation: "Tardive dyskinesia (TD): involuntary repetitive movements (lip smacking, tongue protrusion, choreiform limb movements) after prolonged DA-blocker use. Management: reduce/taper antipsychotic, switch to clozapine or quetiapine (low TD risk), VMAT2 inhibitors (valbenazine, deutetrabenazine — FDA approved for TD).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_ap_008",
                topic: "antipsychotics-psychiatry",
                year: "FMGE Jun 2021",
                q: "Typical (first-generation) antipsychotics block primarily which receptor?",
                img: null,
                options: ["A. 5-HT2A receptor", "B. D2 (dopamine) receptor", "C. Muscarinic receptor", "D. NMDA receptor"],
                answer: 1,
                explanation: "Typical antipsychotics (haloperidol, chlorpromazine): primarily D2 receptor blockers. High D2 blockade → antipsychotic effect (mesolimbic pathway), but also EPS (nigrostriatal), hyperprolactinaemia (tuberoinfundibular), and impaired temperature regulation (hypothalamic). Atypicals also block 5-HT2A.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_ap_009",
                topic: "antipsychotics-psychiatry",
                year: "FMGE Dec 2020",
                q: "Haloperidol is the drug of choice for:",
                img: null,
                options: ["A. Treating depression", "B. Acute psychosis and delirium (especially in medically ill patients)", "C. Panic disorder", "D. Obsessive-compulsive disorder"],
                answer: 1,
                explanation: "Haloperidol (butyrophenone) is DOC for acute psychosis and delirium in medically ill/elderly patients (available IV/IM/oral). High D2 potency. Side effects: EPS (high risk), neuroleptic malignant syndrome, QT prolongation. Does not cause significant hypotension (no alpha blockade).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_ap_010",
                topic: "antipsychotics-psychiatry",
                year: "FMGE Jun 2020",
                q: "Metabolic syndrome risk is highest with which atypical antipsychotic?",
                img: null,
                options: ["A. Aripiprazole", "B. Ziprasidone", "C. Olanzapine and clozapine", "D. Haloperidol"],
                answer: 2,
                explanation: "Olanzapine and clozapine carry the highest risk of metabolic syndrome (weight gain, hyperglycaemia, dyslipidaemia). Aripiprazole and ziprasidone have the lowest metabolic risk. All patients on antipsychotics need metabolic monitoring (glucose, lipids, waist circumference).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_ad_006",
                topic: "antidepressants-psychiatry",
                year: "FMGE Jun 2022",
                q: "SSRIs are first-line for depression because compared to TCAs they have:",
                img: null,
                options: ["A. Faster onset of action", "B. Better safety profile (fewer anticholinergic effects, safer in overdose)", "C. Greater efficacy in severe depression", "D. Immediate anxiolytic effect"],
                answer: 1,
                explanation: "SSRIs (fluoxetine, sertraline, escitalopram) are first-line due to: better tolerability (fewer anticholinergic, antihistamine, alpha-blocker side effects), much safer in overdose (unlike TCAs which cause fatal arrhythmias), and broad spectrum (depression, anxiety, OCD). No faster onset (all take 2–4 weeks).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_ad_007",
                topic: "antidepressants-psychiatry",
                year: "FMGE Dec 2021",
                q: "Serotonin syndrome is caused by:",
                img: null,
                options: ["A. Dopamine excess", "B. Excess serotonergic activity (SSRI + MAOI combination)", "C. Anticholinergic excess", "D. Noradrenaline toxicity"],
                answer: 1,
                explanation: "Serotonin syndrome: excess serotonin, classically from SSRI + MAOI combination (or TCA + MAOI, linezolid + SSRI). Triad: cognitive changes, autonomic instability (diaphoresis, tachycardia), neuromuscular abnormalities (clonus, hyperreflexia, myoclonus). Cyproheptadine (5-HT antagonist) for treatment.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_ad_008",
                topic: "antidepressants-psychiatry",
                year: "FMGE Jun 2021",
                q: "MAO inhibitor (phenelzine) + tyramine-rich foods causes:",
                img: null,
                options: ["A. Serotonin syndrome", "B. Hypertensive crisis (cheese reaction)", "C. Seizures", "D. Anticholinergic toxidrome"],
                answer: 1,
                explanation: "MAOI + tyramine-rich foods (cheese, wine, cured meats): tyramine normally degraded by MAO; inhibition → excessive tyramine → noradrenaline release → severe hypertensive crisis. This is the 'cheese effect'. MAOIs now rarely used; reserved for atypical/treatment-resistant depression.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_ad_009",
                topic: "antidepressants-psychiatry",
                year: "FMGE Dec 2020",
                q: "Mirtazapine mechanism of action is:",
                img: null,
                options: ["A. SSRI", "B. NaSSA — noradrenergic and specific serotonergic antidepressant (alpha-2 antagonist)", "C. SNRI", "D. MAOI"],
                answer: 1,
                explanation: "Mirtazapine (NaSSA): blocks presynaptic alpha-2 autoreceptors → increases release of NE and 5-HT. Also blocks 5-HT2, 5-HT3, and H1 receptors. Sedating (useful in insomnia), weight-gaining. Does not cause sexual dysfunction (unlike SSRIs). Good for elderly with poor appetite.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_ad_010",
                topic: "antidepressants-psychiatry",
                year: "FMGE Jun 2020",
                q: "Safe antidepressant in cardiac patients (no QT prolongation, safe after MI) is:",
                img: null,
                options: ["A. Amitriptyline (TCA)", "B. Sertraline (SSRI)", "C. Venlafaxine", "D. Maprotiline"],
                answer: 1,
                explanation: "Sertraline is the safest antidepressant for post-MI depression (well-studied, no QT prolongation, no negative cardiac effects). TCAs are contraindicated after MI (proarrhythmic). Venlafaxine and citalopram cause QT prolongation at higher doses.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_dem_006",
                topic: "dementia",
                year: "FMGE Jun 2022",
                q: "Most common cause of dementia worldwide is:",
                img: null,
                options: ["A. Vascular dementia", "B. Alzheimer's disease", "C. Lewy body dementia", "D. Frontotemporal dementia"],
                answer: 1,
                explanation: "Alzheimer's disease accounts for 60–80% of dementia cases. Pathology: amyloid plaques (Aβ), neurofibrillary tangles (hyperphosphorylated tau), hippocampal atrophy. Treatment: acetylcholinesterase inhibitors (donepezil, rivastigmine) for mild-moderate; memantine for moderate-severe.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_dem_007",
                topic: "dementia",
                year: "FMGE Dec 2021",
                q: "Lewy body dementia is characterised by all EXCEPT:",
                img: null,
                options: ["A. Fluctuating cognition", "B. Visual hallucinations", "C. Parkinsonism features", "D. Prominent memory loss as the earliest feature"],
                answer: 3,
                explanation: "Lewy body dementia: triad of fluctuating cognition, recurrent vivid visual hallucinations, Parkinsonism. Memory not always first feature (unlike AD). Patients are VERY sensitive to antipsychotics (can cause severe parkinsonism, death). Cognitive fluctuations help differentiate from AD.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_dem_008",
                topic: "dementia",
                year: "FMGE Jun 2021",
                q: "Normal pressure hydrocephalus (NPH) triad includes all EXCEPT:",
                img: null,
                options: ["A. Gait apraxia (magnetic gait)", "B. Urinary incontinence", "C. Cognitive decline (dementia)", "D. Severe headache and papilloedema"],
                answer: 3,
                explanation: "NPH (Hakim-Adams) triad: gait apraxia (shuffling, broad-based 'magnetic' gait — appears first), urinary incontinence, dementia (dementia last). CSF pressure is normal despite enlarged ventricles. Treatable cause of dementia — ventriculo-peritoneal shunt.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_dem_009",
                topic: "dementia",
                year: "FMGE Dec 2020",
                q: "Donepezil is a:",
                img: null,
                options: ["A. NMDA receptor antagonist", "B. Reversible acetylcholinesterase inhibitor", "C. Dopamine precursor", "D. GABA antagonist"],
                answer: 1,
                explanation: "Donepezil, rivastigmine, and galantamine are reversible acetylcholinesterase inhibitors — increase ACh in synaptic cleft. Used for mild-to-moderate Alzheimer's. Memantine (NMDA antagonist) for moderate-to-severe Alzheimer's. Neither cures but slows progression.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_dem_010",
                topic: "dementia",
                year: "FMGE Jun 2020",
                q: "Frontotemporal dementia (Pick's disease) most commonly presents with:",
                img: null,
                options: ["A. Memory loss as the first symptom", "B. Personality and behavioural changes, executive dysfunction first", "C. Parkinsonism and hallucinations", "D. Focal neurological deficits and stepwise decline"],
                answer: 1,
                explanation: "Frontotemporal dementia: personality changes (disinhibition, social misconduct), apathy, executive dysfunction BEFORE memory loss (unlike Alzheimer's). Pathology: tau or TDP-43 inclusions (Pick bodies). Onset typically 45–65 years (younger than AD).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_child_006",
                topic: "child-psychiatry",
                year: "FMGE Jun 2022",
                q: "Core features of autism spectrum disorder (ASD) include:",
                img: null,
                options: ["A. Hyperactivity and impulsivity", "B. Persistent deficits in social communication + restricted, repetitive behaviours", "C. Psychosis and hallucinations", "D. Memory impairment"],
                answer: 1,
                explanation: "ASD (DSM-5): two core domains — (1) persistent deficits in social communication/interaction; (2) restricted, repetitive patterns of behaviour/interests/activities. Symptoms present from early developmental period. Associated with sensory sensitivities.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_child_007",
                topic: "child-psychiatry",
                year: "FMGE Dec 2021",
                q: "ADHD pharmacotherapy first-line in children is:",
                img: null,
                options: ["A. Risperidone", "B. Methylphenidate (stimulant)", "C. Fluoxetine", "D. Diazepam"],
                answer: 1,
                explanation: "ADHD first-line: methylphenidate (Ritalin) — dopamine and noradrenaline reuptake inhibitor. Atomoxetine (NRI, non-stimulant) is alternative for those with substance use risk. In children <6 years: behavioural therapy preferred before medication. Monitor growth and BP.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_child_008",
                topic: "child-psychiatry",
                year: "FMGE Jun 2021",
                q: "Conduct disorder is differentiated from oppositional defiant disorder (ODD) by:",
                img: null,
                options: ["A. Age of onset", "B. Violation of rights of others and societal norms (not just defiance of authority)", "C. Presence of ADHD comorbidity", "D. Response to medication"],
                answer: 1,
                explanation: "ODD: pattern of defiance, anger, argumentativeness toward authority (milder). Conduct disorder: more severe — violation of basic rights of others (aggression, destruction of property, theft, serious rule violations). CD is a precursor to Antisocial Personality Disorder in adults.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_child_009",
                topic: "child-psychiatry",
                year: "FMGE Dec 2020",
                q: "Separation anxiety disorder in children is characterised by:",
                img: null,
                options: ["A. Fear of social situations", "B. Excessive fear of separation from attachment figures (school refusal, nightmares about separation)", "C. Generalised worry about future", "D. Specific phobia of animals"],
                answer: 1,
                explanation: "Separation anxiety disorder: developmentally inappropriate, excessive fear of separation from major attachment figures. Symptoms: school refusal, nightmares about separation, physical symptoms when separation expected. Most common anxiety disorder in prepubertal children.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_child_010",
                topic: "child-psychiatry",
                year: "FMGE Jun 2020",
                q: "Intellectual disability (intellectual developmental disorder) is diagnosed when there are deficits in:",
                img: null,
                options: ["A. Intellectual functioning AND adaptive functioning, onset during developmental period", "B. Memory only, IQ < 70", "C. Language development only", "D. Motor development only"],
                answer: 0,
                explanation: "ID requires: (1) deficits in intellectual functioning (IQ <70, ~2 SD below mean); (2) deficits in adaptive functioning (conceptual, social, practical domains); (3) onset during developmental period (<18 years). IQ score alone is insufficient without adaptive deficits.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_suc_001",
                topic: "suicide-crisis",
                year: "FMGE Jun 2022",
                q: "Strongest risk factor for completed suicide is:",
                img: null,
                options: ["A. Female sex", "B. Previous suicide attempt", "C. Young age", "D. Living in urban area"],
                answer: 1,
                explanation: "Previous suicide attempt is the single strongest predictor of completed suicide. Other risk factors: male sex, older age (> 65 in males), hopelessness, depression, alcohol use, social isolation, access to means, terminal illness. Female > male for attempts; male > female for completions.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_suc_002",
                topic: "suicide-crisis",
                year: "FMGE Dec 2021",
                q: "Hopelessness in suicidal patients is best assessed by:",
                img: null,
                options: ["A. Beck Hopelessness Scale (BHS)", "B. MMSE", "C. GAF scale", "D. PANSS"],
                answer: 0,
                explanation: "Beck Hopelessness Scale (BHS): 20-item scale assessing negative expectancies about the future. High BHS scores predict suicide risk independent of depression severity. BHS > 9 is considered a marker of severe hopelessness and increased suicide risk.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_suc_003",
                topic: "suicide-crisis",
                year: "FMGE Jun 2021",
                q: "Protective factors against suicide include:",
                img: null,
                options: ["A. Social isolation and hopelessness", "B. Strong social support, religious beliefs, responsibility to children", "C. Male sex and access to firearms", "D. Unemployment and substance use"],
                answer: 1,
                explanation: "Protective factors: strong social/family support, religious beliefs opposing suicide, having children at home, positive therapeutic alliance, reasons for living, problem-solving skills, fear of death or pain. Addressing protective factors is part of safety planning.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_suc_004",
                topic: "suicide-crisis",
                year: "FMGE Dec 2020",
                q: "The most common psychiatric diagnosis in completed suicide is:",
                img: null,
                options: ["A. Schizophrenia", "B. Major depressive disorder", "C. OCD", "D. GAD"],
                answer: 1,
                explanation: "Major depressive disorder is the most common psychiatric diagnosis in completed suicide (~60% of all suicides). Lifetime suicide risk: MDD ~15%, bipolar ~15–20%, schizophrenia ~10%, alcoholism ~15%. Presence of comorbid substance use increases risk across all diagnoses.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_suc_005",
                topic: "suicide-crisis",
                year: "FMGE Jun 2020",
                q: "Safety planning for suicidal patients involves:",
                img: null,
                options: ["A. Prescribing benzodiazepines without psychotherapy", "B. Warning signs, coping strategies, social contacts, removal of means, emergency contacts", "C. Hospitalisation for all suicidal patients", "D. Assessing suicide risk score only"],
                answer: 1,
                explanation: "Stanley-Brown Safety Planning Intervention: (1) recognise warning signs; (2) internal coping strategies; (3) social contacts for distraction; (4) people to ask for help; (5) professional/emergency contacts; (6) means restriction. Evidence-based intervention reducing suicidal behaviour.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_pd_001",
                topic: "personality-disorders",
                year: "FMGE Jun 2022",
                q: "Borderline personality disorder (BPD) is characterised by:",
                img: null,
                options: ["A. Grandiosity, lack of empathy, entitlement", "B. Unstable interpersonal relationships, self-image, affect, and impulsivity", "C. Social detachment and restricted emotional expression", "D. Preoccupation with orderliness and perfectionism"],
                answer: 1,
                explanation: "BPD (Cluster B): identity disturbance, chronic emptiness, intense/unstable relationships (splitting), impulsivity, emotional dysregulation, recurrent self-harm, transient paranoid ideation. DBT (Dialectical Behaviour Therapy) is the most effective treatment.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_pd_002",
                topic: "personality-disorders",
                year: "FMGE Dec 2021",
                q: "Antisocial personality disorder (ASPD) diagnosis requires minimum age of:",
                img: null,
                options: ["A. 15 years", "B. 18 years with conduct disorder history before 15", "C. 21 years", "D. Any age with criminal record"],
                answer: 1,
                explanation: "ASPD: requires age ≥18 AND evidence of conduct disorder before age 15. Features: pervasive disregard for rights of others, deceitfulness, impulsivity, aggression, recklessness, irresponsibility, lack of remorse. Most common in prison populations.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_pd_003",
                topic: "personality-disorders",
                year: "FMGE Jun 2021",
                q: "Cluster A personality disorders are described as 'odd or eccentric' and include:",
                img: null,
                options: ["A. Paranoid, schizoid, schizotypal", "B. Antisocial, borderline, histrionic, narcissistic", "C. Avoidant, dependent, obsessive-compulsive", "D. Depressive and passive-aggressive"],
                answer: 0,
                explanation: "Cluster A (odd/eccentric): paranoid PD (mistrust), schizoid PD (social detachment, restricted emotions), schizotypal PD (magical thinking, odd ideas, eccentric behaviour). Cluster B = dramatic/erratic (ABHN). Cluster C = anxious/fearful (AOC).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_pd_004",
                topic: "personality-disorders",
                year: "FMGE Dec 2020",
                q: "Dialectical Behaviour Therapy (DBT) was specifically developed for:",
                img: null,
                options: ["A. Schizophrenia", "B. Borderline personality disorder", "C. ADHD", "D. Alcohol use disorder"],
                answer: 1,
                explanation: "DBT (Marsha Linehan): combines CBT with acceptance-based strategies (mindfulness). Originally developed for BPD. Core skills: distress tolerance, emotion regulation, interpersonal effectiveness, mindfulness. Evidence for self-harm reduction and improved quality of life in BPD.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "psy_pd_005",
                topic: "personality-disorders",
                year: "FMGE Jun 2020",
                q: "Narcissistic personality disorder is characterised by:",
                img: null,
                options: ["A. Fear of abandonment and splitting", "B. Grandiosity, need for admiration, lack of empathy", "C. Social anxiety and feelings of inadequacy", "D. Odd magical thinking and social isolation"],
                answer: 1,
                explanation: "Narcissistic PD (Cluster B): grandiose sense of self-importance, preoccupation with fantasies of unlimited success, sense of entitlement, interpersonal exploitation, lack of empathy, arrogance. Fragile self-esteem beneath. No specific pharmacotherapy; supportive psychotherapy.",
                tags: ["PYQ", "high-yield"]
        },

];

export default psychiatry;
