FPU                  /* Onboard FPU */
VME                  /* Virtual Mode Extensions. If set, enables support for the virtual interrupt flag (VIF) in virtual-8086 mode. */
DE                   /* Debugging Extensions. If set, enables debug register based breaks on I/O space access.*/
PSE                  /* Page Size Extensions. If set, RDTSC instruction can only be executed when in ring 0, otherwise RDTSC can be used at any privilege level. */
TSC                  /* Time Stamp Counter */
MSR                  /* Model-Specific Registers */
PAE                  /* Physical Address Extensions */
MCE                  /* Machine Check Exception */
CX8                  /* CMPXCHG8 instruction */
APIC                 /* Onboard APIC */
SEP                  /* SYSENTER/SYSEXIT */
MTRR                 /* Memory Type Range Registers */
PGE                  /* Page Global Enable */
MCA                  /* Machine Check Architecture */
CMOV                 /* CMOV instructions (plus FCMOVcc, FCOMI with FPU) */
PAT                  /* Page Attribute Table */
PSE36                /* 36-bit PSEs */
PN                   /* Processor serial number */
CLFLUSH              /* CLFLUSH instruction */
DS                   /* 'dts' Debug Store */
ACPI                 /* ACPI via MSR */
MMX                  /* Multimedia Extensions */
FXSR                 /* FXSAVE/FXRSTOR, CR4.OSFXSR */
XMM                  /* 'sse' */
XMM2                 /* 'sse2' */
SELFSNOOP            /* 'ss' CPU self snoop */
HT                   /* Hyper-Threading */
ACC                  /* 'tm' Automatic clock control */
IA64                 /* IA-64 processor */
PBE                  /* Pending Break Enable */
SYSCALL              /* SYSCALL/SYSRET */
MP                   /* MP Capable. */
NX                   /* Execute Disable */
MMXEXT               /* AMD MMX extensions */
FXSR_OPT             /* FXSAVE/FXRSTOR optimizations */
GBPAGES              /* 'pdpe1gb' GB pages */
RDTSCP               /* RDTSCP */
LM                   /* Long Mode (x86-64) */
3DNOWEXT             /* AMD 3DNow! extensions */
3DNOW                /* 3DNow! */
RECOVERY             /* CPU in recovery mode */
LONGRUN              /* Longrun power control */
LRTI                 /* LongRun table interface */
CXMMX                /* Cyrix MMX extensions */
K6_MTRR              /* AMD K6 nonstandard MTRRs */
CYRIX_ARR            /* Cyrix ARRs (= MTRRs) */
CENTAUR_MCR          /* Centaur MCRs (= MTRRs) */
K8                   /* (hidden by default) Opteron, Athlon64 */
K7                   /* (hidden by default) Athlon */
P3                   /* (hidden by default) P3 */
P4                   /* (hidden by default) P4 */
CONSTANT_TSC         /* TSC ticks at a constant rate */
UP                   /* smp kernel running on up */
ARCH_PERFMON         /* Intel Architectural PerfMon */
PEBS                 /* Precise-Event Based Sampling */
BTS                  /* Branch Trace Store */
SYSCALL32            /* (hidden by default) syscall in ia32 userspace */
SYSENTER32           /* (hidden by default) sysenter in ia32 userspace */
REP_GOOD             /* rep microcode works well */
MFENCE_RDTSC         /* (hidden by default) Mfence synchronizes RDTSC */
LFENCE_RDTSC         /* (hidden by default) Lfence synchronizes RDTSC */
NOPL                 /* The NOPL (0F 1F) instructions */
ALWAYS               /* (hidden by default) Always-present feature */
XTOPOLOGY            /* cpu topology enum extensions */
TSC_RELIABLE         /* TSC is known to be reliable */
NONSTOP_TSC          /* TSC does not stop in C states */
EXTD_APICID          /* has extended APICID (8 bits) */
AMD_DCM              /* multi-node processor */
APERFMPERF           /* APERFMPERF */
EAGER_FPU            /* 'eagerfpu' Non lazy FPU restore */
NONSTOP_TSC_S3       /* TSC doesn't stop in S3 state */
XMM3                 /* 'pni' SSE-3 */
PCLMULQDQ            /* PCLMULQDQ instruction */
DTES64               /* 64-bit Debug Store */
MWAIT                /* 'monitor' Monitor/Mwait support */
DSCPL                /* 'ds_cpl' CPL Qual. Debug Store */
VMX                  /* Hardware virtualization */
SMX                  /* Safer mode */
EST                  /* Enhanced SpeedStep */
TM2                  /* Thermal Monitor 2 */
SSSE3                /* Supplemental SSE-3 */
CID                  /* Context ID */
FMA                  /* Fused multiply-add */
CX16                 /* CMPXCHG16B */
XTPR                 /* Send Task Priority Messages */
PDCM                 /* Performance Capabilities */
PCID                 /* Process Context Identifiers */
DCA                  /* Direct Cache Access */
XMM4_1               /* 'sse4_1' SSE-4.1 */
XMM4_2               /* 'sse4_2' SSE-4.2 */
X2APIC               /* x2APIC */
MOVBE                /* MOVBE instruction */
POPCNT               /* POPCNT instruction */
TSC_DEADLINE_TIMER   /* Tsc deadline timer */
AES                  /* AES instructions */
XSAVE                /* XSAVE/XRSTOR/XSETBV/XGETBV */
OSXSAVE              /* (hidden by default) XSAVE enabled in the OS */
AVX                  /* Advanced Vector Extensions */
F16C                 /* 16-bit fp conversions */
RDRAND               /* The RDRAND instruction */
HYPERVISOR  /* Running on a hypervisor */
XSTORE          /* 'rng' RNG present (xstore) */
XSTORE_EN  /* 'rng_en' RNG enabled */
XCRYPT          /* 'ace' on-CPU crypto (xcrypt) */
XCRYPT_EN  /* 'ace_en' on-CPU crypto enabled */
ACE2          /* Advanced Cryptography Engine v2 */
ACE2_EN          /* ACE v2 enabled */
PHE   /* PadLock Hash Engine */
PHE_EN          /* PHE enabled */
PMM   /* PadLock Montgomery Multiplier */
PMM_EN          /* PMM enabled */
LAHF_LM          /* LAHF/SAHF in long mode */
CMP_LEGACY  /* If yes HyperThreading not valid */
SVM   /* Secure virtual machine */
EXTAPIC          /* Extended APIC space */
CR8_LEGACY  /* CR8 in 32-bit mode */
ABM   /* Advanced bit manipulation */
SSE4A          /* SSE-4A */
MISALIGNSSE      /* Misaligned SSE mode */
3DNOWPREFETCH    /* 3DNow prefetch instructions */
OSVW          /* OS Visible Workaround */
IBS   /* Instruction Based Sampling */
XOP   /* extended AVX instructions */
SKINIT          /* SKINIT/STGI instructions */
WDT   /* Watchdog timer */
LWP   /* Light Weight Profiling */
FMA4          /* 4 operands MAC instructions */
TCE   /* translation cache extension */
NODEID_MSR  /* NodeId MSR */
TBM   /* trailing bit manipulations */
TOPOEXT          /* topology extensions CPUID leafs */
PERFCTR_CORE     /* core performance counter extensions */
PERFCTR_NB       /* NB performance counter extensions */
BPEXT          /* data breakpoint extension */
PERFCTR_L2  /* L2 performance counter extensions */
IDA   /* Intel Dynamic Acceleration */
ARAT          /* Always Running APIC Timer */
CPB   /* AMD Core Performance Boost */
EPB   /* IA32_ENERGY_PERF_BIAS support */
PLN   /* Intel Power Limit Notification */
PTS   /* Intel Package Thermal Status */
DTHERM          /* Digital Thermal Sensor */
HW_PSTATE  /* AMD HW-PState */
PROC_FEEDBACK    /* AMD ProcFeedbackInterface */
HWP   /* 'hwp' Intel HWP */
HWP_NOITFY  /* Intel HWP_NOTIFY */
HWP_ACT_WINDOW   /* Intel HWP_ACT_WINDOW */
HWP_EPP          /* Intel HWP_EPP */
HWP_PKG_REQ      /* Intel HWP_PKG_REQ */
INTEL_PT  /* Intel Processor Trace */
TPR_SHADOW       /* Intel TPR Shadow */
VNMI             /* Intel Virtual NMI */
FLEXPRIORITY     /* Intel FlexPriority */
EPT              /* Intel Extended Page Table */
VPID             /* Intel Virtual Processor ID */
NPT   /* AMD Nested Page Table support */
LBRV          /* AMD LBR Virtualization support */
SVML          /* 'svm_lock' AMD SVM locking MSR */
NRIPS          /* 'nrip_save' AMD SVM next_rip save */
TSCRATEMSR       /* 'tsc_scale' AMD TSC scaling support */
VMCBCLEAN        /* 'vmcb_clean' AMD VMCB clean bits support */
FLUSHBYASID      /* AMD flush-by-ASID support */
DECODEASSISTS    /* AMD Decode Assists support */
PAUSEFILTER      /* AMD filtered pause intercept */
PFTHRESHOLD      /* AMD pause filter threshold */
VMMCALL          /* Prefer vmmcall to vmcall */
FSGSBASE         /* {RD/WR}{FS/GS}BASE instructions*/
TSC_ADJUST       /* TSC adjustment MSR 0x3b */
BMI1         /* 1st group bit manipulation extensions */
HLE /* Hardware Lock Elision */
AVX2         /* AVX2 instructions */
SMEP         /* Supervisor Mode Execution Protection */
BMI2         /* 2nd group bit manipulation extensions */
ERMS         /* Enhanced REP MOVSB/STOSB */
INVPCID          /* Invalidate Processor Context ID */
RTM              /* Restricted Transactional Memory */
CQM              /* Cache QoS Monitoring */
MPX              /* Memory Protection Extension */
AVX512F          /* AVX-512 Foundation */
RDSEED          /* The RDSEED instruction */
ADX   /* The ADCX and ADOX instructions */
SMAP          /* Supervisor Mode Access Prevention */
PCOMMIT          /* PCOMMIT instruction */
CLFLUSHOPT  /* CLFLUSHOPT instruction */
CLWB          /* CLWB instruction */
AVX512PF  /* AVX-512 Prefetch */
AVX512ER  /* AVX-512 Exponential and Reciprocal */
AVX512CD  /* AVX-512 Conflict Detection */
XSAVEOPT  /* XSAVEOPT */
XSAVEC          /* XSAVEC */
XGETBV1          /* XGETBV with ECX = 1 */
XSAVES          /* XSAVES/XRSTORS */
CQM_LLC          /* LLC QoS if 1 */
CQM_OCCUP_LLC    /* LLC occupancy monitoring if 1 */
F00F   /* Intel F00F */
FDIV   /* FPU FDIV */
COMA   /* Cyrix 6x86 coma */
AMD_TLB_MMATCH  /* 'tlb_mmatch' AMD Erratum 383 */
AMD_APIC_C1E  /* 'apic_c1e' AMD Erratum 400 */
11AP   /* Bad local APIC aka 11AP */
FXSAVE_LEAK  /* FXSAVE leaks FOP/FIP/FOP */
CLFLUSH_MONITOR  /* AAI65, CLFLUSH required before MONITOR */
SYSRET_SS_ATTRS  /* SYSRET doesn't fix up SS attrs */
