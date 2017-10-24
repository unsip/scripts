LINKS = {
  "FPU": ['https://en.wikipedia.org/wiki/Floating-point_unit'],
  "VME": ['https://en.wikipedia.org/wiki/Virtual_8086_mode#Virtual_8086_mode_enhancements_.28VME.29'],
  "DE": ['https://en.wikipedia.org/wiki/Control_register#CR4'],
  "PSE": ['http://en.wikipedia.org/wiki/Page_Size_Extension', 'https://en.wikipedia.org/wiki/Page_(computer_memory)'],
  "TSC": ['http://en.wikipedia.org/wiki/Time_Stamp_Counter'],
  "MSR": ['http://en.wikipedia.org/wiki/Model-specific_register'],
  "PAE": ['http://en.wikipedia.org/wiki/Physical_Address_Extension'],
  "MCE": ['http://en.wikipedia.org/wiki/Machine_Check_Exception'],
  "CX8": ['http://www.felixcloutier.com/x86/CMPXCHG8B:CMPXCHG16B.html'],
  "APIC": ['http://en.wikipedia.org/wiki/Advanced_Programmable_Interrupt_Controller'],
  "SEP":  ['http://www.felixcloutier.com/x86/SYSENTER.html', 'http://www.felixcloutier.com/x86/SYSEXIT.html'],
  "MTRR": ['http://en.wikipedia.org/wiki/Memory_Type_Range_Registers'],
  "PGE":  ['https://en.wikipedia.org/wiki/Translation_lookaside_buffer#Address_space_switch'],
  "MCA":  ['http://en.wikipedia.org/wiki/Machine_check_architecture'],
  "CMOV": ['http://www.rcollins.org/p6/opcodes/CMOV.html', 'http://en.wikipedia.org/wiki/FCMOV'],
  "PAT":  ['http://en.wikipedia.org/wiki/Page_Attribute_Table'],
  "PSE36": ['http://en.wikipedia.org/wiki/PSE-36'],
  "PN": ['http://en.wikipedia.org/wiki/CPUID#EAX.3D3:_Processor_Serial_Number'],
  "CLFLUSH": ['https://en.wikipedia.org/wiki/CPU_cache#CACHE-LINES'],
  # DTS
  "DS":   [],
  "ACPI": ['http://en.wikipedia.org/wiki/Advanced_Configuration_and_Power_Interface'],
  "MMX":  ['http://en.wikipedia.org/wiki/MMX_%28instruction_set%29'],
  "FXSR": ['https://en.wikipedia.org/wiki/Control_register#CR4'],
  # SSE
  "XMM":  ['http://en.wikipedia.org/wiki/Streaming_SIMD_Extensions'],
  # SSE2
  "XMM2": ['http://en.wikipedia.org/wiki/SSE2'],
  "SELFSNOOP": ['http://en.wikipedia.org/wiki/Cache_snooping'],
  "HT": ['http://en.wikipedia.org/wiki/Hyperthreading'],
  # TM
  "ACC": [],
  "IA64": ['http://en.wikipedia.org/wiki/IA-64'],
  "PBE": ['https://en.wikipedia.org/wiki/CPUID#EAX.3D1:_Processor_Info_and_Feature_Bits'],
  "SYSCALL": ['http://www.felixcloutier.com/x86/SYSCALL.html', 'http://www.felixcloutier.com/x86/SYSRET.html'],
  "MP": ['https://en.wikipedia.org/wiki/Multiprocessing'],
  "NX": ['http://en.wikipedia.org/wiki/NX_bit'],
  "MMXEXT": ['http://en.wikipedia.org/wiki/MMX_%28instruction_set%29'],
  "FXSR_OPT": [],
  # PDPE1GB
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
  "CONSTANT_TSC": ['https://en.wikipedia.org/wiki/Time_Stamp_Counter'],
  "UP": ['https://en.wikipedia.org/wiki/Symmetric_multiprocessing'],
  "ARCH_PERFMON": ['http://www.intel.com/software/pcm'],
  "PEBS": ['https://xem.github.io/minix86/manual/intel-x86-and-64-manual-vol3/o_fe12b1e2a880e0ce-734.html'],
  "BTS": ['https://en.wikipedia.org/wiki/Branch_trace'],
  "SYSCALL32": [],
  "SYSENTER32": [],
  "REP_GOOD": [],
  "MFENCE_RDTSC": [],
  "LFENCE_RDTSC": [],
  "NOPL": [],
  "ALWAYS": [],
  "XTOPOLOGY": [],
  "TSC_RELIABLE": [],
  "NONSTOP_TSC": [],
  "EXTD_APICID": [],
  "AMD_DCM": [],
  "APERFMPERF": [],
  "EAGER_FPU": [],
  "NONSTOP_TSC_S3": [],
  "XMM3": [],
  "PCLMULQDQ": [],
  "DTES64": [],
  "MWAIT": [],
  "DSCPL": [],
  "VMX": [],
  "SMX": [],
  "EST": [],
  "TM2": [],
  "SSSE3": [],
  "CID": [],
  "FMA": [],
  "CX16": [],
  "XTPR": [],
  "PDCM": [],
  "PCID": [],
  "DCA": [],
  "XMM4_1": [],
  "XMM4_2": [],
  "X2APIC": [],
  "MOVBE": [],
  "POPCNT": [],
  "TSC_DEADLINE_TIMER": [],
  "AES": [],
  "XSAVE": [],
  "OSXSAVE": [],
  "AVX": [],
  "F16C": [],
  "RDRAND": [],
  "HYPERVISOR": [],
  "XSTORE": [],
  "XSTORE_EN": [],
  "XCRYPT": [],
  "XCRYPT_EN": [],
  "ACE2": [],
  "ACE2_EN": [],
  "PHE": [],
  "PHE_EN": [],
  "PMM": [],
  "PMM_EN": [],
  "LAHF_LM": [],
  "CMP_LEGACY": [],
  "SVM": [],
  "EXTAPIC": [],
  "CR8_LEGACY": [],
  "ABM": [],
  "SSE4A": [],
  "MISALIGNSSE": [],
  "3DNOWPREFETCH": [],
  "OSVW": [],
  "IBS": [],
  "XOP": [],
  "SKINIT": [],
  "WDT": [],
  "LWP": [],
  "FMA4": [],
  "TCE": [],
  "NODEID_MSR": [],
  "TBM": [],
  "TOPOEXT": [],
  "PERFCTR_CORE": [],
  "PERFCTR_NB": [],
  "BPEXT": [],
  "PERFCTR_L2": [],
  "IDA": [],
  "ARAT": [],
  "CPB": [],
  "EPB": [],
  "PLN": [],
  "PTS": [],
  "DTHERM": [],
  "HW_PSTATE": [],
  "PROC_FEEDBACK": [],
  "HWP": [],
  "HWP_NOITFY": [],
  "HWP_ACT_WINDOW": [],
  "HWP_EPP": [],
  "HWP_PKG_REQ": [],
  "INTEL_PT": [],
  "TPR_SHADOW": [],
  "VNMI": [],
  "FLEXPRIORITY": [],
  "EPT": [],
  "NPT": [],
  "VPID": [],
  "LBRV": [],
  "SVML": [],
  "NRIPS": [],
  "TSCRATEMSR": [],
  "VMCBCLEAN": [],
  "FLUSHBYASID": [],
  "DECODEASSISTS": [],
  "PAUSEFILTER": [],
  "PFTHRESHOLD": [],
  "VMMCALL": [],
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
  "AVX512F": [],
  "RDSEED": [],
  "ADX": [],
  "SMAP": [],
  "PCOMMIT": [],
  "CLFLUSHOPT": [],
  "CLWB": [],
  "AVX512PF": [],
  "AVX512ER": [],
  "AVX512CD": [],
  "XSAVEOPT": [],
  "XSAVEC": [],
  "XGETBV1": [],
  "XSAVES": [],
  "CQM_LLC": [],
  "CQM_OCCUP_LLC": [],
  "F00F": [],
  "FDIV": [],
  "COMA": [],
  "AMD_TLB_MMATCH": [],
  "AMD_APIC_C1E": [],
  "11AP": [],
  "FXSAVE_LEAK": [],
  "CLFLUSH_MONITOR": [],
  "SYSRET_SS_ATTRS": [],
}
