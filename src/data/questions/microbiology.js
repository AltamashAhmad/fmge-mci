const microbiology = [

	// ============ BATCH 1: GRAM POSITIVE COCCI ============
	{
		id: "micro_gpc_001",
		topic: "gram-positive-cocci",
		year: "FMGE Dec 2019",
		q: "Staphylococcus aureus is best identified by:",
		img: null,
		options: ["A. Catalase negative, coagulase negative", "B. Catalase positive, coagulase positive", "C. Catalase negative, coagulase positive", "D. Optochin sensitivity"],
		answer: 1,
		explanation: "S. aureus is gram-positive cocci in clusters, catalase positive and coagulase positive. Coagulase positivity differentiates it from coagulase-negative staphylococci.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_gpc_002",
		topic: "gram-positive-cocci",
		year: "FMGE Jun 2018",
		q: "Most common cause of acute rheumatic fever is:",
		img: null,
		options: ["A. Streptococcus pyogenes", "B. Streptococcus pneumoniae", "C. Staphylococcus aureus", "D. Enterococcus faecalis"],
		answer: 0,
		explanation: "Group A beta-hemolytic streptococcus (S. pyogenes) pharyngitis can trigger rheumatic fever due to molecular mimicry.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_gpc_003",
		topic: "gram-positive-cocci",
		year: "FMGE Dec 2018",
		q: "Streptococcus pneumoniae is characteristically:",
		img: null,
		options: ["A. Bacitracin sensitive", "B. Optochin sensitive and bile soluble", "C. Coagulase positive", "D. Catalase positive"],
		answer: 1,
		explanation: "S. pneumoniae is alpha-hemolytic, lancet-shaped diplococci, optochin sensitive and bile soluble; viridans streptococci are optochin resistant.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_gpc_004",
		topic: "gram-positive-cocci",
		year: "FMGE Jun 2019",
		q: "MRSA resistance is primarily due to:",
		img: null,
		options: ["A. Beta-lactamase production only", "B. Altered penicillin-binding protein (PBP2a) encoded by mecA gene", "C. Efflux pump", "D. Capsule formation"],
		answer: 1,
		explanation: "MRSA carries mecA gene encoding PBP2a, which has low affinity for beta-lactam antibiotics.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_gpc_005",
		topic: "gram-positive-cocci",
		year: "FMGE Dec 2020",
		q: "Catalase test is used to differentiate:",
		img: null,
		options: ["A. Staphylococci and streptococci", "B. Pneumococci and enterococci", "C. Bacillus and clostridium", "D. Neisseria and Moraxella"],
		answer: 0,
		explanation: "Staphylococci are catalase positive while streptococci are catalase negative.",
		tags: ["PYQ"]
	},

	// ============ BATCH 1: GRAM NEGATIVE RODS ============
	{
		id: "micro_gnr_001",
		topic: "gram-negative-rods",
		year: "FMGE Dec 2019",
		q: "Lactose fermenting gram-negative bacillus among the following is:",
		img: null,
		options: ["A. Salmonella typhi", "B. Shigella dysenteriae", "C. Escherichia coli", "D. Proteus mirabilis"],
		answer: 2,
		explanation: "E. coli is a lactose fermenter (pink colonies on MacConkey). Salmonella, Shigella, and Proteus are non-lactose fermenters.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_gnr_002",
		topic: "gram-negative-rods",
		year: "FMGE Jun 2018",
		q: "Most common cause of UTI is:",
		img: null,
		options: ["A. Klebsiella pneumoniae", "B. Proteus vulgaris", "C. Escherichia coli", "D. Pseudomonas aeruginosa"],
		answer: 2,
		explanation: "E. coli is the most common cause of community-acquired UTI due to uropathogenic strains expressing P fimbriae.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_gnr_003",
		topic: "gram-negative-rods",
		year: "FMGE Dec 2018",
		q: "Salmonella typhi can be identified by all EXCEPT:",
		img: null,
		options: ["A. Motility", "B. H2S production", "C. Lactose fermentation", "D. Vi antigen"],
		answer: 2,
		explanation: "S. typhi is motile, H2S producing, and has Vi antigen, but is non-lactose fermenting on MacConkey agar.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_gnr_004",
		topic: "gram-negative-rods",
		year: "FMGE Jun 2019",
		q: "Klebsiella pneumoniae is classically associated with:",
		img: null,
		options: ["A. Dry pneumonia in children", "B. Currant jelly sputum in lobar pneumonia", "C. Atypical walking pneumonia", "D. Cavitary lesion in upper lobe due to TB only"],
		answer: 1,
		explanation: "Klebsiella causes severe necrotizing pneumonia with thick mucoid currant jelly sputum, especially in diabetics and alcoholics.",
		tags: ["PYQ"]
	},
	{
		id: "micro_gnr_005",
		topic: "gram-negative-rods",
		year: "FMGE Dec 2020",
		q: "Shigella causes diarrhea mainly by:",
		img: null,
		options: ["A. Enterotoxin-mediated watery diarrhea only", "B. Invasion of colonic mucosa and Shiga toxin", "C. Viral cytopathic effect", "D. Helminthic infestation"],
		answer: 1,
		explanation: "Shigella invades colonic epithelium and may produce Shiga toxin, causing bacillary dysentery with blood and mucus.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 1: MYCOBACTERIA & TB ============
	{
		id: "micro_mtb_001",
		topic: "mycobacteria-tb",
		year: "FMGE Dec 2019",
		q: "Ziehl-Neelsen stain detects:",
		img: null,
		options: ["A. Encapsulated bacteria", "B. Acid-fast bacilli", "C. Spirochetes", "D. Fungi"],
		answer: 1,
		explanation: "Mycobacteria are acid-fast due to mycolic acids in the cell wall and are visualized by Ziehl-Neelsen staining.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_mtb_002",
		topic: "mycobacteria-tb",
		year: "FMGE Jun 2018",
		q: "Primary complex in tuberculosis consists of:",
		img: null,
		options: ["A. Cavitary lesion only", "B. Ghon focus + hilar lymph node involvement", "C. Fibrocaseous lesion only", "D. Pleural effusion with miliary nodules"],
		answer: 1,
		explanation: "Primary TB lesion (Ghon focus) with regional hilar lymphadenopathy forms Ghon complex (primary complex).",
		tags: ["PYQ"]
	},
	{
		id: "micro_mtb_003",
		topic: "mycobacteria-tb",
		year: "FMGE Dec 2018",
		q: "Most rapid molecular test for rifampicin resistance in TB is:",
		img: null,
		options: ["A. Mantoux test", "B. Sputum smear microscopy", "C. CBNAAT (GeneXpert)", "D. Culture on LJ medium"],
		answer: 2,
		explanation: "CBNAAT/GeneXpert rapidly detects M. tuberculosis complex DNA and rifampicin resistance (rpoB mutation).",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_mtb_004",
		topic: "mycobacteria-tb",
		year: "FMGE Jun 2019",
		q: "Lepromin test is useful for:",
		img: null,
		options: ["A. Diagnosis of all leprosy cases", "B. Classification and prognosis of leprosy", "C. Detecting TB infection", "D. Detecting latent syphilis"],
		answer: 1,
		explanation: "Lepromin is not a diagnostic test; it indicates cell-mediated immunity and helps in classification (tuberculoid positive, lepromatous negative).",
		tags: ["PYQ"]
	},
	{
		id: "micro_mtb_005",
		topic: "mycobacteria-tb",
		year: "FMGE Dec 2020",
		q: "Mantoux test indicates:",
		img: null,
		options: ["A. Active pulmonary TB only", "B. Delayed type hypersensitivity to tuberculin", "C. Humoral immunity against TB", "D. Drug resistance pattern"],
		answer: 1,
		explanation: "Mantoux (PPD) reflects type IV delayed hypersensitivity due to prior sensitization (infection/BCG), not necessarily active disease.",
		tags: ["PYQ", "high-yield"]
	},


	// ============ BATCH 2: TREPONEMA & SPIROCHETES ============
	{
		id: "micro_ts_001",
		topic: "treponema-spirochetes",
		year: "FMGE Dec 2019",
		q: "Diagnostic test used for screening syphilis is:",
		img: null,
		options: ["A. FTA-ABS", "B. VDRL", "C. TPHA only", "D. Dark field microscopy only"],
		answer: 1,
		explanation: "VDRL and RPR are non-treponemal screening tests and are useful for monitoring treatment. Treponemal tests (TPHA, FTA-ABS) are confirmatory.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_ts_002",
		topic: "treponema-spirochetes",
		year: "FMGE Jun 2018",
		q: "Jarisch-Herxheimer reaction is seen after treatment of:",
		img: null,
		options: ["A. Gonorrhea", "B. Syphilis", "C. Candidiasis", "D. Tetanus"],
		answer: 1,
		explanation: "After penicillin therapy of syphilis, rapid spirochete lysis may cause fever, headache, and myalgia (Jarisch-Herxheimer reaction).",
		tags: ["PYQ"]
	},
	{
		id: "micro_ts_003",
		topic: "treponema-spirochetes",
		year: "FMGE Dec 2018",
		q: "Leptospira is commonly transmitted through:",
		img: null,
		options: ["A. Respiratory droplets", "B. Rat urine contaminated water", "C. Sexual contact", "D. Mosquito bite"],
		answer: 1,
		explanation: "Leptospira interrogans spreads through contact with water/soil contaminated by urine of infected animals, especially rats.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_ts_004",
		topic: "treponema-spirochetes",
		year: "FMGE Jun 2019",
		q: "Gold standard confirmatory test for syphilis is:",
		img: null,
		options: ["A. VDRL", "B. RPR", "C. Treponemal antibody tests (TPHA/FTA-ABS)", "D. Gram stain"],
		answer: 2,
		explanation: "Treponemal tests (TPHA, FTA-ABS) are specific confirmatory tests; they generally remain positive for life.",
		tags: ["PYQ"]
	},
	{
		id: "micro_ts_005",
		topic: "treponema-spirochetes",
		year: "FMGE Dec 2020",
		q: "Most common congenital infection associated with Hutchinson teeth is:",
		img: null,
		options: ["A. Rubella", "B. Congenital syphilis", "C. Toxoplasmosis", "D. CMV"],
		answer: 1,
		explanation: "Congenital syphilis features include Hutchinson teeth, saddle nose, interstitial keratitis, and sensorineural deafness.",
		tags: ["PYQ"]
	},

	// ============ BATCH 2: RICKETTSIA & ATYPICALS ============
	{
		id: "micro_ra_001",
		topic: "rickettsia-atypicals",
		year: "FMGE Dec 2019",
		q: "Drug of choice for rickettsial infections is:",
		img: null,
		options: ["A. Penicillin", "B. Doxycycline", "C. Vancomycin", "D. Metronidazole"],
		answer: 1,
		explanation: "Doxycycline is DOC for most rickettsial diseases including scrub typhus, RMSF, and typhus.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_ra_002",
		topic: "rickettsia-atypicals",
		year: "FMGE Jun 2018",
		q: "Rickettsiae are:",
		img: null,
		options: ["A. Extracellular spore-forming bacilli", "B. Obligate intracellular gram-negative coccobacilli", "C. Acid-fast bacilli", "D. Encapsulated cocci"],
		answer: 1,
		explanation: "Rickettsiae are obligate intracellular organisms that infect endothelial cells causing vasculitis.",
		tags: ["PYQ"]
	},
	{
		id: "micro_ra_003",
		topic: "rickettsia-atypicals",
		year: "FMGE Dec 2018",
		q: "Atypical pneumonia with cold agglutinins is commonly caused by:",
		img: null,
		options: ["A. Streptococcus pneumoniae", "B. Mycoplasma pneumoniae", "C. Klebsiella pneumoniae", "D. Legionella pneumophila"],
		answer: 1,
		explanation: "Mycoplasma pneumoniae causes atypical pneumonia and may produce cold agglutinins (IgM against RBC I antigen).",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_ra_004",
		topic: "rickettsia-atypicals",
		year: "FMGE Jun 2019",
		q: "Weil-Felix test is classically associated with:",
		img: null,
		options: ["A. Typhoid fever", "B. Rickettsial infections", "C. Leptospirosis", "D. Brucellosis"],
		answer: 1,
		explanation: "Weil-Felix test is a heterophile agglutination test using Proteus antigens; it is older and less sensitive but classically linked to rickettsial diagnosis.",
		tags: ["PYQ"]
	},
	{
		id: "micro_ra_005",
		topic: "rickettsia-atypicals",
		year: "FMGE Dec 2020",
		q: "Legionella pneumophila is best detected by:",
		img: null,
		options: ["A. Gram stain from sputum", "B. Urinary antigen test", "C. VDRL", "D. Widal test"],
		answer: 1,
		explanation: "Legionella is poorly seen on Gram stain; urinary antigen testing and specialized culture (BCYE agar) are useful.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 2: HIV & AIDS ============
	{
		id: "micro_hiv_001",
		topic: "hiv-aids",
		year: "FMGE Dec 2019",
		q: "The receptor used by HIV to infect T-helper cells is:",
		img: null,
		options: ["A. CD8", "B. CD4", "C. CD19", "D. CD16"],
		answer: 1,
		explanation: "HIV gp120 binds CD4 receptor and co-receptors CCR5/CXCR4 for viral entry.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_hiv_002",
		topic: "hiv-aids",
		year: "FMGE Jun 2018",
		q: "Most common opportunistic infection in HIV in India is:",
		img: null,
		options: ["A. Candidiasis", "B. Tuberculosis", "C. CMV retinitis", "D. Toxoplasmosis"],
		answer: 1,
		explanation: "Tuberculosis is the most common opportunistic infection among PLHIV in high TB burden settings like India.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_hiv_003",
		topic: "hiv-aids",
		year: "FMGE Dec 2018",
		q: "Preferred initial screening test for HIV is:",
		img: null,
		options: ["A. Western blot", "B. ELISA/rapid antigen-antibody test", "C. CD4 count", "D. Viral culture"],
		answer: 1,
		explanation: "Current strategy uses highly sensitive antigen-antibody assays/rapid tests for screening; confirmatory testing follows national algorithms.",
		tags: ["PYQ"]
	},
	{
		id: "micro_hiv_004",
		topic: "hiv-aids",
		year: "FMGE Jun 2019",
		q: "Most common CNS space-occupying lesion in AIDS is:",
		img: null,
		options: ["A. Neurocysticercosis", "B. Toxoplasmosis", "C. Meningioma", "D. Abscess due to staphylococci"],
		answer: 1,
		explanation: "Cerebral toxoplasmosis is a common ring-enhancing lesion in AIDS, especially with CD4 counts <100 cells/mm3.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_hiv_005",
		topic: "hiv-aids",
		year: "FMGE Dec 2020",
		q: "First-line ART regimen in adults commonly includes:",
		img: null,
		options: ["A. Zidovudine + nevirapine only", "B. Tenofovir + lamivudine + dolutegravir", "C. Streptomycin + rifampicin + INH", "D. Acyclovir + lamivudine"],
		answer: 1,
		explanation: "TLD (tenofovir, lamivudine, dolutegravir) is a widely used first-line ART combination in adults.",
		tags: ["PYQ", "high-yield"]
	},


	// ============ BATCH 3: HEPATITIS VIRUSES ============
	{
		id: "micro_hv_001",
		topic: "hepatitis-viruses",
		year: "FMGE Dec 2019",
		q: "Marker indicating infectivity in hepatitis B is:",
		img: null,
		options: ["A. Anti-HBs", "B. HBeAg", "C. Anti-HBc IgG", "D. Anti-HBe"],
		answer: 1,
		explanation: "HBeAg usually indicates active viral replication and higher infectivity in HBV infection.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_hv_002",
		topic: "hepatitis-viruses",
		year: "FMGE Jun 2018",
		q: "Window period in hepatitis B is best identified by:",
		img: null,
		options: ["A. HBsAg", "B. Anti-HBs", "C. Anti-HBc IgM", "D. HBeAg"],
		answer: 2,
		explanation: "During HBV window period, HBsAg has disappeared and anti-HBs is not yet detectable; anti-HBc IgM is the key marker.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_hv_003",
		topic: "hepatitis-viruses",
		year: "FMGE Dec 2018",
		q: "Hepatitis D virus requires coinfection with:",
		img: null,
		options: ["A. HAV", "B. HBV", "C. HCV", "D. HEV"],
		answer: 1,
		explanation: "HDV is a defective virus that needs HBsAg from HBV for assembly and transmission.",
		tags: ["PYQ"]
	},
	{
		id: "micro_hv_004",
		topic: "hepatitis-viruses",
		year: "FMGE Jun 2019",
		q: "Hepatitis E is especially severe in:",
		img: null,
		options: ["A. Children", "B. Elderly men", "C. Pregnant women", "D. Immunized adults"],
		answer: 2,
		explanation: "HEV infection can cause fulminant hepatic failure with high mortality in pregnancy, especially third trimester.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_hv_005",
		topic: "hepatitis-viruses",
		year: "FMGE Dec 2020",
		q: "Most common cause of post-transfusion hepatitis currently is:",
		img: null,
		options: ["A. HAV", "B. HBV", "C. HCV", "D. HEV"],
		answer: 2,
		explanation: "HCV has historically been strongly linked with post-transfusion hepatitis and chronic liver disease.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 3: HERPES VIRUSES ============
	{
		id: "micro_hs_001",
		topic: "herpes-viruses",
		year: "FMGE Dec 2019",
		q: "Most common cause of sporadic fatal encephalitis is:",
		img: null,
		options: ["A. CMV", "B. HSV-1", "C. EBV", "D. VZV"],
		answer: 1,
		explanation: "HSV-1 is the most common cause of sporadic viral encephalitis; early acyclovir is lifesaving.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_hs_002",
		topic: "herpes-viruses",
		year: "FMGE Jun 2018",
		q: "Chickenpox and shingles are caused by:",
		img: null,
		options: ["A. HSV-2", "B. VZV", "C. CMV", "D. EBV"],
		answer: 1,
		explanation: "Varicella-zoster virus causes primary infection (chickenpox) and reactivation (herpes zoster).",
		tags: ["PYQ"]
	},
	{
		id: "micro_hs_003",
		topic: "herpes-viruses",
		year: "FMGE Dec 2018",
		q: "Most common congenital viral infection is:",
		img: null,
		options: ["A. Rubella", "B. CMV", "C. HSV", "D. Parvovirus B19"],
		answer: 1,
		explanation: "Congenital CMV is the most common congenital viral infection and may cause hearing loss and periventricular calcifications.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_hs_004",
		topic: "herpes-viruses",
		year: "FMGE Jun 2019",
		q: "Virus associated with infectious mononucleosis is:",
		img: null,
		options: ["A. CMV", "B. HSV", "C. EBV", "D. HHV-6"],
		answer: 2,
		explanation: "EBV infects B cells via CD21 and causes infectious mononucleosis with atypical lymphocytosis.",
		tags: ["PYQ"]
	},
	{
		id: "micro_hs_005",
		topic: "herpes-viruses",
		year: "FMGE Dec 2020",
		q: "Tzanck smear in herpes infection typically shows:",
		img: null,
		options: ["A. Inclusion bodies in RBC", "B. Multinucleated giant cells", "C. Acid-fast bacilli", "D. Budding yeast"],
		answer: 1,
		explanation: "Tzanck smear from vesicular lesions may show multinucleated giant cells in HSV and VZV infections.",
		tags: ["PYQ"]
	},

	// ============ BATCH 3: DENGUE & ARBOVIRUSES ============
	{
		id: "micro_da_001",
		topic: "dengue-arboviruses",
		year: "FMGE Dec 2019",
		q: "Vector of dengue virus is:",
		img: null,
		options: ["A. Anopheles mosquito", "B. Aedes aegypti", "C. Culex mosquito", "D. Sandfly"],
		answer: 1,
		explanation: "Dengue is transmitted by Aedes mosquitoes, especially Aedes aegypti, a day-biting mosquito.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_da_002",
		topic: "dengue-arboviruses",
		year: "FMGE Jun 2018",
		q: "Early diagnostic marker in dengue (first 5 days) is:",
		img: null,
		options: ["A. IgG antibody", "B. NS1 antigen", "C. Widal test", "D. Weil-Felix"],
		answer: 1,
		explanation: "NS1 antigen is detectable early in dengue, often before antibodies appear.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_da_003",
		topic: "dengue-arboviruses",
		year: "FMGE Dec 2018",
		q: "Hemorrhagic manifestations in severe dengue are mainly due to:",
		img: null,
		options: ["A. Neutrophilia", "B. Thrombocytopenia and capillary leak", "C. Hypercalcemia", "D. Polycythemia"],
		answer: 1,
		explanation: "Severe dengue involves thrombocytopenia, plasma leakage, and coagulopathy leading to bleeding and shock.",
		tags: ["PYQ"]
	},
	{
		id: "micro_da_004",
		topic: "dengue-arboviruses",
		year: "FMGE Jun 2019",
		q: "Tourniquet test in dengue reflects:",
		img: null,
		options: ["A. Liver dysfunction", "B. Capillary fragility", "C. Neutropenia", "D. Viral load"],
		answer: 1,
		explanation: "A positive tourniquet test indicates increased capillary fragility, seen in dengue.",
		tags: ["PYQ"]
	},
	{
		id: "micro_da_005",
		topic: "dengue-arboviruses",
		year: "FMGE Dec 2020",
		q: "Chikungunya and dengue are both transmitted by:",
		img: null,
		options: ["A. Culex", "B. Anopheles", "C. Aedes", "D. Sandfly"],
		answer: 2,
		explanation: "Both dengue and chikungunya are commonly transmitted by Aedes aegypti/albopictus mosquitoes.",
		tags: ["PYQ", "high-yield"]
	},


	// ============ BATCH 4: MALARIA ============
	{
		id: "micro_ma_001",
		topic: "malaria-micro",
		year: "FMGE Dec 2019",
		q: "Most severe form of malaria is caused by:",
		img: null,
		options: ["A. Plasmodium vivax", "B. Plasmodium ovale", "C. Plasmodium falciparum", "D. Plasmodium malariae"],
		answer: 2,
		explanation: "P. falciparum causes severe malaria with cerebral involvement, renal failure, acidosis, and high parasitemia.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_ma_002",
		topic: "malaria-micro",
		year: "FMGE Jun 2018",
		q: "Infective stage of malaria for humans is:",
		img: null,
		options: ["A. Merozoite", "B. Sporozoite", "C. Gametocyte", "D. Schizont"],
		answer: 1,
		explanation: "Female Anopheles injects sporozoites during bite; they enter hepatocytes and initiate exoerythrocytic cycle.",
		tags: ["PYQ"]
	},
	{
		id: "micro_ma_003",
		topic: "malaria-micro",
		year: "FMGE Dec 2018",
		q: "Dormant hypnozoite forms are seen in:",
		img: null,
		options: ["A. P. falciparum only", "B. P. vivax and P. ovale", "C. P. malariae only", "D. All plasmodium species"],
		answer: 1,
		explanation: "Hypnozoites in liver cause relapses in P. vivax and P. ovale; primaquine is used for radical cure after G6PD testing.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_ma_004",
		topic: "malaria-micro",
		year: "FMGE Jun 2019",
		q: "Preferred test for rapid diagnosis of malaria in field settings is:",
		img: null,
		options: ["A. Widal test", "B. Rapid diagnostic test (antigen based)", "C. VDRL", "D. Culture"],
		answer: 1,
		explanation: "Rapid antigen tests (HRP2/pLDH based) provide quick diagnosis; peripheral smear remains gold standard and species-defining.",
		tags: ["PYQ"]
	},
	{
		id: "micro_ma_005",
		topic: "malaria-micro",
		year: "FMGE Dec 2020",
		q: "Vector of malaria in humans is:",
		img: null,
		options: ["A. Male Anopheles", "B. Female Anopheles", "C. Female Culex", "D. Sandfly"],
		answer: 1,
		explanation: "Female Anopheles mosquito transmits plasmodium while taking blood meal.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 4: KALA-AZAR ============
	{
		id: "micro_ka_001",
		topic: "kala-azar",
		year: "FMGE Dec 2019",
		q: "Kala-azar is caused by:",
		img: null,
		options: ["A. Leishmania tropica", "B. Leishmania donovani", "C. Trypanosoma cruzi", "D. Giardia lamblia"],
		answer: 1,
		explanation: "Visceral leishmaniasis (kala-azar) in India is caused by Leishmania donovani.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_ka_002",
		topic: "kala-azar",
		year: "FMGE Jun 2018",
		q: "Vector for kala-azar is:",
		img: null,
		options: ["A. Tsetse fly", "B. Sandfly (Phlebotomus)", "C. Anopheles", "D. Housefly"],
		answer: 1,
		explanation: "Kala-azar is transmitted by female sandfly (Phlebotomus).",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_ka_003",
		topic: "kala-azar",
		year: "FMGE Dec 2018",
		q: "Most common laboratory finding in visceral leishmaniasis is:",
		img: null,
		options: ["A. Neutrophilic leukocytosis", "B. Pancytopenia", "C. Eosinophilia", "D. Polycythemia"],
		answer: 1,
		explanation: "Kala-azar commonly causes prolonged fever, hepatosplenomegaly, weight loss, and pancytopenia.",
		tags: ["PYQ"]
	},
	{
		id: "micro_ka_004",
		topic: "kala-azar",
		year: "FMGE Jun 2019",
		q: "rk39 immunochromatographic test is used for:",
		img: null,
		options: ["A. Malaria", "B. Visceral leishmaniasis", "C. Filariasis", "D. Dengue"],
		answer: 1,
		explanation: "rk39 is a rapid serological test commonly used for diagnosis of visceral leishmaniasis.",
		tags: ["PYQ"]
	},
	{
		id: "micro_ka_005",
		topic: "kala-azar",
		year: "FMGE Dec 2020",
		q: "Post kala-azar dermal leishmaniasis (PKDL) occurs after treatment of:",
		img: null,
		options: ["A. Cutaneous leishmaniasis", "B. Visceral leishmaniasis", "C. Malaria", "D. Schistosomiasis"],
		answer: 1,
		explanation: "PKDL can appear months to years after visceral leishmaniasis and serves as a parasite reservoir.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 4: INTESTINAL PARASITES ============
	{
		id: "micro_ip_001",
		topic: "intestinal-parasites",
		year: "FMGE Dec 2019",
		q: "Most common helminthic infestation in children is:",
		img: null,
		options: ["A. Taenia solium", "B. Ascaris lumbricoides", "C. Hookworm", "D. Enterobius vermicularis"],
		answer: 1,
		explanation: "Ascaris is among the most common intestinal helminths in children in endemic settings.",
		tags: ["PYQ"]
	},
	{
		id: "micro_ip_002",
		topic: "intestinal-parasites",
		year: "FMGE Jun 2018",
		q: "Pinworm causing perianal itching is:",
		img: null,
		options: ["A. Trichuris trichiura", "B. Enterobius vermicularis", "C. Ancylostoma duodenale", "D. Strongyloides"],
		answer: 1,
		explanation: "Enterobius vermicularis causes nocturnal perianal pruritus; diagnosis by cellophane tape test.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_ip_003",
		topic: "intestinal-parasites",
		year: "FMGE Dec 2018",
		q: "Hookworm infestation commonly leads to:",
		img: null,
		options: ["A. Megaloblastic anemia", "B. Iron deficiency anemia", "C. Hemolytic anemia", "D. Aplastic anemia"],
		answer: 1,
		explanation: "Hookworms (Ancylostoma/Necator) cause chronic intestinal blood loss resulting in iron deficiency anemia.",
		tags: ["PYQ"]
	},
	{
		id: "micro_ip_004",
		topic: "intestinal-parasites",
		year: "FMGE Jun 2019",
		q: "Cysticercosis in humans is caused by ingestion of:",
		img: null,
		options: ["A. Taenia saginata cysticerci", "B. Taenia solium eggs", "C. Adult ascaris", "D. Hookworm larvae"],
		answer: 1,
		explanation: "Ingesting T. solium eggs leads to cysticercosis; ingesting cysticerci in pork leads to intestinal taeniasis.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_ip_005",
		topic: "intestinal-parasites",
		year: "FMGE Dec 2020",
		q: "Most common protozoal cause of dysentery is:",
		img: null,
		options: ["A. Giardia lamblia", "B. Entamoeba histolytica", "C. Cryptosporidium", "D. Balantidium coli"],
		answer: 1,
		explanation: "Entamoeba histolytica causes amoebic dysentery and may produce flask-shaped ulcers and liver abscess.",
		tags: ["PYQ", "high-yield"]
	},


	// ============ BATCH 5: FUNGI ============
	{
		id: "micro_fu_001",
		topic: "fungi",
		year: "FMGE Dec 2019",
		q: "India ink preparation is classically used for diagnosis of:",
		img: null,
		options: ["A. Candida albicans", "B. Cryptococcus neoformans", "C. Aspergillus fumigatus", "D. Histoplasma capsulatum"],
		answer: 1,
		explanation: "India ink demonstrates encapsulated yeast of Cryptococcus in CSF, especially in HIV-associated meningitis.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_fu_002",
		topic: "fungi",
		year: "FMGE Jun 2018",
		q: "Most common opportunistic fungal infection in HIV is:",
		img: null,
		options: ["A. Aspergillosis", "B. Oral candidiasis", "C. Mucormycosis", "D. Histoplasmosis"],
		answer: 1,
		explanation: "Candidiasis, especially oral and esophageal candidiasis, is a common fungal opportunistic infection in HIV.",
		tags: ["PYQ"]
	},
	{
		id: "micro_fu_003",
		topic: "fungi",
		year: "FMGE Dec 2018",
		q: "Aspergillus typically forms:",
		img: null,
		options: ["A. Broad aseptate hyphae with right-angle branching", "B. Septate hyphae with acute-angle branching", "C. Budding yeast only", "D. Spherules with endospores"],
		answer: 1,
		explanation: "Aspergillus shows septate hyphae with acute-angle branching; mucor shows broad aseptate right-angle branching hyphae.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_fu_004",
		topic: "fungi",
		year: "FMGE Jun 2019",
		q: "Most common fungal cause of rhinocerebral infection in diabetics is:",
		img: null,
		options: ["A. Candida", "B. Mucor", "C. Cryptococcus", "D. Sporothrix"],
		answer: 1,
		explanation: "Mucormycosis is strongly associated with uncontrolled diabetes and ketoacidosis; it can cause rapidly progressive rhinocerebral disease.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_fu_005",
		topic: "fungi",
		year: "FMGE Dec 2020",
		q: "Germ tube test is positive in:",
		img: null,
		options: ["A. Candida albicans", "B. Aspergillus niger", "C. Cryptococcus neoformans", "D. Rhizopus"],
		answer: 0,
		explanation: "Candida albicans forms germ tubes in serum and this is a rapid identification test.",
		tags: ["PYQ"]
	},

	// ============ BATCH 5: IMMUNOLOGY BASICS ============
	{
		id: "micro_im_001",
		topic: "immunology-basics",
		year: "FMGE Dec 2019",
		q: "Immunoglobulin crossing placenta is:",
		img: null,
		options: ["A. IgA", "B. IgM", "C. IgG", "D. IgE"],
		answer: 2,
		explanation: "IgG is the only immunoglobulin class that significantly crosses placenta, providing passive immunity to fetus.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_im_002",
		topic: "immunology-basics",
		year: "FMGE Jun 2018",
		q: "First antibody produced in primary immune response is:",
		img: null,
		options: ["A. IgG", "B. IgA", "C. IgM", "D. IgE"],
		answer: 2,
		explanation: "IgM is produced first in primary response; class switching later leads to IgG/IgA/IgE as needed.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_im_003",
		topic: "immunology-basics",
		year: "FMGE Dec 2018",
		q: "Classical complement pathway is activated by:",
		img: null,
		options: ["A. Endotoxin", "B. Antigen-antibody complex", "C. Mannose residues", "D. Properdin"],
		answer: 1,
		explanation: "Classical pathway is triggered by immune complexes (IgG or IgM). Alternative pathway is antibody-independent.",
		tags: ["PYQ"]
	},
	{
		id: "micro_im_004",
		topic: "immunology-basics",
		year: "FMGE Jun 2019",
		q: "Anaphylaxis is an example of:",
		img: null,
		options: ["A. Type I hypersensitivity", "B. Type II hypersensitivity", "C. Type III hypersensitivity", "D. Type IV hypersensitivity"],
		answer: 0,
		explanation: "Anaphylaxis is immediate IgE-mediated (Type I) hypersensitivity due to mast cell degranulation.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_im_005",
		topic: "immunology-basics",
		year: "FMGE Dec 2020",
		q: "CD4:CD8 ratio in healthy adults is approximately:",
		img: null,
		options: ["A. 1:4", "B. 1:1", "C. 2:1", "D. 4:1"],
		answer: 2,
		explanation: "Normal CD4:CD8 ratio is around 2:1 and often reverses in untreated HIV infection.",
		tags: ["PYQ"]
	},

	// ============ BATCH 5: VACCINES & IMMUNITY ============
	{
		id: "micro_vi_001",
		topic: "vaccines-immunity",
		year: "FMGE Dec 2019",
		q: "BCG vaccine is a:",
		img: null,
		options: ["A. Killed vaccine", "B. Live attenuated vaccine", "C. Toxoid vaccine", "D. Subunit vaccine"],
		answer: 1,
		explanation: "BCG is a live attenuated vaccine derived from Mycobacterium bovis and is given intradermally.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_vi_002",
		topic: "vaccines-immunity",
		year: "FMGE Jun 2018",
		q: "Oral polio vaccine (OPV) provides:",
		img: null,
		options: ["A. Only systemic immunity", "B. Mucosal and humoral immunity", "C. No herd immunity", "D. No intestinal immunity"],
		answer: 1,
		explanation: "OPV induces intestinal mucosal IgA and systemic immunity, reducing transmission and providing herd effect.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_vi_003",
		topic: "vaccines-immunity",
		year: "FMGE Dec 2018",
		q: "Which is an inactivated vaccine:",
		img: null,
		options: ["A. OPV", "B. IPV", "C. BCG", "D. MMR"],
		answer: 1,
		explanation: "IPV is inactivated (killed) polio vaccine. OPV and MMR are live vaccines.",
		tags: ["PYQ"]
	},
	{
		id: "micro_vi_004",
		topic: "vaccines-immunity",
		year: "FMGE Jun 2019",
		q: "Passive immunization gives:",
		img: null,
		options: ["A. Delayed long-lasting protection", "B. Immediate short-term protection", "C. Lifelong memory", "D. Cell-mediated immunity only"],
		answer: 1,
		explanation: "Passive immunization (immunoglobulins/antisera) provides immediate but temporary protection and no immunological memory.",
		tags: ["PYQ"]
	},
	{
		id: "micro_vi_005",
		topic: "vaccines-immunity",
		year: "FMGE Dec 2020",
		q: "Contraindicated vaccines in severe immunodeficiency include:",
		img: null,
		options: ["A. Inactivated influenza vaccine", "B. Live vaccines like BCG, OPV, MMR", "C. Tetanus toxoid", "D. Hepatitis B vaccine"],
		answer: 1,
		explanation: "Live attenuated vaccines are generally contraindicated in severe immunodeficiency because of risk of vaccine-associated disease.",
		tags: ["PYQ", "high-yield"]
	},


	// ============ BATCH 6 (FINAL): STERILIZATION & DISINFECTION ============
	{
		id: "micro_sd_001",
		topic: "sterilization",
		year: "FMGE Dec 2019",
		q: "Autoclaving works by:",
		img: null,
		options: ["A. Dry heat at 160 C", "B. Moist heat under pressure (121 C, 15 psi, 15-20 min)", "C. UV radiation only", "D. Filtration"],
		answer: 1,
		explanation: "Autoclave uses steam under pressure, which denatures proteins effectively and kills spores.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_sd_002",
		topic: "sterilization",
		year: "FMGE Jun 2018",
		q: "Indicator organism for autoclave efficacy is:",
		img: null,
		options: ["A. Bacillus subtilis", "B. Geobacillus stearothermophilus", "C. Clostridium tetani", "D. E. coli"],
		answer: 1,
		explanation: "Biological indicator for steam sterilization is Geobacillus stearothermophilus spores.",
		tags: ["PYQ"]
	},
	{
		id: "micro_sd_003",
		topic: "sterilization",
		year: "FMGE Dec 2018",
		q: "For sterilization of heat-sensitive instruments, preferred method is:",
		img: null,
		options: ["A. Hot air oven", "B. Ethylene oxide gas", "C. Boiling water", "D. Pasteurization"],
		answer: 1,
		explanation: "Ethylene oxide is used for heat-sensitive materials like plastic disposables and complex medical equipment.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_sd_004",
		topic: "sterilization",
		year: "FMGE Jun 2019",
		q: "Most effective disinfectant for blood spills in hospitals is:",
		img: null,
		options: ["A. Alcohol 70%", "B. Sodium hypochlorite", "C. Phenol", "D. Chlorhexidine"],
		answer: 1,
		explanation: "Sodium hypochlorite solution is commonly recommended for blood/body fluid spill disinfection.",
		tags: ["PYQ"]
	},
	{
		id: "micro_sd_005",
		topic: "sterilization",
		year: "FMGE Dec 2020",
		q: "HEPA filters are mainly used to remove:",
		img: null,
		options: ["A. Viruses only", "B. Bacteria and fungal spores from air", "C. Dissolved toxins", "D. Endotoxins in blood"],
		answer: 1,
		explanation: "HEPA filtration removes suspended particulate matter including bacteria and fungal spores in operation theaters and labs.",
		tags: ["PYQ"]
	},

	// ============ BATCH 6 (FINAL): BACTERIOLOGY LAB METHODS ============
	{
		id: "micro_bl_001",
		topic: "bacteriology-lab",
		year: "FMGE Dec 2019",
		q: "MacConkey agar is primarily used for:",
		img: null,
		options: ["A. Gram-positive cocci", "B. Differentiation of lactose fermenting and non-fermenting gram-negative bacilli", "C. Mycobacteria culture", "D. Fungal culture"],
		answer: 1,
		explanation: "MacConkey is selective for gram-negative bacilli and differentiates lactose fermenters (pink) from non-fermenters.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_bl_002",
		topic: "bacteriology-lab",
		year: "FMGE Jun 2018",
		q: "Blood culture is most useful in diagnosis of:",
		img: null,
		options: ["A. Viral hepatitis", "B. Enteric fever in first week", "C. Amebic colitis", "D. Pulmonary TB"],
		answer: 1,
		explanation: "Blood culture is highly useful in early enteric fever before antibodies rise.",
		tags: ["PYQ"]
	},
	{
		id: "micro_bl_003",
		topic: "bacteriology-lab",
		year: "FMGE Dec 2018",
		q: "AST by Kirby-Bauer method is based on:",
		img: null,
		options: ["A. Broth dilution", "B. Disc diffusion", "C. Latex agglutination", "D. PCR"],
		answer: 1,
		explanation: "Kirby-Bauer antibiotic susceptibility testing uses disc diffusion and zone size interpretation standards.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_bl_004",
		topic: "bacteriology-lab",
		year: "FMGE Jun 2019",
		q: "Chocolate agar is enriched medium used for growth of:",
		img: null,
		options: ["A. Clostridium tetani", "B. Neisseria and Haemophilus", "C. Enterococci", "D. Vibrio cholerae"],
		answer: 1,
		explanation: "Chocolate agar provides X and V factors for fastidious organisms like H. influenzae and Neisseria.",
		tags: ["PYQ"]
	},
	{
		id: "micro_bl_005",
		topic: "bacteriology-lab",
		year: "FMGE Dec 2020",
		q: "Anaerobic culture is best transported in:",
		img: null,
		options: ["A. Open container", "B. Anaerobic transport medium", "C. Dry swab", "D. Normal saline bottle"],
		answer: 1,
		explanation: "Anaerobes require oxygen-free transport systems to preserve viability and avoid false negative cultures.",
		tags: ["PYQ"]
	},

	// ============ BATCH 6 (FINAL): CLOSTRIDIUM & ANAEROBES ============
	{
		id: "micro_ca_001",
		topic: "clostridium-anaerobes",
		year: "FMGE Dec 2019",
		q: "Tetanospasmin acts by:",
		img: null,
		options: ["A. Increasing acetylcholine release", "B. Blocking release of inhibitory neurotransmitters (GABA, glycine)", "C. Destroying motor end plate", "D. Causing demyelination"],
		answer: 1,
		explanation: "C. tetani toxin blocks release of inhibitory neurotransmitters in CNS causing spastic paralysis and risus sardonicus.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_ca_002",
		topic: "clostridium-anaerobes",
		year: "FMGE Jun 2018",
		q: "Pseudomembranous colitis is classically caused by:",
		img: null,
		options: ["A. Clostridium perfringens", "B. Clostridioides difficile", "C. Bacteroides fragilis", "D. Staphylococcus aureus"],
		answer: 1,
		explanation: "C. difficile toxin A/B causes antibiotic-associated diarrhea and pseudomembranous colitis.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_ca_003",
		topic: "clostridium-anaerobes",
		year: "FMGE Dec 2018",
		q: "Gas gangrene is commonly due to:",
		img: null,
		options: ["A. C. difficile", "B. C. tetani", "C. C. perfringens", "D. C. botulinum"],
		answer: 2,
		explanation: "C. perfringens causes myonecrosis (gas gangrene) with alpha toxin (lecithinase) and gas production in tissues.",
		tags: ["PYQ"]
	},
	{
		id: "micro_ca_004",
		topic: "clostridium-anaerobes",
		year: "FMGE Jun 2019",
		q: "Botulism presents with:",
		img: null,
		options: ["A. Spastic paralysis", "B. Descending flaccid paralysis", "C. Ascending paralysis", "D. Hemorrhagic rash"],
		answer: 1,
		explanation: "Botulinum toxin blocks acetylcholine release at neuromuscular junction causing descending symmetric flaccid paralysis.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "micro_ca_005",
		topic: "clostridium-anaerobes",
		year: "FMGE Dec 2020",
		q: "Most common anaerobe isolated from intra-abdominal infections is:",
		img: null,
		options: ["A. Clostridium tetani", "B. Bacteroides fragilis", "C. Peptostreptococcus", "D. Fusobacterium"],
		answer: 1,
		explanation: "Bacteroides fragilis is a common anaerobe in abdominal and pelvic sepsis; it is relatively aerotolerant and clinically significant.",
		tags: ["PYQ", "high-yield"]
	},

        {
                id: "mic_gpc_006",
                topic: "gram-positive-cocci",
                year: "FMGE Jun 2022",
                q: "MRSA (methicillin-resistant Staphylococcus aureus) resistance is mediated by:",
                img: null,
                options: ["A. Beta-lactamase production only", "B. mecA gene encoding PBP2a (penicillin-binding protein with low affinity for all beta-lactams)", "C. Altered outer membrane porin channels", "D. Efflux pump expelling methicillin"],
                answer: 1,
                explanation: "MRSA: mecA gene (on SCCmec) → PBP2a (PBP2') with very low affinity for ALL beta-lactam antibiotics → resistance to all penicillins, cephalosporins, carbapenems. Treatment: vancomycin (gold standard), linezolid, daptomycin, telavancin, ceftaroline (5th-gen cephalosporin active against MRSA). Screening: nasal swab culture.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_gpc_007",
                topic: "gram-positive-cocci",
                year: "FMGE Dec 2021",
                q: "Streptolysin O (SLO) from Group A Streptococcus (GAS) is used in the diagnostic test:",
                img: null,
                options: ["A. Widal test", "B. ASO titre (anti-streptolysin O) — elevated in recent GAS infection/ARF", "C. Paul-Bunnell test", "D. VDRL test"],
                answer: 1,
                explanation: "ASO titre: IgG antibody against streptolysin O. Elevated in Group A Streptococcal pharyngitis, acute rheumatic fever (ARF), post-streptococcal glomerulonephritis. ASO titre >200 Todd units = significant. Useful for confirming recent GAS infection. SLO is oxygen-labile (inactivated by oxygen) — hence NOT elevated in GAS skin infections (impetigo) where anti-DNase B is used.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_gpc_008",
                topic: "gram-positive-cocci",
                year: "FMGE Jun 2021",
                q: "Toxic shock syndrome toxin-1 (TSST-1) from S. aureus acts as a:",
                img: null,
                options: ["A. Endotoxin (LPS)", "B. Superantigen — binds MHC class II and TCR outside the antigen-binding groove → massive non-specific T-cell activation → cytokine storm", "C. Exfoliative toxin cleaving desmoglein", "D. Leucocidin killing neutrophils"],
                answer: 1,
                explanation: "TSST-1 superantigen: bypasses normal antigen processing, cross-links MHC II (on APCs) with Vβ region of TCR on T cells → polyclonal T-cell activation (up to 20% of all T cells vs. 0.01% in normal immune response) → massive cytokine storm (IL-1, TNF, IL-6) → fever, hypotension, multiorgan failure. TSS criteria: fever >39°C, hypotension, diffuse macular rash, desquamation.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_gpc_009",
                topic: "gram-positive-cocci",
                year: "FMGE Dec 2020",
                q: "Enterococcus faecalis is intrinsically resistant to which antibiotic class?",
                img: null,
                options: ["A. Penicillin", "B. Cephalosporins (intrinsic low-level resistance to all cephalosporins)", "C. Vancomycin", "D. Nitrofurantoin"],
                answer: 1,
                explanation: "Enterococcus: intrinsic resistances: (1) All cephalosporins (including 3rd/4th gen); (2) Low-level aminoglycosides (but synergy with penicillin + aminoglycoside for endocarditis); (3) Aztreonam; (4) Clindamycin; (5) TMP-SMX in vivo. VRE (vancomycin-resistant enterococcus): vanA/vanB genes. Treatment options: linezolid, daptomycin, tigecycline.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_gpc_010",
                topic: "gram-positive-cocci",
                year: "FMGE Jun 2020",
                q: "Streptococcus pneumoniae (Pneumococcus) virulence factor that prevents phagocytosis is:",
                img: null,
                options: ["A. Protein A (S. aureus)", "B. Polysaccharide capsule (antiphagocytic), pneumolysin (cytotoxin), IgA protease", "C. M protein (GAS)", "D. Coagulase"],
                answer: 1,
                explanation: "S. pneumoniae virulence: (1) Polysaccharide capsule — antiphagocytic (main virulence factor, 90+ serotypes); (2) Pneumolysin (pore-forming cytotoxin, activates complement); (3) IgA1 protease; (4) Surface adhesins (PspA, PspC). Quellung reaction: antibodies coat capsule → visible swelling under microscope. Vaccines: PCV13 (conjugate, infants), PPSV23 (polysaccharide, adults/at-risk).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_gnr_006",
                topic: "gram-negative-rods",
                year: "FMGE Jun 2022",
                q: "Pseudomonas aeruginosa produces a characteristic pigment in culture:",
                img: null,
                options: ["A. Red pigment (prodigiosin — Serratia marcescens)", "B. Pyocyanin (blue-green) + pyoverdin (fluorescent yellow-green) — grape/fruity odour", "C. Yellow pigment (Staphylococcus aureus — golden)", "D. No pigment (E. coli)"],
                answer: 1,
                explanation: "Pseudomonas aeruginosa: pyocyanin (blue-green, species-specific) + pyoverdin (fluorescent siderophore). Characteristics: aerobe, oxidase positive, non-fermenter, fruity grape-like odour. Produces mucoid alginate in cystic fibrosis. Treatment: anti-pseudomonal penicillins (piperacillin/tazobactam), carbapenems (meropenem), ceftazidime/cefepime, ciprofloxacin, aminoglycosides.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_gnr_007",
                topic: "gram-negative-rods",
                year: "FMGE Dec 2021",
                q: "Helicobacter pylori survives in the gastric acid environment by producing:",
                img: null,
                options: ["A. Catalase only", "B. Urease (hydrolyses urea → NH3 + CO2) → local alkalinisation, also used in urease-based diagnostic tests", "C. Coagulase", "D. Beta-lactamase"],
                answer: 1,
                explanation: "H. pylori urease: produces ammonia → neutralises local acid → allows survival in mucus. Diagnosis: (1) Invasive: culture (gold standard), histology (Giemsa/Warthin-Starry stain), rapid urease test (CLO test); (2) Non-invasive: urea breath test (13C/14C-UBT — best non-invasive), stool antigen test (HpSA), serology. Triple therapy: PPI + clarithromycin + amoxicillin × 14 days.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_gnr_008",
                topic: "gram-negative-rods",
                year: "FMGE Jun 2021",
                q: "Vibrio cholerae O1 El Tor biotype produces diarrhoea by:",
                img: null,
                options: ["A. Invasive mucosal damage (dysentery pattern)", "B. Cholera toxin (CT): ADP-ribosylation of Gs alpha → constitutive adenylyl cyclase activation → ↑cAMP → CFTR chloride channel activation → massive isotonic secretion ('rice water' stool)", "C. Cytotoxin directly killing enterocytes", "D. Triggering T-cell mediated intestinal inflammation"],
                answer: 1,
                explanation: "Cholera toxin (CT/CTX): B subunit binds GM1 ganglioside on enterocytes, A1 subunit ADP-ribosylates Gs protein → permanent AC activation → ↑cAMP → PKA phosphorylates CFTR → massive Cl- (and Na+ and H2O) secretion into lumen. No mucosal damage. 'Rice water' stool (isotonic fluid with mucus). Rehydration (ORS) is mainstay of treatment.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_gnr_009",
                topic: "gram-negative-rods",
                year: "FMGE Dec 2020",
                q: "Haemophilus influenzae type b (Hib) polysaccharide capsule (PRP — polyribosyl ribitol phosphate) is used in:",
                img: null,
                options: ["A. Live attenuated vaccine", "B. Conjugate vaccine (PRP conjugated to carrier protein — DT, TT, OMP) — T-cell dependent response, effective in infants", "C. Killed whole-cell vaccine", "D. Inactivated toxin vaccine (toxoid)"],
                answer: 1,
                explanation: "Hib conjugate vaccine (PRP-T, PRP-OMP): polysaccharide-protein conjugate → T-cell dependent immune response → immunological memory + effective in infants <2 years (unlike pure polysaccharide vaccines which are T-independent, not effective in infants). Prevents Hib meningitis, epiglottitis, septicaemia. Part of pentavalent vaccine in India's UIP.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_gnr_010",
                topic: "gram-negative-rods",
                year: "FMGE Jun 2020",
                q: "MacConkey agar differentiates bacteria based on:",
                img: null,
                options: ["A. Haemolysis pattern (like blood agar)", "B. Lactose fermentation: lactose fermenters = pink/red colonies (e.g., E. coli, Klebsiella); non-fermenters = colourless (Salmonella, Shigella, Pseudomonas)", "C. Oxygen requirements", "D. Urease production"],
                answer: 1,
                explanation: "MacConkey agar: selective (bile salts, crystal violet — inhibit Gram-positive) and differential (lactose + neutral red indicator). Lactose fermenters: acid production → red/pink colonies. E. coli: pink mucoid; Klebsiella: very mucoid pink; Salmonella/Shigella/Proteus: colourless (non-fermenters). CLED agar: lactose-electrolyte-deficient (UTI screening, no swarming of Proteus).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_tb_006",
                topic: "mycobacteria-tb",
                year: "FMGE Jun 2022",
                q: "Isoniazid (INH) mechanism of action against M. tuberculosis is:",
                img: null,
                options: ["A. Inhibits cell wall peptidoglycan synthesis (like beta-lactams)", "B. Inhibits mycolic acid synthesis (via KatG activation → inhibits InhA, an enoyl-ACP reductase)", "C. Inhibits DNA gyrase (like fluoroquinolones)", "D. Inhibits protein synthesis at 30S ribosome (like aminoglycosides)"],
                answer: 1,
                explanation: "INH: prodrug activated by KatG (catalase-peroxidase) → isonicotinoyl radical → inhibits InhA (enoyl-acyl carrier protein reductase) → blocks mycolic acid synthesis → loss of mycobacterial cell wall integrity. Most common resistance: katG mutation (no activation). INH prophylaxis: 6 months for latent TB. Side effects: hepatitis, peripheral neuropathy (give pyridoxine/B6), SLE-like.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_tb_007",
                topic: "mycobacteria-tb",
                year: "FMGE Dec 2021",
                q: "Extensively drug-resistant TB (XDR-TB) is defined as TB resistant to:",
                img: null,
                options: ["A. INH and rifampicin only (MDR-TB)", "B. INH + rifampicin (MDR) + any fluoroquinolone + at least one injectable second-line drug (amikacin, kanamycin, capreomycin)", "C. All four first-line drugs", "D. Rifampicin alone"],
                answer: 1,
                explanation: "TB drug resistance definitions: MDR-TB = resistant to INH + rifampicin (±others). XDR-TB (old WHO 2021 definition) = MDR-TB + any fluoroquinolone + any injectable (amikacin/capreomycin/kanamycin). New WHO 2021 XDR-TB = MDR-TB + resistant to fluoroquinolone + ≥1 of bedaquiline/linezolid. Pre-XDR-TB: MDR-TB + fluoroquinolone resistance.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_tb_008",
                topic: "mycobacteria-tb",
                year: "FMGE Jun 2021",
                q: "Ghon complex in primary TB consists of:",
                img: null,
                options: ["A. Apical cavity with fibrosis (secondary/reactivation TB)", "B. Ghon focus (subpleural parenchymal lesion, usually lower lobe) + lymphangitis + hilar lymphadenopathy = Ghon complex (primary complex/Ranke complex)", "C. Miliary TB pattern", "D. Pleural effusion only"],
                answer: 1,
                explanation: "Primary TB: inhaled M. tuberculosis → subpleural Ghon focus (usually lower lobe/mid-zone, opposite to secondary TB) + lymphangitis + hilar/mediastinal lymphadenopathy = Ghon complex. In children, lymph nodes dominate. Calcified Ghon complex = Ranke complex. Secondary (reactivation) TB: apical segments (higher pO2) → cavitation.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_tb_009",
                topic: "mycobacteria-tb",
                year: "FMGE Dec 2020",
                q: "Mantoux (tuberculin skin test) is read at 48–72 hours. Induration ≥10 mm is positive for:",
                img: null,
                options: ["A. All individuals regardless of vaccination status", "B. Recent immigrants, healthcare workers, close contacts, children <5 years, diabetes/CKD/immunocompromised", "C. Only BCG-unvaccinated individuals", "D. Only HIV-positive patients"],
                answer: 1,
                explanation: "Mantoux positivity thresholds: ≥5 mm = HIV+, close TB contact, fibrotic chest X-ray, organ transplant recipients; ≥10 mm = healthcare workers, recent immigrants (<5 years), diabetes, CKD, IV drug users, children <5 years, institutionalised; ≥15 mm = persons with no identified risk. BCG vaccination can cause false-positive up to 10–15 mm. IGRA (interferon-gamma release assay): not affected by BCG.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_tb_010",
                topic: "mycobacteria-tb",
                year: "FMGE Jun 2020",
                q: "The most common extrapulmonary site of tuberculosis in India is:",
                img: null,
                options: ["A. CNS (meningitis)", "B. Lymph node TB (scrofula) — most common extrapulmonary site", "C. Bone and joint TB (Pott's disease)", "D. Renal TB"],
                answer: 1,
                explanation: "Extrapulmonary TB frequency: lymph node (most common, ~35%) > pleural > genitourinary > bone & joint (Pott's disease = vertebral TB, most common skeletal site) > miliary > CNS. Pott's disease: thoracolumbar junction most common, psoas abscess (cold abscess). TB meningitis: basilar meningitis, cranial nerve palsies, hydrocephalus.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_tre_006",
                topic: "treponema-spirochetes",
                year: "FMGE Jun 2022",
                q: "Jarisch-Herxheimer reaction after penicillin for syphilis is due to:",
                img: null,
                options: ["A. Penicillin allergy", "B. Mass killing of treponemes → sudden release of lipoproteins → cytokine storm (TNF, IL-6) → fever, chills, headache, myalgias within 2–8 hours", "C. Overdose of penicillin", "D. Superinfection by another pathogen"],
                answer: 1,
                explanation: "Jarisch-Herxheimer reaction: occurs 2–8 hours after first dose of penicillin for syphilis (or other spirochetal infections: leptospirosis, Lyme). Spirochete killing → release of antigens/endotoxin-like lipoproteins → cytokine storm → fever, rigors, headache, myalgia, flushing. Especially dangerous in neurosyphilis (may worsen). Management: antipyretics, continue antibiotics.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_tre_007",
                topic: "treponema-spirochetes",
                year: "FMGE Dec 2021",
                q: "Non-treponemal tests for syphilis (VDRL/RPR) detect antibodies against:",
                img: null,
                options: ["A. Treponemal surface proteins (TP-PA)", "B. Cardiolipin-lecithin-cholesterol antigen (reagin antibodies — cross-reactive with syphilitic lesion lipids)", "C. Anti-treponemal IgG only", "D. Flagellar proteins of Treponema"],
                answer: 1,
                explanation: "Non-treponemal tests (VDRL, RPR): detect IgM and IgG against cardiolipin-cholesterol-lecithin antigen. Cheap, quantitative (titre correlates with disease activity), useful for treatment monitoring. False positives: pregnancy, SLE, APS, leprosy, malaria, viral infections. Treponemal tests (FTA-ABS, TPPA, TPHA): detect anti-treponemal antibodies — remain positive for life.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_tre_008",
                topic: "treponema-spirochetes",
                year: "FMGE Jun 2021",
                q: "Weil's disease (leptospiral jaundice) is the severe form of leptospirosis characterised by:",
                img: null,
                options: ["A. Haemorrhagic fever with shock only", "B. Jaundice + acute kidney injury + haemorrhage + uveitis (caused by L. interrogans, serogroup icterohaemorrhagiae)", "C. Meningitis only", "D. Pulmonary infiltrates only"],
                answer: 1,
                explanation: "Leptospirosis (Weil's disease — severe form): L. interrogans → hepatic damage (jaundice), AKI (non-oliguric → oliguric in severe), haemorrhage (conjunctival, pulmonary haemorrhage syndrome — Leptospiral pulmonary haemorrhage syndrome, LPHS), uveitis. Diagnosis: MAT (microscopic agglutination test) gold standard, ELISA (IgM). Treatment: doxycycline (mild), IV penicillin/ceftriaxone (severe).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_tre_009",
                topic: "treponema-spirochetes",
                year: "FMGE Dec 2020",
                q: "Bull's eye/target rash (erythema migrans) expanding from a tick bite site is the hallmark of:",
                img: null,
                options: ["A. Syphilis (chancre)", "B. Lyme disease (Borrelia burgdorferi, transmitted by Ixodes tick)", "C. Relapsing fever (Borrelia recurrentis)", "D. Rocky Mountain spotted fever"],
                answer: 1,
                explanation: "Lyme disease: Borrelia burgdorferi (USA — Ixodes scapularis tick; Europe — Ixodes ricinus). Stage 1: Erythema migrans (bull's eye rash, >5 cm, within 30 days). Stage 2: disseminated — cardiac (AV block), neurological (Bell's palsy, meningoencephalitis), multiple EM. Stage 3: late — Lyme arthritis (large joints). Treatment: doxycycline (early/neurological); amoxicillin; ceftriaxone (disseminated).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_tre_010",
                topic: "treponema-spirochetes",
                year: "FMGE Jun 2020",
                q: "Relapsing fever is caused by Borrelia recurrentis (epidemic) transmitted by:",
                img: null,
                options: ["A. Ixodes tick", "B. Body louse (Pediculus humanus corporis) for epidemic relapsing fever; soft tick (Ornithodoros) for endemic", "C. Anopheles mosquito", "D. Aedes mosquito"],
                answer: 1,
                explanation: "Relapsing fever: Borrelia recurrentis (epidemic, louse-borne, associated with crowding/war/famine) transmitted by body louse Pediculus humanus corporis. Borrelia hermsii (tick-borne, endemic). Pathogenesis: antigenic variation of variable major proteins (VMP) → episodic fever with afebrile periods. Doxycycline treatment. Jarisch-Herxheimer reaction common.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_rick_006",
                topic: "rickettsia-atypicals",
                year: "FMGE Jun 2022",
                q: "The Weil-Felix test for Rickettsia diagnoses using cross-reacting antigens of:",
                img: null,
                options: ["A. Bartonella henselae agglutination", "B. OX-2, OX-19, OX-K antigens of Proteus vulgaris/mirabilis (cross-react with Rickettsia polysaccharides)", "C. Klebsiella pneumoniae", "D. E. coli O antigens"],
                answer: 1,
                explanation: "Weil-Felix test: Rickettsia share polysaccharide antigens with Proteus vulgaris (OX-19, OX-2) and P. mirabilis (OX-K). R. prowazekii (typhus): OX-19+, OX-2+; R. rickettsii (RMSF): OX-19+, OX-2+; R. tsutsugamushi (scrub typhus): OX-K+. Low sensitivity/specificity. Gold standard: indirect immunofluorescence (IFA). PCR increasingly used.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_rick_007",
                topic: "rickettsia-atypicals",
                year: "FMGE Dec 2021",
                q: "Scrub typhus (tsutsugamushi fever) is transmitted by:",
                img: null,
                options: ["A. Body louse (epidemic typhus)", "B. Trombiculid mite larvae (chiggers) — Orientia tsutsugamushi", "C. Rat flea (murine/endemic typhus)", "D. Hard tick (RMSF)"],
                answer: 1,
                explanation: "Scrub typhus: Orientia tsutsugamushi, transmitted by larval stage (chiggers) of Trombiculid mites (Leptotrombidium). Characteristics: eschar (painless, black, scab — at bite site), fever, headache, lymphadenopathy, maculopapular rash. Common in India (Himalayan foothills, peninsular India). Treatment: doxycycline (first line), azithromycin (pregnancy/children).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_rick_008",
                topic: "rickettsia-atypicals",
                year: "FMGE Jun 2021",
                q: "Mycoplasma pneumoniae causes 'atypical' pneumonia and is detected by:",
                img: null,
                options: ["A. Culture on MacConkey agar (48 hours)", "B. Cold agglutinins (IgM against I antigen on RBCs), Mycoplasma IgM/IgG serology (complement fixation, ELISA), PCR of respiratory samples", "C. Gram stain (Gram-negative small rods)", "D. Ziehl-Neelsen stain"],
                answer: 1,
                explanation: "Mycoplasma pneumoniae: no cell wall (Gram stain-negative, penicillin-resistant). Atypical pneumonia: insidious onset, non-productive cough, patchy infiltrates on CXR, symptoms worse than X-ray appears. Cold agglutinins (IgM, I antigen) in 50–75%. Haemolytic anaemia from cold agglutinins. Treatment: doxycycline, azithromycin, fluoroquinolones (NOT beta-lactams).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_rick_009",
                topic: "rickettsia-atypicals",
                year: "FMGE Dec 2020",
                q: "Q fever (Coxiella burnetii) is unique among rickettsial organisms in that:",
                img: null,
                options: ["A. It is transmitted by louse bites like typhus", "B. It forms spore-like structures, is transmitted by inhalation of contaminated aerosols (not arthropod vector), and causes chronic endocarditis", "C. It responds only to rifampicin", "D. It is diagnosed by Weil-Felix positive OX-19"],
                answer: 1,
                explanation: "Coxiella burnetii (Q fever): unique features: (1) No rash; (2) No arthropod vector required — inhaled from contaminated animal products (parturient cats, goats, sheep); (3) Spore-like form (very resistant to environmental conditions); (4) Weil-Felix NEGATIVE; (5) Phase I IgG >1:800 (chronic Q fever/endocarditis marker). Treatment: doxycycline; chronic endocarditis: doxycycline + hydroxychloroquine (18 months).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_rick_010",
                topic: "rickettsia-atypicals",
                year: "FMGE Jun 2020",
                q: "Legionella pneumophila causes Legionnaires' disease and is diagnosed using:",
                img: null,
                options: ["A. Standard blood culture (aerobic bottle)", "B. Legionella urinary antigen test (detects serogroup 1, most common) + culture on BCYE agar (buffered charcoal yeast extract) + PCR", "C. Cold agglutinin test", "D. Weil-Felix agglutination"],
                answer: 1,
                explanation: "Legionella: Gram-negative rod, obligate aerobe, environmental water source (cooling towers, air conditioning, hospital water). BCYE agar (supplemented with L-cysteine and iron — specific). Urinary antigen: detects L. pneumophila SG1 only (50–80% of cases). Treatment: azithromycin or fluoroquinolone (first line), doxycycline. NOT macrolide-resistant.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_hiv_006",
                topic: "hiv-aids",
                year: "FMGE Jun 2022",
                q: "The CD4+ T cell count threshold for initiating ART according to current WHO guidelines is:",
                img: null,
                options: ["A. CD4 <200 cells/μL only", "B. All HIV-positive individuals regardless of CD4 count (treat all)", "C. CD4 <350 cells/μL", "D. CD4 <500 cells/μL only"],
                answer: 1,
                explanation: "WHO 2021 guidelines: 'Test and Treat' — ART for ALL HIV-positive persons regardless of CD4 count or WHO clinical stage. Rationale: ART reduces transmission, prevents disease progression, improves survival. Urgency: immediate ART for pregnant women (PMTCT), CD4 <200, WHO stage 3/4, cryptococcal meningitis (after 2–4 weeks of antifungals), TB (after 2 weeks of ATT, or after 8 weeks if CD4 <50).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_hiv_007",
                topic: "hiv-aids",
                year: "FMGE Dec 2021",
                q: "PCP (Pneumocystis jirovecii pneumonia) prophylaxis is given when CD4 count is:",
                img: null,
                options: ["A. CD4 <500 cells/μL", "B. CD4 <200 cells/μL (or CD4 % <14%)", "C. CD4 <350 cells/μL", "D. Only when patient has symptoms"],
                answer: 1,
                explanation: "OI prophylaxis in HIV: PCP (TMP-SMX/co-trimoxazole DS): start when CD4 <200/μL; stop when CD4 >200 for ≥3 months on ART. Toxoplasma: TMP-SMX (same drug); start CD4 <100 + positive Toxoplasma IgG; stop CD4 >200 × 3 months. MAC (Mycobacterium avium complex): azithromycin weekly; CD4 <50/μL. CMV: CD4 <50/μL (prophylaxis not routinely recommended now).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_hiv_008",
                topic: "hiv-aids",
                year: "FMGE Jun 2021",
                q: "The 'Window period' in HIV infection refers to:",
                img: null,
                options: ["A. Time between sexual exposure and symptom onset", "B. Time between HIV infection and appearance of detectable antibodies by standard ELISA/ECLIA (~3–12 weeks)", "C. Time ART takes to suppress viral load", "D. Duration of acute retroviral syndrome"],
                answer: 1,
                explanation: "HIV window period: infection → seroconversion lag. HIV RNA (NAT): detectable within 10 days. p24 antigen: 2–3 weeks. 4th generation tests (p24 Ag + antibody): window period ~15–20 days. Antibody-only tests: 3–12 weeks. Implications: transfusion safety, post-exposure testing, PREP/PEXP protocols. In India: 4th generation CLIA/ECLIA recommended.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_hiv_009",
                topic: "hiv-aids",
                year: "FMGE Dec 2020",
                q: "Integrase strand transfer inhibitors (INSTIs) like dolutegravir work by:",
                img: null,
                options: ["A. Blocking reverse transcriptase", "B. Preventing HIV integrase from inserting viral DNA into host chromosome", "C. Blocking viral gp120 attachment to CD4", "D. Blocking HIV protease (gag-pol cleavage)"],
                answer: 1,
                explanation: "HIV life cycle drugs: (1) Attachment/fusion: maraviroc (CCR5 antagonist), enfuvirtide (T-20, gp41 fusion inhibitor); (2) Reverse transcriptase: NRTIs (tenofovir, emtricitabine), NNRTIs (efavirenz, nevirapine); (3) Integrase: INSTIs (dolutegravir, raltegravir, bictegravir — high barrier to resistance); (4) Protease: PIs (ritonavir-boosted lopinavir, darunavir). First-line: TDF/3TC/DTG.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_hiv_010",
                topic: "hiv-aids",
                year: "FMGE Jun 2020",
                q: "Post-exposure prophylaxis (PEP) for healthcare workers after needlestick injury from HIV+ patient should be started:",
                img: null,
                options: ["A. Within 1 week, for 28 days", "B. As soon as possible (within 72 hours, ideally within 2 hours), for 28 days with 2–3 drug ART regimen", "C. Only if source patient's HIV viral load is detectable", "D. Only for high-risk (anal) exposure"],
                answer: 1,
                explanation: "PEP: started ASAP (within 2 hours ideal, maximum 72 hours). Regimen: TDF/FTC + dolutegravir or raltegravir × 28 days. Baseline: HIV Ag/Ab test of exposed person. Follow-up: repeat test at 6 weeks, 3 months, 6 months. Risk of transmission: needlestick 0.3%; sexual (receptive anal) 1–3%; needlestick from known HIV+ source is higher if viral load high.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_hep_006",
                topic: "hepatitis-viruses",
                year: "FMGE Jun 2022",
                q: "In chronic hepatitis B, which marker indicates high viral replication and infectivity?",
                img: null,
                options: ["A. Anti-HBs (surface antibody)", "B. HBeAg (e-antigen) and high HBV DNA level — core promoter precore mutation: HBeAg negative but high HBV DNA", "C. Anti-HBc IgG alone", "D. HBsAg disappearance"],
                answer: 1,
                explanation: "Hepatitis B markers: HBsAg (infection), anti-HBs (immunity — from vaccination or recovery), anti-HBc IgM (acute infection), anti-HBc IgG (past exposure), HBeAg (active replication, high infectivity), anti-HBe (low replication state). HBV DNA: most accurate replication marker. Precore mutation: HBeAg negative chronic hepatitis B with high viral load — worse prognosis.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_hep_007",
                topic: "hepatitis-viruses",
                year: "FMGE Dec 2021",
                q: "Hepatitis D (delta) virus can only infect patients who are:",
                img: null,
                options: ["A. Immunocompromised", "B. Infected with Hepatitis B (HDV is a defective RNA virus requiring HBsAg as envelope protein)", "C. Vaccinated against Hepatitis A", "D. Exposed to faecal-oral contaminated water"],
                answer: 1,
                explanation: "Hepatitis D (delta) virus: defective RNA virus (virusoid), requires HBV HBsAg as its envelope coat → can ONLY infect HBsAg-positive individuals. Co-infection (simultaneous HBV+HDV): usually self-limiting. Superinfection (HDV in chronic HBV): more severe, higher risk of fulminant hepatitis and cirrhosis. Prevention: HBV vaccination prevents HDV.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_hep_008",
                topic: "hepatitis-viruses",
                year: "FMGE Jun 2021",
                q: "Hepatitis C (HCV) is diagnosed in the window period (before antibody seroconversion) by:",
                img: null,
                options: ["A. Anti-HCV IgM ELISA only", "B. HCV RNA (NAT/PCR) — detectable within 1–2 weeks of infection (before anti-HCV which takes 8–11 weeks)", "C. Liver biopsy", "D. LFT showing elevated ALT only"],
                answer: 1,
                explanation: "HCV diagnosis: (1) Anti-HCV antibody (ELISA/CLIA — screening, window period ~8–11 weeks); (2) HCV RNA (PCR — confirms viraemia, used in window period, also for treatment monitoring); (3) HCV core antigen (p22 — detectable 1–2 days after RNA, cheaper than PCR). Genotyping: determines treatment duration/regimen with DAAs (direct-acting antivirals — sofosbuvir-based).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_hep_009",
                topic: "hepatitis-viruses",
                year: "FMGE Dec 2020",
                q: "Hepatitis E virus causes high mortality in:",
                img: null,
                options: ["A. Elderly males", "B. Pregnant women (especially third trimester — mortality up to 25–30% from fulminant hepatic failure)", "C. Infants below 1 year", "D. Immunocompromised patients"],
                answer: 1,
                explanation: "Hepatitis E virus (HEV): RNA virus, faecal-oral transmission (zoonotic from pigs). Usually self-limiting. Exception: pregnant women (especially 3rd trimester) → 20–30% mortality from acute liver failure (fulminant hepatic failure). Genotype 1 and 2 (human strains) cause epidemics. Genotype 3 and 4 (zoonotic, developed world, immunocompromised chronic hepatitis).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_hep_010",
                topic: "hepatitis-viruses",
                year: "FMGE Jun 2020",
                q: "The hallmark serological pattern of resolved hepatitis B (natural immunity) is:",
                img: null,
                options: ["A. HBsAg+, anti-HBc+, anti-HBs negative", "B. HBsAg negative, anti-HBc IgG positive, anti-HBs positive", "C. Anti-HBs positive alone (vaccination pattern)", "D. HBeAg positive, anti-HBe negative"],
                answer: 1,
                explanation: "Hepatitis B serology interpretation: Resolved infection: HBsAg (-), anti-HBc IgG (+), anti-HBs (+). Vaccination: anti-HBs (+) only, anti-HBc (-). Acute infection: HBsAg (+), anti-HBc IgM (+). Chronic infection: HBsAg (+) for >6 months, anti-HBc IgG (+), anti-HBs (-). 'Core window period': all negative except anti-HBc IgM.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_herp_006",
                topic: "herpes-viruses",
                year: "FMGE Jun 2022",
                q: "CMV (cytomegalovirus) retinitis in AIDS patients is treated with:",
                img: null,
                options: ["A. Acyclovir (ineffective against CMV)", "B. Ganciclovir (IV induction) or valganciclovir (oral — preferred for non-sight-threatening), intravitreal ganciclovir implant", "C. Foscarnet only if ganciclovir available", "D. Ribavirin"],
                answer: 1,
                explanation: "CMV retinitis: AIDS-defining illness (CD4 <50/μL). Classic: 'pizza pie retinopathy' (haemorrhages + exudates). Treatment: valganciclovir (oral, 900 mg BD × 21 days induction, then maintenance) OR ganciclovir IV. Foscarnet/cidofovir: for ganciclovir-resistant CMV or renal-sparing needed. ART to raise CD4 count is most important. Prophylaxis: valganciclovir if CD4 <50.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_herp_007",
                topic: "herpes-viruses",
                year: "FMGE Dec 2021",
                q: "EBV (Epstein-Barr virus) infects B lymphocytes by binding to:",
                img: null,
                options: ["A. CD4 receptor (like HIV)", "B. CD21 (CR2 — complement receptor 2)", "C. CD8 receptor", "D. CD3 (T-cell receptor complex)"],
                answer: 1,
                explanation: "EBV: herpesvirus (HHV-4), binds CD21 (complement receptor 2/CR2) on B cells via gp350/220 → immortalises B cells. Causes infectious mononucleosis (heterophile antibody + Paul-Bunnell test, monospot test). EBV-associated malignancies: Burkitt's lymphoma (Africa), Hodgkin's lymphoma (mixed cellularity), nasopharyngeal carcinoma (endemic Asia), CNS lymphoma (AIDS), PTLD.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_herp_008",
                topic: "herpes-viruses",
                year: "FMGE Jun 2021",
                q: "VZV (varicella-zoster virus) reactivation causes shingles (herpes zoster). The antiviral treatment is most effective when started within:",
                img: null,
                options: ["A. 48 hours of rash onset", "B. 72 hours of rash onset (acyclovir, valacyclovir, or famciclovir)", "C. 1 week of rash", "D. At any time during illness"],
                answer: 1,
                explanation: "Herpes zoster (shingles): VZV reactivation from dorsal root ganglia where it lies dormant after primary varicella. Treatment: valacyclovir (1 g TDS × 7 days) or famciclovir (500 mg TDS × 7 days) — start within 72 hours of rash. Reduces severity and duration of post-herpetic neuralgia (PHN). Zoster vaccine (live attenuated — Zostavax or recombinant subunit — Shingrix) prevents reactivation.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_herp_009",
                topic: "herpes-viruses",
                year: "FMGE Dec 2020",
                q: "Ramsay Hunt syndrome is caused by VZV reactivation in:",
                img: null,
                options: ["A. Trigeminal ganglion → trigeminal neuralgia", "B. Geniculate ganglion of CN VII → ipsilateral facial palsy + ear vesicles + hearing loss + vertigo", "C. L4/L5 dermatomal distribution", "D. Coeliac ganglion"],
                answer: 1,
                explanation: "Ramsay Hunt syndrome: VZV reactivation in geniculate ganglion of facial nerve (CN VII). Triad: (1) Ipsilateral LMN facial palsy; (2) Otalgia + vesicles in external auditory canal/auricle; (3) Sensorineural hearing loss/tinnitus/vertigo. Treatment: acyclovir + prednisolone. Worse prognosis than Bell's palsy for recovery.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_herp_010",
                topic: "herpes-viruses",
                year: "FMGE Jun 2020",
                q: "HHV-8 (Kaposi sarcoma herpesvirus, KSHV) causes which malignancies?",
                img: null,
                options: ["A. Burkitt's lymphoma and nasopharyngeal carcinoma", "B. Kaposi's sarcoma, primary effusion lymphoma (PEL), multicentric Castleman disease", "C. Cervical carcinoma", "D. Adult T-cell leukaemia/lymphoma"],
                answer: 1,
                explanation: "HHV-8/KSHV: (1) Kaposi's sarcoma — vascular tumour (spindle cells), common in AIDS (CD4 <200), transplant-related, classic (Mediterranean elderly men), endemic (Africa). Treatment: ART (AIDS-KS), systemic chemotherapy (liposomal doxorubicin). (2) PEL (lymphoma in body cavities); (3) Multicentric Castleman disease. HHV-8 encodes viral analogues of cellular oncogenes.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_den_006",
                topic: "dengue-arboviruses",
                year: "FMGE Jun 2022",
                q: "Dengue NS1 antigen is detectable in the earliest phase of dengue fever at:",
                img: null,
                options: ["A. Day 7–10 of illness", "B. Days 1–5 of fever (viremic phase), before antibodies appear", "C. Only during dengue haemorrhagic fever", "D. After defervescence only"],
                answer: 1,
                explanation: "Dengue diagnosis by phase: Days 1–5 (febrile): NS1 antigen (>90% sensitivity, day 1–5); Dengue IgM: appears after day 5. Day 5 onwards: both NS1 and IgM useful. IgG: secondary infection (appears earlier, higher titre). PCR: gold standard for serotyping. NS1 ELISA or rapid RDT for early diagnosis. Dengue has 4 serotypes (DENV 1–4).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_den_007",
                topic: "dengue-arboviruses",
                year: "FMGE Dec 2021",
                q: "Dengue warning signs (WHO 2009) that indicate severe dengue include:",
                img: null,
                options: ["A. Mild thrombocytopenia (platelets 100,000–150,000) only", "B. Abdominal pain/tenderness, persistent vomiting, fluid accumulation, mucosal bleeding, lethargy, liver >2 cm, rising haematocrit with rapid platelet decline", "C. Fever alone lasting >7 days", "D. Skin rash without any other features"],
                answer: 1,
                explanation: "Dengue warning signs (WHO 2009) — hospitalise if present: (1) Abdominal pain/tenderness; (2) Persistent vomiting; (3) Clinical fluid accumulation (ascites, pleural effusion); (4) Mucosal bleed; (5) Lethargy/restlessness; (6) Liver enlargement >2 cm; (7) Rising HCT with rapid fall in platelets. Severe dengue: severe plasma leakage, severe bleeding, severe organ involvement.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_den_008",
                topic: "dengue-arboviruses",
                year: "FMGE Jun 2021",
                q: "Chikungunya is characterised by disabling arthritis/arthralgia which can persist for months. The causative agent is:",
                img: null,
                options: ["A. Dengue virus (Flavivirus)", "B. Chikungunya virus (Togavirus/Alphavirus), transmitted by Aedes mosquito, NOT by Culex", "C. Japanese encephalitis virus (Flavivirus, Culex mosquito)", "D. Yellow fever virus (Flavivirus)"],
                answer: 1,
                explanation: "Chikungunya: alphavirus (Togaviridae), transmitted by Aedes aegypti and Aedes albopictus. 'Chikungunya' = 'that which bends up' in Makonde language (severe arthralgia). Features: abrupt fever, severe polyarthritis (bilateral, symmetric, peripheral — hands, wrists, ankles), maculopapular rash. No specific antiviral. NSAIDs/hydroxychloroquine for chronic arthritis.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_den_009",
                topic: "dengue-arboviruses",
                year: "FMGE Dec 2020",
                q: "Japanese encephalitis (JE) vaccine schedule in India (National Immunisation Programme) includes:",
                img: null,
                options: ["A. Two doses only at 6 weeks and 10 weeks", "B. SA 14-14-2 live attenuated or inactivated vaccine at 9–12 months with a booster at 16–24 months (in endemic districts)", "C. Killed whole-virus vaccine at 12 and 24 months with annual boosters", "D. Only in adults travelling to endemic areas"],
                answer: 1,
                explanation: "JE vaccine in India (NIP): SA 14-14-2 live attenuated vaccine (single dose → >96% protective efficacy). Schedule: 9–12 months (with measles vaccine) + booster at 16–24 months in 30 endemic districts of India. Culex tritaeniorhynchus mosquito transmits JE; birds and pigs are reservoir hosts. JE encephalitis: seizures, extrapyramidal signs, high mortality/morbidity.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_den_010",
                topic: "dengue-arboviruses",
                year: "FMGE Jun 2020",
                q: "Zika virus infection is associated with which congenital complication?",
                img: null,
                options: ["A. Congenital rubella syndrome (cataracts, deafness, cardiac)", "B. Microcephaly and other congenital brain anomalies (from maternal infection during pregnancy)", "C. Congenital varicella syndrome", "D. Congenital toxoplasmosis (hydrocephalus, chorioretinitis)"],
                answer: 1,
                explanation: "Zika virus: flavivirus, transmitted by Aedes mosquitoes (also sexual transmission, blood). Congenital Zika syndrome: microcephaly, intracranial calcifications, cortical malformations, stillbirth. Guillain-Barré syndrome in adults. Diagnosis: PCR (blood, urine, semen); Zika IgM (cross-reacts with dengue). Brazilian outbreak 2015–2016. No vaccine available. Pregnant women should avoid endemic areas.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_mal_006",
                topic: "malaria-micro",
                year: "FMGE Jun 2022",
                q: "Thick and thin blood smears stained with Giemsa are the gold standard for malaria diagnosis. The thick smear is used for:",
                img: null,
                options: ["A. Species identification (morphology)", "B. Parasite detection (higher sensitivity — concentrates parasites from 20× larger blood volume)", "C. Drug sensitivity testing", "D. Counting platelets"],
                answer: 1,
                explanation: "Malaria smears: Thick smear = screening, diagnosis (20× more sensitive, detects low parasitaemia); Thin smear = species identification (parasite morphology, % parasitaemia). Stain: Giemsa (Field stain rapid), Leishman stain. Species differentiation: P. falciparum (rings + gametocytes, no enlarged RBCs, accolé/appliqué forms); P. vivax/P. ovale (Schüffner dots, enlarged RBCs); P. malariae (band forms).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_mal_007",
                topic: "malaria-micro",
                year: "FMGE Dec 2021",
                q: "Artesunate is preferred over quinine for severe P. falciparum malaria because:",
                img: null,
                options: ["A. Quinine is no longer available", "B. IV artesunate reduces mortality by 35% compared to quinine, faster parasite clearance, fewer side effects (no cinchonism, hypoglycaemia, cardiac arrhythmias)", "C. Artesunate is oral only", "D. Quinine is more expensive"],
                answer: 1,
                explanation: "Severe malaria treatment (WHO 2015): IV artesunate is FIRST LINE (replaced quinine). Quinine side effects: cinchonism (tinnitus, deafness, headache), hypoglycaemia (stimulates insulin), QTc prolongation. Artesunate advantages: faster parasite clearance, lower mortality (AQUAMAT/SEAQUAMAT trials), safer. Artemisinin combination therapies (ACTs): first-line uncomplicated falciparum (artemether-lumefantrine in India).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_mal_008",
                topic: "malaria-micro",
                year: "FMGE Jun 2021",
                q: "Chloroquine-resistant P. falciparum is most prevalent in:",
                img: null,
                options: ["A. West Africa only", "B. Sub-Saharan Africa, Southeast Asia, Indian subcontinent — chloroquine resistance now worldwide for falciparum", "C. South America (Amazon) only", "D. P. falciparum remains fully chloroquine-sensitive globally"],
                answer: 1,
                explanation: "Chloroquine resistance (CQR) in P. falciparum: CQR is due to pfCRT (chloroquine resistance transporter) mutation K76T. Widespread globally. CQR P. vivax: emerging in Papua New Guinea, Indonesia. Treatment: ACT (artemether-lumefantrine, artesunate-SP, artesunate-amodiaquine) in India. Chloroquine still effective for P. vivax in most of India and for P. malariae.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_mal_009",
                topic: "malaria-micro",
                year: "FMGE Dec 2020",
                q: "Hypnozoites (dormant liver stage) of Plasmodium vivax/ovale are eliminated by:",
                img: null,
                options: ["A. Chloroquine", "B. Primaquine (8-aminoquinoline — radical cure)", "C. Artesunate", "D. Doxycycline"],
                answer: 1,
                explanation: "Radical cure (hypnozoites): only primaquine targets hepatic hypnozoites of P. vivax and P. ovale. Prevents relapse. Dose: 15 mg/day × 14 days (India). Contraindicated: G6PD deficiency (check before prescribing), pregnancy. Tafenoquine (new drug): single dose anti-hypnozoite. Blood-stage drugs (chloroquine, ACT) kill erythrocytic stages but not hypnozoites.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_mal_010",
                topic: "malaria-micro",
                year: "FMGE Jun 2020",
                q: "Blackwater fever (haemoglobinuria) in malaria is associated with:",
                img: null,
                options: ["A. P. vivax infections only", "B. P. falciparum malaria (severe intravascular haemolysis → haemoglobinaemia → haemoglobinuria → dark urine) and quinine use in G6PD-deficient patients", "C. Prophylactic chloroquine use", "D. P. malariae nephrotic syndrome"],
                answer: 1,
                explanation: "Blackwater fever: dark (black/brown) urine from haemoglobinaemia + haemoglobinuria due to massive intravascular haemolysis. Associated with severe P. falciparum (direct parasite lysis + immune haemolysis) and quinine in G6PD-deficient patients. Features: renal failure (haemoglobin tubular obstruction), jaundice, high mortality. Not the same as haemolytic uraemic syndrome.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_kala_006",
                topic: "kala-azar",
                year: "FMGE Jun 2022",
                q: "Aldehyde test (formol gel test) is used to diagnose:",
                img: null,
                options: ["A. Malaria (antigen test)", "B. Kala-azar (visceral leishmaniasis) — elevated gammaglobulins form gel with formaldehyde", "C. Filariasis (microfilariae)", "D. Toxoplasmosis (IgM)"],
                answer: 1,
                explanation: "Aldehyde/formol-gel (Napier's) test: serum + formalin → white opaque gel = positive. Indicates hyperimmunoglobulinaemia (elevated IgG) in kala-azar. Specific (~95% specific), but now replaced by rK39 RDT (dipstick test — recombinant K39 antigen ELISA, most sensitive/specific). Napier test: not specific to Leishmania (also positive in myeloma, cirrhosis).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_kala_007",
                topic: "kala-azar",
                year: "FMGE Dec 2021",
                q: "Amphotericin B liposomal is the preferred treatment for kala-azar because:",
                img: null,
                options: ["A. It is cheaper than miltefosine", "B. High efficacy (>95%) with single-dose regimen in Indian VL, reduced nephrotoxicity compared to conventional amphotericin B", "C. It can be taken orally", "D. It has fewer drug resistance issues than all other drugs"],
                answer: 1,
                explanation: "Liposomal amphotericin B (L-AmB, AmBisome): treatment of choice for VL in India. Single dose 10 mg/kg or 3–5 doses totalling 15 mg/kg → >95% cure rate. Advantages: reduced nephrotoxicity (liposomal delivery to macrophages), less infusion reactions, high efficacy. Cost remains a barrier in resource-limited settings. Drug of choice in: pregnancy, HIV-VL co-infection, treatment failure.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_kala_008",
                topic: "kala-azar",
                year: "FMGE Jun 2021",
                q: "Post-kala-azar dermal leishmaniasis (PKDL) occurs:",
                img: null,
                options: ["A. Before treatment for VL (simultaneously)", "B. Months to years after apparent cure of visceral leishmaniasis (VL), mainly in Sudan and India", "C. Only in immunocompromised patients", "D. Only in cutaneous leishmaniasis"],
                answer: 1,
                explanation: "PKDL: skin manifestation appearing 6 months to years after VL treatment (India: 2–10 years delay; Sudan: concurrent or earlier). Features: macular → papular → nodular hypopigmented/erythematous lesions on face, trunk. L. donovani. Important reservoir for VL transmission. Treatment: prolonged miltefosine or parenteral antimonials. Diagnosis: skin slit smear or PCR.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_kala_009",
                topic: "kala-azar",
                year: "FMGE Dec 2020",
                q: "Leishmania donovani infects which cells in the host?",
                img: null,
                options: ["A. RBCs (like malaria)", "B. Macrophages (amastigotes survive in phagolysosomes by resisting acidic pH and ROS)", "C. Hepatocytes (like HBV)", "D. B lymphocytes (like EBV)"],
                answer: 1,
                explanation: "Leishmania amastigotes: obligate intracellular parasites of macrophages (phagocytes). Survive by: inhibiting phagosome-lysosome fusion, resisting ROS, modulating host immune response. Organs in VL (kala-azar): spleen (massive splenomegaly), liver, bone marrow, lymph nodes. Hypersplenism → pancytopenia. Diagnosis: splenic aspirate (most sensitive), bone marrow aspirate, PCR.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_kala_010",
                topic: "kala-azar",
                year: "FMGE Jun 2020",
                q: "The vector of kala-azar (visceral leishmaniasis) in India is:",
                img: null,
                options: ["A. Culex quinquefasciatus", "B. Phlebotomus argentipes (sandfly) — bites at dusk/dawn, breeds in moist soil, dark humid areas", "C. Anopheles stephensi", "D. Aedes aegypti"],
                answer: 1,
                explanation: "Kala-azar vector: Phlebotomus argentipes sandfly (India, Bangladesh). Female sandfly bites → injects Leishmania promastigotes. Sandfly characteristics: small (2–3 mm), silent flight, hairy appearance, bites at sunset/dawn, breeds in moist mud/crevices, does not travel far from breeding sites. Control: DDT indoor residual spraying (IRS), insecticide-treated bed nets.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_ip_006",
                topic: "intestinal-parasites",
                year: "FMGE Jun 2022",
                q: "Cutaneous larva migrans (creeping eruption) is caused by:",
                img: null,
                options: ["A. Ascaris lumbricoides larvae", "B. Dog/cat hookworm larvae (Ancylostoma braziliense, A. caninum) — cannot penetrate basement membrane → migrate in epidermis", "C. Strongyloides stercoralis", "D. Entamoeba histolytica"],
                answer: 1,
                explanation: "Cutaneous larva migrans: dog/cat hookworm larvae (mainly Ancylostoma braziliense) penetrate human skin but cannot complete the lifecycle → migrate randomly in epidermis → intensely itchy, serpiginous/creeping linear track (advancing 1–2 cm/day). Treatment: ivermectin (single dose, preferred) or albendazole × 3–7 days. Exposure: contaminated sandy soil (beaches).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_ip_007",
                topic: "intestinal-parasites",
                year: "FMGE Dec 2021",
                q: "Diagnosis of Enterobius vermicularis (pinworm) is made by:",
                img: null,
                options: ["A. Stool O&P examination (standard ova and parasite test)", "B. Scotch tape/cellophane tape test (anal swab taken at night or early morning — female lays eggs perianally at night)", "C. String test (Enterotest)", "D. Serology (anti-Enterobius IgG)"],
                answer: 1,
                explanation: "Enterobius vermicularis (pinworm/threadworm): most common helminthic infection worldwide. Female migrates to perianal area at night to lay eggs. Diagnosis: sticky tape/Scotch tape applied to perianal area → microscopy (eggs not usually in stool). Symptoms: nocturnal perianal pruritus, irritability, sleep disturbance. Treatment: mebendazole/albendazole single dose, repeat after 2 weeks. Treat whole family.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_ip_008",
                topic: "intestinal-parasites",
                year: "FMGE Jun 2021",
                q: "Giardia lamblia causes malabsorption syndrome. Diagnosis is by:",
                img: null,
                options: ["A. Blood film (like malaria)", "B. Stool O&P (trophozoites/cysts); duodenal aspirate/string test (Enterotest); stool ELISA/rapid antigen detection test", "C. Serology (anti-Giardia IgG) only", "D. Liver biopsy"],
                answer: 1,
                explanation: "Giardia lamblia (G. intestinalis): flagellated protozoa, faecal-oral transmission. Trophozoites: binucleate, teardrop/pear-shaped, 'old man's face' appearance. Cysts: quadrinucleate, infective form. Causes malabsorption (steatorrhoea), flatulence, watery non-bloody diarrhoea. Diagnosis: multiple stool O&P (three samples), string test (Enterotest), stool antigen ELISA (most sensitive). Treatment: metronidazole or tinidazole.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_ip_009",
                topic: "intestinal-parasites",
                year: "FMGE Dec 2020",
                q: "The most common complication of Ascaris lumbricoides is:",
                img: null,
                options: ["A. Liver abscess (amoebic)", "B. Intestinal obstruction from worm mass (especially in children with heavy infection)", "C. Appendicitis only", "D. Biliary colic from bile duct migration (most common)"],
                answer: 1,
                explanation: "Ascaris complications: (1) Intestinal obstruction (most common complication — worm mass, especially children), (2) Biliary invasion (biliary colic, cholangitis, pancreatitis), (3) Appendicular obstruction, (4) Löffler's syndrome (larval migration through lungs → transient eosinophilic pneumonitis). Diagnosis: stool O&P (large eggs, 50–75 μm, bumpy cortex). Treatment: albendazole/mebendazole.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_ip_010",
                topic: "intestinal-parasites",
                year: "FMGE Jun 2020",
                q: "Hydatid disease (cystic echinococcosis) is caused by larvae of:",
                img: null,
                options: ["A. Taenia solium (cysticercosis — neurocysticercosis, not hydatid)", "B. Echinococcus granulosus (dog tapeworm) — humans are accidental intermediate hosts from ingesting eggs", "C. Trichinella spiralis (muscle cyst)", "D. Diphyllobothrium latum (fish tapeworm)"],
                answer: 1,
                explanation: "Hydatid disease: Echinococcus granulosus (most common), E. multilocularis (alveolar hydatid, more invasive). Life cycle: dog (definitive host) → shed eggs → ingested by sheep/humans → larvae hatch → liver (most common) or lung → hydatid cysts. Diagnosis: ultrasound ('water lily sign', septa, daughter cysts), Casoni test, ELISA. Treatment: PAIR (puncture-aspiration-injection-reaspiration) + albendazole, or surgery.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_fun_006",
                topic: "fungi",
                year: "FMGE Jun 2022",
                q: "Cryptococcus neoformans causes meningitis in AIDS patients. Its virulence is attributed to:",
                img: null,
                options: ["A. Ability to form Auer rods in CSF", "B. Polysaccharide capsule (antiphagocytic), melanin production (dopamine oxidation), and thermotolerance at 37°C", "C. Mycotoxin production in brain", "D. Spore formation in CSF"],
                answer: 1,
                explanation: "Cryptococcus neoformans virulence factors: (1) Polysaccharide capsule (antiphagocytic, inhibits complement) → India ink preparation shows halo around yeast; (2) Laccase → melanin synthesis (protects against ROS); (3) Urease; (4) Mannitol production. Meningitis: insidious onset, raised ICP prominent feature. Diagnosis: India ink CSF, cryptococcal antigen (CrAg — latex agglutination, most sensitive). Treatment: liposomal AmB + flucytosine (induction) → fluconazole (consolidation/maintenance).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_fun_007",
                topic: "fungi",
                year: "FMGE Dec 2021",
                q: "Aspergillus fumigatus causes invasive pulmonary aspergillosis (IPA). The serum biomarker for early diagnosis is:",
                img: null,
                options: ["A. Serum beta-D-glucan alone (not specific to Aspergillus)", "B. Galactomannan (Platelia ELISA) — sensitivity >80% in neutropenic/HSCT patients; serum or BAL galactomannan", "C. Urinary Aspergillus antigen test", "D. VDRL-like agglutination test"],
                answer: 1,
                explanation: "IPA diagnosis: galactomannan (GM — fungal cell wall polysaccharide, component of Aspergillus cell wall) ELISA: serum (index ≥0.5 = positive) or BAL (≥1.0). Best in neutropenic haematology patients/HSCT. CT chest: halo sign (early IPA — ground-glass halo around nodule, from angioinvasion with haemorrhage), air-crescent sign (recovery). Treatment: voriconazole (first-line).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_fun_008",
                topic: "fungi",
                year: "FMGE Jun 2021",
                q: "Candida albicans is distinguished from other Candida species by:",
                img: null,
                options: ["A. It is the only Candida that forms biofilms", "B. Germ tube test (Reynolds-Braude phenomenon) at 37°C in serum → pseudohyphae germination within 2–3 hours", "C. Its ability to grow on MacConkey agar", "D. Capsule formation (like Cryptococcus)"],
                answer: 1,
                explanation: "Germ tube test (GTT): C. albicans + C. dubliniensis produce germ tubes in serum at 37°C within 2 hours — most rapid presumptive identification. Chlamydoconidia formation on cornmeal agar: C. albicans (large spherical terminal chlamydospores). Chromogenic agar: C. albicans = green; C. tropicalis = blue; C. krusei = pink-purple. Treatment: fluconazole (susceptible Candida); echinocandins (resistant/severe infections).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_fun_009",
                topic: "fungi",
                year: "FMGE Dec 2020",
                q: "Dermatophytes (Trichophyton, Microsporum, Epidermophyton) cause tinea infections and are diagnosed by:",
                img: null,
                options: ["A. Blood culture (aerobic)", "B. KOH preparation (skin scrapings, nail clippings, hair) — shows branching hyphae; Wood's lamp (Microsporum causes green fluorescence); Sabouraud's dextrose agar culture", "C. Gram stain of vesicle fluid", "D. Serology (anti-dermatophyte IgG)"],
                answer: 1,
                explanation: "Dermatophyte diagnosis: (1) KOH preparation: branching hyphae/arthrospores. (2) Wood's lamp fluorescence: Microsporum audouinii, M. canis (green/blue fluorescence) — NOT Trichophyton. (3) Culture: Sabouraud's dextrose agar (SDA) with cycloheximide and chloramphenicol. Trichophyton types: T. rubrum (most common nail/skin), T. violaceum (scalp in India). Treatment: topical azoles; terbinafine (nail); griseofulvin (scalp ringworm in children).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_fun_010",
                topic: "fungi",
                year: "FMGE Jun 2020",
                q: "Histoplasma capsulatum causes pulmonary and disseminated histoplasmosis in immunocompromised patients. It is a:",
                img: null,
                options: ["A. Basidiomycete (like Cryptococcus)", "B. Dimorphic fungus: mould (mycelium with macroconidia/microconidia) at 25°C, yeast (within macrophages) at 37°C", "C. Purely yeast form at all temperatures", "D. Zygomycete (like Mucor)"],
                answer: 1,
                explanation: "Histoplasma capsulatum: dimorphic fungus (thermal dimorphism). Mycelial form (soil, bat/bird droppings) → inhaled microconidia → convert to yeast at 37°C in macrophages. Indiana-Ohio river valley (USA). In India: rare. Diagnosis: fungal culture (gold standard), urine/serum histoplasma antigen (EIA), serology, tissue biopsy (PAS/GMS stain). Treatment: mild-moderate = itraconazole; severe/disseminated = liposomal AmB → itraconazole step-down.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_imm_006",
                topic: "immunology-basics",
                year: "FMGE Jun 2022",
                q: "DiGeorge syndrome results from thymic aplasia causing deficiency of:",
                img: null,
                options: ["A. B cells and antibodies (hypogammaglobulinaemia)", "B. T cells (T-cell immunodeficiency) — due to 22q11.2 deletion", "C. NK cells only", "D. Neutrophils (phagocytic defect)"],
                answer: 1,
                explanation: "DiGeorge syndrome: 22q11.2 deletion → thymic aplasia → absent T-cell maturation → severe T-cell immunodeficiency (CATCH22: Cardiac defects, Abnormal facies, Thymic aplasia, Cleft palate, Hypocalcaemia/Hypoparathyroidism from absent parathyroid). Infections: recurrent viral, fungal, opportunistic. B cells present but dysfunctional (T-cell help absent). Treatment: thymic transplant, HSCT.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_imm_007",
                topic: "immunology-basics",
                year: "FMGE Dec 2021",
                q: "Complement deficiency of C5–C9 (membrane attack complex components) predisposes to:",
                img: null,
                options: ["A. Recurrent pyogenic infections (like C3 deficiency)", "B. Recurrent Neisseria infections (N. meningitidis, N. gonorrhoeae) — MAC needed for killing Gram-negative bacteria", "C. Systemic lupus erythematosus (C1q/C4/C2 deficiency)", "D. Hereditary angioedema (C1-INH deficiency)"],
                answer: 1,
                explanation: "Complement deficiencies: Early complement (C1q, C4, C2) deficiency → SLE-like disease (impaired immune complex clearance). C3 deficiency → recurrent pyogenic infections (opsonisation defect). C5–C9 (terminal complement/MAC) deficiency → recurrent disseminated Neisseria infections (MAC needed to lyse Gram-negative bacteria). Properdin deficiency → meningococcal disease.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_imm_008",
                topic: "immunology-basics",
                year: "FMGE Jun 2021",
                q: "The mechanism of type I hypersensitivity (IgE-mediated) reaction involves:",
                img: null,
                options: ["A. Antibody-complement-mediated cell lysis (Type II)", "B. IgE bound to mast cells/basophils → allergen cross-links IgE → degranulation → histamine, leukotrienes, prostaglandins", "C. Immune complex deposition (Type III)", "D. T-cell mediated delayed-type reaction (Type IV)"],
                answer: 1,
                explanation: "Hypersensitivity types: I (anaphylactic, IgE, immediate, mast cell/basophil) → allergic rhinitis, asthma, anaphylaxis; II (cytotoxic, IgG/IgM + complement, antibody against cell surface) → AIHA, HDN, Goodpasture's; III (immune complex, IgG-Ag complexes, Arthus, serum sickness) → SLE, PSGN; IV (delayed, T-cell, 48–72 hours) → PPD/tuberculin, contact dermatitis, graft rejection.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_imm_009",
                topic: "immunology-basics",
                year: "FMGE Dec 2020",
                q: "Bruton's agammaglobulinaemia (X-linked agammaglobulinaemia) is due to:",
                img: null,
                options: ["A. Absent T cells (Di George)", "B. BTK (Bruton's tyrosine kinase) gene mutation → absent B-cell maturation beyond pro-B stage → no antibodies", "C. RAG1/RAG2 mutation (SCID)", "D. ADA deficiency (SCID)"],
                answer: 1,
                explanation: "Bruton's XLA: X-linked (males), BTK mutation → B cells arrested at pre-B stage → no mature B cells → no immunoglobulins (all classes). Presents 6 months after maternal antibody wanes. Recurrent pyogenic bacterial infections (encapsulated organisms). T cells normal. Diagnosis: absent B cells by flow cytometry, undetectable serum Ig. Treatment: IVIG replacement every 3–4 weeks.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_imm_010",
                topic: "immunology-basics",
                year: "FMGE Jun 2020",
                q: "HLA typing is clinically important for:",
                img: null,
                options: ["A. Diagnosing viral infections", "B. Organ transplant matching (HLA-A, B, C, DR matching), disease association (HLA-B27 in ankylosing spondylitis), drug hypersensitivity (HLA-B*5701 — abacavir)", "C. Serodiagnosis of autoimmune diseases", "D. Detecting blood group antigens"],
                answer: 1,
                explanation: "HLA system (human leucocyte antigens): MHC Class I (HLA-A, B, C) — present on all nucleated cells, binds CD8+ T cells. MHC Class II (HLA-DR, DQ, DP) — APCs, binds CD4+ T cells. Disease associations: B27 — seronegative spondyloarthropathies; DR3/DR4 — Type 1 DM; DR2 — MS, narcolepsy; DR5 — Hashimoto's; DQ2/DQ8 — coeliac disease.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_vac_006",
                topic: "vaccines-immunity",
                year: "FMGE Jun 2022",
                q: "Live attenuated vaccines are contraindicated in immunocompromised patients because:",
                img: null,
                options: ["A. They are less effective in immunocompromised", "B. Attenuated vaccine organism may replicate uncontrolled → cause disease (vaccine-strain infection)", "C. Killed vaccines are universally preferred", "D. They contain adjuvants harmful to immunocompromised"],
                answer: 1,
                explanation: "Live attenuated vaccines (LAV): BCG, OPV, MMR, Varicella, YF, Typhoid oral (Ty21a), Rotavirus, Nasal influenza. Contraindicated: severe immunodeficiency (SCID, HIV CD4 <200, on immunosuppressants, high-dose steroids, post-HSCT). Risk: vaccine strain causes disseminated disease (e.g., BCG dissemination, Vaccine-Derived Poliovirus, MMR-encephalitis). Exception: HIV-positive children with CD4 >25% can get MMR and varicella.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_vac_007",
                topic: "vaccines-immunity",
                year: "FMGE Dec 2021",
                q: "The cold chain for vaccines refers to maintaining temperature between:",
                img: null,
                options: ["A. 0–8°C always", "B. +2°C to +8°C at all points from manufacturer to beneficiary (vaccines must never freeze unless specified)", "C. −20°C to 0°C", "D. Room temperature (15–25°C)"],
                answer: 1,
                explanation: "Cold chain (2–8°C): most vaccines stored between +2°C and +8°C. Exceptions: OPV can be stored at −20°C (reconstituted only 2–8°C); varicella/zoster vaccines may need −20°C (check). Some vaccines (BCG, MMR, OPV) are freeze-dried (lyophilised) — sensitive to heat more than freezing. Freeze-sensitive vaccines (DPT, DT, TT, hepatitis B, Hib, IPV): damaged by freezing.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_vac_008",
                topic: "vaccines-immunity",
                year: "FMGE Jun 2021",
                q: "Herd immunity (herd protection) threshold for measles requires what percentage of population to be immune?",
                img: null,
                options: ["A. 70–75% (like polio)", "B. 92–95% (measles has R0 of 12–18, highest among vaccine-preventable diseases)", "C. 60% only", "D. 80% (like influenza)"],
                answer: 1,
                explanation: "Herd immunity threshold = 1 − 1/R0. Measles R0 = 12–18 → threshold ~93–95%. Requires ≥95% vaccine coverage (2 doses MMR) to interrupt transmission. Other R0 values: Polio ~5–7 (threshold ~80–85%), Influenza ~2–3 (threshold ~50–60%). High threshold explains measles outbreaks when vaccination rates drop slightly below 95%.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_vac_009",
                topic: "vaccines-immunity",
                year: "FMGE Dec 2020",
                q: "AEFI (adverse events following immunisation) surveillance is important for vaccine safety monitoring. Anaphylaxis after vaccination should be treated with:",
                img: null,
                options: ["A. IV corticosteroids as first line", "B. Adrenaline (epinephrine) 1:1000 IM 0.5 mg (thigh) — first line; observe 30 min at vaccination site before discharge", "C. Diphenhydramine (antihistamine) as first line", "D. Aspirin IV"],
                answer: 1,
                explanation: "Anaphylaxis (AEFI): symptoms within 15–30 min of vaccine. Treatment: Adrenaline (epinephrine) 1:1000, 0.5 mg IM (anterolateral thigh) — FIRST LINE. Then: antihistamine (chlorphenamine), hydrocortisone IV, fluid resuscitation. Observe all vaccinees for 15–30 minutes. Adrenaline autoinjector (EpiPen) for high-risk patients. Report as AEFI.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_vac_010",
                topic: "vaccines-immunity",
                year: "FMGE Jun 2020",
                q: "The Salk IPV (inactivated polio vaccine) differs from Sabin OPV (oral polio vaccine) in that IPV:",
                img: null,
                options: ["A. Induces gut immunity (IgA) better than OPV", "B. Cannot revert to virulence (no VDPV risk), induces serum IgG, safe in immunocompromised, injectable", "C. Contains live attenuated poliovirus types 1, 2, 3", "D. Is cheaper and used in low-income countries"],
                answer: 1,
                explanation: "IPV (Salk) vs OPV (Sabin): IPV = killed vaccine, IM injection, induces systemic IgG (prevents paralysis but limited gut IgA), NO VDPV risk, safe in immunocompromised, expensive. OPV = live attenuated, oral, induces gut IgA (intestinal immunity) + systemic IgG, VDPV risk (1:2.7 million doses), herd effect, cheaper. India uses fractional IPV (0.1 mL ID) + bOPV in EPI schedule.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_ste_006",
                topic: "sterilization",
                year: "FMGE Jun 2022",
                q: "The most resistant form of microorganism to sterilization is:",
                img: null,
                options: ["A. Gram-negative bacteria (endotoxin)", "B. Bacterial spores (Bacillus, Clostridium) — most heat/chemical resistant", "C. Mycobacteria (acid-fast waxy coat)", "D. Prions (most resistant to conventional sterilization, even higher than spores)"],
                answer: 3,
                explanation: "Resistance order (most to least resistant): Prions > Bacterial spores (Bacillus, Clostridium) > Mycobacteria > Hydrophilic viruses (non-enveloped) > Gram-negative bacteria > Fungi > Gram-positive bacteria > Lipophilic viruses (enveloped). Prions not destroyed by autoclave; require 134°C for 18 minutes (porous load cycle) or 1N NaOH immersion. For CJD instruments: 134°C for 1 hour or disposable.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_ste_007",
                topic: "sterilization",
                year: "FMGE Dec 2021",
                q: "Ethylene oxide (ETO) sterilization is used for:",
                img: null,
                options: ["A. Surgical instruments that tolerate steam (metal instruments)", "B. Heat-sensitive items (plastics, rubber, electronics, catheters, endoscopes — items that cannot withstand heat)", "C. Large-volume liquids (like IV fluids)", "D. Surfaces in hospital rooms"],
                answer: 1,
                explanation: "Ethylene oxide (ETO): gaseous alkylating agent, sterilizes heat- and moisture-sensitive medical devices at low temperatures (~55°C). Used for: plastics, rubber catheters, endoscopes, cardiac pacemakers, ophthalmic equipment. Disadvantages: long cycle (several hours), toxic (carcinogenic, mutagenic), requires aeration period (12–16 hours). Alternatives: hydrogen peroxide plasma (Sterrad), glutaraldehyde (high-level disinfection only).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_ste_008",
                topic: "sterilization",
                year: "FMGE Jun 2021",
                q: "The Spaulding classification categorises medical devices based on infection risk. Endoscopes (GI endoscopy) contacting non-sterile mucosa are classified as:",
                img: null,
                options: ["A. Critical items requiring sterilization", "B. Semi-critical items requiring high-level disinfection (2% glutaraldehyde, ortho-phthalaldehyde, or automated endoscope reprocessors)", "C. Non-critical items requiring low-level disinfection", "D. Single-use items only"],
                answer: 1,
                explanation: "Spaulding classification: Critical (contact with sterile tissue/bloodstream) → sterilization (surgical instruments, cardiac catheters); Semi-critical (contact with non-intact skin or mucous membranes — endoscopes, bronchoscopes, laryngoscopes) → high-level disinfection (HLD); Non-critical (contact with intact skin — BP cuff, stethoscope) → low-level disinfection. Endoscopes: 2% glutaraldehyde (20 min HLD), OPA (12 min).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_ste_009",
                topic: "sterilization",
                year: "FMGE Dec 2020",
                q: "Flash sterilization (rapid pre-vacuum autoclave, 134°C for 3 minutes) is:",
                img: null,
                options: ["A. Preferred routine method for all surgical instruments", "B. An emergency method for immediate-use sterilization of unwrapped instruments when time does not allow standard cycles", "C. Used for heat-sensitive equipment", "D. A low-temperature sterilization technique"],
                answer: 1,
                explanation: "Flash sterilization (IUSS — immediate-use steam sterilization): 134°C gravity/prevacuum cycle, 3–4 minutes, unwrapped. Used only for emergency situations when a needed instrument is contaminated or has no sterile replacement immediately available. NOT suitable for implants (insufficient sterility assurance time). Routine use discouraged due to inadequate cleaning and packaging.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_ste_010",
                topic: "sterilization",
                year: "FMGE Jun 2020",
                q: "Glutaraldehyde 2% achieves high-level disinfection in:",
                img: null,
                options: ["A. 10 minutes of contact time", "B. 20–45 minutes at room temperature (kills all organisms except large numbers of spores)", "C. 5 minutes (like alcohol)", "D. 2 hours minimum always"],
                answer: 1,
                explanation: "Glutaraldehyde 2% (alkaline/acidic): HLD in 20–45 minutes (kills: bacteria, mycobacteria, fungi, viruses, some spores). Sterilization requires 10 hours immersion (kills all spores). Activated (alkaline) glutaraldehyde shelf-life: 14–28 days. Advantages over formaldehyde: less toxic, not absorbed by rubber/plastic. Disadvantages: toxic vapour, skin sensitiser, must be rinsed before use on patient.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_bl_006",
                topic: "bacteriology-lab",
                year: "FMGE Jun 2022",
                q: "Coagulase test distinguishes Staphylococcus aureus from coagulase-negative staphylococci (CoNS). The slide coagulase test detects:",
                img: null,
                options: ["A. Free coagulase (staphylothrombin)", "B. Bound coagulase (clumping factor — fibrinogen binding protein on cell surface) → rapid clumping on glass slide", "C. Catalase activity", "D. DNase production"],
                answer: 1,
                explanation: "Coagulase tests: (1) Slide test — bound coagulase (clumping factor A/B): fibrinogen → fibrin formation → visible clumping within 10 seconds. Rapid, presumptive. (2) Tube test — free coagulase (staphylothrombin): activates prothrombin-like substance → fibrin clot formation in tube at 1–4 hours. Tube test is confirmatory. Both positive in most S. aureus strains.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_bl_007",
                topic: "bacteriology-lab",
                year: "FMGE Dec 2021",
                q: "The CAMP test is positive for which organism?",
                img: null,
                options: ["A. Streptococcus pyogenes (Group A)", "B. Streptococcus agalactiae (Group B streptococcus, GBS) — synergistic haemolysis with S. aureus beta-toxin", "C. Enterococcus faecalis", "D. Listeria monocytogenes"],
                answer: 1,
                explanation: "CAMP test (Christie, Atkins, Munch-Petersen): Group B Streptococcus (S. agalactiae) CAMP factor potentiates beta-haemolysis of S. aureus → arrowhead haemolysis on blood agar. Positive: GBS, Listeria monocytogenes (also weakly). Negative: Group A Streptococcus. Used for GBS identification (important for neonatal sepsis screening in pregnancy at 35–37 weeks).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_bl_008",
                topic: "bacteriology-lab",
                year: "FMGE Jun 2021",
                q: "The oxidase test identifies bacteria containing:",
                img: null,
                options: ["A. Beta-lactamase enzymes", "B. Cytochrome c oxidase — oxidase positive: Neisseria, Pseudomonas, Vibrio, Campylobacter, Helicobacter", "C. Urease enzyme", "D. Catalase (peroxidase)"],
                answer: 1,
                explanation: "Oxidase test: N,N-dimethyl-p-phenylenediamine (DMPD) oxidised by cytochrome c oxidase → purple/dark colour within 10 seconds. Oxidase positive: Pseudomonas, Neisseria, Vibrio, Campylobacter, Helicobacter, Aeromonas, Pasteurella. Oxidase negative: Enterobacteriaceae (E. coli, Klebsiella, Salmonella, Shigella), Staphylococcus. Useful in separating Pseudomonas (+) from E. coli (−).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_bl_009",
                topic: "bacteriology-lab",
                year: "FMGE Dec 2020",
                q: "Elek's test (gel precipitation) is used for:",
                img: null,
                options: ["A. Streptolysin O detection (Streptococcus)", "B. Diphtheria toxin detection (Corynebacterium diphtheriae) — in vitro toxigenicity test", "C. Clostridial toxin neutralisation", "D. Antibody detection in serology"],
                answer: 1,
                explanation: "Elek's test: filter paper strip soaked in antitoxin (anti-diphtheria toxin) placed on SDA plate. C. diphtheriae (toxigenic) streaked perpendicularly. If toxin produced → precipitin line forms at 45° angle where toxin and antitoxin diffuse and meet. Tests toxigenicity (presence of tox gene/bacteriophage). Now being replaced by PCR for tox gene detection.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_bl_010",
                topic: "bacteriology-lab",
                year: "FMGE Jun 2020",
                q: "The IMViC tests (Indole, Methyl red, Voges-Proskauer, Citrate) pattern for E. coli is:",
                img: null,
                options: ["A. + + − − (MR positive, VP negative, Citrate negative, Indole positive)", "B. + + − − (Indole positive, MR positive, VP negative, Citrate negative)", "C. − − + + (Klebsiella pattern)", "D. − + − + (Salmonella pattern)"],
                answer: 1,
                explanation: "IMViC tests: I = Indole production (tryptophan → indole by tryptophanase); M = Methyl red (acid from glucose fermentation); V-P = Voges-Proskauer (acetoin production from pyruvate); C = Citrate utilisation. E. coli: + + − − (IMVIC = positive, positive, negative, negative). Klebsiella pneumoniae: − − + + (indole neg, MR neg, VP pos, Citrate pos). Enterobacter: − − + +.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_clo_006",
                topic: "clostridium-anaerobes",
                year: "FMGE Jun 2022",
                q: "Clostridium difficile pseudomembranous colitis is treated with:",
                img: null,
                options: ["A. Metronidazole alone (now second-line for mild cases)", "B. Oral vancomycin (first line, 125 mg QDS × 10 days) or fidaxomicin; fecal microbiota transplantation for recurrent cases", "C. Ampicillin (restores normal flora)", "D. IV metronidazole only for all grades"],
                answer: 1,
                explanation: "C. difficile infection (CDI) treatment (2021 IDSA guidelines): Mild/moderate: oral vancomycin 125 mg QDS × 10 days (or fidaxomicin). Metronidazole: only if oral vancomycin not available (second line). Severe: oral vancomycin ± IV metronidazole. Fulminant (ileus, shock): high-dose oral/rectal vancomycin + IV metronidazole + surgery. Recurrent CDI: FMT (fecal microbiota transplantation) — 80–90% cure.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_clo_007",
                topic: "clostridium-anaerobes",
                year: "FMGE Dec 2021",
                q: "Tetanus toxin (tetanospasmin) causes spastic paralysis by:",
                img: null,
                options: ["A. Stimulating ACh release at neuromuscular junction (like botulinum)", "B. Blocking inhibitory interneurons (GABA and glycine) in spinal cord → unopposed motor neuron firing → rigid spastic paralysis (opisthotonus)", "C. Directly destroying motor neurons", "D. Blocking sodium channels in peripheral nerves"],
                answer: 1,
                explanation: "Tetanospasmin: zinc metalloprotease, cleaves synaptobrevin (VAMP) → blocks exocytosis of GABA and glycine from inhibitory interneurons in spinal cord and brainstem → disinhibition → tonic spasm. Trismus (lockjaw), risus sardonicus, opisthotonus. Contrast: botulinum toxin blocks ACh at NMJ → flaccid paralysis. Tetanus treatment: tetanus immunoglobulin (TIG), metronidazole, benzodiazepines (diazepam), wound debridement.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_clo_008",
                topic: "clostridium-anaerobes",
                year: "FMGE Jun 2021",
                q: "Gas gangrene (clostridial myonecrosis) is caused predominantly by:",
                img: null,
                options: ["A. C. tetani (tetanus)", "B. Clostridium perfringens (type A) producing alpha toxin (lecithinase/phospholipase C) → myonecrosis, haemolysis, gas formation", "C. C. botulinum (botulism)", "D. C. difficile (colitis)"],
                answer: 1,
                explanation: "Gas gangrene: C. perfringens (most common), C. novyi, C. septicum. Alpha toxin (lecithinase C/phospholipase C): cleaves phosphatidylcholine → disrupts cell membranes → myonecrosis + haemolysis. Gas = from carbohydrate fermentation (CO2 + H2). Features: rapidly spreading, brownish exudate, gas in tissue, crepitus, severe toxaemia, no pus (inadequate PMN response). Treatment: emergency surgical debridement/amputation + penicillin + hyperbaric oxygen.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_clo_009",
                topic: "clostridium-anaerobes",
                year: "FMGE Dec 2020",
                q: "Botulism toxin (botulinum neurotoxin) causes flaccid paralysis by:",
                img: null,
                options: ["A. Blocking inhibitory interneurons (like tetanus)", "B. Cleaving SNARE proteins (SNAP-25 or VAMP) → blocking ACh vesicle fusion/release at NMJ → flaccid paralysis", "C. Destroying motor neurons directly", "D. Stimulating nicotinic receptors to exhaustion"],
                answer: 1,
                explanation: "Botulinum neurotoxin (BoNT): zinc metalloprotease (7 serotypes A–G). Targets: SNAP-25 (types A, C, E) or VAMP/synaptobrevin (types B, D, F) or syntaxin (type C) → SNARE complex disruption → ACh cannot be released at NMJ → descending flaccid paralysis starting with cranial nerves (diplopia, dysphagia, dysarthria). Types of botulism: food-borne, wound, infant (honey). Treatment: antitoxin (trivalent A, B, E).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "mic_clo_010",
                topic: "clostridium-anaerobes",
                year: "FMGE Jun 2020",
                q: "Actinomyces israelii causes cervicofacial actinomycosis characterised by:",
                img: null,
                options: ["A. Acute suppurative lymphadenitis (like pyogenic bacteria)", "B. Chronic granulomatous infection with 'wooden jaw,' draining sinuses, and yellow 'sulfur granules' (colonies of Actinomyces)", "C. Rapidly fatal septicaemia", "D. Meningitis from oral flora"],
                answer: 1,
                explanation: "Actinomyces israelii: Gram-positive, filamentous, NON-acid-fast, anaerobic. Normal oral flora → infection after dental procedures/trauma. Cervicofacial (most common): indurated 'woody' swelling of jaw, multiple draining sinuses, sulfur granules (yellow macroscopic colonies). NOT a true fungus despite fungus-like appearance. Treatment: high-dose penicillin (IV then oral, 6–12 months). No antifungal needed.",
                tags: ["PYQ", "high-yield"]
        },

];

export default microbiology;
