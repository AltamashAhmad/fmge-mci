const biochemistry = [

	// ============ BATCH 1: GLYCOLYSIS, TCA CYCLE & ETC ============
	{
		id: "bio_gte_001",
		topic: "glycolysis-tca-etc",
		year: "FMGE Dec 2019",
		q: "Rate-limiting enzyme of glycolysis is:",
		img: null,
		options: ["A. Hexokinase", "B. Phosphofructokinase-1", "C. Pyruvate kinase", "D. Glucokinase"],
		answer: 1,
		explanation: "PFK-1 is the major regulatory/rate-limiting step of glycolysis.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "bio_gte_002",
		topic: "glycolysis-tca-etc",
		year: "FMGE Jun 2018",
		q: "Enzyme deficient in pyruvate dehydrogenase deficiency is located in:",
		img: null,
		options: ["A. Cytosol", "B. Mitochondrial matrix", "C. Nucleus", "D. Lysosome"],
		answer: 1,
		explanation: "Pyruvate dehydrogenase complex is in mitochondrial matrix.",
		tags: ["PYQ"]
	},
	{
		id: "bio_gte_003",
		topic: "glycolysis-tca-etc",
		year: "FMGE Dec 2018",
		q: "Net ATP yield from aerobic glycolysis per glucose molecule is:",
		img: null,
		options: ["A. 1", "B. 2", "C. 4", "D. 8"],
		answer: 1,
		explanation: "Glycolysis gives net 2 ATP directly (with additional NADH yield depending on shuttle).",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "bio_gte_004",
		topic: "glycolysis-tca-etc",
		year: "FMGE Jun 2019",
		q: "TCA cycle occurs in:",
		img: null,
		options: ["A. Cytosol", "B. Mitochondrial matrix", "C. Inner mitochondrial membrane", "D. Peroxisome"],
		answer: 1,
		explanation: "All TCA enzymes except succinate dehydrogenase are in mitochondrial matrix.",
		tags: ["PYQ"]
	},
	{
		id: "bio_gte_005",
		topic: "glycolysis-tca-etc",
		year: "FMGE Dec 2020",
		q: "Complex inhibited by cyanide in ETC is:",
		img: null,
		options: ["A. Complex I", "B. Complex II", "C. Complex III", "D. Complex IV"],
		answer: 3,
		explanation: "Cyanide inhibits cytochrome oxidase (Complex IV), halting oxidative phosphorylation.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 1: GLUCONEOGENESIS & GLYCOGEN METABOLISM ============
	{
		id: "bio_gg_001",
		topic: "gluconeogenesis-glycogen",
		year: "FMGE Dec 2019",
		q: "Key gluconeogenic enzyme absent in glycolysis is:",
		img: null,
		options: ["A. Hexokinase", "B. Pyruvate carboxylase", "C. Aldolase", "D. Enolase"],
		answer: 1,
		explanation: "Pyruvate carboxylase bypasses irreversible pyruvate kinase step.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "bio_gg_002",
		topic: "gluconeogenesis-glycogen",
		year: "FMGE Jun 2018",
		q: "Rate-limiting enzyme of gluconeogenesis is:",
		img: null,
		options: ["A. Glucose-6-phosphatase", "B. Fructose-1,6-bisphosphatase", "C. PEP carboxykinase", "D. Pyruvate kinase"],
		answer: 1,
		explanation: "Fructose-1,6-bisphosphatase is the key regulatory enzyme.",
		tags: ["PYQ"]
	},
	{
		id: "bio_gg_003",
		topic: "gluconeogenesis-glycogen",
		year: "FMGE Dec 2018",
		q: "Hormone that stimulates glycogenolysis in liver is:",
		img: null,
		options: ["A. Insulin", "B. Glucagon", "C. Somatostatin", "D. Leptin"],
		answer: 1,
		explanation: "Glucagon activates hepatic glycogen breakdown during fasting.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "bio_gg_004",
		topic: "gluconeogenesis-glycogen",
		year: "FMGE Jun 2019",
		q: "Von Gierke disease is due to deficiency of:",
		img: null,
		options: ["A. Debranching enzyme", "B. Glucose-6-phosphatase", "C. Branching enzyme", "D. Muscle phosphorylase"],
		answer: 1,
		explanation: "Type I glycogen storage disease is caused by glucose-6-phosphatase deficiency.",
		tags: ["PYQ"]
	},
	{
		id: "bio_gg_005",
		topic: "gluconeogenesis-glycogen",
		year: "FMGE Dec 2020",
		q: "Cori cycle connects liver with:",
		img: null,
		options: ["A. Adipose tissue", "B. Skeletal muscle", "C. Thyroid gland", "D. Pancreas"],
		answer: 1,
		explanation: "Lactate from exercising muscle is converted back to glucose in liver.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 1: LIPID METABOLISM ============
	{
		id: "bio_lip_001",
		topic: "lipid-metabolism",
		year: "FMGE Dec 2019",
		q: "Rate-limiting enzyme in cholesterol synthesis is:",
		img: null,
		options: ["A. HMG-CoA reductase", "B. Lipoprotein lipase", "C. ACAT", "D. Carnitine acyltransferase I"],
		answer: 0,
		explanation: "HMG-CoA reductase is the key regulated step and statin target.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "bio_lip_002",
		topic: "lipid-metabolism",
		year: "FMGE Jun 2018",
		q: "Rate-limiting step of beta-oxidation involves transport by:",
		img: null,
		options: ["A. Carnitine shuttle", "B. GLUT4", "C. LDL receptor", "D. ApoB-100"],
		answer: 0,
		explanation: "Carnitine palmitoyltransferase system transports long-chain fatty acids into mitochondria.",
		tags: ["PYQ"]
	},
	{
		id: "bio_lip_003",
		topic: "lipid-metabolism",
		year: "FMGE Dec 2018",
		q: "Lipoprotein richest in triglycerides is:",
		img: null,
		options: ["A. HDL", "B. LDL", "C. VLDL", "D. Chylomicron"],
		answer: 3,
		explanation: "Chylomicrons carry dietary triglycerides and are the most TG-rich particles.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "bio_lip_004",
		topic: "lipid-metabolism",
		year: "FMGE Jun 2019",
		q: "Ketone bodies are synthesized mainly in:",
		img: null,
		options: ["A. Liver mitochondria", "B. Skeletal muscle", "C. Brain", "D. Adipose cytosol"],
		answer: 0,
		explanation: "Hepatic mitochondria produce ketone bodies during fasting and insulin deficiency.",
		tags: ["PYQ"]
	},
	{
		id: "bio_lip_005",
		topic: "lipid-metabolism",
		year: "FMGE Dec 2020",
		q: "Apolipoprotein activating lipoprotein lipase is:",
		img: null,
		options: ["A. ApoA-I", "B. ApoB-48", "C. ApoC-II", "D. ApoE"],
		answer: 2,
		explanation: "ApoC-II is a cofactor for lipoprotein lipase-mediated triglyceride hydrolysis.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 2: UREA CYCLE & AMINO ACID METABOLISM ============
	{
		id: "bio_uaa_001",
		topic: "urea-cycle-amino-acids",
		year: "FMGE Dec 2019",
		q: "Rate-limiting enzyme of urea cycle is:",
		img: null,
		options: ["A. Arginase", "B. Carbamoyl phosphate synthetase I", "C. Ornithine transcarbamylase", "D. Argininosuccinate lyase"],
		answer: 1,
		explanation: "CPS-I in mitochondria is rate-limiting and requires N-acetylglutamate as activator.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "bio_uaa_002",
		topic: "urea-cycle-amino-acids",
		year: "FMGE Jun 2018",
		q: "Most common inherited urea cycle disorder is deficiency of:",
		img: null,
		options: ["A. Arginase", "B. Ornithine transcarbamylase", "C. CPS-II", "D. Argininosuccinate synthetase"],
		answer: 1,
		explanation: "OTC deficiency is X-linked and causes hyperammonemia with elevated orotic acid.",
		tags: ["PYQ"]
	},
	{
		id: "bio_uaa_003",
		topic: "urea-cycle-amino-acids",
		year: "FMGE Dec 2018",
		q: "Phenylketonuria is due to deficiency of:",
		img: null,
		options: ["A. Tyrosinase", "B. Phenylalanine hydroxylase", "C. Homogentisate oxidase", "D. Branched-chain ketoacid dehydrogenase"],
		answer: 1,
		explanation: "Classic PKU is caused by deficient phenylalanine hydroxylase activity.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "bio_uaa_004",
		topic: "urea-cycle-amino-acids",
		year: "FMGE Jun 2019",
		q: "Maple syrup urine disease involves defective metabolism of:",
		img: null,
		options: ["A. Aromatic amino acids", "B. Branched-chain amino acids", "C. Sulfur amino acids", "D. Glycine only"],
		answer: 1,
		explanation: "MSUD is due to deficiency of branched-chain alpha-ketoacid dehydrogenase complex.",
		tags: ["PYQ"]
	},
	{
		id: "bio_uaa_005",
		topic: "urea-cycle-amino-acids",
		year: "FMGE Dec 2020",
		q: "Tyrosine is synthesized from:",
		img: null,
		options: ["A. Tryptophan", "B. Phenylalanine", "C. Methionine", "D. Valine"],
		answer: 1,
		explanation: "Phenylalanine hydroxylase converts phenylalanine to tyrosine.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 2: VITAMINS ============
	{
		id: "bio_vit_001",
		topic: "vitamins",
		year: "FMGE Dec 2019",
		q: "Deficiency of vitamin B1 causes:",
		img: null,
		options: ["A. Pellagra", "B. Beriberi", "C. Scurvy", "D. Rickets"],
		answer: 1,
		explanation: "Thiamine deficiency causes beriberi and Wernicke-Korsakoff syndrome.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "bio_vit_002",
		topic: "vitamins",
		year: "FMGE Jun 2018",
		q: "Vitamin required for gamma-carboxylation of clotting factors is:",
		img: null,
		options: ["A. Vitamin A", "B. Vitamin D", "C. Vitamin E", "D. Vitamin K"],
		answer: 3,
		explanation: "Vitamin K enables gamma-carboxylation of factors II, VII, IX, X and proteins C/S.",
		tags: ["PYQ"]
	},
	{
		id: "bio_vit_003",
		topic: "vitamins",
		year: "FMGE Dec 2018",
		q: "Vitamin B12 deficiency classically causes all except:",
		img: null,
		options: ["A. Megaloblastic anemia", "B. Subacute combined degeneration", "C. Elevated methylmalonic acid", "D. Pellagrous dermatitis"],
		answer: 3,
		explanation: "Pellagra is due to niacin deficiency, not vitamin B12 deficiency.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "bio_vit_004",
		topic: "vitamins",
		year: "FMGE Jun 2019",
		q: "Deficiency of vitamin C leads to:",
		img: null,
		options: ["A. Osteomalacia", "B. Scurvy", "C. Xerophthalmia", "D. Night blindness"],
		answer: 1,
		explanation: "Ascorbic acid deficiency impairs collagen hydroxylation causing scurvy.",
		tags: ["PYQ"]
	},
	{
		id: "bio_vit_005",
		topic: "vitamins",
		year: "FMGE Dec 2020",
		q: "Coenzyme form of vitamin B6 is:",
		img: null,
		options: ["A. TPP", "B. NAD+", "C. Pyridoxal phosphate", "D. Biotin"],
		answer: 2,
		explanation: "Pyridoxal phosphate is the active coenzyme form of pyridoxine.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 2: ENZYMES (KINETICS, INHIBITORS) ============
	{
		id: "bio_enz_001",
		topic: "enzyme-kinetics",
		year: "FMGE Dec 2019",
		q: "Competitive inhibition can be overcome by:",
		img: null,
		options: ["A. Decreasing substrate concentration", "B. Increasing substrate concentration", "C. Increasing temperature only", "D. Irreversible binding"],
		answer: 1,
		explanation: "Competitive inhibitors increase Km but Vmax can be reached with high substrate.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "bio_enz_002",
		topic: "enzyme-kinetics",
		year: "FMGE Jun 2018",
		q: "In non-competitive inhibition, Vmax is:",
		img: null,
		options: ["A. Increased", "B. Decreased", "C. Unchanged with increased Km", "D. Doubled"],
		answer: 1,
		explanation: "Non-competitive inhibition reduces Vmax; Km is typically unchanged in pure form.",
		tags: ["PYQ"]
	},
	{
		id: "bio_enz_003",
		topic: "enzyme-kinetics",
		year: "FMGE Dec 2018",
		q: "Michaelis constant (Km) denotes substrate concentration at:",
		img: null,
		options: ["A. Zero velocity", "B. Half Vmax", "C. Maximum velocity", "D. Double Vmax"],
		answer: 1,
		explanation: "Km is the substrate concentration at which reaction velocity is half of Vmax.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "bio_enz_004",
		topic: "enzyme-kinetics",
		year: "FMGE Jun 2019",
		q: "Allosteric enzymes generally show:",
		img: null,
		options: ["A. Hyperbolic kinetics", "B. Sigmoidal kinetics", "C. Linear kinetics", "D. Zero-order only"],
		answer: 1,
		explanation: "Allosteric enzymes exhibit cooperative substrate binding and sigmoidal curve.",
		tags: ["PYQ"]
	},
	{
		id: "bio_enz_005",
		topic: "enzyme-kinetics",
		year: "FMGE Dec 2020",
		q: "Lactate dehydrogenase uses which coenzyme?",
		img: null,
		options: ["A. FAD", "B. NAD+/NADH", "C. TPP", "D. Biotin"],
		answer: 1,
		explanation: "LDH catalyzes interconversion of lactate and pyruvate using NAD+/NADH.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 3: INBORN ERRORS OF METABOLISM ============
	{
		id: "bio_iem_001",
		topic: "inborn-errors-metabolism",
		year: "FMGE Dec 2019",
		q: "Classic galactosemia is due to deficiency of:",
		img: null,
		options: ["A. Galactokinase", "B. Galactose-1-phosphate uridyltransferase", "C. Aldolase B", "D. Fructokinase"],
		answer: 1,
		explanation: "GALT deficiency causes severe galactosemia with jaundice, cataract, and hepatomegaly.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "bio_iem_002",
		topic: "inborn-errors-metabolism",
		year: "FMGE Jun 2018",
		q: "Alkaptonuria occurs due to deficiency of:",
		img: null,
		options: ["A. Homogentisate oxidase", "B. Tyrosinase", "C. Phenylalanine hydroxylase", "D. Cystathionine synthase"],
		answer: 0,
		explanation: "Homogentisate oxidase deficiency leads to ochronosis and dark urine on standing.",
		tags: ["PYQ"]
	},
	{
		id: "bio_iem_003",
		topic: "inborn-errors-metabolism",
		year: "FMGE Dec 2018",
		q: "Essential amino acid absent in phenylketonuria diet is supplemented with:",
		img: null,
		options: ["A. Tyrosine", "B. Leucine", "C. Methionine", "D. Histidine"],
		answer: 0,
		explanation: "Tyrosine becomes essential in PKU due to impaired conversion from phenylalanine.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "bio_iem_004",
		topic: "inborn-errors-metabolism",
		year: "FMGE Jun 2019",
		q: "Defect in lysosomal sphingomyelinase causes:",
		img: null,
		options: ["A. Gaucher disease", "B. Niemann-Pick disease", "C. Tay-Sachs disease", "D. Krabbe disease"],
		answer: 1,
		explanation: "Niemann-Pick types A/B involve sphingomyelinase deficiency with lipid accumulation.",
		tags: ["PYQ"]
	},
	{
		id: "bio_iem_005",
		topic: "inborn-errors-metabolism",
		year: "FMGE Dec 2020",
		q: "Enzyme deficient in hereditary fructose intolerance is:",
		img: null,
		options: ["A. Fructokinase", "B. Aldolase B", "C. Galactokinase", "D. Pyruvate carboxylase"],
		answer: 1,
		explanation: "Aldolase B deficiency causes severe fructose intolerance with hypoglycemia and liver dysfunction.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 3: MOLECULAR BIOLOGY (DNA, RNA, PCR) ============
	{
		id: "bio_mb_001",
		topic: "molecular-biology",
		year: "FMGE Dec 2019",
		q: "DNA polymerase responsible for proofreading in prokaryotes is:",
		img: null,
		options: ["A. DNA polymerase I", "B. DNA polymerase III", "C. RNA polymerase", "D. Primase"],
		answer: 1,
		explanation: "DNA polymerase III is principal replicative polymerase with 3' to 5' exonuclease proofreading.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "bio_mb_002",
		topic: "molecular-biology",
		year: "FMGE Jun 2018",
		q: "PCR requires all except:",
		img: null,
		options: ["A. Thermostable DNA polymerase", "B. Primers", "C. dNTPs", "D. DNA ligase"],
		answer: 3,
		explanation: "PCR amplification uses thermostable polymerase, primers, template DNA, Mg2+, and dNTPs.",
		tags: ["PYQ"]
	},
	{
		id: "bio_mb_003",
		topic: "molecular-biology",
		year: "FMGE Dec 2018",
		q: "Direction of DNA synthesis is:",
		img: null,
		options: ["A. 3' to 5'", "B. 5' to 3'", "C. Bidirectional randomly", "D. 2' to 4'"],
		answer: 1,
		explanation: "DNA polymerases add nucleotides to 3' OH, so synthesis proceeds 5' to 3'.",
		tags: ["PYQ"]
	},
	{
		id: "bio_mb_004",
		topic: "molecular-biology",
		year: "FMGE Jun 2019",
		q: "RNA splicing removes:",
		img: null,
		options: ["A. Exons", "B. Introns", "C. Promoters", "D. Enhancers"],
		answer: 1,
		explanation: "Pre-mRNA splicing excises introns and joins exons to form mature mRNA.",
		tags: ["PYQ"]
	},
	{
		id: "bio_mb_005",
		topic: "molecular-biology",
		year: "FMGE Dec 2020",
		q: "Most common mutation in sickle cell disease is:",
		img: null,
		options: ["A. Frameshift", "B. Nonsense", "C. Missense point mutation", "D. Trinucleotide repeat"],
		answer: 2,
		explanation: "A missense point mutation in beta-globin substitutes valine for glutamate at position 6.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 4: PROTEINS & HEMOGLOBIN DISORDERS ============
	{
		id: "bio_phb_001",
		topic: "proteins-hemoglobin-biochem",
		year: "FMGE Dec 2019",
		q: "Most abundant plasma protein is:",
		img: null,
		options: ["A. Globulin", "B. Albumin", "C. Fibrinogen", "D. Transferrin"],
		answer: 1,
		explanation: "Albumin is the most abundant plasma protein and major determinant of oncotic pressure.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "bio_phb_002",
		topic: "proteins-hemoglobin-biochem",
		year: "FMGE Jun 2018",
		q: "Normal adult hemoglobin (HbA) is composed of:",
		img: null,
		options: ["A. alpha2beta2", "B. alpha2gamma2", "C. alpha2delta2", "D. beta4"],
		answer: 0,
		explanation: "HbA is the predominant adult hemoglobin and contains alpha2beta2 chains.",
		tags: ["PYQ"]
	},
	{
		id: "bio_phb_003",
		topic: "proteins-hemoglobin-biochem",
		year: "FMGE Dec 2018",
		q: "HbA2 is increased in:",
		img: null,
		options: ["A. Sickle cell trait only", "B. Beta-thalassemia trait", "C. Iron deficiency anemia", "D. Aplastic anemia"],
		answer: 1,
		explanation: "Raised HbA2 is a characteristic laboratory finding in beta-thalassemia trait.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "bio_phb_004",
		topic: "proteins-hemoglobin-biochem",
		year: "FMGE Jun 2019",
		q: "Bohr effect describes decreased Hb affinity for oxygen with:",
		img: null,
		options: ["A. Decreased CO2", "B. Increased pH", "C. Increased H+ concentration", "D. Decreased temperature"],
		answer: 2,
		explanation: "Increased H+ and CO2 shift curve right, promoting oxygen release to tissues.",
		tags: ["PYQ"]
	},
	{
		id: "bio_phb_005",
		topic: "proteins-hemoglobin-biochem",
		year: "FMGE Dec 2020",
		q: "Electrophoresis in sickle cell disease shows predominant:",
		img: null,
		options: ["A. HbA", "B. HbS", "C. HbA2", "D. HbF only"],
		answer: 1,
		explanation: "HbS predominates in homozygous disease; pattern differs in trait and treated patients.",
		tags: ["PYQ", "high-yield"]
	},

	// ============ BATCH 4: PURINE & PYRIMIDINE METABOLISM ============
	{
		id: "bio_pp_001",
		topic: "purine-pyrimidine",
		year: "FMGE Dec 2019",
		q: "End product of purine catabolism in humans is:",
		img: null,
		options: ["A. Urea", "B. Uric acid", "C. Ammonia", "D. Allantoin"],
		answer: 1,
		explanation: "Humans lack uricase, so uric acid is final purine degradation product.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "bio_pp_002",
		topic: "purine-pyrimidine",
		year: "FMGE Jun 2018",
		q: "Xanthine oxidase inhibitor used in gout is:",
		img: null,
		options: ["A. Colchicine", "B. Probenecid", "C. Allopurinol", "D. Methotrexate"],
		answer: 2,
		explanation: "Allopurinol reduces uric acid synthesis by inhibiting xanthine oxidase.",
		tags: ["PYQ"]
	},
	{
		id: "bio_pp_003",
		topic: "purine-pyrimidine",
		year: "FMGE Dec 2018",
		q: "Lesch-Nyhan syndrome results from deficiency of:",
		img: null,
		options: ["A. HGPRT", "B. APRT", "C. Xanthine oxidase", "D. Dihydrofolate reductase"],
		answer: 0,
		explanation: "HGPRT deficiency impairs purine salvage and causes hyperuricemia with neurobehavioral features.",
		tags: ["PYQ", "high-yield"]
	},
	{
		id: "bio_pp_004",
		topic: "purine-pyrimidine",
		year: "FMGE Jun 2019",
		q: "Drug inhibiting thymidylate synthase is:",
		img: null,
		options: ["A. 5-fluorouracil", "B. Hydroxyurea", "C. Methotrexate", "D. Cytarabine"],
		answer: 0,
		explanation: "5-FU (as FdUMP) inhibits thymidylate synthase and blocks dTMP synthesis.",
		tags: ["PYQ"]
	},
	{
		id: "bio_pp_005",
		topic: "purine-pyrimidine",
		year: "FMGE Dec 2020",
		q: "Rate-limiting enzyme of de novo pyrimidine synthesis is:",
		img: null,
		options: ["A. Carbamoyl phosphate synthetase II", "B. Aspartate transcarbamylase", "C. Dihydroorotase", "D. Orotate phosphoribosyltransferase"],
		answer: 0,
		explanation: "CPS-II is cytosolic and rate-limiting for pyrimidine synthesis.",
		tags: ["PYQ", "high-yield"]
	},


        {
                id: "bio_gte_006",
                topic: "glycolysis-tca-etc",
                year: "FMGE Jun 2022",
                q: "The rate-limiting enzyme of glycolysis is:",
                img: null,
                options: ["A. Hexokinase", "B. Phosphofructokinase-1 (PFK-1)", "C. Pyruvate kinase", "D. Phosphoglucose isomerase"],
                answer: 1,
                explanation: "PFK-1 is the key regulatory (rate-limiting) enzyme of glycolysis. Activated by: AMP, ADP, fructose-2,6-bisphosphate, Pi. Inhibited by: ATP, citrate, H+. Deficiency of pyruvate kinase → haemolytic anaemia. Hexokinase is substrate-saturable (low Km) and inhibited by its product glucose-6-phosphate.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_gte_007",
                topic: "glycolysis-tca-etc",
                year: "FMGE Dec 2021",
                q: "Net ATP yield from complete oxidation of one glucose molecule (aerobic glycolysis) is:",
                img: null,
                options: ["A. 2 ATP", "B. 30–32 ATP", "C. 38 ATP (older calculation)", "D. 6 ATP"],
                answer: 2,
                explanation: "Modern calculation: 30–32 ATP per glucose (accounting for mitochondrial membrane proton gradient costs). Older textbooks stated 36–38 ATP. Substrate-level phosphorylation: 4 ATP (2 from glycolysis, 2 from TCA). Oxidative phosphorylation: NADH (~2.5 ATP each), FADH2 (~1.5 ATP each). Anaerobic glycolysis: only 2 ATP net.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_gte_008",
                topic: "glycolysis-tca-etc",
                year: "FMGE Jun 2021",
                q: "Thiamine (Vitamin B1) deficiency impairs TCA cycle because it is a cofactor for:",
                img: null,
                options: ["A. Succinate dehydrogenase only", "B. Pyruvate dehydrogenase complex and alpha-ketoglutarate dehydrogenase", "C. Isocitrate dehydrogenase", "D. Malate dehydrogenase"],
                answer: 1,
                explanation: "Thiamine (TPP) is cofactor for: (1) Pyruvate dehydrogenase (pyruvate → acetyl-CoA); (2) α-ketoglutarate dehydrogenase (TCA step 4); (3) Transketolase (pentose phosphate pathway); (4) BCKADH (branched-chain AA). Deficiency → pyruvate/lactate accumulation → Wernicke's encephalopathy, beriberi.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_gte_009",
                topic: "glycolysis-tca-etc",
                year: "FMGE Dec 2020",
                q: "Cyanide poisoning inhibits cellular respiration by blocking:",
                img: null,
                options: ["A. Complex I (NADH dehydrogenase)", "B. Complex IV (Cytochrome c oxidase)", "C. Complex III (bc1 complex)", "D. ATP synthase (Complex V)"],
                answer: 1,
                explanation: "Cyanide: inhibits Cytochrome c oxidase (Complex IV) → blocks electron transfer to O2 → no proton gradient → no ATP synthesis. Cells shift to anaerobic glycolysis → lactic acidosis. Treatment: hydroxocobalamin (first choice) or sodium thiosulphate + amyl nitrite. Venous PO2 elevated (cells can't use O2).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_gte_010",
                topic: "glycolysis-tca-etc",
                year: "FMGE Jun 2020",
                q: "In anaerobic conditions, pyruvate is converted to lactate by:",
                img: null,
                options: ["A. Pyruvate carboxylase", "B. Lactate dehydrogenase (LDH), regenerating NAD+", "C. Pyruvate dehydrogenase complex", "D. Alanine aminotransferase"],
                answer: 1,
                explanation: "Anaerobic glycolysis: Pyruvate → Lactate (catalysed by LDH, regenerating NAD+ needed for continued glycolysis). Occurs in: RBCs (no mitochondria), exercising skeletal muscle, cornea, lens. Lactic acidosis: Type A (tissue hypoxia), Type B (metformin, mitochondrial disease).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_gg_006",
                topic: "gluconeogenesis-glycogen",
                year: "FMGE Jun 2022",
                q: "The key enzyme unique to gluconeogenesis (not reversing glycolysis directly) are:",
                img: null,
                options: ["A. Hexokinase and PFK-1", "B. Pyruvate carboxylase, PEPCK, fructose-1,6-bisphosphatase, glucose-6-phosphatase", "C. Phosphoglucose isomerase and aldolase", "D. Pyruvate dehydrogenase"],
                answer: 1,
                explanation: "Gluconeogenesis bypass enzymes (to overcome irreversible glycolysis steps): (1) Pyruvate → OAA (pyruvate carboxylase, biotin); (2) OAA → PEP (PEPCK, requires GTP); (3) Fructose-1,6-bisphosphate → Fructose-6-P (FBPase-1); (4) Glucose-6-P → Glucose (G6Pase, liver/kidney only).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_gg_007",
                topic: "gluconeogenesis-glycogen",
                year: "FMGE Dec 2021",
                q: "Glycogen storage disease type I (Von Gierke disease) is due to deficiency of:",
                img: null,
                options: ["A. Lysosomal alpha-1,4-glucosidase (Pompe disease)", "B. Glucose-6-phosphatase (hepatic and renal)", "C. Muscle phosphorylase (McArdle disease)", "D. Debranching enzyme"],
                answer: 1,
                explanation: "Von Gierke (GSD type I): glucose-6-phosphatase deficiency → cannot release glucose from liver glycogen → severe fasting hypoglycaemia, hepatomegaly, lactic acidosis (pyruvate accumulates), hyperuricaemia, hyperlipidaemia. Treatment: frequent feeds, raw cornstarch. Liver transplant in severe cases.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_gg_008",
                topic: "gluconeogenesis-glycogen",
                year: "FMGE Jun 2021",
                q: "Rate-limiting enzyme of glycogen synthesis is:",
                img: null,
                options: ["A. Glycogen phosphorylase", "B. Glycogen synthase", "C. Branching enzyme", "D. UDP-glucose pyrophosphorylase"],
                answer: 1,
                explanation: "Glycogen synthesis key enzymes: UDP-glucose pyrophosphorylase → UDP-glucose; glycogen synthase (rate-limiting, adds α-1,4 glucosidic bonds); branching enzyme (α-1,6 bonds). Glycogen breakdown: glycogen phosphorylase (rate-limiting, removes from non-reducing ends) → glucose-1-phosphate → G6P.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_gg_009",
                topic: "gluconeogenesis-glycogen",
                year: "FMGE Dec 2020",
                q: "Pompe disease (GSD type II) is caused by deficiency of:",
                img: null,
                options: ["A. Muscle phosphorylase", "B. Lysosomal alpha-1,4-glucosidase (acid maltase)", "C. Glucose-6-phosphatase", "D. PFK-1"],
                answer: 1,
                explanation: "Pompe disease: acid maltase (lysosomal α-1,4-glucosidase) deficiency → glycogen accumulates in lysosomes of all organs (especially heart, skeletal muscle, liver). Infantile form: cardiomegaly, hypotonia, respiratory failure, death by age 2. Adult form: limb girdle weakness. Treatment: enzyme replacement (alglucosidase alfa).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_gg_010",
                topic: "gluconeogenesis-glycogen",
                year: "FMGE Jun 2020",
                q: "During prolonged starvation (>24 hours), gluconeogenesis substrates include:",
                img: null,
                options: ["A. Glucose and fructose only", "B. Amino acids (alanine, glutamine), lactate (Cori cycle), glycerol (from TG lipolysis)", "C. Fatty acids (directly)", "D. Ketone bodies"],
                answer: 1,
                explanation: "Gluconeogenesis substrates: (1) Lactate (from RBCs, exercising muscle — Cori cycle); (2) Amino acids — alanine (glucose-alanine cycle, from muscle), glutamine; (3) Glycerol (from TG lipolysis in adipose tissue). Fatty acids CANNOT be converted to glucose (acetyl-CoA bypasses OAA net synthesis).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_lip_006",
                topic: "lipid-metabolism",
                year: "FMGE Jun 2022",
                q: "Rate-limiting enzyme of de novo fatty acid synthesis is:",
                img: null,
                options: ["A. Fatty acid synthase (FAS)", "B. Acetyl-CoA carboxylase (ACC)", "C. Citrate lyase", "D. Malic enzyme"],
                answer: 1,
                explanation: "Acetyl-CoA carboxylase (ACC): rate-limiting step → Acetyl-CoA + CO2 → Malonyl-CoA (requires biotin). Activated by: insulin, citrate. Inhibited by: glucagon, palmitoyl-CoA (product inhibition), AMPK. Occurs in cytoplasm of liver, adipose. Fatty acid synthesis: 7 cycles of FAS complex → palmitate (16C).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_lip_007",
                topic: "lipid-metabolism",
                year: "FMGE Dec 2021",
                q: "HMG-CoA reductase is the rate-limiting enzyme of:",
                img: null,
                options: ["A. Fatty acid beta-oxidation", "B. Cholesterol biosynthesis (mevalonate pathway)", "C. Ketogenesis", "D. Triglyceride synthesis"],
                answer: 1,
                explanation: "HMG-CoA reductase: rate-limiting enzyme of cholesterol synthesis. HMG-CoA → Mevalonate (requires 2 NADPH). Inhibited by: statins (competitive inhibitors), cholesterol (negative feedback), glucagon, sterols. Activated by: insulin. Upregulated by SREBP-2 when cellular cholesterol is low.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_lip_008",
                topic: "lipid-metabolism",
                year: "FMGE Jun 2021",
                q: "Lipoprotein lipase (LPL) deficiency results in:",
                img: null,
                options: ["A. Familial hypercholesterolaemia (Type IIa)", "B. Type I hyperlipoproteinaemia (familial LPL deficiency) — very high TG, eruptive xanthomas, pancreatitis", "C. Low HDL only", "D. Increased LDL only"],
                answer: 1,
                explanation: "LPL deficiency (Type I hyperlipoproteinaemia): autosomal recessive. LPL hydrolyses TG in chylomicrons and VLDL. Deficiency → massive hypertriglyceridaemia (>1000 mg/dL), eruptive xanthomas (buttocks, elbows), recurrent pancreatitis, lipaemia retinalis, hepatosplenomegaly. No increased CV risk.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_lip_009",
                topic: "lipid-metabolism",
                year: "FMGE Dec 2020",
                q: "Carnitine is required for beta-oxidation of fatty acids because it:",
                img: null,
                options: ["A. Activates fatty acids by forming acyl-CoA", "B. Transports long-chain acyl-CoA across the inner mitochondrial membrane", "C. Provides NADH for the ETC", "D. Inhibits HMG-CoA reductase"],
                answer: 1,
                explanation: "Carnitine shuttle: Long-chain fatty acids (>C12) cannot cross inner mitochondrial membrane as acyl-CoA. They must be converted to acylcarnitine (carnitine acyltransferase I — rate-limiting, inhibited by malonyl-CoA) → translocated → reconverted to acyl-CoA in matrix. Short/medium-chain FAs enter independently.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_lip_010",
                topic: "lipid-metabolism",
                year: "FMGE Jun 2020",
                q: "Familial hypercholesterolaemia (Type IIa) is caused by:",
                img: null,
                options: ["A. LPL deficiency", "B. LDL receptor deficiency (LDLR mutation)", "C. ApoC-II deficiency", "D. LCAT deficiency"],
                answer: 1,
                explanation: "Familial hypercholesterolaemia: autosomal dominant LDL receptor defect → impaired LDL clearance → very high LDL. Features: tendon xanthomas (Achilles, extensor tendons), xanthelasma, arcus cornea in young (<45 years), premature CVD. Homozygous (1:1,000,000): LDL >600 mg/dL, CAD in childhood.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_uaa_006",
                topic: "urea-cycle-amino-acids",
                year: "FMGE Jun 2022",
                q: "The urea cycle occurs in which organ and is the mechanism for:",
                img: null,
                options: ["A. Kidney; creatinine excretion", "B. Liver (hepatocytes); detoxification of ammonia into urea for renal excretion", "C. Muscle; nitrogen balance", "D. Brain; ammonia buffering"],
                answer: 1,
                explanation: "Urea cycle (Krebs-Henseleit): liver hepatocytes (mitochondria + cytoplasm). Converts toxic NH3 → urea (safe for excretion). Steps: NH3 + CO2 → carbamoyl phosphate (CPS-I) → citrulline → argininosuccinate → arginine → urea + ornithine. Defects → hyperammonaemia + encephalopathy.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_uaa_007",
                topic: "urea-cycle-amino-acids",
                year: "FMGE Dec 2021",
                q: "Phenylketonuria (PKU) is caused by deficiency of:",
                img: null,
                options: ["A. Tyrosine hydroxylase", "B. Phenylalanine hydroxylase (PAH)", "C. Homogentisate oxidase", "D. Cystathionine beta-synthase"],
                answer: 1,
                explanation: "PKU: autosomal recessive deficiency of PAH (cofactor: BH4) → phenylalanine cannot be converted to tyrosine → phenylalanine accumulates → phenylpyruvate (musty odour), phenylacetate, phenyllactate. Features: intellectual disability, seizures, hypopigmentation (↓melanin from ↓tyrosine), 'mousy' body odour. Newborn screening + low-Phe diet.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_uaa_008",
                topic: "urea-cycle-amino-acids",
                year: "FMGE Jun 2021",
                q: "Homocystinuria (homocysteine accumulation) is associated with:",
                img: null,
                options: ["A. Lens dislocation downward and medially, mental retardation, thrombosis", "B. Lens dislocation upward and outward only (Marfan syndrome)", "C. Alkaptonuria (dark urine)", "D. Albinism"],
                answer: 0,
                explanation: "Homocystinuria: cystathionine β-synthase (CBS) deficiency (B6-responsive) → homocysteine accumulates. Features: lens dislocation (downward and inward — unlike Marfan's where it goes up and out), Marfanoid habitus, intellectual disability, premature atherosclerosis and thrombosis. Treatment: B6, folate, methionine-restricted diet, betaine.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_uaa_009",
                topic: "urea-cycle-amino-acids",
                year: "FMGE Dec 2020",
                q: "Alkaptonuria is caused by deficiency of which enzyme, leading to dark urine?",
                img: null,
                options: ["A. Phenylalanine hydroxylase", "B. Homogentisate oxidase (homogentisic acid accumulates)", "C. Fumarylacetoacetase", "D. Tyrosinase"],
                answer: 1,
                explanation: "Alkaptonuria (ochronosis): deficiency of homogentisate oxidase → accumulation of homogentisic acid → darkening of urine on standing (oxidation to brown-black pigment), dark pigmentation of connective tissue (ochronosis). Arthritis (ochronotic arthropathy) in adults. Benign until adulthood. No specific treatment.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_uaa_010",
                topic: "urea-cycle-amino-acids",
                year: "FMGE Jun 2020",
                q: "Maple syrup urine disease (MSUD) is due to deficiency of:",
                img: null,
                options: ["A. Phenylalanine hydroxylase", "B. Branched-chain alpha-ketoacid dehydrogenase (BCKADH)", "C. Homogentisate oxidase", "D. Cystathionine beta-synthase"],
                answer: 1,
                explanation: "MSUD: branched-chain ketoacid dehydrogenase (BCKADH, requires thiamine) deficiency → accumulation of leucine, isoleucine, valine and their ketoacids. Features: sweet maple syrup odour of urine/cerumen, neonatal encephalopathy, seizures, hypoglycaemia. Neonatal screening. Treatment: low-BCAA diet, thiamine supplementation.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_vit_006",
                topic: "vitamins",
                year: "FMGE Jun 2022",
                q: "Vitamin C (ascorbic acid) deficiency (scurvy) causes:",
                img: null,
                options: ["A. Impaired bone mineralisation (rickets)", "B. Defective collagen synthesis → perifollicular haemorrhages, gum bleeding, poor wound healing, corkscrew hairs", "C. Night blindness and xerophthalmia", "D. Megaloblastic anaemia"],
                answer: 1,
                explanation: "Scurvy (Vitamin C deficiency): ascorbic acid required for hydroxylation of proline and lysine residues in collagen (by prolyl/lysyl hydroxylase). Deficiency → weak collagen → perifollicular haemorrhages, swollen/bleeding gums (gingivitis), corkscrew hairs, poor wound healing, 'woody legs', haemarthrosis. Score spongy gums pathognomonic.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_vit_007",
                topic: "vitamins",
                year: "FMGE Dec 2021",
                q: "Vitamin K deficiency affects which coagulation factors?",
                img: null,
                options: ["A. Factor VIII and IX only", "B. Factors II, VII, IX, X, Protein C, Protein S (vitamin K-dependent, gamma-carboxylation)", "C. Factor I (fibrinogen) only", "D. All coagulation factors"],
                answer: 1,
                explanation: "Vitamin K: cofactor for gamma-carboxylation of glutamate residues in Factors II (prothrombin), VII, IX, X (intrinsic + extrinsic pathways) and anticoagulant proteins C and S. Deficiency → prolonged PT (mainly) and APTT. Newborn prophylaxis: IM vitamin K to prevent haemorrhagic disease of newborn.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_vit_008",
                topic: "vitamins",
                year: "FMGE Jun 2021",
                q: "Niacin (vitamin B3) deficiency causes pellagra, characterised by the '3 Ds':",
                img: null,
                options: ["A. Dementia, Dermatitis, Diarrhoea", "B. Diabetes, Dermatitis, Depression", "C. Deafness, Dementia, Dystrophy", "D. Dysphagia, Dizziness, Dementia"],
                answer: 0,
                explanation: "Pellagra (niacin/B3 deficiency): 3 Ds = Dermatitis (Casal's necklace — photosensitive rash on sun-exposed skin), Diarrhoea, Dementia. 4th D = Death (if untreated). Causes: low niacin/tryptophan diet, carcinoid syndrome (excess tryptophan → serotonin), INH (interferes with B6 needed for niacin synthesis), Hartnup disease.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_vit_009",
                topic: "vitamins",
                year: "FMGE Dec 2020",
                q: "Pyridoxine (Vitamin B6) deficiency is caused by INH (isoniazid) because INH:",
                img: null,
                options: ["A. Blocks B6 absorption in gut", "B. Structurally similar to B6 and competitively inhibits B6-dependent enzymes", "C. Increases renal B6 excretion", "D. Inhibits B6 synthesis by gut bacteria"],
                answer: 1,
                explanation: "INH-induced B6 (pyridoxine) deficiency: INH forms hydrazone complexes with pyridoxal-5-phosphate (active B6) → functional B6 depletion. Manifestations: peripheral neuropathy (most common), sideroblastic anaemia, pellagra. Prevention: pyridoxine 10–25 mg/day with INH. Also needed for: AA transamination, haem synthesis, serotonin/GABA synthesis.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_vit_010",
                topic: "vitamins",
                year: "FMGE Jun 2020",
                q: "Fat-soluble vitamins (stored in the body) are:",
                img: null,
                options: ["A. Vitamins A, B12, C, D", "B. Vitamins A, D, E, K ('ADEK' — fat soluble, toxic in excess)", "C. Vitamins B1, B2, B6, B12", "D. Vitamins C and B9 (folate)"],
                answer: 1,
                explanation: "Fat-soluble vitamins: A (retinol), D (calciferol), E (tocopherol), K (phylloquinone/menaquinone) — ADEK. Absorbed with dietary fat (bile salt-dependent), stored in liver/adipose tissue, excreted in bile. Toxicity possible with excess supplementation (especially A and D). Water-soluble vitamins (B complex, C): not stored, excess excreted in urine.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_enz_006",
                topic: "enzyme-kinetics",
                year: "FMGE Jun 2022",
                q: "Km (Michaelis constant) is defined as:",
                img: null,
                options: ["A. Maximum reaction velocity (Vmax)", "B. Substrate concentration at which reaction rate = Vmax/2 (reflects enzyme-substrate affinity)", "C. Product inhibition constant", "D. Enzyme turnover number"],
                answer: 1,
                explanation: "Km = substrate concentration at half-maximal velocity (Vmax/2). Low Km = high affinity (enzyme binds substrate well at low concentrations). High Km = low affinity. Hexokinase (low Km, high affinity for glucose) vs. glucokinase (high Km, low affinity — acts as glucose sensor in liver/pancreas).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_enz_007",
                topic: "enzyme-kinetics",
                year: "FMGE Dec 2021",
                q: "Competitive inhibition of an enzyme increases:",
                img: null,
                options: ["A. Vmax, decreases Km", "B. Apparent Km (reduced affinity), Vmax unchanged", "C. Both Km and Vmax", "D. Neither Km nor Vmax"],
                answer: 1,
                explanation: "Competitive inhibition: inhibitor binds active site (competes with substrate). Effect: ↑apparent Km (more substrate needed to achieve Vmax/2), Vmax unchanged (can be overcome by excess substrate). On Lineweaver-Burk plot: steeper slope, same y-intercept (same Vmax). Examples: statins (HMG-CoA), methotrexate (DHFR), sulphonamides (PABA).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_enz_008",
                topic: "enzyme-kinetics",
                year: "FMGE Jun 2021",
                q: "Allosteric enzymes differ from Michaelis-Menten enzymes because they:",
                img: null,
                options: ["A. Follow Michaelis-Menten kinetics exactly", "B. Show sigmoidal (S-shaped) kinetics, have regulatory subunits, and show cooperativity", "C. Are always competitively inhibited", "D. Only function in the cytoplasm"],
                answer: 1,
                explanation: "Allosteric enzymes: sigmoidal velocity-substrate curve (vs. hyperbolic for MM enzymes), regulated by effectors binding at sites other than active site. Positive effectors: shift curve left (↑affinity). Negative effectors: shift right. Examples: ATCase, PFK-1, glycogen phosphorylase. Cooperative binding (like Hb with O2).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_enz_009",
                topic: "enzyme-kinetics",
                year: "FMGE Dec 2020",
                q: "Isoenzymes (isozymes) are:",
                img: null,
                options: ["A. Enzymes with identical amino acid sequences", "B. Multiple molecular forms of an enzyme that catalyse the same reaction but differ in structure and properties", "C. Denatured forms of enzymes", "D. Enzymes with different substrate specificities"],
                answer: 1,
                explanation: "Isoenzymes: structurally distinct forms of an enzyme catalysing the same reaction. Different tissue distribution makes them clinically useful. LDH: 5 isoforms (H and M subunits). LDH-1 (HHHH): heart — elevated in MI. LDH-5 (MMMM): liver/skeletal muscle. CK isoforms: CK-MM (skeletal), CK-MB (heart), CK-BB (brain).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_enz_010",
                topic: "enzyme-kinetics",
                year: "FMGE Jun 2020",
                q: "Lineweaver-Burk (double reciprocal) plot is used to:",
                img: null,
                options: ["A. Measure enzyme concentration", "B. Determine Km and Vmax graphically and distinguish types of inhibition", "C. Measure enzyme molecular weight", "D. Determine enzyme isoforms"],
                answer: 1,
                explanation: "Lineweaver-Burk plot: 1/V vs 1/[S]. Y-intercept = 1/Vmax; X-intercept = -1/Km; Slope = Km/Vmax. Distinguishes: competitive inhibition (same y-intercept, different slope — changed Km, same Vmax); non-competitive (same x-intercept, changed Vmax — changed Vmax, same Km); uncompetitive (parallel lines — both changed).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_iem_006",
                topic: "inborn-errors-metabolism",
                year: "FMGE Jun 2022",
                q: "Gaucher disease (most common lysosomal storage disease) is due to deficiency of:",
                img: null,
                options: ["A. Hexosaminidase A (Tay-Sachs)", "B. Beta-glucocerebrosidase → glucocerebroside accumulation in reticuloendothelial cells", "C. Alpha-galactosidase A (Fabry disease)", "D. Sphingomyelinase (Niemann-Pick)"],
                answer: 1,
                explanation: "Gaucher disease: β-glucocerebrosidase (glucocerebrosidase) deficiency → glucocerebroside accumulates in macrophages/RES (bone marrow, liver, spleen). Gaucher cells (macrophages with crinkled paper/tissue paper cytoplasm). Type 1 (most common): hepatosplenomegaly, bone disease, Erlenmeyer flask deformity. Treatment: enzyme replacement (imiglucerase).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_iem_007",
                topic: "inborn-errors-metabolism",
                year: "FMGE Dec 2021",
                q: "Tay-Sachs disease is caused by deficiency of:",
                img: null,
                options: ["A. Beta-glucocerebrosidase", "B. Hexosaminidase A → GM2 ganglioside accumulation in neurons", "C. Sphingomyelinase", "D. Arylsulphatase A"],
                answer: 1,
                explanation: "Tay-Sachs: hexosaminidase A deficiency → GM2 ganglioside accumulates in neurons. Features: cherry red spot at macula (50%), progressive neurological deterioration, hypersensitivity to sound (hyperacusis), blindness, death by age 4. Ashkenazi Jewish population. No hepatosplenomegaly (unlike Gaucher/Niemann-Pick).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_iem_008",
                topic: "inborn-errors-metabolism",
                year: "FMGE Jun 2021",
                q: "Wilson's disease (hepatolenticular degeneration) is caused by a defect in:",
                img: null,
                options: ["A. Ceruloplasmin only", "B. ATP7B (copper-transporting ATPase) → impaired biliary copper excretion", "C. Ferritin synthesis", "D. Alpha-1-antitrypsin"],
                answer: 1,
                explanation: "Wilson's disease: ATP7B mutation → copper accumulates in liver, brain, eyes, kidneys. Features: hepatic (cirrhosis), neuropsychiatric (tremor, dysarthria, personality change), Kayser-Fleischer rings (copper in Descemet's membrane — greenish-brown corneal rings, seen on slit-lamp), haemolytic anaemia. Low ceruloplasmin, high urinary copper. Treatment: penicillamine, trientine, zinc.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_iem_009",
                topic: "inborn-errors-metabolism",
                year: "FMGE Dec 2020",
                q: "Alpha-1-antitrypsin (A1AT) deficiency causes:",
                img: null,
                options: ["A. Liver disease only", "B. Both panacinar emphysema (lungs) and liver disease (cirrhosis)", "C. Pulmonary fibrosis without emphysema", "D. Nephrotic syndrome"],
                answer: 1,
                explanation: "A1AT deficiency: autosomal recessive. A1AT normally inhibits neutrophil elastase. Deficiency → unchecked elastase → panacinar emphysema (predominantly lower lobe). Misfolded A1AT protein accumulates in liver → cirrhosis (PAS-positive hepatocyte inclusions). PiZZ genotype is most common severe form. Treatment: augmentation therapy (IV A1AT).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_iem_010",
                topic: "inborn-errors-metabolism",
                year: "FMGE Jun 2020",
                q: "Haemochromatosis (iron overload) is caused by mutations in:",
                img: null,
                options: ["A. Ferritin gene", "B. HFE gene (hereditary haemochromatosis) → excess intestinal iron absorption", "C. Transferrin receptor 2 gene only", "D. Hepcidin gene only"],
                answer: 1,
                explanation: "Hereditary haemochromatosis: HFE gene mutation (C282Y most common, ~85%) → reduced hepcidin → increased ferroportin activity → excess iron absorption. Iron deposits in liver (cirrhosis), pancreas (bronze diabetes), heart, skin (bronzing), joints, gonads. Transferrin saturation >45%, elevated ferritin. Treatment: regular phlebotomy.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_mb_006",
                topic: "molecular-biology",
                year: "FMGE Jun 2022",
                q: "PCR (polymerase chain reaction) requires:",
                img: null,
                options: ["A. RNA template and reverse transcriptase", "B. DNA template, specific primers, Taq polymerase (heat-stable), dNTPs, and thermal cycling", "C. Restriction enzymes and ligase only", "D. Ribosomes and tRNA"],
                answer: 1,
                explanation: "PCR: amplifies specific DNA sequences in vitro. Components: DNA template, forward and reverse primers (define amplicon), thermostable Taq polymerase (from Thermus aquaticus), dNTPs, buffer with Mg2+. Thermal cycling: (1) Denaturation (94°C), (2) Annealing (55–65°C), (3) Extension (72°C). RT-PCR: RNA → cDNA → PCR.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_mb_007",
                topic: "molecular-biology",
                year: "FMGE Dec 2021",
                q: "In DNA replication, the enzyme that removes RNA primers and replaces them with DNA is:",
                img: null,
                options: ["A. DNA primase", "B. DNA polymerase I (in prokaryotes) / RNase H + DNA Pol delta (eukaryotes)", "C. DNA helicase", "D. DNA ligase"],
                answer: 1,
                explanation: "DNA replication key enzymes: Helicase (unwinds dsDNA), Primase (synthesises RNA primer), DNA Pol III (main synthesising enzyme in prokaryotes), DNA Pol I (5'→3' exonuclease removes primers, fills gaps), DNA Ligase (joins Okazaki fragments). In eukaryotes: Pol alpha, delta, epsilon.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_mb_008",
                topic: "molecular-biology",
                year: "FMGE Jun 2021",
                q: "Transcription in eukaryotes uses which RNA polymerases?",
                img: null,
                options: ["A. A single RNA polymerase for all RNA types", "B. RNA Pol I (rRNA), RNA Pol II (mRNA), RNA Pol III (tRNA, 5S rRNA)", "C. DNA polymerase for mRNA synthesis", "D. Reverse transcriptase for genomic DNA"],
                answer: 1,
                explanation: "Eukaryotic RNA polymerases: Pol I → rRNA (28S, 18S, 5.8S — nucleolus); Pol II → mRNA and most snRNA (inhibited by alpha-amanitin at low doses); Pol III → tRNA, 5S rRNA, snRNA. Prokaryotes: single RNA polymerase (alpha2 beta beta' sigma core). Alpha-amanitin (Amanita phalloides mushroom) inhibits RNA Pol II → hepatocellular toxicity.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_mb_009",
                topic: "molecular-biology",
                year: "FMGE Dec 2020",
                q: "The lac operon is an example of:",
                img: null,
                options: ["A. Constitutive gene expression", "B. Inducible gene regulation (negative regulation — repressor removed by lactose inducer)", "C. Repressible gene regulation", "D. Eukaryotic gene regulation"],
                answer: 1,
                explanation: "lac operon (E. coli): inducible system. In absence of lactose: lac repressor binds operator → transcription blocked. Lactose (allolactose) = inducer → binds repressor → conformational change → repressor releases operator → transcription of lacZ (beta-galactosidase), lacY (permease), lacA. Catabolite repression: cAMP-CAP activates when glucose absent.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_mb_010",
                topic: "molecular-biology",
                year: "FMGE Jun 2020",
                q: "Southern blotting detects:",
                img: null,
                options: ["A. RNA sequences (Northern)", "B. DNA sequences (specific DNA fragments by hybridisation with labelled probe)", "C. Proteins (Western blot)", "D. Antibodies (ELISA)"],
                answer: 1,
                explanation: "Blotting techniques mnemonic SNoW DRoP: Southern = DNA, Northern = RNA, Western = Protein. Southern blotting: restriction enzyme digestion → gel electrophoresis → transfer to membrane → hybridisation with labelled probe → detect specific DNA fragment. Used for sickle cell diagnosis (MstII restriction pattern), HBV DNA, gene rearrangements.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_phb_006",
                topic: "proteins-hemoglobin-biochem",
                year: "FMGE Jun 2022",
                q: "HbA1c (glycated haemoglobin) reflects blood glucose control over:",
                img: null,
                options: ["A. Past 2 weeks", "B. Past 2–3 months (average lifespan of RBC ~120 days)", "C. Past 24 hours only", "D. Past 6 months"],
                answer: 1,
                explanation: "HbA1c: irreversible non-enzymatic glycation of haemoglobin (N-terminal valine of beta chain). Reflects average blood glucose over ~2–3 months. Normal: <5.7%. Prediabetes: 5.7–6.4%. Diabetes: ≥6.5% (diagnostic criterion). Target in DM: <7% (individualized). Falsely low in haemolytic anaemia, blood transfusion, high RBC turnover.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_phb_007",
                topic: "proteins-hemoglobin-biochem",
                year: "FMGE Dec 2021",
                q: "Sickle cell disease (HbS) results from a mutation of:",
                img: null,
                options: ["A. Glutamate to lysine at position 6 of beta chain", "B. Glutamate to valine at position 6 of beta chain (GAG → GTG codon)", "C. Alanine to serine at alpha chain", "D. Deletion of beta globin gene"],
                answer: 1,
                explanation: "HbS: point mutation at codon 6 of beta-globin gene (GAG → GTG) → glutamate replaced by valine. In deoxygenated state, HbS polymerises → sickle-shaped RBCs. Autosomal recessive. Manifestations: vaso-occlusive crises, haemolytic anaemia, stroke, ACS, splenic sequestration. Protective against P. falciparum malaria (HbAS trait).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_phb_008",
                topic: "proteins-hemoglobin-biochem",
                year: "FMGE Jun 2021",
                q: "Protein electrophoresis is used to detect M-protein (monoclonal protein) in:",
                img: null,
                options: ["A. Haemophilia A", "B. Multiple myeloma (M-spike in gamma/beta region)", "C. Alpha-1-antitrypsin deficiency", "D. Sickle cell disease"],
                answer: 1,
                explanation: "Serum protein electrophoresis (SPEP): bands = albumin, alpha-1, alpha-2, beta, gamma globulins. M-protein (monoclonal immunoglobulin spike) in gamma or beta-gamma region: multiple myeloma, MGUS, Waldenström's macroglobulinaemia, primary amyloidosis. Low albumin + polyclonal hypergammaglobulinaemia = chronic liver disease, chronic infection.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_phb_009",
                topic: "proteins-hemoglobin-biochem",
                year: "FMGE Dec 2020",
                q: "2,3-BPG (2,3-bisphosphoglycerate) in RBCs acts to:",
                img: null,
                options: ["A. Increase O2 affinity of Hb (left shift)", "B. Decrease O2 affinity of Hb (right shift) → facilitates O2 release to tissues", "C. Prevent haemoglobin oxidation", "D. Carry CO2 in RBCs"],
                answer: 1,
                explanation: "2,3-BPG (RBC specific, from glycolysis Rapoport-Luebering shunt): binds to deoxy-Hb between beta chains → decreases O2 affinity → right shift of ODC → O2 release to tissues. Increased in: chronic hypoxia (high altitude, anaemia, COPD). Decreased: packed stored blood (risk of O2 delivery failure). HbF has low affinity for 2,3-BPG → left shift → high O2 affinity (fetal advantage).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_phb_010",
                topic: "proteins-hemoglobin-biochem",
                year: "FMGE Jun 2020",
                q: "Met-haemoglobinaemia (MetHb) is caused by oxidation of Fe2+ to Fe3+, and is treated with:",
                img: null,
                options: ["A. Hyperbaric oxygen", "B. Methylene blue (reduces MetHb back to Hb via NADPH-MetHb reductase/G6PD pathway)", "C. N-acetylcysteine", "D. Atropine"],
                answer: 1,
                explanation: "Methaemoglobinaemia: Fe3+ haem cannot carry O2 → cyanosis unresponsive to O2. Causes: dapsone, prilocaine, nitrites, nitrates, benzocaine. Treatment: methylene blue (works via NADPH from G6PD pathway) → note: contraindicated in G6PD deficiency. Chocolate brown blood that doesn't turn red on O2 exposure. Pulse oximetry unreliable (reads ~85%).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_pp_006",
                topic: "purine-pyrimidine",
                year: "FMGE Jun 2022",
                q: "Purines (adenine, guanine) are synthesised de novo from:",
                img: null,
                options: ["A. Uridine and thymidine", "B. Glycine, glutamine, aspartate, ribose-5-phosphate, and CO2 (built on PRPP)", "C. Glucose directly", "D. Acetyl-CoA and malonyl-CoA"],
                answer: 1,
                explanation: "Purine de novo synthesis: assembled on PRPP (5-phosphoribosyl-1-pyrophosphate). Contributors: glycine (provides C4, C5, N7), glutamine (N3, N9), aspartate (N1), CO2 (C6), THF (C2, C8). Rate-limiting enzyme: PRPP amidotransferase (glutamine PRPP amidotransferase). Product: IMP → AMP or GMP.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_pp_007",
                topic: "purine-pyrimidine",
                year: "FMGE Dec 2021",
                q: "Lesch-Nyhan syndrome is caused by deficiency of:",
                img: null,
                options: ["A. Adenosine deaminase (ADA)", "B. HGPRT (hypoxanthine-guanine phosphoribosyltransferase) → impaired purine salvage", "C. Xanthine oxidase", "D. PRPP amidotransferase"],
                answer: 1,
                explanation: "Lesch-Nyhan syndrome: X-linked recessive HGPRT deficiency → cannot salvage hypoxanthine/guanine → increased de novo purine synthesis → hyperuricaemia + neurological syndrome. Features: gout, nephrolithiasis, intellectual disability, choreoathetosis, self-mutilation (biting fingers/lips — pathognomonic). Treatment: allopurinol (treats gout, not neurological features).",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_pp_008",
                topic: "purine-pyrimidine",
                year: "FMGE Jun 2021",
                q: "Methotrexate (MTX) inhibits purine and pyrimidine synthesis by blocking:",
                img: null,
                options: ["A. PRPP amidotransferase", "B. Dihydrofolate reductase (DHFR) → depletes THF needed for purine and dTMP synthesis", "C. Xanthine oxidase", "D. Thymidylate synthase only"],
                answer: 1,
                explanation: "MTX: competitive inhibitor of DHFR → reduces folate to dihydrofolate (DHF); DHF cannot be converted to tetrahydrofolate (THF); THF required for: (1) de novo purine synthesis (N5,N10-methylene-THF); (2) dTMP synthesis (thymidylate synthase). Leucovorin (folinic acid) rescue after high-dose MTX bypasses DHFR block.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_pp_009",
                topic: "purine-pyrimidine",
                year: "FMGE Dec 2020",
                q: "Pyrimidine catabolism ends in water-soluble products, while purine catabolism ends in:",
                img: null,
                options: ["A. Carbon dioxide and water only", "B. Uric acid (poorly soluble) in humans (lacking uricase)", "C. Allantoin in all mammals", "D. Orotic acid"],
                answer: 1,
                explanation: "Purine catabolism: AMP → IMP → hypoxanthine → xanthine → URIC ACID (xanthine oxidase). Humans lack uricase (converts uric acid to allantoin in other mammals) → uric acid is final product. Uric acid poorly soluble → accumulates → gout (MSU crystals). Rasburicase: recombinant uricase used for tumour lysis syndrome.",
                tags: ["PYQ", "high-yield"]
        },
        {
                id: "bio_pp_010",
                topic: "purine-pyrimidine",
                year: "FMGE Jun 2020",
                q: "Orotic aciduria (excess orotic acid in urine) without hyperammonaemia indicates:",
                img: null,
                options: ["A. Urea cycle defect", "B. UMP synthase deficiency (pyrimidine synthesis defect — hereditary orotic aciduria)", "C. PRPP amidotransferase excess", "D. Adenosine deaminase deficiency"],
                answer: 1,
                explanation: "Orotic aciduria with hyperammonaemia = OTC deficiency (urea cycle — carbamoyl phosphate overflows to pyrimidine pathway). Orotic aciduria WITHOUT hyperammonaemia = UMP synthase deficiency (hereditary orotic aciduria) — defective pyrimidine synthesis causing megaloblastic anaemia (not corrected by B12/folate) + orotic crystals in urine. Treatment: uridine supplementation.",
                tags: ["PYQ", "high-yield"]
        },

];

export default biochemistry;
