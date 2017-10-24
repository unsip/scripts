export const FLAGS = {
  "FPU": {
     description: "Onboard FPU ",
     links: []
  },
  "VME": {
     description: "Virtual Mode Extensions ",
     links: []
  },
  "DE": {
     description: "Debugging Extensions ",
     links: []
  },
  "PSE": {
     description: "Page Size Extensions ",
     links: []
  },
  "TSC": {
     description: "Time Stamp Counter ",
     links: []
  },
  "MSR": {
     description: "Model-Specific Registers ",
     links: []
  },
  "PAE": {
     description: "Physical Address Extensions ",
     links: []
  },
  "MCE": {
     description: "Machine Check Exception ",
     links: []
  },
  "CX8": {
     description: "CMPXCHG8 instruction ",
     links: []
  },
  "APIC": {
     description: "Onboard APIC ",
     links: []
  },
  "SEP": {
     description: "SYSENTER/SYSEXIT ",
     links: []
  },
  "MTRR": {
     description: "Memory Type Range Registers ",
     links: []
  },
  "PGE": {
     description: "Page Global Enable ",
     links: []
  },
  "MCA": {
     description: "Machine Check Architecture ",
     links: []
  },
  "CMOV": {
     description: "CMOV instructions ",
     links: []
  },
  "PAT": {
     description: "Page Attribute Table ",
     links: []
  },
  "PSE36": {
     description: "36-bit PSEs ",
     links: []
  },
  "PN": {
     description: "Processor serial number ",
     links: []
  },
  "CLFLUSH": {
     description: "CLFLUSH instruction ",
     links: []
  },
  "DS": {
     description: "'dts' Debug Store ",
     links: []
  },
  "ACPI": {
     description: "ACPI via MSR ",
     links: []
  },
  "MMX": {
     description: "Multimedia Extensions ",
     links: []
  },
  "FXSR": {
     description: "FXSAVE/FXRSTOR, CR4.OSFXSR ",
     links: []
  },
  "XMM": {
     description: "'sse' ",
     links: []
  },
  "XMM2": {
     description: "'sse2' ",
     links: []
  },
  "SELFSNOOP": {
     description: "'ss' CPU self snoop ",
     links: []
  },
  "HT": {
     description: "Hyper-Threading ",
     links: []
  },
  "ACC": {
     description: "'tm' Automatic clock control ",
     links: []
  },
  "IA64": {
     description: "IA-64 processor ",
     links: []
  },
  "PBE": {
     description: "Pending Break Enable ",
     links: []
  },
  "SYSCALL": {
     description: "SYSCALL/SYSRET ",
     links: []
  },
  "MP": {
     description: "MP Capable. ",
     links: []
  },
  "NX": {
     description: "Execute Disable ",
     links: []
  },
  "MMXEXT": {
     description: "AMD MMX extensions ",
     links: []
  },
  "FXSR_OPT": {
     description: "FXSAVE/FXRSTOR optimizations ",
     links: []
  },
  "GBPAGES": {
     description: "'pdpe1gb' GB pages ",
     links: []
  },
  "RDTSCP": {
     description: "RDTSCP ",
     links: []
  },
  "LM": {
     description: "Long Mode (x86-64) ",
     links: []
  },
  "3DNOWEXT": {
     description: "AMD 3DNow! extensions ",
     links: []
  },
  "3DNOW": {
     description: "3DNow! ",
     links: []
  },
  "RECOVERY": {
     description: "CPU in recovery mode ",
     links: []
  },
  "LONGRUN": {
     description: "Longrun power control ",
     links: []
  },
  "LRTI": {
     description: "LongRun table interface ",
     links: []
  },
  "CXMMX": {
     description: "Cyrix MMX extensions ",
     links: []
  },
  "K6_MTRR": {
     description: "AMD K6 nonstandard MTRRs ",
     links: []
  },
  "CYRIX_ARR": {
     description: "Cyrix ARRs (= MTRRs) ",
     links: []
  },
  "CENTAUR_MCR": {
     description: "Centaur MCRs (= MTRRs) ",
     links: []
  },
  "K8": {
     description: "(hidden by default) Opteron, Athlon64 ",
     links: []
  },
  "K7": {
     description: "(hidden by default) Athlon ",
     links: []
  },
  "P3": {
     description: "(hidden by default) P3 ",
     links: []
  },
  "P4": {
     description: "(hidden by default) P4 ",
     links: []
  },
  "CONSTANT_TSC": {
     description: "TSC ticks at a constant rate ",
     links: []
  },
  "UP": {
     description: "smp kernel running on up ",
     links: []
  },
  "ART": {
     description: "Platform has always running timer (ART) ",
     links: []
  },
  "ARCH_PERFMON": {
     description: "Intel Architectural PerfMon ",
     links: []
  },
  "PEBS": {
     description: "Precise-Event Based Sampling ",
     links: []
  },
  "BTS": {
     description: "Branch Trace Store ",
     links: []
  },
  "SYSCALL32": {
     description: "(hidden by default) syscall in ia32 userspace ",
     links: []
  },
  "SYSENTER32": {
     description: "(hidden by default) sysenter in ia32 userspace ",
     links: []
  },
  "REP_GOOD": {
     description: "rep microcode works well ",
     links: []
  },
  "MFENCE_RDTSC": {
     description: "(hidden by default) Mfence synchronizes RDTSC ",
     links: []
  },
  "LFENCE_RDTSC": {
     description: "(hidden by default) Lfence synchronizes RDTSC ",
     links: []
  },
  "ACC_POWER": {
     description: "AMD Accumulated Power Mechanism ",
     links: []
  },
  "NOPL": {
     description: "The NOPL (0F 1F) instructions ",
     links: []
  },
  "ALWAYS": {
     description: "(hidden by default) Always-present feature ",
     links: []
  },
  "XTOPOLOGY": {
     description: "cpu topology enum extensions ",
     links: []
  },
  "TSC_RELIABLE": {
     description: "TSC is known to be reliable ",
     links: []
  },
  "NONSTOP_TSC": {
     description: "TSC does not stop in C states ",
     links: []
  },
  "CPUID": {
     description: "CPU has CPUID instruction itself ",
     links: []
  },
  "EXTD_APICID": {
     description: "has extended APICID (8 bits) ",
     links: []
  },
  "AMD_DCM": {
     description: "multi-node processor ",
     links: []
  },
  "APERFMPERF": {
     description: "APERFMPERF ",
     links: []
  },
  "NONSTOP_TSC_S3": {
     description: "TSC doesn't stop in S3 state ",
     links: []
  },
  "TSC_KNOWN_FREQ": {
     description: "TSC has known frequency ",
     links: []
  },
  "XMM3": {
     description: "'pni' SSE-3 ",
     links: []
  },
  "PCLMULQDQ": {
     description: "PCLMULQDQ instruction ",
     links: []
  },
  "DTES64": {
     description: "64-bit Debug Store ",
     links: []
  },
  "MWAIT": {
     description: "'monitor' Monitor/Mwait support ",
     links: []
  },
  "DSCPL": {
     description: "'ds_cpl' CPL Qual. Debug Store ",
     links: []
  },
  "VMX": {
     description: "Hardware virtualization ",
     links: []
  },
  "SMX": {
     description: "Safer mode ",
     links: []
  },
  "EST": {
     description: "Enhanced SpeedStep ",
     links: []
  },
  "TM2": {
     description: "Thermal Monitor 2 ",
     links: []
  },
  "SSSE3": {
     description: "Supplemental SSE-3 ",
     links: []
  },
  "CID": {
     description: "Context ID ",
     links: []
  },
  "SDBG": {
     description: "Silicon Debug ",
     links: []
  },
  "FMA": {
     description: "Fused multiply-add ",
     links: []
  },
  "CX16": {
     description: "CMPXCHG16B ",
     links: []
  },
  "XTPR": {
     description: "Send Task Priority Messages ",
     links: []
  },
  "PDCM": {
     description: "Performance Capabilities ",
     links: []
  },
  "PCID": {
     description: "Process Context Identifiers ",
     links: []
  },
  "DCA": {
     description: "Direct Cache Access ",
     links: []
  },
  "XMM4_1": {
     description: "'sse4_1' SSE-4.1 ",
     links: []
  },
  "XMM4_2": {
     description: "'sse4_2' SSE-4.2 ",
     links: []
  },
  "X2APIC": {
     description: "x2APIC ",
     links: []
  },
  "MOVBE": {
     description: "MOVBE instruction ",
     links: []
  },
  "POPCNT": {
     description: "POPCNT instruction ",
     links: []
  },
  "TSC_DEADLINE_TIMER": {
     description: "Tsc deadline timer ",
     links: []
  },
  "AES": {
     description: "AES instructions ",
     links: []
  },
  "XSAVE": {
     description: "XSAVE/XRSTOR/XSETBV/XGETBV ",
     links: []
  },
  "OSXSAVE": {
     description: "(hidden by default) XSAVE enabled in the OS ",
     links: []
  },
  "AVX": {
     description: "Advanced Vector Extensions ",
     links: []
  },
  "F16C": {
     description: "16-bit fp conversions ",
     links: []
  },
  "RDRAND": {
     description: "The RDRAND instruction ",
     links: []
  },
  "HYPERVISOR": {
     description: "Running on a hypervisor ",
     links: []
  },
  "XSTORE": {
     description: "'rng' RNG present (xstore) ",
     links: []
  },
  "XSTORE_EN": {
     description: "'rng_en' RNG enabled ",
     links: []
  },
  "XCRYPT": {
     description: "'ace' on-CPU crypto (xcrypt) ",
     links: []
  },
  "XCRYPT_EN": {
     description: "'ace_en' on-CPU crypto enabled ",
     links: []
  },
  "ACE2": {
     description: "Advanced Cryptography Engine v2 ",
     links: []
  },
  "ACE2_EN": {
     description: "ACE v2 enabled ",
     links: []
  },
  "PHE": {
     description: "PadLock Hash Engine ",
     links: []
  },
  "PHE_EN": {
     description: "PHE enabled ",
     links: []
  },
  "PMM": {
     description: "PadLock Montgomery Multiplier ",
     links: []
  },
  "PMM_EN": {
     description: "PMM enabled ",
     links: []
  },
  "LAHF_LM": {
     description: "LAHF/SAHF in long mode ",
     links: []
  },
  "CMP_LEGACY": {
     description: "If yes HyperThreading not valid ",
     links: []
  },
  "SVM": {
     description: "Secure virtual machine ",
     links: []
  },
  "EXTAPIC": {
     description: "Extended APIC space ",
     links: []
  },
  "CR8_LEGACY": {
     description: "CR8 in 32-bit mode ",
     links: []
  },
  "ABM": {
     description: "Advanced bit manipulation ",
     links: []
  },
  "SSE4A": {
     description: "SSE-4A ",
     links: []
  },
  "MISALIGNSSE": {
     description: "Misaligned SSE mode ",
     links: []
  },
  "3DNOWPREFETCH": {
     description: "3DNow prefetch instructions ",
     links: []
  },
  "OSVW": {
     description: "OS Visible Workaround ",
     links: []
  },
  "IBS": {
     description: "Instruction Based Sampling ",
     links: []
  },
  "XOP": {
     description: "extended AVX instructions ",
     links: []
  },
  "SKINIT": {
     description: "SKINIT/STGI instructions ",
     links: []
  },
  "WDT": {
     description: "Watchdog timer ",
     links: []
  },
  "LWP": {
     description: "Light Weight Profiling ",
     links: []
  },
  "FMA4": {
     description: "4 operands MAC instructions ",
     links: []
  },
  "TCE": {
     description: "translation cache extension ",
     links: []
  },
  "NODEID_MSR": {
     description: "NodeId MSR ",
     links: []
  },
  "TBM": {
     description: "trailing bit manipulations ",
     links: []
  },
  "TOPOEXT": {
     description: "topology extensions CPUID leafs ",
     links: []
  },
  "PERFCTR_CORE": {
     description: "core performance counter extensions ",
     links: []
  },
  "PERFCTR_NB": {
     description: "NB performance counter extensions ",
     links: []
  },
  "BPEXT": {
     description: "data breakpoint extension ",
     links: []
  },
  "PTSC": {
     description: "performance time-stamp counter ",
     links: []
  },
  "PERFCTR_LLC": {
     description: "Last Level Cache performance counter extensions ",
     links: []
  },
  "MWAITX": {
     description: "MWAIT extension (MONITORX/MWAITX) ",
     links: []
  },
  "RING3MWAIT": {
     description: "Ring 3 MONITOR/MWAIT ",
     links: []
  },
  "CPUID_FAULT": {
     description: "Intel CPUID faulting ",
     links: []
  },
  "CPB": {
     description: "AMD Core Performance Boost ",
     links: []
  },
  "EPB": {
     description: "IA32_ENERGY_PERF_BIAS support ",
     links: []
  },
  "CAT_L3": {
     description: "Cache Allocation Technology L3 ",
     links: []
  },
  "CAT_L2": {
     description: "Cache Allocation Technology L2 ",
     links: []
  },
  "CDP_L3": {
     description: "Code and Data Prioritization L3 ",
     links: []
  },
  "HW_PSTATE": {
     description: "AMD HW-PState ",
     links: []
  },
  "PROC_FEEDBACK": {
     description: "AMD ProcFeedbackInterface ",
     links: []
  },
  "SME": {
     description: "AMD Secure Memory Encryption ",
     links: []
  },
  "INTEL_PPIN": {
     description: "Intel Processor Inventory Number ",
     links: []
  },
  "INTEL_PT": {
     description: "Intel Processor Trace ",
     links: []
  },
  "AVX512_4VNNIW": {
     description: "AVX-512 Neural Network Instructions ",
     links: []
  },
  "AVX512_4FMAPS": {
     description: "AVX-512 Multiply Accumulation Single precision ",
     links: []
  },
  "MBA": {
     description: "Memory Bandwidth Allocation ",
     links: []
  },
  "TPR_SHADOW": {
     description: "Intel TPR Shadow ",
     links: []
  },
  "VNMI": {
     description: "Intel Virtual NMI ",
     links: []
  },
  "FLEXPRIORITY": {
     description: "Intel FlexPriority ",
     links: []
  },
  "EPT": {
     description: "Intel Extended Page Table ",
     links: []
  },
  "VPID": {
     description: "Intel Virtual Processor ID ",
     links: []
  },
  "VMMCALL": {
     description: "Prefer vmmcall to vmcall ",
     links: []
  },
  "XENPV": {
     description: "(hidden by default) Xen paravirtual guest ",
     links: []
  },
  "FSGSBASE": {
     description: "{RD/WR}{FS/GS}BASE instructions",
     links: []
  },
  "TSC_ADJUST": {
     description: "TSC adjustment MSR 0x3b ",
     links: []
  },
  "BMI1": {
     description: "1st group bit manipulation extensions ",
     links: []
  },
  "HLE": {
     description: "Hardware Lock Elision ",
     links: []
  },
  "AVX2": {
     description: "AVX2 instructions ",
     links: []
  },
  "SMEP": {
     description: "Supervisor Mode Execution Protection ",
     links: []
  },
  "BMI2": {
     description: "2nd group bit manipulation extensions ",
     links: []
  },
  "ERMS": {
     description: "Enhanced REP MOVSB/STOSB ",
     links: []
  },
  "INVPCID": {
     description: "Invalidate Processor Context ID ",
     links: []
  },
  "RTM": {
     description: "Restricted Transactional Memory ",
     links: []
  },
  "CQM": {
     description: "Cache QoS Monitoring ",
     links: []
  },
  "MPX": {
     description: "Memory Protection Extension ",
     links: []
  },
  "RDT_A": {
     description: "Resource Director Technology Allocation ",
     links: []
  },
  "AVX512F": {
     description: "AVX-512 Foundation ",
     links: []
  },
  "AVX512DQ": {
     description: "AVX-512 DQ (Double/Quad granular) Instructions ",
     links: []
  },
  "RDSEED": {
     description: "The RDSEED instruction ",
     links: []
  },
  "ADX": {
     description: "The ADCX and ADOX instructions ",
     links: []
  },
  "SMAP": {
     description: "Supervisor Mode Access Prevention ",
     links: []
  },
  "AVX512IFMA": {
     description: "AVX-512 Integer Fused Multiply-Add instructions ",
     links: []
  },
  "CLFLUSHOPT": {
     description: "CLFLUSHOPT instruction ",
     links: []
  },
  "CLWB": {
     description: "CLWB instruction ",
     links: []
  },
  "AVX512PF": {
     description: "AVX-512 Prefetch ",
     links: []
  },
  "AVX512ER": {
     description: "AVX-512 Exponential and Reciprocal ",
     links: []
  },
  "AVX512CD": {
     description: "AVX-512 Conflict Detection ",
     links: []
  },
  "SHA_NI": {
     description: "SHA1/SHA256 Instruction Extensions ",
     links: []
  },
  "AVX512BW": {
     description: "AVX-512 BW (Byte/Word granular) Instructions ",
     links: []
  },
  "AVX512VL": {
     description: "AVX-512 VL (128/256 Vector Length) Extensions ",
     links: []
  },
  "XSAVEOPT": {
     description: "XSAVEOPT ",
     links: []
  },
  "XSAVEC": {
     description: "XSAVEC ",
     links: []
  },
  "XGETBV1": {
     description: "XGETBV with ECX = 1 ",
     links: []
  },
  "XSAVES": {
     description: "XSAVES/XRSTORS ",
     links: []
  },
  "CQM_LLC": {
     description: "LLC QoS if 1 ",
     links: []
  },
  "CQM_OCCUP_LLC": {
     description: "LLC occupancy monitoring if 1 ",
     links: []
  },
  "CQM_MBM_TOTAL": {
     description: "LLC Total MBM monitoring ",
     links: []
  },
  "CQM_MBM_LOCAL": {
     description: "LLC Local MBM monitoring ",
     links: []
  },
  "CLZERO": {
     description: "CLZERO instruction ",
     links: []
  },
  "IRPERF": {
     description: "Instructions Retired Count ",
     links: []
  },
  "DTHERM": {
     description: "Digital Thermal Sensor ",
     links: []
  },
  "IDA": {
     description: "Intel Dynamic Acceleration ",
     links: []
  },
  "ARAT": {
     description: "Always Running APIC Timer ",
     links: []
  },
  "PLN": {
     description: "Intel Power Limit Notification ",
     links: []
  },
  "PTS": {
     description: "Intel Package Thermal Status ",
     links: []
  },
  "HWP": {
     description: "Intel Hardware P-states ",
     links: []
  },
  "HWP_NOTIFY": {
     description: "HWP Notification ",
     links: []
  },
  "HWP_ACT_WINDOW": {
     description: "HWP Activity Window ",
     links: []
  },
  "HWP_EPP": {
     description: "HWP Energy Perf. Preference ",
     links: []
  },
  "HWP_PKG_REQ": {
     description: "HWP Package Level Request ",
     links: []
  },
  "NPT": {
     description: "Nested Page Table support ",
     links: []
  },
  "LBRV": {
     description: "LBR Virtualization support ",
     links: []
  },
  "SVML": {
     description: "'svm_lock' SVM locking MSR ",
     links: []
  },
  "NRIPS": {
     description: "'nrip_save' SVM next_rip save ",
     links: []
  },
  "TSCRATEMSR": {
     description: "'tsc_scale' TSC scaling support ",
     links: []
  },
  "VMCBCLEAN": {
     description: "'vmcb_clean' VMCB clean bits support ",
     links: []
  },
  "FLUSHBYASID": {
     description: "flush-by-ASID support ",
     links: []
  },
  "DECODEASSISTS": {
     description: "Decode Assists support ",
     links: []
  },
  "PAUSEFILTER": {
     description: "filtered pause intercept ",
     links: []
  },
  "PFTHRESHOLD": {
     description: "pause filter threshold ",
     links: []
  },
  "AVIC": {
     description: "Virtual Interrupt Controller ",
     links: []
  },
  "V_VMSAVE_VMLOAD": {
     description: "Virtual VMSAVE VMLOAD ",
     links: []
  },
  "VGIF": {
     description: "Virtual GIF ",
     links: []
  },
  "AVX512VBMI": {
     description: "AVX512 Vector Bit Manipulation instructions",
     links: []
  },
  "PKU": {
     description: "Protection Keys for Userspace ",
     links: []
  },
  "OSPKE": {
     description: "OS Protection Keys Enable ",
     links: []
  },
  "AVX512_VPOPCNTDQ": {
     description: "POPCNT for vectors of DW/QW ",
     links: []
  },
  "LA57": {
     description: "5-level page tables ",
     links: []
  },
  "RDPID": {
     description: "RDPID instruction ",
     links: []
  },
  "OVERFLOW_RECOV": {
     description: "MCA overflow recovery support ",
     links: []
  },
  "SUCCOR": {
     description: "Uncorrectable error containment and recovery ",
     links: []
  },
  "SMCA": {
     description: "Scalable MCA ",
     links: []
  },
  "F00F": {
     description: "Intel F00F ",
     links: []
  },
  "FDIV": {
     description: "FPU FDIV ",
     links: []
  },
  "COMA": {
     description: "Cyrix 6x86 coma ",
     links: []
  },
  "AMD_TLB_MMATCH": {
     description: "'tlb_mmatch' AMD Erratum 383 ",
     links: []
  },
  "AMD_APIC_C1E": {
     description: "'apic_c1e' AMD Erratum 400 ",
     links: []
  },
  "11AP": {
     description: "Bad local APIC aka 11AP ",
     links: []
  },
  "FXSAVE_LEAK": {
     description: "FXSAVE leaks FOP/FIP/FOP ",
     links: []
  },
  "CLFLUSH_MONITOR": {
     description: "AAI65, CLFLUSH required before MONITOR ",
     links: []
  },
  "SYSRET_SS_ATTRS": {
     description: "SYSRET doesn't fix up SS attrs ",
     links: []
  },
  "ESPFIX": {
     description: "(hidden by default) IRET to 16-bit SS corrupts ESP/RSP high bits ",
     links: []
  },
  "NULL_SEG": {
     description: "Nulling a selector preserves the base ",
     links: []
  },
  "SWAPGS_FENCE": {
     description: "SWAPGS without input dep on GS ",
     links: []
  },
  "MONITOR": {
     description: "IPI required to wake up remote CPU ",
     links: []
  },
  "AMD_E400": {
     description: "CPU is among the affected by Erratum 400 ",
     links: []
  }
}
