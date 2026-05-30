const anesthesia = [

	// ============ BATCH 1: INHALATIONAL AGENTS & MAC ============
	{
		id: "anes_inh_001",
		topic: "inhalational-agents-mac",
		year: "FMGE Dec 2019",
		q: "Minimum alveolar concentration (MAC) is defined as concentration preventing movement in:",
		img: null,
		options: ["A. 25% patients", "B. 50% patients", "C. 75% patients", "D. 100% patients"],
		answer: 1,
		explanation: "MAC is the alveolar concentration at 1 atm preventing response to skin incision in 50% subjects.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "anes_inh_002",
		topic: "inhalational-agents-mac",
		year: "FMGE Jun 2018",
		q: "Agent with pungent odor and airway irritation is:",
		img: null,
		options: ["A. Sevoflurane", "B. Desflurane", "C. Nitrous oxide", "D. Xenon"],
		answer: 1,
		explanation: "Desflurane can irritate airway and is less suitable for inhalational induction.",
		tags: ["PYQ"]
	},
	{
		id: "anes_inh_003",
		topic: "inhalational-agents-mac",
		year: "FMGE Dec 2018",
		q: "Most common inhalational agent for pediatric mask induction is:",
		img: null,
		options: ["A. Halothane", "B. Sevoflurane", "C. Desflurane", "D. Isoflurane"],
		answer: 1,
		explanation: "Sevoflurane is non-pungent and has favorable induction profile.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "anes_inh_004",
		topic: "inhalational-agents-mac",
		year: "FMGE Jun 2019",
		q: "Nitrous oxide mainly provides:",
		img: null,
		options: ["A. Potent muscle relaxation", "B. Analgesia with weak anesthetic potency", "C. Complete amnesia only", "D. Bronchoconstriction"],
		answer: 1,
		explanation: "N2O has good analgesic effect but low anesthetic potency (high MAC).",
		tags: ["PYQ"]
	},
	{
		id: "anes_inh_005",
		topic: "inhalational-agents-mac",
		year: "FMGE Dec 2020",
		q: "MAC generally decreases with:",
		img: null,
		options: ["A. Hyperthermia", "B. Advanced age", "C. Chronic alcohol use", "D. Hypernatremia"],
		answer: 1,
		explanation: "Age, hypothermia, and sedative drugs reduce MAC requirements.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 1: IV ANESTHETICS ============
	{
		id: "anes_iv_001",
		topic: "iv-anesthetics",
		year: "FMGE Dec 2019",
		q: "IV induction agent with antiemetic property is:",
		img: null,
		options: ["A. Thiopentone", "B. Propofol", "C. Ketamine", "D. Etomidate"],
		answer: 1,
		explanation: "Propofol provides smooth induction with antiemetic action.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "anes_iv_002",
		topic: "iv-anesthetics",
		year: "FMGE Jun 2018",
		q: "IV anesthetic that increases heart rate and blood pressure is:",
		img: null,
		options: ["A. Propofol", "B. Ketamine", "C. Thiopentone", "D. Midazolam"],
		answer: 1,
		explanation: "Ketamine causes sympathetic stimulation and preserves airway reflexes.",
		tags: ["PYQ"]
	},
	{
		id: "anes_iv_003",
		topic: "iv-anesthetics",
		year: "FMGE Dec 2018",
		q: "Preferred induction agent in hemodynamically unstable patient is often:",
		img: null,
		options: ["A. Etomidate", "B. Propofol", "C. Thiopentone", "D. Dexmedetomidine"],
		answer: 0,
		explanation: "Etomidate has minimal cardiovascular depression.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "anes_iv_004",
		topic: "iv-anesthetics",
		year: "FMGE Jun 2019",
		q: "Pain on injection is most commonly seen with:",
		img: null,
		options: ["A. Etomidate", "B. Propofol", "C. Ketamine", "D. Diazepam oral"],
		answer: 1,
		explanation: "Propofol injection pain is common and can be reduced with lidocaine.",
		tags: ["PYQ"]
	},
	{
		id: "anes_iv_005",
		topic: "iv-anesthetics",
		year: "FMGE Dec 2020",
		q: "Side effect classically associated with etomidate is:",
		img: null,
		options: ["A. Severe bronchospasm", "B. Adrenocortical suppression", "C. Nephrotoxicity", "D. Hepatic necrosis"],
		answer: 1,
		explanation: "Etomidate inhibits 11-beta-hydroxylase, causing transient adrenal suppression.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 1: MUSCLE RELAXANTS ============
	{
		id: "anes_mr_001",
		topic: "muscle-relaxants",
		year: "FMGE Dec 2019",
		q: "Depolarizing neuromuscular blocker is:",
		img: null,
		options: ["A. Rocuronium", "B. Vecuronium", "C. Succinylcholine", "D. Atracurium"],
		answer: 2,
		explanation: "Succinylcholine is the classic depolarizing neuromuscular blocking drug.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "anes_mr_002",
		topic: "muscle-relaxants",
		year: "FMGE Jun 2018",
		q: "Drug of choice for rapid sequence intubation (classically) is:",
		img: null,
		options: ["A. Pancuronium", "B. Succinylcholine", "C. D-tubocurarine", "D. Mivacurium"],
		answer: 1,
		explanation: "Succinylcholine has very rapid onset and short duration.",
		tags: ["PYQ"]
	},
	{
		id: "anes_mr_003",
		topic: "muscle-relaxants",
		year: "FMGE Dec 2018",
		q: "Neuromuscular blocker degraded by Hofmann elimination is:",
		img: null,
		options: ["A. Atracurium", "B. Vecuronium", "C. Succinylcholine", "D. Rocuronium"],
		answer: 0,
		explanation: "Atracurium undergoes organ-independent Hofmann degradation.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "anes_mr_004",
		topic: "muscle-relaxants",
		year: "FMGE Jun 2019",
		q: "Specific reversal agent for rocuronium is:",
		img: null,
		options: ["A. Naloxone", "B. Flumazenil", "C. Sugammadex", "D. Atropine"],
		answer: 2,
		explanation: "Sugammadex encapsulates steroidal NMBs like rocuronium/vecuronium.",
		tags: ["PYQ"]
	},
	{
		id: "anes_mr_005",
		topic: "muscle-relaxants",
		year: "FMGE Dec 2020",
		q: "Life-threatening adverse effect of succinylcholine in susceptible patients is:",
		img: null,
		options: ["A. Hypoglycemia", "B. Hyperkalemia", "C. Bradyphrenia", "D. Urticaria only"],
		answer: 1,
		explanation: "Succinylcholine can cause dangerous potassium rise, especially in neuromuscular injury.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 1: LOCAL ANESTHETICS ============
	{
		id: "anes_la_001",
		topic: "local-anesthetics",
		year: "FMGE Dec 2019",
		q: "Most cardiotoxic local anesthetic is:",
		img: null,
		options: ["A. Lidocaine", "B. Bupivacaine", "C. Prilocaine", "D. Procaine"],
		answer: 1,
		explanation: "Bupivacaine has high cardiotoxic potential compared with many alternatives.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "anes_la_002",
		topic: "local-anesthetics",
		year: "FMGE Jun 2018",
		q: "Systemic toxicity of local anesthetic is primarily treated with:",
		img: null,
		options: ["A. Oral bicarbonate", "B. Intravenous lipid emulsion", "C. High-dose insulin only", "D. Calcium gluconate"],
		answer: 1,
		explanation: "LAST management includes airway support and IV lipid emulsion therapy.",
		tags: ["PYQ"]
	},
	{
		id: "anes_la_003",
		topic: "local-anesthetics",
		year: "FMGE Dec 2018",
		q: "Classically, local anesthetics block:",
		img: null,
		options: ["A. Sodium channels", "B. Potassium channels", "C. Calcium channels", "D. Chloride channels"],
		answer: 0,
		explanation: "They prevent fast voltage-gated sodium influx, blocking conduction.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "anes_la_004",
		topic: "local-anesthetics",
		year: "FMGE Jun 2019",
		q: "Prilocaine toxicity may cause:",
		img: null,
		options: ["A. Methemoglobinemia", "B. Hyperthyroidism", "C. Hepatitis", "D. Nephrolithiasis"],
		answer: 0,
		explanation: "Prilocaine metabolite o-toluidine can induce methemoglobinemia.",
		tags: ["PYQ"]
	},
	{
		id: "anes_la_005",
		topic: "local-anesthetics",
		year: "FMGE Dec 2020",
		q: "Adding adrenaline with local anesthetic usually:",
		img: null,
		options: ["A. Increases systemic absorption", "B. Prolongs duration by vasoconstriction", "C. Eliminates toxicity risk", "D. Causes immediate alkalosis"],
		answer: 1,
		explanation: "Vasoconstriction reduces absorption and prolongs local action.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 1: AIRWAY MANAGEMENT ============
	{
		id: "anes_air_001",
		topic: "airway-management",
		year: "FMGE Dec 2019",
		q: "Most important bedside predictor in Mallampati classification evaluates:",
		img: null,
		options: ["A. Cervical spine movement", "B. Oropharyngeal view", "C. Nasal patency", "D. Vocal cord mobility"],
		answer: 1,
		explanation: "Mallampati grades visible oropharyngeal structures to estimate intubation difficulty.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "anes_air_002",
		topic: "airway-management",
		year: "FMGE Jun 2018",
		q: "Gold standard device for securing airway in GA is:",
		img: null,
		options: ["A. Oropharyngeal airway", "B. Endotracheal tube", "C. Nasal cannula", "D. Face mask alone"],
		answer: 1,
		explanation: "Cuffed endotracheal intubation provides definitive airway protection.",
		tags: ["PYQ"]
	},
	{
		id: "anes_air_003",
		topic: "airway-management",
		year: "FMGE Dec 2018",
		q: "Rapid sequence induction aims to reduce risk of:",
		img: null,
		options: ["A. Bronchospasm", "B. Aspiration", "C. Hypoglycemia", "D. Hyperthermia"],
		answer: 1,
		explanation: "RSI minimizes time without airway protection in aspiration-risk patients.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "anes_air_004",
		topic: "airway-management",
		year: "FMGE Jun 2019",
		q: "Most common immediate confirmation of endotracheal tube placement is:",
		img: null,
		options: ["A. Chest X-ray only", "B. End-tidal CO2 detection", "C. Pulse oximetry alone", "D. ECG change"],
		answer: 1,
		explanation: "Persistent capnography waveform confirms tracheal placement.",
		tags: ["PYQ"]
	},
	{
		id: "anes_air_005",
		topic: "airway-management",
		year: "FMGE Dec 2020",
		q: "Cannot intubate, cannot oxygenate scenario requires urgent:",
		img: null,
		options: ["A. Repeat laryngoscopy indefinitely", "B. Emergency cricothyrotomy", "C. Nebulization", "D. CT neck"],
		answer: 1,
		explanation: "Front-of-neck airway is lifesaving in CICO emergency.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 2: ASA CLASSIFICATION ============
	{
		id: "anes_asa_001",
		topic: "asa-classification",
		year: "FMGE Dec 2019",
		q: "ASA physical status of a normal healthy patient is:",
		img: null,
		options: ["A. ASA I", "B. ASA II", "C. ASA III", "D. ASA IV"],
		answer: 0,
		explanation: "ASA I denotes a normal healthy patient with no systemic disease.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "anes_asa_002",
		topic: "asa-classification",
		year: "FMGE Jun 2018",
		q: "Patient with controlled hypertension is usually classified as:",
		img: null,
		options: ["A. ASA I", "B. ASA II", "C. ASA IV", "D. ASA V"],
		answer: 1,
		explanation: "Mild systemic disease without functional limitation corresponds to ASA II.",
		tags: ["PYQ"]
	},
	{
		id: "anes_asa_003",
		topic: "asa-classification",
		year: "FMGE Dec 2018",
		q: "ASA E suffix indicates:",
		img: null,
		options: ["A. Elective surgery", "B. Emergency surgery", "C. Endoscopic procedure", "D. Elderly patient"],
		answer: 1,
		explanation: "Suffix E is added for emergency procedures regardless of ASA class.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "anes_asa_004",
		topic: "asa-classification",
		year: "FMGE Jun 2019",
		q: "Moribund patient not expected to survive without operation is:",
		img: null,
		options: ["A. ASA III", "B. ASA IV", "C. ASA V", "D. ASA VI"],
		answer: 2,
		explanation: "ASA V is a moribund patient with minimal survival chance without surgery.",
		tags: ["PYQ"]
	},
	{
		id: "anes_asa_005",
		topic: "asa-classification",
		year: "FMGE Dec 2020",
		q: "Brain-dead organ donor is categorized as:",
		img: null,
		options: ["A. ASA IV", "B. ASA V", "C. ASA VI", "D. ASA IIE"],
		answer: 2,
		explanation: "ASA VI is assigned to declared brain-dead patient for organ donation.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 2: SPINAL & EPIDURAL ============
	{
		id: "anes_se_001",
		topic: "spinal-epidural",
		year: "FMGE Dec 2019",
		q: "Most common site for lumbar spinal anesthesia is:",
		img: null,
		options: ["A. T8-T9", "B. L3-L4 or L4-L5", "C. C7-T1", "D. S1-S2"],
		answer: 1,
		explanation: "Needle is inserted below conus medullaris, usually at L3-L4/L4-L5.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "anes_se_002",
		topic: "spinal-epidural",
		year: "FMGE Jun 2018",
		q: "Post-dural puncture headache is due to:",
		img: null,
		options: ["A. Increased CSF pressure", "B. CSF leak after dural puncture", "C. Hyperglycemia", "D. Meningeal hemorrhage"],
		answer: 1,
		explanation: "CSF leak causes low-pressure headache that worsens on standing.",
		tags: ["PYQ"]
	},
	{
		id: "anes_se_003",
		topic: "spinal-epidural",
		year: "FMGE Dec 2018",
		q: "Most common immediate complication after spinal anesthesia is:",
		img: null,
		options: ["A. Hypertension", "B. Hypotension", "C. Hyperthermia", "D. Hyperkalemia"],
		answer: 1,
		explanation: "Sympathetic block leads to vasodilation and hypotension.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "anes_se_004",
		topic: "spinal-epidural",
		year: "FMGE Jun 2019",
		q: "Epidural space is identified classically by:",
		img: null,
		options: ["A. Loss-of-resistance technique", "B. CSF free flow", "C. Bone click", "D. Electrical stimulation only"],
		answer: 0,
		explanation: "Loss of resistance to saline/air indicates entry into epidural space.",
		tags: ["PYQ"]
	},
	{
		id: "anes_se_005",
		topic: "spinal-epidural",
		year: "FMGE Dec 2020",
		q: "Absolute contraindication to neuraxial block includes:",
		img: null,
		options: ["A. Mild anemia", "B. Patient refusal", "C. Controlled diabetes", "D. Stable asthma"],
		answer: 1,
		explanation: "Lack of consent is an absolute contraindication for spinal/epidural anesthesia.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 2: MALIGNANT HYPERTHERMIA ============
	{
		id: "anes_mh_001",
		topic: "malignant-hyperthermia",
		year: "FMGE Dec 2019",
		q: "Drug of choice for malignant hyperthermia is:",
		img: null,
		options: ["A. Atropine", "B. Dantrolene", "C. Naloxone", "D. Sugammadex"],
		answer: 1,
		explanation: "Dantrolene reduces skeletal muscle calcium release and treats MH crisis.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "anes_mh_002",
		topic: "malignant-hyperthermia",
		year: "FMGE Jun 2018",
		q: "Common triggering agent for malignant hyperthermia is:",
		img: null,
		options: ["A. Sevoflurane", "B. Local lignocaine", "C. Midazolam", "D. Propofol"],
		answer: 0,
		explanation: "Volatile anesthetics and succinylcholine can trigger MH in susceptible patients.",
		tags: ["PYQ"]
	},
	{
		id: "anes_mh_003",
		topic: "malignant-hyperthermia",
		year: "FMGE Dec 2018",
		q: "Earliest intraoperative sign of malignant hyperthermia is often:",
		img: null,
		options: ["A. Rapid rise in end-tidal CO2", "B. Skin rash", "C. Hypoglycemia", "D. Bradycardia"],
		answer: 0,
		explanation: "Unexplained hypercarbia and tachycardia are early warning signs.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "anes_mh_004",
		topic: "malignant-hyperthermia",
		year: "FMGE Jun 2019",
		q: "Malignant hyperthermia is associated with mutation in:",
		img: null,
		options: ["A. RYR1 gene", "B. CFTR gene", "C. DMD gene", "D. HFE gene"],
		answer: 0,
		explanation: "RYR1 receptor defects cause abnormal calcium release from sarcoplasmic reticulum.",
		tags: ["PYQ"]
	},
	{
		id: "anes_mh_005",
		topic: "malignant-hyperthermia",
		year: "FMGE Dec 2020",
		q: "Definitive diagnostic test for MH susceptibility is:",
		img: null,
		options: ["A. Mantoux test", "B. Caffeine-halothane contracture test", "C. EEG", "D. Sweat chloride"],
		answer: 1,
		explanation: "Muscle contracture testing remains reference standard in many centers.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 2: PREOP + PAIN MANAGEMENT ============
	{
		id: "anes_pre_001",
		topic: "preop-assessment",
		year: "FMGE Dec 2019",
		q: "Most important preoperative fasting interval for clear liquids in adults is:",
		img: null,
		options: ["A. 8 hours", "B. 6 hours", "C. 2 hours", "D. 12 hours"],
		answer: 2,
		explanation: "Current fasting guidance allows clear liquids up to 2 hours preoperatively.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "anes_pre_002",
		topic: "preop-assessment",
		year: "FMGE Jun 2018",
		q: "METs in pre-op evaluation primarily estimate:",
		img: null,
		options: ["A. Liver reserve", "B. Functional capacity", "C. Renal perfusion", "D. Coagulation profile"],
		answer: 1,
		explanation: "Exercise tolerance in METs predicts perioperative cardiovascular risk.",
		tags: ["PYQ"]
	},
	{
		id: "anes_pre_003",
		topic: "pain-management-anesthesia",
		year: "FMGE Dec 2018",
		q: "WHO analgesic ladder for severe cancer pain recommends:",
		img: null,
		options: ["A. NSAID only", "B. Weak opioid only", "C. Strong opioid with adjuvants", "D. Sedative only"],
		answer: 2,
		explanation: "Step 3 pain management uses strong opioids with supportive adjuvants.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "anes_pre_004",
		topic: "pain-management-anesthesia",
		year: "FMGE Jun 2019",
		q: "Most common neuraxial opioid adverse effect is:",
		img: null,
		options: ["A. Pruritus", "B. Myocardial infarction", "C. Hepatic failure", "D. Neutropenia"],
		answer: 0,
		explanation: "Pruritus, urinary retention, and nausea are frequent neuraxial opioid effects.",
		tags: ["PYQ"]
	},
	{
		id: "anes_pre_005",
		topic: "pain-management-anesthesia",
		year: "FMGE Dec 2020",
		q: "Multimodal analgesia means:",
		img: null,
		options: ["A. Single high-dose opioid", "B. Combining different analgesic classes/mechanisms", "C. Avoiding regional blocks", "D. Sedation without analgesia"],
		answer: 1,
		explanation: "Using multiple mechanisms improves pain control and reduces opioid burden.",
		tags: ["PYQ", "high-yield"]
	},

        // ---- top-up: preop-assessment +3 ----
        {
                id: "anes_pre_006",
                topic: "preop-assessment",
                year: "FMGE Dec 2019",
                q: "Goldman Cardiac Risk Index is used pre-operatively to assess:",
                img: null,
                options: ["A. Pulmonary risk", "B. Cardiac risk in non-cardiac surgery", "C. Renal risk", "D. Hepatic risk"],
                answer: 1,
                explanation: "Goldman index scores 9 clinical factors to stratify perioperative cardiac risk (MI, cardiac death) in non-cardiac surgery.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_pre_007",
                topic: "preop-assessment",
                year: "FMGE Jun 2019",
                q: "ASA physical status class III patient is defined as:",
                img: null,
                options: ["A. Normal healthy patient", "B. Mild systemic disease", "C. Severe systemic disease with functional limitation", "D. Moribund patient"],
                answer: 2,
                explanation: "ASA III: severe systemic disease that limits activity but is not incapacitating (e.g. uncontrolled DM, COPD, BMI ≥40).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_pre_008",
                topic: "preop-assessment",
                year: "FMGE Dec 2020",
                q: "Mallampati score is used to predict:",
                img: null,
                options: ["A. Depth of anaesthesia", "B. Difficult airway / intubation", "C. Risk of aspiration", "D. Post-operative nausea"],
                answer: 1,
                explanation: "Mallampati I–IV classifies pharyngeal visibility to predict ease of laryngoscopy and intubation.",
                tags: ["PYQ", "high-yield"]
        },

        // ---- top-up: pain-management-anesthesia +2 ----
        {
                id: "anes_pre_009",
                topic: "pain-management-anesthesia",
                year: "FMGE Jun 2019",
                q: "WHO analgesic ladder step 2 uses:",
                img: null,
                options: ["A. Non-opioid alone (paracetamol/NSAID)", "B. Weak opioid ± non-opioid (codeine, tramadol)", "C. Strong opioid (morphine)", "D. Epidural analgesia"],
                answer: 1,
                explanation: "Step 1: non-opioid; Step 2: weak opioid ± non-opioid; Step 3: strong opioid ± non-opioid.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_pre_010",
                topic: "pain-management-anesthesia",
                year: "FMGE Dec 2020",
                q: "Drug of choice for neuropathic pain is:",
                img: null,
                options: ["A. Morphine", "B. Gabapentin / pregabalin", "C. Ibuprofen", "D. Paracetamol"],
                answer: 1,
                explanation: "Gabapentinoids (gabapentin, pregabalin) are first-line for neuropathic pain; TCAs and SNRIs are alternatives.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "anes_inh_006",
                topic: "inhalational-agents-mac",
                year: "FMGE Jun 2022",
                q: "Which inhalational agent has the lowest blood-gas partition coefficient and hence fastest onset and offset?",
                img: null,
                options: ["A. Halothane", "B. Isoflurane", "C. Desflurane", "D. Sevoflurane"],
                answer: 2,
                explanation: "Desflurane has the lowest blood-gas partition coefficient (0.42), meaning it is least soluble in blood → fastest equilibration → fastest induction and fastest recovery. Order (fastest to slowest): desflurane < N2O < sevoflurane < isoflurane < halothane.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_inh_007",
                topic: "inhalational-agents-mac",
                year: "FMGE Dec 2021",
                q: "MAC is decreased by all of the following EXCEPT:",
                img: null,
                options: ["A. Hypothermia", "B. Opioids", "C. Hyperthyroidism", "D. Old age"],
                answer: 2,
                explanation: "MAC is INCREASED by: hyperthyroidism, hypernatraemia, young age, chronic alcohol use, anxiety/agitation. MAC is DECREASED by: hypothermia, opioids, N2O, sedatives, old age, anaemia, hypothyroidism, pregnancy.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_inh_008",
                topic: "inhalational-agents-mac",
                year: "FMGE Jun 2021",
                q: "Which inhalational agent is most hepatotoxic and causes halothane hepatitis?",
                img: null,
                options: ["A. Isoflurane", "B. Halothane", "C. Sevoflurane", "D. Desflurane"],
                answer: 1,
                explanation: "Halothane causes dose-independent (immune-mediated) hepatitis on repeated exposure, due to trifluoroacetyl chloride hapten formation. Severe halothane hepatitis has ~50% mortality. Isoflurane/desflurane rarely cause hepatotoxicity.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_inh_009",
                topic: "inhalational-agents-mac",
                year: "FMGE Dec 2020",
                q: "Sevoflurane is preferred for inhalational induction in children because:",
                img: null,
                options: ["A. Highest MAC among volatile agents", "B. Non-irritant, pleasant odour, rapid onset", "C. Bronchodilator that requires IV cannula", "D. Slowest induction due to high solubility"],
                answer: 1,
                explanation: "Sevoflurane is ideal for paediatric inhalational induction: non-pungent (unlike desflurane/isoflurane), pleasant smell, low blood-gas partition coefficient (0.65) allowing rapid onset, and potent bronchodilation. Does not trigger laryngospasm.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_inh_010",
                topic: "inhalational-agents-mac",
                year: "FMGE Jun 2020",
                q: "Compound A, a nephrotoxic byproduct, is produced by interaction of sevoflurane with:",
                img: null,
                options: ["A. Water in breathing circuit", "B. Carbon dioxide absorbents (soda lime)", "C. Opioids", "D. Nitrous oxide"],
                answer: 1,
                explanation: "Sevoflurane reacts with CO2 absorbents (soda lime, barium hydroxide lime) to produce Compound A (fluoromethyl-hexafluoroisopropyl ether), a nephrotoxic vinyl ether. Clinically significant only at low fresh gas flows. Use >2 L/min FGF to minimise.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_iv_006",
                topic: "iv-anesthetics",
                year: "FMGE Jun 2022",
                q: "Propofol infusion syndrome is characterised by:",
                img: null,
                options: ["A. Anaphylaxis within seconds", "B. Metabolic acidosis, rhabdomyolysis, cardiac failure during prolonged high-dose infusion", "C. Emergence delirium in children", "D. Apnoea during induction only"],
                answer: 1,
                explanation: "Propofol infusion syndrome (PRIS): rare but fatal complication of prolonged high-dose propofol infusion (>4 mg/kg/hr for >48 hrs). Features: severe metabolic acidosis, rhabdomyolysis, lipaemia, renal and cardiac failure. Seen in ICU patients.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_iv_007",
                topic: "iv-anesthetics",
                year: "FMGE Dec 2021",
                q: "Ketamine is contraindicated in:",
                img: null,
                options: ["A. Asthma patients", "B. Paediatric patients requiring burns dressings", "C. Patients with raised intracranial pressure (ICP)", "D. Hypovolaemic patients"],
                answer: 2,
                explanation: "Ketamine is contraindicated in raised ICP (increases cerebral blood flow and ICP), hypertension, ischaemic heart disease, and psychiatric illness. It is preferred in asthma (bronchodilator), hypovolaemia (sympathomimetic), and paediatric procedures.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_iv_008",
                topic: "iv-anesthetics",
                year: "FMGE Jun 2021",
                q: "Thiopentone (thiopental) should NOT be mixed with suxamethonium because:",
                img: null,
                options: ["A. Causes bronchospasm", "B. Forms a precipitate (highly alkaline thiopentone + acidic suxamethonium)", "C. Both cause malignant hyperthermia", "D. Causes cardiac arrest"],
                answer: 1,
                explanation: "Thiopentone is highly alkaline (pH ~10–11) while suxamethonium is acidic. Mixing causes precipitation. They must be given separately. This is a classic drug incompatibility question in FMGE/USMLE.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_iv_009",
                topic: "iv-anesthetics",
                year: "FMGE Dec 2020",
                q: "The IV anaesthetic that preserves laryngeal reflexes and causes dissociative anaesthesia is:",
                img: null,
                options: ["A. Propofol", "B. Thiopentone", "C. Etomidate", "D. Ketamine"],
                answer: 3,
                explanation: "Ketamine produces dissociative anaesthesia (analgesia, amnesia, catalepsy with eyes open). It preserves laryngeal reflexes and pharyngeal reflexes (airway relatively protected). Works via NMDA receptor antagonism.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_iv_010",
                topic: "iv-anesthetics",
                year: "FMGE Jun 2020",
                q: "Etomidate is preferred in haemodynamically unstable patients because it:",
                img: null,
                options: ["A. Increases blood pressure", "B. Causes minimal cardiovascular depression", "C. Is a strong analgesic", "D. Provides muscle relaxation"],
                answer: 1,
                explanation: "Etomidate causes minimal cardiovascular depression (does not reduce CO, MAP, or SVR significantly). It is ideal for induction in haemodynamically compromised patients (trauma, cardiac disease). Major side effect: adrenocortical suppression with single dose.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_mr_006",
                topic: "muscle-relaxants",
                year: "FMGE Jun 2022",
                q: "Suxamethonium (succinylcholine) causes hyperkalaemia by how many mEq/L rise in serum K+?",
                img: null,
                options: ["A. 0.1 mEq/L", "B. 0.5 mEq/L (clinically safe)", "C. 2–4 mEq/L (dangerous in burns/denervation)", "D. 10 mEq/L"],
                answer: 1,
                explanation: "Suxamethonium normally raises K+ by ~0.5 mEq/L (safe in normal patients). In burns, denervation injuries, prolonged immobilisation, and crush injuries, acetylcholine receptor upregulation causes an exaggerated rise (2–6 mEq/L), leading to fatal cardiac arrest.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_mr_007",
                topic: "muscle-relaxants",
                year: "FMGE Dec 2021",
                q: "Neostigmine reversal of neuromuscular blockade is combined with atropine to prevent:",
                img: null,
                options: ["A. Tachycardia", "B. Muscarinic side effects (bradycardia, increased secretions)", "C. Hypertension", "D. Malignant hyperthermia"],
                answer: 1,
                explanation: "Neostigmine (cholinesterase inhibitor) reverses NMB but also causes muscarinic effects (bradycardia, bronchospasm, increased secretions). Atropine (antimuscarinic) is co-administered to block these. Glycopyrrolate is an alternative to atropine.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_mr_008",
                topic: "muscle-relaxants",
                year: "FMGE Jun 2021",
                q: "Sugammadex reverses which class of muscle relaxants?",
                img: null,
                options: ["A. Depolarising NMBs (suxamethonium)", "B. Aminosteroid NMBs (rocuronium, vecuronium)", "C. Benzylisoquinoline NMBs (atracurium)", "D. All NMBs"],
                answer: 1,
                explanation: "Sugammadex is a modified gamma-cyclodextrin that encapsulates aminosteroid NMBs (rocuronium > vecuronium) and reverses their block immediately, regardless of depth. It does NOT reverse benzylisoquinolines (atracurium, cisatracurium) or suxamethonium.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_mr_009",
                topic: "muscle-relaxants",
                year: "FMGE Dec 2020",
                q: "Atracurium is preferred in patients with renal and hepatic failure because:",
                img: null,
                options: ["A. Excreted unchanged in urine", "B. Undergoes Hofmann elimination (spontaneous at physiological pH/temp)", "C. Metabolised by plasma cholinesterase", "D. Excreted entirely in bile"],
                answer: 1,
                explanation: "Atracurium (and cisatracurium) undergo Hofmann elimination — spontaneous non-enzymatic degradation at normal body pH and temperature. Hence independent of renal/hepatic function. Ideal in organ failure patients. Produces laudanosine (CNS stimulant).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_mr_010",
                topic: "muscle-relaxants",
                year: "FMGE Jun 2020",
                q: "Phase II block (dual block) during suxamethonium occurs when:",
                img: null,
                options: ["A. A single dose is given", "B. Large/repeated doses given, block resembles non-depolarising NMB", "C. Neostigmine is co-administered", "D. Patient has pseudocholinesterase deficiency"],
                answer: 1,
                explanation: "Phase II (dual/desensitisation) block occurs with large or repeated doses of suxamethonium. Unlike Phase I block (augmented by neostigmine), Phase II block is reversed by neostigmine. Characteristics shift to resemble non-depolarising block (fade on TOF, post-tetanic potentiation).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_la_006",
                topic: "local-anesthetics",
                year: "FMGE Jun 2022",
                q: "Local anaesthetic with most systemic toxicity is:",
                img: null,
                options: ["A. Lidocaine", "B. Bupivacaine", "C. Ropivacaine", "D. Prilocaine"],
                answer: 1,
                explanation: "Bupivacaine has the highest systemic toxicity (cardiac toxicity) among local anaesthetics. It causes severe ventricular arrhythmias (VF) after accidental IV injection, which are refractory to resuscitation. Treatment of LA toxicity: 20% intralipid emulsion.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_la_007",
                topic: "local-anesthetics",
                year: "FMGE Dec 2021",
                q: "Prilocaine causes methaemoglobinaemia because it is metabolised to:",
                img: null,
                options: ["A. Para-aminobenzoic acid (PABA)", "B. Orthotoluidine", "C. Aniline dye", "D. Cresol"],
                answer: 1,
                explanation: "Prilocaine is metabolised to orthotoluidine, which oxidises haemoglobin to methaemoglobin. Use >600 mg can cause clinically significant methaemoglobinaemia (cyanosis not responding to O2). Treatment: methylene blue IV.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_la_008",
                topic: "local-anesthetics",
                year: "FMGE Jun 2021",
                q: "Local anaesthetics work by:",
                img: null,
                options: ["A. Blocking voltage-gated calcium channels", "B. Blocking voltage-gated sodium channels (preventing depolarisation)", "C. Activating potassium channels", "D. GABA-A receptor activation"],
                answer: 1,
                explanation: "LAs block voltage-gated Na+ channels in their activated/open state (use-dependent block), preventing Na+ influx and action potential propagation. They preferentially block small myelinated (A-delta pain fibres) over large fibres (proprioception, motor).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_la_009",
                topic: "local-anesthetics",
                year: "FMGE Dec 2020",
                q: "Adrenaline is added to local anaesthetics to:",
                img: null,
                options: ["A. Increase systemic absorption", "B. Prolong duration and reduce systemic toxicity by vasoconstriction", "C. Treat hypotension", "D. Increase nerve block speed"],
                answer: 1,
                explanation: "Adrenaline causes local vasoconstriction, slowing systemic absorption of LA → prolonged duration of block + reduced peak plasma concentration (lower systemic toxicity). Contraindicated in: ring blocks of digits, penis, nose (risk of ischaemic necrosis).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_la_010",
                topic: "local-anesthetics",
                year: "FMGE Jun 2020",
                q: "Maximum safe dose of lignocaine (lidocaine) without adrenaline is:",
                img: null,
                options: ["A. 1 mg/kg", "B. 3 mg/kg", "C. 7 mg/kg", "D. 10 mg/kg"],
                answer: 1,
                explanation: "Maximum safe dose of lidocaine WITHOUT adrenaline: 3 mg/kg (total 200 mg). WITH adrenaline: 7 mg/kg (vasoconstriction reduces absorption). Bupivacaine max: 2 mg/kg without, 3 mg/kg with adrenaline.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_air_006",
                topic: "airway-management",
                year: "FMGE Jun 2022",
                q: "Cricothyrotomy (emergency surgical airway) is performed through:",
                img: null,
                options: ["A. Thyrohyoid membrane", "B. Cricothyroid membrane", "C. Trachea between 1st and 2nd ring", "D. Cricoid cartilage"],
                answer: 1,
                explanation: "Emergency cricothyrotomy is performed through the cricothyroid membrane (between cricoid and thyroid cartilage). It is the fastest surgical airway in a 'cannot intubate, cannot oxygenate' scenario. Tracheostomy is between 2nd–4th tracheal rings.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_air_007",
                topic: "airway-management",
                year: "FMGE Dec 2021",
                q: "Sellick's manoeuvre (cricoid pressure) is applied during RSI to prevent:",
                img: null,
                options: ["A. Laryngospasm", "B. Pulmonary aspiration of gastric contents", "C. Hypertension during intubation", "D. Dental injury"],
                answer: 1,
                explanation: "Sellick's manoeuvre: backward pressure on cricoid cartilage compresses the oesophagus against the vertebral body, preventing passive regurgitation during RSI. Applied with 30 N force. Released once cuff inflated and tube position confirmed.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_air_008",
                topic: "airway-management",
                year: "FMGE Jun 2021",
                q: "Laryngeal mask airway (LMA) is contraindicated in:",
                img: null,
                options: ["A. Short elective procedures", "B. Full stomach/aspiration risk patients", "C. Patients with difficult intubation as temporising measure", "D. Paediatric patients"],
                answer: 1,
                explanation: "LMA does not protect against pulmonary aspiration (no cuff sealing the trachea). Contraindicated in full stomach, GORD, emergency surgery, morbid obesity, and prone position surgery. It sits in the hypopharynx and forms a low-pressure seal around larynx.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_air_009",
                topic: "airway-management",
                year: "FMGE Dec 2020",
                q: "Gold standard for confirming correct endotracheal tube placement is:",
                img: null,
                options: ["A. Chest rise and equal breath sounds", "B. End-tidal CO2 (capnography)", "C. SpO2 improvement", "D. CXR in ICU"],
                answer: 1,
                explanation: "End-tidal CO2 (capnography/capnometry) is the gold standard for confirming ETT placement in the trachea (not oesophagus). CO2 waveform (4–6 breaths) confirms tracheal placement. SpO2 and chest rise may be normal initially even with oesophageal intubation.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_air_010",
                topic: "airway-management",
                year: "FMGE Jun 2020",
                q: "The 3-3-2 rule for predicting difficult airway assesses:",
                img: null,
                options: ["A. Oxygen saturation, blood pressure, and body weight", "B. Mouth opening (3 fingers), chin-to-hyoid (3 fingers), hyoid-to-thyroid notch (2 fingers)", "C. Age, BMI, and neck circumference", "D. Mallampati score components"],
                answer: 1,
                explanation: "3-3-2 rule: 3 finger breadths mouth opening (interincisor distance), 3 finger breadths chin-to-hyoid distance, 2 finger breadths hyoid-to-thyroid cartilage notch. Inadequate measurements predict difficult laryngoscopy.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_asa_006",
                topic: "asa-classification",
                year: "FMGE Jun 2022",
                q: "A patient with poorly controlled diabetes, COPD, and morbid obesity belongs to ASA class:",
                img: null,
                options: ["A. ASA I", "B. ASA II", "C. ASA III", "D. ASA IV"],
                answer: 2,
                explanation: "ASA III: Severe systemic disease with substantive functional limitations but not immediately life-threatening. Includes: poorly controlled DM/HTN, COPD, morbid obesity (BMI ≥40), active hepatitis, alcohol dependence, implanted pacemaker. ASA II = mild disease (well-controlled DM, BMI 30–40).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_asa_007",
                topic: "asa-classification",
                year: "FMGE Dec 2021",
                q: "ASA IV classification applies to:",
                img: null,
                options: ["A. Normal healthy patient", "B. Mild systemic disease", "C. Severe incapacitating disease that is a constant threat to life", "D. Brain dead patient"],
                answer: 2,
                explanation: "ASA IV: Severe systemic disease that is a constant threat to life. Examples: recent MI (<3 months), CVA, TIA, severe valve disease (decompensated), sepsis, DIC, ARF/ESRD not on dialysis regularly. ASA V = moribund, not expected to survive 24 hrs without surgery.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_asa_008",
                topic: "asa-classification",
                year: "FMGE Jun 2021",
                q: "Emergency surgery suffix 'E' in ASA classification (e.g., ASA IIE) indicates:",
                img: null,
                options: ["A. Epidural anaesthesia planned", "B. Emergency nature of surgery increasing perioperative risk", "C. Elderly patient", "D. Endotracheal intubation required"],
                answer: 1,
                explanation: "The 'E' suffix (e.g., ASA IIIE) indicates an emergency surgery, which increases anaesthetic and surgical risk. An emergency case is always considered riskier than the same ASA class undergoing elective surgery.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_asa_009",
                topic: "asa-classification",
                year: "FMGE Dec 2020",
                q: "An ASA I patient is defined as:",
                img: null,
                options: ["A. Healthy, no systemic disease, non-smoker, non-obese", "B. Mild systemic disease only", "C. Severe disease, no threat to life", "D. Moribund patient"],
                answer: 0,
                explanation: "ASA I: Healthy patient with no systemic disease, no alcohol use, non-smoker. BMI ≤30. No significant medical history. Perioperative mortality risk <0.1%. This is the lowest risk category.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_asa_010",
                topic: "asa-classification",
                year: "FMGE Jun 2020",
                q: "An ASA VI patient represents:",
                img: null,
                options: ["A. Healthy paediatric patient", "B. Brain-dead patient whose organs are being harvested", "C. Elderly patient (>80 years)", "D. Pregnant patient at term"],
                answer: 1,
                explanation: "ASA VI: Brain-dead patient declared brain dead for organ donation purposes. Their organs are being harvested. This is a distinct category added to the traditional ASA I–V classification.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_se_006",
                topic: "spinal-epidural",
                year: "FMGE Jun 2022",
                q: "The most common and serious complication of spinal anaesthesia is:",
                img: null,
                options: ["A. Headache (PDPH)", "B. Hypotension due to sympathetic blockade", "C. Urinary retention", "D. Backache"],
                answer: 1,
                explanation: "Hypotension is the most common serious complication of spinal anaesthesia (sympathetic blockade → vasodilation). Management: IV fluids, phenylephrine/ephedrine. Post-dural puncture headache (PDPH) is common but not immediately life-threatening.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_se_007",
                topic: "spinal-epidural",
                year: "FMGE Dec 2021",
                q: "Post-dural puncture headache (PDPH) is characterised by:",
                img: null,
                options: ["A. Occipital headache, worse lying down, improves sitting", "B. Bilateral fronto-occipital headache, worse on sitting/standing, relieved by lying flat", "C. Unilateral throbbing headache with aura", "D. Headache with fever suggesting meningitis"],
                answer: 1,
                explanation: "PDPH: bilateral, fronto-occipital, postural headache — worse on sitting/standing (CSF leaks through dural puncture site), relieved by lying flat. Treatment: bed rest, hydration, caffeine, epidural blood patch (gold standard for refractory PDPH).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_se_008",
                topic: "spinal-epidural",
                year: "FMGE Jun 2021",
                q: "Level of spinal anaesthesia for caesarean section should reach:",
                img: null,
                options: ["A. T10 (umbilical level)", "B. T4 (nipple level)", "C. T8 (costal margin)", "D. L1 (inguinal level)"],
                answer: 1,
                explanation: "For C-section, spinal anaesthesia must reach T4 (bilateral) to cover peritoneal traction, uterine manipulation, and shoulder tip pain (diaphragmatic). T10 is adequate for perineal procedures and labour analgesia only.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_se_009",
                topic: "spinal-epidural",
                year: "FMGE Dec 2020",
                q: "Hyperbaric bupivacaine for spinal anaesthesia contains:",
                img: null,
                options: ["A. Bupivacaine in normal saline", "B. Bupivacaine in 8% dextrose (higher density than CSF)", "C. Bupivacaine with adrenaline", "D. Bupivacaine in sterile water"],
                answer: 1,
                explanation: "Hyperbaric bupivacaine: dissolved in 8% dextrose, making it denser than CSF (specific gravity >1.003). It sinks to dependent areas — patient positioning controls spread. Isobaric bupivacaine: same density as CSF, less position-dependent.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_se_010",
                topic: "spinal-epidural",
                year: "FMGE Jun 2020",
                q: "Epidural anaesthesia differs from spinal anaesthesia in that it:",
                img: null,
                options: ["A. Requires smaller drug volumes", "B. Allows titration via catheter and has slower onset", "C. Causes immediate total spinal if drug enters CSF", "D. Only blocks sensory fibres"],
                answer: 1,
                explanation: "Epidural: drug injected into epidural space (outside dura) — larger volumes (15–20 mL), slower onset (15–30 min), titratable via catheter. Spinal: small volume (2–3 mL) injected intrathecally — fast onset (5 min), fixed duration. Epidural risk: accidental IV or intrathecal injection.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_mh_006",
                topic: "malignant-hyperthermia",
                year: "FMGE Jun 2022",
                q: "Malignant hyperthermia is caused by mutation in the gene encoding:",
                img: null,
                options: ["A. Voltage-gated Na+ channel", "B. Ryanodine receptor type 1 (RYR1) on sarcoplasmic reticulum", "C. Acetylcholine receptor", "D. Myosin heavy chain"],
                answer: 1,
                explanation: "MH: autosomal dominant mutation in RYR1 (ryanodine receptor, sarcoplasmic reticulum Ca2+ release channel). Triggered by volatile anaesthetics and suxamethonium → uncontrolled Ca2+ release → muscle hypermetabolism, rigidity, hyperthermia.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_mh_007",
                topic: "malignant-hyperthermia",
                year: "FMGE Dec 2021",
                q: "Earliest sign of malignant hyperthermia during anaesthesia is:",
                img: null,
                options: ["A. Hyperthermia (high temperature)", "B. Unexplained rise in end-tidal CO2 (ETCO2)", "C. Masseter muscle rigidity", "D. Skin mottling"],
                answer: 1,
                explanation: "Earliest sign of MH: unexplained rise in ETCO2 (CO2 production from hypermetabolism). This precedes hyperthermia. Other early signs: tachycardia, masseter spasm after suxamethonium. Hyperthermia is a late sign.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_mh_008",
                topic: "malignant-hyperthermia",
                year: "FMGE Jun 2021",
                q: "Specific treatment for malignant hyperthermia is:",
                img: null,
                options: ["A. Dantrolene sodium", "B. Propofol infusion", "C. IV magnesium sulphate", "D. Bicarbonate and cooling only"],
                answer: 0,
                explanation: "Dantrolene sodium is the specific antidote for MH. It blocks RYR1, reducing Ca2+ release from SR → muscle relaxation. Dose: 2.5 mg/kg IV, repeated up to 10 mg/kg. Also: stop triggering agents, 100% O2, cooling, treat acidosis and hyperkalaemia.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_mh_009",
                topic: "malignant-hyperthermia",
                year: "FMGE Dec 2020",
                q: "Anaesthetic agents that TRIGGER malignant hyperthermia include:",
                img: null,
                options: ["A. Propofol and ketamine", "B. All volatile agents and suxamethonium", "C. Nitrous oxide and opioids", "D. Etomidate and midazolam"],
                answer: 1,
                explanation: "MH triggers: all halogenated volatile agents (halothane, isoflurane, desflurane, sevoflurane) AND suxamethonium. Safe agents for susceptible patients: propofol, ketamine, etomidate, N2O, opioids, benzodiazepines, non-depolarising NMBs.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_mh_010",
                topic: "malignant-hyperthermia",
                year: "FMGE Jun 2020",
                q: "Caffeine-halothane contracture test (CHCT) is the gold standard for diagnosing susceptibility to:",
                img: null,
                options: ["A. Pseudocholinesterase deficiency", "B. Malignant hyperthermia (MH)", "C. Neuroleptic malignant syndrome", "D. Serotonin syndrome"],
                answer: 1,
                explanation: "CHCT (in vitro contracture test, IVCT): biopsy of vastus lateralis exposed to halothane and caffeine → abnormal contracture if RYR1 mutation present. It is the gold standard for MH susceptibility testing. Genetic testing (RYR1 mutation) also used.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_pre_011",
                topic: "preop-assessment",
                year: "FMGE Jun 2022",
                q: "Preoperative fasting (NPO) guideline for clear fluids before elective surgery is:",
                img: null,
                options: ["A. 8 hours", "B. 6 hours", "C. 4 hours", "D. 2 hours"],
                answer: 3,
                explanation: "ASA fasting guidelines: clear fluids (water, clear juice, carbonated drinks) — 2 hours. Breast milk — 4 hours. Formula/non-human milk, light meal — 6 hours. Heavy meal (fried/fatty) — 8 hours. Aim: reduce aspiration risk without prolonged dehydration.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_pre_012",
                topic: "preop-assessment",
                year: "FMGE Dec 2021",
                q: "Which preoperative test is routinely required before major surgery in all patients?",
                img: null,
                options: ["A. Routine chest X-ray for all", "B. No routine tests needed without clinical indication", "C. ECG for all patients over 18", "D. Renal function for all patients"],
                answer: 1,
                explanation: "Routine preoperative testing is not indicated without clinical evidence. NICE guidelines: tests should be ordered based on ASA status, type of surgery, and patient's comorbidities. Unnecessary tests increase costs and may lead to false positives.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_pre_013",
                topic: "preop-assessment",
                year: "FMGE Jun 2021",
                q: "Revised Cardiac Risk Index (RCRI) includes all of the following EXCEPT:",
                img: null,
                options: ["A. Ischaemic heart disease", "B. Insulin-dependent diabetes", "C. Hypertension (well-controlled)", "D. Renal insufficiency (creatinine >2 mg/dL)"],
                answer: 2,
                explanation: "RCRI (Lee Index) factors: ischaemic heart disease, congestive heart failure, cerebrovascular disease, insulin-dependent DM, renal insufficiency (Cr >2 mg/dL), and high-risk surgery. Well-controlled hypertension is NOT a separate RCRI criterion.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_pre_014",
                topic: "preop-assessment",
                year: "FMGE Dec 2020",
                q: "Functional capacity ≥4 METs (metabolic equivalents) in a patient suggests:",
                img: null,
                options: ["A. Patient cannot tolerate any surgery", "B. Acceptable perioperative cardiac risk (can climb a flight of stairs)", "C. Requires cardiac catheterisation before surgery", "D. Complete fitness for any activity"],
                answer: 1,
                explanation: "≥4 METs = adequate functional capacity, associated with acceptable perioperative cardiac risk. 4 METs = climbing a flight of stairs, walking up a hill, or doing light housework. <4 METs or unknown = consider further cardiac evaluation before high-risk surgery.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_pre_015",
                topic: "preop-assessment",
                year: "FMGE Jun 2020",
                q: "Anticoagulation with warfarin should be stopped how many days before elective surgery?",
                img: null,
                options: ["A. 1 day", "B. 3–5 days", "C. 7 days", "D. 14 days"],
                answer: 1,
                explanation: "Warfarin should be stopped 3–5 days before elective surgery to allow INR to normalise (<1.5 for most procedures). For high-thrombotic risk patients (mechanical valves, AF), bridging therapy with LMWH is used. Novel anticoagulants (DOACs) stopped 24–48 hrs before.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_pre_016",
                topic: "pain-management-anesthesia",
                year: "FMGE Jun 2022",
                q: "WHO analgesic ladder Step 1 uses which class of drugs?",
                img: null,
                options: ["A. Strong opioids (morphine)", "B. Non-opioids (paracetamol, NSAIDs)", "C. Weak opioids (codeine)", "D. Adjuvant analgesics only"],
                answer: 1,
                explanation: "WHO analgesic ladder: Step 1 = non-opioids (paracetamol, NSAIDs) ± adjuvants. Step 2 = mild opioids (codeine, tramadol) + non-opioids ± adjuvants. Step 3 = strong opioids (morphine, fentanyl) + non-opioids ± adjuvants.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_pre_017",
                topic: "pain-management-anesthesia",
                year: "FMGE Dec 2021",
                q: "Multimodal analgesia in postoperative pain management aims to:",
                img: null,
                options: ["A. Use only one drug at maximum dose", "B. Use multiple analgesic classes at lower doses to achieve better pain control with fewer side effects", "C. Avoid all opioids", "D. Provide anaesthesia rather than analgesia"],
                answer: 1,
                explanation: "Multimodal analgesia: combining analgesics with different mechanisms (paracetamol + NSAID + regional block + opioid if needed) to achieve additive/synergistic pain control at lower individual doses, reducing side effects (less opioid-induced nausea, sedation).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_pre_018",
                topic: "pain-management-anesthesia",
                year: "FMGE Jun 2021",
                q: "Gabapentin/pregabalin are used in chronic pain management as:",
                img: null,
                options: ["A. GABA receptor agonists", "B. Alpha-2-delta subunit ligands reducing central sensitisation (neuropathic pain)", "C. COX-2 inhibitors", "D. Opioid receptor agonists"],
                answer: 1,
                explanation: "Gabapentin and pregabalin bind to alpha-2-delta subunit of voltage-gated Ca2+ channels in dorsal horn, reducing neurotransmitter release and central sensitisation. Effective in neuropathic pain (diabetic neuropathy, PHN), fibromyalgia, and as preemptive analgesia.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_pre_019",
                topic: "pain-management-anesthesia",
                year: "FMGE Dec 2020",
                q: "Patient-controlled analgesia (PCA) allows the patient to self-administer small boluses of opioid within a preset lockout interval, improving:",
                img: null,
                options: ["A. Only respiratory depression", "B. Pain control with reduced total opioid consumption and improved satisfaction", "C. Sleep quality without analgesia", "D. Blood pressure control"],
                answer: 1,
                explanation: "PCA: patient controls small IV opioid boluses (usually morphine/fentanyl) with a lockout interval (5–10 min) preventing overdose. Results in better pain control, less total opioid use, higher patient satisfaction, and shorter hospital stay vs. PRN nursing-administered analgesia.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "anes_pre_020",
                topic: "pain-management-anesthesia",
                year: "FMGE Jun 2020",
                q: "Epidural analgesia for labour pain uses which combination most commonly?",
                img: null,
                options: ["A. Morphine alone in high doses", "B. Low-concentration bupivacaine + opioid (fentanyl)", "C. Ketamine + midazolam", "D. Spinal neosaxitoxin"],
                answer: 1,
                explanation: "Labour epidural: low-concentration bupivacaine (0.0625–0.1%) + opioid (fentanyl 2 mcg/mL). The combination provides excellent analgesia with motor-sparing effect (allowing ambulation). High-concentration bupivacaine causes motor block, limiting mobility.",
                tags: ["PYQ", "high-yield"]
        },

];

export default anesthesia;
