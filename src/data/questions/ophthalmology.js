const ophthalmology = [

	// ============ BATCH 1: CATARACT ============
	{
		id: "oph_cat_001",
		topic: "cataract",
		year: "FMGE Dec 2019",
		q: "Most common type of senile cataract is:",
		img: null,
		options: ["A. Posterior subcapsular", "B. Nuclear", "C. Cortical", "D. Traumatic"],
		answer: 1,
		explanation: "Age-related nuclear sclerosis is the most common form of senile cataract.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_cat_002",
		topic: "cataract",
		year: "FMGE Jun 2018",
		q: "Most common cause of leukocoria in children is:",
		img: null,
		options: ["A. Congenital glaucoma", "B. Congenital cataract", "C. Retinitis pigmentosa", "D. Uveitis"],
		answer: 1,
		explanation: "Congenital cataract is a common pediatric cause of white pupillary reflex; retinoblastoma is another key differential.",
		tags: ["PYQ"]
	},
	{
		id: "oph_cat_003",
		topic: "cataract",
		year: "FMGE Dec 2018",
		q: "Best treatment for visually significant senile cataract is:",
		img: null,
		options: ["A. Topical steroids", "B. Lens extraction with IOL implantation", "C. Laser iridotomy", "D. Observation only"],
		answer: 1,
		explanation: "Definitive management is cataract surgery, usually phacoemulsification with posterior chamber intraocular lens.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_cat_004",
		topic: "cataract",
		year: "FMGE Jun 2019",
		q: "Commonest early visual complaint in nuclear cataract is:",
		img: null,
		options: ["A. Sudden painful loss of vision", "B. Progressive painless blurring with myopic shift", "C. Diplopia with ptosis", "D. Colored halos with severe pain"],
		answer: 1,
		explanation: "Nuclear cataract often causes progressive painless visual decline and index myopia (second sight).",
		tags: ["PYQ"]
	},
	{
		id: "oph_cat_005",
		topic: "cataract",
		year: "FMGE Dec 2020",
		q: "Posterior subcapsular cataract typically causes worse vision in:",
		img: null,
		options: ["A. Bright light and near work", "B. Dim light only", "C. Peripheral vision only", "D. One eye at a time alternately"],
		answer: 0,
		explanation: "PSC causes disproportionate glare and near-vision difficulty, especially in bright illumination.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 1: GLAUCOMA ============
	{
		id: "oph_gla_001",
		topic: "glaucoma",
		year: "FMGE Dec 2019",
		q: "Most common type of glaucoma worldwide is:",
		img: null,
		options: ["A. Angle closure glaucoma", "B. Primary open-angle glaucoma", "C. Congenital glaucoma", "D. Neovascular glaucoma"],
		answer: 1,
		explanation: "Primary open-angle glaucoma is the most common form globally and is often asymptomatic early.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_gla_002",
		topic: "glaucoma",
		year: "FMGE Jun 2018",
		q: "Definitive emergency treatment for acute angle closure after initial IOP control is:",
		img: null,
		options: ["A. Trabeculectomy immediately", "B. Laser peripheral iridotomy", "C. Vitrectomy", "D. Retinal photocoagulation"],
		answer: 1,
		explanation: "After medical stabilization, laser peripheral iridotomy relieves pupillary block and prevents recurrence.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_gla_003",
		topic: "glaucoma",
		year: "FMGE Dec 2018",
		q: "Drug that can precipitate acute angle closure glaucoma is:",
		img: null,
		options: ["A. Pilocarpine", "B. Atropine", "C. Timolol", "D. Acetazolamide"],
		answer: 1,
		explanation: "Anticholinergics cause mydriasis and can precipitate angle closure in predisposed narrow angles.",
		tags: ["PYQ"]
	},
	{
		id: "oph_gla_004",
		topic: "glaucoma",
		year: "FMGE Jun 2019",
		q: "Characteristic visual field defect in glaucoma is:",
		img: null,
		options: ["A. Central scotoma", "B. Bitemporal hemianopia", "C. Arcuate scotoma", "D. Homonymous hemianopia"],
		answer: 2,
		explanation: "Glaucoma commonly causes arcuate/Bjerrum scotoma and nasal step progressing to tunnel vision.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_gla_005",
		topic: "glaucoma",
		year: "FMGE Dec 2020",
		q: "First-line topical drug in primary open-angle glaucoma is commonly:",
		img: null,
		options: ["A. Atropine", "B. Prostaglandin analog (e.g., latanoprost)", "C. Tropicamide", "D. Phenylephrine"],
		answer: 1,
		explanation: "Prostaglandin analogs are commonly first-line because of strong IOP reduction and once-daily dosing.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 1: DIABETIC RETINOPATHY ============
	{
		id: "oph_dr_001",
		topic: "diabetic-retinopathy",
		year: "FMGE Dec 2019",
		q: "Earliest clinically visible lesion of diabetic retinopathy is:",
		img: null,
		options: ["A. Neovascularization", "B. Microaneurysm", "C. Hard exudate", "D. Vitreous hemorrhage"],
		answer: 1,
		explanation: "Microaneurysms are the earliest ophthalmoscopic lesions in non-proliferative diabetic retinopathy.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_dr_002",
		topic: "diabetic-retinopathy",
		year: "FMGE Jun 2018",
		q: "Most common cause of vision loss in diabetic retinopathy is:",
		img: null,
		options: ["A. Retinal detachment", "B. Macular edema", "C. Optic neuritis", "D. Cataract only"],
		answer: 1,
		explanation: "Diabetic macular edema is a major cause of central visual impairment in diabetic patients.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_dr_003",
		topic: "diabetic-retinopathy",
		year: "FMGE Dec 2018",
		q: "Proliferative diabetic retinopathy is defined by:",
		img: null,
		options: ["A. Cotton wool spots only", "B. Neovascularization", "C. Hard exudates only", "D. Venous beading only"],
		answer: 1,
		explanation: "Presence of neovascularization at disc or elsewhere defines proliferative diabetic retinopathy.",
		tags: ["PYQ"]
	},
	{
		id: "oph_dr_004",
		topic: "diabetic-retinopathy",
		year: "FMGE Jun 2019",
		q: "Preferred treatment for proliferative diabetic retinopathy is:",
		img: null,
		options: ["A. Laser panretinal photocoagulation", "B. Oral antibiotics", "C. Corneal transplant", "D. Cycloplegics"],
		answer: 0,
		explanation: "Panretinal photocoagulation reduces ischemic drive and regresses neovascularization.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_dr_005",
		topic: "diabetic-retinopathy",
		year: "FMGE Dec 2020",
		q: "Best preventive strategy for diabetic retinopathy progression is:",
		img: null,
		options: ["A. Routine steroid drops", "B. Tight glycemic and blood pressure control", "C. High-dose vitamin A", "D. Avoiding sunlight"],
		answer: 1,
		explanation: "Good glycemic control, BP control, and periodic retinal screening reduce progression risk.",
		tags: ["PYQ", "high-yield"]
	},


	// ============ BATCH 2: HYPERTENSIVE RETINOPATHY ============
	{
		id: "oph_hr_001",
		topic: "hypertensive-retinopathy",
		year: "FMGE Dec 2019",
		q: "AV nicking on fundoscopy suggests:",
		img: null,
		options: ["A. Diabetic maculopathy", "B. Hypertensive retinopathy", "C. Papilledema", "D. Retinitis pigmentosa"],
		answer: 1,
		explanation: "Arteriolar narrowing and AV nicking are classic hypertensive retinal changes.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_hr_002",
		topic: "hypertensive-retinopathy",
		year: "FMGE Jun 2018",
		q: "Grade IV hypertensive retinopathy includes:",
		img: null,
		options: ["A. AV nicking only", "B. Papilledema", "C. Hard drusen only", "D. Vitreous hemorrhage"],
		answer: 1,
		explanation: "Papilledema indicates malignant hypertension and severe end-organ damage.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_hr_003",
		topic: "hypertensive-retinopathy",
		year: "FMGE Dec 2018",
		q: "Flame-shaped hemorrhages are seen in:",
		img: null,
		options: ["A. Hypertensive retinopathy", "B. Cataract", "C. Keratoconus", "D. Trachoma"],
		answer: 0,
		explanation: "Superficial retinal nerve fiber layer hemorrhages are typically flame-shaped.",
		tags: ["PYQ"]
	},
	{
		id: "oph_hr_004",
		topic: "hypertensive-retinopathy",
		year: "FMGE Jun 2019",
		q: "Copper wiring and silver wiring refer to:",
		img: null,
		options: ["A. Lens opacification", "B. Arteriolar sclerosis in HTN", "C. Vitreous detachment", "D. Corneal edema"],
		answer: 1,
		explanation: "Arteriolar wall thickening in chronic HTN gives copper/silver wiring appearance.",
		tags: ["PYQ"]
	},
	{
		id: "oph_hr_005",
		topic: "hypertensive-retinopathy",
		year: "FMGE Dec 2020",
		q: "Most important management step in hypertensive retinopathy is:",
		img: null,
		options: ["A. Immediate retinal laser", "B. Control systemic blood pressure", "C. Cataract surgery", "D. Vitamin A"],
		answer: 1,
		explanation: "Retinal changes reflect systemic hypertension and improve/stabilize with BP control.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 2: PAPILLEDEMA ============
	{
		id: "oph_pap_001",
		topic: "papilledema",
		year: "FMGE Dec 2019",
		q: "Papilledema is due to:",
		img: null,
		options: ["A. Optic neuritis", "B. Raised intracranial pressure", "C. Retinal artery occlusion", "D. Cataract"],
		answer: 1,
		explanation: "Papilledema specifically means optic disc edema secondary to raised intracranial pressure.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_pap_002",
		topic: "papilledema",
		year: "FMGE Jun 2018",
		q: "Early visual acuity in papilledema is usually:",
		img: null,
		options: ["A. Severely reduced", "B. Relatively preserved", "C. Nil perception of light", "D. Variable with severe pain always"],
		answer: 1,
		explanation: "Visual acuity may remain normal initially, though transient visual obscurations can occur.",
		tags: ["PYQ"]
	},
	{
		id: "oph_pap_003",
		topic: "papilledema",
		year: "FMGE Dec 2018",
		q: "Transient visual obscurations in papilledema are characteristically:",
		img: null,
		options: ["A. Hours long", "B. Seconds long", "C. Permanent", "D. Associated with colored halos only"],
		answer: 1,
		explanation: "Brief episodes of dimming/blackout lasting seconds are typical.",
		tags: ["PYQ"]
	},
	{
		id: "oph_pap_004",
		topic: "papilledema",
		year: "FMGE Jun 2019",
		q: "Papilledema is generally:",
		img: null,
		options: ["A. Unilateral", "B. Bilateral", "C. Always painful unilateral", "D. Associated with hypopyon"],
		answer: 1,
		explanation: "Raised ICP usually causes bilateral disc swelling.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_pap_005",
		topic: "papilledema",
		year: "FMGE Dec 2020",
		q: "Definitive management of papilledema requires:",
		img: null,
		options: ["A. Topical antibiotics", "B. Treating underlying cause of raised ICP", "C. Immediate cataract extraction", "D. Cycloplegic drops"],
		answer: 1,
		explanation: "Papilledema is a sign, so treatment targets the cause of intracranial hypertension.",
		tags: ["PYQ"]
	},

	// ============ BATCH 2: RETINAL DETACHMENT ============
	{
		id: "oph_rd_001",
		topic: "retinal-detachment",
		year: "FMGE Dec 2019",
		q: "Most common type of retinal detachment is:",
		img: null,
		options: ["A. Tractional", "B. Exudative", "C. Rhegmatogenous", "D. Serous idiopathic"],
		answer: 2,
		explanation: "Rhegmatogenous detachment occurs from retinal break allowing vitreous fluid under retina.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_rd_002",
		topic: "retinal-detachment",
		year: "FMGE Jun 2018",
		q: "Typical symptom of retinal detachment is:",
		img: null,
		options: ["A. Colored halos with pain", "B. Flashes, floaters, and curtain-like field defect", "C. Purulent discharge", "D. Diplopia on near work"],
		answer: 1,
		explanation: "Photopsia, sudden floaters, and a descending curtain shadow are classic warning symptoms.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_rd_003",
		topic: "retinal-detachment",
		year: "FMGE Dec 2018",
		q: "Important risk factor for rhegmatogenous retinal detachment is:",
		img: null,
		options: ["A. Hypermetropia", "B. High myopia", "C. Dry eye", "D. Pterygium"],
		answer: 1,
		explanation: "Axial myopia predisposes to peripheral retinal degenerations and tears.",
		tags: ["PYQ"]
	},
	{
		id: "oph_rd_004",
		topic: "retinal-detachment",
		year: "FMGE Jun 2019",
		q: "Definitive treatment of retinal detachment is:",
		img: null,
		options: ["A. Topical steroids", "B. Surgical repair (laser/cryopexy with buckle or vitrectomy)", "C. Oral antibiotics", "D. YAG capsulotomy"],
		answer: 1,
		explanation: "Retinal breaks are sealed and retina reapposed using surgical methods depending on case.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_rd_005",
		topic: "retinal-detachment",
		year: "FMGE Dec 2020",
		q: "Macula-off retinal detachment has:",
		img: null,
		options: ["A. Better visual prognosis than macula-on", "B. Worse visual prognosis than macula-on", "C. No visual impact", "D. Only peripheral field defects"],
		answer: 1,
		explanation: "Prompt intervention before macular involvement gives better final vision.",
		tags: ["PYQ"]
	},


	// ============ BATCH 3: CRAO & CRVO ============
	{
		id: "oph_vas_001",
		topic: "crao-crvo",
		year: "FMGE Dec 2019",
		q: "Fundus finding classically seen in CRAO is:",
		img: null,
		options: ["A. Blood and thunder retina", "B. Cherry-red spot at macula", "C. Drusen", "D. Optic disc cupping"],
		answer: 1,
		explanation: "CRAO causes retinal pallor with preserved foveal choroidal color, producing cherry-red spot.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_vas_002",
		topic: "crao-crvo",
		year: "FMGE Jun 2018",
		q: "Blood and thunder appearance is seen in:",
		img: null,
		options: ["A. CRAO", "B. CRVO", "C. Retinitis pigmentosa", "D. Papilledema"],
		answer: 1,
		explanation: "CRVO shows diffuse retinal hemorrhages, venous tortuosity, edema, and cotton wool spots.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_vas_003",
		topic: "crao-crvo",
		year: "FMGE Dec 2018",
		q: "Most important systemic association in CRAO/CRVO evaluation is:",
		img: null,
		options: ["A. Hypothyroidism", "B. Vascular risk factors (HTN, diabetes, dyslipidemia)", "C. Atopy", "D. Migraine only"],
		answer: 1,
		explanation: "Retinal vascular occlusions require systemic risk evaluation for atherosclerotic and thrombotic causes.",
		tags: ["PYQ"]
	},
	{
		id: "oph_vas_004",
		topic: "crao-crvo",
		year: "FMGE Jun 2019",
		q: "CRAO is considered ophthalmic equivalent of:",
		img: null,
		options: ["A. Migraine aura", "B. Stroke/TIA emergency", "C. Cataract emergency", "D. Glaucoma screening"],
		answer: 1,
		explanation: "CRAO is an acute vascular event requiring urgent stroke workup and management.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_vas_005",
		topic: "crao-crvo",
		year: "FMGE Dec 2020",
		q: "Neovascular glaucoma is a feared complication especially of:",
		img: null,
		options: ["A. Non-ischemic CRVO", "B. Ischemic CRVO", "C. Simple myopia", "D. Pterygium"],
		answer: 1,
		explanation: "Ischemic CRVO can induce anterior segment neovascularization and neovascular glaucoma.",
		tags: ["PYQ"]
	},

	// ============ BATCH 3: RETINITIS PIGMENTOSA ============
	{
		id: "oph_rp_001",
		topic: "retinitis-pigmentosa",
		year: "FMGE Dec 2019",
		q: "Classic triad in retinitis pigmentosa includes all EXCEPT:",
		img: null,
		options: ["A. Bone-spicule pigmentation", "B. Arteriolar attenuation", "C. Waxy disc pallor", "D. Papilledema"],
		answer: 3,
		explanation: "RP triad is bone-spicule pigmentation, narrowed retinal vessels, and waxy optic disc pallor.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_rp_002",
		topic: "retinitis-pigmentosa",
		year: "FMGE Jun 2018",
		q: "Earliest symptom of retinitis pigmentosa is usually:",
		img: null,
		options: ["A. Painful red eye", "B. Night blindness", "C. Sudden complete blindness", "D. Diplopia"],
		answer: 1,
		explanation: "Rod photoreceptor degeneration causes nyctalopia early, followed by progressive peripheral field loss.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_rp_003",
		topic: "retinitis-pigmentosa",
		year: "FMGE Dec 2018",
		q: "Visual field defect typically seen in retinitis pigmentosa is:",
		img: null,
		options: ["A. Central scotoma first", "B. Peripheral constriction (tunnel vision)", "C. Bitemporal hemianopia", "D. Homonymous hemianopia"],
		answer: 1,
		explanation: "Peripheral retinal degeneration produces progressive concentric visual field constriction.",
		tags: ["PYQ"]
	},
	{
		id: "oph_rp_004",
		topic: "retinitis-pigmentosa",
		year: "FMGE Jun 2019",
		q: "Retinitis pigmentosa is primarily a:",
		img: null,
		options: ["A. Acquired infectious disorder", "B. Hereditary retinal dystrophy", "C. Autoimmune uveitis", "D. Vascular occlusion"],
		answer: 1,
		explanation: "RP is a group of inherited retinal dystrophies with variable genetic patterns.",
		tags: ["PYQ"]
	},
	{
		id: "oph_rp_005",
		topic: "retinitis-pigmentosa",
		year: "FMGE Dec 2020",
		q: "Syndromic association with RP includes:",
		img: null,
		options: ["A. Marfan syndrome", "B. Usher syndrome", "C. Cushing syndrome", "D. Turner syndrome"],
		answer: 1,
		explanation: "Usher syndrome combines retinitis pigmentosa with sensorineural hearing loss.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 3: ARMD ============
	{
		id: "oph_armd_001",
		topic: "armd",
		year: "FMGE Dec 2019",
		q: "Most common cause of irreversible central visual loss in elderly is:",
		img: null,
		options: ["A. Cataract", "B. ARMD", "C. Glaucoma", "D. Corneal ulcer"],
		answer: 1,
		explanation: "Age-related macular degeneration is a leading cause of central blindness in older adults.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_armd_002",
		topic: "armd",
		year: "FMGE Jun 2018",
		q: "Drusen are characteristically seen in:",
		img: null,
		options: ["A. ARMD", "B. Papilledema", "C. Optic atrophy", "D. Retinal detachment"],
		answer: 0,
		explanation: "Yellow deposits called drusen between RPE and Bruch membrane are hallmark of dry ARMD.",
		tags: ["PYQ"]
	},
	{
		id: "oph_armd_003",
		topic: "armd",
		year: "FMGE Dec 2018",
		q: "Treatment of neovascular (wet) ARMD includes:",
		img: null,
		options: ["A. Topical antibiotics", "B. Intravitreal anti-VEGF injections", "C. Laser iridotomy", "D. Cataract extraction"],
		answer: 1,
		explanation: "Anti-VEGF therapy is standard care for choroidal neovascularization in wet ARMD.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_armd_004",
		topic: "armd",
		year: "FMGE Jun 2019",
		q: "Amsler grid is used to monitor:",
		img: null,
		options: ["A. Peripheral field constriction", "B. Macular function/metamorphopsia", "C. Color blindness", "D. Ocular motility"],
		answer: 1,
		explanation: "Amsler grid detects central distortion and scotoma from macular pathology.",
		tags: ["PYQ"]
	},
	{
		id: "oph_armd_005",
		topic: "armd",
		year: "FMGE Dec 2020",
		q: "In ARMD, peripheral vision is usually:",
		img: null,
		options: ["A. Lost early", "B. Relatively preserved", "C. Absent in all cases", "D. Always painful"],
		answer: 1,
		explanation: "ARMD primarily affects central macula, so peripheral vision is often maintained.",
		tags: ["PYQ"]
	},


	// ============ BATCH 4: RETINOBLASTOMA ============
	{
		id: "oph_rb_001",
		topic: "retinoblastoma",
		year: "FMGE Dec 2019",
		q: "Most common presenting sign of retinoblastoma is:",
		img: null,
		options: ["A. Painful red eye", "B. Leukocoria", "C. Diplopia", "D. Proptosis in all cases"],
		answer: 1,
		explanation: "Leukocoria (white pupillary reflex) is the most common early presenting sign.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_rb_002",
		topic: "retinoblastoma",
		year: "FMGE Jun 2018",
		q: "Retinoblastoma is associated with mutation in:",
		img: null,
		options: ["A. p53", "B. Rb1 tumor suppressor gene", "C. APC", "D. BRCA1"],
		answer: 1,
		explanation: "Biallelic inactivation of RB1 gene on chromosome 13q14 causes retinoblastoma.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_rb_003",
		topic: "retinoblastoma",
		year: "FMGE Dec 2018",
		q: "Bilateral retinoblastoma generally indicates:",
		img: null,
		options: ["A. Sporadic disease only", "B. Heritable germline mutation", "C. Infective etiology", "D. Benign lesion"],
		answer: 1,
		explanation: "Bilateral/multifocal disease is commonly linked to germline RB1 mutation.",
		tags: ["PYQ"]
	},
	{
		id: "oph_rb_004",
		topic: "retinoblastoma",
		year: "FMGE Jun 2019",
		q: "Most sensitive imaging for calcification in retinoblastoma is:",
		img: null,
		options: ["A. MRI", "B. CT scan", "C. X-ray orbit", "D. Fluorescein angiography"],
		answer: 1,
		explanation: "CT detects intraocular calcification well; MRI is used for optic nerve/extraocular extension assessment.",
		tags: ["PYQ"]
	},
	{
		id: "oph_rb_005",
		topic: "retinoblastoma",
		year: "FMGE Dec 2020",
		q: "Life-threatening spread in retinoblastoma is most associated with invasion of:",
		img: null,
		options: ["A. Cornea", "B. Optic nerve beyond lamina cribrosa", "C. Lens capsule", "D. Conjunctiva"],
		answer: 1,
		explanation: "Post-laminar optic nerve invasion is a major high-risk feature for metastasis.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 4: TRACHOMA ============
	{
		id: "oph_tra_001",
		topic: "trachoma",
		year: "FMGE Dec 2019",
		q: "Causative organism of trachoma is:",
		img: null,
		options: ["A. Chlamydia trachomatis A-C", "B. Neisseria gonorrhoeae", "C. Adenovirus", "D. HSV-1"],
		answer: 0,
		explanation: "Trachoma is caused by Chlamydia trachomatis serovars A, B, Ba, and C.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_tra_002",
		topic: "trachoma",
		year: "FMGE Jun 2018",
		q: "Classical sequela leading to corneal blindness in trachoma is:",
		img: null,
		options: ["A. Entropion and trichiasis", "B. Ectropion", "C. Keratoconus", "D. Cataract"],
		answer: 0,
		explanation: "Scarring causes entropion with lashes rubbing cornea (trichiasis), producing opacity and blindness.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_tra_003",
		topic: "trachoma",
		year: "FMGE Dec 2018",
		q: "WHO strategy for trachoma control is:",
		img: null,
		options: ["A. DOTS", "B. SAFE", "C. IMNCI", "D. RNTCP"],
		answer: 1,
		explanation: "SAFE: Surgery, Antibiotics, Facial cleanliness, Environmental improvement.",
		tags: ["PYQ"]
	},
	{
		id: "oph_tra_004",
		topic: "trachoma",
		year: "FMGE Jun 2019",
		q: "Drug of choice for community trachoma control is:",
		img: null,
		options: ["A. Ciprofloxacin", "B. Azithromycin", "C. Acyclovir", "D. Fluconazole"],
		answer: 1,
		explanation: "Single-dose oral azithromycin is used in mass drug administration for endemic trachoma.",
		tags: ["PYQ"]
	},
	{
		id: "oph_tra_005",
		topic: "trachoma",
		year: "FMGE Dec 2020",
		q: "Herbert pits are seen in:",
		img: null,
		options: ["A. Vernal keratoconjunctivitis", "B. Healed trachoma", "C. Corneal ulcer", "D. Uveitis"],
		answer: 1,
		explanation: "Herbert pits are limbal depressions due to healed trachomatous follicles.",
		tags: ["PYQ"]
	},

	// ============ BATCH 4: CORNEAL ULCER ============
	{
		id: "oph_cu_001",
		topic: "corneal-ulcer",
		year: "FMGE Dec 2019",
		q: "Most common predisposing factor for bacterial corneal ulcer is:",
		img: null,
		options: ["A. Retinal detachment", "B. Corneal trauma", "C. Cataract", "D. Glaucoma"],
		answer: 1,
		explanation: "Corneal epithelial break from trauma is a major risk factor for infectious keratitis.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_cu_002",
		topic: "corneal-ulcer",
		year: "FMGE Jun 2018",
		q: "Corneal scraping is performed primarily for:",
		img: null,
		options: ["A. Reducing IOP", "B. Microbiological diagnosis", "C. Cataract diagnosis", "D. Refraction"],
		answer: 1,
		explanation: "Scraping helps identify organism on smear/culture and guides targeted therapy.",
		tags: ["PYQ"]
	},
	{
		id: "oph_cu_003",
		topic: "corneal-ulcer",
		year: "FMGE Dec 2018",
		q: "Classical fungal corneal ulcer has:",
		img: null,
		options: ["A. Smooth margins and minimal infiltrate", "B. Dry feathery margins with satellite lesions", "C. Clear cornea with no pain", "D. Bullous detachment"],
		answer: 1,
		explanation: "Fungal keratitis often has dry rough surface, feathery edges, and satellite lesions.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_cu_004",
		topic: "corneal-ulcer",
		year: "FMGE Jun 2019",
		q: "Most appropriate initial treatment for severe bacterial corneal ulcer is:",
		img: null,
		options: ["A. Topical steroids alone", "B. Intensive fortified topical antibiotics", "C. Oral antihistamine", "D. Laser iridotomy"],
		answer: 1,
		explanation: "Sight-threatening bacterial keratitis needs frequent broad-spectrum topical antibiotics early.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_cu_005",
		topic: "corneal-ulcer",
		year: "FMGE Dec 2020",
		q: "Hypopyon in corneal ulcer represents:",
		img: null,
		options: ["A. Blood in AC", "B. Pus cells layering in anterior chamber", "C. Lens protein leak", "D. Vitreous hemorrhage"],
		answer: 1,
		explanation: "Hypopyon is inflammatory leukocytic exudate in anterior chamber, seen in severe keratitis/uveitis.",
		tags: ["PYQ"]
	},


	// ============ BATCH 5: REFRACTIVE ERRORS ============
	{
		id: "oph_ref_001",
		topic: "refractive-errors",
		year: "FMGE Dec 2019",
		q: "Most common refractive error worldwide is:",
		img: null,
		options: ["A. Hypermetropia", "B. Myopia", "C. Astigmatism", "D. Presbyopia"],
		answer: 1,
		explanation: "Myopia is the most prevalent refractive error globally, especially in younger populations.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_ref_002",
		topic: "refractive-errors",
		year: "FMGE Jun 2018",
		q: "Hypermetropia is corrected with:",
		img: null,
		options: ["A. Concave lens", "B. Convex lens", "C. Cylindrical minus lens", "D. Prism lens"],
		answer: 1,
		explanation: "Hypermetropia (farsightedness) is corrected by plus-powered convex lenses.",
		tags: ["PYQ"]
	},
	{
		id: "oph_ref_003",
		topic: "refractive-errors",
		year: "FMGE Dec 2018",
		q: "Myopia is corrected by:",
		img: null,
		options: ["A. Convex lens", "B. Concave lens", "C. Bifocal lens only", "D. Cylindrical plus lens"],
		answer: 1,
		explanation: "Myopia is corrected with minus-powered concave lenses to move focus back onto retina.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_ref_004",
		topic: "refractive-errors",
		year: "FMGE Jun 2019",
		q: "Astigmatism is due to:",
		img: null,
		options: ["A. Uniform curvature of cornea", "B. Unequal refractive power in different meridians", "C. Lens opacity", "D. Retinal degeneration"],
		answer: 1,
		explanation: "Astigmatism occurs when corneal/lenticular curvature differs across meridians.",
		tags: ["PYQ"]
	},
	{
		id: "oph_ref_005",
		topic: "refractive-errors",
		year: "FMGE Dec 2020",
		q: "Presbyopia occurs due to:",
		img: null,
		options: ["A. Elongated eyeball", "B. Age-related loss of lens accommodation", "C. Corneal edema", "D. Ciliary spasm"],
		answer: 1,
		explanation: "Presbyopia is physiological decline in accommodation from lens stiffening with age.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 5: CONJUNCTIVITIS ============
	{
		id: "oph_con_001",
		topic: "conjunctivitis",
		year: "FMGE Dec 2019",
		q: "Most common cause of acute conjunctivitis is:",
		img: null,
		options: ["A. Viral", "B. Fungal", "C. Autoimmune", "D. Traumatic"],
		answer: 0,
		explanation: "Viral conjunctivitis, often adenoviral, is a common cause of acute red eye.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_con_002",
		topic: "conjunctivitis",
		year: "FMGE Jun 2018",
		q: "Adenoviral conjunctivitis is characterized by:",
		img: null,
		options: ["A. Purulent discharge only", "B. Watery discharge with preauricular lymphadenopathy", "C. Severe pain with corneal ulcer", "D. Fixed pupil"],
		answer: 1,
		explanation: "Viral conjunctivitis commonly has watery discharge and tender preauricular nodes.",
		tags: ["PYQ"]
	},
	{
		id: "oph_con_003",
		topic: "conjunctivitis",
		year: "FMGE Dec 2018",
		q: "Copious purulent discharge in neonate within first week suggests:",
		img: null,
		options: ["A. Chlamydial conjunctivitis", "B. Gonococcal ophthalmia neonatorum", "C. Allergic conjunctivitis", "D. HSV keratitis"],
		answer: 1,
		explanation: "Neisseria gonorrhoeae causes severe hyperacute neonatal conjunctivitis and is an emergency.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_con_004",
		topic: "conjunctivitis",
		year: "FMGE Jun 2019",
		q: "Intense itching is most suggestive of:",
		img: null,
		options: ["A. Allergic conjunctivitis", "B. Bacterial conjunctivitis", "C. Viral conjunctivitis", "D. Uveitis"],
		answer: 0,
		explanation: "Itching is the hallmark symptom in allergic conjunctivitis.",
		tags: ["PYQ"]
	},
	{
		id: "oph_con_005",
		topic: "conjunctivitis",
		year: "FMGE Dec 2020",
		q: "Pseudomembrane formation in conjunctivitis is classically seen in:",
		img: null,
		options: ["A. Adenoviral conjunctivitis", "B. Simple dry eye", "C. Cataract", "D. Refractive error"],
		answer: 0,
		explanation: "Severe adenoviral infection (EKC) can produce membranes/pseudomembranes.",
		tags: ["PYQ"]
	},

	// ============ BATCH 5: PTERYGIUM ============
	{
		id: "oph_pte_001",
		topic: "pterygium",
		year: "FMGE Dec 2019",
		q: "Pterygium is a:",
		img: null,
		options: ["A. Conjunctival fibrovascular growth onto cornea", "B. Corneal ulcer", "C. Lens opacity", "D. Retinal vascular lesion"],
		answer: 0,
		explanation: "Pterygium is triangular fibrovascular conjunctival overgrowth crossing limbus onto cornea.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_pte_002",
		topic: "pterygium",
		year: "FMGE Jun 2018",
		q: "Most common location of pterygium is:",
		img: null,
		options: ["A. Temporal side", "B. Nasal side", "C. Inferior limbus", "D. Superior limbus"],
		answer: 1,
		explanation: "Pterygium most commonly arises nasally in the interpalpebral fissure region.",
		tags: ["PYQ"]
	},
	{
		id: "oph_pte_003",
		topic: "pterygium",
		year: "FMGE Dec 2018",
		q: "Main environmental risk factor for pterygium is:",
		img: null,
		options: ["A. Cold weather", "B. UV light exposure", "C. Night reading", "D. Diabetes"],
		answer: 1,
		explanation: "Chronic ultraviolet exposure and dust/wind are major risk factors.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_pte_004",
		topic: "pterygium",
		year: "FMGE Jun 2019",
		q: "Definitive treatment for progressive pterygium threatening visual axis is:",
		img: null,
		options: ["A. Lubricants only", "B. Surgical excision with conjunctival autograft", "C. Laser iridotomy", "D. Intravitreal injection"],
		answer: 1,
		explanation: "Excision with conjunctival autograft reduces recurrence compared with bare sclera method.",
		tags: ["PYQ"]
	},
	{
		id: "oph_pte_005",
		topic: "pterygium",
		year: "FMGE Dec 2020",
		q: "Pseudopterygium differs from true pterygium because it:",
		img: null,
		options: ["A. Always nasal", "B. Is adherent only at apex and can occur anywhere after inflammation/trauma", "C. Contains lens material", "D. Causes glaucoma"],
		answer: 1,
		explanation: "Pseudopterygium is secondary adhesion after injury/inflammation and is not true progressive degenerative pterygium.",
		tags: ["PYQ"]
	},


	// ============ BATCH 6: SQUINT / STRABISMUS ============
	{
		id: "oph_sq_001",
		topic: "squint",
		year: "FMGE Dec 2019",
		q: "Most common type of squint in children is:",
		img: null,
		options: ["A. Exotropia", "B. Esotropia", "C. Hypertropia", "D. Cyclotropia"],
		answer: 1,
		explanation: "Convergent squint (esotropia) is common in childhood, often related to refractive/accommodative factors.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_sq_002",
		topic: "squint",
		year: "FMGE Jun 2018",
		q: "Test used to differentiate latent from manifest squint is:",
		img: null,
		options: ["A. Schirmer test", "B. Cover-uncover test", "C. Amsler grid", "D. Ishihara chart"],
		answer: 1,
		explanation: "Cover tests are standard for detecting tropia/phoria and assessing ocular alignment.",
		tags: ["PYQ"]
	},
	{
		id: "oph_sq_003",
		topic: "squint",
		year: "FMGE Dec 2018",
		q: "Untreated childhood squint may lead to:",
		img: null,
		options: ["A. Glaucoma", "B. Amblyopia", "C. Cataract", "D. Uveitis"],
		answer: 1,
		explanation: "Suppression of deviating eye in visual development period causes amblyopia if untreated.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_sq_004",
		topic: "squint",
		year: "FMGE Jun 2019",
		q: "Paralytic squint is commonly associated with:",
		img: null,
		options: ["A. No diplopia", "B. Diplopia and limitation of ocular movements", "C. Equal vision both eyes always", "D. Corneal opacity"],
		answer: 1,
		explanation: "Paralytic squint has incomitant deviation with movement restriction and symptomatic diplopia.",
		tags: ["PYQ"]
	},
	{
		id: "oph_sq_005",
		topic: "squint",
		year: "FMGE Dec 2020",
		q: "Initial management of accommodative esotropia includes:",
		img: null,
		options: ["A. Immediate surgery", "B. Full cycloplegic refractive correction", "C. Topical antibiotics", "D. Intravitreal anti-VEGF"],
		answer: 1,
		explanation: "Correcting hypermetropia often aligns eyes in accommodative esotropia.",
		tags: ["PYQ"]
	},

	// ============ BATCH 6: PUPILLARY ABNORMALITIES ============
	{
		id: "oph_pup_001",
		topic: "pupillary-abnormalities",
		year: "FMGE Dec 2019",
		q: "Relative afferent pupillary defect (RAPD) indicates lesion in:",
		img: null,
		options: ["A. Oculomotor nerve only", "B. Optic nerve or severe retinal disease", "C. Sympathetic chain only", "D. Ciliary body"],
		answer: 1,
		explanation: "RAPD (Marcus Gunn pupil) indicates asymmetric afferent pathway damage.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_pup_002",
		topic: "pupillary-abnormalities",
		year: "FMGE Jun 2018",
		q: "Argyll Robertson pupil is classically seen in:",
		img: null,
		options: ["A. Diabetes", "B. Neurosyphilis", "C. Acute glaucoma", "D. Optic neuritis"],
		answer: 1,
		explanation: "Argyll Robertson pupil accommodates but does not react to light (light-near dissociation), classically in neurosyphilis.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_pup_003",
		topic: "pupillary-abnormalities",
		year: "FMGE Dec 2018",
		q: "Horner syndrome presents with:",
		img: null,
		options: ["A. Mydriasis, ptosis, anhidrosis", "B. Miosis, mild ptosis, anhidrosis", "C. Fixed dilated pupil with ophthalmoplegia", "D. Bilateral proptosis"],
		answer: 1,
		explanation: "Interruption of sympathetic pathway causes classic Horner triad.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_pup_004",
		topic: "pupillary-abnormalities",
		year: "FMGE Jun 2019",
		q: "A painful third nerve palsy with pupil involvement should raise suspicion of:",
		img: null,
		options: ["A. Microvascular ischemia", "B. Posterior communicating artery aneurysm", "C. Myasthenia gravis", "D. Refractive error"],
		answer: 1,
		explanation: "Pupil-involving painful CN III palsy is a neurosurgical emergency for possible compressive aneurysm.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_pup_005",
		topic: "pupillary-abnormalities",
		year: "FMGE Dec 2020",
		q: "Pharmacologic mydriasis is commonly produced by:",
		img: null,
		options: ["A. Pilocarpine", "B. Tropicamide", "C. Timolol", "D. Acetazolamide"],
		answer: 1,
		explanation: "Tropicamide is an antimuscarinic mydriatic used for fundus examination.",
		tags: ["PYQ"]
	},

	// ============ BATCH 6: KERATOCONUS ============
	{
		id: "oph_ker_001",
		topic: "keratoconus",
		year: "FMGE Dec 2019",
		q: "Keratoconus is characterized by:",
		img: null,
		options: ["A. Flat cornea", "B. Progressive corneal thinning with conical protrusion", "C. Lens displacement", "D. Retinal hole"],
		answer: 1,
		explanation: "Keratoconus causes irregular astigmatism from ectatic cone-shaped corneal deformation.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_ker_002",
		topic: "keratoconus",
		year: "FMGE Jun 2018",
		q: "Most sensitive investigation for early keratoconus is:",
		img: null,
		options: ["A. Fundoscopy", "B. Corneal topography/tomography", "C. Schirmer test", "D. Gonioscopy"],
		answer: 1,
		explanation: "Topography detects subtle corneal curvature asymmetry and is key for early diagnosis.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_ker_003",
		topic: "keratoconus",
		year: "FMGE Dec 2018",
		q: "Definitive method to halt progression of keratoconus is:",
		img: null,
		options: ["A. Topical antibiotics", "B. Corneal collagen cross-linking", "C. YAG laser", "D. Trabeculectomy"],
		answer: 1,
		explanation: "CXL strengthens corneal collagen and reduces disease progression.",
		tags: ["PYQ"]
	},
	{
		id: "oph_ker_004",
		topic: "keratoconus",
		year: "FMGE Jun 2019",
		q: "Acute hydrops in keratoconus occurs due to:",
		img: null,
		options: ["A. Lens rupture", "B. Break in Descemet membrane", "C. Retinal tear", "D. Angle closure"],
		answer: 1,
		explanation: "Tear in Descemet membrane allows aqueous into stroma causing sudden corneal edema.",
		tags: ["PYQ"]
	},
	{
		id: "oph_ker_005",
		topic: "keratoconus",
		year: "FMGE Dec 2020",
		q: "Common association with keratoconus is:",
		img: null,
		options: ["A. Rheumatic fever", "B. Atopy and eye rubbing", "C. Hyperthyroidism", "D. Psoriasis"],
		answer: 1,
		explanation: "Atopy and chronic eye rubbing are common associations and risk factors.",
		tags: ["PYQ", "high-yield"]
	},


	// ============ BATCH 7: KAYSER-FLEISCHER RING ============
	{
		id: "oph_kf_001",
		topic: "kayser-fleischer-ring",
		year: "FMGE Dec 2019",
		q: "Kayser-Fleischer ring is due to copper deposition in:",
		img: null,
		options: ["A. Lens nucleus", "B. Descemet membrane", "C. Retina", "D. Ciliary body"],
		answer: 1,
		explanation: "Copper deposits at Descemet membrane in Wilson disease causing brownish peripheral ring.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_kf_002",
		topic: "kayser-fleischer-ring",
		year: "FMGE Jun 2018",
		q: "Best bedside instrument to detect KF ring is:",
		img: null,
		options: ["A. Direct ophthalmoscope", "B. Slit-lamp biomicroscope", "C. Retinoscope", "D. Tonometer"],
		answer: 1,
		explanation: "Slit-lamp examination is standard for identifying subtle peripheral corneal KF rings.",
		tags: ["PYQ"]
	},
	{
		id: "oph_kf_003",
		topic: "kayser-fleischer-ring",
		year: "FMGE Dec 2018",
		q: "KF ring is strongly associated with:",
		img: null,
		options: ["A. Hemochromatosis", "B. Wilson disease", "C. Albinism", "D. Marfan syndrome"],
		answer: 1,
		explanation: "Wilson disease (ATP7B mutation) causes copper accumulation in liver, brain, and cornea.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_kf_004",
		topic: "kayser-fleischer-ring",
		year: "FMGE Jun 2019",
		q: "Most useful biochemical marker in Wilson disease workup is:",
		img: null,
		options: ["A. Increased serum ceruloplasmin", "B. Decreased serum ceruloplasmin", "C. Elevated serum iron", "D. Raised ferritin only"],
		answer: 1,
		explanation: "Wilson disease commonly has low ceruloplasmin and increased urinary copper excretion.",
		tags: ["PYQ"]
	},

	// ============ BATCH 7: LID DISORDERS ============
	{
		id: "oph_lid_001",
		topic: "lid-disorders",
		year: "FMGE Dec 2019",
		q: "Congenital ptosis is due to poor function of:",
		img: null,
		options: ["A. Orbicularis oculi", "B. Levator palpebrae superioris", "C. Superior rectus", "D. Medial rectus"],
		answer: 1,
		explanation: "Most congenital ptosis is due to dysgenesis of levator palpebrae superioris.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_lid_002",
		topic: "lid-disorders",
		year: "FMGE Jun 2018",
		q: "Horner syndrome causes ptosis due to paralysis of:",
		img: null,
		options: ["A. Levator palpebrae superioris", "B. Muller's muscle", "C. Orbicularis oculi", "D. Superior tarsal gland"],
		answer: 1,
		explanation: "Sympathetic denervation weakens Muller's muscle causing mild ptosis.",
		tags: ["PYQ"]
	},
	{
		id: "oph_lid_003",
		topic: "lid-disorders",
		year: "FMGE Dec 2018",
		q: "Entropion is:",
		img: null,
		options: ["A. Outward turning of eyelid margin", "B. Inward turning of eyelid margin", "C. Lid drooping", "D. Lid retraction"],
		answer: 1,
		explanation: "Inward rolling of lid causes lashes to rub cornea and can lead to keratopathy.",
		tags: ["PYQ"]
	},
	{
		id: "oph_lid_004",
		topic: "lid-disorders",
		year: "FMGE Jun 2019",
		q: "Most common cause of acquired ptosis in adults is:",
		img: null,
		options: ["A. Neurogenic only", "B. Aponeurotic dehiscence", "C. Trauma only", "D. Tumor only"],
		answer: 1,
		explanation: "Involutional/aponeurotic ptosis from levator aponeurosis dehiscence is common in older adults.",
		tags: ["PYQ"]
	},
	{
		id: "oph_lid_005",
		topic: "lid-disorders",
		year: "FMGE Dec 2020",
		q: "Ectropion predisposes to:",
		img: null,
		options: ["A. Lacrimal drainage obstruction with epiphora", "B. Angle closure glaucoma", "C. Retinal detachment", "D. Cataract"],
		answer: 0,
		explanation: "Eversion of lid margin can cause punctal malposition, tearing, and exposure symptoms.",
		tags: ["PYQ"]
	},

	// ============ BATCH 7: OPTIC ATROPHY ============
	{
		id: "oph_oa_001",
		topic: "optic-atrophy",
		year: "FMGE Dec 2019",
		q: "Optic atrophy is characterized by:",
		img: null,
		options: ["A. Disc edema", "B. Pallor of optic disc", "C. Retinal hemorrhage only", "D. Corneal opacity"],
		answer: 1,
		explanation: "Optic atrophy reflects axonal loss in optic nerve and appears as optic disc pallor.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_oa_002",
		topic: "optic-atrophy",
		year: "FMGE Jun 2018",
		q: "Most common cause of secondary optic atrophy is:",
		img: null,
		options: ["A. High myopia", "B. Previous papilledema/optic neuritis", "C. Pterygium", "D. Conjunctivitis"],
		answer: 1,
		explanation: "Secondary optic atrophy follows previous optic disc swelling or inflammation.",
		tags: ["PYQ"]
	},
	{
		id: "oph_oa_003",
		topic: "optic-atrophy",
		year: "FMGE Dec 2018",
		q: "Afferent pupillary defect is commonly seen in:",
		img: null,
		options: ["A. Corneal abrasion", "B. Optic neuropathy", "C. Cataract", "D. Entropion"],
		answer: 1,
		explanation: "RAPD is associated with unilateral/asymmetric optic nerve or severe retinal disease.",
		tags: ["PYQ"]
	},
	{
		id: "oph_oa_004",
		topic: "optic-atrophy",
		year: "FMGE Jun 2019",
		q: "Visual field in optic atrophy may show:",
		img: null,
		options: ["A. Variable defects depending on etiology", "B. Always normal", "C. Only peripheral field loss", "D. No light perception in all cases"],
		answer: 0,
		explanation: "Field defects depend on site/cause, including central scotoma, altitudinal, or generalized depression.",
		tags: ["PYQ"]
	},


	// ============ BATCH 8 (FINAL): DACRYOCYSTITIS ============
	{
		id: "oph_dac_001",
		topic: "dacryocystitis",
		year: "FMGE Dec 2019",
		q: "Most common cause of chronic dacryocystitis is:",
		img: null,
		options: ["A. Corneal ulcer", "B. Nasolacrimal duct obstruction", "C. Glaucoma", "D. Uveitis"],
		answer: 1,
		explanation: "Chronic tear stasis from nasolacrimal duct obstruction predisposes to lacrimal sac infection.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_dac_002",
		topic: "dacryocystitis",
		year: "FMGE Jun 2018",
		q: "Regurgitation test positive in dacryocystitis shows:",
		img: null,
		options: ["A. Blood from canaliculi", "B. Mucopus from punctum on sac pressure", "C. Aqueous leak from cornea", "D. Vitreous reflux"],
		answer: 1,
		explanation: "Pressure over lacrimal sac causes reflux of mucopurulent discharge through puncta.",
		tags: ["PYQ"]
	},
	{
		id: "oph_dac_003",
		topic: "dacryocystitis",
		year: "FMGE Dec 2018",
		q: "Definitive treatment for chronic dacryocystitis is:",
		img: null,
		options: ["A. Long-term antibiotics", "B. Dacryocystorhinostomy (DCR)", "C. Corneal transplant", "D. Trabeculectomy"],
		answer: 1,
		explanation: "DCR creates alternative drainage between lacrimal sac and nasal cavity.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 8 (FINAL): ORBITAL CELLULITIS ============
	{
		id: "oph_orb_001",
		topic: "orbital-cellulitis",
		year: "FMGE Dec 2019",
		q: "Most common source of orbital cellulitis is:",
		img: null,
		options: ["A. Otitis externa", "B. Ethmoidal sinusitis", "C. Cataract surgery", "D. Dry eye"],
		answer: 1,
		explanation: "Ethmoid sinus infection commonly spreads to orbit due to thin lamina papyracea.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_orb_002",
		topic: "orbital-cellulitis",
		year: "FMGE Jun 2018",
		q: "Feature suggesting orbital (not preseptal) cellulitis is:",
		img: null,
		options: ["A. Mild lid edema only", "B. Painful restricted eye movements/proptosis", "C. Conjunctival itching", "D. Epiphora only"],
		answer: 1,
		explanation: "Ophthalmoplegia, pain on movement, proptosis, and visual compromise suggest postseptal spread.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_orb_003",
		topic: "orbital-cellulitis",
		year: "FMGE Dec 2018",
		q: "Initial management of orbital cellulitis includes:",
		img: null,
		options: ["A. Oral antihistamines", "B. Urgent IV broad-spectrum antibiotics", "C. Topical lubricants only", "D. Laser iridotomy"],
		answer: 1,
		explanation: "Orbital cellulitis is an emergency requiring IV antibiotics and imaging for abscess evaluation.",
		tags: ["PYQ"]
	},

	// ============ BATCH 8 (FINAL): NYSTAGMUS ============
	{
		id: "oph_nys_001",
		topic: "nystagmus",
		year: "FMGE Dec 2019",
		q: "Nystagmus is defined as:",
		img: null,
		options: ["A. Eyelid twitching", "B. Involuntary rhythmic oscillation of eyes", "C. Fixed gaze palsy", "D. Squint only"],
		answer: 1,
		explanation: "Nystagmus consists of involuntary rhythmic to-and-fro eye movements, physiologic or pathologic.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "oph_nys_002",
		topic: "nystagmus",
		year: "FMGE Jun 2018",
		q: "Fast phase direction determines naming of:",
		img: null,
		options: ["A. Pendular nystagmus", "B. Jerk nystagmus", "C. Congenital nystagmus only", "D. Latent nystagmus only"],
		answer: 1,
		explanation: "Jerk nystagmus is named by fast corrective phase direction (e.g., right-beating).",
		tags: ["PYQ"]
	},
	{
		id: "oph_nys_003",
		topic: "nystagmus",
		year: "FMGE Dec 2018",
		q: "Peripheral vestibular nystagmus is typically:",
		img: null,
		options: ["A. Pure vertical", "B. Horizontal/rotatory and suppressed by fixation", "C. Direction-changing with gaze", "D. Always central in origin"],
		answer: 1,
		explanation: "Peripheral vestibular nystagmus is usually unidirectional and may reduce with visual fixation.",
		tags: ["PYQ"]
	},

        // ---- top-up: dacryocystitis +2 ----
        {
                id: "oph_dac_004",
                topic: "dacryocystitis",
                year: "FMGE Jun 2019",
                q: "Definitive treatment for chronic dacryocystitis is:",
                img: null,
                options: ["A. Prolonged antibiotic drops", "B. Dacryocystorhinostomy (DCR)", "C. Probing and syringing alone", "D. Enucleation"],
                answer: 1,
                explanation: "DCR creates a new drainage passage from the lacrimal sac to the nasal mucosa and is the definitive cure.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_dac_005",
                topic: "dacryocystitis",
                year: "FMGE Dec 2020",
                q: "In acute dacryocystitis, the initial treatment is:",
                img: null,
                options: ["A. Immediate DCR", "B. Systemic antibiotics; incision & drainage if abscess forms", "C. Steroid eye drops", "D. Corneal transplant"],
                answer: 1,
                explanation: "Acute dacryocystitis: IV/oral antibiotics first; DCR is performed electively after the acute episode resolves.",
                tags: ["PYQ", "high-yield"]
        },

        // ---- top-up: nystagmus +2 ----
        {
                id: "oph_nys_004",
                topic: "nystagmus",
                year: "FMGE Jun 2019",
                q: "Congenital nystagmus typically:",
                img: null,
                options: ["A. Has a null point (position of gaze where nystagmus minimises)", "B. Is always vertical", "C. Presents with oscillopsia", "D. Is always due to cerebellar disease"],
                answer: 0,
                explanation: "Congenital nystagmus has a null point where amplitude is least; patients adopt a head turn/tilt to minimise nystagmus.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_nys_005",
                topic: "nystagmus",
                year: "FMGE Dec 2020",
                q: "Down-beat nystagmus is characteristic of a lesion at the:",
                img: null,
                options: ["A. Cerebral cortex", "B. Cervicomedullary junction / foramen magnum region", "C. Retina", "D. Lens"],
                answer: 1,
                explanation: "Downbeat nystagmus localises to the cervicomedullary junction; causes include Arnold-Chiari malformation and foramen magnum lesions.",
                tags: ["PYQ", "high-yield"]
        },

        // ---- top-up: orbital-cellulitis +2 ----
        {
                id: "oph_orb_004",
                topic: "orbital-cellulitis",
                year: "FMGE Jun 2019",
                q: "Most common source of orbital cellulitis in children is:",
                img: null,
                options: ["A. Dental abscess", "B. Paranasal sinusitis (especially ethmoid sinusitis)", "C. Conjunctivitis", "D. Dacryocystitis"],
                answer: 1,
                explanation: "Ethmoid sinusitis is the most common cause of orbital cellulitis in children due to thin lamina papyracea.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_orb_005",
                topic: "orbital-cellulitis",
                year: "FMGE Dec 2020",
                q: "Distinguishing feature of post-septal (orbital) cellulitis from pre-septal (periorbital) cellulitis is:",
                img: null,
                options: ["A. Lid swelling", "B. Proptosis, painful/restricted eye movements, visual impairment", "C. Conjunctival injection", "D. Fever"],
                answer: 1,
                explanation: "Post-septal: proptosis + ophthalmoplegia + visual loss due to true orbital involvement; requires IV antibiotics and urgent CT.",
                tags: ["PYQ", "high-yield"]
        },

        // ---- top-up: kayser-fleischer-ring +1 ----
        {
                id: "oph_kf_005",
                topic: "kayser-fleischer-ring",
                year: "FMGE Jun 2019",
                q: "Kayser-Fleischer ring is best seen by:",
                img: null,
                options: ["A. Direct ophthalmoscopy", "B. Slit-lamp examination", "C. Visual field testing", "D. Fundus fluorescein angiography"],
                answer: 1,
                explanation: "K-F rings are golden-brown copper deposits at the periphery of Descemet's membrane, best visualised on slit-lamp biomicroscopy.",
                tags: ["PYQ", "high-yield"]
        },

        // ---- top-up: optic-atrophy +1 ----
        {
                id: "oph_oa_005",
                topic: "optic-atrophy",
                year: "FMGE Jun 2019",
                q: "Primary optic atrophy on funduscopy shows:",
                img: null,
                options: ["A. Blurred disc margins", "B. Chalk-white disc with sharp margins and visible lamina cribrosa", "C. Cupped disc with notching", "D. Hyperaemic disc"],
                answer: 1,
                explanation: "Primary optic atrophy: pale/chalk-white disc, sharp margins, visible lamina cribrosa (no preceding disc oedema).",
                tags: ["PYQ", "high-yield"]
        },


        {
                id: "oph_armd_006",
                topic: "armd",
                year: "FMGE Dec 2022",
                q: "Age-related macular degeneration most commonly affects:",
                img: null,
                options: ["A. Peripheral retina", "B. Central macula", "C. Optic disc", "D. Iris"],
                answer: 1,
                explanation: "ARMD affects the macula causing central visual loss while peripheral vision is preserved.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_armd_007",
                topic: "armd",
                year: "FMGE Jun 2022",
                q: "Wet (exudative) ARMD is characterised by:",
                img: null,
                options: ["A. Choroidal neovascularisation", "B. Drusen only without neovascularisation", "C. Peripheral pigmentary changes", "D. Cataract formation"],
                answer: 0,
                explanation: "Wet ARMD involves abnormal choroidal new vessels that leak fluid and blood, causing rapid central vision loss.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_armd_008",
                topic: "armd",
                year: "FMGE Dec 2021",
                q: "Amsler grid is used to monitor:",
                img: null,
                options: ["A. Central visual distortion in macular disease", "B. Peripheral visual field defects", "C. Intraocular pressure", "D. Colour vision only"],
                answer: 0,
                explanation: "Amsler grid detects metamorphopsia and central scotomas in macular disorders including ARMD.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_armd_009",
                topic: "armd",
                year: "FMGE Jun 2021",
                q: "Treatment for wet ARMD involves intravitreal injections of:",
                img: null,
                options: ["A. Anti-VEGF agents (e.g., ranibizumab, bevacizumab)", "B. Corticosteroids only", "C. Antibiotics", "D. Atropine"],
                answer: 0,
                explanation: "Anti-VEGF therapy reduces neovascularisation and fluid leakage, helping preserve or improve vision in wet ARMD.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_armd_010",
                topic: "armd",
                year: "FMGE Dec 2020",
                q: "Drusen in ARMD are deposits located at the level of:",
                img: null,
                options: ["A. Bruch's membrane / RPE", "B. Inner nuclear layer", "C. Vitreous", "D. Corneal stroma"],
                answer: 0,
                explanation: "Drusen are accumulations of extracellular material beneath the retinal pigment epithelium at Bruch's membrane.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "oph_cat_006",
                topic: "cataract",
                year: "FMGE Dec 2022",
                q: "Most common type of age-related cataract is:",
                img: null,
                options: ["A. Anterior subcapsular", "B. Nuclear sclerotic cataract", "C. Posterior subcapsular", "D. Cortical spoking only"],
                answer: 1,
                explanation: "Nuclear sclerotic cataract is the most common age-related type, causing progressive hardening and yellowing of the lens nucleus.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_cat_007",
                topic: "cataract",
                year: "FMGE Jun 2022",
                q: "Posterior subcapsular cataract is characteristically seen in:",
                img: null,
                options: ["A. Long-term steroid use and diabetics", "B. Newborns only", "C. Traumatic injury to cornea", "D. Normal ageing only"],
                answer: 0,
                explanation: "PSC is strongly associated with corticosteroid use, diabetes, and radiation, and causes early glare symptoms.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_cat_008",
                topic: "cataract",
                year: "FMGE Dec 2021",
                q: "Congenital cataract that requires urgent surgery to prevent amblyopia is:",
                img: null,
                options: ["A. Dense unilateral total cataract", "B. Small dot peripheral opacity", "C. Sutural cataract only", "D. Oil droplet cataract"],
                answer: 0,
                explanation: "Dense unilateral congenital cataract causes deprivation amblyopia and requires prompt surgical intervention and occlusion therapy.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_cat_009",
                topic: "cataract",
                year: "FMGE Jun 2021",
                q: "Current gold-standard surgical technique for cataract removal is:",
                img: null,
                options: ["A. Phacoemulsification", "B. ICCE (intracapsular cataract extraction)", "C. Needling", "D. Couching"],
                answer: 0,
                explanation: "Phacoemulsification with foldable IOL implantation is the standard modern technique for cataract surgery.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_cat_010",
                topic: "cataract",
                year: "FMGE Dec 2020",
                q: "Christmas-tree cataract is associated with:",
                img: null,
                options: ["A. Myotonic dystrophy", "B. Down syndrome", "C. Wilson disease", "D. Marfan syndrome"],
                answer: 0,
                explanation: "Polychromatic Christmas-tree opacities are a classic feature of myotonic dystrophy cataracts.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "oph_con_006",
                topic: "conjunctivitis",
                year: "FMGE Dec 2022",
                q: "Most common causative agent of neonatal conjunctivitis (ophthalmia neonatorum) in developing countries is:",
                img: null,
                options: ["A. Neisseria gonorrhoeae", "B. CMV", "C. HSV", "D. Adenovirus"],
                answer: 0,
                explanation: "Gonococcal ophthalmia neonatorum presents in the first 2-5 days and can cause corneal ulceration if untreated.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_con_007",
                topic: "conjunctivitis",
                year: "FMGE Jun 2022",
                q: "Follicular reaction on palpebral conjunctiva is characteristically seen in:",
                img: null,
                options: ["A. Viral conjunctivitis and trachoma", "B. Allergic conjunctivitis", "C. Bacterial conjunctivitis only", "D. Chlamydial conjunctivitis never"],
                answer: 0,
                explanation: "Follicles (lymphoid aggregates) are seen in viral, chlamydial (trachoma), and toxic conjunctivitis.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_con_008",
                topic: "conjunctivitis",
                year: "FMGE Dec 2021",
                q: "Allergic conjunctivitis classically presents with:",
                img: null,
                options: ["A. Intense itching with papillary reaction", "B. Purulent discharge with membrane", "C. Corneal ulcer", "D. Subconjunctival haemorrhage"],
                answer: 0,
                explanation: "IgE-mediated allergic conjunctivitis causes itching, papillary hypertrophy, and watery discharge.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_con_009",
                topic: "conjunctivitis",
                year: "FMGE Jun 2021",
                q: "Membrane formation on conjunctiva is a feature of:",
                img: null,
                options: ["A. Gonococcal or diphtheria conjunctivitis", "B. Adenoviral conjunctivitis", "C. Spring catarrh only", "D. Viral hemorrhagic conjunctivitis"],
                answer: 0,
                explanation: "True membranes are seen in diphtheria (Corynebacterium) and gonococcal conjunctivitis.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_con_010",
                topic: "conjunctivitis",
                year: "FMGE Dec 2020",
                q: "Epidemic keratoconjunctivitis (EKC) is most commonly caused by:",
                img: null,
                options: ["A. Adenovirus", "B. Herpes simplex virus", "C. Chlamydia", "D. Staphylococcus"],
                answer: 0,
                explanation: "Adenovirus (especially serotypes 8 and 19) causes epidemic keratoconjunctivitis.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "oph_cu_006",
                topic: "corneal-ulcer",
                year: "FMGE Dec 2022",
                q: "Dendritic corneal ulcer is pathognomonic of:",
                img: null,
                options: ["A. Herpes simplex keratitis", "B. Bacterial ulcer", "C. Fungal ulcer", "D. Acanthamoeba keratitis"],
                answer: 0,
                explanation: "Dendritic branching ulcer with terminal bulbs on fluorescein staining is characteristic of HSV keratitis.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_cu_007",
                topic: "corneal-ulcer",
                year: "FMGE Jun 2022",
                q: "Hypopyon in a corneal ulcer indicates:",
                img: null,
                options: ["A. Severe inflammation with anterior chamber pus", "B. Vitreous detachment", "C. Retinal detachment", "D. Optic nerve involvement"],
                answer: 0,
                explanation: "Hypopyon is a sterile or infected collection of white cells in the anterior chamber in severe corneal ulcers.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_cu_008",
                topic: "corneal-ulcer",
                year: "FMGE Dec 2021",
                q: "Acanthamoeba keratitis is strongly associated with:",
                img: null,
                options: ["A. Contact lens use with contaminated water", "B. Steroid use alone", "C. Vitamin A deficiency", "D. Trachoma"],
                answer: 0,
                explanation: "Acanthamoeba keratitis is linked to poor contact lens hygiene and exposure to fresh/tap water.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_cu_009",
                topic: "corneal-ulcer",
                year: "FMGE Jun 2021",
                q: "Drug of choice for herpes simplex keratitis is:",
                img: null,
                options: ["A. Topical acyclovir", "B. Topical steroids alone", "C. Topical antifungals", "D. Topical antibiotics alone"],
                answer: 0,
                explanation: "Topical acyclovir (or other antivirals) is first-line for HSV epithelial keratitis; steroids are contraindicated in active disease.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_cu_010",
                topic: "corneal-ulcer",
                year: "FMGE Dec 2020",
                q: "Corneal ulcer due to Vitamin A deficiency is called:",
                img: null,
                options: ["A. Keratomalacia", "B. Interstitial keratitis", "C. Neuroparalytic keratitis", "D. Phlyctenular keratitis"],
                answer: 0,
                explanation: "Keratomalacia is colliquative necrosis of the cornea due to severe Vitamin A deficiency.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "oph_vas_006",
                topic: "crao-crvo",
                year: "FMGE Dec 2022",
                q: "Central retinal artery occlusion (CRAO) classically presents with:",
                img: null,
                options: ["A. Sudden painless severe visual loss", "B. Gradual onset over weeks", "C. Painful red eye only", "D. Progressive field loss only"],
                answer: 0,
                explanation: "CRAO causes sudden, profound, painless visual loss due to cessation of retinal arterial blood supply.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_vas_007",
                topic: "crao-crvo",
                year: "FMGE Jun 2022",
                q: "Cherry-red spot at macula is seen in:",
                img: null,
                options: ["A. CRAO", "B. CRVO", "C. Diabetic retinopathy", "D. ARMD"],
                answer: 0,
                explanation: "In CRAO, the opaque infarcted retina contrasts with the intact foveal circulation giving a cherry-red spot.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_vas_008",
                topic: "crao-crvo",
                year: "FMGE Dec 2021",
                q: "Fundus appearance in CRVO shows:",
                img: null,
                options: ["A. Flame haemorrhages in all quadrants and disc oedema", "B. Cherry-red spot only", "C. Hard exudates only", "D. Cotton wool spots only"],
                answer: 0,
                explanation: "CRVO causes venous engorgement, flame haemorrhages in all 4 quadrants, disc oedema and dilated tortuous veins.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_vas_009",
                topic: "crao-crvo",
                year: "FMGE Jun 2021",
                q: "Most important risk factor for CRAO is:",
                img: null,
                options: ["A. Atherosclerosis and hypertension", "B. Vitamin deficiency", "C. Myopia only", "D. Conjunctivitis"],
                answer: 0,
                explanation: "Atherosclerotic emboli from carotid artery disease and hypertension are leading causes of CRAO.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_vas_010",
                topic: "crao-crvo",
                year: "FMGE Dec 2020",
                q: "Rubeosis iridis (neovascularisation of iris) is a late complication of:",
                img: null,
                options: ["A. CRVO and diabetic retinopathy", "B. ARMD only", "C. Cataract", "D. Presbyopia"],
                answer: 0,
                explanation: "Ischaemia in CRVO and PDR stimulates VEGF, causing iris neovascularisation and risk of neovascular glaucoma.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "oph_dac_006",
                topic: "dacryocystitis",
                year: "FMGE Dec 2022",
                q: "Most common organism causing chronic dacryocystitis is:",
                img: null,
                options: ["A. Staphylococcus aureus", "B. Streptococcus pneumoniae", "C. Pseudomonas", "D. Fungi only"],
                answer: 1,
                explanation: "Streptococcus pneumoniae is a common cause of chronic dacryocystitis, along with Staphylococcus species.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_dac_007",
                topic: "dacryocystitis",
                year: "FMGE Jun 2022",
                q: "Dacryocystitis is inflammation of:",
                img: null,
                options: ["A. Lacrimal sac", "B. Lacrimal gland", "C. Meibomian gland", "D. Goblet cells"],
                answer: 0,
                explanation: "Dacryocystitis is infection and inflammation of the lacrimal sac, usually due to nasolacrimal duct obstruction.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_dac_008",
                topic: "dacryocystitis",
                year: "FMGE Dec 2021",
                q: "Regurgitation test in dacryocystitis will show:",
                img: null,
                options: ["A. Mucopurulent discharge on pressure over lacrimal sac", "B. Clear fluid regurgitation only", "C. Blood regurgitation", "D. No discharge"],
                answer: 0,
                explanation: "Pressure over the lacrimal sac in chronic dacryocystitis causes regurgitation of mucopurulent material through the punctum.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_dac_009",
                topic: "dacryocystitis",
                year: "FMGE Jun 2021",
                q: "Definitive surgical treatment for chronic dacryocystitis is:",
                img: null,
                options: ["A. Dacryocystorhinostomy (DCR)", "B. Enucleation", "C. Trabeculectomy", "D. Tarsorrhaphy"],
                answer: 0,
                explanation: "DCR creates a new drainage channel between the lacrimal sac and nasal cavity, bypassing the blocked nasolacrimal duct.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_dac_010",
                topic: "dacryocystitis",
                year: "FMGE Dec 2020",
                q: "Acute dacryocystitis is best managed with:",
                img: null,
                options: ["A. Systemic antibiotics and warm compresses; DCR after resolution", "B. Immediate DCR surgery during acute phase", "C. Topical steroids only", "D. Enucleation"],
                answer: 0,
                explanation: "Acute dacryocystitis is managed conservatively first; elective DCR is planned after acute infection settles.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "oph_dr_006",
                topic: "diabetic-retinopathy",
                year: "FMGE Dec 2022",
                q: "Earliest fundus change in diabetic retinopathy is:",
                img: null,
                options: ["A. Microaneurysms", "B. Hard exudates", "C. Neovascularisation", "D. Vitreous haemorrhage"],
                answer: 0,
                explanation: "Microaneurysms are the earliest clinically detectable lesions in non-proliferative diabetic retinopathy.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_dr_007",
                topic: "diabetic-retinopathy",
                year: "FMGE Jun 2022",
                q: "High-risk characteristics in proliferative diabetic retinopathy include:",
                img: null,
                options: ["A. Neovascularisation at disc (NVD) > 1/4-1/3 disc area", "B. Microaneurysms only", "C. Hard exudates at fovea", "D. Background retinopathy only"],
                answer: 0,
                explanation: "NVD occupying more than 1/4-1/3 disc area or any NVD with vitreous haemorrhage constitutes high-risk PDR.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_dr_008",
                topic: "diabetic-retinopathy",
                year: "FMGE Dec 2021",
                q: "Treatment of proliferative diabetic retinopathy is:",
                img: null,
                options: ["A. Panretinal photocoagulation (PRP)", "B. Observation only", "C. Topical steroids", "D. Corneal transplant"],
                answer: 0,
                explanation: "PRP destroys ischaemic peripheral retina, reducing VEGF production and neovascularisation.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_dr_009",
                topic: "diabetic-retinopathy",
                year: "FMGE Jun 2021",
                q: "Clinically significant macular oedema (CSMO) in DR is treated with:",
                img: null,
                options: ["A. Focal/grid laser or intravitreal anti-VEGF", "B. PRP only", "C. Oral steroids only", "D. Observation for 6 months"],
                answer: 0,
                explanation: "Focal/grid laser or intravitreal anti-VEGF agents are standard for CSMO to prevent central vision loss.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_dr_010",
                topic: "diabetic-retinopathy",
                year: "FMGE Dec 2020",
                q: "Cotton-wool spots in diabetic retinopathy represent:",
                img: null,
                options: ["A. Nerve fibre layer infarcts", "B. Hard exudate deposits", "C. Neovascular fronds", "D. Retinal haemorrhages"],
                answer: 0,
                explanation: "Cotton-wool spots are focal nerve fibre layer infarcts caused by occlusion of precapillary arterioles.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "oph_gla_006",
                topic: "glaucoma",
                year: "FMGE Dec 2022",
                q: "Most common type of glaucoma worldwide is:",
                img: null,
                options: ["A. Primary open-angle glaucoma", "B. Acute angle-closure glaucoma", "C. Secondary glaucoma", "D. Congenital glaucoma"],
                answer: 0,
                explanation: "Primary open-angle glaucoma is the most prevalent form and typically causes painless, slowly progressive peripheral field loss.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_gla_007",
                topic: "glaucoma",
                year: "FMGE Jun 2022",
                q: "Acute angle-closure glaucoma classically presents with:",
                img: null,
                options: ["A. Severe eye pain, halos, nausea, and rock-hard eye", "B. Gradual painless visual loss", "C. Only colour vision defect", "D. Normal IOP"],
                answer: 0,
                explanation: "Acute angle closure causes sudden IOP elevation with intense pain, corneal oedema, halos, and nausea/vomiting.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_gla_008",
                topic: "glaucoma",
                year: "FMGE Dec 2021",
                q: "Classic visual field defect in chronic open-angle glaucoma is:",
                img: null,
                options: ["A. Arcuate/Bjerrum scotoma with nasal step", "B. Central scotoma", "C. Bitemporal hemianopia", "D. Total field loss from onset"],
                answer: 0,
                explanation: "Arcuate scotomas and nasal step are characteristic progressive field defects in POAG.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_gla_009",
                topic: "glaucoma",
                year: "FMGE Jun 2021",
                q: "First-line medical treatment for open-angle glaucoma is:",
                img: null,
                options: ["A. Prostaglandin analogues (e.g., latanoprost)", "B. Oral carbonic anhydrase inhibitors", "C. Pilocarpine drops only", "D. Atropine eye drops"],
                answer: 0,
                explanation: "Prostaglandin analogues are the preferred first-line agents due to efficacy and once-daily dosing.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_gla_010",
                topic: "glaucoma",
                year: "FMGE Dec 2020",
                q: "Buffalo hump appearance of optic disc in glaucoma refers to:",
                img: null,
                options: ["A. Nasal shift of vessels with large cup-to-disc ratio", "B. Disc swelling only", "C. Optic neuritis", "D. Normal disc variant"],
                answer: 0,
                explanation: "Pathological cupping with cup-to-disc ratio >0.6 and nasal displacement of vessels is characteristic of glaucomatous optic neuropathy.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "oph_hr_006",
                topic: "hypertensive-retinopathy",
                year: "FMGE Dec 2022",
                q: "Grade IV hypertensive retinopathy is characterised by:",
                img: null,
                options: ["A. Papilloedema in addition to grade III changes", "B. AV nipping only", "C. Cotton-wool spots only", "D. Silver wiring only"],
                answer: 0,
                explanation: "Grade IV (Keith-Wagener classification) adds papilloedema to the flame haemorrhages, exudates and cotton-wool spots of grade III.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_hr_007",
                topic: "hypertensive-retinopathy",
                year: "FMGE Jun 2022",
                q: "Copper wiring and silver wiring on fundoscopy indicate:",
                img: null,
                options: ["A. Arteriosclerotic changes in retinal arterioles", "B. Choroidal neovascularisation", "C. Venous thrombosis", "D. Diabetic microaneurysms"],
                answer: 0,
                explanation: "Increased arteriolar reflex from atherosclerotic thickening produces copper then silver wiring appearance.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_hr_008",
                topic: "hypertensive-retinopathy",
                year: "FMGE Dec 2021",
                q: "Salus sign in hypertensive retinopathy refers to:",
                img: null,
                options: ["A. Deflection of vein at AV crossing", "B. Loss of vein distal to crossing", "C. Flame haemorrhage pattern", "D. Disc oedema"],
                answer: 0,
                explanation: "Salus sign is the deflection of a vein from its straight course where it crosses a sclerosed arteriole.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_hr_009",
                topic: "hypertensive-retinopathy",
                year: "FMGE Jun 2021",
                q: "Macular star figure in hypertensive retinopathy is formed by:",
                img: null,
                options: ["A. Hard exudates deposited along Henle's fibre layer", "B. Neovascularisation at macula", "C. Pigment deposits", "D. Subretinal fluid"],
                answer: 0,
                explanation: "Lipid exudates accumulate along the radially arranged Henle fibres around the fovea, creating a star pattern.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_hr_010",
                topic: "hypertensive-retinopathy",
                year: "FMGE Dec 2020",
                q: "AV nipping (Gunn's sign) in hypertensive retinopathy is due to:",
                img: null,
                options: ["A. Compression of vein by thickened arteriole at crossing", "B. Venous dilatation only", "C. Arteriolar constriction only", "D. Optic nerve compression"],
                answer: 0,
                explanation: "Gunn's sign is apparent compression/banking of the vein where a sclerotic arteriole crosses over it.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "oph_kf_006",
                topic: "kayser-fleischer-ring",
                year: "FMGE Dec 2022",
                q: "Kayser-Fleischer ring is best detected by:",
                img: null,
                options: ["A. Slit-lamp examination", "B. Direct ophthalmoscopy", "C. Visual acuity chart", "D. Tonometry"],
                answer: 0,
                explanation: "KF ring in the peripheral Descemet membrane is best visualised with slit-lamp biomicroscopy.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_kf_007",
                topic: "kayser-fleischer-ring",
                year: "FMGE Jun 2022",
                q: "Kayser-Fleischer ring is caused by deposition of:",
                img: null,
                options: ["A. Copper in Descemet's membrane", "B. Iron in lens", "C. Calcium in cornea", "D. Gold in sclera"],
                answer: 0,
                explanation: "In Wilson's disease, excess copper deposits in the peripheral Descemet membrane forming the golden-brown KF ring.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_kf_008",
                topic: "kayser-fleischer-ring",
                year: "FMGE Dec 2021",
                q: "Kayser-Fleischer ring disappears with treatment in Wilson's disease using:",
                img: null,
                options: ["A. D-penicillamine (copper chelation)", "B. Desferrioxamine", "C. Corticosteroids", "D. Vitamin supplements"],
                answer: 0,
                explanation: "D-penicillamine chelates copper and KF rings may fade or disappear with successful copper depletion therapy.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_kf_009",
                topic: "kayser-fleischer-ring",
                year: "FMGE Jun 2021",
                q: "KF ring is located at:",
                img: null,
                options: ["A. Periphery of cornea at Descemet membrane level", "B. Central cornea", "C. Lens equator", "D. Anterior vitreous"],
                answer: 0,
                explanation: "KF ring starts superiorly at Schwalbe's line and forms a complete ring at the corneoscleral junction.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_kf_010",
                topic: "kayser-fleischer-ring",
                year: "FMGE Dec 2020",
                q: "Which condition is NOT associated with KF ring?",
                img: null,
                options: ["A. Primary biliary cirrhosis (without neurological Wilson's)", "B. Wilson's disease with neurological involvement", "C. Wilson's disease without neurological involvement", "D. Neonatal cholestasis"],
                answer: 0,
                explanation: "KF ring is almost always present in Wilson's with neurological disease; it may be absent in hepatic-only or other cholestatic conditions. Absence does not exclude Wilson's hepatic disease.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "oph_ker_006",
                topic: "keratoconus",
                year: "FMGE Dec 2022",
                q: "Keratoconus is characterised by:",
                img: null,
                options: ["A. Progressive corneal thinning and conical protrusion", "B. Corneal flattening", "C. Corneal vascularisation only", "D. Corneal oedema without thinning"],
                answer: 0,
                explanation: "Keratoconus is a non-inflammatory ectatic condition causing progressive conical protrusion and thinning of the cornea.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_ker_007",
                topic: "keratoconus",
                year: "FMGE Jun 2022",
                q: "Munson's sign in keratoconus is:",
                img: null,
                options: ["A. V-shaped indentation of lower lid on downgaze", "B. Oil-droplet reflex on fundoscopy", "C. Corneal thinning on slit lamp", "D. Rizzuti's sign"],
                answer: 0,
                explanation: "Munson's sign is the V-shaped deformation of the lower eyelid on downgaze due to the ectatic cornea.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_ker_008",
                topic: "keratoconus",
                year: "FMGE Dec 2021",
                q: "Fleischer ring in keratoconus is a deposit of:",
                img: null,
                options: ["A. Iron (haemosiderin) at base of cone", "B. Copper in Descemet's membrane", "C. Calcium in Bowman's layer", "D. Lipid at corneal periphery"],
                answer: 0,
                explanation: "Fleischer ring is a partial or complete iron deposit at the base of the keratoconic cone visible with cobalt blue light.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_ker_009",
                topic: "keratoconus",
                year: "FMGE Jun 2021",
                q: "Acute hydrops in keratoconus is caused by:",
                img: null,
                options: ["A. Sudden rupture of Descemet's membrane allowing aqueous into stroma", "B. Intraocular pressure rise", "C. Corneal vascularisation", "D. Lens subluxation"],
                answer: 0,
                explanation: "Descemet membrane rupture allows aqueous to flood the stroma causing sudden painful corneal oedema (acute hydrops).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_ker_010",
                topic: "keratoconus",
                year: "FMGE Dec 2020",
                q: "Definitive treatment for advanced keratoconus is:",
                img: null,
                options: ["A. Penetrating keratoplasty (PK)", "B. Rigid contact lenses only", "C. LASIK", "D. Collagen cross-linking at advanced stage"],
                answer: 0,
                explanation: "When contact lenses fail or corneal scarring occurs, penetrating keratoplasty provides best visual rehabilitation.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "oph_lid_006",
                topic: "lid-disorders",
                year: "FMGE Dec 2022",
                q: "Chalazion is a chronic granulomatous inflammation of:",
                img: null,
                options: ["A. Meibomian gland", "B. Zeis gland", "C. Moll's gland", "D. Lacrimal gland"],
                answer: 0,
                explanation: "Chalazion results from blocked Meibomian (tarsal) gland with lipogranulomatous reaction to retained secretions.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_lid_007",
                topic: "lid-disorders",
                year: "FMGE Jun 2022",
                q: "Hordeolum externum (stye) is infection of:",
                img: null,
                options: ["A. Zeis or Moll's gland at lash follicle", "B. Meibomian gland", "C. Lacrimal sac", "D. Conjunctiva"],
                answer: 0,
                explanation: "Stye is an acute staphylococcal infection of a lash follicle gland (Zeis or Moll's), presenting at the lid margin.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_lid_008",
                topic: "lid-disorders",
                year: "FMGE Dec 2021",
                q: "Ptosis with miosis and anhidrosis together constitute:",
                img: null,
                options: ["A. Horner's syndrome", "B. Oculomotor nerve palsy", "C. Myasthenia gravis", "D. Mechanical ptosis"],
                answer: 0,
                explanation: "Horner's syndrome is caused by sympathetic pathway interruption producing partial ptosis, miosis and ipsilateral anhidrosis.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_lid_009",
                topic: "lid-disorders",
                year: "FMGE Jun 2021",
                q: "Entropion is:",
                img: null,
                options: ["A. Inturning of the eyelid margin", "B. Outturning of the eyelid margin", "C. Drooping of upper lid", "D. Lid retraction"],
                answer: 0,
                explanation: "Entropion is inward rotation of the lid margin, causing lashes to rub against the cornea (trichiasis).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_lid_010",
                topic: "lid-disorders",
                year: "FMGE Dec 2020",
                q: "Xanthelasma is:",
                img: null,
                options: ["A. Yellowish cholesterol deposit on medial upper eyelid", "B. Meibomian cyst", "C. Lipoid arcus at cornea", "D. Conjunctival cyst"],
                answer: 0,
                explanation: "Xanthelasma are flat yellowish plaques of lipid near the medial canthus, associated with hyperlipidaemia.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "oph_nys_006",
                topic: "nystagmus",
                year: "FMGE Dec 2022",
                q: "Nystagmus is defined by direction of:",
                img: null,
                options: ["A. Fast (jerk) component", "B. Slow component", "C. Rotatory component only", "D. Downbeat component only"],
                answer: 0,
                explanation: "By convention, nystagmus is named after the fast (corrective) component, even though the pathological phase is the slow drift.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_nys_007",
                topic: "nystagmus",
                year: "FMGE Jun 2022",
                q: "Downbeat nystagmus is characteristically caused by lesion at:",
                img: null,
                options: ["A. Craniocervical junction (e.g., Arnold-Chiari malformation)", "B. Vestibular labyrinth", "C. Frontal lobe", "D. Optic nerve"],
                answer: 0,
                explanation: "Downbeat nystagmus is a strong localising sign for lesions at the cervicomedullary junction.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_nys_008",
                topic: "nystagmus",
                year: "FMGE Dec 2021",
                q: "Pendular nystagmus is associated with:",
                img: null,
                options: ["A. Poor vision from birth (sensory deprivation)", "B. Vestibular lesion", "C. Cerebellar disease", "D. Drug toxicity"],
                answer: 0,
                explanation: "Pendular nystagmus with equal slow phases occurs due to early-onset visual deprivation disrupting smooth pursuit development.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_nys_009",
                topic: "nystagmus",
                year: "FMGE Jun 2021",
                q: "Latent nystagmus occurs when:",
                img: null,
                options: ["A. One eye is covered (monocular occlusion)", "B. Both eyes are open", "C. Patient looks in lateral gaze only", "D. In complete darkness"],
                answer: 0,
                explanation: "Latent nystagmus is absent with binocular viewing and appears only when one eye is covered, common in infantile esotropia.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_nys_010",
                topic: "nystagmus",
                year: "FMGE Dec 2020",
                q: "Periodic alternating nystagmus is most commonly caused by:",
                img: null,
                options: ["A. Cerebellar or craniocervical pathology", "B. Labyrinthine disease", "C. Lens opacity", "D. Retinal dystrophy"],
                answer: 0,
                explanation: "Periodic alternating nystagmus cycles direction every 2 minutes and points to posterior fossa pathology.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "oph_oa_006",
                topic: "optic-atrophy",
                year: "FMGE Dec 2022",
                q: "Primary optic atrophy on fundoscopy shows:",
                img: null,
                options: ["A. Chalky-white flat disc with sharp margins", "B. Swollen disc with blurred margins", "C. Cupped disc with pale rim", "D. Normal appearing disc"],
                answer: 0,
                explanation: "Primary optic atrophy has a pale white disc with distinct margins and no preceding disc swelling.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_oa_007",
                topic: "optic-atrophy",
                year: "FMGE Jun 2022",
                q: "Secondary optic atrophy follows:",
                img: null,
                options: ["A. Papilloedema or optic neuritis with gliosis", "B. Retinal artery occlusion only", "C. Glaucoma only", "D. Trauma to orbit"],
                answer: 0,
                explanation: "Secondary optic atrophy develops after previous disc swelling; margins are irregular due to glial replacement.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_oa_008",
                topic: "optic-atrophy",
                year: "FMGE Dec 2021",
                q: "Most common cause of bilateral optic atrophy in India is:",
                img: null,
                options: ["A. Toxic/nutritional deficiency (ethambutol, alcohol)", "B. Multiple sclerosis", "C. LHON", "D. Syphilis"],
                answer: 0,
                explanation: "Toxic optic neuropathy from ethambutol and nutritional deficiency are common causes in India; MS is less prevalent.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_oa_009",
                topic: "optic-atrophy",
                year: "FMGE Jun 2021",
                q: "Consecutive optic atrophy follows:",
                img: null,
                options: ["A. Extensive retinal disease spreading to optic nerve", "B. Direct optic nerve trauma", "C. Demyelination", "D. Raised intracranial pressure"],
                answer: 0,
                explanation: "Consecutive atrophy spreads from primary retinal disease (e.g., widespread retinal degeneration) to the optic nerve.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_oa_010",
                topic: "optic-atrophy",
                year: "FMGE Dec 2020",
                q: "Bow-tie (band) atrophy on disc is seen in:",
                img: null,
                options: ["A. Chiasmal compression affecting crossing fibres", "B. Retrobulbar neuritis", "C. Glaucoma", "D. Optic nerve glioma"],
                answer: 0,
                explanation: "Chiasmal lesions cause band (nasal and temporal horizontal sector) atrophy of the disc due to loss of crossing nasal fibres.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "oph_orb_006",
                topic: "orbital-cellulitis",
                year: "FMGE Dec 2022",
                q: "Most common source of orbital cellulitis in children is:",
                img: null,
                options: ["A. Sinusitis (especially ethmoid sinusitis)", "B. Dental infection", "C. Skin trauma only", "D. Orbital fracture"],
                answer: 0,
                explanation: "Ethmoidal sinusitis is the most frequent predisposing cause of orbital cellulitis in paediatric age group.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_orb_007",
                topic: "orbital-cellulitis",
                year: "FMGE Jun 2022",
                q: "Proptosis with restricted eye movements and chemosis suggests:",
                img: null,
                options: ["A. Orbital cellulitis (postseptal)", "B. Preseptal (periorbital) cellulitis", "C. Conjunctivitis", "D. Dacryocystitis"],
                answer: 0,
                explanation: "Postseptal (orbital) cellulitis involves tissue behind the orbital septum causing proptosis, restricted motility and chemosis.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_orb_008",
                topic: "orbital-cellulitis",
                year: "FMGE Dec 2021",
                q: "Dreaded complication of orbital cellulitis is:",
                img: null,
                options: ["A. Cavernous sinus thrombosis", "B. Corneal ulceration", "C. Optic neuritis only", "D. Dacryocystitis"],
                answer: 0,
                explanation: "Spread of orbital infection via ophthalmic veins to the cavernous sinus causes life-threatening cavernous sinus thrombosis.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_orb_009",
                topic: "orbital-cellulitis",
                year: "FMGE Jun 2021",
                q: "Investigation of choice for orbital cellulitis to identify extent is:",
                img: null,
                options: ["A. CT scan of orbit and paranasal sinuses", "B. Plain X-ray orbit", "C. Ultrasound B-scan only", "D. MRI brain only"],
                answer: 0,
                explanation: "CT scan delineates subperiosteal or orbital abscess and assesses sinus involvement.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_orb_010",
                topic: "orbital-cellulitis",
                year: "FMGE Dec 2020",
                q: "Management of orbital abscess complicating orbital cellulitis requires:",
                img: null,
                options: ["A. Surgical drainage plus IV antibiotics", "B. Oral antibiotics alone", "C. Topical antibiotics only", "D. Observation only"],
                answer: 0,
                explanation: "Subperiosteal or orbital abscesses require urgent surgical drainage combined with IV broad-spectrum antibiotics.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "oph_pap_006",
                topic: "papilledema",
                year: "FMGE Dec 2022",
                q: "Earliest sign of papilledema on fundoscopy is:",
                img: null,
                options: ["A. Blurring of disc margins starting superiorly and inferiorly", "B. Central scotoma", "C. Loss of venous pulsations", "D. Pallor of disc"],
                answer: 2,
                explanation: "Loss of spontaneous venous pulsations (SVP) is the earliest sign, followed by blurring of disc margins.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_pap_007",
                topic: "papilledema",
                year: "FMGE Jun 2022",
                q: "Visual field defect characteristically preserved until late in papilledema is:",
                img: null,
                options: ["A. Central visual acuity and central field", "B. Peripheral field", "C. Superior field", "D. Inferior field"],
                answer: 0,
                explanation: "Central visual acuity is characteristically preserved until late stages; enlarged blind spot is an early field change.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_pap_008",
                topic: "papilledema",
                year: "FMGE Dec 2021",
                q: "Papilledema differs from papillitis in that:",
                img: null,
                options: ["A. Papilledema has no initial visual acuity loss; papillitis has early severe VA loss", "B. Papilledema is always unilateral", "C. Papillitis has no disc swelling", "D. Papilledema has afferent pupil defect"],
                answer: 0,
                explanation: "Papilledema preserves visual acuity initially (enlarged blind spot only); papillitis severely reduces VA early.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_pap_009",
                topic: "papilledema",
                year: "FMGE Jun 2021",
                q: "Paton's folds in papilledema are:",
                img: null,
                options: ["A. Concentric retinal folds around the disc", "B. Haemorrhages at disc margin", "C. Cotton-wool spots at macula", "D. Hard exudates around disc"],
                answer: 0,
                explanation: "Paton's lines are concentric peripapillary choroidal folds caused by disc swelling pushing surrounding retina.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_pap_010",
                topic: "papilledema",
                year: "FMGE Dec 2020",
                q: "Chronic papilledema leading to optic atrophy is called:",
                img: null,
                options: ["A. Secondary optic atrophy / vintage papilledema", "B. Foster-Kennedy syndrome", "C. Primary optic atrophy", "D. Ischaemic optic neuropathy"],
                answer: 0,
                explanation: "Long-standing papilledema results in secondary optic atrophy with grey-white disc, blurred margins and field loss.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "oph_pte_006",
                topic: "pterygium",
                year: "FMGE Dec 2022",
                q: "Pterygium most commonly encroaches on the cornea from:",
                img: null,
                options: ["A. Nasal side (medial)", "B. Temporal side (lateral)", "C. Superior limbus", "D. Inferior limbus"],
                answer: 0,
                explanation: "Pterygium classically arises from the nasal bulbar conjunctiva and grows toward the cornea in the palpebral fissure zone.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_pte_007",
                topic: "pterygium",
                year: "FMGE Jun 2022",
                q: "Stocker's line in pterygium is:",
                img: null,
                options: ["A. Iron line at advancing head of pterygium in corneal epithelium", "B. Lipid deposit at pterygium base", "C. Collagen line in Bowman's layer", "D. Vascular line at limbus"],
                answer: 0,
                explanation: "Stocker's line is an iron (haemosiderin) deposit in the corneal epithelium just ahead of the pterygium head.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_pte_008",
                topic: "pterygium",
                year: "FMGE Dec 2021",
                q: "Main risk factor for pterygium development is:",
                img: null,
                options: ["A. Chronic UV radiation exposure", "B. Vitamin A deficiency", "C. High intraocular pressure", "D. Hereditary corneal dystrophy"],
                answer: 0,
                explanation: "UV-B radiation causes limbal stem cell dysfunction and conjunctival invasion of the cornea.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_pte_009",
                topic: "pterygium",
                year: "FMGE Jun 2021",
                q: "Pseudopterygium differs from true pterygium in that:",
                img: null,
                options: ["A. A probe can be passed beneath pseudopterygium body", "B. Pseudopterygium is always bilateral", "C. Pseudopterygium has a cap on cornea", "D. True pterygium has no vascular head"],
                answer: 0,
                explanation: "In pseudopterygium the conjunctival adhesion is at the head only; a probe passes under the body, unlike true pterygium.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_pte_010",
                topic: "pterygium",
                year: "FMGE Dec 2020",
                q: "Treatment of choice for pterygium encroaching on visual axis is:",
                img: null,
                options: ["A. Surgical excision with conjunctival autograft", "B. Topical steroids alone", "C. Laser ablation only", "D. Observation"],
                answer: 0,
                explanation: "Excision with conjunctival autograft has the lowest recurrence rate; bare sclera technique has high recurrence.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "oph_pup_006",
                topic: "pupillary-abnormalities",
                year: "FMGE Dec 2022",
                q: "Relative afferent pupillary defect (RAPD) indicates:",
                img: null,
                options: ["A. Optic nerve or extensive retinal disease on that side", "B. Lens opacity", "C. Corneal scar only", "D. Macular degeneration only"],
                answer: 0,
                explanation: "RAPD (Marcus Gunn pupil) reflects asymmetric optic nerve conduction defect causing paradoxical dilation on swinging light test.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_pup_007",
                topic: "pupillary-abnormalities",
                year: "FMGE Jun 2022",
                q: "Argyll Robertson pupil is characterised by:",
                img: null,
                options: ["A. Near reflex preserved, light reflex absent (accommodation-reflex dissociation)", "B. Both light and near reflexes absent", "C. Fixed dilated pupil", "D. Hippus only"],
                answer: 0,
                explanation: "AR pupil (syphilis) shows miosis with intact near response but absent light reflex — light-near dissociation.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_pup_008",
                topic: "pupillary-abnormalities",
                year: "FMGE Dec 2021",
                q: "Adie's (tonic) pupil is due to:",
                img: null,
                options: ["A. Postganglionic parasympathetic denervation of ciliary ganglion", "B. Sympathetic denervation", "C. Oculomotor nerve palsy", "D. Pharmacological blockade"],
                answer: 0,
                explanation: "Adie's pupil results from ciliary ganglion denervation; the dilated pupil responds slowly to light with tonic near response.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_pup_009",
                topic: "pupillary-abnormalities",
                year: "FMGE Jun 2021",
                q: "Miosis, ptosis, and anhidrosis characterise:",
                img: null,
                options: ["A. Horner's syndrome", "B. Adie's syndrome", "C. Argyll Robertson pupil", "D. Third nerve palsy"],
                answer: 0,
                explanation: "Horner's syndrome is from sympathetic chain interruption; ptosis is partial (Muller's muscle) and miosis is due to unopposed sphincter.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_pup_010",
                topic: "pupillary-abnormalities",
                year: "FMGE Dec 2020",
                q: "Fixed dilated pupil with ptosis and 'down and out' deviation of eye suggests:",
                img: null,
                options: ["A. Complete third cranial nerve palsy", "B. Horner's syndrome", "C. Adie's pupil", "D. Sixth nerve palsy"],
                answer: 0,
                explanation: "CN III palsy causes mydriasis (pupil-involving), complete ptosis, and exotropia/hypotropia from unopposed LR and SO.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "oph_ref_006",
                topic: "refractive-errors",
                year: "FMGE Dec 2022",
                q: "Myopia is due to:",
                img: null,
                options: ["A. Parallel rays focusing in front of retina", "B. Parallel rays focusing behind retina", "C. Unequal curvature of refracting surfaces", "D. Increasing refractive power with age"],
                answer: 0,
                explanation: "In myopia the axial length is too long or corneal power too high, so parallel rays converge before the retina.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_ref_007",
                topic: "refractive-errors",
                year: "FMGE Jun 2022",
                q: "Presbyopia results from:",
                img: null,
                options: ["A. Age-related loss of lens accommodation", "B. Corneal flattening", "C. Vitreous degeneration", "D. Pupil dilation"],
                answer: 0,
                explanation: "Progressive loss of lens elasticity reduces amplitude of accommodation, causing inability to focus at near (presbyopia).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_ref_008",
                topic: "refractive-errors",
                year: "FMGE Dec 2021",
                q: "Astigmatism is corrected by:",
                img: null,
                options: ["A. Cylindrical lens", "B. Spherical concave lens", "C. Spherical convex lens", "D. Bifocal lens"],
                answer: 0,
                explanation: "Cylindrical lenses correct unequal corneal curvature in astigmatism by focusing each meridian separately.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_ref_009",
                topic: "refractive-errors",
                year: "FMGE Jun 2021",
                q: "LASIK surgery corrects refractive errors by:",
                img: null,
                options: ["A. Reshaping corneal stroma with excimer laser after lifting a flap", "B. Replacing the crystalline lens", "C. Inserting intracorneal rings", "D. Incisional relaxing cuts only"],
                answer: 0,
                explanation: "LASIK uses a microkeratome/femtosecond laser to create a flap, then excimer laser ablates stroma to reshape corneal curvature.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_ref_010",
                topic: "refractive-errors",
                year: "FMGE Dec 2020",
                q: "Anisometropia is defined as:",
                img: null,
                options: ["A. Significant difference in refractive error between two eyes", "B. Identical refractive errors in both eyes", "C. Astigmatism in one eye only", "D. Progressive myopia"],
                answer: 0,
                explanation: "Anisometropia (>2 D difference between eyes) is a significant cause of amblyopia in children due to blur suppression.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "oph_rd_006",
                topic: "retinal-detachment",
                year: "FMGE Dec 2022",
                q: "Rhegmatogenous retinal detachment is caused by:",
                img: null,
                options: ["A. Full-thickness retinal break allowing fluid to enter subretinal space", "B. Traction on retina without break", "C. Exudate beneath retina", "D. Choroidal neovascularisation"],
                answer: 0,
                explanation: "Rhegmatogenous RD results from a retinal tear/hole; liquid vitreous passes through into the subretinal space.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_rd_007",
                topic: "retinal-detachment",
                year: "FMGE Jun 2022",
                q: "Symptom of 'curtain coming down' in retinal detachment indicates:",
                img: null,
                options: ["A. Progressive field loss as detachment extends toward macula", "B. Central visual loss from onset", "C. Photopsia only", "D. Floaters only"],
                answer: 0,
                explanation: "The characteristic 'shadow' or 'curtain' corresponds to the area of detached retina causing field defect.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_rd_008",
                topic: "retinal-detachment",
                year: "FMGE Dec 2021",
                q: "Photopsia (flashes of light) preceding retinal detachment is due to:",
                img: null,
                options: ["A. Mechanical traction on retina by vitreous", "B. Choroidal ischaemia", "C. Optic nerve compression", "D. Increased intraocular pressure"],
                answer: 0,
                explanation: "Vitreous traction on photoreceptors mechanically stimulates them, producing phosphenes/flashes before detachment.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_rd_009",
                topic: "retinal-detachment",
                year: "FMGE Jun 2021",
                q: "Treatment of choice for rhegmatogenous retinal detachment is:",
                img: null,
                options: ["A. Scleral buckling or pars plana vitrectomy", "B. Observation with bed rest", "C. Topical steroids", "D. Intravitreal anti-VEGF alone"],
                answer: 0,
                explanation: "Surgical reattachment via scleral buckle or vitrectomy is required; untreated RD leads to permanent blindness.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_rd_010",
                topic: "retinal-detachment",
                year: "FMGE Dec 2020",
                q: "Most important predisposing factor for rhegmatogenous RD is:",
                img: null,
                options: ["A. High myopia", "B. Hypermetropia", "C. Glaucoma", "D. Cataract surgery without complications"],
                answer: 0,
                explanation: "High myopia causes peripheral lattice degeneration and vitreous liquefaction increasing risk of retinal breaks.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "oph_rp_006",
                topic: "retinitis-pigmentosa",
                year: "FMGE Dec 2022",
                q: "Classic triad of retinitis pigmentosa on fundoscopy is:",
                img: null,
                options: ["A. Bone-spicule pigmentation, waxy disc pallor, arteriolar attenuation", "B. Neovascularisation, flame haemorrhages, hard exudates", "C. Drusen, RPE atrophy, CNV", "D. Copper wiring, AV nipping, disc oedema"],
                answer: 0,
                explanation: "RP shows bone-corpuscle pigment in mid-periphery, attenuated arterioles and waxy pale disc.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_rp_007",
                topic: "retinitis-pigmentosa",
                year: "FMGE Jun 2022",
                q: "Earliest symptom of retinitis pigmentosa is:",
                img: null,
                options: ["A. Night blindness (nyctalopia)", "B. Central visual loss", "C. Colour vision defect", "D. Photophobia"],
                answer: 0,
                explanation: "Rod photoreceptors in the periphery are affected first, causing night blindness before any central field loss.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_rp_008",
                topic: "retinitis-pigmentosa",
                year: "FMGE Dec 2021",
                q: "RP is associated with Usher syndrome which combines RP with:",
                img: null,
                options: ["A. Sensorineural hearing loss", "B. Diabetes mellitus", "C. Renal disease", "D. Cardiac defects"],
                answer: 0,
                explanation: "Usher syndrome is autosomal recessive; types differ in severity of hearing loss and vestibular function.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_rp_009",
                topic: "retinitis-pigmentosa",
                year: "FMGE Jun 2021",
                q: "Electroretinogram (ERG) in retinitis pigmentosa shows:",
                img: null,
                options: ["A. Severely reduced or extinguished rod and cone responses", "B. Normal ERG", "C. Enhanced b-wave only", "D. Delayed VEP only"],
                answer: 0,
                explanation: "ERG is the gold-standard test; RP shows markedly reduced rod ERG early with progressive cone involvement.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_rp_010",
                topic: "retinitis-pigmentosa",
                year: "FMGE Dec 2020",
                q: "Most common mode of inheritance in retinitis pigmentosa is:",
                img: null,
                options: ["A. Autosomal dominant (most common isolated RP)", "B. X-linked recessive only", "C. Mitochondrial", "D. Autosomal recessive for all forms"],
                answer: 0,
                explanation: "Autosomal dominant RP is the most frequent single inheritance pattern in isolated RP, though AR is most common overall.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "oph_rb_006",
                topic: "retinoblastoma",
                year: "FMGE Dec 2022",
                q: "Most common presentation of retinoblastoma in children is:",
                img: null,
                options: ["A. Leukocoria (white pupillary reflex)", "B. Painful red eye", "C. Proptosis first", "D. Vitreous haemorrhage"],
                answer: 0,
                explanation: "Leukocoria (cat's-eye reflex) is the most frequent initial sign of retinoblastoma.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_rb_007",
                topic: "retinoblastoma",
                year: "FMGE Jun 2022",
                q: "Retinoblastoma is caused by mutation of:",
                img: null,
                options: ["A. RB1 tumour suppressor gene on chromosome 13q14", "B. TP53 gene", "C. BRCA1 gene", "D. APC gene"],
                answer: 0,
                explanation: "Loss of both alleles of the RB1 gene (Knudson two-hit hypothesis) underlies retinoblastoma.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_rb_008",
                topic: "retinoblastoma",
                year: "FMGE Dec 2021",
                q: "Trilateral retinoblastoma refers to:",
                img: null,
                options: ["A. Bilateral retinoblastoma with midline intracranial primitive neuroectodermal tumour", "B. Three separate retinal tumours in one eye", "C. Retinoblastoma with liver metastasis", "D. Retinoblastoma involving both eyes and orbit"],
                answer: 0,
                explanation: "Trilateral retinoblastoma = bilateral Rb plus a pineoblastoma or suprasellar PNET; carries very poor prognosis.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_rb_009",
                topic: "retinoblastoma",
                year: "FMGE Jun 2021",
                q: "Calcification on CT scan is a characteristic finding in:",
                img: null,
                options: ["A. Retinoblastoma", "B. Coat's disease", "C. Persistent hyperplastic primary vitreous", "D. Toxocara endophthalmitis"],
                answer: 0,
                explanation: "Intraocular calcification on CT is a hallmark of retinoblastoma and helps differentiate it from other leukocoria causes.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_rb_010",
                topic: "retinoblastoma",
                year: "FMGE Dec 2020",
                q: "Small localised retinoblastoma is best treated by:",
                img: null,
                options: ["A. Focal therapy (laser photocoagulation/cryotherapy) or intra-arterial chemotherapy", "B. Enucleation for all cases", "C. External beam radiotherapy alone", "D. Systemic chemotherapy alone"],
                answer: 0,
                explanation: "Globe-salvage approaches (focal laser, cryo, intra-arterial or intravitreal chemo) are preferred for small tumours to preserve vision.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "oph_sq_006",
                topic: "squint",
                year: "FMGE Dec 2022",
                q: "Cover-uncover test is used to detect:",
                img: null,
                options: ["A. Manifest squint (tropia)", "B. Latent squint (phoria) only", "C. Amblyopia only", "D. Refractive error"],
                answer: 0,
                explanation: "Cover-uncover test detects manifest deviation; the uncovered eye moves to fix if a tropia is present.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_sq_007",
                topic: "squint",
                year: "FMGE Jun 2022",
                q: "Amblyopia complicating squint is best treated by:",
                img: null,
                options: ["A. Occlusion therapy (patching the good eye)", "B. Surgery first", "C. Glasses only", "D. Observation until school age"],
                answer: 0,
                explanation: "Patching the dominant eye forces use of the amblyopic eye; must be done before visual maturity (~7-8 years).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_sq_008",
                topic: "squint",
                year: "FMGE Dec 2021",
                q: "Congenital (infantile) esotropia typically presents at:",
                img: null,
                options: ["A. Within first 6 months of life", "B. After 2 years of age", "C. At puberty", "D. Only in adults"],
                answer: 0,
                explanation: "Infantile esotropia manifests by 6 months; it has a large constant angle and requires early surgical correction.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_sq_009",
                topic: "squint",
                year: "FMGE Jun 2021",
                q: "Hirschberg's corneal light reflex test: each 1 mm displacement of reflex from centre corresponds to approximately:",
                img: null,
                options: ["A. 15 prism diopters (7°)", "B. 30 prism diopters", "C. 5 prism diopters", "D. 45 prism diopters"],
                answer: 0,
                explanation: "1 mm of reflex displacement ≈ 15 PD (≈7°) of deviation; useful for quick estimation of angle.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_sq_010",
                topic: "squint",
                year: "FMGE Dec 2020",
                q: "Paralytic squint differs from concomitant squint in that:",
                img: null,
                options: ["A. Angle of deviation varies with direction of gaze", "B. Angle is equal in all positions", "C. Diplopia is absent in paralytic squint", "D. There is no head posture in paralytic squint"],
                answer: 0,
                explanation: "In paralytic squint the deviation is greatest in the field of action of the paretic muscle (incomitant); concomitant squint has equal angle in all positions.",
                tags: ["PYQ", "high-yield"]
        },

        {
                id: "oph_tra_006",
                topic: "trachoma",
                year: "FMGE Dec 2022",
                q: "Trachoma is caused by:",
                img: null,
                options: ["A. Chlamydia trachomatis serotypes A, B, Ba, C", "B. Neisseria gonorrhoeae", "C. Herpes simplex virus", "D. Adenovirus"],
                answer: 0,
                explanation: "Trachoma, the leading infectious cause of blindness worldwide, is caused by obligate intracellular C. trachomatis.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_tra_007",
                topic: "trachoma",
                year: "FMGE Jun 2022",
                q: "MacCallan classification stage II trachoma is characterised by:",
                img: null,
                options: ["A. Established trachoma with active follicles and papillary hypertrophy", "B. Early pre-trachoma only", "C. Cicatricial trachoma", "D. Healed trachoma"],
                answer: 0,
                explanation: "MacCallan Stage II shows mature follicles on upper tarsal conjunctiva with papillary hypertrophy.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_tra_008",
                topic: "trachoma",
                year: "FMGE Dec 2021",
                q: "Arlt's line in trachoma is:",
                img: null,
                options: ["A. Linear subconjunctival scar in upper fornix", "B. Horizontal corneal scar", "C. Limbal follicle scar", "D. Eyelid margin scar"],
                answer: 0,
                explanation: "Arlt's line is a horizontal scar in the upper tarsal conjunctiva resulting from healed follicles.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_tra_009",
                topic: "trachoma",
                year: "FMGE Jun 2021",
                q: "Herbert's pits in trachoma are:",
                img: null,
                options: ["A. Depressed scars at superior limbus from healed limbal follicles", "B. Corneal ulcers", "C. Conjunctival follicles at lower fornix", "D. Pannus vessels"],
                answer: 0,
                explanation: "Herbert's pits are pathognomonic of trachoma — small depressions at the upper limbus after follicle resolution.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "oph_tra_010",
                topic: "trachoma",
                year: "FMGE Dec 2020",
                q: "WHO SAFE strategy for trachoma control stands for:",
                img: null,
                options: ["A. Surgery, Antibiotics, Facial cleanliness, Environmental improvement", "B. Screening, Antivirals, Follow-up, Education", "C. Surgery, Azithromycin, Fluorescein, Examination", "D. Steroids, Antibiotics, Fluid, Eye drops"],
                answer: 0,
                explanation: "The WHO SAFE strategy addresses trichiasis Surgery, mass Antibiotic treatment, Facial cleanliness and Environmental improvement.",
                tags: ["PYQ", "high-yield"]
        },

];

export default ophthalmology;
