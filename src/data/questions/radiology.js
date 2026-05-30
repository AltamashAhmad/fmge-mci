const radiology = [

	// ============ BATCH 1: CXR PATTERNS ============
	{
		id: "rad_cxr_001",
		topic: "cxr-patterns",
		year: "FMGE Dec 2019",
		q: "Classic chest X-ray finding in left heart failure is:",
		img: null,
		options: ["A. Bat-wing perihilar opacities", "B. Apical cavitation", "C. Free subdiaphragmatic air", "D. Pleural plaque calcification"],
		answer: 0,
		explanation: "Cardiogenic pulmonary edema classically shows bilateral perihilar 'bat-wing' opacities.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "rad_cxr_002",
		topic: "cxr-patterns",
		year: "FMGE Jun 2018",
		q: "Silhouette sign on CXR helps localize disease by:",
		img: null,
		options: ["A. Measuring heart size", "B. Loss of normal border with adjacent lobe", "C. Detecting pleural fluid only", "D. Identifying bone lesions"],
		answer: 1,
		explanation: "Obscuration of a normal mediastinal/cardiac border indicates adjacent lobe pathology.",
		tags: ["PYQ"]
	},
	{
		id: "rad_cxr_003",
		topic: "cxr-patterns",
		year: "FMGE Dec 2018",
		q: "Most reliable X-ray sign of pneumothorax is:",
		img: null,
		options: ["A. Air bronchogram", "B. Visible pleural line with absent peripheral lung markings", "C. Kerley B lines", "D. Tracheal calcification"],
		answer: 1,
		explanation: "A visceral pleural edge with no vascular markings beyond it indicates pneumothorax.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "rad_cxr_004",
		topic: "cxr-patterns",
		year: "FMGE Jun 2019",
		q: "Miliary mottling on chest X-ray is classically seen in:",
		img: null,
		options: ["A. COPD", "B. Miliary tuberculosis", "C. Lobar pneumonia", "D. Pulmonary embolism"],
		answer: 1,
		explanation: "Numerous tiny uniform nodules throughout both lungs suggest miliary TB.",
		tags: ["PYQ"]
	},
	{
		id: "rad_cxr_005",
		topic: "cxr-patterns",
		year: "FMGE Dec 2020",
		q: "Best PA chest X-ray indicator of cardiomegaly is cardiothoracic ratio:",
		img: null,
		options: ["A. >0.4", "B. >0.5", "C. >0.6 only in children", "D. >0.3"],
		answer: 1,
		explanation: "In adults on PA film, cardiothoracic ratio >50% suggests cardiomegaly.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 1: ABDOMINAL XRAY ============
	{
		id: "rad_axr_001",
		topic: "abdominal-xray",
		year: "FMGE Dec 2019",
		q: "Multiple air-fluid levels with central dilated loops suggest:",
		img: null,
		options: ["A. Paralytic ileus only", "B. Small bowel obstruction", "C. Large pleural effusion", "D. Renal stone"],
		answer: 1,
		explanation: "Central dilated loops with step-ladder air-fluid levels are typical of SBO.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "rad_axr_002",
		topic: "abdominal-xray",
		year: "FMGE Jun 2018",
		q: "Free gas under diaphragm on erect X-ray indicates:",
		img: null,
		options: ["A. Volvulus", "B. Hollow viscus perforation", "C. Ascites", "D. Intussusception"],
		answer: 1,
		explanation: "Pneumoperitoneum under diaphragm is a classic perforation sign.",
		tags: ["PYQ"]
	},
	{
		id: "rad_axr_003",
		topic: "abdominal-xray",
		year: "FMGE Dec 2018",
		q: "Coffee-bean sign on abdominal X-ray is classically seen in:",
		img: null,
		options: ["A. Sigmoid volvulus", "B. Appendicitis", "C. Pancreatitis", "D. Gallstones"],
		answer: 0,
		explanation: "A massively dilated sigmoid loop with coffee-bean shape suggests sigmoid volvulus.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "rad_axr_004",
		topic: "abdominal-xray",
		year: "FMGE Jun 2019",
		q: "Rigler sign refers to:",
		img: null,
		options: ["A. Double wall of bowel visible due to free intraperitoneal gas", "B. Crescent sign in TB", "C. Meniscus sign in pleura", "D. Toe-nail sign in melanoma"],
		answer: 0,
		explanation: "Visualization of both sides of bowel wall indicates pneumoperitoneum.",
		tags: ["PYQ"]
	},
	{
		id: "rad_axr_005",
		topic: "abdominal-xray",
		year: "FMGE Dec 2020",
		q: "Most radiopaque urinary calculus on plain X-ray usually is:",
		img: null,
		options: ["A. Uric acid stone", "B. Cystine stone", "C. Calcium oxalate stone", "D. Xanthine stone"],
		answer: 2,
		explanation: "Calcium-containing stones are typically radiopaque on plain radiographs.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 1: CT BRAIN ============
	{
		id: "rad_ctb_001",
		topic: "ct-brain",
		year: "FMGE Dec 2019",
		q: "First-line imaging in suspected acute intracranial bleed is:",
		img: null,
		options: ["A. MRI with contrast", "B. Non-contrast CT head", "C. PET scan", "D. Skull X-ray"],
		answer: 1,
		explanation: "NCCT is rapid and highly sensitive for acute blood in emergency settings.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "rad_ctb_002",
		topic: "ct-brain",
		year: "FMGE Jun 2018",
		q: "Acute extradural hematoma on CT is classically:",
		img: null,
		options: ["A. Crescent-shaped hypodense", "B. Biconvex hyperdense", "C. Ring-enhancing lesion", "D. Midline calcification"],
		answer: 1,
		explanation: "EDH appears as lens-shaped (biconvex) hyperdense extra-axial collection.",
		tags: ["PYQ"]
	},
	{
		id: "rad_ctb_003",
		topic: "ct-brain",
		year: "FMGE Dec 2018",
		q: "Acute subdural hematoma appears as:",
		img: null,
		options: ["A. Biconvex lesion", "B. Crescent-shaped extra-axial hyperdensity", "C. Butterfly glioma", "D. Empty sella"],
		answer: 1,
		explanation: "SDH spreads along convexity and has a crescentic contour.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "rad_ctb_004",
		topic: "ct-brain",
		year: "FMGE Jun 2019",
		q: "Hyperdense MCA sign in acute stroke indicates:",
		img: null,
		options: ["A. Venous infarct", "B. Arterial thrombus in MCA", "C. Brain abscess", "D. Demyelination"],
		answer: 1,
		explanation: "A dense MCA represents acute thromboembolic occlusion.",
		tags: ["PYQ"]
	},
	{
		id: "rad_ctb_005",
		topic: "ct-brain",
		year: "FMGE Dec 2020",
		q: "Most common location of hypertensive intracerebral hemorrhage is:",
		img: null,
		options: ["A. Putamen/basal ganglia", "B. Cerebellar vermis only", "C. Corpus callosum", "D. Occipital cortex"],
		answer: 0,
		explanation: "Chronic hypertension commonly causes deep hemorrhage in basal ganglia.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 1: CT ABDOMEN ============
	{
		id: "rad_cta_001",
		topic: "ct-abdomen",
		year: "FMGE Dec 2019",
		q: "Imaging modality of choice in stable blunt abdominal trauma is:",
		img: null,
		options: ["A. Plain X-ray only", "B. Contrast-enhanced CT abdomen", "C. IVU", "D. Barium meal"],
		answer: 1,
		explanation: "CECT abdomen is preferred for evaluating solid organ injury in stable trauma.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "rad_cta_002",
		topic: "ct-abdomen",
		year: "FMGE Jun 2018",
		q: "Whirl sign on abdominal CT suggests:",
		img: null,
		options: ["A. Intussusception", "B. Volvulus with twisted mesentery", "C. Appendicolith", "D. Cirrhosis"],
		answer: 1,
		explanation: "Mesenteric vessel twisting giving whirl appearance indicates volvulus.",
		tags: ["PYQ"]
	},
	{
		id: "rad_cta_003",
		topic: "ct-abdomen",
		year: "FMGE Dec 2018",
		q: "Most sensitive CT finding in acute pancreatitis includes:",
		img: null,
		options: ["A. Splenic calcification", "B. Pancreatic enlargement with peripancreatic fat stranding", "C. Dilated CBD only", "D. Renal cortical scar"],
		answer: 1,
		explanation: "Inflamed pancreas with surrounding fat stranding is typical on CECT.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "rad_cta_004",
		topic: "ct-abdomen",
		year: "FMGE Jun 2019",
		q: "Target sign on CT abdomen is classically seen in:",
		img: null,
		options: ["A. Intussusception", "B. Cholelithiasis", "C. AAA rupture", "D. Nephrocalcinosis"],
		answer: 0,
		explanation: "Concentric bowel-within-bowel appearance indicates intussusception.",
		tags: ["PYQ"]
	},
	{
		id: "rad_cta_005",
		topic: "ct-abdomen",
		year: "FMGE Dec 2020",
		q: "Preferred CT phase for detection of hepatocellular carcinoma hyperenhancement is:",
		img: null,
		options: ["A. Non-contrast phase", "B. Arterial phase", "C. Delayed excretory phase only", "D. Venography phase"],
		answer: 1,
		explanation: "HCC typically shows arterial phase hyperenhancement with washout later.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 1: MRI BRAIN ============
	{
		id: "rad_mri_001",
		topic: "mri-brain",
		year: "FMGE Dec 2019",
		q: "MRI sequence most sensitive for acute ischemic infarct is:",
		img: null,
		options: ["A. T1-weighted", "B. DWI", "C. GRE only", "D. STIR"],
		answer: 1,
		explanation: "Diffusion-weighted imaging detects cytotoxic edema very early in ischemia.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "rad_mri_002",
		topic: "mri-brain",
		year: "FMGE Jun 2018",
		q: "FLAIR MRI is particularly useful for detecting:",
		img: null,
		options: ["A. CSF flow only", "B. Periventricular demyelinating plaques", "C. Skull fractures", "D. Acute bone bleed"],
		answer: 1,
		explanation: "FLAIR suppresses CSF, making periventricular lesions (e.g., MS plaques) conspicuous.",
		tags: ["PYQ"]
	},
	{
		id: "rad_mri_003",
		topic: "mri-brain",
		year: "FMGE Dec 2018",
		q: "Blooming artifacts due to hemosiderin are best seen on:",
		img: null,
		options: ["A. T2 GRE/SWI", "B. T1 post-contrast", "C. DWI only", "D. FLAIR only"],
		answer: 0,
		explanation: "GRE/SWI is highly sensitive to susceptibility from blood products.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "rad_mri_004",
		topic: "mri-brain",
		year: "FMGE Jun 2019",
		q: "Most typical MRI finding in vestibular schwannoma is lesion at:",
		img: null,
		options: ["A. Foramen magnum", "B. Cerebellopontine angle/internal auditory canal", "C. Sella turcica", "D. Pineal gland"],
		answer: 1,
		explanation: "Vestibular schwannoma commonly arises in IAC with CPA extension.",
		tags: ["PYQ"]
	},
	{
		id: "rad_mri_005",
		topic: "mri-brain",
		year: "FMGE Dec 2020",
		q: "Absolute contraindication to MRI is usually:",
		img: null,
		options: ["A. Titanium plate", "B. Non-MRI-compatible cardiac pacemaker", "C. Dental filling", "D. Hip prosthesis"],
		answer: 1,
		explanation: "Non-compatible pacemakers may malfunction/heating in MRI magnetic fields.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 2: ULTRASOUND OB ============
	{
		id: "rad_us_001",
		topic: "ultrasound-ob",
		year: "FMGE Dec 2019",
		q: "Most common first-line imaging in pregnancy is:",
		img: null,
		options: ["A. CT abdomen", "B. Ultrasound", "C. PET-CT", "D. Fluoroscopy"],
		answer: 1,
		explanation: "Ultrasound is safe, accessible, and radiation-free for obstetric evaluation.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "rad_us_002",
		topic: "ultrasound-ob",
		year: "FMGE Jun 2018",
		q: "Nuchal translucency scan is typically performed in:",
		img: null,
		options: ["A. 6-8 weeks", "B. 11-13+6 weeks", "C. 20-24 weeks", "D. 30-34 weeks"],
		answer: 1,
		explanation: "First-trimester NT screening is done around 11 to 13+6 weeks.",
		tags: ["PYQ"]
	},
	{
		id: "rad_us_003",
		topic: "ultrasound-ob",
		year: "FMGE Dec 2018",
		q: "Most accurate early sonographic parameter for gestational age is:",
		img: null,
		options: ["A. Biparietal diameter", "B. Crown-rump length", "C. Femur length", "D. Abdominal circumference"],
		answer: 1,
		explanation: "CRL is best for dating in first trimester.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "rad_us_004",
		topic: "ultrasound-ob",
		year: "FMGE Jun 2019",
		q: "Ultrasound finding suggestive of ectopic pregnancy is:",
		img: null,
		options: ["A. Intrauterine gestational sac with yolk sac", "B. Adnexal gestational sac with empty uterus", "C. Placenta previa", "D. Polyhydramnios"],
		answer: 1,
		explanation: "Adnexal sac with no intrauterine pregnancy is a key ectopic clue.",
		tags: ["PYQ"]
	},
	{
		id: "rad_us_005",
		topic: "ultrasound-ob",
		year: "FMGE Dec 2020",
		q: "Doppler umbilical artery in fetal growth restriction is commonly:",
		img: null,
		options: ["A. Low resistance with high diastolic flow", "B. Increased resistance with reduced/reversed diastolic flow", "C. Unchanged always", "D. Not useful in obstetrics"],
		answer: 1,
		explanation: "Placental insufficiency increases umbilical artery resistance.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 2: CONTRAST AGENTS ============
	{
		id: "rad_con_001",
		topic: "contrast-agents",
		year: "FMGE Dec 2019",
		q: "Barium sulfate is contraindicated in suspected:",
		img: null,
		options: ["A. Peptic ulcer", "B. Bowel perforation", "C. GERD", "D. Hiatus hernia"],
		answer: 1,
		explanation: "Extravasated barium in perforation can cause severe peritonitis.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "rad_con_002",
		topic: "contrast-agents",
		year: "FMGE Jun 2018",
		q: "Preferred contrast in suspected GI perforation is:",
		img: null,
		options: ["A. Barium sulfate", "B. Water-soluble iodinated contrast", "C. Gadolinium", "D. Air only"],
		answer: 1,
		explanation: "Water-soluble contrast is safer when perforation is possible.",
		tags: ["PYQ"]
	},
	{
		id: "rad_con_003",
		topic: "contrast-agents",
		year: "FMGE Dec 2018",
		q: "Major risk factor for contrast-induced nephropathy is:",
		img: null,
		options: ["A. Young age", "B. Pre-existing renal impairment", "C. Myopia", "D. Hyperuricemia alone"],
		answer: 1,
		explanation: "Baseline CKD is a key predictor for post-contrast kidney injury.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "rad_con_004",
		topic: "contrast-agents",
		year: "FMGE Jun 2019",
		q: "Gadolinium-based contrast is primarily used in:",
		img: null,
		options: ["A. Plain radiography", "B. MRI", "C. USG", "D. PET without tracer"],
		answer: 1,
		explanation: "Gadolinium chelates are MRI contrast agents.",
		tags: ["PYQ"]
	},
	{
		id: "rad_con_005",
		topic: "contrast-agents",
		year: "FMGE Dec 2020",
		q: "Premedication before iodinated contrast is most considered in patient with:",
		img: null,
		options: ["A. Prior contrast reaction", "B. Controlled hypertension", "C. Rhinitis history only", "D. Mild anemia"],
		answer: 0,
		explanation: "History of contrast allergy warrants prophylaxis/risk stratification.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 2: RADIOLOGICAL SIGNS ============
	{
		id: "rad_sign_001",
		topic: "radiological-signs",
		year: "FMGE Dec 2019",
		q: "Boot-shaped heart on CXR is seen in:",
		img: null,
		options: ["A. ASD", "B. Tetralogy of Fallot", "C. VSD", "D. PDA"],
		answer: 1,
		explanation: "TOF classically shows coeur-en-sabot (boot-shaped) cardiac silhouette.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "rad_sign_002",
		topic: "radiological-signs",
		year: "FMGE Jun 2018",
		q: "Double bubble sign on abdominal X-ray suggests:",
		img: null,
		options: ["A. Duodenal atresia", "B. Pyloric stenosis", "C. Hirschsprung disease", "D. Intussusception"],
		answer: 0,
		explanation: "Dilated stomach and proximal duodenum create classic double-bubble appearance.",
		tags: ["PYQ"]
	},
	{
		id: "rad_sign_003",
		topic: "radiological-signs",
		year: "FMGE Dec 2018",
		q: "Sunburst appearance in bone radiology is classically associated with:",
		img: null,
		options: ["A. Chondrosarcoma", "B. Osteosarcoma", "C. Ewing sarcoma", "D. Osteoid osteoma"],
		answer: 1,
		explanation: "Spiculated periosteal reaction giving sunburst pattern is typical in osteosarcoma.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "rad_sign_004",
		topic: "radiological-signs",
		year: "FMGE Jun 2019",
		q: "Ground-glass appearance in infant skull X-ray is seen in:",
		img: null,
		options: ["A. Rickets", "B. Thalassemia major", "C. Fibrous dysplasia", "D. Scurvy"],
		answer: 2,
		explanation: "Fibrous dysplasia often produces homogeneous ground-glass matrix.",
		tags: ["PYQ"]
	},
	{
		id: "rad_sign_005",
		topic: "radiological-signs",
		year: "FMGE Dec 2020",
		q: "Thumb sign on lateral neck X-ray suggests:",
		img: null,
		options: ["A. Croup", "B. Epiglottitis", "C. Retropharyngeal abscess", "D. Foreign body esophagus"],
		answer: 1,
		explanation: "Enlarged edematous epiglottis creates the thumb sign.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 2: BONE XRAYS ============
	{
		id: "rad_bx_001",
		topic: "bone-xrays",
		year: "FMGE Dec 2019",
		q: "Codman triangle periosteal reaction is commonly seen in:",
		img: null,
		options: ["A. Osteosarcoma", "B. Giant cell tumor", "C. Osteomalacia", "D. Osteopetrosis"],
		answer: 0,
		explanation: "Aggressive periosteal lifting with Codman triangle is classic for osteosarcoma.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "rad_bx_002",
		topic: "bone-xrays",
		year: "FMGE Jun 2018",
		q: "Onion-skin periosteal reaction is characteristic of:",
		img: null,
		options: ["A. Osteoid osteoma", "B. Ewing sarcoma", "C. Osteochondroma", "D. Metastasis"],
		answer: 1,
		explanation: "Layered periosteal reaction ('onion-skin') is associated with Ewing sarcoma.",
		tags: ["PYQ"]
	},
	{
		id: "rad_bx_003",
		topic: "bone-xrays",
		year: "FMGE Dec 2018",
		q: "Looser zones (pseudofractures) are seen in:",
		img: null,
		options: ["A. Osteomalacia", "B. Osteosarcoma", "C. Paget disease", "D. Septic arthritis"],
		answer: 0,
		explanation: "Insufficiency lines called Looser zones are classic in osteomalacia.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "rad_bx_004",
		topic: "bone-xrays",
		year: "FMGE Jun 2019",
		q: "Erlenmeyer flask deformity of long bones is seen in:",
		img: null,
		options: ["A. Osteopetrosis", "B. Septic osteomyelitis", "C. Fibrous cortical defect", "D. SCFE"],
		answer: 0,
		explanation: "Metaphyseal flaring can be seen in osteopetrosis and storage disorders.",
		tags: ["PYQ"]
	},
	{
		id: "rad_bx_005",
		topic: "bone-xrays",
		year: "FMGE Dec 2020",
		q: "Most common site for osteosarcoma around knee is:",
		img: null,
		options: ["A. Proximal fibula", "B. Distal femur", "C. Calcaneum", "D. Distal ulna"],
		answer: 1,
		explanation: "Distal femur is the most frequent location for osteosarcoma near knee.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 2: NUCLEAR MEDICINE ============
	{
		id: "rad_nuc_001",
		topic: "nuclear-medicine",
		year: "FMGE Dec 2019",
		q: "PET imaging commonly uses tracer:",
		img: null,
		options: ["A. Tc-99m MDP", "B. F-18 FDG", "C. I-123 MIBG", "D. Ga-67 citrate"],
		answer: 1,
		explanation: "18F-FDG is the most widely used PET tracer reflecting glucose metabolism.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "rad_nuc_002",
		topic: "nuclear-medicine",
		year: "FMGE Jun 2018",
		q: "Most common isotope used for routine bone scan is:",
		img: null,
		options: ["A. I-131", "B. Tc-99m labeled phosphate", "C. C-14", "D. Xe-133"],
		answer: 1,
		explanation: "Tc-99m diphosphonates are standard radiopharmaceuticals for bone scintigraphy.",
		tags: ["PYQ"]
	},
	{
		id: "rad_nuc_003",
		topic: "nuclear-medicine",
		year: "FMGE Dec 2018",
		q: "Best nuclear scan for pulmonary embolism in selected cases is:",
		img: null,
		options: ["A. HIDA", "B. V/Q scan", "C. DEXA", "D. DMSA"],
		answer: 1,
		explanation: "Ventilation-perfusion scan helps diagnose PE when CTPA is unsuitable.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "rad_nuc_004",
		topic: "nuclear-medicine",
		year: "FMGE Jun 2019",
		q: "Most commonly used diagnostic radioisotope in thyroid scan is:",
		img: null,
		options: ["A. I-131 high dose", "B. Tc-99m pertechnetate", "C. Sr-89", "D. Co-60"],
		answer: 1,
		explanation: "Tc-99m pertechnetate is frequently used for thyroid imaging due to availability.",
		tags: ["PYQ"]
	},
	{
		id: "rad_nuc_005",
		topic: "nuclear-medicine",
		year: "FMGE Dec 2020",
		q: "Theranostic radioiodine for differentiated thyroid carcinoma is:",
		img: null,
		options: ["A. I-123", "B. I-131", "C. Tc-99m", "D. Ga-68"],
		answer: 1,
		explanation: "I-131 is used for ablation/treatment because it emits beta radiation.",
		tags: ["PYQ", "high-yield"]
	},


        {
                id: "rad_cxr_006",
                topic: "cxr-patterns",
                year: "FMGE Jun 2022",
                q: "Bat-wing (butterfly) pattern on CXR is seen in:",
                img: null,
                options: ["A. Pulmonary embolism", "B. Acute pulmonary oedema", "C. Pneumothorax", "D. Pleural effusion"],
                answer: 1,
                explanation: "Bat-wing/butterfly pattern: bilateral perihilar airspace consolidation in a bat-wing distribution, seen in acute pulmonary oedema (left heart failure). Other CXR features of pulmonary oedema: upper lobe diversion, Kerley B lines, cardiomegaly, pleural effusions.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_cxr_007",
                topic: "cxr-patterns",
                year: "FMGE Dec 2021",
                q: "Air bronchogram sign on CXR indicates:",
                img: null,
                options: ["A. Pneumothorax (air outside bronchi)", "B. Alveolar (airspace) consolidation with patent air-filled bronchi", "C. Pleural effusion", "D. Emphysema"],
                answer: 1,
                explanation: "Air bronchogram: visible air-filled bronchi within an area of consolidation. The surrounding alveoli are filled with fluid/pus/cells but the bronchi remain air-filled. Seen in pneumonia, pulmonary oedema, ARDS, atelectasis. NOT seen in obstructive collapse (bronchial obstruction).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_cxr_008",
                topic: "cxr-patterns",
                year: "FMGE Jun 2021",
                q: "Right paratracheal widening on CXR is associated with:",
                img: null,
                options: ["A. Cardiomegaly", "B. Superior vena cava (SVC) obstruction or paratracheal lymphadenopathy", "C. Pleural effusion", "D. Pulmonary embolism"],
                answer: 1,
                explanation: "Right paratracheal widening (R paratracheal stripe >4 mm) suggests: SVC obstruction, azygos lymphadenopathy, paratracheal lymph nodes enlargement (sarcoidosis, lymphoma, TB). Bilateral hilar lymphadenopathy: sarcoidosis ('potato nodes' pattern — eggshell calcification).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_cxr_009",
                topic: "cxr-patterns",
                year: "FMGE Dec 2020",
                q: "Ground-glass opacity (GGO) on chest CT (or HRCT) is characteristically seen in:",
                img: null,
                options: ["A. Emphysema (cystic lucency)", "B. Interstitial lung disease and early pulmonary oedema", "C. Tension pneumothorax", "D. Lung abscess (cavitation)"],
                answer: 1,
                explanation: "GGO: hazy increased lung attenuation with preserved bronchial and vascular markings. Seen in: interstitial pneumonitis (UIP, NSIP), hypersensitivity pneumonitis, pulmonary oedema, alveolar haemorrhage, COVID-19, P. jirovecii. Represents partial alveolar filling or interstitial thickening.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_cxr_010",
                topic: "cxr-patterns",
                year: "FMGE Jun 2020",
                q: "Boot-shaped (coeur en sabot) cardiac silhouette on CXR is classic for:",
                img: null,
                options: ["A. Mitral stenosis", "B. Tetralogy of Fallot", "C. ASD", "D. Dilated cardiomyopathy"],
                answer: 1,
                explanation: "Boot-shaped heart (coeur en sabot): RVH causes uplifted cardiac apex + concave pulmonary artery segment (oligaemic lung fields) → typical of Tetralogy of Fallot. Mitral stenosis: double density right heart border + straightened left heart border (enlarged LA).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_axr_006",
                topic: "abdominal-xray",
                year: "FMGE Jun 2022",
                q: "Free gas under the diaphragm on erect AXR (pneumoperitoneum) is best confirmed by:",
                img: null,
                options: ["A. Supine AXR", "B. Erect CXR (most sensitive plain radiograph)", "C. Lateral decubitus AXR", "D. Ultrasound abdomen"],
                answer: 1,
                explanation: "Pneumoperitoneum detection: erect CXR is the most sensitive plain film (even 1 mL free gas visible as crescentic lucency under right hemidiaphragm). Lateral decubitus AXR (left side down) also sensitive. CT abdomen is gold standard for small amounts. Cause: perforated peptic ulcer (most common).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_axr_007",
                topic: "abdominal-xray",
                year: "FMGE Dec 2021",
                q: "Step-ladder pattern of distended small bowel with valvulae conniventes on AXR suggests:",
                img: null,
                options: ["A. Large bowel obstruction", "B. Small bowel obstruction", "C. Paralytic ileus", "D. Volvulus"],
                answer: 1,
                explanation: "Small bowel obstruction: dilated small bowel loops (>3 cm) in central abdomen with valvulae conniventes (plicae circulares) crossing the full width — 'step-ladder' pattern. Large bowel: peripheral, haustra (incomplete septa), colonic markings. Paralytic ileus: diffuse dilation of both small and large bowel.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_axr_008",
                topic: "abdominal-xray",
                year: "FMGE Jun 2021",
                q: "Coffee bean sign on AXR is characteristic of:",
                img: null,
                options: ["A. Small bowel obstruction", "B. Sigmoid volvulus", "C. Appendicitis", "D. Intussusception"],
                answer: 1,
                explanation: "Coffee bean sign: inverted U-shaped gas-filled loop (sigmoid colon) arising from pelvis with a central dense line (mesenteric fold between the loops) — classic for sigmoid volvulus. The loop points to left upper quadrant (unlike caecal volvulus which points to left upper quadrant from right lower origin).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_axr_009",
                topic: "abdominal-xray",
                year: "FMGE Dec 2020",
                q: "Porcelain gallbladder (calcified gallbladder wall) on AXR is associated with increased risk of:",
                img: null,
                options: ["A. Acute cholecystitis only", "B. Gallbladder carcinoma", "C. Choledocholithiasis", "D. Pancreatitis"],
                answer: 1,
                explanation: "Porcelain gallbladder: dystrophic calcification of GB wall visible on AXR/CT. Historically associated with gallbladder carcinoma (~20–22% risk). Indication for cholecystectomy. May result from chronic cholecystitis, cholelithiasis.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_axr_010",
                topic: "abdominal-xray",
                year: "FMGE Jun 2020",
                q: "Thumb-printing pattern on AXR of the colon is suggestive of:",
                img: null,
                options: ["A. Colon carcinoma", "B. Ischaemic colitis or inflammatory bowel disease (mural oedema)", "C. Diverticulosis", "D. Normal haustral folds"],
                answer: 1,
                explanation: "Thumb-printing: rounded soft-tissue impressions on the mucosal surface of the colon, caused by submucosal oedema/haemorrhage. Classic for ischaemic colitis, also seen in Crohn's, ulcerative colitis, infective colitis. Distribution helps differentiate (ischaemic = 'watershed' areas).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_ctb_006",
                topic: "ct-brain",
                year: "FMGE Jun 2022",
                q: "On non-contrast CT brain, acute blood appears:",
                img: null,
                options: ["A. Hypodense (dark)", "B. Hyperdense (white/bright)", "C. Isodense to brain", "D. Only visible on MRI"],
                answer: 1,
                explanation: "Acute blood on NCCT brain: HYPERDENSE (bright white, 60–90 HU) due to clot retraction and globin protein concentration. After 1–2 weeks: isodense. After 3–4 weeks: hypodense (chronic haematoma). Extradural haematoma: biconvex; Subdural: crescent-shaped.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_ctb_007",
                topic: "ct-brain",
                year: "FMGE Dec 2021",
                q: "Biconvex (lenticular) hyperdense collection on CT brain not crossing sutures is:",
                img: null,
                options: ["A. Subdural haematoma", "B. Extradural (epidural) haematoma", "C. Subarachnoid haemorrhage", "D. Intracerebral haemorrhage"],
                answer: 1,
                explanation: "Extradural haematoma (EDH): biconvex (lens-shaped) hyperdense collection between skull and dura. Does NOT cross sutures (dura attached at sutures). Classically from middle meningeal artery injury (temporal bone fracture). Lucid interval present. Emergency evacuation needed.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_ctb_008",
                topic: "ct-brain",
                year: "FMGE Jun 2021",
                q: "CT brain in subarachnoid haemorrhage (SAH) characteristically shows:",
                img: null,
                options: ["A. Biconvex hyperdense collection", "B. Hyperdense blood in basal cisterns and sulci", "C. Intracerebral ring-enhancing lesion", "D. Midline shift without blood"],
                answer: 1,
                explanation: "SAH on CT: hyperdense (bright) blood filling basal cisterns (star-pattern), sylvian fissures, and cortical sulci. Most common cause: ruptured berry aneurysm. Presentation: 'thunderclap' headache. CT sensitivity highest in first 12 hours (~98%). LP if CT negative.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_ctb_009",
                topic: "ct-brain",
                year: "FMGE Dec 2020",
                q: "Ring-enhancing lesion on contrast CT brain in an immunocompromised patient suggests:",
                img: null,
                options: ["A. Simple meningitis", "B. Toxoplasmosis or primary CNS lymphoma (in HIV)", "C. Ischaemic stroke", "D. Subdural haematoma"],
                answer: 1,
                explanation: "Ring-enhancing lesion on contrast CT in HIV/immunocompromised: Toxoplasma gondii (most common — multiple lesions, ganglionic, responds to empirical pyrimethamine-sulphadiazine) vs. CNS lymphoma (single lesion, periventricular, contact with ventricle, does NOT respond to toxo treatment).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_ctb_010",
                topic: "ct-brain",
                year: "FMGE Jun 2020",
                q: "Which finding on CT brain indicates raised intracranial pressure?",
                img: null,
                options: ["A. Hypodense basal ganglia", "B. Loss of grey-white differentiation, sulcal effacement, midline shift, transtentorial herniation", "C. Calcification of pineal gland", "D. Dilated ventricles without other features"],
                answer: 1,
                explanation: "Signs of raised ICP on CT: cerebral oedema (loss of grey-white differentiation, sulcal effacement), midline shift (>5 mm significant), herniation syndromes (uncal, central, transtentorial). Kernohan's notch: ipsilateral cranial nerve signs from contralateral compression (false localising).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_cta_006",
                topic: "ct-abdomen",
                year: "FMGE Jun 2022",
                q: "Double duct sign on CT/MRCP refers to:",
                img: null,
                options: ["A. Dilated right and left hepatic ducts", "B. Simultaneous dilatation of both the common bile duct and pancreatic duct", "C. Dilated portal vein and IVC", "D. Two urethral ducts"],
                answer: 1,
                explanation: "Double duct sign: simultaneous dilatation of CBD and pancreatic duct (Wirsung's duct) on imaging. Highly suggestive of carcinoma of the head of pancreas obstructing both ducts at the ampulla. Also seen in ampullary carcinoma and periampullary tumours.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_cta_007",
                topic: "ct-abdomen",
                year: "FMGE Dec 2021",
                q: "Whirlpool sign on CT abdomen is seen in:",
                img: null,
                options: ["A. Aortic dissection", "B. Midgut volvulus (superior mesenteric artery and vein twisting)", "C. Appendicitis", "D. Renal colic"],
                answer: 1,
                explanation: "Whirlpool sign: twisting of superior mesenteric artery (SMA) and vein with mesenteric fat in a spiral pattern around each other on CT. Classic sign of midgut volvulus (malrotation with volvulus). SMA lies to the left of SMV (reversed — normally SMA right of SMV).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_cta_008",
                topic: "ct-abdomen",
                year: "FMGE Jun 2021",
                q: "Psoas sign on CT abdomen (soft-tissue mass obscuring the psoas outline) suggests:",
                img: null,
                options: ["A. Renal cell carcinoma", "B. Retroperitoneal pathology (psoas abscess, retroperitoneal haematoma, lymphadenopathy)", "C. Anterior abdominal wall hernia", "D. Transverse colon cancer"],
                answer: 1,
                explanation: "Psoas sign: blurring/obscuring of psoas major muscle margin on CT (normally well-defined). Indicates retroperitoneal pathology adjacent to psoas: psoas abscess (TB, staphylococcal), retroperitoneal haematoma, aortic aneurysm, metastatic lymph nodes, renal/pancreatic pathology.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_cta_009",
                topic: "ct-abdomen",
                year: "FMGE Dec 2020",
                q: "Crescent sign (hypoattenuating crescent within an aortic aneurysm wall) on CT indicates:",
                img: null,
                options: ["A. Stable chronic aneurysm", "B. Impending rupture of abdominal aortic aneurysm", "C. Atherosclerotic calcification", "D. Post-surgical change"],
                answer: 1,
                explanation: "Crescent sign (on CT): hypo-attenuating crescent within or at the periphery of an AAA wall = blood within the mural thrombus — indicates impending/contained rupture. Urgent vascular surgical intervention required. Another sign: high-attenuation crescent = acute haematoma within wall.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_cta_010",
                topic: "ct-abdomen",
                year: "FMGE Jun 2020",
                q: "Target sign on CT abdomen (concentric rings of bowel wall) is characteristic of:",
                img: null,
                options: ["A. Appendicitis", "B. Intussusception", "C. Sigmoid volvulus", "D. Mesenteric ischaemia"],
                answer: 1,
                explanation: "Target sign (CT): concentric rings of bowel wall at the lead point of an intussusception. The outer bowel (intussuscipiens) envelopes the inner bowel (intussusceptum). Classic in children (ileocolic intussusception from a lead point like lymphoid hyperplasia; Meckel's in adults).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_mri_006",
                topic: "mri-brain",
                year: "FMGE Jun 2022",
                q: "DWI (diffusion-weighted imaging) MRI is most sensitive for detecting:",
                img: null,
                options: ["A. Old infarcts", "B. Acute ischaemic stroke (within minutes to hours)", "C. Chronic subdural haematoma", "D. Meningioma"],
                answer: 1,
                explanation: "DWI detects acute ischaemic stroke within minutes to 6 hours (restricted diffusion = bright on DWI, dark on ADC map). CT is often normal in first 6–24 hours. DWI is the most sensitive sequence for early infarction. Also useful for abscess (restricted diffusion) vs. tumour necrosis.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_mri_007",
                topic: "mri-brain",
                year: "FMGE Dec 2021",
                q: "In MRI brain, T1-weighted images show CSF as:",
                img: null,
                options: ["A. Bright (hyperintense)", "B. Dark (hypointense)", "C. Isointense to grey matter", "D. Dependent on field strength"],
                answer: 1,
                explanation: "T1-weighted MRI: CSF = DARK (hypointense); fat/methhaemoglobin = bright. T2-weighted: CSF = BRIGHT (hyperintense); fat = bright. FLAIR: CSF = dark (fluid suppressed), oedema/lesions = bright. FLAIR useful for periventricular lesions (MS plaques) near CSF.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_mri_008",
                topic: "mri-brain",
                year: "FMGE Jun 2021",
                q: "Multiple periventricular white matter plaques on MRI brain (T2/FLAIR bright) are characteristic of:",
                img: null,
                options: ["A. Acute haemorrhage", "B. Multiple sclerosis", "C. Acute ischaemic stroke", "D. Glioblastoma multiforme"],
                answer: 1,
                explanation: "MS plaques on MRI: T2/FLAIR hyperintense lesions (Dawson's fingers — perpendicular to ventricles), periventricular, juxtacortical, infratentorial, and spinal cord. Criterion: ≥2 lesions in ≥2 locations disseminated in space + time. McDonald criteria for diagnosis.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_mri_009",
                topic: "mri-brain",
                year: "FMGE Dec 2020",
                q: "Butterfly glioma (GBM crossing the corpus callosum) on MRI brain represents:",
                img: null,
                options: ["A. Meningioma", "B. Glioblastoma multiforme (WHO Grade IV glioma)", "C. Craniopharyngioma", "D. Pituitary adenoma"],
                answer: 1,
                explanation: "Butterfly glioma: GBM crossing corpus callosum, appearing as bilateral butterfly-shaped enhancing mass with central necrosis on contrast MRI. GBM (glioblastoma multiforme) is WHO Grade IV, most aggressive primary brain tumour. Ring-enhancing lesion with irregular margins.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_mri_010",
                topic: "mri-brain",
                year: "FMGE Jun 2020",
                q: "MRI sequence of choice for detecting posterior fossa pathology (brainstem, cerebellum) over CT is:",
                img: null,
                options: ["A. Non-contrast CT (NCCT)", "B. MRI (avoids bone-beam hardening artefact of posterior fossa on CT)", "C. PET scan", "D. SPECT"],
                answer: 1,
                explanation: "MRI is superior to CT for posterior fossa (brainstem, cerebellum) due to: (1) no bone beam-hardening artefact (CT has streak artefacts from petrous bone); (2) better soft-tissue resolution; (3) multiplanar capability. MRI preferred for: MS, posterior fossa tumours, syrinx, brainstem lesions.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_us_006",
                topic: "ultrasound-ob",
                year: "FMGE Jun 2022",
                q: "Crown-rump length (CRL) on obstetric ultrasound is used to accurately date pregnancy in:",
                img: null,
                options: ["A. Third trimester", "B. First trimester (6–13 weeks)", "C. Second trimester only", "D. Post-dates pregnancy"],
                answer: 1,
                explanation: "CRL: most accurate parameter for gestational age estimation in first trimester (6–13+6 weeks). Accuracy: ±3–5 days. After 14 weeks, biparietal diameter (BPD) and head circumference used. Routine dating scan recommended at 11–14 weeks (combined with NT measurement for Down syndrome screening).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_us_007",
                topic: "ultrasound-ob",
                year: "FMGE Dec 2021",
                q: "Nuchal translucency (NT) measurement on ultrasound at 11–14 weeks is used for screening:",
                img: null,
                options: ["A. Neural tube defects", "B. Chromosomal abnormalities (Down syndrome, Trisomy 18/13)", "C. Placenta praevia", "D. IUGR only"],
                answer: 1,
                explanation: "NT: fluid collection at back of foetal neck. Increased NT (>3.5 mm or >99th centile) associated with chromosomal abnormalities (Down, Edwards, Patau syndromes), cardiac defects, and skeletal dysplasias. Combined first-trimester screen: NT + PAPP-A + free β-hCG → 90% detection rate for T21.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_us_008",
                topic: "ultrasound-ob",
                year: "FMGE Jun 2021",
                q: "Snowstorm appearance on ultrasound of the uterus is characteristic of:",
                img: null,
                options: ["A. Fibroid uterus", "B. Complete hydatidiform mole (vesicular/snowstorm pattern)", "C. Ectopic pregnancy", "D. Normal early pregnancy"],
                answer: 1,
                explanation: "Snowstorm/blizzard pattern: complete hydatidiform mole — uterine cavity filled with heterogeneous echogenic 'snowstorm' material (swollen chorionic villi/vesicles) without foetal parts. No foetus in complete mole. Partial mole: foetus present with chromosomal abnormality (triploidy).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_us_009",
                topic: "ultrasound-ob",
                year: "FMGE Dec 2020",
                q: "Absent end-diastolic flow (AEDF) on Doppler umbilical artery represents:",
                img: null,
                options: ["A. Normal placental resistance", "B. Severe uteroplacental insufficiency and high-risk of foetal compromise", "C. Foetal anaemia", "D. Polyhydramnios"],
                answer: 1,
                explanation: "Umbilical artery Doppler: AEDF/REDF (reversed end-diastolic flow) indicates severely elevated placental vascular resistance → foetal hypoxia. Precedes foetal death. Management: emergency delivery if mature, intensive monitoring if preterm. Normal: S/D ratio <3 at term.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_us_010",
                topic: "ultrasound-ob",
                year: "FMGE Jun 2020",
                q: "Biophysical profile (BPP) on obstetric ultrasound assesses all EXCEPT:",
                img: null,
                options: ["A. Foetal breathing movements", "B. Foetal tone", "C. Amniotic fluid volume", "D. Foetal sex determination"],
                answer: 3,
                explanation: "BPP: 5 parameters (2 points each, max 10): (1) foetal breathing movements ≥30 s in 30 min; (2) gross body movements ≥3; (3) foetal tone (flexion/extension); (4) reactive non-stress test; (5) amniotic fluid index (AFI >5). Score ≤4/10 indicates foetal compromise.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_con_006",
                topic: "contrast-agents",
                year: "FMGE Jun 2022",
                q: "Contrast-induced nephropathy (CIN) is best prevented by:",
                img: null,
                options: ["A. Oral N-acetylcysteine alone", "B. IV hydration with normal saline before and after contrast", "C. High-dose furosemide before contrast", "D. Dialysis before every contrast study"],
                answer: 1,
                explanation: "Best prevention of CIN: IV hydration (0.9% saline 1 mL/kg/hr 6–12 hrs pre and post-contrast). Additional: use minimum contrast volume, low/iso-osmolar contrast, hold nephrotoxins (NSAIDs, aminoglycosides). N-acetylcysteine benefit is debated. Risk factors: CKD, DM, dehydration, heart failure.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_con_007",
                topic: "contrast-agents",
                year: "FMGE Dec 2021",
                q: "Gadolinium contrast in MRI is contraindicated in:",
                img: null,
                options: ["A. Hypertension", "B. Severe renal failure (GFR <30 mL/min) due to risk of nephrogenic systemic fibrosis (NSF)", "C. Mild renal impairment", "D. Allergy to iodine"],
                answer: 1,
                explanation: "Nephrogenic systemic fibrosis (NSF): rare but potentially fatal complication of gadolinium in severe CKD (GFR <30 mL/min/1.73m²). Fibrosis of skin, muscles, viscera. Use macrocyclic gadolinium agents (most stable) if necessary. Iodinated contrast allergy is separate from gadolinium allergy.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_con_008",
                topic: "contrast-agents",
                year: "FMGE Jun 2021",
                q: "Metformin should be stopped before contrast administration because:",
                img: null,
                options: ["A. It causes severe allergic reaction", "B. CIN-induced AKI can cause lactic acidosis if metformin continues", "C. It prevents contrast from being absorbed", "D. It causes contrast nephrotoxicity directly"],
                answer: 1,
                explanation: "Metformin: stop 48 hrs before IV contrast in at-risk patients (CKD, high contrast volumes). Reason: contrast → CIN (AKI) → metformin accumulation (renally excreted) → lactic acidosis (rare but fatal). Restart after 48 hrs with confirmed normal renal function. Low-risk patients (normal renal function, low contrast dose) may not need to stop.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_con_009",
                topic: "contrast-agents",
                year: "FMGE Dec 2020",
                q: "Barium should NOT be used in suspected bowel perforation because:",
                img: null,
                options: ["A. Barium is toxic to the liver", "B. Barium causes severe barium peritonitis if it leaks into peritoneal cavity", "C. Barium causes nephrotoxicity", "D. Barium obscures the perforation"],
                answer: 1,
                explanation: "Barium peritonitis: extravasated barium sulphate into the peritoneal cavity causes severe chemical peritonitis with granuloma formation, adhesions, and high mortality. Use water-soluble contrast (Gastrografin) instead when perforation is suspected.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_con_010",
                topic: "contrast-agents",
                year: "FMGE Jun 2020",
                q: "The most common type of contrast reaction is:",
                img: null,
                options: ["A. Anaphylactic (severe)", "B. Mild (nausea, urticaria, flushing)", "C. Delayed (> 1 hour)", "D. Cardiac arrest"],
                answer: 1,
                explanation: "Contrast reactions: mild (most common — nausea, vomiting, urticaria, flushing, itching — 1–3%) → self-limiting. Moderate: bronchospasm, hypotension, laryngeal oedema → requires treatment. Severe (anaphylactoid): cardiac arrest, bronchospasm — rare (<0.1%). Use low-osmolar agents to reduce risk. Pre-medication (steroids + antihistamines) for previous reactions.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_sign_006",
                topic: "radiological-signs",
                year: "FMGE Jun 2022",
                q: "Meniscus sign on CXR (homogeneous opacity with concave upper border at the lung base) represents:",
                img: null,
                options: ["A. Lung abscess", "B. Pleural effusion", "C. Consolidation", "D. Pulmonary infarction"],
                answer: 1,
                explanation: "Meniscus (Ellis-Damoiseau) sign: curved upper border of pleural effusion on erect CXR, concave superiorly (higher laterally). Blunting of costophrenic angle requires >200–300 mL fluid. Subpulmonic effusion: apparent elevation of hemidiaphragm. Massive effusion: complete whiteout with mediastinal shift away.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_sign_007",
                topic: "radiological-signs",
                year: "FMGE Dec 2021",
                q: "Westermark sign on CXR in pulmonary embolism indicates:",
                img: null,
                options: ["A. Hyperinflation of the affected lung", "B. Oligaemia (decreased vascular markings) distal to the embolus", "C. Pleural effusion", "D. Consolidation in the affected lobe"],
                answer: 1,
                explanation: "PE CXR signs: Westermark sign = oligaemia (decreased vascularity) distal to embolus; Hampton's hump = wedge-shaped peripheral consolidation (pulmonary infarct); Palla sign = enlarged right descending PA. CXR is often normal in PE. CT pulmonary angiography (CTPA) is gold standard.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_sign_008",
                topic: "radiological-signs",
                year: "FMGE Jun 2021",
                q: "Sailing boat sign (triangular lucency in midline above bladder) on CT pelvis is associated with:",
                img: null,
                options: ["A. Bladder carcinoma", "B. Free intraperitoneal fluid in pelvis (haemoperitoneum)", "C. Normal pelvis", "D. Ovarian cyst"],
                answer: 1,
                explanation: "Sailing boat (or Christmas tree) sign: triangular area of fat attenuation in Retzius space above the bladder, bordered by free fluid — indicates haemoperitoneum (blood in pelvis). Seen in trauma, ectopic pregnancy rupture, pelvic organ injury.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_sign_009",
                topic: "radiological-signs",
                year: "FMGE Dec 2020",
                q: "Lead pipe colon (featureless, tubular colon without haustra) on barium enema is seen in:",
                img: null,
                options: ["A. Crohn's disease", "B. Long-standing ulcerative colitis", "C. Colon carcinoma", "D. Diverticulosis"],
                answer: 1,
                explanation: "Lead pipe colon: loss of haustral folds, shortened tubular colon on barium enema — characteristic of long-standing severe ulcerative colitis. Results from muscular hypertrophy and fibrosis. Rose-thorn ulcers, cobblestone appearance = Crohn's. String sign of Kantor = terminal ileum stricture in Crohn's.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_sign_010",
                topic: "radiological-signs",
                year: "FMGE Jun 2020",
                q: "Inverted 3 sign on barium meal (upper GI series) suggests:",
                img: null,
                options: ["A. Gastric outlet obstruction", "B. Carcinoma of head of pancreas compressing the duodenum", "C. Small bowel obstruction", "D. Oesophageal carcinoma"],
                answer: 1,
                explanation: "Inverted 3 sign (Frostberg's sign): widened duodenal C-loop with 'reverse 3' impression on medial duodenal wall seen on barium meal — characteristic of carcinoma of head of pancreas or pancreatitis compressing the medial duodenum. Double duct sign on MRCP confirms.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_bx_006",
                topic: "bone-xrays",
                year: "FMGE Jun 2022",
                q: "Sunburst pattern on bone X-ray is characteristic of:",
                img: null,
                options: ["A. Ewing's sarcoma", "B. Osteosarcoma (osteogenic sarcoma)", "C. Multiple myeloma", "D. Giant cell tumour"],
                answer: 1,
                explanation: "Sunburst/sun-ray spiculation on X-ray = osteosarcoma (metaphysis of distal femur/proximal tibia, commonest in adolescents 10–20 years). Also: Codman's triangle (raised periosteum). Onion-skin periosteal reaction = Ewing's sarcoma (diaphysis, age 10–25).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_bx_007",
                topic: "bone-xrays",
                year: "FMGE Dec 2021",
                q: "Soap bubble appearance on X-ray of the epiphysis of the long bone is seen in:",
                img: null,
                options: ["A. Osteosarcoma", "B. Giant cell tumour (GCT)", "C. Enchondroma", "D. Osteoid osteoma"],
                answer: 1,
                explanation: "Giant cell tumour (GCT/osteoclastoma): soap bubble (trabeculated) lytic lesion at epiphysis of long bone (distal femur, proximal tibia), extends to subarticular surface, no sclerotic rim (eccentric lytic lesion). FMGE favourite. Peak: 20–40 years, after growth plate closure.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_bx_008",
                topic: "bone-xrays",
                year: "FMGE Jun 2021",
                q: "X-ray features of osteoarthritis include:",
                img: null,
                options: ["A. Periarticular erosions and osteoporosis", "B. Joint space narrowing, subchondral sclerosis, osteophytes, subchondral cysts", "C. Syndesmophytes and bamboo spine", "D. Joint effusion and periosteal reaction"],
                answer: 1,
                explanation: "OA X-ray features (LOSS): Loss of joint space (asymmetric), Osteophytes (bony spurs), Subchondral sclerosis, Subchondral cysts. Periarticular osteoporosis and erosions = rheumatoid arthritis. Syndesmophytes (bamboo spine, dagger sign) = ankylosing spondylitis.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_bx_009",
                topic: "bone-xrays",
                year: "FMGE Dec 2020",
                q: "Rugger-jersey spine on X-ray is characteristic of:",
                img: null,
                options: ["A. Ankylosing spondylitis", "B. Renal osteodystrophy (secondary hyperparathyroidism in CKD)", "C. Osteoporosis", "D. Paget's disease"],
                answer: 1,
                explanation: "Rugger-jersey spine: alternating bands of dense sclerosis (end-plates) and lucency (central vertebral body) on lateral X-ray — classic for renal osteodystrophy (mixed osteosclerosis and osteomalacia in CKD). Paget's: picture frame vertebra. Bamboo spine: AS.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_bx_010",
                topic: "bone-xrays",
                year: "FMGE Jun 2020",
                q: "Looser zones (pseudofractures) on X-ray are diagnostic of:",
                img: null,
                options: ["A. Paget's disease", "B. Osteomalacia (and rickets)", "C. Osteosarcoma", "D. Osteoporosis"],
                answer: 1,
                explanation: "Looser zones (Milkman's pseudofractures): bilateral, symmetric, transverse radiolucent bands perpendicular to bone surface — pathognomonic of osteomalacia. Sites: medial femoral neck, pubic rami, ribs, lateral scapula. In rickets: cupping and fraying of metaphyses, widened growth plate.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_nuc_006",
                topic: "nuclear-medicine",
                year: "FMGE Jun 2022",
                q: "Technetium-99m (99mTc) is the most commonly used radionuclide because it has:",
                img: null,
                options: ["A. Long half-life of 60 days and alpha emission", "B. Ideal half-life of 6 hours, gamma emission, and availability from Mo-99 generator", "C. Beta emission suitable for therapy", "D. Half-life of 1 hour only"],
                answer: 1,
                explanation: "99mTc: ideal for imaging — half-life 6 hours (long enough for procedure, short enough to limit radiation), pure gamma emitter (140 keV, ideal for gamma camera), generator-produced (from Mo-99 parent, 66-hour half-life), versatile (can be labelled to multiple compounds).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_nuc_007",
                topic: "nuclear-medicine",
                year: "FMGE Dec 2021",
                q: "PET scan uses which radionuclide for metabolic imaging in oncology?",
                img: null,
                options: ["A. 99mTc-MDP (bone scan)", "B. F-18 FDG (fluorodeoxyglucose)", "C. I-131 (radioiodine)", "D. Thallium-201"],
                answer: 1,
                explanation: "PET scan: F-18 FDG (fluoro-2-deoxyglucose) — glucose analogue taken up by metabolically active cells (tumours, brain, heart). 18F half-life 110 minutes. FDG-PET: staging of lymphoma, lung cancer, colorectal cancer, melanoma; monitoring treatment response. PET-CT combines anatomical + functional information.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_nuc_008",
                topic: "nuclear-medicine",
                year: "FMGE Jun 2021",
                q: "Bone scan (99mTc-MDP) detects bone metastases earlier than plain X-ray because:",
                img: null,
                options: ["A. It uses ionising radiation more efficiently", "B. It detects osteoblastic activity (reactive bone formation) before 30–40% bone loss needed for X-ray visibility", "C. It targets tumour cells directly", "D. It has higher resolution than X-ray"],
                answer: 1,
                explanation: "Bone scan detects areas of increased osteoblastic activity (reactive bone formation around metastases) 3–6 months before X-ray changes become visible. X-ray requires 30–50% cortical bone loss for lytic lesions to be detectable. Bone scan more sensitive; CT/MRI more specific.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_nuc_009",
                topic: "nuclear-medicine",
                year: "FMGE Dec 2020",
                q: "Radioactive iodine (I-131) ablation is used for treatment of:",
                img: null,
                options: ["A. Parathyroid adenoma", "B. Differentiated thyroid carcinoma (papillary and follicular) after thyroidectomy", "C. Adrenal cortical carcinoma", "D. All thyroid carcinomas including medullary"],
                answer: 1,
                explanation: "I-131: used for thyroid ablation after total thyroidectomy for differentiated thyroid carcinoma (papillary, follicular — sodium-iodide symporter). NOT effective for medullary carcinoma (C-cells, no NIS). Also used for hyperthyroidism (Graves', toxic nodular goitre).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "rad_nuc_010",
                topic: "nuclear-medicine",
                year: "FMGE Jun 2020",
                q: "MIBG (meta-iodobenzylguanidine) scan is used for diagnosing:",
                img: null,
                options: ["A. Parathyroid adenoma", "B. Phaeochromocytoma and neuroblastoma", "C. Osteosarcoma", "D. Hepatocellular carcinoma"],
                answer: 1,
                explanation: "MIBG (labelled with I-123 for diagnosis, I-131 for therapy): structural analogue of noradrenaline, taken up by adrenergic tissues. Used for: phaeochromocytoma (90% in adrenal), paraganglioma, neuroblastoma localisation. Sestamibi (99mTc) for parathyroid adenoma.",
                tags: ["PYQ", "high-yield"]
        },

];

export default radiology;
