export const FLAGS = {
  "fpu": {
     description: "Onboard FPU.",
     links: []
  },
  "vme": {
     description: "Virtual Mode Extensions.",
     links: []
  },
  "de": {
     description: "Debugging Extensions.",
     links: []
  },
  "pse": {
     description: "Page Size Extensions.",
     links: []
  },
  "tsc": {
     description: "Time Stamp Counter.",
     links: []
  },
  "msr": {
     description: "Model-Specific Registers.",
     links: []
  },
  "pae": {
     description: "Physical Address Extensions.",
     links: []
  },
  "mce": {
     description: "Machine Check Exception.",
     links: []
  },
  "cx8": {
     description: "CMPXCHG8 instruction.",
     links: []
  },
  "apic": {
     description: "Onboard APIC.",
     links: []
  },
  "sep": {
     description: "SYSENTER/SYSEXIT.",
     links: []
  },
  "mtrr": {
     description: "Memory Type Range Registers.",
     links: []
  },
  "pge": {
     description: "Page Global Enable.",
     links: []
  },
  "mca": {
     description: "Machine Check Architecture.",
     links: []
  },
  "cmov": {
     description: "CMOV instructions.",
     links: []
  },
  "pat": {
     description: "Page Attribute Table.",
     links: []
  },
  "pse36": {
     description: "36-bit PSEs.",
     links: []
  },
  "pn": {
     description: "Processor serial number.",
     links: []
  },
  "clflush": {
     description: "CLFLUSH instruction.",
     links: []
  },
  "ds": {
     description: "'dts' Debug Store.",
     links: []
  },
  "acpi": {
     description: "ACPI via MSR.",
     links: []
  },
  "mmx": {
     description: "Multimedia Extensions.",
     links: []
  },
  "fxsr": {
     description: "FXSAVE/FXRSTOR, CR4.OSFXSR.",
     links: []
  },
  "xmm": {
     description: "'sse'.",
     links: []
  },
  "xmm2": {
     description: "'sse2'.",
     links: []
  },
  "selfsnoop": {
     description: "'ss' CPU self snoop.",
     links: []
  },
  "ht": {
     description: "Hyper-Threading.",
     links: []
  },
  "acc": {
     description: "'tm' Automatic clock control.",
     links: []
  },
  "ia64": {
     description: "IA-64 processor.",
     links: []
  },
  "pbe": {
     description: "Pending Break Enable.",
     links: []
  },
  "syscall": {
     description: "SYSCALL/SYSRET.",
     links: []
  },
  "mp": {
     description: "MP Capable..",
     links: []
  },
  "nx": {
     description: "Execute Disable.",
     links: []
  },
  "mmxext": {
     description: "AMD MMX extensions.",
     links: []
  },
  "fxsr_opt": {
     description: "FXSAVE/FXRSTOR optimizations.",
     links: []
  },
  "gbpages": {
     description: "'pdpe1gb' GB pages.",
     links: []
  },
  "rdtscp": {
     description: "RDTSCP.",
     links: []
  },
  "lm": {
     description: "Long Mode (x86-64).",
     links: []
  },
  "3dnowext": {
     description: "AMD 3DNow! extensions.",
     links: []
  },
  "3dnow": {
     description: "3DNow!.",
     links: []
  },
  "recovery": {
     description: "CPU in recovery mode.",
     links: []
  },
  "longrun": {
     description: "Longrun power control.",
     links: []
  },
  "lrti": {
     description: "LongRun table interface.",
     links: []
  },
  "cxmmx": {
     description: "Cyrix MMX extensions.",
     links: []
  },
  "k6_mtrr": {
     description: "AMD K6 nonstandard MTRRs.",
     links: []
  },
  "cyrix_arr": {
     description: "Cyrix ARRs (= MTRRs).",
     links: []
  },
  "centaur_mcr": {
     description: "Centaur MCRs (= MTRRs).",
     links: []
  },
  "k8": {
     description: "(hidden by default) Opteron, Athlon64.",
     links: []
  },
  "k7": {
     description: "(hidden by default) Athlon.",
     links: []
  },
  "p3": {
     description: "(hidden by default) P3.",
     links: []
  },
  "p4": {
     description: "(hidden by default) P4.",
     links: []
  },
  "constant_tsc": {
     description: "TSC ticks at a constant rate.",
     links: []
  },
  "up": {
     description: "smp kernel running on up.",
     links: []
  },
  "art": {
     description: "Platform has always running timer (ART).",
     links: []
  },
  "arch_perfmon": {
     description: "Intel Architectural PerfMon.",
     links: []
  },
  "pebs": {
     description: "Precise-Event Based Sampling.",
     links: []
  },
  "bts": {
     description: "Branch Trace Store.",
     links: []
  },
  "syscall32": {
     description: "(hidden by default) syscall in ia32 userspace.",
     links: []
  },
  "sysenter32": {
     description: "(hidden by default) sysenter in ia32 userspace.",
     links: []
  },
  "rep_good": {
     description: "rep microcode works well.",
     links: []
  },
  "mfence_rdtsc": {
     description: "(hidden by default) Mfence synchronizes RDTSC.",
     links: []
  },
  "lfence_rdtsc": {
     description: "(hidden by default) Lfence synchronizes RDTSC.",
     links: []
  },
  "acc_power": {
     description: "AMD Accumulated Power Mechanism.",
     links: []
  },
  "nopl": {
     description: "The NOPL (0F 1F) instructions.",
     links: []
  },
  "always": {
     description: "(hidden by default) Always-present feature.",
     links: []
  },
  "xtopology": {
     description: "cpu topology enum extensions.",
     links: []
  },
  "tsc_reliable": {
     description: "TSC is known to be reliable.",
     links: []
  },
  "nonstop_tsc": {
     description: "TSC does not stop in C states.",
     links: []
  },
  "cpuid": {
     description: "CPU has CPUID instruction itself.",
     links: []
  },
  "extd_apicid": {
     description: "has extended APICID (8 bits).",
     links: []
  },
  "amd_dcm": {
     description: "multi-node processor.",
     links: []
  },
  "aperfmperf": {
     description: "APERFMPERF.",
     links: []
  },
  "nonstop_tsc_s3": {
     description: "TSC doesn't stop in S3 state.",
     links: []
  },
  "tsc_known_freq": {
     description: "TSC has known frequency.",
     links: []
  },
  "xmm3": {
     description: "'pni' SSE-3.",
     links: []
  },
  "pclmulqdq": {
     description: "PCLMULQDQ instruction.",
     links: []
  },
  "dtes64": {
     description: "64-bit Debug Store.",
     links: []
  },
  "mwait": {
     description: "'monitor' Monitor/Mwait support.",
     links: []
  },
  "dscpl": {
     description: "'ds_cpl' CPL Qual. Debug Store.",
     links: []
  },
  "vmx": {
     description: "Hardware virtualization.",
     links: []
  },
  "smx": {
     description: "Safer mode.",
     links: []
  },
  "est": {
     description: "Enhanced SpeedStep.",
     links: []
  },
  "tm2": {
     description: "Thermal Monitor 2.",
     links: []
  },
  "ssse3": {
     description: "Supplemental SSE-3.",
     links: []
  },
  "cid": {
     description: "Context ID.",
     links: []
  },
  "sdbg": {
     description: "Silicon Debug.",
     links: []
  },
  "fma": {
     description: "Fused multiply-add.",
     links: []
  },
  "cx16": {
     description: "CMPXCHG16B.",
     links: []
  },
  "xtpr": {
     description: "Send Task Priority Messages.",
     links: []
  },
  "pdcm": {
     description: "Performance Capabilities.",
     links: []
  },
  "pcid": {
     description: "Process Context Identifiers.",
     links: []
  },
  "dca": {
     description: "Direct Cache Access.",
     links: []
  },
  "xmm4_1": {
     description: "'sse4_1' SSE-4.1.",
     links: []
  },
  "xmm4_2": {
     description: "'sse4_2' SSE-4.2.",
     links: []
  },
  "x2apic": {
     description: "x2APIC.",
     links: []
  },
  "movbe": {
     description: "MOVBE instruction.",
     links: []
  },
  "popcnt": {
     description: "POPCNT instruction.",
     links: []
  },
  "tsc_deadline_timer": {
     description: "Tsc deadline timer.",
     links: []
  },
  "aes": {
     description: "AES instructions.",
     links: []
  },
  "xsave": {
     description: "XSAVE/XRSTOR/XSETBV/XGETBV.",
     links: []
  },
  "osxsave": {
     description: "(hidden by default) XSAVE enabled in the OS.",
     links: []
  },
  "avx": {
     description: "Advanced Vector Extensions.",
     links: []
  },
  "f16c": {
     description: "16-bit fp conversions.",
     links: []
  },
  "rdrand": {
     description: "The RDRAND instruction.",
     links: []
  },
  "hypervisor": {
     description: "Running on a hypervisor.",
     links: []
  },
  "xstore": {
     description: "'rng' RNG present (xstore).",
     links: []
  },
  "xstore_en": {
     description: "'rng_en' RNG enabled.",
     links: []
  },
  "xcrypt": {
     description: "'ace' on-CPU crypto (xcrypt).",
     links: []
  },
  "xcrypt_en": {
     description: "'ace_en' on-CPU crypto enabled.",
     links: []
  },
  "ace2": {
     description: "Advanced Cryptography Engine v2.",
     links: []
  },
  "ace2_en": {
     description: "ACE v2 enabled.",
     links: []
  },
  "phe": {
     description: "PadLock Hash Engine.",
     links: []
  },
  "phe_en": {
     description: "PHE enabled.",
     links: []
  },
  "pmm": {
     description: "PadLock Montgomery Multiplier.",
     links: []
  },
  "pmm_en": {
     description: "PMM enabled.",
     links: []
  },
  "lahf_lm": {
     description: "LAHF/SAHF in long mode.",
     links: []
  },
  "cmp_legacy": {
     description: "If yes HyperThreading not valid.",
     links: []
  },
  "svm": {
     description: "Secure virtual machine.",
     links: []
  },
  "extapic": {
     description: "Extended APIC space.",
     links: []
  },
  "cr8_legacy": {
     description: "CR8 in 32-bit mode.",
     links: []
  },
  "abm": {
     description: "Advanced bit manipulation.",
     links: []
  },
  "sse4a": {
     description: "SSE-4A.",
     links: []
  },
  "misalignsse": {
     description: "Misaligned SSE mode.",
     links: []
  },
  "3dnowprefetch": {
     description: "3DNow prefetch instructions.",
     links: []
  },
  "osvw": {
     description: "OS Visible Workaround.",
     links: []
  },
  "ibs": {
     description: "Instruction Based Sampling.",
     links: []
  },
  "xop": {
     description: "extended AVX instructions.",
     links: []
  },
  "skinit": {
     description: "SKINIT/STGI instructions.",
     links: []
  },
  "wdt": {
     description: "Watchdog timer.",
     links: []
  },
  "lwp": {
     description: "Light Weight Profiling.",
     links: []
  },
  "fma4": {
     description: "4 operands MAC instructions.",
     links: []
  },
  "tce": {
     description: "translation cache extension.",
     links: []
  },
  "nodeid_msr": {
     description: "NodeId MSR.",
     links: []
  },
  "tbm": {
     description: "trailing bit manipulations.",
     links: []
  },
  "topoext": {
     description: "topology extensions CPUID leafs.",
     links: []
  },
  "perfctr_core": {
     description: "core performance counter extensions.",
     links: []
  },
  "perfctr_nb": {
     description: "NB performance counter extensions.",
     links: []
  },
  "bpext": {
     description: "data breakpoint extension.",
     links: []
  },
  "ptsc": {
     description: "performance time-stamp counter.",
     links: []
  },
  "perfctr_llc": {
     description: "Last Level Cache performance counter extensions.",
     links: []
  },
  "mwaitx": {
     description: "MWAIT extension (MONITORX/MWAITX).",
     links: []
  },
  "ring3mwait": {
     description: "Ring 3 MONITOR/MWAIT.",
     links: []
  },
  "cpuid_fault": {
     description: "Intel CPUID faulting.",
     links: []
  },
  "cpb": {
     description: "AMD Core Performance Boost.",
     links: []
  },
  "epb": {
     description: "IA32_ENERGY_PERF_BIAS support.",
     links: []
  },
  "cat_l3": {
     description: "Cache Allocation Technology L3.",
     links: []
  },
  "cat_l2": {
     description: "Cache Allocation Technology L2.",
     links: []
  },
  "cdp_l3": {
     description: "Code and Data Prioritization L3.",
     links: []
  },
  "hw_pstate": {
     description: "AMD HW-PState.",
     links: []
  },
  "proc_feedback": {
     description: "AMD ProcFeedbackInterface.",
     links: []
  },
  "sme": {
     description: "AMD Secure Memory Encryption.",
     links: []
  },
  "intel_ppin": {
     description: "Intel Processor Inventory Number.",
     links: []
  },
  "intel_pt": {
     description: "Intel Processor Trace.",
     links: []
  },
  "avx512_4vnniw": {
     description: "AVX-512 Neural Network Instructions.",
     links: []
  },
  "avx512_4fmaps": {
     description: "AVX-512 Multiply Accumulation Single precision.",
     links: []
  },
  "mba": {
     description: "Memory Bandwidth Allocation.",
     links: []
  },
  "tpr_shadow": {
     description: "Intel TPR Shadow.",
     links: []
  },
  "vnmi": {
     description: "Intel Virtual NMI.",
     links: []
  },
  "flexpriority": {
     description: "Intel FlexPriority.",
     links: []
  },
  "ept": {
     description: "Intel Extended Page Table.",
     links: []
  },
  "vpid": {
     description: "Intel Virtual Processor ID.",
     links: []
  },
  "vmmcall": {
     description: "Prefer vmmcall to vmcall.",
     links: []
  },
  "xenpv": {
     description: "(hidden by default) Xen paravirtual guest.",
     links: []
  },
  "fsgsbase": {
     description: "{RD/WR}{FS/GS}BASE instruction.",
     links: []
  },
  "tsc_adjust": {
     description: "TSC adjustment MSR 0x3b.",
     links: []
  },
  "bmi1": {
     description: "1st group bit manipulation extensions.",
     links: []
  },
  "hle": {
     description: "Hardware Lock Elision.",
     links: []
  },
  "avx2": {
     description: "AVX2 instructions.",
     links: []
  },
  "smep": {
     description: "Supervisor Mode Execution Protection.",
     links: []
  },
  "bmi2": {
     description: "2nd group bit manipulation extensions.",
     links: []
  },
  "erms": {
     description: "Enhanced REP MOVSB/STOSB.",
     links: []
  },
  "invpcid": {
     description: "Invalidate Processor Context ID.",
     links: []
  },
  "rtm": {
     description: "Restricted Transactional Memory.",
     links: []
  },
  "cqm": {
     description: "Cache QoS Monitoring.",
     links: []
  },
  "mpx": {
     description: "Memory Protection Extension.",
     links: []
  },
  "rdt_a": {
     description: "Resource Director Technology Allocation.",
     links: []
  },
  "avx512f": {
     description: "AVX-512 Foundation.",
     links: []
  },
  "avx512dq": {
     description: "AVX-512 DQ (Double/Quad granular) Instructions.",
     links: []
  },
  "rdseed": {
     description: "The RDSEED instruction.",
     links: []
  },
  "adx": {
     description: "The ADCX and ADOX instructions.",
     links: []
  },
  "smap": {
     description: "Supervisor Mode Access Prevention.",
     links: []
  },
  "avx512ifma": {
     description: "AVX-512 Integer Fused Multiply-Add instructions.",
     links: []
  },
  "clflushopt": {
     description: "CLFLUSHOPT instruction.",
     links: []
  },
  "clwb": {
     description: "CLWB instruction.",
     links: []
  },
  "avx512pf": {
     description: "AVX-512 Prefetch.",
     links: []
  },
  "avx512er": {
     description: "AVX-512 Exponential and Reciprocal.",
     links: []
  },
  "avx512cd": {
     description: "AVX-512 Conflict Detection.",
     links: []
  },
  "sha_ni": {
     description: "SHA1/SHA256 Instruction Extensions.",
     links: []
  },
  "avx512bw": {
     description: "AVX-512 BW (Byte/Word granular) Instructions.",
     links: []
  },
  "avx512vl": {
     description: "AVX-512 VL (128/256 Vector Length) Extensions.",
     links: []
  },
  "xsaveopt": {
     description: "XSAVEOPT.",
     links: []
  },
  "xsavec": {
     description: "XSAVEC.",
     links: []
  },
  "xgetbv1": {
     description: "XGETBV with ECX = 1.",
     links: []
  },
  "xsaves": {
     description: "XSAVES/XRSTORS.",
     links: []
  },
  "cqm_llc": {
     description: "LLC QoS if 1.",
     links: []
  },
  "cqm_occup_llc": {
     description: "LLC occupancy monitoring if 1.",
     links: []
  },
  "cqm_mbm_total": {
     description: "LLC Total MBM monitoring.",
     links: []
  },
  "cqm_mbm_local": {
     description: "LLC Local MBM monitoring.",
     links: []
  },
  "clzero": {
     description: "CLZERO instruction.",
     links: []
  },
  "irperf": {
     description: "Instructions Retired Count.",
     links: []
  },
  "dtherm": {
     description: "Digital Thermal Sensor.",
     links: []
  },
  "ida": {
     description: "Intel Dynamic Acceleration.",
     links: []
  },
  "arat": {
     description: "Always Running APIC Timer.",
     links: []
  },
  "pln": {
     description: "Intel Power Limit Notification.",
     links: []
  },
  "pts": {
     description: "Intel Package Thermal Status.",
     links: []
  },
  "hwp": {
     description: "Intel Hardware P-states.",
     links: []
  },
  "hwp_notify": {
     description: "HWP Notification.",
     links: []
  },
  "hwp_act_window": {
     description: "HWP Activity Window.",
     links: []
  },
  "hwp_epp": {
     description: "HWP Energy Perf. Preference.",
     links: []
  },
  "hwp_pkg_req": {
     description: "HWP Package Level Request.",
     links: []
  },
  "npt": {
     description: "Nested Page Table support.",
     links: []
  },
  "lbrv": {
     description: "LBR Virtualization support.",
     links: []
  },
  "svml": {
     description: "'svm_lock' SVM locking MSR.",
     links: []
  },
  "nrips": {
     description: "'nrip_save' SVM next_rip save.",
     links: []
  },
  "tscratemsr": {
     description: "'tsc_scale' TSC scaling support.",
     links: []
  },
  "vmcbclean": {
     description: "'vmcb_clean' VMCB clean bits support.",
     links: []
  },
  "flushbyasid": {
     description: "flush-by-ASID support.",
     links: []
  },
  "decodeassists": {
     description: "Decode Assists support.",
     links: []
  },
  "pausefilter": {
     description: "filtered pause intercept.",
     links: []
  },
  "pfthreshold": {
     description: "pause filter threshold.",
     links: []
  },
  "avic": {
     description: "Virtual Interrupt Controller.",
     links: []
  },
  "v_vmsave_vmload": {
     description: "Virtual VMSAVE VMLOAD.",
     links: []
  },
  "vgif": {
     description: "Virtual GIF.",
     links: []
  },
  "avx512vbmi": {
     description: "AVX512 Vector Bit Manipulation instruction.",
     links: []
  },
  "pku": {
     description: "Protection Keys for Userspace.",
     links: []
  },
  "ospke": {
     description: "OS Protection Keys Enable.",
     links: []
  },
  "avx512_vpopcntdq": {
     description: "POPCNT for vectors of DW/QW.",
     links: []
  },
  "la57": {
     description: "5-level page tables.",
     links: []
  },
  "rdpid": {
     description: "RDPID instruction.",
     links: []
  },
  "overflow_recov": {
     description: "MCA overflow recovery support.",
     links: []
  },
  "succor": {
     description: "Uncorrectable error containment and recovery.",
     links: []
  },
  "smca": {
     description: "Scalable MCA.",
     links: []
  },
  "f00f": {
     description: "Intel F00F.",
     links: []
  },
  "fdiv": {
     description: "FPU FDIV.",
     links: []
  },
  "coma": {
     description: "Cyrix 6x86 coma.",
     links: []
  },
  "amd_tlb_mmatch": {
     description: "'tlb_mmatch' AMD Erratum 383.",
     links: []
  },
  "amd_apic_c1e": {
     description: "'apic_c1e' AMD Erratum 400.",
     links: []
  },
  "11ap": {
     description: "Bad local APIC aka 11AP.",
     links: []
  },
  "fxsave_leak": {
     description: "FXSAVE leaks FOP/FIP/FOP.",
     links: []
  },
  "clflush_monitor": {
     description: "AAI65, CLFLUSH required before MONITOR.",
     links: []
  },
  "sysret_ss_attrs": {
     description: "SYSRET doesn't fix up SS attrs.",
     links: []
  },
  "espfix": {
     description: "(hidden by default) IRET to 16-bit SS corrupts ESP/RSP high bits.",
     links: []
  },
  "null_seg": {
     description: "Nulling a selector preserves the base.",
     links: []
  },
  "swapgs_fence": {
     description: "SWAPGS without input dep on GS.",
     links: []
  },
  "monitor": {
     description: "IPI required to wake up remote CPU.",
     links: []
  },
  "amd_e400": {
     description: "CPU is among the affected by Erratum 400.",
     links: []
  },

}
