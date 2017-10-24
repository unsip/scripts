export const FLAGS = {
  "FPU": {
     description: "Onboard FPU",
     links: ["https://en.wikipedia.org/wiki/Floating-point_unit"]
  },
  "VME": {
     description: "Virtual Mode Extensions. If set, enables support for the virtual interrupt flag (VIF) in virtual-8086 mode.",
     links: ["https://en.wikipedia.org/wiki/Virtual_8086_mode#Virtual_8086_mode_enhancements_.28VME.29"]
  },
  "PSE": {
     description: "Page Size Extensions. If set, RDTSC instruction can only be executed when in ring 0, otherwise RDTSC can be used at any privilege level.",
     links: ["http://en.wikipedia.org/wiki/Page_Size_Extension", "https://en.wikipedia.org/wiki/Page_(computer_memory)"]
  },
  "TSC": {
     description: "Time Stamp Counter",
     links: ["http://en.wikipedia.org/wiki/Time_Stamp_Counter"]
  },
  "MSR": {
     description: "Model-Specific Registers",
     links: ["http://en.wikipedia.org/wiki/Model-specific_register"]
  },
  "PAE": {
     description: "Physical Address Extensions",
     links: ["http://en.wikipedia.org/wiki/Physical_Address_Extension"]
  },
  "MCE": {
     description: "Machine Check Exception",
     links: ["http://en.wikipedia.org/wiki/Machine_Check_Exception"]
  },
  "CX8": {
     description: "CMPXCHG8 instruction",
     links: ["http://www.felixcloutier.com/x86/CMPXCHG8B:CMPXCHG16B.html"]
  },
  "APIC": {
     description: "Onboard APIC",
     links: ["http://en.wikipedia.org/wiki/Advanced_Programmable_Interrupt_Controller"]
  },
  "SEP": {
     description: "SYSENTER/SYSEXIT",
     links: ["http://www.felixcloutier.com/x86/SYSENTER.html", "http://www.felixcloutier.com/x86/SYSEXIT.html"]
  },
  "MTRR": {
     description: "Memory Type Range Registers",
     links: ["http://en.wikipedia.org/wiki/Memory_Type_Range_Registers"]
  },
  "PGE": {
     description: "Page Global Enable",
     links: ["https://en.wikipedia.org/wiki/Translation_lookaside_buffer#Address_space_switch"]
  },
  "MCA": {
     description: "Machine Check Architecture",
     links: ["http://en.wikipedia.org/wiki/Machine_check_architecture"]
  },
  "CMOV": {
     description: "CMOV instructions (plus FCMOVcc, FCOMI with FPU)",
     links: ["http://www.rcollins.org/p6/opcodes/CMOV.html", "http://en.wikipedia.org/wiki/FCMOV"]
  },
  "PAT": {
     description: "Page Attribute Table",
     links: ["http://en.wikipedia.org/wiki/Page_Attribute_Table"]
  },
  "PSE36": {
     description: "36-bit PSEs",
     links: ["http://en.wikipedia.org/wiki/PSE-36"]
  },
  "PN": {
     description: "Processor serial number",
     links: ["http://en.wikipedia.org/wiki/CPUID#EAX.3D3:_Processor_Serial_Number"]
  },
  "CLFLUSH": {
     description: "CLFLUSH instruction",
     links: ["https://en.wikipedia.org/wiki/CPU_cache#CACHE-LINES"]
  },
  "DS": {
     description: "'dts' Debug Store",
     links: []
  },
  "ACPI": {
     description: "ACPI via MSR",
     links: ["http://en.wikipedia.org/wiki/Advanced_Configuration_and_Power_Interface"]
  },
  "MMX": {
     description: "Multimedia Extensions",
     links: ["http://en.wikipedia.org/wiki/MMX_%28instruction_set%29"]
  },
  "FXSR": {
     description: "FXSAVE/FXRSTOR, CR4.OSFXSR",
     links: ["https://en.wikipedia.org/wiki/Control_register#CR4"]
  },
  "XMM": {
     description: "'sse'",
     links: ["http://en.wikipedia.org/wiki/Streaming_SIMD_Extensions"]
  },
  "XMM2": {
     description: "'sse2'",
     links: ["http://en.wikipedia.org/wiki/SSE2"]
  },
  "SELFSNOOP": {
     description: "'ss' CPU self snoop",
     links: ["http://en.wikipedia.org/wiki/Cache_snooping"]
  },
  "HT": {
     description: "Hyper-Threading",
     links: ["http://en.wikipedia.org/wiki/Hyperthreading"]
  },
  "ACC": {
     description: "'tm' Automatic clock control",
     links: []
  },
  "IA64": {
     description: "IA-64 processor",
     links: ["http://en.wikipedia.org/wiki/IA-64"]
  },
  "PBE": {
     description: "Pending Break Enable",
     links: ["https://en.wikipedia.org/wiki/CPUID#EAX.3D1:_Processor_Info_and_Feature_Bits"]
  },
  "SYSCALL": {
     description: "SYSCALL/SYSRET",
     links: ["http://www.felixcloutier.com/x86/SYSCALL.html", "http://www.felixcloutier.com/x86/SYSRET.html"]
  },
  "MP": {
     description: "MP Capable.",
     links: ["https://en.wikipedia.org/wiki/Multiprocessing"]
  },
  "NX": {
     description: "Execute Disable",
     links: ["http://en.wikipedia.org/wiki/NX_bit"]
  },
  "MMXEXT": {
     description: "AMD MMX extensions",
     links: ["http://en.wikipedia.org/wiki/MMX_%28instruction_set%29"]
  },
  "FXSR_OPT": {
     description: "FXSAVE/FXRSTOR optimizations",
     links: []
  },
  "GBPAGES": {
     description: "'pdpe1gb' GB pages",
     links: ["https://en.wikipedia.org/wiki/Page_(computer_memory)"]
  },
  "RDTSCP": {
     description: "RDTSCP",
     links: ["http://www.felixcloutier.com/x86/RDTSCP.html"]
  },
  "LM": {
     description: "Long Mode (x86-64)",
     links: ["https://en.wikipedia.org/wiki/Long_mode"]
  },
  "3DNOWEXT": {
     description: "AMD 3DNow! extensions",
     links: ["https://en.wikipedia.org/wiki/3DNow%21#3DNow_extensions"]
  },
  "3DNOW": {
     description: "3DNow!",
     links: ["http://en.wikipedia.org/wiki/3DNow%21"]
  },
  "RECOVERY": {
     description: "CPU in recovery mode",
     links: []
  },
  "LONGRUN": {
     description: "Longrun power control",
     links: []
  },
  "LRTI": {
     description: "LongRun table interface",
     links: []
  },
  "CXMMX": {
     description: "Cyrix MMX extensions",
     links: ["https://en.wikipedia.org/wiki/Extended_MMX"]
  },
  "K6_MTRR": {
     description: "AMD K6 nonstandard MTRRs",
     links: ["https://en.wikipedia.org/wiki/Memory_type_range_register"]
  },
  "CYRIX_ARR": {
     description: "Cyrix ARRs (= MTRRs)",
     links: ["https://en.wikipedia.org/wiki/Memory_type_range_register", "https://en.wikipedia.org/wiki/Address-range_register"]
  },
  "CENTAUR_MCR": {
     description: "Centaur MCRs (= MTRRs)",
     links: ["https://en.wikipedia.org/wiki/Memory_type_range_register"]
  },
  "K8": {
     description: "(hidden by default) Opteron, Athlon64",
     links: []
  },
  "K7": {
     description: "(hidden by default) Athlon",
     links: []
  },
  "P3": {
     description: "(hidden by default) P3",
     links: []
  },
  "P4": {
     description: "(hidden by default) P4",
     links: []
  },
  "CONSTANT_TSC": {
     description: "TSC ticks at a constant rate",
     links: ["https://en.wikipedia.org/wiki/Time_Stamp_Counter"]
  },
  "UP": {
     description: "smp kernel running on up",
     links: ["https://en.wikipedia.org/wiki/Symmetric_multiprocessing"]
  },
  "ARCH_PERFMON": {
     description: "Intel Architectural PerfMon",
     links: ["http://www.intel.com/software/pcm"]
  },
  "PEBS": {
     description: "Precise-Event Based Sampling",
     links: ["https://xem.github.io/minix86/manual/intel-x86-and-64-manual-vol3/o_fe12b1e2a880e0ce-734.html"]
  },
  "BTS": {
     description: "Branch Trace Store",
     links: ["https://en.wikipedia.org/wiki/Branch_trace"]
  },
  "SYSCALL32": {
     description: "(hidden by default) syscall in ia32 userspace",
     links: []
  },
  "SYSENTER32": {
     description: "(hidden by default) sysenter in ia32 userspace",
     links: []
  },
  "REP_GOOD": {
     description: "rep microcode works well",
     links: []
  },
  "MFENCE_RDTSC": {
     description: "(hidden by default) Mfence synchronizes RDTSC",
     links: []
  },
  "LFENCE_RDTSC": {
     description: "(hidden by default) Lfence synchronizes RDTSC",
     links: []
  },
  "NOPL": {
     description: "The NOPL (0F 1F) instructions",
     links: []
  },
  "ALWAYS": {
     description: "(hidden by default) Always-present feature",
     links: []
  },
  "XTOPOLOGY": {
     description: "cpu topology enum extensions",
     links: []
  },
  "TSC_RELIABLE": {
     description: "TSC is known to be reliable",
     links: []
  },
  "NONSTOP_TSC": {
     description: "TSC does not stop in C states",
     links: []
  },
  "EXTD_APICID": {
     description: "has extended APICID (8 bits)",
     links: []
  },
  "AMD_DCM": {
     description: "multi-node processor",
     links: []
  },
  "APERFMPERF": {
     description: "APERFMPERF",
     links: []
  },
  "EAGER_FPU": {
     description: "'eagerfpu' Non lazy FPU restore",
     links: []
  },
  "NONSTOP_TSC_S3": {
     description: "TSC doesn't stop in S3 state",
     links: []
  },
  "XMM3": {
     description: "'pni' SSE-3",
     links: []
  },
  "PCLMULQDQ": {
     description: "PCLMULQDQ instruction",
     links: []
  },
  "DTES64": {
     description: "64-bit Debug Store",
     links: []
  },
  "MWAIT": {
     description: "'monitor' Monitor/Mwait support",
     links: []
  },
  "DSCPL": {
     description: "'ds_cpl' CPL Qual. Debug Store",
     links: []
  },
  "VMX": {
     description: "Hardware virtualization",
     links: []
  },
  "SMX": {
     description: "Safer mode",
     links: []
  },
  "EST": {
     description: "Enhanced SpeedStep",
     links: []
  },
  "TM2": {
     description: "Thermal Monitor 2",
     links: []
  },
  "SSSE3": {
     description: "Supplemental SSE-3",
     links: []
  },
  "CID": {
     description: "Context ID",
     links: []
  },
  "FMA": {
     description: "Fused multiply-add",
     links: []
  },
  "CX16": {
     description: "CMPXCHG16B",
     links: []
  },
  "XTPR": {
     description: "Send Task Priority Messages",
     links: []
  },
  "PDCM": {
     description: "Performance Capabilities",
     links: []
  },
  "PCID": {
     description: "Process Context Identifiers",
     links: []
  },
  "DCA": {
     description: "Direct Cache Access",
     links: []
  },
  "XMM4_1": {
     description: "'sse4_1' SSE-4.1",
     links: []
  },
  "XMM4_2": {
     description: "'sse4_2' SSE-4.2",
     links: []
  },
  "X2APIC": {
     description: "x2APIC",
     links: []
  },
  "MOVBE": {
     description: "MOVBE instruction",
     links: []
  },
  "POPCNT": {
     description: "POPCNT instruction",
     links: []
  },
  "TSC_DEADLINE_TIMER": {
     description: "Tsc deadline timer",
     links: []
  },
  "AES": {
     description: "AES instructions",
     links: []
  },
  "XSAVE": {
     description: "XSAVE/XRSTOR/XSETBV/XGETBV",
     links: []
  },
  "OSXSAVE": {
     description: "(hidden by default) XSAVE enabled in the OS",
     links: []
  },
  "AVX": {
     description: "Advanced Vector Extensions",
     links: []
  },
  "F16C": {
     description: "16-bit fp conversions",
     links: []
  },
  "RDRAND": {
     description: "The RDRAND instruction",
     links: []
  },
  "HYPERVISOR": {
     description: "Running on a hypervisor",
     links: []
  },
  "XSTORE": {
     description: "'rng' RNG present (xstore)",
     links: []
  },
  "XSTORE_EN": {
     description: "'rng_en' RNG enabled",
     links: []
  },
  "XCRYPT": {
     description: "'ace' on-CPU crypto (xcrypt)",
     links: []
  },
  "XCRYPT_EN": {
     description: "'ace_en' on-CPU crypto enabled",
     links: []
  },
  "ACE2": {
     description: "Advanced Cryptography Engine v2",
     links: []
  },
  "ACE2_EN": {
     description: "ACE v2 enabled",
     links: []
  },
  "PHE": {
     description: "PadLock Hash Engine",
     links: []
  },
  "PHE_EN": {
     description: "PHE enabled",
     links: []
  },
  "PMM": {
     description: "PadLock Montgomery Multiplier",
     links: []
  },
  "PMM_EN": {
     description: "PMM enabled",
     links: []
  },
  "LAHF_LM": {
     description: "LAHF/SAHF in long mode",
     links: []
  },
  "CMP_LEGACY": {
     description: "If yes HyperThreading not valid",
     links: []
  },
  "SVM": {
     description: "Secure virtual machine",
     links: []
  },
  "EXTAPIC": {
     description: "Extended APIC space",
     links: []
  },
  "CR8_LEGACY": {
     description: "CR8 in 32-bit mode",
     links: []
  },
  "ABM": {
     description: "Advanced bit manipulation",
     links: []
  },
  "SSE4A": {
     description: "SSE-4A",
     links: []
  },
  "MISALIGNSSE": {
     description: "Misaligned SSE mode",
     links: []
  },
  "3DNOWPREFETCH": {
     description: "3DNow prefetch instructions",
     links: []
  },
  "OSVW": {
     description: "OS Visible Workaround",
     links: []
  },
  "IBS": {
     description: "Instruction Based Sampling",
     links: []
  },
  "XOP": {
     description: "extended AVX instructions",
     links: []
  },
  "SKINIT": {
     description: "SKINIT/STGI instructions",
     links: []
  },
  "WDT": {
     description: "Watchdog timer",
     links: []
  },
  "LWP": {
     description: "Light Weight Profiling",
     links: []
  },
  "FMA4": {
     description: "4 operands MAC instructions",
     links: []
  },
  "TCE": {
     description: "translation cache extension",
     links: []
  },
  "NODEID_MSR": {
     description: "NodeId MSR",
     links: []
  },
  "TBM": {
     description: "trailing bit manipulations",
     links: []
  },
  "TOPOEXT": {
     description: "topology extensions CPUID leafs",
     links: []
  },
  "PERFCTR_CORE": {
     description: "core performance counter extensions",
     links: []
  },
  "PERFCTR_NB": {
     description: "NB performance counter extensions",
     links: []
  },
  "BPEXT": {
     description: "data breakpoint extension",
     links: []
  },
  "PERFCTR_L2": {
     description: "L2 performance counter extensions",
     links: []
  },
  "IDA": {
     description: "Intel Dynamic Acceleration",
     links: []
  },
  "ARAT": {
     description: "Always Running APIC Timer",
     links: []
  },
  "CPB": {
     description: "AMD Core Performance Boost",
     links: []
  },
  "EPB": {
     description: "IA32_ENERGY_PERF_BIAS support",
     links: []
  },
  "PLN": {
     description: "Intel Power Limit Notification",
     links: []
  },
  "PTS": {
     description: "Intel Package Thermal Status",
     links: []
  },
  "DTHERM": {
     description: "Digital Thermal Sensor",
     links: []
  },
  "HW_PSTATE": {
     description: "AMD HW-PState",
     links: []
  },
  "PROC_FEEDBACK": {
     description: "AMD ProcFeedbackInterface",
     links: []
  },
  "HWP": {
     description: "'hwp' Intel HWP",
     links: []
  },
  "HWP_NOITFY": {
     description: "Intel HWP_NOTIFY",
     links: []
  },
  "HWP_ACT_WINDOW": {
     description: "Intel HWP_ACT_WINDOW",
     links: []
  },
  "HWP_EPP": {
     description: "Intel HWP_EPP",
     links: []
  },
  "HWP_PKG_REQ": {
     description: "Intel HWP_PKG_REQ",
     links: []
  },
  "INTEL_PT": {
     description: "Intel Processor Trace",
     links: []
  },
  "TPR_SHADOW": {
     description: "Intel TPR Shadow",
     links: []
  },
  "VNMI": {
     description: "Intel Virtual NMI",
     links: []
  },
  "FLEXPRIORITY": {
     description: "Intel FlexPriority",
     links: []
  },
  "EPT": {
     description: "Intel Extended Page Table",
     links: []
  },
  "VPID": {
     description: "Intel Virtual Processor ID",
     links: []
  },
  "NPT": {
     description: "AMD Nested Page Table support",
     links: []
  },
  "LBRV": {
     description: "AMD LBR Virtualization support",
     links: []
  },
  "SVML": {
     description: "'svm_lock' AMD SVM locking MSR",
     links: []
  },
  "NRIPS": {
     description: "'nrip_save' AMD SVM next_rip save",
     links: []
  },
  "TSCRATEMSR": {
     description: "'tsc_scale' AMD TSC scaling support",
     links: []
  },
  "VMCBCLEAN": {
     description: "'vmcb_clean' AMD VMCB clean bits support",
     links: []
  },
  "FLUSHBYASID": {
     description: "AMD flush-by-ASID support",
     links: []
  },
  "DECODEASSISTS": {
     description: "AMD Decode Assists support",
     links: []
  },
  "PAUSEFILTER": {
     description: "AMD filtered pause intercept",
     links: []
  },
  "PFTHRESHOLD": {
     description: "AMD pause filter threshold",
     links: []
  },
  "VMMCALL": {
     description: "Prefer vmmcall to vmcall",
     links: []
  },
  "TSC_ADJUST": {
     description: "TSC adjustment MSR 0x3b",
     links: []
  },
  "BMI1": {
     description: "1st group bit manipulation extensions",
     links: []
  },
  "HLE": {
     description: "Hardware Lock Elision",
     links: []
  },
  "AVX2": {
     description: "AVX2 instructions",
     links: []
  },
  "SMEP": {
     description: "Supervisor Mode Execution Protection",
     links: []
  },
  "BMI2": {
     description: "2nd group bit manipulation extensions",
     links: []
  },
  "ERMS": {
     description: "Enhanced REP MOVSB/STOSB",
     links: []
  },
  "INVPCID": {
     description: "Invalidate Processor Context ID",
     links: []
  },
  "RTM": {
     description: "Restricted Transactional Memory",
     links: []
  },
  "CQM": {
     description: "Cache QoS Monitoring",
     links: []
  },
  "MPX": {
     description: "Memory Protection Extension",
     links: []
  },
  "AVX512F": {
     description: "AVX-512 Foundation",
     links: []
  },
  "RDSEED": {
     description: "The RDSEED instruction",
     links: []
  },
  "ADX": {
     description: "The ADCX and ADOX instructions",
     links: []
  },
  "SMAP": {
     description: "Supervisor Mode Access Prevention",
     links: []
  },
  "PCOMMIT": {
     description: "PCOMMIT instruction",
     links: []
  },
  "CLFLUSHOPT": {
     description: "CLFLUSHOPT instruction",
     links: []
  },
  "CLWB": {
     description: "CLWB instruction",
     links: []
  },
  "AVX512PF": {
     description: "AVX-512 Prefetch",
     links: []
  },
  "AVX512ER": {
     description: "AVX-512 Exponential and Reciprocal",
     links: []
  },
  "AVX512CD": {
     description: "AVX-512 Conflict Detection",
     links: []
  },
  "XSAVEOPT": {
     description: "XSAVEOPT",
     links: []
  },
  "XSAVEC": {
     description: "XSAVEC",
     links: []
  },
  "XGETBV1": {
     description: "XGETBV with ECX = 1",
     links: []
  },
  "XSAVES": {
     description: "XSAVES/XRSTORS",
     links: []
  },
  "CQM_LLC": {
     description: "LLC QoS if 1",
     links: []
  },
  "CQM_OCCUP_LLC": {
     description: "LLC occupancy monitoring if 1",
     links: []
  },
  "F00F": {
     description: "Intel F00F",
     links: []
  },
  "FDIV": {
     description: "FPU FDIV",
     links: []
  },
  "COMA": {
     description: "Cyrix 6x86 coma",
     links: []
  },
  "AMD_TLB_MMATCH": {
     description: "'tlb_mmatch' AMD Erratum 383",
     links: []
  },
  "AMD_APIC_C1E": {
     description: "'apic_c1e' AMD Erratum 400",
     links: []
  },
  "11AP": {
     description: "Bad local APIC aka 11AP",
     links: []
  },
  "FXSAVE_LEAK": {
     description: "FXSAVE leaks FOP/FIP/FOP",
     links: []
  },
  "CLFLUSH_MONITOR": {
     description: "AAI65, CLFLUSH required before MONITOR",
     links: []
  },
  "SYSRET_SS_ATTRS": {
     description: "SYSRET doesn't fix up SS attrs",
     links: []
  }
}
