const forensic = [

	// ============ BATCH 1: ASPHYXIAL DEATHS ============
	{
		id: "for_asp_001",
		topic: "asphyxial-deaths",
		year: "FMGE Dec 2019",
		q: "Classical external sign often seen in asphyxial deaths is:",
		img: null,
		options: ["A. Jaundice", "B. Petechial hemorrhages", "C. Cyanosis never", "D. Generalized pallor only"],
		answer: 1,
		explanation: "Petechiae in conjunctiva and skin can occur due to venous congestion in asphyxia.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "for_asp_002",
		topic: "asphyxial-deaths",
		year: "FMGE Jun 2018",
		q: "Fracture of hyoid bone is most commonly associated with:",
		img: null,
		options: ["A. Drowning", "B. Strangulation", "C. Poisoning", "D. Electrocution"],
		answer: 1,
		explanation: "Manual strangulation and forceful compression of neck may fracture hyoid, especially in older adults.",
		tags: ["PYQ"]
	},
	{
		id: "for_asp_003",
		topic: "asphyxial-deaths",
		year: "FMGE Dec 2018",
		q: "In typical hanging, ligature mark is usually:",
		img: null,
		options: ["A. Horizontal and complete", "B. Oblique and non-continuous", "C. Deep ecchymosed groove around full neck", "D. Absent"],
		answer: 1,
		explanation: "Hanging commonly shows oblique non-continuous ligature mark above thyroid cartilage.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "for_asp_004",
		topic: "asphyxial-deaths",
		year: "FMGE Jun 2019",
		q: "Fine white froth at mouth and nostrils is suggestive of:",
		img: null,
		options: ["A. Drowning", "B. Head injury", "C. Burn shock", "D. Snake bite"],
		answer: 0,
		explanation: "Persistent fine froth at mouth/nose is a classic sign in wet drowning.",
		tags: ["PYQ"]
	},
	{
		id: "for_asp_005",
		topic: "asphyxial-deaths",
		year: "FMGE Dec 2020",
		q: "Most reliable diagnosis of antemortem drowning is supported by:",
		img: null,
		options: ["A. Cadaveric spasm only", "B. Diatom test correlation", "C. Skin wrinkling only", "D. Postmortem lividity pattern only"],
		answer: 1,
		explanation: "Diatoms in organs/bone marrow matching drowning medium may support antemortem aspiration evidence.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 1: WOUNDS ============
	{
		id: "for_wnd_001",
		topic: "wounds-forensic",
		year: "FMGE Dec 2019",
		q: "Incised wound is characterized by:",
		img: null,
		options: ["A. Depth more than length", "B. Length greater than depth with clean margins", "C. Abraded irregular margins", "D. Tissue bridging"],
		answer: 1,
		explanation: "Incised wounds from sharp edges show clean cut margins and length more than depth.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "for_wnd_002",
		topic: "wounds-forensic",
		year: "FMGE Jun 2018",
		q: "Lacerated wound classically shows:",
		img: null,
		options: ["A. Sharp clean edges", "B. Tissue bridges at wound floor", "C. Tailing", "D. No surrounding abrasion"],
		answer: 1,
		explanation: "Blunt force lacerations often have irregular margins and tissue bridges.",
		tags: ["PYQ"]
	},
	{
		id: "for_wnd_003",
		topic: "wounds-forensic",
		year: "FMGE Dec 2018",
		q: "An abrasion caused by tangential force is called:",
		img: null,
		options: ["A. Imprint abrasion", "B. Graze abrasion", "C. Pressure abrasion", "D. Contusion"],
		answer: 1,
		explanation: "Graze (brush) abrasion occurs when skin scrapes against rough surface tangentially.",
		tags: ["PYQ"]
	},
	{
		id: "for_wnd_004",
		topic: "wounds-forensic",
		year: "FMGE Jun 2019",
		q: "Blackening around firearm entry wound indicates:",
		img: null,
		options: ["A. Distant range shot", "B. Close range shot", "C. Postmortem artifact", "D. Exit wound"],
		answer: 1,
		explanation: "Soot blackening and tattooing are features of close/intermediate range firing.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "for_wnd_005",
		topic: "wounds-forensic",
		year: "FMGE Dec 2020",
		q: "Exit wound in firearm injury is generally:",
		img: null,
		options: ["A. Smaller with inverted margins", "B. Larger with everted margins", "C. Always blackened", "D. Always circular"],
		answer: 1,
		explanation: "Exit wounds are often irregular/larger and show everted margins without soot blackening.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 1: IDENTIFICATION ============
	{
		id: "for_id_001",
		topic: "forensic-identification",
		year: "FMGE Dec 2019",
		q: "Most reliable method of personal identification in decomposed bodies is:",
		img: null,
		options: ["A. Height only", "B. Fingerprint examination", "C. Hair color", "D. Shoe size"],
		answer: 1,
		explanation: "Fingerprints remain a highly reliable and unique identifier where recoverable.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "for_id_002",
		topic: "forensic-identification",
		year: "FMGE Jun 2018",
		q: "Sex determination from pelvis is best assessed by:",
		img: null,
		options: ["A. Humerus length", "B. Subpubic angle", "C. Skull circumference only", "D. Vertebral count"],
		answer: 1,
		explanation: "Wider subpubic angle and pelvic features are strong indicators of female sex.",
		tags: ["PYQ"]
	},
	{
		id: "for_id_003",
		topic: "forensic-identification",
		year: "FMGE Dec 2018",
		q: "Age estimation in children is most accurately done by:",
		img: null,
		options: ["A. Skin elasticity", "B. Dental eruption and ossification centers", "C. Hair graying", "D. Voice pitch"],
		answer: 1,
		explanation: "Dental status and epiphyseal ossification are key tools for age estimation in children/adolescents.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "for_id_004",
		topic: "forensic-identification",
		year: "FMGE Jun 2019",
		q: "Cheiloscopy refers to study of:",
		img: null,
		options: ["A. Iris pattern", "B. Lip prints", "C. Voice pattern", "D. Ear lobule"],
		answer: 1,
		explanation: "Cheiloscopy is forensic analysis of lip print patterns.",
		tags: ["PYQ"]
	},
	{
		id: "for_id_005",
		topic: "forensic-identification",
		year: "FMGE Dec 2020",
		q: "DNA profiling in forensic science commonly uses:",
		img: null,
		options: ["A. rRNA sequencing", "B. STR analysis", "C. Karyotyping only", "D. Blood grouping only"],
		answer: 1,
		explanation: "Short tandem repeat (STR) profiling is standard for forensic DNA identification.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 1: POISONS ============
	{
		id: "for_poi_001",
		topic: "forensic-poisons",
		year: "FMGE Dec 2019",
		q: "Most common poison in agricultural poisoning in India is:",
		img: null,
		options: ["A. Methanol", "B. Organophosphorus compounds", "C. Arsenic", "D. Copper sulfate"],
		answer: 1,
		explanation: "Organophosphorus pesticide exposure is a common poisoning scenario in rural India.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "for_poi_002",
		topic: "forensic-poisons",
		year: "FMGE Jun 2018",
		q: "Specific antidote for organophosphorus poisoning includes:",
		img: null,
		options: ["A. Naloxone", "B. Atropine with pralidoxime", "C. Flumazenil", "D. Deferoxamine"],
		answer: 1,
		explanation: "Atropine counters muscarinic effects and oximes reactivate acetylcholinesterase.",
		tags: ["PYQ"]
	},
	{
		id: "for_poi_003",
		topic: "forensic-poisons",
		year: "FMGE Dec 2018",
		q: "Most specific antidote for opioid overdose is:",
		img: null,
		options: ["A. N-acetylcysteine", "B. Naloxone", "C. Atropine", "D. Vitamin K"],
		answer: 1,
		explanation: "Naloxone is a competitive opioid receptor antagonist used in opioid toxicity.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "for_poi_004",
		topic: "forensic-poisons",
		year: "FMGE Jun 2019",
		q: "Classical blood color in carbon monoxide poisoning is:",
		img: null,
		options: ["A. Dark brown", "B. Cherry red", "C. Greenish", "D. Black"],
		answer: 1,
		explanation: "Carboxyhemoglobin imparts a characteristic cherry-red coloration.",
		tags: ["PYQ"]
	},
	{
		id: "for_poi_005",
		topic: "forensic-poisons",
		year: "FMGE Dec 2020",
		q: "Antidote for methanol poisoning is:",
		img: null,
		options: ["A. Fomepizole/ethanol", "B. Atropine", "C. BAL", "D. Protamine"],
		answer: 0,
		explanation: "Fomepizole (or ethanol) inhibits alcohol dehydrogenase and limits toxic metabolite formation.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 1: IPC/MCI SECTIONS & MLC ============
	{
		id: "for_ipc_001",
		topic: "ipc-sections",
		year: "FMGE Dec 2019",
		q: "A medicolegal case (MLC) must be registered when:",
		img: null,
		options: ["A. Only on police request", "B. Injury/poisoning/suspicious circumstances present", "C. Only in private hospitals", "D. Patient insists no record"],
		answer: 1,
		explanation: "Doctors should register MLC whenever legal investigation may be warranted.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "for_ipc_002",
		topic: "ipc-sections",
		year: "FMGE Jun 2018",
		q: "Consent for medicolegal examination in adults is generally from:",
		img: null,
		options: ["A. Police officer", "B. Patient himself/herself", "C. Husband/wife mandatory", "D. Hospital manager"],
		answer: 1,
		explanation: "A competent adult provides informed consent for examination, except specific legal circumstances.",
		tags: ["PYQ"]
	},
	{
		id: "for_ipc_003",
		topic: "ipc-sections",
		year: "FMGE Dec 2018",
		q: "A dying declaration can be recorded by:",
		img: null,
		options: ["A. Only magistrate, never anyone else", "B. Magistrate preferably; doctor/police may record in urgency", "C. Relatives only", "D. Nurse only"],
		answer: 1,
		explanation: "Magistrate is preferred, but urgent circumstances may permit recording by others if properly documented.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "for_ipc_004",
		topic: "ipc-sections",
		year: "FMGE Jun 2019",
		q: "Injury certificate should include all except:",
		img: null,
		options: ["A. Type and dimensions of injuries", "B. Time/date and identification details", "C. Personal assumptions not examined", "D. Nature/opinion as per findings"],
		answer: 2,
		explanation: "Certificates should be factual, objective, and based on examined findings only.",
		tags: ["PYQ"]
	},
	{
		id: "for_ipc_005",
		topic: "ipc-sections",
		year: "FMGE Dec 2020",
		q: "For preservation of chain of custody, samples should be:",
		img: null,
		options: ["A. Sent without labels", "B. Properly sealed, labeled, and documented", "C. Handed informally to attendants", "D. Mixed together for convenience"],
		answer: 1,
		explanation: "Sealing, labeling, and documentation are essential for medico-legal evidentiary integrity.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 2: SEXUAL OFFENSES & RAPE ============
	{
		id: "for_so_001",
		topic: "sexual-offenses-forensic",
		year: "FMGE Dec 2019",
		q: "In sexual assault examination, consent for medical examination in an adult is obtained from:",
		img: null,
		options: ["A. Police officer", "B. Victim herself/himself", "C. Relative only", "D. Magistrate only"],
		answer: 1,
		explanation: "A competent adult survivor provides informed consent for examination and sample collection.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "for_so_002",
		topic: "sexual-offenses-forensic",
		year: "FMGE Jun 2018",
		q: "Most important principle during sexual assault evidence collection is:",
		img: null,
		options: ["A. Delay samples for convenience", "B. Maintain chain of custody", "C. Avoid documentation", "D. Wash all specimens first"],
		answer: 1,
		explanation: "Proper labeling, sealing, and custody documentation preserve evidentiary value.",
		tags: ["PYQ"]
	},
	{
		id: "for_so_003",
		topic: "sexual-offenses-forensic",
		year: "FMGE Dec 2018",
		q: "Absence of genital injury in alleged sexual assault:",
		img: null,
		options: ["A. Excludes assault", "B. Does not rule out assault", "C. Means false allegation", "D. Confirms consent"],
		answer: 1,
		explanation: "Lack of injury does not negate assault; findings depend on circumstances and timing.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "for_so_004",
		topic: "sexual-offenses-forensic",
		year: "FMGE Jun 2019",
		q: "Forensic report in sexual assault should be:",
		img: null,
		options: ["A. Opinionated and speculative", "B. Objective, descriptive, and evidence-based", "C. Limited to police narrative", "D. Without sample details"],
		answer: 1,
		explanation: "Medical opinion should remain objective and based on documented findings.",
		tags: ["PYQ"]
	},
	{
		id: "for_so_005",
		topic: "sexual-offenses-forensic",
		year: "FMGE Dec 2020",
		q: "In minors, sexual assault examination generally requires consent from:",
		img: null,
		options: ["A. Minor alone only", "B. Parent/guardian as per law, with child assent where appropriate", "C. Police only", "D. School authority"],
		answer: 1,
		explanation: "Legal guardian consent is required, while ensuring child-sensitive procedures and legal compliance.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 2: POSTMORTEM CHANGES & TOD ============
	{
		id: "for_pm_001",
		topic: "postmortem-changes",
		year: "FMGE Dec 2019",
		q: "First postmortem change to appear after death is usually:",
		img: null,
		options: ["A. Rigor mortis", "B. Algor mortis", "C. Putrefaction", "D. Mummification"],
		answer: 1,
		explanation: "Cooling of body (algor) begins early, while rigor and lividity develop subsequently.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "for_pm_002",
		topic: "postmortem-changes",
		year: "FMGE Jun 2018",
		q: "Rigor mortis first appears in:",
		img: null,
		options: ["A. Lower limbs", "B. Small muscles of face/jaw", "C. Trunk only", "D. Fingers last only"],
		answer: 1,
		explanation: "Rigor generally starts in involuntary/small muscles and progresses head to toe.",
		tags: ["PYQ"]
	},
	{
		id: "for_pm_003",
		topic: "postmortem-changes",
		year: "FMGE Dec 2018",
		q: "Postmortem lividity (hypostasis) is due to:",
		img: null,
		options: ["A. Arterial spasm", "B. Gravitational settling of blood", "C. Clot dissolution", "D. Fat liquefaction"],
		answer: 1,
		explanation: "After circulation stops, blood pools in dependent venous/capillary beds.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "for_pm_004",
		topic: "postmortem-changes",
		year: "FMGE Jun 2019",
		q: "Greenish discoloration of right iliac fossa in putrefaction appears due to:",
		img: null,
		options: ["A. Bile leakage", "B. Sulfhemoglobin from bacterial action", "C. Melanin oxidation", "D. Fat necrosis"],
		answer: 1,
		explanation: "Hydrogen sulfide from gut bacteria reacts with hemoglobin causing green discoloration.",
		tags: ["PYQ"]
	},
	{
		id: "for_pm_005",
		topic: "postmortem-changes",
		year: "FMGE Dec 2020",
		q: "Adipocere formation is favored in:",
		img: null,
		options: ["A. Hot dry environment", "B. Moist anaerobic conditions", "C. Freezing dry air", "D. High-altitude cold wind"],
		answer: 1,
		explanation: "Saponification leading to adipocere occurs in moist, warm, poorly aerated environments.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 2: ALCOHOL & BLOOD ALCOHOL ============
	{
		id: "for_alc_001",
		topic: "alcohol-forensic",
		year: "FMGE Dec 2019",
		q: "Preferred specimen for legal estimation of alcohol concentration is:",
		img: null,
		options: ["A. Saliva", "B. Venous blood", "C. Sweat", "D. CSF"],
		answer: 1,
		explanation: "Venous blood alcohol estimation is standard for medico-legal quantification.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "for_alc_002",
		topic: "alcohol-forensic",
		year: "FMGE Jun 2018",
		q: "Breath alcohol analyzer estimates alcohol based on:",
		img: null,
		options: ["A. Urinary ketones", "B. Alveolar breath ethanol", "C. Salivary amylase", "D. Hematocrit"],
		answer: 1,
		explanation: "Breath analyzers infer blood alcohol from end-expiratory alveolar ethanol levels.",
		tags: ["PYQ"]
	},
	{
		id: "for_alc_003",
		topic: "alcohol-forensic",
		year: "FMGE Dec 2018",
		q: "In drunk driving assessment, most legally defensible practice is:",
		img: null,
		options: ["A. Clinical smell test only", "B. Properly documented breath/blood analysis", "C. Witness opinion only", "D. Eye exam alone"],
		answer: 1,
		explanation: "Objective validated testing with documentation is essential for legal reliability.",
		tags: ["PYQ"]
	},
	{
		id: "for_alc_004",
		topic: "alcohol-forensic",
		year: "FMGE Jun 2019",
		q: "Alcohol elimination in average adults follows approximately:",
		img: null,
		options: ["A. Zero-order kinetics over common intoxication range", "B. First-order kinetics always", "C. Michaelis-Menten only at all levels", "D. No elimination"],
		answer: 0,
		explanation: "At typical concentrations, ethanol is eliminated near constant rate (zero-order approximation).",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "for_alc_005",
		topic: "alcohol-forensic",
		year: "FMGE Dec 2020",
		q: "For blood alcohol sampling, preservative commonly added is:",
		img: null,
		options: ["A. EDTA only", "B. Sodium fluoride", "C. Heparin only", "D. Citrate phosphate dextrose"],
		answer: 1,
		explanation: "Sodium fluoride helps inhibit glycolysis/fermentation and preserves sample integrity.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 2: BIRTH & DEATH REGISTRATION ============
	{
		id: "for_bdr_001",
		topic: "birth-death-registration",
		year: "FMGE Dec 2019",
		q: "Medical Certification of Cause of Death (MCCD) should include:",
		img: null,
		options: ["A. Mechanism only", "B. Immediate, antecedent, and underlying causes", "C. Police opinion only", "D. Family statement only"],
		answer: 1,
		explanation: "Cause-of-death sequence should identify the underlying disease initiating events.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "for_bdr_002",
		topic: "birth-death-registration",
		year: "FMGE Jun 2018",
		q: "Stillbirth certification generally requires:",
		img: null,
		options: ["A. No formal record", "B. Appropriate registration as per law", "C. Police FIR mandatory in all", "D. Court order first"],
		answer: 1,
		explanation: "Stillbirths are recorded under statutory civil registration requirements.",
		tags: ["PYQ"]
	},
	{
		id: "for_bdr_003",
		topic: "birth-death-registration",
		year: "FMGE Dec 2018",
		q: "In cause-of-death statement, term 'cardiorespiratory arrest' alone is:",
		img: null,
		options: ["A. Sufficient cause", "B. Not an acceptable underlying cause by itself", "C. Preferred over diagnosis", "D. Mandatory wording"],
		answer: 1,
		explanation: "Modes of dying like cardiorespiratory arrest should not replace etiologic underlying cause.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "for_bdr_004",
		topic: "birth-death-registration",
		year: "FMGE Jun 2019",
		q: "If death appears unnatural/suspicious, physician should:",
		img: null,
		options: ["A. Issue natural death certificate directly", "B. Inform police and proceed medicolegally", "C. Refuse all documentation", "D. Hand over body immediately"],
		answer: 1,
		explanation: "Suspicious or unnatural deaths require medico-legal process and police intimation.",
		tags: ["PYQ"]
	},
	{
		id: "for_bdr_005",
		topic: "birth-death-registration",
		year: "FMGE Dec 2020",
		q: "Correct registration data are crucial mainly for:",
		img: null,
		options: ["A. Personal curiosity", "B. Public health statistics and legal identity", "C. Hospital marketing", "D. Insurance denial"],
		answer: 1,
		explanation: "Civil registration supports legal identity and national vital statistics planning.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 2: MEDICAL NEGLIGENCE & PCPNDT ACT ============
	{
		id: "for_med_001",
		topic: "medical-negligence",
		year: "FMGE Dec 2019",
		q: "Medical negligence is generally established when there is:",
		img: null,
		options: ["A. Any adverse outcome", "B. Breach of duty causing damage", "C. Patient dissatisfaction only", "D. Delay in recovery alone"],
		answer: 1,
		explanation: "Negligence requires duty, breach, causation, and resulting damage.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "for_med_002",
		topic: "medical-negligence",
		year: "FMGE Jun 2018",
		q: "Bolam principle relates to:",
		img: null,
		options: ["A. Organ donation", "B. Standard of professional medical care", "C. Blood grouping", "D. Postmortem interval"],
		answer: 1,
		explanation: "Bolam test assesses whether conduct aligns with accepted responsible medical practice.",
		tags: ["PYQ"]
	},
	{
		id: "for_med_003",
		topic: "medical-negligence",
		year: "FMGE Dec 2018",
		q: "Under PCPNDT Act, prenatal sex determination for non-medical reasons is:",
		img: null,
		options: ["A. Permitted with family consent", "B. Prohibited", "C. Allowed after first child", "D. Allowed in private setup"],
		answer: 1,
		explanation: "PCPNDT Act prohibits sex selection and non-indicated prenatal sex determination.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "for_med_004",
		topic: "medical-negligence",
		year: "FMGE Jun 2019",
		q: "Informed consent should include:",
		img: null,
		options: ["A. Only signature", "B. Nature, risks, benefits, and alternatives", "C. Only procedure name", "D. Doctor's fee details only"],
		answer: 1,
		explanation: "Valid consent requires adequate disclosure and voluntary patient authorization.",
		tags: ["PYQ"]
	},
	{
		id: "for_med_005",
		topic: "medical-negligence",
		year: "FMGE Dec 2020",
		q: "Best legal protection for clinicians in high-risk practice is:",
		img: null,
		options: ["A. Verbal advice only", "B. Good documentation and standard protocol adherence", "C. Avoiding complex cases", "D. No follow-up notes"],
		answer: 1,
		explanation: "Accurate records and guideline-consistent care are central to quality defense and patient safety.",
		tags: ["PYQ", "high-yield"]
	},


        {
                id: "for_asp_006",
                topic: "asphyxial-deaths",
                year: "FMGE Jun 2022",
                q: "In hanging, the furrow (groove) around the neck is typically:",
                img: null,
                options: ["A. Horizontal, below the thyroid cartilage, complete (circumferential)", "B. Oblique, above the thyroid cartilage, usually incomplete (doesn't go all the way around)", "C. Horizontal, at the level of the cricoid cartilage, complete", "D. Multiple parallel marks at the same level"],
                answer: 1,
                explanation: "Hanging furrow characteristics: oblique/inverted V-shape, rises upward toward the knot, usually above the thyroid cartilage, incomplete (no mark at knot position), parchment-like pale mark. Distinguishes from strangulation (ligature): horizontal, complete, below thyroid, deep. Judicial hanging: fracture-dislocation of C2 (hangman's fracture), cause of death = cervical cord injury.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_asp_007",
                topic: "asphyxial-deaths",
                year: "FMGE Dec 2021",
                q: "Tardieu spots (petechial haemorrhages under pleura and pericardium) are a sign of:",
                img: null,
                options: ["A. Myocardial infarction", "B. Asphyxial deaths (mechanical asphyxia)", "C. Poisoning by arsenic", "D. Liver failure"],
                answer: 1,
                explanation: "Tardieu spots: subpleural, subpericardial, and subconjunctival petechial haemorrhages from raised venous pressure during asphyxia → capillary rupture. Classic sign of mechanical asphyxia (strangulation, suffocation, smothering). NOT pathognomonic of hanging (may be absent). Named after Auguste Tardieu.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_asp_008",
                topic: "asphyxial-deaths",
                year: "FMGE Jun 2021",
                q: "The classic 4-stage (A-D) sequence of mechanical asphyxia includes:",
                img: null,
                options: ["A. Stage I: loss of consciousness; Stage II: convulsions; Stage III: coma; Stage IV: death", "B. Stage I: dyspnoea/cyanosis; Stage II: convulsions; Stage III: exhaustion/apnoea; Stage IV: terminal gasping + death", "C. Stage I: bradycardia; Stage II: apnoea; Stage III: convulsions; Stage IV: cyanosis", "D. Stage I: unconsciousness; Stage II: absent reflexes; Stage III: cardiac arrest"],
                answer: 1,
                explanation: "Mechanical asphyxia sequence: Stage A (Dyspnoea) → Stage B (Convulsions) → Stage C (Pre-terminal — unconsciousness, absence of reflexes, relaxation of sphincters) → Stage D (Terminal gasping + cardiac arrest + death). Total: 3–5 minutes. Asphyxia = impaired O2/CO2 exchange.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_asp_009",
                topic: "asphyxial-deaths",
                year: "FMGE Dec 2020",
                q: "In drowning, the most common type of diatoms found in the bone marrow confirms:",
                img: null,
                options: ["A. Blunt force trauma before drowning", "B. Ante-mortem drowning (alive when entered water — diatoms distributed to viscera via circulation)", "C. Post-mortem entry into water", "D. Electrocution causing cardiac arrest"],
                answer: 1,
                explanation: "Diatom test (Caspers-Breider test): diatoms (siliceous algae) inhaled during ante-mortem drowning → enter pulmonary capillaries → circulate to bone marrow, brain, liver, kidneys. Gold standard for confirming drowning. If post-mortem submersion: diatoms only in lungs. Match diatom species with water source.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_asp_010",
                topic: "asphyxial-deaths",
                year: "FMGE Jun 2020",
                q: "Burking (combination of smothering and traumatic asphyxia) was practiced by:",
                img: null,
                options: ["A. Burke and Hare (Edinburgh body snatchers — kneeling on chest + smothering face)", "B. A Victorian murderer in London", "C. Jack the Ripper", "D. A famous Italian poisoner"],
                answer: 0,
                explanation: "Burking: method used by Burke and Hare (Edinburgh, 1828) to kill victims for sale to anatomy schools. Technique: kneel on chest (traumatic asphyxia) + smother face. Leaves few external marks. Forensic features: visceral congestion and cyanosis but no ligature marks or petechiae. Historical significance in forensic medicine.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_wnd_006",
                topic: "wounds-forensic",
                year: "FMGE Jun 2022",
                q: "Entry wound vs exit wound in gunshot: which statement is correct?",
                img: null,
                options: ["A. Exit wound is smaller and punched-out; entry is larger and ragged", "B. Entry wound is smaller with inverted edges and abrasion collar; exit wound is larger with everted ragged edges (no abrasion collar)", "C. Both are identical in appearance", "D. Entry wound is always circular"],
                answer: 1,
                explanation: "Gunshot wounds: Entry = smaller, punched-out, inverted edges, abrasion collar (Fisch collar), may have blackening/tattooing (depending on range). Exit = larger, stellate/irregular, everted ragged edges, NO abrasion collar, no blackening. Close range entry: larger wound with laceration from gas blast.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_wnd_007",
                topic: "wounds-forensic",
                year: "FMGE Dec 2021",
                q: "A contused (lacerated) wound differs from an incised wound in that:",
                img: null,
                options: ["A. Incised wound is caused by blunt force; contused wound by sharp force", "B. Contused (lacerated) wound has irregular, abraded, bruised edges with tissue bridging; incised wound has clean, straight edges with sharp undermined margins", "C. Both have similar medico-legal significance", "D. Contused wound bleeds more than incised wound"],
                answer: 1,
                explanation: "Contused/lacerated wound: blunt force injury, irregular edges, abraded and bruised margins, tissue bridging (veins, nerves, hair) across the wound. Incised wound: sharp force (knife), clean edges, no tissue bridging, bleeds more (cut blood vessels). Stab wound: depth > length. Chop wound: heavy sharp weapon.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_wnd_008",
                topic: "wounds-forensic",
                year: "FMGE Jun 2021",
                q: "Hesitation cuts (tentative cuts) are characteristic of:",
                img: null,
                options: ["A. Homicidal cut throat wounds", "B. Suicidal cut throat wounds and self-inflicted wounds", "C. Accidental knife injuries", "D. Defence wounds"],
                answer: 1,
                explanation: "Hesitation cuts (tentative incisions): multiple shallow, parallel superficial cuts near the main wound — classic feature of self-inflicted (suicidal) wounds. Suggest the person practiced before making the final wound. Suicidal cut throat also features: wound on the left side (right-handed), tentative cuts, below the thyroid cartilage, protected areas (clothing).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_wnd_009",
                topic: "wounds-forensic",
                year: "FMGE Dec 2020",
                q: "Defence wounds are typically found on:",
                img: null,
                options: ["A. Back of the trunk", "B. Forearms (extensor surface), hands, and inner arms — from warding off blows", "C. Lower limbs only", "D. Face and scalp"],
                answer: 1,
                explanation: "Defence wounds: injuries sustained while defending against an attack. Typically on: extensor surface of forearms (warding off blows), dorsum of hands, inner forearms, ulnar border. Sharp force defence wounds: superficial incised wounds on palms/fingers (gripping blade). Homicidal assault indicator.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_wnd_010",
                topic: "wounds-forensic",
                year: "FMGE Jun 2020",
                q: "Patterned contusion (bruise reproducing the shape of the weapon) is most useful to:",
                img: null,
                options: ["A. Determine time of death", "B. Identify the weapon used", "C. Diagnose the cause of death", "D. Determine the perpetrator's identity"],
                answer: 1,
                explanation: "Patterned bruise/contusion: the shape of the bruise reflects the weapon (e.g., rod leaves parallel linear bruises, belt buckle leaves buckle pattern, tyre tread pattern from run-over). Medico-legal significance: identifies the weapon, supports assault hypothesis, can match to a specific weapon. Photographed before autopsy.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_id_006",
                topic: "forensic-identification",
                year: "FMGE Jun 2022",
                q: "The most reliable method for age estimation in adults (25–35 years) is:",
                img: null,
                options: ["A. External examination of skin", "B. Gustafson's method (dental changes: attrition, secondary dentine, cementum apposition, root resorption, root transparency, periodontal recession)", "C. X-ray of wrist (bone age)", "D. Height and weight measurement"],
                answer: 1,
                explanation: "Gustafson's method: 6 dental parameters each scored 0–3 (attrition, secondary dentine, periodontal recession, cementum apposition, root resorption, root transparency) → total score correlated with age. Best for adults when X-ray unreliable. Other methods: ossification centres (up to 25), union of epiphyses (up to 22), skull suture closure (Broca's method, 25–35 years).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_id_007",
                topic: "forensic-identification",
                year: "FMGE Dec 2021",
                q: "Sex determination from skeletal remains — the most reliable bone is:",
                img: null,
                options: ["A. Skull only", "B. Pelvis (most reliable, then skull)", "C. Femur length", "D. Sternum"],
                answer: 1,
                explanation: "Skeletal sex determination reliability: Pelvis > Skull > Long bones > Sternum. Pelvis: female = wider, greater sciatic notch (>90°), sub-pubic angle (>90°, arched), pubic length > ischial, oval pelvic inlet. Male: narrow, sciatic notch <90°, sub-pubic angle <90° (triangular/arch). Femur: bicondylar angle, head diameter. Skull: larger, more rugged in males.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_id_008",
                topic: "forensic-identification",
                year: "FMGE Jun 2021",
                q: "DNA fingerprinting uses which technique as its gold standard?",
                img: null,
                options: ["A. Blood grouping (ABO system)", "B. STR (short tandem repeat) analysis / RFLP", "C. Fingerprint comparison only", "D. Serology (immunodiffusion)"],
                answer: 1,
                explanation: "DNA fingerprinting (profiling): STR analysis (short tandem repeats at multiple loci) — gold standard. Introduced by Alec Jeffreys (RFLP, 1984). Applications: identity, paternity, criminal investigation, missing persons, mass disasters. Buccal swabs most common DNA source. Mitochondrial DNA: from hair, teeth (matrilineal transmission).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_id_009",
                topic: "forensic-identification",
                year: "FMGE Dec 2020",
                q: "Superimposition technique in forensic identification is used for:",
                img: null,
                options: ["A. Wound pattern identification", "B. Matching skulls with photographs of missing persons", "C. Fingerprint analysis", "D. Blood group determination"],
                answer: 1,
                explanation: "Skull superimposition: photographic technique where skull photo is overlaid on ante-mortem photograph (video/computer-aided). Checks if facial landmarks match — used in identification of skeletal remains. Computer-based face-skull superimposition is the modern method. Used in famous cases (Ruxton murder, 1935).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_id_010",
                topic: "forensic-identification",
                year: "FMGE Jun 2020",
                q: "Stature estimation from long bone length — which bone is most accurate?",
                img: null,
                options: ["A. Fibula", "B. Femur (most accurate for stature estimation from a single bone)", "C. Radius", "D. Clavicle"],
                answer: 1,
                explanation: "Stature estimation: regression formulae from long bone measurements. Accuracy order: Femur > Tibia > Humerus > Radius > Ulna > Fibula. Trotter-Gleser formulae (1958): most used. Race-specific formulae give better accuracy. For Indians: K.R. Sampath Kumar's tables used. Femur length × 3.63 + 80.14 cm (for males) approximately.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_poi_006",
                topic: "forensic-poisons",
                year: "FMGE Jun 2022",
                q: "Arsenic poisoning — the classic chronic sign is:",
                img: null,
                options: ["A. Mees' lines only on toenails", "B. Mees' lines (transverse white lines on nails), Aldrich-Mees lines, rain-drop pigmentation of skin, peripheral neuropathy, Keratosis palmaris et plantaris", "C. Blue gums (lead poisoning)", "D. Cherry red skin (CO poisoning)"],
                answer: 1,
                explanation: "Chronic arsenic poisoning: rain-drop pigmentation (areas of hyperpigmentation + hypopigmentation), keratosis of palms/soles, Mees' lines (white transverse lines across nails — 1 line = 1 episode), alopecia, peripheral neuropathy, Mee's stria on nails. Acute: garlic odour, GI symptoms, dehydration. Antidote: DMSA or penicillamine.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_poi_007",
                topic: "forensic-poisons",
                year: "FMGE Dec 2021",
                q: "Organophosphate poisoning causes cholinergic toxidrome. The antidote is:",
                img: null,
                options: ["A. Naloxone (opioid antagonist)", "B. Atropine (muscarinic blocker) + pralidoxime (2-PAM, reactivates AChE)", "C. N-acetylcysteine", "D. Glucagon"],
                answer: 1,
                explanation: "Organophosphate (OP) poisoning: irreversibly inhibits acetylcholinesterase → ACh accumulation → SLUDGE (Salivation, Lacrimation, Urination, Defecation, GI cramps, Emesis) + miosis, bradycardia, bronchospasm + nicotinic effects (muscle fasciculations, weakness). Antidote: Atropine (anti-muscarinic, given until secretions dry) + Pralidoxime (reactivates AChE before 'ageing').",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_poi_008",
                topic: "forensic-poisons",
                year: "FMGE Jun 2021",
                q: "Paracetamol (acetaminophen) overdose causes liver failure by:",
                img: null,
                options: ["A. Direct hepatocyte membrane disruption", "B. NAPQI (N-acetyl-p-benzoquinone imine) accumulation when glutathione depleted → hepatocellular necrosis (centrilobular)", "C. Cholestatic jaundice mechanism", "D. Oxidative stress on bile ducts"],
                answer: 1,
                explanation: "Paracetamol hepatotoxicity: CYP2E1/CYP3A4 metabolises PCM → NAPQI (toxic) → normally conjugated by glutathione. Overdose depletes GSH → NAPQI binds hepatocyte proteins → centrilobular necrosis. Antidote: N-acetylcysteine (replenishes glutathione). Most effective if given within 8 hours. Nomogram (Rumack-Matthew) guides treatment.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_poi_009",
                topic: "forensic-poisons",
                year: "FMGE Dec 2020",
                q: "Cyanide poisoning is treated with:",
                img: null,
                options: ["A. N-acetylcysteine", "B. Hydroxocobalamin (first line) or sodium thiosulphate + amyl/sodium nitrite", "C. Atropine", "D. Deferoxamine"],
                answer: 1,
                explanation: "Cyanide antidote: (1) Hydroxocobalamin (first line, 5g IV) — binds CN → cyanocobalamin (excreted). (2) Sodium nitrite → converts Hb to metHb → metHb competes with cytochrome oxidase for CN. (3) Sodium thiosulphate → converts CN → thiocyanate (less toxic, renally excreted). Characteristic: bitter almond/marzipan smell, venous PO2 elevated.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_poi_010",
                topic: "forensic-poisons",
                year: "FMGE Jun 2020",
                q: "Datura (Dhatura/Thorn apple) poisoning produces which toxidrome?",
                img: null,
                options: ["A. Cholinergic (SLUDGE): salivation, miosis, bradycardia", "B. Anticholinergic (atropine-like): dry mouth, tachycardia, mydriasis, flushing, confusion, hyperthermia, urinary retention", "C. Opioid: pinpoint pupils, respiratory depression, coma", "D. Sympathomimetic: tachycardia, hypertension, sweating, mydriasis"],
                answer: 1,
                explanation: "Datura stramonium (thorn apple): contains atropine, scopolamine, hyoscine. Anticholinergic toxidrome: 'Mad as a hatter, blind as a bat, dry as a bone, red as a beet, hot as Hades' (mydriasis, visual blurring, dry mouth, flushing, hyperthermia, tachycardia, urinary retention, delirium). Antidote: physostigmine (crosses BBB).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_ipc_006",
                topic: "ipc-sections",
                year: "FMGE Jun 2022",
                q: "Under Indian law, IPC Section 304A deals with:",
                img: null,
                options: ["A. Culpable homicide not amounting to murder", "B. Causing death by negligence (includes medical negligence causing patient death)", "C. Murder (Section 302)", "D. Attempt to murder"],
                answer: 1,
                explanation: "IPC Section 304A: causing death by a rash or negligent act not amounting to culpable homicide. Applicable in cases of medical negligence resulting in death (e.g., wrong drug, improper procedure). Punishment: imprisonment up to 2 years and/or fine. Not applicable if there is criminal intent (then IPC 304 or 302 applies).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_ipc_007",
                topic: "ipc-sections",
                year: "FMGE Dec 2021",
                q: "IPC Section 376 deals with:",
                img: null,
                options: ["A. Assault", "B. Rape", "C. Kidnapping", "D. Grievous hurt"],
                answer: 1,
                explanation: "IPC Section 376: Punishment for rape. Section 375: defines rape. Section 376A: causing death or persistent vegetative state during rape (life imprisonment or death). Section 376D: gang rape. POCSO Act 2012: protection of children from sexual offences. Medical examination of rape victims guided by protocol.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_ipc_008",
                topic: "ipc-sections",
                year: "FMGE Jun 2021",
                q: "IPC Section 89 provides a doctor immunity when:",
                img: null,
                options: ["A. Performing any procedure without consent", "B. Act done in good faith for the benefit of a person of unsound mind or under 12 years, with guardian consent", "C. Performing emergency procedures on adults", "D. Certifying death"],
                answer: 1,
                explanation: "IPC Section 89: provides immunity for acts done in good faith for the benefit of a child under 12 years or person of unsound mind, with guardian/law's consent. Related sections: Section 88 (consent by patient — no death/grievous hurt intention), Section 92 (emergency without consent — life-saving). Good Samaritan protection for emergency care.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_ipc_009",
                topic: "ipc-sections",
                year: "FMGE Dec 2020",
                q: "IPC Section 312 relates to:",
                img: null,
                options: ["A. Dowry death", "B. Voluntarily causing miscarriage (abortion)", "C. Infanticide", "D. Unnatural offences"],
                answer: 1,
                explanation: "IPC Section 312: voluntarily causing miscarriage (abortion). Illegal unless performed by registered medical practitioner under MTP Act provisions. Section 313: causing miscarriage without woman's consent. MTP Act 1971 (amended 2021): abortion legal up to 20 weeks (or 24 weeks for special categories) by registered medical practitioner.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_ipc_010",
                topic: "ipc-sections",
                year: "FMGE Jun 2020",
                q: "Under the MCI (now NMC) code of ethics, a doctor is obligated to inform the police (without patient consent) when:",
                img: null,
                options: ["A. Patient has HIV", "B. Patient presents with a firearm or suspected poisoning injury (medicolegal case — MLC)", "C. Patient refuses surgery", "D. Patient is pregnant"],
                answer: 1,
                explanation: "Medicolegal cases (MLC) mandatory reporting to police: gunshot/firearm wounds, injuries from violence (assault, attempted murder), suspected rape, acid attacks, road traffic accidents, suspected poisoning, suspicious/unnatural deaths. Section 39 CrPC: citizen's duty to report certain offences. Confidentiality is waived in such cases.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_so_006",
                topic: "sexual-offenses-forensic",
                year: "FMGE Jun 2022",
                q: "Hymen examination in rape victims: which type of hymen is most consistent with sexual intercourse?",
                img: null,
                options: ["A. Imperforate hymen", "B. Old healed tears (old lacerations) with smooth rounded edges at 3, 6, or 9 o'clock positions", "C. Cribriform hymen", "D. Redundant (fimbriated) hymen"],
                answer: 1,
                explanation: "Hymen examination: fresh lacerations (within 48–72 hours) = bleeding, tender, irregular edges. Healed tears: smooth/rounded edges, usually at 3, 6, 9 o'clock positions of posterior fourchette. Old, healed complete tears (down to hymeneal ring base) are consistent with penetration. Fimbriated/redundant hymen can be intact despite intercourse.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_so_007",
                topic: "sexual-offenses-forensic",
                year: "FMGE Dec 2021",
                q: "The time frame within which sperm can be found in the vagina after intercourse is approximately:",
                img: null,
                options: ["A. 6 hours", "B. Up to 72 hours (motile sperm up to 24 hours, non-motile heads up to 72 hours)", "C. 24 hours only", "D. 1 week"],
                answer: 1,
                explanation: "Sperm persistence: motile sperm in vagina up to 24 hours (occasionally up to 48 hours). Non-motile spermatozoa heads: up to 72 hours. DNA evidence: much longer. In cervical canal: longer retention. Forensic swabs should be taken within 72 hours. Acid phosphatase (from semen): up to 12–24 hours.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_so_008",
                topic: "sexual-offenses-forensic",
                year: "FMGE Jun 2021",
                q: "Signs of sodomy (anal intercourse) in chronic cases include:",
                img: null,
                options: ["A. Complete absence of any findings", "B. Funnelling of anus, loss of anal tone, anal fissures, flattening of perianal folds, perianal pigmentation", "C. Only acute lacerations", "D. Bruising of buttocks only"],
                answer: 1,
                explanation: "Chronic sodomy signs: funnelling/keyhole deformity of anus, loss of anal sphincter tone, perineal pigmentation (from friction), flattened perianal folds, anal fissures, ecchymosis. Acute sodomy: lacerations at 6 and 12 o'clock, bruising, oedema. Note: many cases have no findings. Examination should be documented carefully.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_so_009",
                topic: "sexual-offenses-forensic",
                year: "FMGE Dec 2020",
                q: "Virginity is medico-legally assessed by examination of the hymen but it is important to note:",
                img: null,
                options: ["A. An intact hymen definitively proves virginity", "B. Absence of hymeneal tears does not confirm or deny virginity; some hymens are elastic/fimbriated and may not tear with intercourse", "C. A torn hymen always indicates rape", "D. The hymen grows back after healing"],
                answer: 1,
                explanation: "Medico-legal significance of hymen: CANNOT definitively prove/disprove virginity. Fimbriated, redundant, or elastic hymens may remain intact after intercourse. Tears can occur from non-sexual activities. Legal and medical consensus: 'no examination can confirm or deny a woman's sexual history.' Two-finger test is unconstitutional (SC ruling).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_so_010",
                topic: "sexual-offenses-forensic",
                year: "FMGE Jun 2020",
                q: "POCSO Act 2012 covers sexual offences against children defined as persons:",
                img: null,
                options: ["A. Below 16 years", "B. Below 18 years", "C. Below 21 years", "D. Below 14 years"],
                answer: 1,
                explanation: "POCSO (Protection of Children from Sexual Offences) Act 2012: covers all children below 18 years. Offences: penetrative sexual assault, sexual assault, sexual harassment, use of child for pornography. Mandatory reporting of offences. Special courts for POCSO cases. Higher penalties for aggravated offences (by public servant, relative, or repeat offenders).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_pm_006",
                topic: "postmortem-changes",
                year: "FMGE Jun 2022",
                q: "Rigor mortis (post-mortem rigidity) develops in which order?",
                img: null,
                options: ["A. Lower limbs first, then upper limbs, then face", "B. Small muscles of face and jaw first, then neck → upper limbs → trunk → lower limbs (Nysten's law)", "C. Upper limbs first, then lower limbs", "D. Simultaneously throughout the body"],
                answer: 1,
                explanation: "Nysten's law: rigor mortis progresses from head to feet (cephalocaudal). Appears: 1–2 hours, fully established 12 hours, passes off 24–48 hours (in tropical India). Exception: instantaneous rigor (cadaveric spasm) — occurs immediately at death (drowning, epilepsy, violent death). Rigor: depletion of ATP → permanent actin-myosin cross-bridges.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_pm_007",
                topic: "postmortem-changes",
                year: "FMGE Dec 2021",
                q: "Post-mortem lividity (hypostasis/livor mortis) becomes fixed (non-blanchable) after approximately:",
                img: null,
                options: ["A. 1–2 hours", "B. 6–8 hours (in tropical conditions), 8–12 hours (temperate)", "C. 24 hours always", "D. 48 hours"],
                answer: 1,
                explanation: "Livor mortis: blood settles in dependent vessels. Appears: 1–2 hours, fully developed 6–8 hours (India), fixed (non-blanching) 6–12 hours in India (12 hours in temperate). Fixed lividity = positional change does NOT shift the lividity. If body moved after lividity fixed: two sets of lividity (diagnostic of body having been moved).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_pm_008",
                topic: "postmortem-changes",
                year: "FMGE Jun 2021",
                q: "Adipocere formation is a late post-mortem change characterised by:",
                img: null,
                options: ["A. Drying and mummification of the body", "B. Saponification of body fat to form soap-like material (grave wax)", "C. Putrefaction with gas formation", "D. Blackening of skin and organs"],
                answer: 1,
                explanation: "Adipocere: hydrolysis + hydrogenation of body fats → hydroxystearic acid (soap-like whitish-grey waxy material). Conditions: warm, moist, anaerobic environment (wet graves, floatation in water). Time: 3 months minimum. Preserves body shape — medico-legally important (helps identify body and wounds). Antonym: mummification (hot, dry conditions).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_pm_009",
                topic: "postmortem-changes",
                year: "FMGE Dec 2020",
                q: "The earliest sign of putrefaction in a body kept at normal room temperature is:",
                img: null,
                options: ["A. Skin blistering and slippage", "B. Greenish discolouration over the right iliac fossa (caecum area)", "C. Bloating of the body", "D. Eyes sunken and dull"],
                answer: 1,
                explanation: "Putrefaction begins: 24–48 hours (summer/tropical) or 3–5 days (winter/cold). First sign = greenish discolouration over right iliac fossa (cecum contains most bacteria → H2S + methaemoglobin → green colour). Then: greenish abdomen → marbling (vascular network) → blistering → bloating → liquefaction.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_pm_010",
                topic: "postmortem-changes",
                year: "FMGE Jun 2020",
                q: "Vitreous humor (eye fluid) in a dead body is used for:",
                img: null,
                options: ["A. DNA analysis only", "B. Estimating time of death (potassium level rises predictably) and detecting alcohol/drugs", "C. Blood group determination", "D. Carbon monoxide detection"],
                answer: 1,
                explanation: "Vitreous humor advantages: protected from putrefaction, blood contamination, and resuscitation artefacts. Uses: (1) Vitreous potassium (rises ~0.17 mEq/L/hr post-mortem) → time of death estimate; (2) Alcohol (BAC estimate); (3) Glucose (diabetic coma — NOT blood sugar); (4) Drug detection; (5) Electrolytes. Most reliable PM fluid for chemical analysis.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_alc_006",
                topic: "alcohol-forensic",
                year: "FMGE Jun 2022",
                q: "The legal blood alcohol concentration (BAC) limit for driving in India is:",
                img: null,
                options: ["A. 60 mg/100 mL blood", "B. 30 mg/100 mL blood (Motor Vehicles Act 1988, Section 185)", "C. 80 mg/100 mL blood", "D. 100 mg/100 mL blood"],
                answer: 1,
                explanation: "Indian Motor Vehicles Act: legal BAC limit = 30 mg/100 mL blood (0.03 g/dL) OR 150 μg/100 mL breath. Driving above this = drunk driving offence. UK/US limit: 80 mg/100 mL. Scotland: 50 mg/100 mL. India has the strictest limit among major countries. Breathalyser tests used for screening.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_alc_007",
                topic: "alcohol-forensic",
                year: "FMGE Dec 2021",
                q: "Blood alcohol level (BAC) compatible with stupor/coma in a non-tolerant individual is:",
                img: null,
                options: ["A. 50–100 mg/100 mL (mild intoxication)", "B. 250–400 mg/100 mL (stupor/coma)", "C. 100–150 mg/100 mL (euphoria)", "D. >500 mg/100 mL (always fatal)"],
                answer: 1,
                explanation: "BAC effects (non-tolerant): 50 mg% = euphoria; 100 mg% = loss of coordination; 150–200 mg% = slurred speech, ataxia; 200–300 mg% = confusion/stupor; 300–400 mg% = anaesthesia/coma; >400–500 mg% = death (respiratory centre depression). Tolerant individuals (alcoholics) may function at levels that would cause coma in naive subjects.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_alc_008",
                topic: "alcohol-forensic",
                year: "FMGE Jun 2021",
                q: "Methanol (methyl alcohol) poisoning is treated with:",
                img: null,
                options: ["A. Naloxone", "B. Ethanol (competitive substrate for alcohol dehydrogenase) or fomepizole, plus folinic acid", "C. N-acetylcysteine", "D. Atropine"],
                answer: 1,
                explanation: "Methanol poisoning: alcohol dehydrogenase converts methanol → formaldehyde → formic acid → retinal toxicity (blindness), metabolic acidosis, death. Treatment: (1) Ethanol IV/oral (competitive inhibitor of ADH) or fomepizole (4-MP, ADH inhibitor, preferred); (2) Folinic acid (leucovorin, promotes formate metabolism); (3) Haemodialysis; (4) Correct acidosis with bicarbonate.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_alc_009",
                topic: "alcohol-forensic",
                year: "FMGE Dec 2020",
                q: "Breath alcohol testing (breathalyser) is based on which principle?",
                img: null,
                options: ["A. Colorimetric reaction of alcohol with potassium dichromate or electrochemical oxidation", "B. Gas-liquid chromatography only", "C. NMR spectroscopy", "D. Mass spectrometry only"],
                answer: 0,
                explanation: "Breathalyser principle: (1) Traditional: ethanol oxidises potassium dichromate (orange → green colour change, proportional to alcohol) — Drunkometer. (2) Modern fuel-cell breathalysers: electrochemical oxidation of ethanol → electrical current. Blood:breath alcohol ratio = 2100:1. Confirmatory test: GC-MS of blood/urine.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_alc_010",
                topic: "alcohol-forensic",
                year: "FMGE Jun 2020",
                q: "Denatured alcohol (methylated spirit) contains which dangerous additive?",
                img: null,
                options: ["A. Ethyl acetate", "B. Methanol (5–10%), pyridine, and often methylene blue dye (to discourage drinking)", "C. Benzene only", "D. Acetone"],
                answer: 1,
                explanation: "Denatured spirit: ethanol + denaturing agents to prevent consumption. Common denaturing agents: methanol (toxic → blindness), pyridine (emetic), methyl isobutyl ketone. In India: country liquor often adulterated with methanol → mass poisoning outbreaks. Purple colour added (methylene blue or crystal violet).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_bdr_006",
                topic: "birth-death-registration",
                year: "FMGE Jun 2022",
                q: "Under the Registration of Births and Deaths (RBD) Act, 1969, birth registration must be done within:",
                img: null,
                options: ["A. 7 days", "B. 21 days of birth", "C. 30 days", "D. 90 days"],
                answer: 1,
                explanation: "RBD Act, 1969 (India): birth and death must be registered within 21 days. Registrar = Registrar of Births and Deaths at local body level. Hospital births: reported by medical officer in charge. Home births: reported by head of household. Birth certificate: legal document for age proof, school admission, passport.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_bdr_007",
                topic: "birth-death-registration",
                year: "FMGE Dec 2021",
                q: "Still birth (foetal death) in India is legally defined as delivery of a foetus after:",
                img: null,
                options: ["A. 20 weeks of gestation showing no signs of life", "B. 28 weeks of gestation showing no signs of life at birth", "C. Any gestation, regardless of signs of life", "D. 24 weeks only"],
                answer: 1,
                explanation: "India (RBD Act): stillbirth = foetus born dead after 28 weeks (different from WHO: 22 weeks or ≥500g). Must be reported as stillbirth. No birth registration but death registration required. Distinction: maceration = ante-mortem death (skin peeling, soft skull); fresh stillbirth = intrapartum death.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_bdr_008",
                topic: "birth-death-registration",
                year: "FMGE Jun 2021",
                q: "Death certificate is legally issued by:",
                img: null,
                options: ["A. Any government employee", "B. The registered medical practitioner who attended the deceased", "C. Police officer", "D. Hospital administrator"],
                answer: 1,
                explanation: "Death certificate (Form 4B, RBD Act): issued by registered medical practitioner (RMP) who attended the deceased and can certify cause of death. In suspicious/unnatural death: postmortem required before death certificate. If doctor not available: reported to registrar. MCCD (Medical Certificate of Cause of Death) uses ICD-10 format.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_bdr_009",
                topic: "birth-death-registration",
                year: "FMGE Dec 2020",
                q: "Inquest is a legal inquiry into the cause of death. In India, inquest is performed by a Magistrate under:",
                img: null,
                options: ["A. IPC Section 302", "B. CrPC Section 176 (Magistrate's inquest) for unnatural/suspicious deaths", "C. RBD Act Section 12", "D. IPC Section 304"],
                answer: 1,
                explanation: "Inquest types in India: (1) Police inquest (CrPC Section 174): performed by police officer for all unnatural deaths — limited, no medical examination. (2) Magistrate's inquest (CrPC Section 176): for dowry deaths, custodial deaths, rape-related deaths, public servant involved — includes medical examination (mandatory PM). More thorough than police inquest.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_bdr_010",
                topic: "birth-death-registration",
                year: "FMGE Jun 2020",
                q: "The Medical Certificate of Cause of Death (MCCD) format specifies:",
                img: null,
                options: ["A. Only the immediate cause of death", "B. Immediate cause (Part I) → underlying cause (antecedent causes) and contributing conditions (Part II) in WHO ICD format", "C. Only the manner of death (natural/homicide)", "D. Only age and sex of the deceased"],
                answer: 1,
                explanation: "MCCD (WHO format, ICD-10): Part I (a) Immediate cause → (b) Antecedent cause → (c) Underlying cause; Part II: Significant contributing conditions. The UNDERLYING cause (lowest line in Part I) is used for vital statistics/mortality data. Difference from manner of death (natural/accident/homicide/suicide/undetermined).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_med_006",
                topic: "medical-negligence",
                year: "FMGE Jun 2022",
                q: "The Bolam test for medical negligence states that a doctor is not negligent if:",
                img: null,
                options: ["A. He follows any medical textbook", "B. He acts in accordance with a practice accepted as proper by a responsible body of medical men skilled in that particular art", "C. He obtains informed consent", "D. He documents everything in the medical record"],
                answer: 1,
                explanation: "Bolam test (Bolam v Friern HMC, 1957 UK): medical standard of care test. A doctor is not negligent if their practice is in line with a responsible body of medical opinion, even if other doctors might do differently. Indian equivalent: Jacob Mathew v State of Punjab (2005) SC ruling — applied Bolam test. Four Ds of negligence: Duty, Dereliction, Direct causation, Damage.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_med_007",
                topic: "medical-negligence",
                year: "FMGE Dec 2021",
                q: "Res ipsa loquitur ('the thing speaks for itself') in medical negligence means:",
                img: null,
                options: ["A. Patient must always prove negligence with expert testimony", "B. Negligence is self-evident from the facts (e.g., foreign body left in abdomen) — burden of proof shifts to defendant", "C. Doctor is automatically guilty", "D. Civil courts cannot hear medical negligence cases"],
                answer: 1,
                explanation: "Res ipsa loquitur: used when the negligent act is so obvious that expert testimony is not needed to establish negligence (e.g., wrong limb amputation, foreign body/swab left in operation field, wrong drug administration). Burden shifts to defendant to disprove negligence. Applied rarely and cautiously in medical cases.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_med_008",
                topic: "medical-negligence",
                year: "FMGE Jun 2021",
                q: "Vicarious liability of a hospital means:",
                img: null,
                options: ["A. Hospital is not responsible for doctor's actions", "B. Employer (hospital) is liable for negligent acts of employees (doctors, nurses, staff) committed during the course of employment", "C. Only the treating doctor is liable", "D. Liability shared with the patient"],
                answer: 1,
                explanation: "Vicarious liability: under the law of agency, an employer is responsible for the negligent acts of employees acting within the scope of employment. Hospitals can be held liable for resident doctors, nurses, technicians. Independent contractors (consultants) may reduce vicarious liability. Consumer Protection Act 1986: medical services covered under 'deficiency of service'.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_med_009",
                topic: "medical-negligence",
                year: "FMGE Dec 2020",
                q: "Informed consent for a surgical procedure requires the doctor to disclose:",
                img: null,
                options: ["A. Only the name of the procedure", "B. Nature of the procedure, risks (material risks), benefits, alternatives, and consequences of refusal", "C. Only the risks that the doctor considers important", "D. Nothing if patient is worried"],
                answer: 1,
                explanation: "Informed consent components: (1) Nature and purpose of procedure; (2) Material risks (risks a reasonable patient would consider significant, or doctor knows this patient would consider significant — Montgomery test, UK 2015); (3) Benefits; (4) Alternatives (including no treatment); (5) Consequences of non-treatment. Must be voluntary, patient must have decision-making capacity.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "for_med_010",
                topic: "medical-negligence",
                year: "FMGE Jun 2020",
                q: "Under Consumer Protection Act (COPRA), a medical negligence complaint can be filed in a Consumer Forum within:",
                img: null,
                options: ["A. 6 months", "B. 2 years from the date of cause of action (with provision for condonation of delay)", "C. 1 year only", "D. No time limit"],
                answer: 1,
                explanation: "Consumer Protection Act 1986 (updated 2019): limitation period = 2 years from date of cause of action. Consumer Forum hierarchy: District Commission (up to ₹1 crore) → State Commission (₹1–10 crore) → National Commission (>₹10 crore) → Supreme Court. Medical services = service under COPRA. Free/charity services: not covered (no consideration).",
                tags: ["PYQ", "high-yield"]
        },

];

export default forensic;
