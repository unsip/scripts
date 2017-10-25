LINKS = {
  "FPU": ['https://en.wikipedia.org/wiki/Floating-point_unit'],
  "VME": ['https://en.wikipedia.org/wiki/Virtual_8086_mode#Virtual_8086_mode_enhancements_.28VME.29'],
  "DE": ['https://en.wikipedia.org/wiki/Control_register#CR4'],
  "PSE": ['http://en.wikipedia.org/wiki/Page_Size_Extension', 'https://en.wikipedia.org/wiki/Page_(computer_memory)'],
  "TSC": ['http://en.wikipedia.org/wiki/Time_Stamp_Counter', 'http://oliveryang.net/2015/09/pitfalls-of-TSC-usage/'],
  "MSR": ['http://en.wikipedia.org/wiki/Model-specific_register'],
  "PAE": ['http://en.wikipedia.org/wiki/Physical_Address_Extension'],
  "MCE": ['http://en.wikipedia.org/wiki/Machine_Check_Exception'],
  "CX8": ['http://www.felixcloutier.com/x86/CMPXCHG8B:CMPXCHG16B.html'],
  "APIC": ['http://en.wikipedia.org/wiki/Advanced_Programmable_Interrupt_Controller'],
  "SEP": ['http://www.felixcloutier.com/x86/SYSENTER.html', 'http://www.felixcloutier.com/x86/SYSEXIT.html'],
  "MTRR": ['http://en.wikipedia.org/wiki/Memory_Type_Range_Registers'],
  "PGE": ['https://en.wikipedia.org/wiki/Translation_lookaside_buffer#Address_space_switch'],
  "MCA": ['http://en.wikipedia.org/wiki/Machine_check_architecture'],
  "CMOV": ['http://www.rcollins.org/p6/opcodes/CMOV.html', 'http://en.wikipedia.org/wiki/FCMOV'],
  "PAT": ['http://en.wikipedia.org/wiki/Page_Attribute_Table'],
  "PSE36": ['http://en.wikipedia.org/wiki/PSE-36'],
  "PN": ['http://en.wikipedia.org/wiki/CPUID#EAX.3D3:_Processor_Serial_Number'],
  "CLFLUSH": ['https://en.wikipedia.org/wiki/CPU_cache#CACHE-LINES'],
  "DS": [],
  "ACPI": ['http://en.wikipedia.org/wiki/Advanced_Configuration_and_Power_Interface'],
  "MMX": ['http://en.wikipedia.org/wiki/MMX_%28instruction_set%29'],
  "FXSR": ['https://en.wikipedia.org/wiki/Control_register#CR4'],
  "XMM": ['http://en.wikipedia.org/wiki/Streaming_SIMD_Extensions'],
  "XMM2": ['http://en.wikipedia.org/wiki/SSE2'],
  "SELFSNOOP": ['http://en.wikipedia.org/wiki/Cache_snooping'],
  "HT": ['http://en.wikipedia.org/wiki/Hyperthreading'],
  "ACC": [],
  "IA64": ['http://en.wikipedia.org/wiki/IA-64'],
  "PBE": ['https://en.wikipedia.org/wiki/CPUID#EAX.3D1:_Processor_Info_and_Feature_Bits'],
  "SYSCALL": ['http://www.felixcloutier.com/x86/SYSCALL.html', 'http://www.felixcloutier.com/x86/SYSRET.html'],
  "MP": ['https://en.wikipedia.org/wiki/Multiprocessing'],
  "NX": ['http://en.wikipedia.org/wiki/NX_bit'],
  "MMXEXT": ['http://en.wikipedia.org/wiki/MMX_%28instruction_set%29'],
  "FXSR_OPT": [],
  "GBPAGES": ['https://en.wikipedia.org/wiki/Page_(computer_memory)'],
  "RDTSCP": ['http://www.felixcloutier.com/x86/RDTSCP.html'],
  "LM": ['https://en.wikipedia.org/wiki/Long_mode'],
  "3DNOWEXT": ['https://en.wikipedia.org/wiki/3DNow%21#3DNow_extensions'],
  "3DNOW": ['http://en.wikipedia.org/wiki/3DNow%21'],
  "RECOVERY": [],
  "LONGRUN": [],
  "LRTI": [],
  "CXMMX": ['https://en.wikipedia.org/wiki/Extended_MMX'],
  "K6_MTRR": ['https://en.wikipedia.org/wiki/Memory_type_range_register'],
  "CYRIX_ARR": ['https://en.wikipedia.org/wiki/Memory_type_range_register', 'https://en.wikipedia.org/wiki/Address-range_register'],
  "CENTAUR_MCR": ['https://en.wikipedia.org/wiki/Memory_type_range_register'],
  "K8": [],
  "K7": [],
  "P3": [],
  "P4": [],
  "CONSTANT_TSC": ['https://en.wikipedia.org/wiki/Time_Stamp_Counter', 'http://oliveryang.net/2015/09/pitfalls-of-TSC-usage/'],
  "UP": ['https://en.wikipedia.org/wiki/Symmetric_multiprocessing'],
  "ART": [],
  "ARCH_PERFMON": ['http://www.intel.com/software/pcm'],
  "PEBS": ['https://xem.github.io/minix86/manual/intel-x86-and-64-manual-vol3/o_fe12b1e2a880e0ce-734.html'],
  "BTS": ['https://en.wikipedia.org/wiki/Branch_trace'],
  "SYSCALL32": [],
  "SYSENTER32": [],
  "REP_GOOD": [],
  "MFENCE_RDTSC": ['https://en.wikipedia.org/wiki/Time_Stamp_Counter', 'http://oliveryang.net/2015/09/pitfalls-of-TSC-usage/'],
  "LFENCE_RDTSC": ['https://en.wikipedia.org/wiki/Time_Stamp_Counter', 'http://oliveryang.net/2015/09/pitfalls-of-TSC-usage/'],
  "ACC_POWER": ['https://lkml.org/lkml/2016/1/6/873'],
  "NOPL": ['http://john.freml.in/amd64-nopl'],
  "ALWAYS": [],
  "XTOPOLOGY": [],
  "TSC_RELIABLE": ['https://en.wikipedia.org/wiki/Time_Stamp_Counter', 'http://oliveryang.net/2015/09/pitfalls-of-TSC-usage/'],
  "NONSTOP_TSC": ['https://en.wikipedia.org/wiki/Time_Stamp_Counter', 'http://oliveryang.net/2015/09/pitfalls-of-TSC-usage/'],
  "CPUID": ['http://x86.renejeschke.de/html/file_module_x86_id_45.html', 'https://en.wikipedia.org/wiki/CPUID'],
  "EXTD_APICID": ['https://software.intel.com/en-us/articles/intel-64-architecture-processor-topology-enumeration'],
  "AMD_DCM": [],
  "APERFMPERF": ['https://lwn.net/Articles/283769/'],
  "NONSTOP_TSC_S3": ['https://en.wikipedia.org/wiki/Time_Stamp_Counter', 'http://oliveryang.net/2015/09/pitfalls-of-TSC-usage/'],
  "TSC_KNOWN_FREQ": ['https://en.wikipedia.org/wiki/Time_Stamp_Counter', 'http://oliveryang.net/2015/09/pitfalls-of-TSC-usage/'],
  "XMM3": ['https://en.wikipedia.org/wiki/SSE3', 'https://en.wikipedia.org/wiki/Pentium_4#Prescott'],
  "PCLMULQDQ": ['https://en.wikipedia.org/wiki/CLMUL_instruction_set', 'http://www.felixcloutier.com/x86/PCLMULQDQ.html', 'https://en.wikipedia.org/wiki/Galois/Counter_Mode'],
  "DTES64": [],
  "MWAIT": ['http://en.wikipedia.org/wiki/SSE3#Intel_instructions'],
  "DSCPL": [],
  "VMX": ['http://en.wikipedia.org/wiki/X86_virtualization#Intel_virtualization_.28VT-x.29', 'https://en.wikipedia.org/wiki/X86_virtualization'],
  "SMX": ['http://en.wikipedia.org/wiki/Trusted_Execution_Technology', 'http://en.wikipedia.org/wiki/Trusted_Platform_Module', 'https://en.wikipedia.org/wiki/LaGrande'],
  "EST": ['https://en.wikipedia.org/wiki/SpeedStep'],
  "TM2": ['http://en.wikipedia.org/wiki/Tm2'],
  "SSSE3": ['https://en.wikipedia.org/wiki/SSSE3'],
  "CID": [],
  "SDBG": [],
  "FMA": ['http://en.wikipedia.org/wiki/FMA_instruction_set'],
  "CX16": ['https://en.wikipedia.org/wiki/Double_compare-and-swap'],
  "XTPR": [],
  "PDCM": [],
  "PCID": [],
  "DCA": [],
  "XMM4_1": ['http://en.wikipedia.org/wiki/SSE4.1#SSE4.1'],
  "XMM4_2": ['http://en.wikipedia.org/wiki/SSE4.2#SSE4.2'],
  "X2APIC": ['http://en.wikipedia.org/wiki/X2APIC'],
  "MOVBE": ['http://www.felixcloutier.com/x86/MOVBE.html', 'https://en.wikipedia.org/wiki/Big-endian'],
  "POPCNT": ['https://en.wikipedia.org/wiki/Popcnt', 'http://en.wikipedia.org/wiki/SSE4#POPCNT_and_LZCNT', 'http://en.wikipedia.org/wiki/Hamming_weight'],
  "TSC_DEADLINE_TIMER": ['https://en.wikipedia.org/wiki/Time_Stamp_Counter', 'http://oliveryang.net/2015/09/pitfalls-of-TSC-usage/'],
  "AES": ['http://en.wikipedia.org/wiki/AES_instruction_set'],
  "XSAVE": ['http://www.felixcloutier.com/x86/XSAVE.html', 'http://www.felixcloutier.com/x86/XGETBV.html', 'http://www.felixcloutier.com/x86/XRSTOR.html', 'http://www.felixcloutier.com/x86/XSETBV.html'],
  "OSXSAVE": ['http://www.felixcloutier.com/x86/XSAVE.html'],
  "AVX": ['http://en.wikipedia.org/wiki/Advanced_Vector_Extensions'],
  "F16C": ['https://en.wikipedia.org/wiki/F16C', 'https://en.wikipedia.org/wiki/Half-precision', 'http://en.wikipedia.org/wiki/CVT16_instruction_set'],
  "RDRAND": ['http://en.wikipedia.org/wiki/RdRand', 'http://www.felixcloutier.com/x86/RDRAND.html'],
  "HYPERVISOR": ['https://en.wikipedia.org/wiki/Hypervisor'],
  "XSTORE": ['https://en.wikipedia.org/wiki/Random_number_generation'],
  "XSTORE_EN": ['https://en.wikipedia.org/wiki/Random_number_generation'],
  "XCRYPT": [''],
  "XCRYPT_EN": [],
  "ACE2": [],
  "ACE2_EN": [],
  "PHE": [],
  "PHE_EN": [],
  "PMM": [],
  "PMM_EN": [],
  "LAHF_LM": ['http://x86.renejeschke.de/html/file_module_x86_id_148.html'],
  "CMP_LEGACY": [],
  "SVM": ['http://en.wikipedia.org/wiki/X86_virtualization#AMD_virtualization_.28AMD-V.29'],
  "EXTAPIC": [],
  "CR8_LEGACY": [],
  "ABM": ['https://en.wikipedia.org/wiki/Bit_Manipulation_Instruction_Sets#ABM_.28Advanced_Bit_Manipulation.29'],
  "SSE4A": ['http://en.wikipedia.org/wiki/SSE4#SSE4a'],
  "MISALIGNSSE": [],
  "3DNOWPREFETCH": ['https://en.wikipedia.org/wiki/3DNow!'],
  "OSVW": ['http://developer.amd.com/wordpress/media/2012/10/24593_APM_v21.pdf'],
  "IBS": ['https://en.wikipedia.org/wiki/Hardware_performance_counter#Instruction_based_sampling'],
  "XOP": ['http://en.wikipedia.org/wiki/XOP_instruction_set'],
  "SKINIT": [],
  "WDT": ['https://en.wikipedia.org/wiki/Watchdog_timer'],
  "LWP": ['https://en.wikipedia.org/wiki/Profiling_(computer_programming)'],
  "FMA4": ['http://en.wikipedia.org/wiki/FMA_instruction_set'],
  "TCE": [],
  "NODEID_MSR": [],
  "TBM": ['https://en.wikipedia.org/wiki/Bit_Manipulation_Instruction_Sets#TBM'],
  "TOPOEXT": [],
  "PERFCTR_CORE": [],
  "PERFCTR_NB": [],
  "BPEXT": [],
  "PTSC": [],
  "PERFCTR_LLC": [],
  "MWAITX": [],
  "RING3MWAIT": [],
  "CPUID_FAULT": [],
  "CPB": [],
  "EPB": [],
  "CAT_L3": [],
  "CAT_L2": [],
  "CDP_L3": [],
  "HW_PSTATE": [],
  "PROC_FEEDBACK": [],
  "SME": [],
  "INTEL_PPIN": [],
  "INTEL_PT": ['https://software.intel.com/en-us/blogs/2013/09/18/processor-tracing'],
  "AVX512_4VNNIW": [],
  "AVX512_4FMAPS": [],
  "MBA": [],
  "TPR_SHADOW": [],
  "VNMI": [],
  "FLEXPRIORITY": [],
  "EPT": [],
  "VPID": [],
  "VMMCALL": [],
  "XENPV": [],
  "FSGSBASE": [],
  "TSC_ADJUST": [],
  "BMI1": [],
  "HLE": [],
  "AVX2": [],
  "SMEP": [],
  "BMI2": [],
  "ERMS": [],
  "INVPCID": [],
  "RTM": [],
  "CQM": [],
  "MPX": [],
  "RDT_A": [],
  "AVX512F": ['https://en.wikipedia.org/wiki/AVX-512'],
  "AVX512DQ": ['https://en.wikipedia.org/wiki/AVX-512'],
  "RDSEED": [],
  "ADX": [],
  "SMAP": [],
  "AVX512IFMA": [],
  "CLFLUSHOPT": [],
  "CLWB": [],
  "AVX512PF": ['https://en.wikipedia.org/wiki/AVX-512'],
  "AVX512ER": ['https://en.wikipedia.org/wiki/AVX-512'],
  "AVX512CD": ['https://en.wikipedia.org/wiki/AVX-512'],
  "SHA_NI": [],
  "AVX512BW": ['https://en.wikipedia.org/wiki/AVX-512#New_instructions_in_AVX-512_BW_and_DQ'],
  "AVX512VL": ['https://en.wikipedia.org/wiki/AVX-512'],
  "XSAVEOPT": [],
  "XSAVEC": [],
  "XGETBV1": [],
  "XSAVES": [],
  "CQM_LLC": [],
  "CQM_OCCUP_LLC": [],
  "CQM_MBM_TOTAL": [],
  "CQM_MBM_LOCAL": [],
  "CLZERO": [],
  "IRPERF": [],
  "DTHERM": [],
  "IDA": [],
  "ARAT": [],
  "PLN": [],
  "PTS": [],
  "HWP": [],
  "HWP_NOTIFY": [],
  "HWP_ACT_WINDOW": [],
  "HWP_EPP": [],
  "HWP_PKG_REQ": [],
  "NPT": [],
  "LBRV": [],
  "SVML": [],
  "NRIPS": [],
  "TSCRATEMSR": [],
  "VMCBCLEAN": [],
  "FLUSHBYASID": [],
  "DECODEASSISTS": [],
  "PAUSEFILTER": [],
  "PFTHRESHOLD": [],
  "AVIC": [],
  "V_VMSAVE_VMLOAD": [],
  "VGIF": [],
  "AVX512VBMI": [],
  "PKU": [],
  "OSPKE": [],
  "AVX512_VPOPCNTDQ": [],
  "LA57": [],
  "RDPID": [],
  "OVERFLOW_RECOV": [],
  "SUCCOR": [],
  "SMCA": [],
  "F00F": [],
  "FDIV": [],
  "COMA": [],
  "AMD_TLB_MMATCH": [],
  "AMD_APIC_C1E": [],
  "11AP": [],
  "FXSAVE_LEAK": [],
  "CLFLUSH_MONITOR": [],
  "SYSRET_SS_ATTRS": [],
  "ESPFIX": [],
  "NULL_SEG": [],
  "SWAPGS_FENCE": [],
  "MONITOR": [],
  "AMD_E400": []
}
