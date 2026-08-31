// Auto-generado por scripts/build_data.py. NO editar a mano.
// Fuente: tsale/EDR-Telemetry + data/vendor_metadata.json
window.EDR_DATA = {
  "source": "https://github.com/tsale/EDR-Telemetry",
  "lastImport": "2026-08-31",
  "vendors": [
    {
      "id": "Auditd",
      "canonical": "Auditd",
      "name": "Auditd",
      "color": "#444444",
      "website": "https://github.com/linux-audit/audit-documentation",
      "product": "Linux auditd",
      "productUrl": "https://man7.org/linux/man-pages/man8/auditd.8.html",
      "docsUrl": "https://github.com/linux-audit/audit-documentation",
      "logo": "assets/logos/auditd.png",
      "gartner": "Herramienta OS nativa",
      "forrester": "N/A",
      "ens": "Nativo Linux",
      "strengths": "Gratis, nativo kernel Linux, base para muchos EDRs.",
      "cautions": "No es EDR: solo log. Requiere pipeline (SIEM) para deteccion.",
      "notableCves": [
        {
          "id": "CVE-2022-49802",
          "severity": "Medium",
          "score": 5.5,
          "published": "2025-05-01",
          "description": "In the Linux kernel, the following vulnerability has been resolved:\n\nftrace: Fix null pointer dereference in ftrace_add_mod()\n\nThe @ftrace_mod is allocated by kzalloc(), so both the members {prev,next}\nof @ftrace_mode->list are NULL, it's n",
          "note": "",
          "source": "nvd"
        }
      ],
      "incidents": [
        {
          "date": "2021-02",
          "title": "CVE-2021-3156 sudo Baron Samedit - auditd no detecta por defecto",
          "impact": "Reto de configuracion: auditd requiere reglas custom para detectar explotacion.",
          "url": "https://www.qualys.com/2021/01/26/cve-2021-3156/baron-samedit-heap-based-overflow-sudo.txt"
        }
      ],
      "perOs": {
        "windows": {
          "present": false,
          "score": 0
        },
        "linux": {
          "present": true,
          "score": 35.3
        },
        "macos": {
          "present": false,
          "score": 0
        }
      }
    },
    {
      "id": "BitDefender",
      "canonical": "BitDefender",
      "name": "BitDefender",
      "color": "#ed1c24",
      "website": "https://www.bitdefender.com/",
      "product": "GravityZone XDR",
      "productUrl": "https://www.bitdefender.com/business/products/xdr.html",
      "docsUrl": "https://www.bitdefender.com/business/support/en/",
      "logo": "assets/logos/bitdefender.ico",
      "gartner": "Challenger EPP 2024",
      "forrester": "Strong Performer XDR Q2 2024",
      "ens": "ENS Alta certificado producto",
      "strengths": "Motor de deteccion top en AV-Comparatives, OEM del kernel en varios competidores, coste bajo.",
      "cautions": "Feature gap en respuesta automatizada y threat hunting vs Leaders.",
      "notableCves": [
        {
          "id": "CVE-2017-8931",
          "severity": "Critical",
          "score": 9.8,
          "published": "2018-10-30",
          "description": "Bitdefender GravityZone VMware appliance before 6.2.1-35 might allow attackers to gain access with root privileges via unspecified vectors.",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2018-8955",
          "severity": "Critical",
          "score": 9.8,
          "published": "2018-10-24",
          "description": "The installer for BitDefender GravityZone relies on an encoded string in a filename to determine the URL for installation metadata, which allows remote attackers to execute arbitrary code by changing the filename while leaving the file's di",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2021-3554",
          "severity": "Critical",
          "score": 9.0,
          "published": "2021-11-24",
          "description": "Improper Access Control vulnerability in the patchesUpdate API as implemented in Bitdefender Endpoint Security Tools for Linux as a relay role allows an attacker to manipulate the remote address used for pulling patches. This issue affects:",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2021-3423",
          "severity": "High",
          "score": 7.8,
          "published": "2021-05-18",
          "description": "Uncontrolled Search Path Element vulnerability in the openssl component as used in Bitdefender GravityZone Business Security allows an attacker to load a third party DLL to elevate privileges. This issue affects Bitdefender GravityZone Busi",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2021-3823",
          "severity": "High",
          "score": 7.1,
          "published": "2021-10-28",
          "description": "Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal') vulnerability in the UpdateServer component of Bitdefender GravityZone allows an attacker to execute arbitrary code on vulnerable instances. This issue affects: ",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2021-3960",
          "severity": "High",
          "score": 7.1,
          "published": "2021-12-16",
          "description": "Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal') vulnerability in the UpdateServer component of Bitdefender GravityZone allows an attacker to execute arbitrary code on vulnerable instances. This issue affects B",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2022-0677",
          "severity": "High",
          "score": 7.5,
          "published": "2022-04-07",
          "description": "Improper Handling of Length Parameter Inconsistency vulnerability in the Update Server component of Bitdefender Endpoint Security Tools (in relay role), GravityZone (in Update Server role) allows an attacker to cause a Denial-of-Service. Th",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2022-2830",
          "severity": "High",
          "score": 8.8,
          "published": "2022-09-05",
          "description": "Deserialization of Untrusted Data vulnerability in the message processing component of Bitdefender GravityZone Console allows an attacker to pass unsafe commands to the environment. This issue affects: Bitdefender GravityZone Console On-Pre",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2024-2223",
          "severity": "High",
          "score": 8.1,
          "published": "2024-04-09",
          "description": "An Incorrect Regular Expression vulnerability in Bitdefender GravityZone Update Server allows an attacker to cause a Server Side Request Forgery and reconfigure the relay. This issue affects the following products that include the vulnerabl",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2024-2224",
          "severity": "High",
          "score": 8.1,
          "published": "2024-04-09",
          "description": "Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’) vulnerability in the UpdateServer component of Bitdefender GravityZone allows an attacker to execute arbitrary code on vulnerable instances. This issue affects t",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2014-5350",
          "severity": "Medium",
          "score": 5.0,
          "published": "2014-08-19",
          "description": "Multiple directory traversal vulnerabilities in Bitdefender GravityZone before 5.1.11.432 allow remote attackers to read arbitrary files via a (1) .. (dot dot) in the id parameter to webservice/CORE/downloadFullKitEpc/a/1 in the Web Console",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2021-3552",
          "severity": "Medium",
          "score": 5.3,
          "published": "2021-11-24",
          "description": "A Server-Side Request Forgery (SSRF) vulnerability in the EPPUpdateService component of Bitdefender Endpoint Security Tools allows an attacker to proxy requests to the relay server. This issue affects: Bitdefender Endpoint Security Tools ve",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2021-3553",
          "severity": "Medium",
          "score": 5.3,
          "published": "2021-11-24",
          "description": "A Server-Side Request Forgery (SSRF) vulnerability in the EPPUpdateService of Bitdefender Endpoint Security Tools allows an attacker to use the Endpoint Protection relay as a proxy for any remote host. This issue affects: Bitdefender Endpoi",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2021-3641",
          "severity": "Medium",
          "score": 6.1,
          "published": "2021-11-09",
          "description": "Improper Link Resolution Before File Access ('Link Following') vulnerability in the EPAG component of Bitdefender Endpoint Security Tools for Windows allows a local attacker to cause a denial of service. This issue affects: Bitdefender Grav",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2021-3959",
          "severity": "Medium",
          "score": 6.8,
          "published": "2021-12-16",
          "description": "A Server-Side Request Forgery (SSRF) vulnerability in the EPPUpdateService component of Bitdefender Endpoint Security Tools allows an attacker to proxy requests to the relay server. This issue affects: Bitdefender Bitdefender GravityZone ve",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2024-0253",
          "severity": "Medium",
          "note": "GravityZone console XSS",
          "source": "curated"
        }
      ],
      "incidents": [
        {
          "date": "2024-01",
          "title": "CVE-2024-0253 GravityZone console XSS",
          "impact": "XSS reflejado en la consola de gestion.",
          "url": "https://www.bitdefender.com/support/security-advisories/"
        },
        {
          "date": "2023-10",
          "title": "Vulnerabilidad CVE-2023-49567 GravityZone update bypass",
          "impact": "Bypass de firma en actualizacion de modulos.",
          "url": "https://www.bitdefender.com/support/security-advisories/"
        }
      ],
      "perOs": {
        "windows": {
          "present": true,
          "score": 58.2
        },
        "linux": {
          "present": true,
          "score": 50.0
        },
        "macos": {
          "present": true,
          "score": 27.1
        }
      }
    },
    {
      "id": "C-Prot",
      "canonical": "C-Prot",
      "name": "C-Prot",
      "color": "#0077b6",
      "website": "https://c-prot.com/",
      "product": "C-Prot EDR",
      "productUrl": "https://c-prot.com/en/products/edr/",
      "docsUrl": "https://c-prot.com/",
      "logo": "assets/logos/c-prot.ico",
      "gartner": "No participa",
      "forrester": "N/A",
      "ens": "No evidenciado",
      "strengths": "EDR turco, presencia regional.",
      "cautions": "Poca visibilidad publica en UE.",
      "notableCves": [],
      "incidents": [
        {
          "date": "2022",
          "title": "EDR turco con enfoque regional MENA/CIS",
          "impact": "Presencia limitada fuera de Turquia y paises de la region.",
          "url": "https://c-prot.com/"
        }
      ],
      "perOs": {
        "windows": {
          "present": true,
          "score": 87.7
        },
        "linux": {
          "present": true,
          "score": 86.8
        },
        "macos": {
          "present": true,
          "score": 81.0
        }
      }
    },
    {
      "id": "Carbon Black",
      "canonical": "Carbon Black",
      "name": "Carbon Black",
      "color": "#4a90e2",
      "website": "https://www.vmware.com/products/carbon-black-cloud.html",
      "product": "VMware Carbon Black Cloud EDR",
      "productUrl": "https://www.broadcom.com/products/carbon-black",
      "docsUrl": "https://docs.vmware.com/en/VMware-Carbon-Black-Cloud/",
      "logo": "assets/logos/carbonblack.png",
      "gartner": "Niche EPP 2024",
      "forrester": "Contender XDR",
      "ens": "No evidenciado publicamente",
      "strengths": "Recoleccion de eventos exhaustiva (CB Response legacy), buen threat hunting.",
      "cautions": "Tras compra Broadcom-VMware, incertidumbre roadmap y pricing.",
      "notableCves": [
        {
          "id": "CVE-2021-21982",
          "severity": "Critical",
          "score": 9.1,
          "published": "2021-04-01",
          "description": "VMware Carbon Black Cloud Workload appliance 1.0.0 and 1.01 has an authentication bypass vulnerability that may allow a malicious actor with network access to the administrative interface of the VMware Carbon Black Cloud Workload appliance ",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2021-21998",
          "severity": "Critical",
          "score": 9.8,
          "published": "2021-06-23",
          "description": "VMware Carbon Black App Control 8.0, 8.1, 8.5 prior to 8.5.8, and 8.6 prior to 8.6.2 has an authentication bypass. A malicious actor with network access to the VMware Carbon Black App Control management server might be able to obtain admini",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2022-22951",
          "severity": "Critical",
          "score": 9.1,
          "published": "2022-03-23",
          "description": "VMware Carbon Black App Control (8.5.x prior to 8.5.14, 8.6.x prior to 8.6.6, 8.7.x prior to 8.7.4 and 8.8.x prior to 8.8.2) contains an OS command injection vulnerability. An authenticated, high privileged malicious actor with network acce",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2022-22952",
          "severity": "Critical",
          "score": 9.1,
          "published": "2022-03-23",
          "description": "VMware Carbon Black App Control (8.5.x prior to 8.5.14, 8.6.x prior to 8.6.6, 8.7.x prior to 8.7.4 and 8.8.x prior to 8.8.2) contains a file upload vulnerability. A malicious actor with administrative access to the VMware App Control admini",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2023-20857",
          "severity": "High",
          "note": "App Control injection",
          "source": "curated"
        },
        {
          "id": "CVE-2023-20858",
          "severity": "High",
          "score": 7.2,
          "published": "2023-02-22",
          "description": "VMware Carbon Black App Control 8.7.x prior to 8.7.8, 8.8.x prior to 8.8.6, and 8.9.x.prior to 8.9.4 contain an injection vulnerability. A malicious actor with privileged access to the App Control administration console may be able to use s",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2020-4008",
          "severity": "Low",
          "score": 3.6,
          "published": "2020-12-16",
          "description": "The installer of the macOS Sensor for VMware Carbon Black Cloud (prior to 3.5.1) handles certain files in an insecure way. A malicious actor who has local access to the endpoint on which a macOS sensor is going to be installed, may overwrit",
          "note": "",
          "source": "nvd"
        }
      ],
      "incidents": [
        {
          "date": "2023-11",
          "title": "Broadcom completa adquisicion VMware",
          "impact": "Incertidumbre sobre roadmap y pricing Carbon Black.",
          "url": "https://www.broadcom.com/company/news/financial-releases/61591"
        },
        {
          "date": "2023-05",
          "title": "CVE-2023-20857 App Control injection",
          "impact": "Command injection en VMware Carbon Black App Control.",
          "url": "https://www.vmware.com/security/advisories/VMSA-2023-0008.html"
        }
      ],
      "perOs": {
        "windows": {
          "present": true,
          "score": 52.1
        },
        "linux": {
          "present": false,
          "score": 0
        },
        "macos": {
          "present": false,
          "score": 0
        }
      }
    },
    {
      "id": "Carbon Black Cloud",
      "canonical": "Carbon Black",
      "name": "Carbon Black Cloud",
      "color": "#4a90e2",
      "website": "https://www.vmware.com/products/carbon-black-cloud.html",
      "product": "VMware Carbon Black Cloud EDR",
      "productUrl": "https://www.broadcom.com/products/carbon-black",
      "docsUrl": "https://docs.vmware.com/en/VMware-Carbon-Black-Cloud/",
      "logo": "assets/logos/carbonblack.png",
      "gartner": "Niche EPP 2024",
      "forrester": "Contender XDR",
      "ens": "No evidenciado publicamente",
      "strengths": "Recoleccion de eventos exhaustiva (CB Response legacy), buen threat hunting.",
      "cautions": "Tras compra Broadcom-VMware, incertidumbre roadmap y pricing.",
      "notableCves": [
        {
          "id": "CVE-2021-21982",
          "severity": "Critical",
          "score": 9.1,
          "published": "2021-04-01",
          "description": "VMware Carbon Black Cloud Workload appliance 1.0.0 and 1.01 has an authentication bypass vulnerability that may allow a malicious actor with network access to the administrative interface of the VMware Carbon Black Cloud Workload appliance ",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2021-21998",
          "severity": "Critical",
          "score": 9.8,
          "published": "2021-06-23",
          "description": "VMware Carbon Black App Control 8.0, 8.1, 8.5 prior to 8.5.8, and 8.6 prior to 8.6.2 has an authentication bypass. A malicious actor with network access to the VMware Carbon Black App Control management server might be able to obtain admini",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2022-22951",
          "severity": "Critical",
          "score": 9.1,
          "published": "2022-03-23",
          "description": "VMware Carbon Black App Control (8.5.x prior to 8.5.14, 8.6.x prior to 8.6.6, 8.7.x prior to 8.7.4 and 8.8.x prior to 8.8.2) contains an OS command injection vulnerability. An authenticated, high privileged malicious actor with network acce",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2022-22952",
          "severity": "Critical",
          "score": 9.1,
          "published": "2022-03-23",
          "description": "VMware Carbon Black App Control (8.5.x prior to 8.5.14, 8.6.x prior to 8.6.6, 8.7.x prior to 8.7.4 and 8.8.x prior to 8.8.2) contains a file upload vulnerability. A malicious actor with administrative access to the VMware App Control admini",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2023-20857",
          "severity": "High",
          "note": "App Control injection",
          "source": "curated"
        },
        {
          "id": "CVE-2023-20858",
          "severity": "High",
          "score": 7.2,
          "published": "2023-02-22",
          "description": "VMware Carbon Black App Control 8.7.x prior to 8.7.8, 8.8.x prior to 8.8.6, and 8.9.x.prior to 8.9.4 contain an injection vulnerability. A malicious actor with privileged access to the App Control administration console may be able to use s",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2020-4008",
          "severity": "Low",
          "score": 3.6,
          "published": "2020-12-16",
          "description": "The installer of the macOS Sensor for VMware Carbon Black Cloud (prior to 3.5.1) handles certain files in an insecure way. A malicious actor who has local access to the endpoint on which a macOS sensor is going to be installed, may overwrit",
          "note": "",
          "source": "nvd"
        }
      ],
      "incidents": [
        {
          "date": "2023-11",
          "title": "Broadcom completa adquisicion VMware",
          "impact": "Incertidumbre sobre roadmap y pricing Carbon Black.",
          "url": "https://www.broadcom.com/company/news/financial-releases/61591"
        },
        {
          "date": "2023-05",
          "title": "CVE-2023-20857 App Control injection",
          "impact": "Command injection en VMware Carbon Black App Control.",
          "url": "https://www.vmware.com/security/advisories/VMSA-2023-0008.html"
        }
      ],
      "perOs": {
        "windows": {
          "present": false,
          "score": 0
        },
        "linux": {
          "present": true,
          "score": 26.5
        },
        "macos": {
          "present": false,
          "score": 0
        }
      }
    },
    {
      "id": "Cortex XDR",
      "canonical": "Cortex XDR",
      "name": "Cortex XDR",
      "color": "#fa582d",
      "website": "https://www.paloaltonetworks.com/cortex",
      "product": "Palo Alto Cortex XDR / XSIAM",
      "productUrl": "https://www.paloaltonetworks.com/cortex/cortex-xdr",
      "docsUrl": "https://docs-cortex.paloaltonetworks.com/",
      "logo": "assets/logos/paloalto.ico",
      "gartner": "Leader EPP 2024",
      "forrester": "Leader XDR Q2 2024",
      "ens": "No evidenciado publicamente para Cortex",
      "strengths": "Plataforma XSIAM con SOC AI, correlacion cross-stack Palo Alto.",
      "cautions": "Coste y complejidad, exige disciplina de tuning.",
      "notableCves": [
        {
          "id": "CVE-2020-1991",
          "severity": "High",
          "score": 7.8,
          "published": "2020-04-08",
          "description": "An insecure temporary file vulnerability in Palo Alto Networks Traps allows a local authenticated Windows user to escalate privileges or overwrite system files. This issue affects Palo Alto Networks Traps 5.0 versions before 5.0.8; 6.1 vers",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2020-2049",
          "severity": "High",
          "score": 7.8,
          "published": "2020-12-09",
          "description": "A local privilege escalation vulnerability exists in Palo Alto Networks Cortex XDR Agent on the Windows platform that allows an authenticated local Windows user to execute programs with SYSTEM privileges. This requires the user to have the ",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2021-3041",
          "severity": "High",
          "score": 7.8,
          "published": "2021-06-10",
          "description": "A local privilege escalation vulnerability exists in the Palo Alto Networks Cortex XDR agent on Windows platforms that enables an authenticated local Windows user to execute programs with SYSTEM privileges. This requires the user to have th",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2021-3042",
          "severity": "High",
          "score": 7.8,
          "published": "2021-07-15",
          "description": "A local privilege escalation (PE) vulnerability exists in the Palo Alto Networks Cortex XDR agent on Windows platforms that enables an authenticated local Windows user to execute programs with SYSTEM privileges. Exploiting this vulnerabilit",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2022-0015",
          "severity": "High",
          "score": 7.8,
          "published": "2022-01-12",
          "description": "A local privilege escalation (PE) vulnerability exists in the Palo Alto Networks Cortex XDR agent that enables an authenticated local user to execute programs with elevated privileges. This issue impacts: Cortex XDR agent 5.0 versions earli",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2024-5921",
          "severity": "High",
          "note": "Cortex XDR agent LPE",
          "source": "curated"
        },
        {
          "id": "CVE-2020-2020",
          "severity": "Medium",
          "score": 5.5,
          "published": "2020-12-09",
          "description": "An improper handling of exceptional conditions vulnerability in Cortex XDR Agent allows a local authenticated Windows user to create files in the software's internal program directory that prevents the Cortex XDR Agent from starting. The ex",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2022-0012",
          "severity": "Medium",
          "score": 6.1,
          "published": "2022-01-12",
          "description": "An improper link resolution before file access vulnerability exists in the Palo Alto Networks Cortex XDR agent on Windows platforms that enables a local user to delete arbitrary system files and impact the system integrity or cause a denial",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2022-0013",
          "severity": "Medium",
          "score": 5.0,
          "published": "2022-01-12",
          "description": "A file information exposure vulnerability exists in the Palo Alto Networks Cortex XDR agent that enables a local attacker to read the contents of arbitrary files on the system with elevated privileges when generating a support file. This is",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2022-0014",
          "severity": "Medium",
          "score": 6.7,
          "published": "2022-01-12",
          "description": "An untrusted search path vulnerability exists in the Palo Alto Networks Cortex XDR agent that enables a local attacker with file creation privilege in the Windows root directory (such as C:\\) to store a program that can then be unintentiona",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2022-0025",
          "severity": "Medium",
          "score": 6.7,
          "published": "2022-05-11",
          "description": "A local privilege escalation (PE) vulnerability exists in Palo Alto Networks Cortex XDR agent software on Windows that enables an authenticated local user with file creation privilege in the Windows root directory (such as C:\\) to execute a",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2022-0026",
          "severity": "Medium",
          "score": 6.7,
          "published": "2022-05-11",
          "description": "A local privilege escalation (PE) vulnerability exists in Palo Alto Networks Cortex XDR agent software on Windows that enables an authenticated local user with file creation privilege in the Windows root directory (such as C:\\) to execute a",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2022-0029",
          "severity": "Medium",
          "score": 5.5,
          "published": "2022-09-14",
          "description": "An improper link resolution vulnerability in the Palo Alto Networks Cortex XDR agent on Windows devices allows a local attacker to read files on the system with elevated privileges when generating a tech support file.",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2023-0001",
          "severity": "Medium",
          "score": 6.0,
          "published": "2023-02-08",
          "description": "An information exposure vulnerability in the Palo Alto Networks Cortex XDR agent on Windows devices allows a local system administrator to disclose the admin password for the agent in cleartext, which bad actors can then use to execute priv",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2023-0002",
          "severity": "Medium",
          "score": 5.5,
          "published": "2023-02-08",
          "description": "A problem with a protection mechanism in the Palo Alto Networks Cortex XDR agent on Windows devices allows a local user to execute privileged cytool commands that disable or uninstall the agent.\n",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2023-3280",
          "severity": "Medium",
          "score": 5.5,
          "published": "2023-09-13",
          "description": "A problem with a protection mechanism in the Palo Alto Networks Cortex XDR agent on Windows devices allows a local user to disable the agent.\n\n",
          "note": "",
          "source": "nvd"
        }
      ],
      "incidents": [
        {
          "date": "2024-11",
          "title": "Palo Alto PAN-OS CVE-2024-0012 critico explotado en la naturaleza",
          "impact": "Aunque afecta firewall, erosiona confianza plataforma Prisma/Cortex.",
          "url": "https://security.paloaltonetworks.com/CVE-2024-0012"
        },
        {
          "date": "2024-08",
          "title": "CVE-2024-5921 Cortex XDR agent LPE",
          "impact": "Local privilege escalation en agente Windows. Parche publicado.",
          "url": "https://security.paloaltonetworks.com/CVE-2024-5921"
        }
      ],
      "perOs": {
        "windows": {
          "present": true,
          "score": 81.1
        },
        "linux": {
          "present": true,
          "score": 38.2
        },
        "macos": {
          "present": false,
          "score": 0
        }
      }
    },
    {
      "id": "CrowdStrike",
      "canonical": "CrowdStrike",
      "name": "CrowdStrike",
      "color": "#d42d2d",
      "website": "https://www.crowdstrike.com/",
      "product": "Falcon Insight XDR",
      "productUrl": "https://www.crowdstrike.com/platform/endpoint-security/edr-xdr/",
      "docsUrl": "https://falcon.crowdstrike.com/documentation/",
      "logo": "assets/logos/crowdstrike.png",
      "gartner": "Leader EPP 2024",
      "forrester": "Leader XDR Q2 2024",
      "ens": "No evidenciado publicamente",
      "strengths": "Leader sostenido, telemetria completa en Windows/Linux/macOS, threat intel propia.",
      "cautions": "Validar blast radius de updates del sensor, coste, resiliencia ante fallos de canal.",
      "notableCves": [
        {
          "id": "CVE-2025-1146",
          "severity": "High",
          "score": 8.1,
          "published": "2025-02-12",
          "description": "CrowdStrike uses industry-standard TLS (transport layer security) to secure communications from the Falcon sensor to the CrowdStrike cloud. CrowdStrike has identified a validation logic error in the Falcon sensor for Linux, Falcon Kubernete",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2024-56514",
          "severity": "Medium",
          "note": "Falcon sensor channel file parsing",
          "source": "curated"
        },
        {
          "id": "CVE-2025-42701",
          "severity": "Medium",
          "score": 5.6,
          "published": "2025-10-08",
          "description": "A race condition exists in the Falcon sensor for Windows that could allow an attacker, with the prior ability to execute code on a host, to delete arbitrary files. CrowdStrike released a security fix for this issue in Falcon sensor for Wind",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2025-42706",
          "severity": "Medium",
          "score": 6.5,
          "published": "2025-10-08",
          "description": "A logic error exists in the Falcon sensor for Windows that could allow an attacker, with the prior ability to execute code on a host, to delete arbitrary files. CrowdStrike released a security fix for this issue in Falcon sensor for Windows",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2022-2841",
          "severity": "Low",
          "score": 2.7,
          "published": "2022-08-22",
          "description": "A vulnerability was found in CrowdStrike Falcon 6.31.14505.0/6.42.15610/6.44.15806. It has been classified as problematic. Affected is an unknown function of the component Uninstallation Handler. The manipulation leads to missing authorizat",
          "note": "",
          "source": "nvd"
        }
      ],
      "incidents": [
        {
          "date": "2024-08-06",
          "title": "Demanda colectiva y perdidas por 5.400M USD solo en Fortune 500",
          "impact": "Impacto reputacional y financiero sostenido. Stock CRWD -30% post-incidente.",
          "url": "https://www.parametrix.ai/news/press-releases/crowdstrike-outage-cost"
        },
        {
          "date": "2024-07-24",
          "title": "CrowdStrike admite root cause: bug en validacion del Content Validator",
          "impact": "Informe tecnico publico con plan de remediation.",
          "url": "https://www.crowdstrike.com/blog/falcon-update-for-windows-hosts-technical-details/"
        },
        {
          "date": "2024-07-19",
          "title": "Falcon sensor channel file update causo BSOD global",
          "impact": "8.5M hosts Windows caidos, aerolineas, hospitales, bancos"
        },
        {
          "date": "2024-07-19",
          "title": "Falcon sensor channel file update causa BSOD global",
          "impact": "~8.5M hosts Windows caidos. Aerolineas, hospitales, bancos afectados. Mayor outage IT de la historia.",
          "url": "https://www.crowdstrike.com/falcon-content-update-remediation-and-guidance-hub/"
        }
      ],
      "perOs": {
        "windows": {
          "present": true,
          "score": 79.8
        },
        "linux": {
          "present": true,
          "score": 58.8
        },
        "macos": {
          "present": true,
          "score": 32.2
        }
      }
    },
    {
      "id": "Cybereason",
      "canonical": "Cybereason",
      "name": "Cybereason",
      "color": "#1a2e5b",
      "website": "https://www.cybereason.com/",
      "product": "Cybereason Defense Platform",
      "productUrl": "https://www.cybereason.com/platform/endpoint-detection-response-edr",
      "docsUrl": "https://nest.cybereason.com/",
      "logo": "assets/logos/cybereason.png",
      "gartner": "Visionary EPP 2024",
      "forrester": "Strong Performer XDR Q2 2024",
      "ens": "No evidenciado publicamente",
      "strengths": "MalOp story, visualizacion de ataques, fuerte en Japon.",
      "cautions": "Estabilidad financiera, churn ejecutivo.",
      "notableCves": [
        {
          "id": "CVE-2020-25502",
          "severity": "High",
          "score": 7.8,
          "published": "2023-01-20",
          "description": "Cybereason EDR version 19.1.282 and above, 19.2.182 and above, 20.1.343 and above, and 20.2.X and above has a DLL hijacking vulnerability, which could allow a local attacker to execute code with elevated privileges.",
          "note": "",
          "source": "nvd"
        }
      ],
      "incidents": [
        {
          "date": "2025-03",
          "title": "Ronda de financiacion emergencia con SoftBank",
          "impact": "Continuidad asegurada a corto, valoracion recortada.",
          "url": "https://www.cybereason.com/news"
        },
        {
          "date": "2024-11",
          "title": "Layoffs y cambio CEO",
          "impact": "Reestructuracion; validar roadmap"
        },
        {
          "date": "2024-11",
          "title": "Layoffs 17% plantilla y cambio CEO",
          "impact": "Reestructuracion financiera. Validar continuidad soporte.",
          "url": "https://techcrunch.com/2024/"
        }
      ],
      "perOs": {
        "windows": {
          "present": true,
          "score": 54.4
        },
        "linux": {
          "present": false,
          "score": 0
        },
        "macos": {
          "present": false,
          "score": 0
        }
      }
    },
    {
      "id": "Cylance",
      "canonical": "Cylance",
      "name": "Cylance",
      "color": "#0b5394",
      "website": "https://www.blackberry.com/us/en/products/cylance-endpoint-security",
      "product": "BlackBerry CylanceENDPOINT",
      "productUrl": "https://www.blackberry.com/us/en/products/cylance-endpoint-security",
      "docsUrl": "https://docs.blackberry.com/en/unified-endpoint-security/",
      "logo": "assets/logos/cylance.png",
      "gartner": "Niche EPP 2024",
      "forrester": "N/A",
      "ens": "No evidenciado",
      "strengths": "Modelo ML pionero, bajo ruido.",
      "cautions": "Transicion a Arctic Wolf, EDR limitado.",
      "notableCves": [
        {
          "id": "CVE-2018-10722",
          "severity": "High",
          "score": 7.8,
          "published": "2018-05-04",
          "description": "In Cylance CylancePROTECT before 1470, an unprivileged local user can obtain SYSTEM privileges because users have Modify access to the %PROGRAMFILES%\\Cylance\\Desktop\\log folder, the CyUpdate process grants users Modify access to new files c",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2021-32021",
          "severity": "High",
          "score": 7.8,
          "published": "2021-11-10",
          "description": "A denial of service vulnerability in the message broker of BlackBerry Protect for Windows version(s) versions 1574 and earlier could allow an attacker to potentially execute code in the context of a BlackBerry Cylance service that has admin",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2021-32023",
          "severity": "High",
          "score": 7.8,
          "published": "2021-11-10",
          "description": "An elevation of privilege vulnerability in the message broker of BlackBerry Protect for Windows version(s) versions 1574 and earlier could allow an attacker to potentially execute code in the context of a BlackBerry Cylance service that has",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2021-32022",
          "severity": "Medium",
          "score": 5.5,
          "published": "2021-11-10",
          "description": "A low privileged delete vulnerability using CEF RPC server of BlackBerry Protect for Windows version(s) versions 1574 and earlier could allow an attacker to potentially execute code in the context of a BlackBerry Cylance service that has ad",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2024-35214",
          "severity": "Unknown",
          "score": null,
          "published": "2024-08-20",
          "description": "A tampering vulnerability in the CylanceOPTICS Windows Installer Package of CylanceOPTICS for Windows version 3.2 and 3.3 could allow an attacker to potentially uninstall CylanceOPTICS from a system thereby leaving it with only the protecti",
          "note": "",
          "source": "nvd"
        }
      ],
      "incidents": [
        {
          "date": "2024-12",
          "title": "BlackBerry vende Cylance a Arctic Wolf",
          "impact": "Transicion a Arctic Wolf. Incertidumbre clientes legacy.",
          "url": "https://www.arcticwolf.com/resources/press-releases/"
        },
        {
          "date": "2023",
          "title": "Arctic Wolf adquirio Cylance de BlackBerry (2024)",
          "impact": "Futuro bajo Arctic Wolf"
        },
        {
          "date": "2019-07",
          "title": "Universal bypass del modelo ML de CylancePROTECT",
          "impact": "Investigadores Skylight logran bypass simple concatenando strings. Dano reputacional mayor.",
          "url": "https://skylightcyber.com/2019/07/18/cylance-i-kill-you/"
        }
      ],
      "perOs": {
        "windows": {
          "present": true,
          "score": 57.7
        },
        "linux": {
          "present": false,
          "score": 0
        },
        "macos": {
          "present": false,
          "score": 0
        }
      }
    },
    {
      "id": "ESET Inspect",
      "canonical": "ESET Inspect",
      "name": "ESET Inspect",
      "color": "#0093d0",
      "website": "https://www.eset.com/",
      "product": "ESET Inspect",
      "productUrl": "https://www.eset.com/int/business/solutions/detection-and-response/",
      "docsUrl": "https://help.eset.com/inspect/",
      "logo": "assets/logos/eset.png",
      "gartner": "Niche EPP 2024",
      "forrester": "Contender XDR",
      "ens": "ENS Alta producto",
      "strengths": "Eslovaco/UE, fuerte en gobierno europeo, footprint ligero.",
      "cautions": "Menos madurez XDR vs Leaders, consola doble (Protect + Inspect).",
      "notableCves": [
        {
          "id": "CVE-2024-0353",
          "severity": "High",
          "note": "ESET Server security LPE",
          "source": "curated"
        },
        {
          "id": "CVE-2025-13176",
          "severity": "Unknown",
          "score": null,
          "published": "2026-01-30",
          "description": "Planting a custom configuration file\n\nin \n\nESET Inspect Connector allow load a malicious DLL.",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2026-6423",
          "severity": "Unknown",
          "score": null,
          "published": "2026-07-16",
          "description": "A local privilege escalation vulnerability in ESET Inspect Connector. \nThe vulnerability was caused by improper authentication in an IPC channel.",
          "note": "",
          "source": "nvd"
        }
      ],
      "incidents": [
        {
          "date": "2024-01",
          "title": "CVE-2024-0353 ESET Server Security LPE",
          "impact": "Escalada privilegios via symlinks.",
          "url": "https://support.eset.com/en/ca8647"
        }
      ],
      "perOs": {
        "windows": {
          "present": true,
          "score": 69.3
        },
        "linux": {
          "present": true,
          "score": 29.4
        },
        "macos": {
          "present": true,
          "score": 31.4
        }
      }
    },
    {
      "id": "Elastic",
      "canonical": "Elastic",
      "name": "Elastic",
      "color": "#00bfb3",
      "website": "https://www.elastic.co/",
      "product": "Elastic Security",
      "productUrl": "https://www.elastic.co/security",
      "docsUrl": "https://www.elastic.co/guide/en/security/current/index.html",
      "logo": "assets/logos/elastic.png",
      "gartner": "Niche EPP 2024",
      "forrester": "Contender XDR",
      "ens": "No evidenciado para SaaS; self-hosted depende del cliente",
      "strengths": "Open source core, SIEM + EDR unificado, data retention barata.",
      "cautions": "Requiere ingenieria, no es plug-and-play.",
      "notableCves": [
        {
          "id": "CVE-2026-31215",
          "severity": "Critical",
          "score": 9.1,
          "published": "2026-05-12",
          "description": "The nexent v1.7.5.2 backend service contains an unauthorized arbitrary file deletion vulnerability in its ElasticSearch service interface. The DELETE /{index_name}/documents endpoint lacks proper authentication and authorization controls an",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2016-6651",
          "severity": "High",
          "score": 8.8,
          "published": "2016-09-30",
          "description": "The UAA /oauth/token endpoint in Pivotal Cloud Foundry (PCF) before 243; UAA 2.x before 2.7.4.8, 3.x before 3.3.0.6, and 3.4.x before 3.4.5; UAA BOSH before 11.7 and 12.x before 12.6; Elastic Runtime before 1.6.40, 1.7.x before 1.7.21, and ",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2019-7611",
          "severity": "High",
          "score": 8.1,
          "published": "2019-03-25",
          "description": "A permission issue was found in Elasticsearch versions before 5.6.15 and 6.6.1 when Field Level Security and Document Level Security are disabled and the _aliases, _shrink, or _split endpoints are used . If the elasticsearch.yml file has xp",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2022-23714",
          "severity": "High",
          "score": 7.8,
          "published": "2022-07-06",
          "description": "A local privilege escalation (LPE) issue was discovered in the ransomware canaries features of Elastic Endpoint Security for Windows, which could allow unprivileged users to elevate their privileges to those of the LocalSystem account.",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2022-38774",
          "severity": "High",
          "score": 7.8,
          "published": "2023-01-26",
          "description": "An issue was discovered in the quarantine feature of Elastic Endpoint Security and Elastic Endgame for Windows, which could allow unprivileged users to elevate their privileges to those of the LocalSystem account.",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2022-38775",
          "severity": "High",
          "score": 7.8,
          "published": "2023-01-26",
          "description": "An issue was discovered in the rollback feature of Elastic Endpoint Security for Windows, which could allow unprivileged users to elevate their privileges to those of the LocalSystem account.",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2022-38777",
          "severity": "High",
          "score": 7.8,
          "published": "2023-02-08",
          "description": "An issue was discovered in the rollback feature of Elastic Endpoint Security for Windows, which could allow unprivileged users to elevate their privileges to those of the LocalSystem account.",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2026-54322",
          "severity": "High",
          "score": 7.7,
          "published": "2026-06-23",
          "description": "Daytona is a secure and elastic infrastructure runtime for AI-generated code execution and agent workflows. Prior to 0.185.0, Daytona's organization role update and delete endpoints authorized the caller as an owner of the organization name",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2016-2165",
          "severity": "Medium",
          "score": 6.5,
          "published": "2017-05-25",
          "description": "The Loggregator Traffic Controller endpoints in cf-release v231 and lower, Pivotal Elastic Runtime versions prior to 1.5.19 AND 1.6.x versions prior to 1.6.20 are not cleansing request URL paths when they are invalid and are returning them ",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2022-38299",
          "severity": "Medium",
          "score": 4.3,
          "published": "2022-09-12",
          "description": "An issue in the Elasticsearch plugin of Appsmith v1.7.11 allows attackers to connect disallowed hosts to the AWS/GCP internal metadata endpoint.",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2023-46668",
          "severity": "Medium",
          "score": 4.6,
          "published": "2023-10-26",
          "description": "If Elastic Endpoint (v7.9.0 - v8.10.3) is configured to use a non-default option in which the logging level is explicitly set to debug, and when Elastic Agent is simultaneously configured to collect and send those logs to Elasticsearch, the",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2023-46669",
          "severity": "Medium",
          "score": 6.2,
          "published": "2025-05-01",
          "description": "Exposure of sensitive information to local unauthorized actors in Elastic Agent and Elastic Security Endpoint can lead to loss of confidentiality and impersonation of Endpoint to the Elastic Stack. This issue was identified by Elastic engin",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2023-46673",
          "severity": "Medium",
          "note": "Elastic Agent info leak",
          "source": "curated"
        },
        {
          "id": "CVE-2024-23451",
          "severity": "Medium",
          "score": 4.4,
          "published": "2024-03-27",
          "description": "Incorrect Authorization issue exists in the API key based security model for Remote Cluster Security, which is currently in Beta, in Elasticsearch 8.10.0 and before 8.13.0. This allows a malicious user with a valid API key for a remote clus",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2024-52797",
          "severity": "Medium",
          "score": 6.5,
          "published": "2024-11-21",
          "description": "Opencast is free and open source software for automated video capture and distribution. First noticed in Opencast 13 and 14, Opencast's Elasticsearch integration may generate syntactically invalid Elasticsearch queries in relation to previo",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2026-45009",
          "severity": "Medium",
          "score": 4.3,
          "published": "2026-05-15",
          "description": "phpMyFAQ before 4.1.2 contains an insufficient authorization vulnerability in admin-api routes that allows authenticated ordinary users to access administrative endpoints by only checking login status instead of verifying backend privileges",
          "note": "",
          "source": "nvd"
        }
      ],
      "incidents": [
        {
          "date": "2024-02",
          "title": "CVE-2024-23450 Elastic Kibana SSRF via integrations",
          "impact": "Server-side request forgery.",
          "url": "https://discuss.elastic.co/c/announcements/security-announcements/"
        },
        {
          "date": "2023-10",
          "title": "CVE-2023-46673 Elastic Agent info leak via Fleet",
          "impact": "Credenciales en logs sin cifrar.",
          "url": "https://discuss.elastic.co/c/announcements/security-announcements/"
        }
      ],
      "perOs": {
        "windows": {
          "present": true,
          "score": 72.8
        },
        "linux": {
          "present": true,
          "score": 64.7
        },
        "macos": {
          "present": true,
          "score": 40.8
        }
      }
    },
    {
      "id": "FortiEDR",
      "canonical": "FortiEDR",
      "name": "FortiEDR",
      "color": "#ee3124",
      "website": "https://www.fortinet.com/",
      "product": "FortiEDR",
      "productUrl": "https://www.fortinet.com/products/endpoint-security/fortiedr",
      "docsUrl": "https://docs.fortinet.com/product/fortiedr",
      "logo": "assets/logos/fortiedr.png",
      "gartner": "Visionary EPP 2024",
      "forrester": "Contender XDR",
      "ens": "Servicio gestionado Telefonica Tech Alta",
      "strengths": "Integracion con FortiGate/Security Fabric, buen precio bundle.",
      "cautions": "Historial de CVEs en otros productos Fortinet; exigir disciplina de parcheo.",
      "notableCves": [
        {
          "id": "CVE-2022-23441",
          "severity": "Critical",
          "score": 9.1,
          "published": "2022-04-06",
          "description": "A use of hard-coded cryptographic key vulnerability [CWE-321] in FortiEDR versions 5.0.2, 5.0.1, 5.0.0, 4.0.0 may allow an unauthenticated attacker on the network to disguise as and forge messages from other collectors.",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2024-23109",
          "severity": "Critical",
          "note": "FortiEDR web console auth bypass",
          "source": "curated"
        },
        {
          "id": "CVE-2022-23440",
          "severity": "High",
          "score": 7.8,
          "published": "2022-04-06",
          "description": "A use of hard-coded cryptographic key vulnerability [CWE-321] in the registration mechanism of FortiEDR collectors versions 5.0.2, 5.0.1, 5.0.0, 4.0.0 may allow a local attacker to disable and uninstall the collectors from the end-points wi",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2023-33303",
          "severity": "High",
          "score": 8.1,
          "published": "2023-10-13",
          "description": "A insufficient session expiration in Fortinet FortiEDR version 5.0.0 through 5.0.1 allows attacker to execute unauthorized code or commands via api request",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2022-23446",
          "severity": "Medium",
          "score": 4.4,
          "published": "2022-04-06",
          "description": "A improper control of a resource through its lifetime in Fortinet FortiEDR version 5.0.3 and earlier allows attacker to make the whole application unresponsive via changing its root directory access permission.",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2022-29057",
          "severity": "Medium",
          "score": 5.4,
          "published": "2022-07-19",
          "description": "A improper neutralization of input during web page generation ('cross-site scripting') in Fortinet FortiEDR version 5.1.0, 5.0.0 through 5.0.3 Patch 6 and 4.0.0 allows a remote authenticated attacker to perform a reflected cross site script",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2022-39949",
          "severity": "Medium",
          "score": 4.4,
          "published": "2022-11-02",
          "description": "An improper control of a resource through its lifetime vulnerability [CWE-664] in FortiEDR CollectorWindows 4.0.0 through 4.1, 5.0.0 through 5.0.3.751, 5.1.0 may allow a privileged user to terminate the FortiEDR processes with special tools",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2024-45323",
          "severity": "Medium",
          "score": 4.3,
          "published": "2024-09-10",
          "description": "An improper access control vulnerability [CWE-284] in FortiEDR Manager API 6.2.0 through 6.2.2, 6.0 all versions may allow in a shared environment context an authenticated admin with REST API permissions in his profile and restricted to a s",
          "note": "",
          "source": "nvd"
        }
      ],
      "incidents": [
        {
          "date": "2024-10",
          "title": "Oleada de CVEs criticos en FortiManager explotados ITW",
          "impact": "Afecta confianza general ecosistema Fortinet.",
          "url": "https://www.fortinet.com/blog/psirt-blogs"
        },
        {
          "date": "2024-02-08",
          "title": "CVE-2024-23109 FortiEDR auth bypass admin",
          "impact": "CVSS 9.8 critical. Bypass autenticacion consola.",
          "url": "https://fortiguard.fortinet.com/psirt/FG-IR-23-153"
        }
      ],
      "perOs": {
        "windows": {
          "present": true,
          "score": 47.9
        },
        "linux": {
          "present": false,
          "score": 0
        },
        "macos": {
          "present": false,
          "score": 0
        }
      }
    },
    {
      "id": "Harfanglab",
      "canonical": "Harfanglab",
      "name": "Harfanglab",
      "color": "#ff6b35",
      "website": "https://harfanglab.io/",
      "product": "Harfanglab EDR",
      "productUrl": "https://harfanglab.io/en/our-solutions/",
      "docsUrl": "https://docs.harfanglab.io/",
      "logo": "assets/logos/harfanglab.png",
      "gartner": "No participa en MQ 2024",
      "forrester": "No listado",
      "ens": "SecNumCloud (FR); homologable ENS via integrador",
      "strengths": "EDR frances soberano, ANSSI qualified, fuerte en entornos regulados UE.",
      "cautions": "Base instalada y ecosistema mas pequeño que Leaders.",
      "notableCves": [],
      "incidents": [
        {
          "date": "2024-12",
          "title": "Integracion directa con Sekoia.io XDR platform",
          "impact": "Refuerza ecosistema UE soberano.",
          "url": "https://www.sekoia.io/en/partners/"
        },
        {
          "date": "2024-06",
          "title": "Renovacion ANSSI qualification standard",
          "impact": "Unico EDR con qualification Standard ANSSI en Francia, clave para sector publico UE.",
          "url": "https://cyber.gouv.fr/produits-certifies/harfanglab-edr"
        },
        {
          "date": "2023-10",
          "title": "Levantamiento de 25M EUR Serie B liderado por Crescendo Ventures",
          "impact": "Expansion internacional y reforzar desarrollo. Valoracion Unicornio candidato soberano UE.",
          "url": "https://harfanglab.io/en/about-us/news/"
        }
      ],
      "perOs": {
        "windows": {
          "present": true,
          "score": 80.0
        },
        "linux": {
          "present": true,
          "score": 35.3
        },
        "macos": {
          "present": false,
          "score": 0
        }
      }
    },
    {
      "id": "LimaCharlie",
      "canonical": "LimaCharlie",
      "name": "LimaCharlie",
      "color": "#00b4d8",
      "website": "https://www.limacharlie.io/",
      "product": "LimaCharlie SecOps Platform",
      "productUrl": "https://www.limacharlie.io/",
      "docsUrl": "https://docs.limacharlie.io/",
      "logo": "assets/logos/limacharlie.png",
      "gartner": "No participa",
      "forrester": "No listado",
      "ens": "No evidenciado",
      "strengths": "Usage-based pricing, API-first, ideal MSSPs y constructores.",
      "cautions": "No es turnkey, exige SOC que sepa construir detecciones.",
      "notableCves": [],
      "incidents": [
        {
          "date": "2025-03",
          "title": "Soporte nativo macOS Endpoint Security framework ampliado",
          "impact": "Mejora paridad entre Windows y macOS.",
          "url": "https://docs.limacharlie.io/"
        },
        {
          "date": "2024-05",
          "title": "Lanzamiento del modulo Service Providers",
          "impact": "Plataforma consolidada para MSSPs y fabricantes de MDR.",
          "url": "https://www.limacharlie.io/blog"
        },
        {
          "date": "2023-09",
          "title": "Serie A de 10.2M USD liderada por Mayfield",
          "impact": "Capital para escalar SecOps Cloud Platform usage-based.",
          "url": "https://www.limacharlie.io/news"
        }
      ],
      "perOs": {
        "windows": {
          "present": true,
          "score": 64.6
        },
        "linux": {
          "present": true,
          "score": 42.6
        },
        "macos": {
          "present": true,
          "score": 31.4
        }
      }
    },
    {
      "id": "MDE",
      "canonical": "MDE",
      "name": "MDE",
      "color": "#0078d4",
      "website": "https://www.microsoft.com/en-us/security/business/endpoint-security/microsoft-defender-endpoint",
      "product": "Microsoft Defender for Endpoint",
      "productUrl": "https://learn.microsoft.com/en-us/defender-endpoint/",
      "docsUrl": "https://learn.microsoft.com/en-us/defender-endpoint/",
      "logo": "assets/logos/defender.jpg",
      "gartner": "Leader EPP 2024",
      "forrester": "Leader XDR Q2 2024",
      "ens": "Microsoft 365 con ENS Alta vinculado",
      "strengths": "Integracion nativa Windows + Entra ID, telemetria profunda sin agente extra, licencia Microsoft 365 E5.",
      "cautions": "Mejor en Windows que en Linux/macOS, dependencia de Microsoft cloud.",
      "notableCves": [
        {
          "id": "CVE-2011-0037",
          "severity": "High",
          "score": 7.2,
          "published": "2011-02-25",
          "description": "Microsoft Malware Protection Engine before 1.1.6603.0, as used in Microsoft Malicious Software Removal Tool (MSRT), Windows Defender, Security Essentials, Forefront Client Security, Forefront Endpoint Protection 2010, and Windows Live OneCa",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2018-0986",
          "severity": "High",
          "score": 8.8,
          "published": "2018-04-04",
          "description": "A remote code execution vulnerability exists when the Microsoft Malware Protection Engine does not properly scan a specially crafted file, leading to memory corruption, aka \"Microsoft Malware Protection Engine Remote Code Execution Vulnerab",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2021-40444",
          "severity": "High",
          "score": 8.8,
          "published": "2021-09-15",
          "description": "Microsoft is investigating reports of a remote code execution vulnerability in MSHTML that affects Microsoft Windows. Microsoft is aware of targeted attacks that attempt to exploit this vulnerability by using specially-crafted Microsoft Off",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2022-35828",
          "severity": "High",
          "score": 7.8,
          "published": "2022-09-13",
          "description": "Microsoft Defender for Endpoint for Mac Elevation of Privilege Vulnerability",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2023-21809",
          "severity": "High",
          "score": 7.8,
          "published": "2023-02-14",
          "description": "Microsoft Defender for Endpoint Security Feature Bypass Vulnerability",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2024-21315",
          "severity": "High",
          "score": 7.8,
          "published": "2024-02-13",
          "description": "Microsoft Defender for Endpoint Protection Elevation of Privilege Vulnerability",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2024-29053",
          "severity": "High",
          "note": "Defender for IoT RCE",
          "source": "curated"
        },
        {
          "id": "CVE-2024-49057",
          "severity": "High",
          "score": 8.1,
          "published": "2024-12-12",
          "description": "Microsoft Defender for Endpoint on Android Spoofing Vulnerability",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2025-47161",
          "severity": "High",
          "score": 7.8,
          "published": "2025-05-15",
          "description": "Improper access control in Microsoft Defender for Endpoint allows an authorized attacker to elevate privileges locally.",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2020-17090",
          "severity": "Medium",
          "score": 5.3,
          "published": "2020-11-11",
          "description": "Microsoft Defender for Endpoint Security Feature Bypass Vulnerability",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2022-23278",
          "severity": "Medium",
          "score": 5.9,
          "published": "2022-03-09",
          "description": "Microsoft Defender for Endpoint Spoofing Vulnerability",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2022-33637",
          "severity": "Medium",
          "score": 6.5,
          "published": "2022-07-12",
          "description": "Microsoft Defender for Endpoint Tampering Vulnerability",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2023-24934",
          "severity": "Medium",
          "note": "Defender SmartScreen bypass",
          "source": "curated"
        },
        {
          "id": "CVE-2024-43614",
          "severity": "Medium",
          "score": 5.5,
          "published": "2024-10-08",
          "description": "Relative path traversal in Microsoft Defender for Endpoint allows an authorized attacker to perform spoofing locally.",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2025-26684",
          "severity": "Medium",
          "score": 6.7,
          "published": "2025-05-13",
          "description": "External control of file name or path in Microsoft Defender for Endpoint allows an authorized attacker to elevate privileges locally.",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2026-45647",
          "severity": "Medium",
          "score": 5.5,
          "published": "2026-06-09",
          "description": "Time-of-check time-of-use (toctou) race condition in Microsoft Defender for Endpoint allows an authorized attacker to elevate privileges locally.",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2026-56178",
          "severity": "Medium",
          "score": 5.5,
          "published": "2026-07-14",
          "description": "Time-of-check time-of-use (toctou) race condition in Microsoft Defender for Endpoint allows an authorized attacker to elevate privileges locally.",
          "note": "",
          "source": "nvd"
        }
      ],
      "incidents": [
        {
          "date": "2024-02-15",
          "title": "Midnight Blizzard (APT29) penetra Microsoft corporate",
          "impact": "Rusia compromete cuentas ejecutivas y exfiltra correo. Levanta dudas sobre postura security del propio Microsoft.",
          "url": "https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-057a"
        },
        {
          "date": "2023-07-11",
          "title": "Storm-0558 roba claves OWA/Outlook.com y accede a buzones gubernamentales USA",
          "impact": "Incidente major de supply chain identity en la nube Microsoft.",
          "url": "https://msrc.microsoft.com/blog/2023/07/microsoft-mitigates-china-based-threat-actor-storm-0558-targeting-of-customer-email/"
        },
        {
          "date": "2023-03-07",
          "title": "Bug en update de firmas marco Office como malware",
          "impact": "Falsos positivos masivos Office/OneDrive"
        },
        {
          "date": "2023-03-07",
          "title": "Update de firmas marco Office como malware",
          "impact": "Falsos positivos masivos Office/OneDrive en organizaciones globales.",
          "url": "https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/"
        }
      ],
      "perOs": {
        "windows": {
          "present": true,
          "score": 75.1
        },
        "linux": {
          "present": true,
          "score": 42.4
        },
        "macos": {
          "present": true,
          "score": 28.8
        }
      }
    },
    {
      "id": "OpenEDR",
      "canonical": "OpenEDR",
      "name": "OpenEDR",
      "color": "#1e90ff",
      "website": "https://www.openedr.com/",
      "product": "Comodo OpenEDR",
      "productUrl": "https://www.openedr.com/",
      "docsUrl": "https://github.com/ComodoSecurity/openedr",
      "logo": "assets/logos/openedr.ico",
      "gartner": "No participa",
      "forrester": "N/A",
      "ens": "N/A - open source",
      "strengths": "Open source, gratuito, auditable.",
      "cautions": "Comunidad pequeña, soporte limitado, respuesta manual.",
      "notableCves": [],
      "incidents": [
        {
          "date": "2024",
          "title": "Mantenimiento irregular, forks activos de la comunidad",
          "impact": "Atencion a estado del upstream antes de despliegue productivo.",
          "url": "https://github.com/ComodoSecurity/openedr/pulse"
        },
        {
          "date": "2021-11",
          "title": "Comodo libera codigo bajo licencia GPL en GitHub",
          "impact": "Proyecto comunitario open source, auditable.",
          "url": "https://github.com/ComodoSecurity/openedr"
        }
      ],
      "perOs": {
        "windows": {
          "present": true,
          "score": 22.8
        },
        "linux": {
          "present": false,
          "score": 0
        },
        "macos": {
          "present": false,
          "score": 0
        }
      }
    },
    {
      "id": "Padvish XDR",
      "canonical": "Padvish XDR",
      "name": "Padvish XDR",
      "color": "#12a150",
      "website": "https://padvish.com/",
      "product": "Padvish XDR",
      "productUrl": "https://padvish.com/en/products/padvish-xdr/",
      "docsUrl": "https://padvish.com/en/documents/",
      "logo": "assets/logos/padvish.png",
      "gartner": "No participa",
      "forrester": "N/A",
      "ens": "No aplica (producto irani)",
      "strengths": "EDR irani soberano.",
      "cautions": "Fuera del alcance habitual en UE; sanciones y vendor risk.",
      "notableCves": [],
      "incidents": [
        {
          "date": "2023",
          "title": "Producto disponible para uso gubernamental en Iran",
          "impact": "Presencia regional limitada, vendor risk UE/USA elevado.",
          "url": "https://padvish.com/"
        },
        {
          "date": "2019",
          "title": "Amnpardaz (Padvish) en lista de sanciones OFAC/US Treasury",
          "impact": "Vendor iraniano sujeto a sanciones USA. No desplegable en organizaciones sometidas a OFAC.",
          "url": "https://ofac.treasury.gov/"
        }
      ],
      "perOs": {
        "windows": {
          "present": true,
          "score": 65.8
        },
        "linux": {
          "present": false,
          "score": 0
        },
        "macos": {
          "present": false,
          "score": 0
        }
      }
    },
    {
      "id": "Phorion",
      "canonical": "Phorion",
      "name": "Phorion",
      "color": "#2d3436",
      "website": "https://phorion.com/",
      "product": "Phorion EDR for macOS",
      "productUrl": "https://phorion.com/",
      "docsUrl": "https://phorion.com/",
      "logo": "assets/logos/phorion.svg",
      "gartner": "No participa",
      "forrester": "N/A",
      "ens": "No evidenciado",
      "strengths": "Especializado macOS, uso extension Endpoint Security API.",
      "cautions": "Nicho, documentacion limitada.",
      "notableCves": [],
      "incidents": [
        {
          "date": "2024",
          "title": "Focus exclusivo macOS con Apple Endpoint Security API",
          "impact": "Nicho de mercado, ideal empresas mac-only, cobertura limitada en Windows/Linux.",
          "url": "https://phorion.com/"
        }
      ],
      "perOs": {
        "windows": {
          "present": false,
          "score": 0
        },
        "linux": {
          "present": false,
          "score": 0
        },
        "macos": {
          "present": true,
          "score": 78.8
        }
      }
    },
    {
      "id": "Qualys",
      "canonical": "Qualys",
      "name": "Qualys",
      "color": "#ed1c24",
      "website": "https://www.qualys.com/",
      "product": "Qualys EDR",
      "productUrl": "https://www.qualys.com/apps/endpoint-detection-response/",
      "docsUrl": "https://docs.qualys.com/",
      "logo": "assets/logos/qualys.ico",
      "gartner": "Niche EPP 2024",
      "forrester": "No listado XDR",
      "ens": "No evidenciado",
      "strengths": "Plataforma unificada con VMDR (Vulnerabilities + EDR), agente unico.",
      "cautions": "EDR es modulo secundario; maduro en VM, aun crecimiento en deteccion.",
      "notableCves": [
        {
          "id": "CVE-2022-29549",
          "severity": "High",
          "score": 7.3,
          "published": "2022-08-18",
          "description": "An issue was discovered in Qualys Cloud Agent 4.8.0-49. It executes programs at various full pathnames without first making ownership and permission checks (e.g., to help ensure that a program was installed by root) and without integrity ch",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2022-29550",
          "severity": "Medium",
          "score": 5.5,
          "published": "2022-08-18",
          "description": "An issue was discovered in Qualys Cloud Agent 4.8.0-49. It writes \"ps auxwwe\" output to the /var/log/qualys/qualys-cloud-agent-scan.log file. This may, for example, unexpectedly write credentials (from environment variables) to disk in clea",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2023-28140",
          "severity": "Medium",
          "score": 6.7,
          "published": "2023-04-18",
          "description": "\nAn Executable Hijacking condition exists in the\nQualys Cloud Agent for Windows platform in versions before 4.5.3.1. Attackers\nmay load a malicious copy of a Dependency Link Library (DLL) via a local\nattack vector instead of the DLL that th",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2023-28141",
          "severity": "Medium",
          "score": 6.7,
          "published": "2023-04-18",
          "description": "\nAn NTFS Junction condition exists in the Qualys Cloud Agent\nfor Windows platform in versions before 4.8.0.31. Attackers may write files to\narbitrary locations via a local attack vector. This allows attackers to assume\nthe privileges of the",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2023-28142",
          "severity": "Medium",
          "score": 6.7,
          "published": "2023-04-18",
          "description": "\nA Race Condition exists in the Qualys Cloud Agent for Windows\nplatform in versions from 3.1.3.34 and before 4.5.3.1. This allows attackers to\nescalate privileges limited on the local machine during uninstallation of the\nQualys Cloud Agent ",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2023-28143",
          "severity": "Medium",
          "score": 6.7,
          "published": "2023-04-18",
          "description": "\nQualys Cloud Agent for macOS (versions 2.5.1-75 before 3.7)\ninstaller allows a local escalation of privilege bounded only to the time of\ninstallation and only on older macOSX (macOS 10.15 and older) versions.\nAttackers may exploit incorrec",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2025-43079",
          "severity": "Medium",
          "score": 6.3,
          "published": "2025-11-10",
          "description": "The Qualys Cloud Agent included a bundled uninstall script (qagent_uninstall.sh), specific to Mac and Linux supported versions that invoked multiple system commands without using absolute paths and without sanitizing the $PATH environment. ",
          "note": "",
          "source": "nvd"
        }
      ],
      "incidents": [
        {
          "date": "2024-07",
          "title": "CVE-2024-6387 'regreSSHion' OpenSSH afecta Qualys SSH scans",
          "impact": "RCE remoto pre-auth en OpenSSH, descubierta por Qualys Threat Research.",
          "url": "https://blog.qualys.com/vulnerabilities-threat-research/2024/07/01/regresshion-remote-unauthenticated-code-execution-vulnerability-in-openssh-server"
        }
      ],
      "perOs": {
        "windows": {
          "present": true,
          "score": 60.7
        },
        "linux": {
          "present": true,
          "score": 32.9
        },
        "macos": {
          "present": true,
          "score": 18.6
        }
      }
    },
    {
      "id": "SentinelOne",
      "canonical": "SentinelOne",
      "name": "SentinelOne",
      "color": "#6e2ee6",
      "website": "https://www.sentinelone.com/",
      "product": "Singularity XDR",
      "productUrl": "https://www.sentinelone.com/platform/",
      "docsUrl": "https://community.sentinelone.com/s/documentation",
      "logo": "assets/logos/sentinelone.png",
      "gartner": "Leader EPP 2024",
      "forrester": "Strong Performer XDR Q2 2024",
      "ens": "No evidenciado publicamente",
      "strengths": "Autonomia IA en endpoint, rollback de ransomware, buen soporte Linux y Kubernetes.",
      "cautions": "Consola compleja, validar coste de modulos (Ranger, Cloud, Identity).",
      "notableCves": [
        {
          "id": "CVE-2023-47274",
          "severity": "High",
          "note": "Escalada de privilegios agente Windows",
          "source": "curated"
        }
      ],
      "incidents": [
        {
          "date": "2025-01",
          "title": "Vulnerabilidad divulgada en agente Windows LPE",
          "impact": "CVE-2023-47274 publico - escalada de privilegios local.",
          "url": "https://www.sentinelone.com/blog/"
        }
      ],
      "perOs": {
        "windows": {
          "present": true,
          "score": 77.4
        },
        "linux": {
          "present": true,
          "score": 52.9
        },
        "macos": {
          "present": false,
          "score": 0
        }
      }
    },
    {
      "id": "Symantec SES Complete",
      "canonical": "Symantec SES Complete",
      "name": "Symantec SES Complete",
      "color": "#ffc82c",
      "website": "https://www.broadcom.com/products/cybersecurity/endpoint",
      "product": "Symantec Endpoint Security Complete",
      "productUrl": "https://www.broadcom.com/products/cybersecurity/endpoint/end-user/complete",
      "docsUrl": "https://techdocs.broadcom.com/us/en/symantec-security-software/endpoint-security.html",
      "logo": "assets/logos/symantec.png",
      "gartner": "Niche EPP 2024",
      "forrester": "Contender XDR",
      "ens": "ENS Alta via integradores",
      "strengths": "Base instalada grande, integracion con stack Broadcom.",
      "cautions": "Roadmap lento, UX heredada.",
      "notableCves": [
        {
          "id": "CVE-2009-1429",
          "severity": "High",
          "score": 10.0,
          "published": "2009-04-29",
          "description": "The Intel LANDesk Common Base Agent (CBA) in Symantec Alert Management System 2 (AMS2), as used in Symantec System Center (SSS); Symantec AntiVirus Server; Symantec AntiVirus Central Quarantine Server; Symantec AntiVirus (SAV) Corporate Edi",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2009-1430",
          "severity": "High",
          "score": 9.3,
          "published": "2009-04-29",
          "description": "Multiple stack-based buffer overflows in IAO.EXE in the Intel Alert Originator Service in Symantec Alert Management System 2 (AMS2), as used in Symantec System Center (SSS); Symantec AntiVirus Server; Symantec AntiVirus Central Quarantine S",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2009-1431",
          "severity": "High",
          "score": 9.3,
          "published": "2009-04-29",
          "description": "XFR.EXE in the Intel File Transfer service in the console in Symantec Alert Management System 2 (AMS2), as used in Symantec System Center (SSS); Symantec AntiVirus Server; Symantec AntiVirus Central Quarantine Server; Symantec AntiVirus (SA",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2010-0114",
          "severity": "High",
          "score": 7.5,
          "published": "2010-12-22",
          "description": "fw_charts.php in the reporting module in the Manager (aka SEPM) component in Symantec Endpoint Protection (SEP) 11.x before 11 RU6 MP2 allows remote attackers to bypass intended restrictions on report generation, overwrite arbitrary PHP scr",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2023-38693",
          "severity": "High",
          "note": "SEP client LPE",
          "source": "curated"
        },
        {
          "id": "CVE-2009-1428",
          "severity": "Medium",
          "score": 4.3,
          "published": "2009-04-29",
          "description": "Multiple cross-site scripting (XSS) vulnerabilities in ccLgView.exe in the Symantec Log Viewer, as used in Symantec AntiVirus (SAV) before 10.1 MR8, Symantec Endpoint Protection (SEP) 11.0 before 11.0 MR1, Norton 360 1.0, and Norton Interne",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2009-1432",
          "severity": "Medium",
          "score": 5.0,
          "published": "2009-04-30",
          "description": "Symantec Reporting Server, as used in Symantec AntiVirus (SAV) Corporate Edition 10.1 before 10.1 MR8 and 10.2 before 10.2 MR2, Symantec Client Security (SCS) before 3.1 MR8, and the Symantec Endpoint Protection Manager (SEPM) component in ",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2010-3268",
          "severity": "Medium",
          "score": 5.0,
          "published": "2010-12-22",
          "description": "The GetStringAMSHandler function in prgxhndl.dll in hndlrsvc.exe in the Intel Alert Handler service (aka Symantec Intel Handler service) in Intel Alert Management System (AMS), as used in Symantec Antivirus Corporate Edition 10.1.4.4010 on ",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2011-0550",
          "severity": "Medium",
          "score": 4.3,
          "published": "2011-08-15",
          "description": "Multiple cross-site scripting (XSS) vulnerabilities in the Web Interface in the Endpoint Protection Manager in Symantec Endpoint Protection (SEP) 11.0.600x through 11.0.6300 allow remote attackers to inject arbitrary web script or HTML via ",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2011-0551",
          "severity": "Medium",
          "score": 6.8,
          "published": "2011-08-15",
          "description": "Cross-site request forgery (CSRF) vulnerability in the Web Interface in the Endpoint Protection Manager in Symantec Endpoint Protection (SEP) 11.0.600x through 11.0.6300 allows remote attackers to hijack the authentication of administrators",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2012-1421",
          "severity": "Medium",
          "score": 4.3,
          "published": "2012-03-21",
          "description": "The TAR file parser in Quick Heal (aka Cat QuickHeal) 11.00, Norman Antivirus 6.06.12, Rising Antivirus 22.83.00.03, and AVEngine 20101.3.0.103 in Symantec Endpoint Protection 11 allows remote attackers to bypass malware detection via a POS",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2012-1425",
          "severity": "Medium",
          "score": 4.3,
          "published": "2012-03-21",
          "description": "The TAR file parser in Avira AntiVir 7.11.1.163, Antiy Labs AVL SDK 2.0.3.7, Quick Heal (aka Cat QuickHeal) 11.00, Emsisoft Anti-Malware 5.1.0.1, Fortinet Antivirus 4.2.254.0, Ikarus Virus Utilities T3 Command Line Scanner 1.1.97.0, Jiangmi",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2012-1443",
          "severity": "Medium",
          "score": 4.3,
          "published": "2012-03-21",
          "description": "The RAR file parser in ClamAV 0.96.4, Rising Antivirus 22.83.00.03, Quick Heal (aka Cat QuickHeal) 11.00, G Data AntiVirus 21, AVEngine 20101.3.0.103 in Symantec Endpoint Protection 11, Command Antivirus 5.2.11.5, Ikarus Virus Utilities T3 ",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2012-1446",
          "severity": "Medium",
          "score": 4.3,
          "published": "2012-03-21",
          "description": "The ELF file parser in Quick Heal (aka Cat QuickHeal) 11.00, McAfee Anti-Virus Scanning Engine 5.400.0.1158, AVEngine 20101.3.0.103 in Symantec Endpoint Protection 11, Norman Antivirus 6.06.12, eSafe 7.0.17.0, Kaspersky Anti-Virus 7.0.0.125",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2012-1456",
          "severity": "Medium",
          "score": 4.3,
          "published": "2012-03-21",
          "description": "The TAR file parser in AVG Anti-Virus 10.0.0.1190, Quick Heal (aka Cat QuickHeal) 11.00, Comodo Antivirus 7424, Emsisoft Anti-Malware 5.1.0.1, eSafe 7.0.17.0, F-Prot Antivirus 4.6.2.117, Fortinet Antivirus 4.2.254.0, Ikarus Virus Utilities ",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2012-1457",
          "severity": "Medium",
          "score": 4.3,
          "published": "2012-03-21",
          "description": "The TAR file parser in Avira AntiVir 7.11.1.163, Antiy Labs AVL SDK 2.0.3.7, avast! Antivirus 4.8.1351.0 and 5.0.677.0, AVG Anti-Virus 10.0.0.1190, Bitdefender 7.2, Quick Heal (aka Cat QuickHeal) 11.00, ClamAV 0.96.4, Command Antivirus 5.2.",
          "note": "",
          "source": "nvd"
        }
      ],
      "incidents": [
        {
          "date": "2023-08",
          "title": "CVE-2023-38693 SEP client LPE",
          "impact": "Escalada privilegios en cliente Windows.",
          "url": "https://support.broadcom.com/web/ecx/support-content-notification/"
        }
      ],
      "perOs": {
        "windows": {
          "present": true,
          "score": 47.4
        },
        "linux": {
          "present": false,
          "score": 0
        },
        "macos": {
          "present": false,
          "score": 0
        }
      }
    },
    {
      "id": "Sysmon",
      "canonical": "Sysmon",
      "name": "Sysmon",
      "color": "#5c5c5c",
      "website": "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon",
      "product": "Sysinternals Sysmon",
      "productUrl": "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon",
      "docsUrl": "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon",
      "logo": "assets/logos/sysmon.png",
      "gartner": "Herramienta complementaria",
      "forrester": "N/A",
      "ens": "No es EDR; componente de logging",
      "strengths": "Gratis, gold standard para enriquecer logs Windows, configurable.",
      "cautions": "No es EDR: no bloquea, no responde. Solo telemetria.",
      "notableCves": [
        {
          "id": "CVE-2014-8835",
          "severity": "High",
          "score": 9.3,
          "published": "2015-01-30",
          "description": "The xpc_data_get_bytes function in libxpc in Apple OS X before 10.10.2 does not verify that a dictionary's Attributes key has the xpc_data data type, which allows attackers to execute arbitrary code by providing a crafted dictionary to sysm",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2022-28214",
          "severity": "High",
          "score": 7.8,
          "published": "2022-05-11",
          "description": "During an update of SAP BusinessObjects Enterprise, Central Management Server (CMS) - versions 420, 430, authentication credentials are being exposed in Sysmon event logs. This Information Disclosure could cause a high impact on systems’ Co",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2023-29343",
          "severity": "High",
          "score": 7.8,
          "published": "2023-05-09",
          "description": "SysInternals Sysmon for Windows Elevation of Privilege Vulnerability",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2025-52574",
          "severity": "High",
          "score": 7.5,
          "published": "2025-06-24",
          "description": "SysmonElixir is a system monitor HTTP service in Elixir. Prior to version 1.0.1, the /read endpoint reads any file from the server's /etc/passwd by default. In v1.0.1, a whitelist was added that limits reading to only files under priv/data.",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2022-50836",
          "severity": "Unknown",
          "score": null,
          "published": "2025-12-30",
          "description": "In the Linux kernel, the following vulnerability has been resolved:\n\nremoteproc: sysmon: fix memory leak in qcom_add_sysmon_subdev()\n\nThe kfree() should be called when of_irq_get_byname() fails or\ndevm_request_threaded_irq() fails in qcom_a",
          "note": "",
          "source": "nvd"
        }
      ],
      "incidents": [
        {
          "date": "2023-05",
          "title": "CVE-2023-29343 Sysmon EoP Windows",
          "impact": "Elevacion privilegios. Microsoft parchea via Windows Update.",
          "url": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2023-29343"
        }
      ],
      "perOs": {
        "windows": {
          "present": true,
          "score": 47.4
        },
        "linux": {
          "present": true,
          "score": 29.4
        },
        "macos": {
          "present": false,
          "score": 0
        }
      }
    },
    {
      "id": "Trellix",
      "canonical": "Trellix",
      "name": "Trellix",
      "color": "#ff5e1a",
      "website": "https://www.trellix.com/",
      "product": "Trellix Endpoint Security",
      "productUrl": "https://www.trellix.com/en-us/products/endpoint-security.html",
      "docsUrl": "https://docs.trellix.com/",
      "logo": "assets/logos/trellix.ico",
      "gartner": "Leader EPP 2024",
      "forrester": "Contender XDR",
      "ens": "ENS Alta via servicio gestionado",
      "strengths": "Legacy McAfee + FireEye, base instalada enorme, bueno en government.",
      "cautions": "Fase de integracion post-fusion, dos consolas conviviendo aun.",
      "notableCves": [
        {
          "id": "CVE-2022-2443",
          "severity": "High",
          "note": "Trellix Agent LPE",
          "source": "curated"
        },
        {
          "id": "CVE-2023-4814",
          "severity": "High",
          "score": 7.1,
          "published": "2023-09-14",
          "description": "\nA Privilege escalation vulnerability exists in Trellix Windows DLP endpoint for windows which can be abused to delete any file/folder for which the user does not have permission to.\n\n",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2022-4326",
          "severity": "Medium",
          "score": 5.5,
          "published": "2022-12-16",
          "description": "Improper preservation of permissions vulnerability in Trellix Endpoint Agent (xAgent) prior to V35.31.22 on Windows allows a local user with administrator privileges to bypass the product protection to uninstall the agent via incorrectly ap",
          "note": "",
          "source": "nvd"
        }
      ],
      "incidents": [
        {
          "date": "2024-03",
          "title": "Trellix adquiere Magnet Forensics spinoff de investigacion",
          "impact": "Consolidacion portfolio, riesgo de churn en soporte legacy.",
          "url": "https://www.trellix.com/news/"
        },
        {
          "date": "2022-08",
          "title": "CVE-2022-2443 Trellix Agent LPE",
          "impact": "Vulnerabilidad heredada de McAfee Agent.",
          "url": "https://kcm.trellix.com/corporate/index?page=content&id=SB10380"
        }
      ],
      "perOs": {
        "windows": {
          "present": true,
          "score": 59.6
        },
        "linux": {
          "present": false,
          "score": 0
        },
        "macos": {
          "present": false,
          "score": 0
        }
      }
    },
    {
      "id": "Trend Micro",
      "canonical": "Trend Micro",
      "name": "Trend Micro",
      "color": "#d71921",
      "website": "https://www.trendmicro.com/",
      "product": "Vision One / Apex One",
      "productUrl": "https://www.trendmicro.com/en_us/business/products/endpoint-security.html",
      "docsUrl": "https://docs.trendmicro.com/",
      "logo": "assets/logos/trend-micro.ico",
      "gartner": "Leader EPP 2024",
      "forrester": "Strong Performer XDR Q2 2024",
      "ens": "ENS Alta via integradores",
      "strengths": "XDR cross-layer (endpoint + email + cloud + network), fuerte en Japon/LATAM.",
      "cautions": "UI con deuda tecnica, validar cobertura real en Linux.",
      "notableCves": [
        {
          "id": "CVE-2019-18189",
          "severity": "Critical",
          "score": 9.8,
          "published": "2019-10-28",
          "description": "A directory traversal vulnerability in Trend Micro Apex One, OfficeScan (11.0, XG) and Worry-Free Business Security (9.5, 10.0) may allow an attacker to bypass authentication and log on to an affected product's management console as a root ",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2020-8598",
          "severity": "Critical",
          "score": 9.8,
          "published": "2020-03-18",
          "description": "Trend Micro Apex One (2019), OfficeScan XG and Worry-Free Business Security (9.0, 9.5, 10.0) server contains a vulnerable service DLL file that could allow a remote attacker to execute arbitrary code on affected installations with SYSTEM le",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2020-8599",
          "severity": "Critical",
          "score": 9.8,
          "published": "2020-03-18",
          "description": "Trend Micro Apex One (2019) and OfficeScan XG server contain a vulnerable EXE file that could allow a remote attacker to write arbitrary data to an arbitrary path on affected installations and bypass ROOT login. Authentication is not requir",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2023-41179",
          "severity": "Critical",
          "note": "Apex One arbitrary code execution",
          "source": "curated"
        },
        {
          "id": "CVE-2019-18188",
          "severity": "High",
          "score": 7.5,
          "published": "2019-10-28",
          "description": "Trend Micro Apex One could be exploited by an attacker utilizing a command injection vulnerability to extract files from an arbitrary zip file to a specific folder on the Apex One server, which could potentially lead to remote code executio",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2019-9489",
          "severity": "High",
          "score": 7.5,
          "published": "2019-04-05",
          "description": "A directory traversal vulnerability in Trend Micro Apex One, OfficeScan (versions XG and 11.0), and Worry-Free Business Security (versions 10.0, 9.5 and 9.0) could allow an attacker to modify arbitrary files on the affected product's manage",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2020-24556",
          "severity": "High",
          "score": 7.8,
          "published": "2020-09-01",
          "description": "A vulnerability in Trend Micro Apex One, OfficeScan XG SP1, Worry-Free Business Security 10 SP1 and Worry-Free Business Security Services on Microsoft Windows may allow an attacker to create a hard link to any file on the system, which then",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2020-24557",
          "severity": "High",
          "score": 7.8,
          "published": "2020-09-01",
          "description": "A vulnerability in Trend Micro Apex One and Worry-Free Business Security 10.0 SP1 on Microsoft Windows may allow an attacker to manipulate a particular product folder to disable the security temporarily, abuse a specific Windows function an",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2020-24558",
          "severity": "High",
          "score": 7.1,
          "published": "2020-09-01",
          "description": "A vulnerability in an Trend Micro Apex One, Worry-Free Business Security 10.0 SP1 and Worry-Free Business Security Services dll may allow an attacker to manipulate it to cause an out-of-bounds read that crashes multiple processes in the pro",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2020-24559",
          "severity": "High",
          "score": 7.8,
          "published": "2020-09-01",
          "description": "A vulnerability in Trend Micro Apex One, Worry-Free Business Security 10.0 SP1 and Worry-Free Business Security Services on macOS may allow an attacker to manipulate a certain binary to load and run a script from a user-writable folder, whi",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2020-24563",
          "severity": "High",
          "score": 7.8,
          "published": "2020-09-29",
          "description": "A vulnerability in Trend Micro Apex One may allow a local attacker to manipulate the process of the security agent unload option (if configured), which then could be manipulated to gain a privilege escalation and code execution. An attacker",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2020-8467",
          "severity": "High",
          "score": 8.8,
          "published": "2020-03-18",
          "description": "A migration tool component of Trend Micro Apex One (2019) and OfficeScan XG contains a vulnerability which could allow remote attackers to execute arbitrary code on affected installations (RCE). An attempted attack requires user authenticat",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2020-8468",
          "severity": "High",
          "score": 8.8,
          "published": "2020-03-18",
          "description": "Trend Micro Apex One (2019), OfficeScan XG and Worry-Free Business Security (9.0, 9.5, 10.0) agents are affected by a content validation escape vulnerability which could allow an attacker to manipulate certain agent client components. An at",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2020-8470",
          "severity": "High",
          "score": 7.5,
          "published": "2020-03-18",
          "description": "Trend Micro Apex One (2019), OfficeScan XG and Worry-Free Business Security (9.0, 9.5, 10.0) server contains a vulnerable service DLL file that could allow an attacker to delete any file on the server with SYSTEM level privileges. Authentic",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2019-19691",
          "severity": "Medium",
          "score": 4.9,
          "published": "2019-12-20",
          "description": "A vulnerability in Trend Micro Apex One and OfficeScan XG could allow an attacker to expose a masked credential key by manipulating page elements using development tools. Note that the attacker must already have admin/root privileges on the",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2019-19692",
          "severity": "Medium",
          "score": 6.1,
          "published": "2019-12-20",
          "description": "Trend Micro Apex One (2019) is affected by a cross-site scripting (XSS) vulnerability on the product console. Note that the Japanese version of the product is NOT affected.",
          "note": "",
          "source": "nvd"
        }
      ],
      "incidents": [
        {
          "date": "2024-11",
          "title": "CVE-2024-51503 Apex One RCE 9.1 critico",
          "impact": "Patch de emergencia requerido.",
          "url": "https://success.trendmicro.com/dcx/s/solution/000305031"
        },
        {
          "date": "2023-09",
          "title": "CVE-2023-41179 Apex One arbitrary code execution 9.1 critical",
          "impact": "Explotado in-the-wild antes de parche. JPCERT advisory.",
          "url": "https://success.trendmicro.com/dcx/s/solution/000294994"
        }
      ],
      "perOs": {
        "windows": {
          "present": true,
          "score": 54.9
        },
        "linux": {
          "present": false,
          "score": 0
        },
        "macos": {
          "present": false,
          "score": 0
        }
      }
    },
    {
      "id": "Uptycs",
      "canonical": "Uptycs",
      "name": "Uptycs",
      "color": "#6c5ce7",
      "website": "https://www.uptycs.com/",
      "product": "Uptycs XDR",
      "productUrl": "https://www.uptycs.com/product",
      "docsUrl": "https://docs.uptycs.com/",
      "logo": "assets/logos/uptycs.png",
      "gartner": "No participa EPP 2024",
      "forrester": "Contender XDR",
      "ens": "No evidenciado",
      "strengths": "Fuerte en Linux y cloud workloads (osquery-based), CNAPP + EDR.",
      "cautions": "Menos footprint en Windows enterprise; mercado aun en formacion.",
      "notableCves": [],
      "incidents": [
        {
          "date": "2024-09",
          "title": "Integracion CNAPP + XDR unificada en consola",
          "impact": "Diferenciador clave vs competidores puros EDR.",
          "url": "https://www.uptycs.com/blog"
        },
        {
          "date": "2023-06",
          "title": "Layoffs reportados ~15% de la plantilla",
          "impact": "Ajuste financiero en contexto de slowdown del mercado cyber security. Validar continuidad soporte.",
          "url": "https://layoffs.fyi/"
        },
        {
          "date": "2022-01",
          "title": "Serie C de 50M USD liderada por Sapphire Ventures",
          "impact": "Valoracion unicorn pre-market. Expansion CNAPP + XDR.",
          "url": "https://www.uptycs.com/press-news-release"
        }
      ],
      "perOs": {
        "windows": {
          "present": true,
          "score": 84.2
        },
        "linux": {
          "present": true,
          "score": 75.0
        },
        "macos": {
          "present": true,
          "score": 27.1
        }
      }
    },
    {
      "id": "WatchGuard",
      "canonical": "WatchGuard",
      "name": "WatchGuard",
      "color": "#d4311f",
      "website": "https://www.watchguard.com/",
      "product": "WatchGuard EPDR / Panda AD360",
      "productUrl": "https://www.watchguard.com/wgrd-products/advanced-endpoint-protection",
      "docsUrl": "https://www.watchguard.com/help/docs/",
      "logo": "assets/logos/watchguard.png",
      "gartner": "Niche EPP 2024",
      "forrester": "N/A",
      "ens": "ENS Alta Panda (producto heredado)",
      "strengths": "Integracion con Firebox, Zero-Trust Application Service, SMB friendly.",
      "cautions": "XDR/respuesta limitado, mas pensado para mid-market.",
      "notableCves": [
        {
          "id": "CVE-2023-26236",
          "severity": "High",
          "score": 7.8,
          "published": "2023-10-05",
          "description": "An issue was discovered in WatchGuard EPDR 8.0.21.0002. Due to a weak implementation of message handling between WatchGuard EPDR processes, it is possible to perform a Local Privilege Escalation on Windows by sending a crafted message to a ",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2023-26237",
          "severity": "Medium",
          "score": 6.7,
          "published": "2023-10-05",
          "description": "An issue was discovered in WatchGuard EPDR 8.0.21.0002. It is possible to bypass the defensive capabilities by adding a registry key as SYSTEM.",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2023-26238",
          "severity": "Medium",
          "score": 5.5,
          "published": "2023-10-05",
          "description": "An issue was discovered in WatchGuard EPDR 8.0.21.0002. It is possible to enable or disable defensive capabilities by sending a crafted message to a named pipe.",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2023-26239",
          "severity": "Medium",
          "score": 5.5,
          "published": "2023-10-05",
          "description": "An issue was discovered in WatchGuard EPDR 8.0.21.0002. Due to a weak implementation of a password check, it is possible to obtain credentials to access the management console as a non-privileged user.",
          "note": "",
          "source": "nvd"
        },
        {
          "id": "CVE-2024-8424",
          "severity": "Unknown",
          "score": null,
          "published": "2024-11-08",
          "description": "Improper Privilege Management vulnerability in WatchGuard EPDR, Panda AD360 and Panda Dome on Windows (PSANHost.exe module) allows arbitrary file delete with SYSTEM permissions.",
          "note": "",
          "source": "nvd"
        }
      ],
      "incidents": [
        {
          "date": "2022-04",
          "title": "CISA: Cyclops Blink botnet Sandworm usa vulnerabilidad WatchGuard Firebox",
          "impact": "Rusia compromete cientos de dispositivos Firebox en la cadena de ataque.",
          "url": "https://www.cisa.gov/news-events/cybersecurity-advisories/aa22-054a"
        }
      ],
      "perOs": {
        "windows": {
          "present": true,
          "score": 42.1
        },
        "linux": {
          "present": false,
          "score": 0
        },
        "macos": {
          "present": false,
          "score": 0
        }
      }
    }
  ],
  "os": {
    "windows": {
      "features": [
        {
          "category": "Process Activity",
          "sub": "Process Creation",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "Carbon Black": "yes",
            "Cortex XDR": "yes",
            "CrowdStrike": "yes",
            "Cybereason": "yes",
            "Cylance": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "FortiEDR": "yes",
            "Harfanglab": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "OpenEDR": "yes",
            "Padvish XDR": "yes",
            "Qualys": "yes",
            "SentinelOne": "yes",
            "Symantec SES Complete": "yes",
            "Sysmon": "yes",
            "Trellix": "yes",
            "Trend Micro": "yes",
            "Uptycs": "yes",
            "WatchGuard": "yes"
          }
        },
        {
          "category": "Process Activity",
          "sub": "Process Termination",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "Carbon Black": "partial",
            "Cortex XDR": "yes",
            "CrowdStrike": "yes",
            "Cybereason": "yes",
            "Cylance": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "FortiEDR": "enabling",
            "Harfanglab": "no",
            "LimaCharlie": "yes",
            "MDE": "no",
            "OpenEDR": "no",
            "Padvish XDR": "yes",
            "Qualys": "yes",
            "SentinelOne": "no",
            "Symantec SES Complete": "yes",
            "Sysmon": "yes",
            "Trellix": "no",
            "Trend Micro": "enabling",
            "Uptycs": "no",
            "WatchGuard": "no"
          }
        },
        {
          "category": "Process Activity",
          "sub": "Process Access",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "Carbon Black": "yes",
            "Cortex XDR": "yes",
            "CrowdStrike": "yes",
            "Cybereason": "yes",
            "Cylance": "no",
            "ESET Inspect": "partial",
            "Elastic": "yes",
            "FortiEDR": "no",
            "Harfanglab": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "OpenEDR": "no",
            "Padvish XDR": "partial",
            "Qualys": "yes",
            "SentinelOne": "yes",
            "Symantec SES Complete": "yes",
            "Sysmon": "yes",
            "Trellix": "yes",
            "Trend Micro": "yes",
            "Uptycs": "no",
            "WatchGuard": "no"
          }
        },
        {
          "category": "Process Activity",
          "sub": "Image/Library Loaded",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "Carbon Black": "yes",
            "Cortex XDR": "yes",
            "CrowdStrike": "yes",
            "Cybereason": "yes",
            "Cylance": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "FortiEDR": "enabling",
            "Harfanglab": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "OpenEDR": "no",
            "Padvish XDR": "yes",
            "Qualys": "yes",
            "SentinelOne": "yes",
            "Symantec SES Complete": "yes",
            "Sysmon": "yes",
            "Trellix": "yes",
            "Trend Micro": "yes",
            "Uptycs": "yes",
            "WatchGuard": "yes"
          }
        },
        {
          "category": "Process Activity",
          "sub": "Remote Thread Creation",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "Carbon Black": "yes",
            "Cortex XDR": "yes",
            "CrowdStrike": "yes",
            "Cybereason": "yes",
            "Cylance": "no",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "FortiEDR": "no",
            "Harfanglab": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "OpenEDR": "no",
            "Padvish XDR": "yes",
            "Qualys": "yes",
            "SentinelOne": "yes",
            "Symantec SES Complete": "no",
            "Sysmon": "yes",
            "Trellix": "yes",
            "Trend Micro": "yes",
            "Uptycs": "yes",
            "WatchGuard": "yes"
          }
        },
        {
          "category": "Process Activity",
          "sub": "Win32 API Telemetry",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "no",
            "Carbon Black": "yes",
            "Cortex XDR": "yes",
            "CrowdStrike": "pending",
            "Cybereason": "pending",
            "Cylance": "yes",
            "ESET Inspect": "partial",
            "Elastic": "yes",
            "FortiEDR": "pending",
            "Harfanglab": "pending",
            "LimaCharlie": "pending",
            "MDE": "yes",
            "OpenEDR": "no",
            "Padvish XDR": "partial",
            "Qualys": "pending",
            "SentinelOne": "pending",
            "Symantec SES Complete": "pending",
            "Sysmon": "no",
            "Trellix": "pending",
            "Trend Micro": "pending",
            "Uptycs": "enabling",
            "WatchGuard": "no"
          }
        },
        {
          "category": "Process Activity",
          "sub": "Process Tampering Activity",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "no",
            "Carbon Black": "partial",
            "Cortex XDR": "partial",
            "CrowdStrike": "yes",
            "Cybereason": "pending",
            "Cylance": "enabling",
            "ESET Inspect": "no",
            "Elastic": "yes",
            "FortiEDR": "no",
            "Harfanglab": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "OpenEDR": "no",
            "Padvish XDR": "no",
            "Qualys": "no",
            "SentinelOne": "yes",
            "Symantec SES Complete": "yes",
            "Sysmon": "yes",
            "Trellix": "yes",
            "Trend Micro": "yes",
            "Uptycs": "yes",
            "WatchGuard": "no"
          }
        },
        {
          "category": "Process Activity",
          "sub": "Process Call Stacks",
          "values": {
            "BitDefender": "no",
            "C-Prot": "no",
            "Carbon Black": "no",
            "Cortex XDR": "yes",
            "CrowdStrike": "yes",
            "Cybereason": "no",
            "Cylance": "no",
            "ESET Inspect": "no",
            "Elastic": "yes",
            "FortiEDR": "no",
            "Harfanglab": "yes",
            "LimaCharlie": "no",
            "MDE": "no",
            "OpenEDR": "no",
            "Padvish XDR": "no",
            "Qualys": "no",
            "SentinelOne": "no",
            "Symantec SES Complete": "no",
            "Sysmon": "yes",
            "Trellix": "no",
            "Trend Micro": "no",
            "Uptycs": "no",
            "WatchGuard": "no"
          }
        },
        {
          "category": "File Manipulation",
          "sub": "File Creation",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "Carbon Black": "yes",
            "Cortex XDR": "yes",
            "CrowdStrike": "yes",
            "Cybereason": "yes",
            "Cylance": "enabling",
            "ESET Inspect": "partial",
            "Elastic": "yes",
            "FortiEDR": "yes",
            "Harfanglab": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "OpenEDR": "yes",
            "Padvish XDR": "yes",
            "Qualys": "yes",
            "SentinelOne": "yes",
            "Symantec SES Complete": "yes",
            "Sysmon": "yes",
            "Trellix": "yes",
            "Trend Micro": "yes",
            "Uptycs": "yes",
            "WatchGuard": "partial"
          }
        },
        {
          "category": "File Manipulation",
          "sub": "File Opened",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "Carbon Black": "yes",
            "Cortex XDR": "yes",
            "CrowdStrike": "partial",
            "Cybereason": "no",
            "Cylance": "enabling",
            "ESET Inspect": "partial",
            "Elastic": "yes",
            "FortiEDR": "enabling",
            "Harfanglab": "yes",
            "LimaCharlie": "partial",
            "MDE": "no",
            "OpenEDR": "no",
            "Padvish XDR": "no",
            "Qualys": "yes",
            "SentinelOne": "no",
            "Symantec SES Complete": "yes",
            "Sysmon": "no",
            "Trellix": "yes",
            "Trend Micro": "enabling",
            "Uptycs": "yes",
            "WatchGuard": "partial"
          }
        },
        {
          "category": "File Manipulation",
          "sub": "File Deletion",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "Carbon Black": "yes",
            "Cortex XDR": "yes",
            "CrowdStrike": "yes",
            "Cybereason": "yes",
            "Cylance": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "FortiEDR": "enabling",
            "Harfanglab": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "OpenEDR": "yes",
            "Padvish XDR": "no",
            "Qualys": "yes",
            "SentinelOne": "yes",
            "Symantec SES Complete": "yes",
            "Sysmon": "yes",
            "Trellix": "yes",
            "Trend Micro": "enabling",
            "Uptycs": "yes",
            "WatchGuard": "no"
          }
        },
        {
          "category": "File Manipulation",
          "sub": "File Modification",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "Carbon Black": "yes",
            "Cortex XDR": "yes",
            "CrowdStrike": "yes",
            "Cybereason": "no",
            "Cylance": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "FortiEDR": "enabling",
            "Harfanglab": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "OpenEDR": "no",
            "Padvish XDR": "yes",
            "Qualys": "no",
            "SentinelOne": "yes",
            "Symantec SES Complete": "yes",
            "Sysmon": "no",
            "Trellix": "yes",
            "Trend Micro": "yes",
            "Uptycs": "yes",
            "WatchGuard": "no"
          }
        },
        {
          "category": "File Manipulation",
          "sub": "File Renaming",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "Carbon Black": "yes",
            "Cortex XDR": "yes",
            "CrowdStrike": "yes",
            "Cybereason": "yes",
            "Cylance": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "FortiEDR": "enabling",
            "Harfanglab": "yes",
            "LimaCharlie": "partial",
            "MDE": "yes",
            "OpenEDR": "no",
            "Padvish XDR": "partial",
            "Qualys": "yes",
            "SentinelOne": "yes",
            "Symantec SES Complete": "yes",
            "Sysmon": "no",
            "Trellix": "yes",
            "Trend Micro": "yes",
            "Uptycs": "yes",
            "WatchGuard": "partial"
          }
        },
        {
          "category": "User Account Activity",
          "sub": "Local Account Creation",
          "values": {
            "BitDefender": "eventlog",
            "C-Prot": "yes",
            "Carbon Black": "no",
            "Cortex XDR": "eventlog",
            "CrowdStrike": "yes",
            "Cybereason": "no",
            "Cylance": "eventlog",
            "ESET Inspect": "yes",
            "Elastic": "eventlog",
            "FortiEDR": "eventlog",
            "Harfanglab": "yes",
            "LimaCharlie": "eventlog",
            "MDE": "yes",
            "OpenEDR": "no",
            "Padvish XDR": "eventlog",
            "Qualys": "eventlog",
            "SentinelOne": "yes",
            "Symantec SES Complete": "no",
            "Sysmon": "no",
            "Trellix": "yes",
            "Trend Micro": "eventlog",
            "Uptycs": "eventlog",
            "WatchGuard": "no"
          }
        },
        {
          "category": "User Account Activity",
          "sub": "Local Account Modification",
          "values": {
            "BitDefender": "eventlog",
            "C-Prot": "yes",
            "Carbon Black": "no",
            "Cortex XDR": "eventlog",
            "CrowdStrike": "partial",
            "Cybereason": "no",
            "Cylance": "eventlog",
            "ESET Inspect": "yes",
            "Elastic": "eventlog",
            "FortiEDR": "eventlog",
            "Harfanglab": "yes",
            "LimaCharlie": "eventlog",
            "MDE": "yes",
            "OpenEDR": "no",
            "Padvish XDR": "eventlog",
            "Qualys": "eventlog",
            "SentinelOne": "eventlog",
            "Symantec SES Complete": "no",
            "Sysmon": "no",
            "Trellix": "yes",
            "Trend Micro": "eventlog",
            "Uptycs": "eventlog",
            "WatchGuard": "no"
          }
        },
        {
          "category": "User Account Activity",
          "sub": "Local Account Deletion",
          "values": {
            "BitDefender": "eventlog",
            "C-Prot": "yes",
            "Carbon Black": "no",
            "Cortex XDR": "eventlog",
            "CrowdStrike": "yes",
            "Cybereason": "no",
            "Cylance": "eventlog",
            "ESET Inspect": "yes",
            "Elastic": "eventlog",
            "FortiEDR": "eventlog",
            "Harfanglab": "yes",
            "LimaCharlie": "eventlog",
            "MDE": "yes",
            "OpenEDR": "no",
            "Padvish XDR": "eventlog",
            "Qualys": "eventlog",
            "SentinelOne": "eventlog",
            "Symantec SES Complete": "no",
            "Sysmon": "no",
            "Trellix": "yes",
            "Trend Micro": "enabling",
            "Uptycs": "eventlog",
            "WatchGuard": "no"
          }
        },
        {
          "category": "User Account Activity",
          "sub": "Account Login",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "Carbon Black": "eventlog",
            "Cortex XDR": "yes",
            "CrowdStrike": "yes",
            "Cybereason": "yes",
            "Cylance": "eventlog",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "FortiEDR": "eventlog",
            "Harfanglab": "yes",
            "LimaCharlie": "partial",
            "MDE": "yes",
            "OpenEDR": "no",
            "Padvish XDR": "eventlog",
            "Qualys": "eventlog",
            "SentinelOne": "yes",
            "Symantec SES Complete": "yes",
            "Sysmon": "no",
            "Trellix": "yes",
            "Trend Micro": "eventlog",
            "Uptycs": "yes",
            "WatchGuard": "yes"
          }
        },
        {
          "category": "User Account Activity",
          "sub": "Account Logoff",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "Carbon Black": "eventlog",
            "Cortex XDR": "yes",
            "CrowdStrike": "yes",
            "Cybereason": "yes",
            "Cylance": "eventlog",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "FortiEDR": "eventlog",
            "Harfanglab": "yes",
            "LimaCharlie": "eventlog",
            "MDE": "no",
            "OpenEDR": "no",
            "Padvish XDR": "eventlog",
            "Qualys": "eventlog",
            "SentinelOne": "yes",
            "Symantec SES Complete": "yes",
            "Sysmon": "no",
            "Trellix": "yes",
            "Trend Micro": "eventlog",
            "Uptycs": "yes",
            "WatchGuard": "yes"
          }
        },
        {
          "category": "Network Activity",
          "sub": "TCP Connection",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "Carbon Black": "yes",
            "Cortex XDR": "yes",
            "CrowdStrike": "yes",
            "Cybereason": "yes",
            "Cylance": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "FortiEDR": "yes",
            "Harfanglab": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "OpenEDR": "yes",
            "Padvish XDR": "yes",
            "Qualys": "yes",
            "SentinelOne": "yes",
            "Symantec SES Complete": "enabling",
            "Sysmon": "yes",
            "Trellix": "yes",
            "Trend Micro": "yes",
            "Uptycs": "yes",
            "WatchGuard": "yes"
          }
        },
        {
          "category": "Network Activity",
          "sub": "UDP Connection",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "Carbon Black": "yes",
            "Cortex XDR": "yes",
            "CrowdStrike": "yes",
            "Cybereason": "yes",
            "Cylance": "yes",
            "ESET Inspect": "no",
            "Elastic": "yes",
            "FortiEDR": "yes",
            "Harfanglab": "eventlog",
            "LimaCharlie": "yes",
            "MDE": "no",
            "OpenEDR": "yes",
            "Padvish XDR": "yes",
            "Qualys": "yes",
            "SentinelOne": "no",
            "Symantec SES Complete": "enabling",
            "Sysmon": "yes",
            "Trellix": "yes",
            "Trend Micro": "yes",
            "Uptycs": "yes",
            "WatchGuard": "yes"
          }
        },
        {
          "category": "Network Activity",
          "sub": "URL",
          "values": {
            "BitDefender": "no",
            "C-Prot": "no",
            "Carbon Black": "no",
            "Cortex XDR": "yes",
            "CrowdStrike": "no",
            "Cybereason": "no",
            "Cylance": "yes",
            "ESET Inspect": "yes",
            "Elastic": "partial",
            "FortiEDR": "no",
            "Harfanglab": "yes",
            "LimaCharlie": "no",
            "MDE": "yes",
            "OpenEDR": "no",
            "Padvish XDR": "yes",
            "Qualys": "yes",
            "SentinelOne": "enabling",
            "Symantec SES Complete": "partial",
            "Sysmon": "no",
            "Trellix": "yes",
            "Trend Micro": "no",
            "Uptycs": "yes",
            "WatchGuard": "partial"
          }
        },
        {
          "category": "Network Activity",
          "sub": "DNS Query",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "Carbon Black": "yes",
            "Cortex XDR": "yes",
            "CrowdStrike": "yes",
            "Cybereason": "yes",
            "Cylance": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "FortiEDR": "enabling",
            "Harfanglab": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "OpenEDR": "no",
            "Padvish XDR": "yes",
            "Qualys": "yes",
            "SentinelOne": "yes",
            "Symantec SES Complete": "no",
            "Sysmon": "yes",
            "Trellix": "yes",
            "Trend Micro": "yes",
            "Uptycs": "yes",
            "WatchGuard": "yes"
          }
        },
        {
          "category": "Network Activity",
          "sub": "File Downloaded",
          "values": {
            "BitDefender": "partial",
            "C-Prot": "yes",
            "Carbon Black": "no",
            "Cortex XDR": "yes",
            "CrowdStrike": "yes",
            "Cybereason": "partial",
            "Cylance": "no",
            "ESET Inspect": "partial",
            "Elastic": "partial",
            "FortiEDR": "no",
            "Harfanglab": "yes",
            "LimaCharlie": "partial",
            "MDE": "yes",
            "OpenEDR": "no",
            "Padvish XDR": "no",
            "Qualys": "no",
            "SentinelOne": "yes",
            "Symantec SES Complete": "no",
            "Sysmon": "no",
            "Trellix": "no",
            "Trend Micro": "yes",
            "Uptycs": "partial",
            "WatchGuard": "yes"
          }
        },
        {
          "category": "Hash Algorithms",
          "sub": "MD5",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "Carbon Black": "yes",
            "Cortex XDR": "yes",
            "CrowdStrike": "yes",
            "Cybereason": "yes",
            "Cylance": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "FortiEDR": "yes",
            "Harfanglab": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "OpenEDR": "no",
            "Padvish XDR": "yes",
            "Qualys": "yes",
            "SentinelOne": "yes",
            "Symantec SES Complete": "yes",
            "Sysmon": "yes",
            "Trellix": "yes",
            "Trend Micro": "yes",
            "Uptycs": "yes",
            "WatchGuard": "yes"
          }
        },
        {
          "category": "Hash Algorithms",
          "sub": "SHA",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "Carbon Black": "yes",
            "Cortex XDR": "yes",
            "CrowdStrike": "yes",
            "Cybereason": "yes",
            "Cylance": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "FortiEDR": "yes",
            "Harfanglab": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "OpenEDR": "yes",
            "Padvish XDR": "yes",
            "Qualys": "yes",
            "SentinelOne": "yes",
            "Symantec SES Complete": "yes",
            "Sysmon": "yes",
            "Trellix": "yes",
            "Trend Micro": "yes",
            "Uptycs": "yes",
            "WatchGuard": "no"
          }
        },
        {
          "category": "Hash Algorithms",
          "sub": "IMPHASH",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "Carbon Black": "no",
            "Cortex XDR": "no",
            "CrowdStrike": "no",
            "Cybereason": "no",
            "Cylance": "no",
            "ESET Inspect": "no",
            "Elastic": "yes",
            "FortiEDR": "no",
            "Harfanglab": "yes",
            "LimaCharlie": "no",
            "MDE": "no",
            "OpenEDR": "no",
            "Padvish XDR": "no",
            "Qualys": "no",
            "SentinelOne": "no",
            "Symantec SES Complete": "no",
            "Sysmon": "yes",
            "Trellix": "no",
            "Trend Micro": "no",
            "Uptycs": "yes",
            "WatchGuard": "no"
          }
        },
        {
          "category": "Hash Algorithms",
          "sub": "JA3/JA3s",
          "values": {
            "BitDefender": "no",
            "C-Prot": "no",
            "Carbon Black": "yes",
            "Cortex XDR": "yes",
            "CrowdStrike": "no",
            "Cybereason": "no",
            "Cylance": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "FortiEDR": "no",
            "Harfanglab": "yes",
            "LimaCharlie": "no",
            "MDE": "yes",
            "OpenEDR": "no",
            "Padvish XDR": "no",
            "Qualys": "no",
            "SentinelOne": "no",
            "Symantec SES Complete": "no",
            "Sysmon": "no",
            "Trellix": "no",
            "Trend Micro": "no",
            "Uptycs": "yes",
            "WatchGuard": "no"
          }
        },
        {
          "category": "Registry Activity",
          "sub": "Key/Value Creation",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "Carbon Black": "yes",
            "Cortex XDR": "yes",
            "CrowdStrike": "partial",
            "Cybereason": "partial",
            "Cylance": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "FortiEDR": "enabling",
            "Harfanglab": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "OpenEDR": "yes",
            "Padvish XDR": "yes",
            "Qualys": "yes",
            "SentinelOne": "yes",
            "Symantec SES Complete": "yes",
            "Sysmon": "yes",
            "Trellix": "yes",
            "Trend Micro": "yes",
            "Uptycs": "yes",
            "WatchGuard": "yes"
          }
        },
        {
          "category": "Registry Activity",
          "sub": "Key/Value Modification",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "Carbon Black": "yes",
            "Cortex XDR": "yes",
            "CrowdStrike": "partial",
            "Cybereason": "partial",
            "Cylance": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "FortiEDR": "enabling",
            "Harfanglab": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "OpenEDR": "no",
            "Padvish XDR": "yes",
            "Qualys": "no",
            "SentinelOne": "yes",
            "Symantec SES Complete": "yes",
            "Sysmon": "yes",
            "Trellix": "yes",
            "Trend Micro": "yes",
            "Uptycs": "yes",
            "WatchGuard": "yes"
          }
        },
        {
          "category": "Registry Activity",
          "sub": "Key/Value Deletion",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "Carbon Black": "yes",
            "Cortex XDR": "yes",
            "CrowdStrike": "no",
            "Cybereason": "partial",
            "Cylance": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "FortiEDR": "enabling",
            "Harfanglab": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "OpenEDR": "yes",
            "Padvish XDR": "no",
            "Qualys": "yes",
            "SentinelOne": "yes",
            "Symantec SES Complete": "yes",
            "Sysmon": "yes",
            "Trellix": "yes",
            "Trend Micro": "yes",
            "Uptycs": "yes",
            "WatchGuard": "yes"
          }
        },
        {
          "category": "Schedule Task Activity",
          "sub": "Scheduled Task Creation",
          "values": {
            "BitDefender": "eventlog",
            "C-Prot": "yes",
            "Carbon Black": "no",
            "Cortex XDR": "yes",
            "CrowdStrike": "yes",
            "Cybereason": "yes",
            "Cylance": "eventlog",
            "ESET Inspect": "yes",
            "Elastic": "eventlog",
            "FortiEDR": "eventlog",
            "Harfanglab": "yes",
            "LimaCharlie": "eventlog",
            "MDE": "yes",
            "OpenEDR": "no",
            "Padvish XDR": "yes",
            "Qualys": "eventlog",
            "SentinelOne": "yes",
            "Symantec SES Complete": "no",
            "Sysmon": "no",
            "Trellix": "no",
            "Trend Micro": "eventlog",
            "Uptycs": "yes",
            "WatchGuard": "no"
          }
        },
        {
          "category": "Schedule Task Activity",
          "sub": "Scheduled Task Modification",
          "values": {
            "BitDefender": "eventlog",
            "C-Prot": "yes",
            "Carbon Black": "no",
            "Cortex XDR": "yes",
            "CrowdStrike": "yes",
            "Cybereason": "yes",
            "Cylance": "eventlog",
            "ESET Inspect": "no",
            "Elastic": "eventlog",
            "FortiEDR": "eventlog",
            "Harfanglab": "yes",
            "LimaCharlie": "eventlog",
            "MDE": "yes",
            "OpenEDR": "no",
            "Padvish XDR": "eventlog",
            "Qualys": "eventlog",
            "SentinelOne": "yes",
            "Symantec SES Complete": "no",
            "Sysmon": "no",
            "Trellix": "yes",
            "Trend Micro": "eventlog",
            "Uptycs": "eventlog",
            "WatchGuard": "no"
          }
        },
        {
          "category": "Schedule Task Activity",
          "sub": "Scheduled Task Deletion",
          "values": {
            "BitDefender": "eventlog",
            "C-Prot": "yes",
            "Carbon Black": "no",
            "Cortex XDR": "yes",
            "CrowdStrike": "yes",
            "Cybereason": "no",
            "Cylance": "eventlog",
            "ESET Inspect": "no",
            "Elastic": "eventlog",
            "FortiEDR": "eventlog",
            "Harfanglab": "yes",
            "LimaCharlie": "eventlog",
            "MDE": "yes",
            "OpenEDR": "no",
            "Padvish XDR": "eventlog",
            "Qualys": "eventlog",
            "SentinelOne": "yes",
            "Symantec SES Complete": "no",
            "Sysmon": "no",
            "Trellix": "no",
            "Trend Micro": "eventlog",
            "Uptycs": "eventlog",
            "WatchGuard": "no"
          }
        },
        {
          "category": "Service Activity",
          "sub": "Service Creation",
          "values": {
            "BitDefender": "partial",
            "C-Prot": "yes",
            "Carbon Black": "partial",
            "Cortex XDR": "yes",
            "CrowdStrike": "yes",
            "Cybereason": "yes",
            "Cylance": "no",
            "ESET Inspect": "yes",
            "Elastic": "eventlog",
            "FortiEDR": "eventlog",
            "Harfanglab": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "OpenEDR": "no",
            "Padvish XDR": "yes",
            "Qualys": "yes",
            "SentinelOne": "yes",
            "Symantec SES Complete": "no",
            "Sysmon": "no",
            "Trellix": "no",
            "Trend Micro": "eventlog",
            "Uptycs": "yes",
            "WatchGuard": "partial"
          }
        },
        {
          "category": "Service Activity",
          "sub": "Service Modification",
          "values": {
            "BitDefender": "eventlog",
            "C-Prot": "yes",
            "Carbon Black": "no",
            "Cortex XDR": "yes",
            "CrowdStrike": "partial",
            "Cybereason": "no",
            "Cylance": "no",
            "ESET Inspect": "no",
            "Elastic": "eventlog",
            "FortiEDR": "eventlog",
            "Harfanglab": "yes",
            "LimaCharlie": "yes",
            "MDE": "no",
            "OpenEDR": "no",
            "Padvish XDR": "yes",
            "Qualys": "yes",
            "SentinelOne": "enabling",
            "Symantec SES Complete": "no",
            "Sysmon": "no",
            "Trellix": "yes",
            "Trend Micro": "eventlog",
            "Uptycs": "yes",
            "WatchGuard": "partial"
          }
        },
        {
          "category": "Service Activity",
          "sub": "Service Deletion",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "Carbon Black": "no",
            "Cortex XDR": "yes",
            "CrowdStrike": "no",
            "Cybereason": "no",
            "Cylance": "no",
            "ESET Inspect": "no",
            "Elastic": "eventlog",
            "FortiEDR": "eventlog",
            "Harfanglab": "no",
            "LimaCharlie": "pending",
            "MDE": "no",
            "OpenEDR": "no",
            "Padvish XDR": "no",
            "Qualys": "no",
            "SentinelOne": "no",
            "Symantec SES Complete": "no",
            "Sysmon": "no",
            "Trellix": "no",
            "Trend Micro": "eventlog",
            "Uptycs": "yes",
            "WatchGuard": "no"
          }
        },
        {
          "category": "Driver/Module Activity",
          "sub": "Driver Loaded",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "Carbon Black": "no",
            "Cortex XDR": "yes",
            "CrowdStrike": "yes",
            "Cybereason": "yes",
            "Cylance": "no",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "FortiEDR": "enabling",
            "Harfanglab": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "OpenEDR": "no",
            "Padvish XDR": "yes",
            "Qualys": "yes",
            "SentinelOne": "yes",
            "Symantec SES Complete": "no",
            "Sysmon": "yes",
            "Trellix": "no",
            "Trend Micro": "enabling",
            "Uptycs": "eventlog",
            "WatchGuard": "no"
          }
        },
        {
          "category": "Driver/Module Activity",
          "sub": "Driver Modification",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "Carbon Black": "no",
            "Cortex XDR": "no",
            "CrowdStrike": "yes",
            "Cybereason": "no",
            "Cylance": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "FortiEDR": "no",
            "Harfanglab": "no",
            "LimaCharlie": "yes",
            "MDE": "no",
            "OpenEDR": "no",
            "Padvish XDR": "yes",
            "Qualys": "yes",
            "SentinelOne": "no",
            "Symantec SES Complete": "no",
            "Sysmon": "no",
            "Trellix": "no",
            "Trend Micro": "no",
            "Uptycs": "yes",
            "WatchGuard": "no"
          }
        },
        {
          "category": "Driver/Module Activity",
          "sub": "Driver Unloaded",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "Carbon Black": "no",
            "Cortex XDR": "no",
            "CrowdStrike": "no",
            "Cybereason": "no",
            "Cylance": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "FortiEDR": "no",
            "Harfanglab": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "OpenEDR": "no",
            "Padvish XDR": "no",
            "Qualys": "no",
            "SentinelOne": "partial",
            "Symantec SES Complete": "no",
            "Sysmon": "no",
            "Trellix": "no",
            "Trend Micro": "no",
            "Uptycs": "eventlog",
            "WatchGuard": "no"
          }
        },
        {
          "category": "Device Operations",
          "sub": "Virtual Disk Mount",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "Carbon Black": "no",
            "Cortex XDR": "partial",
            "CrowdStrike": "yes",
            "Cybereason": "no",
            "Cylance": "no",
            "ESET Inspect": "yes",
            "Elastic": "no",
            "FortiEDR": "no",
            "Harfanglab": "no",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "OpenEDR": "no",
            "Padvish XDR": "yes",
            "Qualys": "no",
            "SentinelOne": "no",
            "Symantec SES Complete": "no",
            "Sysmon": "no",
            "Trellix": "no",
            "Trend Micro": "no",
            "Uptycs": "yes",
            "WatchGuard": "yes"
          }
        },
        {
          "category": "Device Operations",
          "sub": "USB Device Unmount",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "Carbon Black": "no",
            "Cortex XDR": "partial",
            "CrowdStrike": "yes",
            "Cybereason": "yes",
            "Cylance": "no",
            "ESET Inspect": "yes",
            "Elastic": "enabling",
            "FortiEDR": "no",
            "Harfanglab": "partial",
            "LimaCharlie": "partial",
            "MDE": "yes",
            "OpenEDR": "no",
            "Padvish XDR": "yes",
            "Qualys": "no",
            "SentinelOne": "yes",
            "Symantec SES Complete": "enabling",
            "Sysmon": "no",
            "Trellix": "no",
            "Trend Micro": "no",
            "Uptycs": "yes",
            "WatchGuard": "yes"
          }
        },
        {
          "category": "Device Operations",
          "sub": "USB Device Mount",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "Carbon Black": "partial",
            "Cortex XDR": "partial",
            "CrowdStrike": "yes",
            "Cybereason": "yes",
            "Cylance": "no",
            "ESET Inspect": "yes",
            "Elastic": "enabling",
            "FortiEDR": "no",
            "Harfanglab": "partial",
            "LimaCharlie": "partial",
            "MDE": "yes",
            "OpenEDR": "no",
            "Padvish XDR": "yes",
            "Qualys": "no",
            "SentinelOne": "yes",
            "Symantec SES Complete": "enabling",
            "Sysmon": "no",
            "Trellix": "no",
            "Trend Micro": "no",
            "Uptycs": "yes",
            "WatchGuard": "yes"
          }
        },
        {
          "category": "Other Relevant Events",
          "sub": "Group Policy Modification",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "Carbon Black": "no",
            "Cortex XDR": "eventlog",
            "CrowdStrike": "no",
            "Cybereason": "no",
            "Cylance": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "FortiEDR": "no",
            "Harfanglab": "no",
            "LimaCharlie": "no",
            "MDE": "yes",
            "OpenEDR": "no",
            "Padvish XDR": "no",
            "Qualys": "no",
            "SentinelOne": "yes",
            "Symantec SES Complete": "no",
            "Sysmon": "no",
            "Trellix": "no",
            "Trend Micro": "no",
            "Uptycs": "eventlog",
            "WatchGuard": "no"
          }
        },
        {
          "category": "Other Relevant Events",
          "sub": "Volume Shadow Copy Deletion",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "no",
            "Carbon Black": "no",
            "Cortex XDR": "no",
            "CrowdStrike": "yes",
            "Cybereason": "pending",
            "Cylance": "pending",
            "ESET Inspect": "yes",
            "Elastic": "pending",
            "FortiEDR": "pending",
            "Harfanglab": "pending",
            "LimaCharlie": "no",
            "MDE": "no",
            "OpenEDR": "no",
            "Padvish XDR": "yes",
            "Qualys": "no",
            "SentinelOne": "yes",
            "Symantec SES Complete": "pending",
            "Sysmon": "no",
            "Trellix": "pending",
            "Trend Micro": "pending",
            "Uptycs": "yes",
            "WatchGuard": "no"
          }
        },
        {
          "category": "Named Pipe Activity",
          "sub": "Pipe Creation",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "Carbon Black": "partial",
            "Cortex XDR": "no",
            "CrowdStrike": "yes",
            "Cybereason": "no",
            "Cylance": "no",
            "ESET Inspect": "yes",
            "Elastic": "no",
            "FortiEDR": "no",
            "Harfanglab": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "OpenEDR": "no",
            "Padvish XDR": "no",
            "Qualys": "no",
            "SentinelOne": "enabling",
            "Symantec SES Complete": "no",
            "Sysmon": "yes",
            "Trellix": "no",
            "Trend Micro": "enabling",
            "Uptycs": "yes",
            "WatchGuard": "no"
          }
        },
        {
          "category": "Named Pipe Activity",
          "sub": "Pipe Connection",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "no",
            "Carbon Black": "no",
            "Cortex XDR": "no",
            "CrowdStrike": "yes",
            "Cybereason": "no",
            "Cylance": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "FortiEDR": "no",
            "Harfanglab": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "OpenEDR": "no",
            "Padvish XDR": "no",
            "Qualys": "no",
            "SentinelOne": "enabling",
            "Symantec SES Complete": "no",
            "Sysmon": "yes",
            "Trellix": "yes",
            "Trend Micro": "enabling",
            "Uptycs": "no",
            "WatchGuard": "no"
          }
        },
        {
          "category": "EDR SysOps",
          "sub": "Agent Start",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "Carbon Black": "yes",
            "Cortex XDR": "yes",
            "CrowdStrike": "yes",
            "Cybereason": "yes",
            "Cylance": "yes",
            "ESET Inspect": "no",
            "Elastic": "yes",
            "FortiEDR": "yes",
            "Harfanglab": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "OpenEDR": "yes",
            "Padvish XDR": "yes",
            "Qualys": "yes",
            "SentinelOne": "yes",
            "Symantec SES Complete": "enabling",
            "Sysmon": "yes",
            "Trellix": "pending",
            "Trend Micro": "no",
            "Uptycs": "yes",
            "WatchGuard": "no"
          }
        },
        {
          "category": "EDR SysOps",
          "sub": "Agent Stop",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "Carbon Black": "yes",
            "Cortex XDR": "yes",
            "CrowdStrike": "yes",
            "Cybereason": "yes",
            "Cylance": "yes",
            "ESET Inspect": "no",
            "Elastic": "yes",
            "FortiEDR": "no",
            "Harfanglab": "yes",
            "LimaCharlie": "yes",
            "MDE": "eventlog",
            "OpenEDR": "yes",
            "Padvish XDR": "yes",
            "Qualys": "yes",
            "SentinelOne": "yes",
            "Symantec SES Complete": "enabling",
            "Sysmon": "yes",
            "Trellix": "pending",
            "Trend Micro": "no",
            "Uptycs": "yes",
            "WatchGuard": "no"
          }
        },
        {
          "category": "EDR SysOps",
          "sub": "Agent Install",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "Carbon Black": "yes",
            "Cortex XDR": "yes",
            "CrowdStrike": "no",
            "Cybereason": "yes",
            "Cylance": "yes",
            "ESET Inspect": "yes",
            "Elastic": "no",
            "FortiEDR": "yes",
            "Harfanglab": "yes",
            "LimaCharlie": "yes",
            "MDE": "eventlog",
            "OpenEDR": "yes",
            "Padvish XDR": "eventlog",
            "Qualys": "yes",
            "SentinelOne": "yes",
            "Symantec SES Complete": "enabling",
            "Sysmon": "no",
            "Trellix": "yes",
            "Trend Micro": "no",
            "Uptycs": "yes",
            "WatchGuard": "yes"
          }
        },
        {
          "category": "EDR SysOps",
          "sub": "Agent Uninstall",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "Carbon Black": "yes",
            "Cortex XDR": "yes",
            "CrowdStrike": "yes",
            "Cybereason": "yes",
            "Cylance": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "FortiEDR": "yes",
            "Harfanglab": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "OpenEDR": "no",
            "Padvish XDR": "eventlog",
            "Qualys": "no",
            "SentinelOne": "yes",
            "Symantec SES Complete": "enabling",
            "Sysmon": "no",
            "Trellix": "yes",
            "Trend Micro": "no",
            "Uptycs": "no",
            "WatchGuard": "yes"
          }
        },
        {
          "category": "EDR SysOps",
          "sub": "Agent Keep-Alive",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "Carbon Black": "yes",
            "Cortex XDR": "yes",
            "CrowdStrike": "yes",
            "Cybereason": "yes",
            "Cylance": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "FortiEDR": "no",
            "Harfanglab": "yes",
            "LimaCharlie": "yes",
            "MDE": "eventlog",
            "OpenEDR": "yes",
            "Padvish XDR": "yes",
            "Qualys": "yes",
            "SentinelOne": "yes",
            "Symantec SES Complete": "enabling",
            "Sysmon": "no",
            "Trellix": "pending",
            "Trend Micro": "no",
            "Uptycs": "yes",
            "WatchGuard": "no"
          }
        },
        {
          "category": "EDR SysOps",
          "sub": "Agent Errors",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "Carbon Black": "yes",
            "Cortex XDR": "yes",
            "CrowdStrike": "yes",
            "Cybereason": "no",
            "Cylance": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "FortiEDR": "yes",
            "Harfanglab": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "OpenEDR": "yes",
            "Padvish XDR": "no",
            "Qualys": "yes",
            "SentinelOne": "yes",
            "Symantec SES Complete": "enabling",
            "Sysmon": "yes",
            "Trellix": "pending",
            "Trend Micro": "no",
            "Uptycs": "yes",
            "WatchGuard": "no"
          }
        },
        {
          "category": "WMI Activity",
          "sub": "WmiEventConsumerToFilter",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "Carbon Black": "no",
            "Cortex XDR": "enabling",
            "CrowdStrike": "yes",
            "Cybereason": "yes",
            "Cylance": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "FortiEDR": "eventlog",
            "Harfanglab": "yes",
            "LimaCharlie": "no",
            "MDE": "yes",
            "OpenEDR": "no",
            "Padvish XDR": "yes",
            "Qualys": "eventlog",
            "SentinelOne": "yes",
            "Symantec SES Complete": "partial",
            "Sysmon": "yes",
            "Trellix": "yes",
            "Trend Micro": "eventlog",
            "Uptycs": "yes",
            "WatchGuard": "yes"
          }
        },
        {
          "category": "WMI Activity",
          "sub": "WmiEventConsumer",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "Carbon Black": "no",
            "Cortex XDR": "enabling",
            "CrowdStrike": "yes",
            "Cybereason": "yes",
            "Cylance": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "FortiEDR": "eventlog",
            "Harfanglab": "yes",
            "LimaCharlie": "no",
            "MDE": "yes",
            "OpenEDR": "no",
            "Padvish XDR": "yes",
            "Qualys": "eventlog",
            "SentinelOne": "yes",
            "Symantec SES Complete": "partial",
            "Sysmon": "yes",
            "Trellix": "yes",
            "Trend Micro": "eventlog",
            "Uptycs": "yes",
            "WatchGuard": "yes"
          }
        },
        {
          "category": "WMI Activity",
          "sub": "WmiEventFilter",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "Carbon Black": "no",
            "Cortex XDR": "enabling",
            "CrowdStrike": "yes",
            "Cybereason": "yes",
            "Cylance": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "FortiEDR": "eventlog",
            "Harfanglab": "yes",
            "LimaCharlie": "no",
            "MDE": "yes",
            "OpenEDR": "no",
            "Padvish XDR": "yes",
            "Qualys": "eventlog",
            "SentinelOne": "yes",
            "Symantec SES Complete": "partial",
            "Sysmon": "yes",
            "Trellix": "yes",
            "Trend Micro": "eventlog",
            "Uptycs": "yes",
            "WatchGuard": "yes"
          }
        },
        {
          "category": "BITS Jobs Activity",
          "sub": "BITS Jobs Activity",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "Carbon Black": "no",
            "Cortex XDR": "enabling",
            "CrowdStrike": "yes",
            "Cybereason": "no",
            "Cylance": "no",
            "ESET Inspect": "yes",
            "Elastic": "no",
            "FortiEDR": "eventlog",
            "Harfanglab": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "OpenEDR": "no",
            "Padvish XDR": "eventlog",
            "Qualys": "yes",
            "SentinelOne": "eventlog",
            "Symantec SES Complete": "no",
            "Sysmon": "no",
            "Trellix": "yes",
            "Trend Micro": "eventlog",
            "Uptycs": "yes",
            "WatchGuard": "no"
          }
        },
        {
          "category": "PowerShell Activity",
          "sub": "Script-Block Activity",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "Carbon Black": "yes",
            "Cortex XDR": "yes",
            "CrowdStrike": "yes",
            "Cybereason": "no",
            "Cylance": "yes",
            "ESET Inspect": "yes",
            "Elastic": "enabling",
            "FortiEDR": "eventlog",
            "Harfanglab": "yes",
            "LimaCharlie": "eventlog",
            "MDE": "yes",
            "OpenEDR": "no",
            "Padvish XDR": "yes",
            "Qualys": "yes",
            "SentinelOne": "yes",
            "Symantec SES Complete": "yes",
            "Sysmon": "no",
            "Trellix": "yes",
            "Trend Micro": "yes",
            "Uptycs": "yes",
            "WatchGuard": "no"
          }
        }
      ],
      "vendors": [
        "BitDefender",
        "C-Prot",
        "Carbon Black",
        "Cortex XDR",
        "CrowdStrike",
        "Cybereason",
        "Cylance",
        "ESET Inspect",
        "Elastic",
        "FortiEDR",
        "Harfanglab",
        "LimaCharlie",
        "MDE",
        "OpenEDR",
        "Padvish XDR",
        "Qualys",
        "SentinelOne",
        "Symantec SES Complete",
        "Sysmon",
        "Trellix",
        "Trend Micro",
        "Uptycs",
        "WatchGuard"
      ],
      "scores": {
        "BitDefender": {
          "score": 58.2,
          "counted": 57
        },
        "C-Prot": {
          "score": 87.7,
          "counted": 57
        },
        "Carbon Black": {
          "score": 52.1,
          "counted": 57
        },
        "Cortex XDR": {
          "score": 81.1,
          "counted": 57
        },
        "CrowdStrike": {
          "score": 79.8,
          "counted": 57
        },
        "Cybereason": {
          "score": 54.4,
          "counted": 57
        },
        "Cylance": {
          "score": 57.7,
          "counted": 57
        },
        "ESET Inspect": {
          "score": 69.3,
          "counted": 57
        },
        "Elastic": {
          "score": 72.8,
          "counted": 57
        },
        "FortiEDR": {
          "score": 47.9,
          "counted": 57
        },
        "Harfanglab": {
          "score": 80.0,
          "counted": 57
        },
        "LimaCharlie": {
          "score": 64.6,
          "counted": 57
        },
        "MDE": {
          "score": 75.1,
          "counted": 57
        },
        "OpenEDR": {
          "score": 22.8,
          "counted": 57
        },
        "Padvish XDR": {
          "score": 65.8,
          "counted": 57
        },
        "Qualys": {
          "score": 60.7,
          "counted": 57
        },
        "SentinelOne": {
          "score": 77.4,
          "counted": 57
        },
        "Symantec SES Complete": {
          "score": 47.4,
          "counted": 57
        },
        "Sysmon": {
          "score": 47.4,
          "counted": 57
        },
        "Trellix": {
          "score": 59.6,
          "counted": 57
        },
        "Trend Micro": {
          "score": 54.9,
          "counted": 57
        },
        "Uptycs": {
          "score": 84.2,
          "counted": 57
        },
        "WatchGuard": {
          "score": 42.1,
          "counted": 57
        }
      },
      "partials": [
        {
          "Telemetry Feature Category": "Process Activity",
          "Sub-Category": "Process Creation",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "Process Activity",
          "Sub-Category": "Process Termination",
          "BitDefender": "",
          "Carbon Black": {
            "Partially": "Only observed as file operations."
          },
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "Process Activity",
          "Sub-Category": "Process Access",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": {
            "Partially": "Only for LSASS.exe process"
          },
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": {
            "Partially": "Only for LSASS.exe process"
          },
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "Process Activity",
          "Sub-Category": "Image/Library Loaded",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "Process Activity",
          "Sub-Category": "Remote Thread Creation",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "Process Activity",
          "Sub-Category": "Win32 API Telemetry",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": {
            "Partially": "Only for a limited set of APIs as documented in: https://github.com/tsale/EDR-Telemetry/pull/130#issuecomment-3266387350"
          },
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": {
            "Partially": "Only for a limited set of APIs (e.g., SetWindowsHookEx, GetAsyncKeyState, etc.)"
          },
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "Process Activity",
          "Sub-Category": "Process Tampering Activity",
          "BitDefender": "",
          "Carbon Black": {
            "Partially": "Only via cross-process."
          },
          "Cortex XDR": {
            "Partially": "Needs the tamper protection enabled."
          },
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Qualys": "",
          "SentinelOne": {
            "Partially": "Only provides cross process info like remote thread creation and process handles, it doesn't give much more detail beyond that."
          },
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "Process Activity",
          "Sub-Category": "Process Call Stacks",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "File Manipulation",
          "Sub-Category": "File Creation",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": {
            "Partially": "Only for binaries created on disk."
          },
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": {
            "Partially": "Only tracks via dedicated event the renaming of Portable Executables (PE) and compressed files."
          }
        },
        {
          "Telemetry Feature Category": "File Manipulation",
          "Sub-Category": "File Opened",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": {
            "Partially": "Only file related events that is deems suspicious based on some proprietary criterias."
          },
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": {
            "Partially": "Generated only on specific files that may contain sensitive information such as browser related databases, credential storages etc."
          },
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": {
            "Partially": "Visibility on File Read only"
          },
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": {
            "Partially": "Only tracks via dedicated event the opening of compressed files."
          }
        },
        {
          "Telemetry Feature Category": "File Manipulation",
          "Sub-Category": "File Deletion",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "File Manipulation",
          "Sub-Category": "File Modification",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "File Manipulation",
          "Sub-Category": "File Renaming",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": {
            "Partially": "Events are reported as a delete+write."
          },
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": {
            "Partially": "Tracked as file modification event."
          },
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": {
            "Partially": "Only tracks via dedicated event the renaming of Portable Executables (PE) and compressed files."
          }
        },
        {
          "Telemetry Feature Category": "User Account Activity",
          "Sub-Category": "Local Account Creation",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "User Account Activity",
          "Sub-Category": "Local Account Modification",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": {
            "Partially": "Only contains modification from a user added to a group."
          },
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "User Account Activity",
          "Sub-Category": "Local Account Deletion",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "User Account Activity",
          "Sub-Category": "Account Login",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": {
            "Partially": "Only tracks when user is seen first time per endpoint."
          },
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "User Account Activity",
          "Sub-Category": "Account Logoff",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "Network Activity",
          "Sub-Category": "TCP Connection",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "Network Activity",
          "Sub-Category": "UDP Connection",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "Network Activity",
          "Sub-Category": "URL",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": {
            "Partially": "Only if activity is generated by a NON-Browser application."
          },
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": {
            "Partially": "Depends on Firewall / IPS settings / policy; if only IPS is enabled URL will just logged malicious connections, but not clean connections"
          },
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": {
            "Partially": "Mainly when the URL is fetched via HTTP/S GET and not from a modern browser."
          }
        },
        {
          "Telemetry Feature Category": "Network Activity",
          "Sub-Category": "DNS Query",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "Network Activity",
          "Sub-Category": "File Downloaded",
          "BitDefender": {
            "Partially": "Only tracks downloads of executables."
          },
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": {
            "Partially": "Only for documents and binaries."
          },
          "Cylance": " ",
          "ESET Inspect": {
            "Partially": "Only for binaries created on disk."
          },
          "Elastic": {
            "Partially": "Observed through Mark of the Web / Zone.Identifier file metadata associated with downloaded files, rather than a dedicated file download event."
          },
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": {
            "Partially": "Only if the activity is generated via Chrome browser[https://doc.limacharlie.io/docs/documentation/0b189c00533e5-reference-events#http_request]"
          },
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": {
            "Partially": "Limited to certain processes."
          },
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "Hash Algorithms",
          "Sub-Category": "MD5",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "Hash Algorithms",
          "Sub-Category": "SHA",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "Hash Algorithms",
          "Sub-Category": "IMPHASH",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "Hash Algorithms",
          "Sub-Category": "JA3/JA3s",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "Registry Activity",
          "Sub-Category": "Key/Value Creation",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": {
            "Partially": "Tracks only only specific keys (ASEP = 'AutoStarting Entry Point')."
          },
          "Cybereason": {
            "Partially": "By default, only RUN keys and some registry values that are commonly abused."
          },
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "Registry Activity",
          "Sub-Category": "Key/Value Modification",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": {
            "Partially": "Tracks only only specific keys (ASEP = 'AutoStarting Entry Point')."
          },
          "Cybereason": {
            "Partially": "By default, only RUN keys and some registry values that are commonly abused."
          },
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "Registry Activity",
          "Sub-Category": "Key/Value Deletion",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": {
            "Partially": "By default, only RUN keys and some registry values that are commonly abused."
          },
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "Schedule Task Activity",
          "Sub-Category": "Scheduled Task Creation",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "Schedule Task Activity",
          "Sub-Category": "Scheduled Task Modification",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "Schedule Task Activity",
          "Sub-Category": "Scheduled Task Deletion",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "Service Activity",
          "Sub-Category": "Service Creation",
          "BitDefender": {
            "Partially": "Service creation telemetry was not consistent across different types of testing, with some methods being captured where others were not."
          },
          "Carbon Black": {
            "Partially": "Via monitoring the registry changes."
          },
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": {
            "Partially": "The dedicated event tracking service activity only tracks parent/child processes related to a service change, no further details."
          }
        },
        {
          "Telemetry Feature Category": "Service Activity",
          "Sub-Category": "Service Modification",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": {
            "Partially": "Tracks only modification of service binaries."
          },
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": {
            "Partially": "The dedicated event tracking service activity only tracks parent/child processes related to a service change, no further details."
          }
        },
        {
          "Telemetry Feature Category": "Service Activity",
          "Sub-Category": "Service Deletion",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Featurere Category": "Driver/Module Activity",
          "Sub-Category": "Driver Loaded",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "Driver/Module Activity",
          "Sub-Category": "Driver Modification",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "Driver/Module Activity",
          "Sub-Category": "Driver Unloaded",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Qualys": "",
          "SentinelOne": {
            "Partially": "It only shows a specific driver unload method use by attacker instead of every unloaded drivers"
          },
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "Device Operations",
          "Sub-Category": "Virtual Disk Mount",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": {
            "Partially": "Device Control should be in block mode"
          },
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "Device Operations",
          "Sub-Category": "USB Device Unmount",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": {
            "Partially": "Device Control should be in block mode"
          },
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": {
            "Partially": "Only applicable for removable drives, no HID devices."
          },
          "LimaCharlie": {
            "Partially": "Only mount/unmount events related to 'Volumes'. No other device visibility on this."
          },
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "Device Operations",
          "Sub-Category": "USB Device Mount",
          "BitDefender": "",
          "Carbon Black": {
            "Partially": "Mounted USBs are recorded in a separate table within the platform for  administrative approval."
          },
          "Cortex XDR": {
            "Partially": "Device Control should be in block mode"
          },
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": {
            "Partially": "Only applicable for removable drives, no HID devices."
          },
          "LimaCharlie": {
            "Partially": "Only mount/unmount events related to 'Volumes'. No other device visibility on this."
          },
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "Other Relevant Events",
          "Sub-Category": "Group Policy Modification",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "Other Relevant Events",
          "Sub-Category": "Volume Shadow Copy Deletion",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "Named Pipe Activity",
          "Sub-Category": "Pipe Creation",
          "BitDefender": "",
          "Carbon Black": {
            "Partially": "Reports only named pipes for file creation events."
          },
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "Named Pipe Activity",
          "Sub-Category": "Pipe Connection",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "EDR SysOps",
          "Sub-Category": "Agent Start",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "EDR SysOps",
          "Sub-Category": "Agent Stop",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "EDR SysOps",
          "Sub-Category": "Agent Install",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "EDR SysOps",
          "Sub-Category": "Agent Uninstall",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "EDR SysOps",
          "Sub-Category": "Agent Keep-Alive",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "EDR SysOps",
          "Sub-Category": "Agent Errors",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "WMI Activity",
          "Sub-Category": "WmiEventConsumerToFilter",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": {
            "Partially": "SES has a WMI Response Event and a WMI Instance Object, the WMI Response Event describes: unknown, blocked, allowed, no action, logged, command script, uncorrected, delayed, deleted, quarantined, restored, detected"
          },
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "WMI Activity",
          "Sub-Category": "WmiEventConsumer",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": {
            "Partially": "SES has a WMI Response Event and a WMI Instance Object, the WMI Response Event describes: unknown, blocked, allowed, no action, logged, command script, uncorrected, delayed, deleted, quarantined, restored, detected"
          },
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "WMI Activity",
          "Sub-Category": "WmiEventFilter",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": {
            "Partially": "SES has a WMI Response Event and a WMI Instance Object, the WMI Response Event describes: unknown, blocked, allowed, no action, logged, command script, uncorrected, delayed, deleted, quarantined, restored, detected"
          },
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "BIT JOBS Activity",
          "Sub-Category": "BIT JOBS Activity",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        },
        {
          "Telemetry Feature Category": "PowerShell Activity",
          "Sub-Category": "Script-Block Activity",
          "BitDefender": "",
          "Carbon Black": "",
          "Cortex XDR": "",
          "CrowdStrike": "",
          "Cybereason": "",
          "Cylance": " ",
          "ESET Inspect": "",
          "Elastic": "",
          "FortiEDR": "",
          "Harfanglab": "",
          "LimaCharlie": "",
          "MDE": "",
          "OpenEDR": "",
          "Padvish XDR": "",
          "Qualys": "",
          "SentinelOne": "",
          "Symantec SES Complete": "",
          "Sysmon": "",
          "Trellix": "",
          "Trend Micro": "",
          "Uptycs": "",
          "WatchGuard": ""
        }
      ],
      "attackCoverage": {
        "BitDefender": {
          "DS0009": {
            "score": 100.0,
            "features": 5
          },
          "DS0011": {
            "score": 100.0,
            "features": 1
          },
          "DS0022": {
            "score": 75.0,
            "features": 10
          },
          "DS0002": {
            "score": 70.0,
            "features": 4
          },
          "DS0028": {
            "score": 100.0,
            "features": 1
          },
          "DS0029": {
            "score": 30.0,
            "features": 5
          },
          "DS0024": {
            "score": 100.0,
            "features": 3
          },
          "DS0003": {
            "score": 60.0,
            "features": 3
          },
          "DS0019": {
            "score": 36.7,
            "features": 3
          },
          "DS0027": {
            "score": 0.0,
            "features": 1
          },
          "DS0016": {
            "score": 0.0,
            "features": 3
          },
          "DS0026": {
            "score": 0.0,
            "features": 1
          },
          "DS0023": {
            "score": 100.0,
            "features": 2
          },
          "DS0013": {
            "score": 66.7,
            "features": 6
          },
          "DS0005": {
            "score": 33.3,
            "features": 3
          },
          "DS0012": {
            "score": 0.0,
            "features": 1
          }
        },
        "C-Prot": {
          "DS0009": {
            "score": 80.0,
            "features": 5
          },
          "DS0011": {
            "score": 100.0,
            "features": 1
          },
          "DS0022": {
            "score": 100.0,
            "features": 10
          },
          "DS0002": {
            "score": 100.0,
            "features": 4
          },
          "DS0028": {
            "score": 100.0,
            "features": 1
          },
          "DS0029": {
            "score": 80.0,
            "features": 5
          },
          "DS0024": {
            "score": 100.0,
            "features": 3
          },
          "DS0003": {
            "score": 100.0,
            "features": 3
          },
          "DS0019": {
            "score": 100.0,
            "features": 3
          },
          "DS0027": {
            "score": 100.0,
            "features": 1
          },
          "DS0016": {
            "score": 100.0,
            "features": 3
          },
          "DS0026": {
            "score": 100.0,
            "features": 1
          },
          "DS0023": {
            "score": 50.0,
            "features": 2
          },
          "DS0013": {
            "score": 100.0,
            "features": 6
          },
          "DS0005": {
            "score": 100.0,
            "features": 3
          },
          "DS0012": {
            "score": 100.0,
            "features": 1
          }
        },
        "Carbon Black": {
          "DS0009": {
            "score": 80.0,
            "features": 5
          },
          "DS0011": {
            "score": 100.0,
            "features": 1
          },
          "DS0022": {
            "score": 70.0,
            "features": 10
          },
          "DS0002": {
            "score": 15.0,
            "features": 4
          },
          "DS0028": {
            "score": 60.0,
            "features": 1
          },
          "DS0029": {
            "score": 60.0,
            "features": 5
          },
          "DS0024": {
            "score": 100.0,
            "features": 3
          },
          "DS0003": {
            "score": 0.0,
            "features": 3
          },
          "DS0019": {
            "score": 16.7,
            "features": 3
          },
          "DS0027": {
            "score": 0.0,
            "features": 1
          },
          "DS0016": {
            "score": 16.7,
            "features": 3
          },
          "DS0026": {
            "score": 0.0,
            "features": 1
          },
          "DS0023": {
            "score": 25.0,
            "features": 2
          },
          "DS0013": {
            "score": 100.0,
            "features": 6
          },
          "DS0005": {
            "score": 0.0,
            "features": 3
          },
          "DS0012": {
            "score": 100.0,
            "features": 1
          }
        },
        "Cortex XDR": {
          "DS0009": {
            "score": 90.0,
            "features": 5
          },
          "DS0011": {
            "score": 100.0,
            "features": 1
          },
          "DS0022": {
            "score": 80.0,
            "features": 10
          },
          "DS0002": {
            "score": 70.0,
            "features": 4
          },
          "DS0028": {
            "score": 100.0,
            "features": 1
          },
          "DS0029": {
            "score": 100.0,
            "features": 5
          },
          "DS0024": {
            "score": 100.0,
            "features": 3
          },
          "DS0003": {
            "score": 100.0,
            "features": 3
          },
          "DS0019": {
            "score": 100.0,
            "features": 3
          },
          "DS0027": {
            "score": 100.0,
            "features": 1
          },
          "DS0016": {
            "score": 50.0,
            "features": 3
          },
          "DS0026": {
            "score": 60.0,
            "features": 1
          },
          "DS0023": {
            "score": 0.0,
            "features": 2
          },
          "DS0013": {
            "score": 100.0,
            "features": 6
          },
          "DS0005": {
            "score": 70.0,
            "features": 3
          },
          "DS0012": {
            "score": 100.0,
            "features": 1
          }
        },
        "CrowdStrike": {
          "DS0009": {
            "score": 100.0,
            "features": 5
          },
          "DS0011": {
            "score": 100.0,
            "features": 1
          },
          "DS0022": {
            "score": 85.0,
            "features": 10
          },
          "DS0002": {
            "score": 87.5,
            "features": 4
          },
          "DS0028": {
            "score": 100.0,
            "features": 1
          },
          "DS0029": {
            "score": 80.0,
            "features": 5
          },
          "DS0024": {
            "score": 33.3,
            "features": 3
          },
          "DS0003": {
            "score": 100.0,
            "features": 3
          },
          "DS0019": {
            "score": 50.0,
            "features": 3
          },
          "DS0027": {
            "score": 100.0,
            "features": 1
          },
          "DS0016": {
            "score": 100.0,
            "features": 3
          },
          "DS0026": {
            "score": 0.0,
            "features": 1
          },
          "DS0023": {
            "score": 100.0,
            "features": 2
          },
          "DS0013": {
            "score": 83.3,
            "features": 6
          },
          "DS0005": {
            "score": 100.0,
            "features": 3
          },
          "DS0012": {
            "score": 100.0,
            "features": 1
          }
        },
        "Cybereason": {
          "DS0009": {
            "score": 80.0,
            "features": 5
          },
          "DS0011": {
            "score": 100.0,
            "features": 1
          },
          "DS0022": {
            "score": 55.0,
            "features": 10
          },
          "DS0002": {
            "score": 25.0,
            "features": 4
          },
          "DS0028": {
            "score": 100.0,
            "features": 1
          },
          "DS0029": {
            "score": 70.0,
            "features": 5
          },
          "DS0024": {
            "score": 50.0,
            "features": 3
          },
          "DS0003": {
            "score": 66.7,
            "features": 3
          },
          "DS0019": {
            "score": 33.3,
            "features": 3
          },
          "DS0027": {
            "score": 100.0,
            "features": 1
          },
          "DS0016": {
            "score": 66.7,
            "features": 3
          },
          "DS0026": {
            "score": 0.0,
            "features": 1
          },
          "DS0023": {
            "score": 0.0,
            "features": 2
          },
          "DS0013": {
            "score": 83.3,
            "features": 6
          },
          "DS0005": {
            "score": 100.0,
            "features": 3
          },
          "DS0012": {
            "score": 0.0,
            "features": 1
          }
        },
        "Cylance": {
          "DS0009": {
            "score": 54.0,
            "features": 5
          },
          "DS0011": {
            "score": 100.0,
            "features": 1
          },
          "DS0022": {
            "score": 64.0,
            "features": 10
          },
          "DS0002": {
            "score": 60.0,
            "features": 4
          },
          "DS0028": {
            "score": 60.0,
            "features": 1
          },
          "DS0029": {
            "score": 80.0,
            "features": 5
          },
          "DS0024": {
            "score": 100.0,
            "features": 3
          },
          "DS0003": {
            "score": 60.0,
            "features": 3
          },
          "DS0019": {
            "score": 0.0,
            "features": 3
          },
          "DS0027": {
            "score": 0.0,
            "features": 1
          },
          "DS0016": {
            "score": 0.0,
            "features": 3
          },
          "DS0026": {
            "score": 0.0,
            "features": 1
          },
          "DS0023": {
            "score": 0.0,
            "features": 2
          },
          "DS0013": {
            "score": 100.0,
            "features": 6
          },
          "DS0005": {
            "score": 100.0,
            "features": 3
          },
          "DS0012": {
            "score": 100.0,
            "features": 1
          }
        },
        "ESET Inspect": {
          "DS0009": {
            "score": 70.0,
            "features": 5
          },
          "DS0011": {
            "score": 100.0,
            "features": 1
          },
          "DS0022": {
            "score": 65.0,
            "features": 10
          },
          "DS0002": {
            "score": 100.0,
            "features": 4
          },
          "DS0028": {
            "score": 100.0,
            "features": 1
          },
          "DS0029": {
            "score": 70.0,
            "features": 5
          },
          "DS0024": {
            "score": 100.0,
            "features": 3
          },
          "DS0003": {
            "score": 33.3,
            "features": 3
          },
          "DS0019": {
            "score": 33.3,
            "features": 3
          },
          "DS0027": {
            "score": 100.0,
            "features": 1
          },
          "DS0016": {
            "score": 100.0,
            "features": 3
          },
          "DS0026": {
            "score": 0.0,
            "features": 1
          },
          "DS0023": {
            "score": 50.0,
            "features": 2
          },
          "DS0013": {
            "score": 66.7,
            "features": 6
          },
          "DS0005": {
            "score": 100.0,
            "features": 3
          },
          "DS0012": {
            "score": 100.0,
            "features": 1
          }
        },
        "Elastic": {
          "DS0009": {
            "score": 100.0,
            "features": 5
          },
          "DS0011": {
            "score": 100.0,
            "features": 1
          },
          "DS0022": {
            "score": 85.0,
            "features": 10
          },
          "DS0002": {
            "score": 70.0,
            "features": 4
          },
          "DS0028": {
            "score": 100.0,
            "features": 1
          },
          "DS0029": {
            "score": 80.0,
            "features": 5
          },
          "DS0024": {
            "score": 100.0,
            "features": 3
          },
          "DS0003": {
            "score": 60.0,
            "features": 3
          },
          "DS0019": {
            "score": 60.0,
            "features": 3
          },
          "DS0027": {
            "score": 100.0,
            "features": 1
          },
          "DS0016": {
            "score": 46.7,
            "features": 3
          },
          "DS0026": {
            "score": 0.0,
            "features": 1
          },
          "DS0023": {
            "score": 0.0,
            "features": 2
          },
          "DS0013": {
            "score": 83.3,
            "features": 6
          },
          "DS0005": {
            "score": 100.0,
            "features": 3
          },
          "DS0012": {
            "score": 70.0,
            "features": 1
          }
        },
        "FortiEDR": {
          "DS0009": {
            "score": 34.0,
            "features": 5
          },
          "DS0011": {
            "score": 70.0,
            "features": 1
          },
          "DS0022": {
            "score": 58.0,
            "features": 10
          },
          "DS0002": {
            "score": 60.0,
            "features": 4
          },
          "DS0028": {
            "score": 60.0,
            "features": 1
          },
          "DS0029": {
            "score": 54.0,
            "features": 5
          },
          "DS0024": {
            "score": 70.0,
            "features": 3
          },
          "DS0003": {
            "score": 60.0,
            "features": 3
          },
          "DS0019": {
            "score": 60.0,
            "features": 3
          },
          "DS0027": {
            "score": 70.0,
            "features": 1
          },
          "DS0016": {
            "score": 0.0,
            "features": 3
          },
          "DS0026": {
            "score": 0.0,
            "features": 1
          },
          "DS0023": {
            "score": 0.0,
            "features": 2
          },
          "DS0013": {
            "score": 66.7,
            "features": 6
          },
          "DS0005": {
            "score": 60.0,
            "features": 3
          },
          "DS0012": {
            "score": 60.0,
            "features": 1
          }
        },
        "Harfanglab": {
          "DS0009": {
            "score": 80.0,
            "features": 5
          },
          "DS0011": {
            "score": 100.0,
            "features": 1
          },
          "DS0022": {
            "score": 90.0,
            "features": 10
          },
          "DS0002": {
            "score": 100.0,
            "features": 4
          },
          "DS0028": {
            "score": 100.0,
            "features": 1
          },
          "DS0029": {
            "score": 92.0,
            "features": 5
          },
          "DS0024": {
            "score": 100.0,
            "features": 3
          },
          "DS0003": {
            "score": 100.0,
            "features": 3
          },
          "DS0019": {
            "score": 66.7,
            "features": 3
          },
          "DS0027": {
            "score": 100.0,
            "features": 1
          },
          "DS0016": {
            "score": 33.3,
            "features": 3
          },
          "DS0026": {
            "score": 0.0,
            "features": 1
          },
          "DS0023": {
            "score": 100.0,
            "features": 2
          },
          "DS0013": {
            "score": 83.3,
            "features": 6
          },
          "DS0005": {
            "score": 100.0,
            "features": 3
          },
          "DS0012": {
            "score": 100.0,
            "features": 1
          }
        },
        "LimaCharlie": {
          "DS0009": {
            "score": 100.0,
            "features": 5
          },
          "DS0011": {
            "score": 100.0,
            "features": 1
          },
          "DS0022": {
            "score": 75.0,
            "features": 10
          },
          "DS0002": {
            "score": 57.5,
            "features": 4
          },
          "DS0028": {
            "score": 50.0,
            "features": 1
          },
          "DS0029": {
            "score": 70.0,
            "features": 5
          },
          "DS0024": {
            "score": 100.0,
            "features": 3
          },
          "DS0003": {
            "score": 60.0,
            "features": 3
          },
          "DS0019": {
            "score": 66.7,
            "features": 3
          },
          "DS0027": {
            "score": 100.0,
            "features": 1
          },
          "DS0016": {
            "score": 66.7,
            "features": 3
          },
          "DS0026": {
            "score": 0.0,
            "features": 1
          },
          "DS0023": {
            "score": 100.0,
            "features": 2
          },
          "DS0013": {
            "score": 83.3,
            "features": 6
          },
          "DS0005": {
            "score": 0.0,
            "features": 3
          },
          "DS0012": {
            "score": 60.0,
            "features": 1
          }
        },
        "MDE": {
          "DS0009": {
            "score": 80.0,
            "features": 5
          },
          "DS0011": {
            "score": 100.0,
            "features": 1
          },
          "DS0022": {
            "score": 70.0,
            "features": 10
          },
          "DS0002": {
            "score": 100.0,
            "features": 4
          },
          "DS0028": {
            "score": 100.0,
            "features": 1
          },
          "DS0029": {
            "score": 80.0,
            "features": 5
          },
          "DS0024": {
            "score": 100.0,
            "features": 3
          },
          "DS0003": {
            "score": 100.0,
            "features": 3
          },
          "DS0019": {
            "score": 33.3,
            "features": 3
          },
          "DS0027": {
            "score": 100.0,
            "features": 1
          },
          "DS0016": {
            "score": 100.0,
            "features": 3
          },
          "DS0026": {
            "score": 100.0,
            "features": 1
          },
          "DS0023": {
            "score": 100.0,
            "features": 2
          },
          "DS0013": {
            "score": 63.3,
            "features": 6
          },
          "DS0005": {
            "score": 100.0,
            "features": 3
          },
          "DS0012": {
            "score": 100.0,
            "features": 1
          }
        },
        "OpenEDR": {
          "DS0009": {
            "score": 20.0,
            "features": 5
          },
          "DS0011": {
            "score": 0.0,
            "features": 1
          },
          "DS0022": {
            "score": 30.0,
            "features": 10
          },
          "DS0002": {
            "score": 0.0,
            "features": 4
          },
          "DS0028": {
            "score": 0.0,
            "features": 1
          },
          "DS0029": {
            "score": 40.0,
            "features": 5
          },
          "DS0024": {
            "score": 66.7,
            "features": 3
          },
          "DS0003": {
            "score": 0.0,
            "features": 3
          },
          "DS0019": {
            "score": 0.0,
            "features": 3
          },
          "DS0027": {
            "score": 0.0,
            "features": 1
          },
          "DS0016": {
            "score": 0.0,
            "features": 3
          },
          "DS0026": {
            "score": 0.0,
            "features": 1
          },
          "DS0023": {
            "score": 0.0,
            "features": 2
          },
          "DS0013": {
            "score": 83.3,
            "features": 6
          },
          "DS0005": {
            "score": 0.0,
            "features": 3
          },
          "DS0012": {
            "score": 0.0,
            "features": 1
          }
        },
        "Padvish XDR": {
          "DS0009": {
            "score": 70.0,
            "features": 5
          },
          "DS0011": {
            "score": 100.0,
            "features": 1
          },
          "DS0022": {
            "score": 55.0,
            "features": 10
          },
          "DS0002": {
            "score": 60.0,
            "features": 4
          },
          "DS0028": {
            "score": 60.0,
            "features": 1
          },
          "DS0029": {
            "score": 80.0,
            "features": 5
          },
          "DS0024": {
            "score": 66.7,
            "features": 3
          },
          "DS0003": {
            "score": 73.3,
            "features": 3
          },
          "DS0019": {
            "score": 66.7,
            "features": 3
          },
          "DS0027": {
            "score": 100.0,
            "features": 1
          },
          "DS0016": {
            "score": 100.0,
            "features": 3
          },
          "DS0026": {
            "score": 0.0,
            "features": 1
          },
          "DS0023": {
            "score": 0.0,
            "features": 2
          },
          "DS0013": {
            "score": 70.0,
            "features": 6
          },
          "DS0005": {
            "score": 100.0,
            "features": 3
          },
          "DS0012": {
            "score": 100.0,
            "features": 1
          }
        },
        "Qualys": {
          "DS0009": {
            "score": 80.0,
            "features": 5
          },
          "DS0011": {
            "score": 100.0,
            "features": 1
          },
          "DS0022": {
            "score": 70.0,
            "features": 10
          },
          "DS0002": {
            "score": 60.0,
            "features": 4
          },
          "DS0028": {
            "score": 60.0,
            "features": 1
          },
          "DS0029": {
            "score": 80.0,
            "features": 5
          },
          "DS0024": {
            "score": 66.7,
            "features": 3
          },
          "DS0003": {
            "score": 60.0,
            "features": 3
          },
          "DS0019": {
            "score": 66.7,
            "features": 3
          },
          "DS0027": {
            "score": 100.0,
            "features": 1
          },
          "DS0016": {
            "score": 0.0,
            "features": 3
          },
          "DS0026": {
            "score": 0.0,
            "features": 1
          },
          "DS0023": {
            "score": 0.0,
            "features": 2
          },
          "DS0013": {
            "score": 83.3,
            "features": 6
          },
          "DS0005": {
            "score": 60.0,
            "features": 3
          },
          "DS0012": {
            "score": 100.0,
            "features": 1
          }
        },
        "SentinelOne": {
          "DS0009": {
            "score": 80.0,
            "features": 5
          },
          "DS0011": {
            "score": 100.0,
            "features": 1
          },
          "DS0022": {
            "score": 70.0,
            "features": 10
          },
          "DS0002": {
            "score": 80.0,
            "features": 4
          },
          "DS0028": {
            "score": 100.0,
            "features": 1
          },
          "DS0029": {
            "score": 74.0,
            "features": 5
          },
          "DS0024": {
            "score": 100.0,
            "features": 3
          },
          "DS0003": {
            "score": 100.0,
            "features": 3
          },
          "DS0019": {
            "score": 56.7,
            "features": 3
          },
          "DS0027": {
            "score": 100.0,
            "features": 1
          },
          "DS0016": {
            "score": 66.7,
            "features": 3
          },
          "DS0026": {
            "score": 100.0,
            "features": 1
          },
          "DS0023": {
            "score": 70.0,
            "features": 2
          },
          "DS0013": {
            "score": 100.0,
            "features": 6
          },
          "DS0005": {
            "score": 100.0,
            "features": 3
          },
          "DS0012": {
            "score": 100.0,
            "features": 1
          }
        },
        "Symantec SES Complete": {
          "DS0009": {
            "score": 80.0,
            "features": 5
          },
          "DS0011": {
            "score": 100.0,
            "features": 1
          },
          "DS0022": {
            "score": 70.0,
            "features": 10
          },
          "DS0002": {
            "score": 25.0,
            "features": 4
          },
          "DS0028": {
            "score": 100.0,
            "features": 1
          },
          "DS0029": {
            "score": 38.0,
            "features": 5
          },
          "DS0024": {
            "score": 100.0,
            "features": 3
          },
          "DS0003": {
            "score": 0.0,
            "features": 3
          },
          "DS0019": {
            "score": 0.0,
            "features": 3
          },
          "DS0027": {
            "score": 0.0,
            "features": 1
          },
          "DS0016": {
            "score": 46.7,
            "features": 3
          },
          "DS0026": {
            "score": 0.0,
            "features": 1
          },
          "DS0023": {
            "score": 0.0,
            "features": 2
          },
          "DS0013": {
            "score": 70.0,
            "features": 6
          },
          "DS0005": {
            "score": 50.0,
            "features": 3
          },
          "DS0012": {
            "score": 100.0,
            "features": 1
          }
        },
        "Sysmon": {
          "DS0009": {
            "score": 100.0,
            "features": 5
          },
          "DS0011": {
            "score": 100.0,
            "features": 1
          },
          "DS0022": {
            "score": 50.0,
            "features": 10
          },
          "DS0002": {
            "score": 0.0,
            "features": 4
          },
          "DS0028": {
            "score": 0.0,
            "features": 1
          },
          "DS0029": {
            "score": 60.0,
            "features": 5
          },
          "DS0024": {
            "score": 100.0,
            "features": 3
          },
          "DS0003": {
            "score": 0.0,
            "features": 3
          },
          "DS0019": {
            "score": 0.0,
            "features": 3
          },
          "DS0027": {
            "score": 100.0,
            "features": 1
          },
          "DS0016": {
            "score": 0.0,
            "features": 3
          },
          "DS0026": {
            "score": 0.0,
            "features": 1
          },
          "DS0023": {
            "score": 100.0,
            "features": 2
          },
          "DS0013": {
            "score": 50.0,
            "features": 6
          },
          "DS0005": {
            "score": 100.0,
            "features": 3
          },
          "DS0012": {
            "score": 0.0,
            "features": 1
          }
        },
        "Trellix": {
          "DS0009": {
            "score": 80.0,
            "features": 5
          },
          "DS0011": {
            "score": 100.0,
            "features": 1
          },
          "DS0022": {
            "score": 70.0,
            "features": 10
          },
          "DS0002": {
            "score": 100.0,
            "features": 4
          },
          "DS0028": {
            "score": 100.0,
            "features": 1
          },
          "DS0029": {
            "score": 80.0,
            "features": 5
          },
          "DS0024": {
            "score": 100.0,
            "features": 3
          },
          "DS0003": {
            "score": 33.3,
            "features": 3
          },
          "DS0019": {
            "score": 33.3,
            "features": 3
          },
          "DS0027": {
            "score": 0.0,
            "features": 1
          },
          "DS0016": {
            "score": 0.0,
            "features": 3
          },
          "DS0026": {
            "score": 0.0,
            "features": 1
          },
          "DS0023": {
            "score": 50.0,
            "features": 2
          },
          "DS0013": {
            "score": 33.3,
            "features": 6
          },
          "DS0005": {
            "score": 100.0,
            "features": 3
          },
          "DS0012": {
            "score": 100.0,
            "features": 1
          }
        },
        "Trend Micro": {
          "DS0009": {
            "score": 94.0,
            "features": 5
          },
          "DS0011": {
            "score": 100.0,
            "features": 1
          },
          "DS0022": {
            "score": 74.0,
            "features": 10
          },
          "DS0002": {
            "score": 62.5,
            "features": 4
          },
          "DS0028": {
            "score": 60.0,
            "features": 1
          },
          "DS0029": {
            "score": 80.0,
            "features": 5
          },
          "DS0024": {
            "score": 100.0,
            "features": 3
          },
          "DS0003": {
            "score": 60.0,
            "features": 3
          },
          "DS0019": {
            "score": 60.0,
            "features": 3
          },
          "DS0027": {
            "score": 70.0,
            "features": 1
          },
          "DS0016": {
            "score": 0.0,
            "features": 3
          },
          "DS0026": {
            "score": 0.0,
            "features": 1
          },
          "DS0023": {
            "score": 70.0,
            "features": 2
          },
          "DS0013": {
            "score": 0.0,
            "features": 6
          },
          "DS0005": {
            "score": 60.0,
            "features": 3
          },
          "DS0012": {
            "score": 100.0,
            "features": 1
          }
        },
        "Uptycs": {
          "DS0009": {
            "score": 60.0,
            "features": 5
          },
          "DS0011": {
            "score": 100.0,
            "features": 1
          },
          "DS0022": {
            "score": 95.0,
            "features": 10
          },
          "DS0002": {
            "score": 70.0,
            "features": 4
          },
          "DS0028": {
            "score": 100.0,
            "features": 1
          },
          "DS0029": {
            "score": 90.0,
            "features": 5
          },
          "DS0024": {
            "score": 100.0,
            "features": 3
          },
          "DS0003": {
            "score": 73.3,
            "features": 3
          },
          "DS0019": {
            "score": 100.0,
            "features": 3
          },
          "DS0027": {
            "score": 60.0,
            "features": 1
          },
          "DS0016": {
            "score": 100.0,
            "features": 3
          },
          "DS0026": {
            "score": 60.0,
            "features": 1
          },
          "DS0023": {
            "score": 50.0,
            "features": 2
          },
          "DS0013": {
            "score": 83.3,
            "features": 6
          },
          "DS0005": {
            "score": 100.0,
            "features": 3
          },
          "DS0012": {
            "score": 100.0,
            "features": 1
          }
        },
        "WatchGuard": {
          "DS0009": {
            "score": 40.0,
            "features": 5
          },
          "DS0011": {
            "score": 100.0,
            "features": 1
          },
          "DS0022": {
            "score": 35.0,
            "features": 10
          },
          "DS0002": {
            "score": 25.0,
            "features": 4
          },
          "DS0028": {
            "score": 100.0,
            "features": 1
          },
          "DS0029": {
            "score": 90.0,
            "features": 5
          },
          "DS0024": {
            "score": 100.0,
            "features": 3
          },
          "DS0003": {
            "score": 0.0,
            "features": 3
          },
          "DS0019": {
            "score": 33.3,
            "features": 3
          },
          "DS0027": {
            "score": 0.0,
            "features": 1
          },
          "DS0016": {
            "score": 100.0,
            "features": 3
          },
          "DS0026": {
            "score": 0.0,
            "features": 1
          },
          "DS0023": {
            "score": 0.0,
            "features": 2
          },
          "DS0013": {
            "score": 33.3,
            "features": 6
          },
          "DS0005": {
            "score": 100.0,
            "features": 3
          },
          "DS0012": {
            "score": 0.0,
            "features": 1
          }
        }
      },
      "subToDs": {
        "Process Creation": [
          "DS0009"
        ],
        "Process Termination": [
          "DS0009"
        ],
        "Process Access": [
          "DS0009"
        ],
        "Image/Library Loaded": [
          "DS0011"
        ],
        "Remote Thread Creation": [
          "DS0009"
        ],
        "Process Tampering Activity": [
          "DS0009"
        ],
        "File Creation": [
          "DS0022"
        ],
        "File Opened": [
          "DS0022"
        ],
        "File Deletion": [
          "DS0022"
        ],
        "File Modification": [
          "DS0022"
        ],
        "File Renaming": [
          "DS0022"
        ],
        "Local Account Creation": [
          "DS0002"
        ],
        "Local Account Modification": [
          "DS0002"
        ],
        "Local Account Deletion": [
          "DS0002"
        ],
        "Account Login": [
          "DS0002",
          "DS0028"
        ],
        "TCP Connection": [
          "DS0029"
        ],
        "UDP Connection": [
          "DS0029"
        ],
        "URL": [
          "DS0029"
        ],
        "DNS Query": [
          "DS0029"
        ],
        "File Downloaded": [
          "DS0022",
          "DS0029"
        ],
        "MD5": [
          "DS0022"
        ],
        "SHA": [
          "DS0022"
        ],
        "IMPHASH": [
          "DS0022"
        ],
        "Key/Value Creation": [
          "DS0024"
        ],
        "Key/Value Modification": [
          "DS0024"
        ],
        "Key/Value Deletion": [
          "DS0024"
        ],
        "Scheduled Task Creation": [
          "DS0003"
        ],
        "Scheduled Task Modification": [
          "DS0003"
        ],
        "Scheduled Task Deletion": [
          "DS0003"
        ],
        "Service Creation": [
          "DS0019"
        ],
        "Service Modification": [
          "DS0019"
        ],
        "Service Deletion": [
          "DS0019"
        ],
        "Driver Loaded": [
          "DS0027"
        ],
        "Driver Modification": [
          "DS0022"
        ],
        "Virtual Disk Mount": [
          "DS0016"
        ],
        "USB Device Unmount": [
          "DS0016"
        ],
        "USB Device Mount": [
          "DS0016"
        ],
        "Group Policy Modification": [
          "DS0026"
        ],
        "Pipe Creation": [
          "DS0023"
        ],
        "Pipe Connection": [
          "DS0023"
        ],
        "Agent Start": [
          "DS0013"
        ],
        "Agent Stop": [
          "DS0013"
        ],
        "Agent Install": [
          "DS0013"
        ],
        "Agent Uninstall": [
          "DS0013"
        ],
        "Agent Keep-Alive": [
          "DS0013"
        ],
        "Agent Errors": [
          "DS0013"
        ],
        "WmiEventConsumerToFilter": [
          "DS0005"
        ],
        "WmiEventConsumer": [
          "DS0005"
        ],
        "WmiEventFilter": [
          "DS0005"
        ],
        "BIT JOBS Activity": [
          "DS0012",
          "DS0017"
        ],
        "Script-Block Activity": [
          "DS0012"
        ]
      }
    },
    "linux": {
      "features": [
        {
          "category": "Process Activity",
          "sub": "Process Creation",
          "values": {
            "Auditd": "yes",
            "BitDefender": "yes",
            "Cortex XDR": "yes",
            "Carbon Black Cloud": "yes",
            "C-Prot": "yes",
            "CrowdStrike": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "Harfanglab": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "Qualys": "yes",
            "SentinelOne": "yes",
            "Sysmon": "yes",
            "Uptycs": "yes"
          }
        },
        {
          "category": "Process Activity",
          "sub": "Process Termination",
          "values": {
            "Auditd": "no",
            "BitDefender": "yes",
            "Cortex XDR": "yes",
            "Carbon Black Cloud": "no",
            "C-Prot": "yes",
            "CrowdStrike": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "Harfanglab": "no",
            "LimaCharlie": "yes",
            "MDE": "no",
            "Qualys": "yes",
            "SentinelOne": "no",
            "Sysmon": "yes",
            "Uptycs": "yes"
          }
        },
        {
          "category": "File Manipulation",
          "sub": "File Creation",
          "values": {
            "Auditd": "yes",
            "BitDefender": "yes",
            "Cortex XDR": "yes",
            "Carbon Black Cloud": "yes",
            "C-Prot": "yes",
            "CrowdStrike": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "Harfanglab": "no",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "Qualys": "yes",
            "SentinelOne": "yes",
            "Sysmon": "yes",
            "Uptycs": "yes"
          }
        },
        {
          "category": "File Manipulation",
          "sub": "File Modification",
          "values": {
            "Auditd": "yes",
            "BitDefender": "yes",
            "Cortex XDR": "yes",
            "Carbon Black Cloud": "yes",
            "C-Prot": "yes",
            "CrowdStrike": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "Harfanglab": "yes",
            "LimaCharlie": "yes",
            "MDE": "partial",
            "Qualys": "yes",
            "SentinelOne": "yes",
            "Sysmon": "no",
            "Uptycs": "yes"
          }
        },
        {
          "category": "File Manipulation",
          "sub": "File Deletion",
          "values": {
            "Auditd": "yes",
            "BitDefender": "yes",
            "Cortex XDR": "yes",
            "Carbon Black Cloud": "yes",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "Harfanglab": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "Qualys": "yes",
            "SentinelOne": "yes",
            "Sysmon": "yes",
            "Uptycs": "yes"
          }
        },
        {
          "category": "User Activity",
          "sub": "User Logon",
          "values": {
            "Auditd": "no",
            "BitDefender": "yes",
            "Cortex XDR": "yes",
            "Carbon Black Cloud": "no",
            "C-Prot": "yes",
            "CrowdStrike": "yes",
            "ESET Inspect": "no",
            "Elastic": "eventlog",
            "Harfanglab": "yes",
            "LimaCharlie": "no",
            "MDE": "yes",
            "Qualys": "no",
            "SentinelOne": "yes",
            "Sysmon": "no",
            "Uptycs": "yes"
          }
        },
        {
          "category": "User Activity",
          "sub": "User Logoff",
          "values": {
            "Auditd": "no",
            "BitDefender": "yes",
            "Cortex XDR": "no",
            "Carbon Black Cloud": "no",
            "C-Prot": "yes",
            "CrowdStrike": "yes",
            "ESET Inspect": "no",
            "Elastic": "eventlog",
            "Harfanglab": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Qualys": "no",
            "SentinelOne": "no",
            "Sysmon": "no",
            "Uptycs": "yes"
          }
        },
        {
          "category": "User Activity",
          "sub": "Logon Failed",
          "values": {
            "Auditd": "no",
            "BitDefender": "no",
            "Cortex XDR": "yes",
            "Carbon Black Cloud": "no",
            "C-Prot": "yes",
            "CrowdStrike": "yes",
            "ESET Inspect": "no",
            "Elastic": "eventlog",
            "Harfanglab": "yes",
            "LimaCharlie": "no",
            "MDE": "yes",
            "Qualys": "no",
            "SentinelOne": "yes",
            "Sysmon": "no",
            "Uptycs": "yes"
          }
        },
        {
          "category": "Script Activity",
          "sub": "Script Content",
          "values": {
            "Auditd": "no",
            "BitDefender": "no",
            "Cortex XDR": "no",
            "Carbon Black Cloud": "no",
            "C-Prot": "yes",
            "CrowdStrike": "yes",
            "ESET Inspect": "no",
            "Elastic": "no",
            "Harfanglab": "no",
            "LimaCharlie": "no",
            "MDE": "yes",
            "Qualys": "no",
            "SentinelOne": "no",
            "Sysmon": "no",
            "Uptycs": "enabling"
          }
        },
        {
          "category": "Network Activity",
          "sub": "Network Connection",
          "values": {
            "Auditd": "yes",
            "BitDefender": "yes",
            "Cortex XDR": "yes",
            "Carbon Black Cloud": "yes",
            "C-Prot": "yes",
            "CrowdStrike": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "Harfanglab": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "Qualys": "yes",
            "SentinelOne": "yes",
            "Sysmon": "yes",
            "Uptycs": "yes"
          }
        },
        {
          "category": "Network Activity",
          "sub": "Network Socket Listen",
          "values": {
            "Auditd": "yes",
            "BitDefender": "yes",
            "Cortex XDR": "yes",
            "Carbon Black Cloud": "no",
            "C-Prot": "yes",
            "CrowdStrike": "yes",
            "ESET Inspect": "no",
            "Elastic": "yes",
            "Harfanglab": "yes",
            "LimaCharlie": "partial",
            "MDE": "yes",
            "Qualys": "partial",
            "SentinelOne": "no",
            "Sysmon": "no",
            "Uptycs": "yes"
          }
        },
        {
          "category": "Network Activity",
          "sub": "DNS Query",
          "values": {
            "Auditd": "no",
            "BitDefender": "no",
            "Cortex XDR": "no",
            "Carbon Black Cloud": "no",
            "C-Prot": "yes",
            "CrowdStrike": "yes",
            "ESET Inspect": "no",
            "Elastic": "yes",
            "Harfanglab": "yes",
            "LimaCharlie": "yes",
            "MDE": "no",
            "Qualys": "enabling",
            "SentinelOne": "yes",
            "Sysmon": "no",
            "Uptycs": "yes"
          }
        },
        {
          "category": "Scheduled Task Activity",
          "sub": "Scheduled Task",
          "values": {
            "Auditd": "no",
            "BitDefender": "no",
            "Cortex XDR": "no",
            "Carbon Black Cloud": "no",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "Harfanglab": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Qualys": "no",
            "SentinelOne": "yes",
            "Sysmon": "no",
            "Uptycs": "yes"
          }
        },
        {
          "category": "User Account Activity",
          "sub": "User Account Created",
          "values": {
            "Auditd": "no",
            "BitDefender": "yes",
            "Cortex XDR": "no",
            "Carbon Black Cloud": "no",
            "C-Prot": "yes",
            "CrowdStrike": "yes",
            "ESET Inspect": "no",
            "Elastic": "eventlog",
            "Harfanglab": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Qualys": "no",
            "SentinelOne": "yes",
            "Sysmon": "no",
            "Uptycs": "yes"
          }
        },
        {
          "category": "User Account Activity",
          "sub": "User Account Modified",
          "values": {
            "Auditd": "no",
            "BitDefender": "no",
            "Cortex XDR": "no",
            "Carbon Black Cloud": "no",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "eventlog",
            "Harfanglab": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Qualys": "no",
            "SentinelOne": "no",
            "Sysmon": "no",
            "Uptycs": "yes"
          }
        },
        {
          "category": "User Account Activity",
          "sub": "User Account Deleted",
          "values": {
            "Auditd": "no",
            "BitDefender": "no",
            "Cortex XDR": "no",
            "Carbon Black Cloud": "no",
            "C-Prot": "yes",
            "CrowdStrike": "yes",
            "ESET Inspect": "no",
            "Elastic": "eventlog",
            "Harfanglab": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Qualys": "no",
            "SentinelOne": "yes",
            "Sysmon": "no",
            "Uptycs": "yes"
          }
        },
        {
          "category": "Driver/Module Activity",
          "sub": "Driver Load",
          "values": {
            "Auditd": "yes",
            "BitDefender": "no",
            "Cortex XDR": "no",
            "Carbon Black Cloud": "no",
            "C-Prot": "yes",
            "CrowdStrike": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "Harfanglab": "no",
            "LimaCharlie": "no",
            "MDE": "enabling",
            "Qualys": "no",
            "SentinelOne": "no",
            "Sysmon": "no",
            "Uptycs": "yes"
          }
        },
        {
          "category": "Driver/Module Activity",
          "sub": "Image Load",
          "values": {
            "Auditd": "yes",
            "BitDefender": "yes",
            "Cortex XDR": "yes",
            "Carbon Black Cloud": "no",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "Harfanglab": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Qualys": "no",
            "SentinelOne": "no",
            "Sysmon": "no",
            "Uptycs": "yes"
          }
        },
        {
          "category": "Driver/Module Activity",
          "sub": "eBPF Event",
          "values": {
            "Auditd": "yes",
            "BitDefender": "no",
            "Cortex XDR": "no",
            "Carbon Black Cloud": "no",
            "C-Prot": "yes",
            "CrowdStrike": "yes",
            "ESET Inspect": "no",
            "Elastic": "no",
            "Harfanglab": "yes",
            "LimaCharlie": "no",
            "MDE": "enabling",
            "Qualys": "no",
            "SentinelOne": "yes",
            "Sysmon": "no",
            "Uptycs": "enabling"
          }
        },
        {
          "category": "Access Activity",
          "sub": "Raw Access Read",
          "values": {
            "Auditd": "yes",
            "BitDefender": "no",
            "Cortex XDR": "no",
            "Carbon Black Cloud": "no",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "Harfanglab": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Qualys": "no",
            "SentinelOne": "no",
            "Sysmon": "yes",
            "Uptycs": "enabling"
          }
        },
        {
          "category": "Access Activity",
          "sub": "Process Access",
          "values": {
            "Auditd": "yes",
            "BitDefender": "yes",
            "Cortex XDR": "no",
            "Carbon Black Cloud": "no",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "yes",
            "Harfanglab": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Qualys": "no",
            "SentinelOne": "no",
            "Sysmon": "no",
            "Uptycs": "enabling"
          }
        },
        {
          "category": "Process Tampering Activity",
          "sub": "Process Tampering",
          "values": {
            "Auditd": "yes",
            "BitDefender": "yes",
            "Cortex XDR": "no",
            "Carbon Black Cloud": "no",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "yes",
            "Harfanglab": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Qualys": "no",
            "SentinelOne": "yes",
            "Sysmon": "no",
            "Uptycs": "enabling"
          }
        },
        {
          "category": "Anonymous File Activity",
          "sub": "Memory-Backed File Creation",
          "values": {
            "Auditd": "pending",
            "BitDefender": "pending",
            "Cortex XDR": "pending",
            "Carbon Black Cloud": "pending",
            "C-Prot": "pending",
            "CrowdStrike": "pending",
            "ESET Inspect": "pending",
            "Elastic": "yes",
            "Harfanglab": "pending",
            "LimaCharlie": "pending",
            "MDE": "pending",
            "Qualys": "pending",
            "SentinelOne": "pending",
            "Sysmon": "pending",
            "Uptycs": "pending"
          }
        },
        {
          "category": "Service Activity",
          "sub": "Service Creation",
          "values": {
            "Auditd": "no",
            "BitDefender": "no",
            "Cortex XDR": "no",
            "Carbon Black Cloud": "no",
            "C-Prot": "yes",
            "CrowdStrike": "partial",
            "ESET Inspect": "no",
            "Elastic": "no",
            "Harfanglab": "no",
            "LimaCharlie": "yes",
            "MDE": "partial",
            "Qualys": "no",
            "SentinelOne": "yes",
            "Sysmon": "no",
            "Uptycs": "no"
          }
        },
        {
          "category": "Service Activity",
          "sub": "Service Modification",
          "values": {
            "Auditd": "no",
            "BitDefender": "no",
            "Cortex XDR": "no",
            "Carbon Black Cloud": "no",
            "C-Prot": "yes",
            "CrowdStrike": "partial",
            "ESET Inspect": "no",
            "Elastic": "no",
            "Harfanglab": "no",
            "LimaCharlie": "yes",
            "MDE": "no",
            "Qualys": "no",
            "SentinelOne": "yes",
            "Sysmon": "yes",
            "Uptycs": "no"
          }
        },
        {
          "category": "Service Activity",
          "sub": "Service Deletion",
          "values": {
            "Auditd": "no",
            "BitDefender": "no",
            "Cortex XDR": "no",
            "Carbon Black Cloud": "no",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "Harfanglab": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Qualys": "no",
            "SentinelOne": "no",
            "Sysmon": "no",
            "Uptycs": "no"
          }
        },
        {
          "category": "EDR SysOps",
          "sub": "Agent Start",
          "values": {
            "Auditd": "no",
            "BitDefender": "yes",
            "Cortex XDR": "yes",
            "Carbon Black Cloud": "yes",
            "C-Prot": "yes",
            "CrowdStrike": "yes",
            "ESET Inspect": "no",
            "Elastic": "yes",
            "Harfanglab": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "Qualys": "yes",
            "SentinelOne": "yes",
            "Sysmon": "no",
            "Uptycs": "yes"
          }
        },
        {
          "category": "EDR SysOps",
          "sub": "Agent Stop",
          "values": {
            "Auditd": "no",
            "BitDefender": "yes",
            "Cortex XDR": "no",
            "Carbon Black Cloud": "yes",
            "C-Prot": "yes",
            "CrowdStrike": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "Harfanglab": "no",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "Qualys": "yes",
            "SentinelOne": "yes",
            "Sysmon": "no",
            "Uptycs": "yes"
          }
        },
        {
          "category": "Hash Algorithms",
          "sub": "MD5",
          "values": {
            "Auditd": "no",
            "BitDefender": "yes",
            "Cortex XDR": "yes",
            "Carbon Black Cloud": "yes",
            "C-Prot": "yes",
            "CrowdStrike": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "Harfanglab": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "Qualys": "yes",
            "SentinelOne": "no",
            "Sysmon": "yes",
            "Uptycs": "yes"
          }
        },
        {
          "category": "Hash Algorithms",
          "sub": "SHA",
          "values": {
            "Auditd": "no",
            "BitDefender": "yes",
            "Cortex XDR": "yes",
            "Carbon Black Cloud": "yes",
            "C-Prot": "yes",
            "CrowdStrike": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "Harfanglab": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "Qualys": "yes",
            "SentinelOne": "yes",
            "Sysmon": "yes",
            "Uptycs": "yes"
          }
        },
        {
          "category": "Hash Algorithms",
          "sub": "Fuzzy Hash",
          "values": {
            "Auditd": "no",
            "BitDefender": "no",
            "Cortex XDR": "no",
            "Carbon Black Cloud": "no",
            "C-Prot": "partial",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "Harfanglab": "no",
            "LimaCharlie": "yes",
            "MDE": "no",
            "Qualys": "no",
            "SentinelOne": "no",
            "Sysmon": "yes",
            "Uptycs": "yes"
          }
        },
        {
          "category": "File Metadata",
          "sub": "File Entropy",
          "values": {
            "Auditd": "pending",
            "BitDefender": "pending",
            "Cortex XDR": "pending",
            "Carbon Black Cloud": "pending",
            "C-Prot": "pending",
            "CrowdStrike": "pending",
            "ESET Inspect": "pending",
            "Elastic": "enabling",
            "Harfanglab": "pending",
            "LimaCharlie": "pending",
            "MDE": "pending",
            "Qualys": "pending",
            "SentinelOne": "pending",
            "Sysmon": "pending",
            "Uptycs": "pending"
          }
        },
        {
          "category": "File Metadata",
          "sub": "File Header Bytes",
          "values": {
            "Auditd": "pending",
            "BitDefender": "pending",
            "Cortex XDR": "pending",
            "Carbon Black Cloud": "pending",
            "C-Prot": "pending",
            "CrowdStrike": "pending",
            "ESET Inspect": "pending",
            "Elastic": "enabling",
            "Harfanglab": "pending",
            "LimaCharlie": "pending",
            "MDE": "pending",
            "Qualys": "pending",
            "SentinelOne": "pending",
            "Sysmon": "pending",
            "Uptycs": "pending"
          }
        },
        {
          "category": "File Metadata",
          "sub": "File Size",
          "values": {
            "Auditd": "pending",
            "BitDefender": "pending",
            "Cortex XDR": "pending",
            "Carbon Black Cloud": "pending",
            "C-Prot": "pending",
            "CrowdStrike": "pending",
            "ESET Inspect": "pending",
            "Elastic": "yes",
            "Harfanglab": "pending",
            "LimaCharlie": "pending",
            "MDE": "pending",
            "Qualys": "pending",
            "SentinelOne": "pending",
            "Sysmon": "pending",
            "Uptycs": "pending"
          }
        }
      ],
      "vendors": [
        "Auditd",
        "BitDefender",
        "Cortex XDR",
        "Carbon Black Cloud",
        "C-Prot",
        "CrowdStrike",
        "ESET Inspect",
        "Elastic",
        "Harfanglab",
        "LimaCharlie",
        "MDE",
        "Qualys",
        "SentinelOne",
        "Sysmon",
        "Uptycs"
      ],
      "scores": {
        "Auditd": {
          "score": 35.3,
          "counted": 34
        },
        "BitDefender": {
          "score": 50.0,
          "counted": 34
        },
        "Cortex XDR": {
          "score": 38.2,
          "counted": 34
        },
        "Carbon Black Cloud": {
          "score": 26.5,
          "counted": 34
        },
        "C-Prot": {
          "score": 86.8,
          "counted": 34
        },
        "CrowdStrike": {
          "score": 58.8,
          "counted": 34
        },
        "ESET Inspect": {
          "score": 29.4,
          "counted": 34
        },
        "Elastic": {
          "score": 64.7,
          "counted": 34
        },
        "Harfanglab": {
          "score": 35.3,
          "counted": 34
        },
        "LimaCharlie": {
          "score": 42.6,
          "counted": 34
        },
        "MDE": {
          "score": 42.4,
          "counted": 34
        },
        "Qualys": {
          "score": 32.9,
          "counted": 34
        },
        "SentinelOne": {
          "score": 52.9,
          "counted": 34
        },
        "Sysmon": {
          "score": 29.4,
          "counted": 34
        },
        "Uptycs": {
          "score": 75.0,
          "counted": 34
        }
      },
      "partials": [
        {
          "Telemetry Feature Category": "Process Activity",
          "Sub-Category": "Process Creation",
          "SentinelOne (Complete)": "",
          "Qualys": "",
          "Uptycs": "",
          "CrowdStrike": "",
          "C-Prot": "",
          "Sysmon": "",
          "LimaCharlie": "",
          "MDE": "",
          "Elastic": "",
          "Auditd": "",
          "Carbon Black Cloud": ""
        },
        {
          "Telemetry Feature Category": "",
          "Sub-Category": "Process Termination",
          "SentinelOne (Complete)": "",
          "Qualys": "",
          "Uptycs": "",
          "CrowdStrike": "",
          "C-Prot": "",
          "Sysmon": "",
          "LimaCharlie": "",
          "MDE": "",
          "Elastic": "",
          "Auditd": "",
          "Carbon Black Cloud": ""
        },
        {
          "Telemetry Feature Category": "File Manipulation",
          "Sub-Category": "File Creation",
          "SentinelOne (Complete)": "",
          "Qualys": "",
          "Uptycs": "",
          "CrowdStrike": "",
          "C-Prot": "",
          "Sysmon": "",
          "LimaCharlie": "",
          "MDE": "",
          "Elastic": "",
          "Auditd": "",
          "Carbon Black Cloud": ""
        },
        {
          "Telemetry Feature Category": "",
          "Sub-Category": "File Modification",
          "SentinelOne (Complete)": "",
          "Qualys": "",
          "Uptycs": "",
          "CrowdStrike": "",
          "C-Prot": "",
          "Sysmon": "",
          "LimaCharlie": "",
          "MDE": {
            "Partially": "Although the file is modified, the event is recorded as FileCreated instead of FileModified, misrepresenting the actual action and preventing analysts from distinguishing between file creation and modification."
          },
          "Elastic": "",
          "Auditd": "",
          "Carbon Black Cloud": ""
        },
        {
          "Telemetry Feature Category": "",
          "Sub-Category": "File Deletion",
          "SentinelOne (Complete)": "",
          "Qualys": "",
          "Uptycs": "",
          "CrowdStrike": "",
          "C-Prot": "",
          "Sysmon": "",
          "LimaCharlie": "",
          "MDE": "",
          "Elastic": "",
          "Auditd": "",
          "Carbon Black Cloud": ""
        },
        {
          "Telemetry Feature Category": "User Activity",
          "Sub-Category": "User Logon",
          "SentinelOne (Complete)": "",
          "Qualys": "",
          "Uptycs": "",
          "CrowdStrike": "",
          "C-Prot": "",
          "Sysmon": "",
          "LimaCharlie": "",
          "MDE": "",
          "Elastic": "",
          "Auditd": "",
          "Carbon Black Cloud": ""
        },
        {
          "Telemetry Feature Category": "",
          "Sub-Category": "User Logoff",
          "SentinelOne (Complete)": "",
          "Qualys": "",
          "Uptycs": "",
          "CrowdStrike": "",
          "C-Prot": "",
          "Sysmon": "",
          "LimaCharlie": "",
          "MDE": "",
          "Elastic": "",
          "Auditd": "",
          "Carbon Black Cloud": ""
        },
        {
          "Telemetry Feature Category": "",
          "Sub-Category": "Logon Failed",
          "SentinelOne (Complete)": "",
          "Qualys": "",
          "Uptycs": "",
          "CrowdStrike": "",
          "C-Prot": "",
          "Sysmon": "",
          "LimaCharlie": "",
          "MDE": "",
          "Elastic": "",
          "Auditd": "",
          "Carbon Black Cloud": ""
        },
        {
          "Telemetry Feature Category": "Script Activity",
          "Sub-Category": "Script Content",
          "SentinelOne (Complete)": "",
          "Qualys": "",
          "Uptycs": "",
          "CrowdStrike": "",
          "C-Prot": "",
          "Sysmon": "",
          "LimaCharlie": "",
          "MDE": "",
          "Elastic": "",
          "Auditd": "",
          "Carbon Black Cloud": ""
        },
        {
          "Telemetry Feature Category": "Network Activity",
          "Sub-Category": "Network Connection",
          "SentinelOne (Complete)": "",
          "Qualys": "",
          "Uptycs": "",
          "CrowdStrike": "",
          "C-Prot": "",
          "Sysmon": "",
          "LimaCharlie": "",
          "MDE": "",
          "Elastic": "",
          "Auditd": "",
          "Carbon Black Cloud": ""
        },
        {
          "Telemetry Feature Category": "",
          "Sub-Category": "Network Socket Listen",
          "SentinelOne (Complete)": "",
          "Qualys": {
            "Partially": "Only available through the specific endpoint page in the console (not searchable)"
          },
          "Uptycs": "",
          "CrowdStrike": "",
          "C-Prot": "",
          "Sysmon": "",
          "LimaCharlie": {
            "Partially": "Only available through the specific endpoint page in the console (not searchable)"
          },
          "MDE": "",
          "Elastic": "",
          "Auditd": "",
          "Carbon Black Cloud": ""
        },
        {
          "Telemetry Feature Category": "",
          "Sub-Category": "DNS Query",
          "SentinelOne (Complete)": "",
          "Qualys": "",
          "Uptycs": "",
          "CrowdStrike": "",
          "C-Prot": "",
          "Sysmon": "",
          "LimaCharlie": "",
          "MDE": "",
          "Elastic": "",
          "Auditd": "",
          "Carbon Black Cloud": ""
        },
        {
          "Telemetry Feature Category": "Scheduled Task Activity",
          "Sub-Category": "Scheduled Task",
          "SentinelOne (Complete)": "",
          "Qualys": "",
          "Uptycs": "",
          "CrowdStrike": "",
          "C-Prot": "",
          "Sysmon": "",
          "LimaCharlie": "",
          "MDE": "",
          "Elastic": "",
          "Auditd": "",
          "Carbon Black Cloud": ""
        },
        {
          "Telemetry Feature Category": "User Account Activity",
          "Sub-Category": "User Account Created",
          "SentinelOne (Complete)": "",
          "Qualys": "",
          "Uptycs": "",
          "CrowdStrike": "",
          "C-Prot": "",
          "Sysmon": "",
          "LimaCharlie": "",
          "MDE": "",
          "Elastic": "",
          "Auditd": "",
          "Carbon Black Cloud": ""
        },
        {
          "Telemetry Feature Category": "",
          "Sub-Category": "User Account Modified",
          "SentinelOne (Complete)": "",
          "Qualys": "",
          "Uptycs": "",
          "CrowdStrike": "",
          "C-Prot": "",
          "Sysmon": "",
          "LimaCharlie": "",
          "MDE": "",
          "Elastic": "",
          "Auditd": "",
          "Carbon Black Cloud": ""
        },
        {
          "Telemetry Feature Category": "",
          "Sub-Category": "User Account Deleted",
          "SentinelOne (Complete)": "",
          "Qualys": "",
          "Uptycs": "",
          "CrowdStrike": "",
          "C-Prot": "",
          "Sysmon": "",
          "LimaCharlie": "",
          "MDE": "",
          "Elastic": "",
          "Auditd": "",
          "Carbon Black Cloud": ""
        },
        {
          "Telemetry Feature Category": "Driver/Module Activity",
          "Sub-Category": "Driver Load",
          "SentinelOne (Complete)": "",
          "Qualys": "",
          "Uptycs": "",
          "CrowdStrike": "",
          "C-Prot": "",
          "Sysmon": "",
          "LimaCharlie": "",
          "MDE": "",
          "Elastic": "",
          "Auditd": "",
          "Carbon Black Cloud": ""
        },
        {
          "Telemetry Feature Category": "",
          "Sub-Category": "Image Load",
          "SentinelOne (Complete)": "",
          "Qualys": "",
          "Uptycs": "",
          "CrowdStrike": "",
          "C-Prot": "",
          "Sysmon": "",
          "LimaCharlie": "",
          "MDE": "",
          "Elastic": "",
          "Auditd": "",
          "Carbon Black Cloud": ""
        },
        {
          "Telemetry Feature Category": "",
          "Sub-Category": "eBPF Event",
          "SentinelOne (Complete)": "",
          "Qualys": "",
          "Uptycs": "",
          "CrowdStrike": "",
          "C-Prot": "",
          "Sysmon": "",
          "LimaCharlie": "",
          "MDE": "",
          "Elastic": "",
          "Auditd": "",
          "Carbon Black Cloud": ""
        },
        {
          "Telemetry Feature Category": "Access Activity",
          "Sub-Category": "Raw Access Read",
          "SentinelOne (Complete)": "",
          "Qualys": "",
          "Uptycs": "",
          "CrowdStrike": "",
          "C-Prot": "",
          "Sysmon": "",
          "LimaCharlie": "",
          "MDE": "",
          "Elastic": "",
          "Auditd": "",
          "Carbon Black Cloud": ""
        },
        {
          "Telemetry Feature Category": "",
          "Sub-Category": "Process Access",
          "SentinelOne (Complete)": "",
          "Qualys": "",
          "Uptycs": "",
          "CrowdStrike": "",
          "C-Prot": "",
          "Sysmon": "",
          "LimaCharlie": "",
          "MDE": "",
          "Elastic": "",
          "Auditd": "",
          "Carbon Black Cloud": ""
        },
        {
          "Telemetry Feature Category": "Process Tampering Activity",
          "Sub-Category": "Process Tampering",
          "SentinelOne (Complete)": "",
          "Qualys": "",
          "Uptycs": "",
          "CrowdStrike": "",
          "C-Prot": "",
          "Sysmon": "",
          "LimaCharlie": "",
          "MDE": "",
          "Elastic": "",
          "Auditd": "",
          "Carbon Black Cloud": ""
        },
        {
          "Telemetry Feature Category": "Anonymous File Activity",
          "Sub-Category": "Memory-Backed File Creation",
          "SentinelOne (Complete)": "",
          "Qualys": "",
          "Uptycs": "",
          "CrowdStrike": "",
          "C-Prot": "",
          "Sysmon": "",
          "LimaCharlie": "",
          "MDE": "",
          "Elastic": "",
          "Auditd": "",
          "Carbon Black Cloud": ""
        },
        {
          "Telemetry Feature Category": "Service Activity",
          "Sub-Category": "Service Creation",
          "SentinelOne (Complete)": "",
          "Qualys": "",
          "Uptycs": "",
          "CrowdStrike": {
            "Partially": "Service-related events generated via D-Bus calls (as implemented in the test script for creating, modifying, and deleting services) are not visible in the console. This suggests CrowdStrike may not be fully monitoring systemd operations through D-Bus interfaces."
          },
          "Sysmon": "",
          "LimaCharlie": "",
          "MDE": {
            "Partially": "Only available through the timeline. Not searchable in a query."
          },
          "Elastic": "",
          "Auditd": "",
          "Carbon Black Cloud": ""
        },
        {
          "Telemetry Feature Category": "",
          "Sub-Category": "Service Modification",
          "SentinelOne (Complete)": "",
          "Qualys": "",
          "Uptycs": "",
          "CrowdStrike": {
            "Partially": "Service-related events generated via D-Bus calls (as implemented in the test script for creating, modifying, and deleting services) are not visible in the console. This suggests CrowdStrike may not be fully monitoring systemd operations through D-Bus interfaces."
          },
          "Sysmon": "",
          "LimaCharlie": "",
          "MDE": "",
          "Elastic": "",
          "Auditd": "",
          "Carbon Black Cloud": ""
        },
        {
          "Telemetry Feature Category": "",
          "Sub-Category": "Service Deletion",
          "SentinelOne (Complete)": "",
          "Qualys": "",
          "Uptycs": "",
          "CrowdStrike": {
            "Partially": "Service-related events generated via D-Bus calls (as implemented in the test script for creating, modifying, and deleting services) are not visible in the console. This suggests CrowdStrike may not be fully monitoring systemd operations through D-Bus interfaces."
          },
          "Sysmon": "",
          "LimaCharlie": "",
          "MDE": "",
          "Elastic": "",
          "Auditd": "",
          "Carbon Black Cloud": ""
        },
        {
          "Telemetry Feature Category": "EDR SysOps",
          "Sub-Category": "Agent Start",
          "SentinelOne (Complete)": "",
          "Qualys": "",
          "Uptycs": "",
          "CrowdStrike": "",
          "C-Prot": "",
          "Sysmon": "",
          "LimaCharlie": "",
          "MDE": "",
          "Elastic": "",
          "Auditd": "",
          "Carbon Black Cloud": ""
        },
        {
          "Telemetry Feature Category": "",
          "Sub-Category": "Agent Stop",
          "SentinelOne (Complete)": "",
          "Qualys": "",
          "Uptycs": "",
          "CrowdStrike": "",
          "C-Prot": "",
          "Sysmon": "",
          "LimaCharlie": "",
          "MDE": "",
          "Elastic": "",
          "Auditd": "",
          "Carbon Black Cloud": ""
        },
        {
          "Telemetry Feature Category": "Hash Algorithms",
          "Sub-Category": "MD5",
          "SentinelOne (Complete)": "",
          "Qualys": "",
          "Uptycs": "",
          "CrowdStrike": "",
          "C-Prot": "",
          "Sysmon": "",
          "LimaCharlie": "",
          "MDE": "",
          "Elastic": "",
          "Auditd": "",
          "Carbon Black Cloud": ""
        },
        {
          "Telemetry Feature Category": "",
          "Sub-Category": "SHA",
          "SentinelOne (Complete)": "",
          "Qualys": "",
          "Uptycs": "",
          "CrowdStrike": "",
          "C-Prot": "",
          "Sysmon": "",
          "LimaCharlie": "",
          "MDE": "",
          "Elastic": "",
          "Auditd": "",
          "Carbon Black Cloud": ""
        },
        {
          "Telemetry Feature Category": "",
          "Sub-Category": "Fuzzy Hash",
          "SentinelOne (Complete)": "",
          "Qualys": "",
          "Uptycs": "",
          "CrowdStrike": "",
          "C-Prot": {
            "Partially": "Available only for file manipulation events."
          },
          "Sysmon": "",
          "LimaCharlie": "",
          "MDE": "",
          "Elastic": "",
          "Auditd": "",
          "Carbon Black Cloud": ""
        },
        {
          "Telemetry Feature Category": "File Metadata",
          "Sub-Category": "File Entropy",
          "SentinelOne (Complete)": "",
          "Qualys": "",
          "Uptycs": "",
          "CrowdStrike": "",
          "C-Prot": "",
          "Sysmon": "",
          "LimaCharlie": "",
          "MDE": "",
          "Elastic": "",
          "Auditd": "",
          "Carbon Black Cloud": ""
        },
        {
          "Telemetry Feature Category": "",
          "Sub-Category": "File Header Bytes",
          "SentinelOne (Complete)": "",
          "Qualys": "",
          "Uptycs": "",
          "CrowdStrike": "",
          "C-Prot": "",
          "Sysmon": "",
          "LimaCharlie": "",
          "MDE": "",
          "Elastic": "",
          "Auditd": "",
          "Carbon Black Cloud": ""
        },
        {
          "Telemetry Feature Category": "",
          "Sub-Category": "File Size",
          "SentinelOne (Complete)": "",
          "Qualys": "",
          "Uptycs": "",
          "CrowdStrike": "",
          "C-Prot": "",
          "Sysmon": "",
          "LimaCharlie": "",
          "MDE": "",
          "Elastic": "",
          "Auditd": "",
          "Carbon Black Cloud": ""
        }
      ],
      "attackCoverage": {
        "Auditd": {
          "DS0009": {
            "score": 66.7,
            "features": 3
          },
          "DS0022": {
            "score": 60.0,
            "features": 5
          },
          "DS0029": {
            "score": 0.0,
            "features": 1
          },
          "DS0019": {
            "score": 0.0,
            "features": 3
          },
          "DS0013": {
            "score": 0.0,
            "features": 2
          }
        },
        "BitDefender": {
          "DS0009": {
            "score": 100.0,
            "features": 3
          },
          "DS0022": {
            "score": 100.0,
            "features": 5
          },
          "DS0029": {
            "score": 0.0,
            "features": 1
          },
          "DS0019": {
            "score": 0.0,
            "features": 3
          },
          "DS0013": {
            "score": 100.0,
            "features": 2
          }
        },
        "Cortex XDR": {
          "DS0009": {
            "score": 66.7,
            "features": 3
          },
          "DS0022": {
            "score": 100.0,
            "features": 5
          },
          "DS0029": {
            "score": 0.0,
            "features": 1
          },
          "DS0019": {
            "score": 0.0,
            "features": 3
          },
          "DS0013": {
            "score": 50.0,
            "features": 2
          }
        },
        "Carbon Black Cloud": {
          "DS0009": {
            "score": 33.3,
            "features": 3
          },
          "DS0022": {
            "score": 100.0,
            "features": 5
          },
          "DS0029": {
            "score": 0.0,
            "features": 1
          },
          "DS0019": {
            "score": 0.0,
            "features": 3
          },
          "DS0013": {
            "score": 100.0,
            "features": 2
          }
        },
        "C-Prot": {
          "DS0009": {
            "score": 100.0,
            "features": 3
          },
          "DS0022": {
            "score": 100.0,
            "features": 5
          },
          "DS0029": {
            "score": 100.0,
            "features": 1
          },
          "DS0019": {
            "score": 100.0,
            "features": 3
          },
          "DS0013": {
            "score": 100.0,
            "features": 2
          }
        },
        "CrowdStrike": {
          "DS0009": {
            "score": 66.7,
            "features": 3
          },
          "DS0022": {
            "score": 80.0,
            "features": 5
          },
          "DS0029": {
            "score": 100.0,
            "features": 1
          },
          "DS0019": {
            "score": 33.3,
            "features": 3
          },
          "DS0013": {
            "score": 100.0,
            "features": 2
          }
        },
        "ESET Inspect": {
          "DS0009": {
            "score": 66.7,
            "features": 3
          },
          "DS0022": {
            "score": 100.0,
            "features": 5
          },
          "DS0029": {
            "score": 0.0,
            "features": 1
          },
          "DS0019": {
            "score": 0.0,
            "features": 3
          },
          "DS0013": {
            "score": 50.0,
            "features": 2
          }
        },
        "Elastic": {
          "DS0009": {
            "score": 100.0,
            "features": 3
          },
          "DS0022": {
            "score": 100.0,
            "features": 5
          },
          "DS0029": {
            "score": 100.0,
            "features": 1
          },
          "DS0019": {
            "score": 0.0,
            "features": 3
          },
          "DS0013": {
            "score": 100.0,
            "features": 2
          }
        },
        "Harfanglab": {
          "DS0009": {
            "score": 33.3,
            "features": 3
          },
          "DS0022": {
            "score": 80.0,
            "features": 5
          },
          "DS0029": {
            "score": 100.0,
            "features": 1
          },
          "DS0019": {
            "score": 0.0,
            "features": 3
          },
          "DS0013": {
            "score": 50.0,
            "features": 2
          }
        },
        "LimaCharlie": {
          "DS0009": {
            "score": 66.7,
            "features": 3
          },
          "DS0022": {
            "score": 100.0,
            "features": 5
          },
          "DS0029": {
            "score": 100.0,
            "features": 1
          },
          "DS0019": {
            "score": 66.7,
            "features": 3
          },
          "DS0013": {
            "score": 100.0,
            "features": 2
          }
        },
        "MDE": {
          "DS0009": {
            "score": 33.3,
            "features": 3
          },
          "DS0022": {
            "score": 90.0,
            "features": 5
          },
          "DS0029": {
            "score": 0.0,
            "features": 1
          },
          "DS0019": {
            "score": 16.7,
            "features": 3
          },
          "DS0013": {
            "score": 100.0,
            "features": 2
          }
        },
        "Qualys": {
          "DS0009": {
            "score": 66.7,
            "features": 3
          },
          "DS0022": {
            "score": 100.0,
            "features": 5
          },
          "DS0029": {
            "score": 70.0,
            "features": 1
          },
          "DS0019": {
            "score": 0.0,
            "features": 3
          },
          "DS0013": {
            "score": 100.0,
            "features": 2
          }
        },
        "SentinelOne": {
          "DS0009": {
            "score": 33.3,
            "features": 3
          },
          "DS0022": {
            "score": 80.0,
            "features": 5
          },
          "DS0029": {
            "score": 100.0,
            "features": 1
          },
          "DS0019": {
            "score": 66.7,
            "features": 3
          },
          "DS0013": {
            "score": 100.0,
            "features": 2
          }
        },
        "Sysmon": {
          "DS0009": {
            "score": 66.7,
            "features": 3
          },
          "DS0022": {
            "score": 80.0,
            "features": 5
          },
          "DS0029": {
            "score": 0.0,
            "features": 1
          },
          "DS0019": {
            "score": 33.3,
            "features": 3
          },
          "DS0013": {
            "score": 0.0,
            "features": 2
          }
        },
        "Uptycs": {
          "DS0009": {
            "score": 90.0,
            "features": 3
          },
          "DS0022": {
            "score": 100.0,
            "features": 5
          },
          "DS0029": {
            "score": 100.0,
            "features": 1
          },
          "DS0019": {
            "score": 0.0,
            "features": 3
          },
          "DS0013": {
            "score": 100.0,
            "features": 2
          }
        }
      },
      "subToDs": {
        "Process Creation": [
          "DS0009"
        ],
        "Process Termination": [
          "DS0009"
        ],
        "Process Access": [
          "DS0009"
        ],
        "Image/Library Loaded": [
          "DS0011"
        ],
        "Remote Thread Creation": [
          "DS0009"
        ],
        "Process Tampering Activity": [
          "DS0009"
        ],
        "File Creation": [
          "DS0022"
        ],
        "File Opened": [
          "DS0022"
        ],
        "File Deletion": [
          "DS0022"
        ],
        "File Modification": [
          "DS0022"
        ],
        "File Renaming": [
          "DS0022"
        ],
        "Local Account Creation": [
          "DS0002"
        ],
        "Local Account Modification": [
          "DS0002"
        ],
        "Local Account Deletion": [
          "DS0002"
        ],
        "Account Login": [
          "DS0002",
          "DS0028"
        ],
        "TCP Connection": [
          "DS0029"
        ],
        "UDP Connection": [
          "DS0029"
        ],
        "URL": [
          "DS0029"
        ],
        "DNS Query": [
          "DS0029"
        ],
        "File Downloaded": [
          "DS0022",
          "DS0029"
        ],
        "MD5": [
          "DS0022"
        ],
        "SHA": [
          "DS0022"
        ],
        "IMPHASH": [
          "DS0022"
        ],
        "Key/Value Creation": [
          "DS0024"
        ],
        "Key/Value Modification": [
          "DS0024"
        ],
        "Key/Value Deletion": [
          "DS0024"
        ],
        "Scheduled Task Creation": [
          "DS0003"
        ],
        "Scheduled Task Modification": [
          "DS0003"
        ],
        "Scheduled Task Deletion": [
          "DS0003"
        ],
        "Service Creation": [
          "DS0019"
        ],
        "Service Modification": [
          "DS0019"
        ],
        "Service Deletion": [
          "DS0019"
        ],
        "Driver Loaded": [
          "DS0027"
        ],
        "Driver Modification": [
          "DS0022"
        ],
        "Virtual Disk Mount": [
          "DS0016"
        ],
        "USB Device Unmount": [
          "DS0016"
        ],
        "USB Device Mount": [
          "DS0016"
        ],
        "Group Policy Modification": [
          "DS0026"
        ],
        "Pipe Creation": [
          "DS0023"
        ],
        "Pipe Connection": [
          "DS0023"
        ],
        "Agent Start": [
          "DS0013"
        ],
        "Agent Stop": [
          "DS0013"
        ],
        "Agent Install": [
          "DS0013"
        ],
        "Agent Uninstall": [
          "DS0013"
        ],
        "Agent Keep-Alive": [
          "DS0013"
        ],
        "Agent Errors": [
          "DS0013"
        ],
        "WmiEventConsumerToFilter": [
          "DS0005"
        ],
        "WmiEventConsumer": [
          "DS0005"
        ],
        "WmiEventFilter": [
          "DS0005"
        ],
        "BIT JOBS Activity": [
          "DS0012",
          "DS0017"
        ],
        "Script-Block Activity": [
          "DS0012"
        ]
      }
    },
    "macos": {
      "features": [
        {
          "category": "Process Activity",
          "sub": "Process Creation",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "CrowdStrike": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "Phorion": "yes",
            "Qualys": "yes",
            "Uptycs": "pending"
          }
        },
        {
          "category": "Process Activity",
          "sub": "Process Termination",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "CrowdStrike": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "LimaCharlie": "yes",
            "MDE": "no",
            "Phorion": "yes",
            "Qualys": "yes",
            "Uptycs": "pending"
          }
        },
        {
          "category": "Process Activity",
          "sub": "Library/Module Loaded",
          "values": {
            "Phorion": "no",
            "BitDefender": "no",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "yes",
            "LimaCharlie": "no",
            "MDE": "no",
            "Qualys": "no"
          }
        },
        {
          "category": "File Activity",
          "sub": "File Creation",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "CrowdStrike": "yes",
            "ESET Inspect": "partial",
            "Elastic": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "Phorion": "yes",
            "Qualys": "yes",
            "Uptycs": "yes"
          }
        },
        {
          "category": "File Activity",
          "sub": "File Modification",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "CrowdStrike": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "Phorion": "yes",
            "Qualys": "yes",
            "Uptycs": "yes"
          }
        },
        {
          "category": "File Activity",
          "sub": "File Deletion",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "CrowdStrike": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "yes"
          }
        },
        {
          "category": "File Activity",
          "sub": "File Attribute Change",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "LimaCharlie": "no",
            "MDE": "partial",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "yes"
          }
        },
        {
          "category": "File Activity",
          "sub": "File Open/Access",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "CrowdStrike": "partial",
            "ESET Inspect": "no",
            "Elastic": "enabling",
            "LimaCharlie": "partial",
            "MDE": "partial",
            "Phorion": "yes",
            "Qualys": "yes",
            "Uptycs": "yes"
          }
        },
        {
          "category": "User & Session Activity",
          "sub": "User Logon",
          "values": {
            "BitDefender": "no",
            "C-Prot": "no",
            "CrowdStrike": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "yes"
          }
        },
        {
          "category": "User & Session Activity",
          "sub": "User Logoff",
          "values": {
            "BitDefender": "no",
            "C-Prot": "no",
            "CrowdStrike": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "LimaCharlie": "yes",
            "MDE": "no",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "yes"
          }
        },
        {
          "category": "User & Session Activity",
          "sub": "Logon Failed",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "CrowdStrike": "yes",
            "ESET Inspect": "no",
            "Elastic": "yes",
            "LimaCharlie": "no",
            "MDE": "yes",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "yes"
          }
        },
        {
          "category": "User & Session Activity",
          "sub": "Screen Lock",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "no"
          }
        },
        {
          "category": "User & Session Activity",
          "sub": "Screen Unlock",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "no"
          }
        },
        {
          "category": "User & Session Activity",
          "sub": "Privilege Escalation (sudo etc.)",
          "values": {
            "BitDefender": "no",
            "C-Prot": "no",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "pending"
          }
        },
        {
          "category": "Script Activity",
          "sub": "Script Content",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "enabling",
            "LimaCharlie": "no",
            "MDE": "no",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "no"
          }
        },
        {
          "category": "Network Activity",
          "sub": "Network Connection",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "CrowdStrike": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "Phorion": "yes",
            "Qualys": "yes",
            "Uptycs": "yes"
          }
        },
        {
          "category": "Network Activity",
          "sub": "Network Socket Listen",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "CrowdStrike": "yes",
            "ESET Inspect": "no",
            "Elastic": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "Phorion": "no",
            "Qualys": "no",
            "Uptycs": "enabling"
          }
        },
        {
          "category": "Network Activity",
          "sub": "DNS Query",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "CrowdStrike": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "LimaCharlie": "yes",
            "MDE": "partial",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "yes"
          }
        },
        {
          "category": "Scheduled Task & Persistence Activity",
          "sub": "Scheduled Task Change (cron/at)",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "partial",
            "Elastic": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "no"
          }
        },
        {
          "category": "Scheduled Task & Persistence Activity",
          "sub": "Launchd Item Created",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "CrowdStrike": "partial",
            "ESET Inspect": "partial",
            "Elastic": "yes",
            "LimaCharlie": "no",
            "MDE": "partial",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "no"
          }
        },
        {
          "category": "Scheduled Task & Persistence Activity",
          "sub": "Launchd Item Modified",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "CrowdStrike": "partial",
            "ESET Inspect": "no",
            "Elastic": "no",
            "LimaCharlie": "no",
            "MDE": "partial",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "no"
          }
        },
        {
          "category": "Scheduled Task & Persistence Activity",
          "sub": "Launchd Item Deleted",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "LimaCharlie": "no",
            "MDE": "partial",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "no"
          }
        },
        {
          "category": "Scheduled Task & Persistence Activity",
          "sub": "LoginItem Created",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "CrowdStrike": "partial",
            "ESET Inspect": "no",
            "Elastic": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "no"
          }
        },
        {
          "category": "Scheduled Task & Persistence Activity",
          "sub": "LoginItem Deleted",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "no"
          }
        },
        {
          "category": "User Account Activity",
          "sub": "User Account Created",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "yes",
            "Elastic": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "no"
          }
        },
        {
          "category": "User Account Activity",
          "sub": "User Account Modified",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "yes",
            "Elastic": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "no"
          }
        },
        {
          "category": "User Account Activity",
          "sub": "User Account Deleted",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "yes",
            "Elastic": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "no"
          }
        },
        {
          "category": "User Account Activity",
          "sub": "Group Membership Modified",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "no"
          }
        },
        {
          "category": "System Extension & Driver Activity",
          "sub": "System Extension Installed",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "pending"
          }
        },
        {
          "category": "System Extension & Driver Activity",
          "sub": "System Extension Loaded",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "yes",
            "LimaCharlie": "no",
            "MDE": "no",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "pending"
          }
        },
        {
          "category": "System Extension & Driver Activity",
          "sub": "System Extension Uninstalled",
          "values": {
            "BitDefender": "no",
            "C-Prot": "no",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Phorion": "no",
            "Qualys": "no",
            "Uptycs": "pending"
          }
        },
        {
          "category": "System Extension & Driver Activity",
          "sub": "DriverKit Extension Loaded",
          "values": {
            "BitDefender": "no",
            "C-Prot": "no",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Phorion": "no",
            "Qualys": "no",
            "Uptycs": "pending"
          }
        },
        {
          "category": "System Extension & Driver Activity",
          "sub": "Kernel Extension Loaded (legacy)",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "CrowdStrike": "yes",
            "ESET Inspect": "yes",
            "Elastic": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "pending"
          }
        },
        {
          "category": "Code Signing & Trust Activity",
          "sub": "Binary Signature Info Recorded",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "CrowdStrike": "yes",
            "ESET Inspect": "partial",
            "Elastic": "yes",
            "LimaCharlie": "yes",
            "MDE": "no",
            "Phorion": "yes",
            "Qualys": "yes",
            "Uptycs": "yes"
          }
        },
        {
          "category": "Code Signing & Trust Activity",
          "sub": "Notarization Status Recorded",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Phorion": "no",
            "Qualys": "no",
            "Uptycs": "pending"
          }
        },
        {
          "category": "Code Signing & Trust Activity",
          "sub": "Quarantine Flag Set",
          "values": {
            "BitDefender": "no",
            "C-Prot": "no",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "pending"
          }
        },
        {
          "category": "Code Signing & Trust Activity",
          "sub": "Quarantine Flag Cleared",
          "values": {
            "BitDefender": "no",
            "C-Prot": "no",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "yes",
            "LimaCharlie": "no",
            "MDE": "no",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "pending"
          }
        },
        {
          "category": "Code Signing & Trust Activity",
          "sub": "Gatekeeper Decision Logged",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Phorion": "no",
            "Qualys": "no",
            "Uptycs": "pending"
          }
        },
        {
          "category": "Code Signing & Trust Activity",
          "sub": "XProtect Detection Logged",
          "values": {
            "BitDefender": "no",
            "C-Prot": "no",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "no"
          }
        },
        {
          "category": "Code Signing & Trust Activity",
          "sub": "XProtect Remediation Logged",
          "values": {
            "BitDefender": "no",
            "C-Prot": "no",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "pending"
          }
        },
        {
          "category": "Privacy & TCC Activity",
          "sub": "TCC Prompt Shown",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Phorion": "no",
            "Qualys": "no",
            "Uptycs": "no"
          }
        },
        {
          "category": "Privacy & TCC Activity",
          "sub": "TCC Decision (Allow)",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "no"
          }
        },
        {
          "category": "Privacy & TCC Activity",
          "sub": "TCC Decision (Deny)",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "no"
          }
        },
        {
          "category": "Privacy & TCC Activity",
          "sub": "TCC Policy Change",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "yes",
            "LimaCharlie": "no",
            "MDE": "no",
            "Phorion": "no",
            "Qualys": "no",
            "Uptycs": "no"
          }
        },
        {
          "category": "Privacy & TCC Activity",
          "sub": "TCC Access Check",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "no"
          }
        },
        {
          "category": "Access Activity",
          "sub": "Raw Device Access",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Phorion": "no",
            "Qualys": "no",
            "Uptycs": "no"
          }
        },
        {
          "category": "Access Activity",
          "sub": "Process Access",
          "values": {
            "BitDefender": "no",
            "C-Prot": "no",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "no"
          }
        },
        {
          "category": "Process Tampering Activity",
          "sub": "Process Injection Or Tampering",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "no",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "yes",
            "LimaCharlie": "no",
            "MDE": "no",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "no"
          }
        },
        {
          "category": "Device Activity",
          "sub": "External Media Mounted",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "yes",
            "LimaCharlie": "yes",
            "MDE": "partial",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "yes"
          }
        },
        {
          "category": "Device Activity",
          "sub": "External Media Unmounted",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "LimaCharlie": "yes",
            "MDE": "partial",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "yes"
          }
        },
        {
          "category": "EDR SysOps",
          "sub": "Agent Start",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "CrowdStrike": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "Phorion": "no",
            "Qualys": "yes",
            "Uptycs": "no"
          }
        },
        {
          "category": "EDR SysOps",
          "sub": "Agent Stop",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "CrowdStrike": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "Phorion": "no",
            "Qualys": "yes",
            "Uptycs": "no"
          }
        },
        {
          "category": "EDR SysOps",
          "sub": "Agent Protection Disabled Or Tamper Event",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "LimaCharlie": "no",
            "MDE": "yes",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "no"
          }
        },
        {
          "category": "File Metadata",
          "sub": "MD5 Available",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "CrowdStrike": "yes",
            "ESET Inspect": "yes",
            "Elastic": "enabling",
            "LimaCharlie": "no",
            "MDE": "yes",
            "Phorion": "no",
            "Qualys": "yes",
            "Uptycs": "yes"
          }
        },
        {
          "category": "File Metadata",
          "sub": "SHA-256 Available",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "CrowdStrike": "yes",
            "ESET Inspect": "yes",
            "Elastic": "yes",
            "LimaCharlie": "yes",
            "MDE": "yes",
            "Phorion": "partial",
            "Qualys": "yes",
            "Uptycs": "yes"
          }
        },
        {
          "category": "File Metadata",
          "sub": "Fuzzy Hash Available",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "no"
          }
        },
        {
          "category": "Service Activity",
          "sub": "Service Created",
          "values": {
            "BitDefender": "yes",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "partial",
            "Elastic": "no",
            "LimaCharlie": "yes",
            "MDE": "no",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "no"
          }
        },
        {
          "category": "Service Activity",
          "sub": "Service Modified",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "LimaCharlie": "yes",
            "MDE": "no",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "no"
          }
        },
        {
          "category": "Service Activity",
          "sub": "Service Deleted",
          "values": {
            "BitDefender": "no",
            "C-Prot": "yes",
            "CrowdStrike": "no",
            "ESET Inspect": "no",
            "Elastic": "no",
            "LimaCharlie": "no",
            "MDE": "no",
            "Phorion": "yes",
            "Qualys": "no",
            "Uptycs": "no"
          }
        }
      ],
      "vendors": [
        "BitDefender",
        "C-Prot",
        "CrowdStrike",
        "ESET Inspect",
        "Elastic",
        "LimaCharlie",
        "MDE",
        "Phorion",
        "Qualys",
        "Uptycs"
      ],
      "scores": {
        "BitDefender": {
          "score": 27.1,
          "counted": 59
        },
        "C-Prot": {
          "score": 81.0,
          "counted": 58
        },
        "CrowdStrike": {
          "score": 32.2,
          "counted": 59
        },
        "ESET Inspect": {
          "score": 31.4,
          "counted": 59
        },
        "Elastic": {
          "score": 40.8,
          "counted": 59
        },
        "LimaCharlie": {
          "score": 31.4,
          "counted": 59
        },
        "MDE": {
          "score": 28.8,
          "counted": 59
        },
        "Phorion": {
          "score": 78.8,
          "counted": 59
        },
        "Qualys": {
          "score": 18.6,
          "counted": 59
        },
        "Uptycs": {
          "score": 27.1,
          "counted": 58
        }
      },
      "partials": [
        {
          "Telemetry Feature Category": "Process Activity",
          "Sub-Category": "Process Creation",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "Process Termination",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "Library/Module Loaded",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": "File Activity",
          "Sub-Category": "File Creation",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "ESET Inspect": "ESET Inspect documents file creation only for executable files saved to disk. Non-executable file creation (scripts, configs, documents) is not collected.",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "File Modification",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "File Deletion",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "File Attribute Change",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": {
            "Partially": "MDE's kauth framework hooks (vnode) capture file attribute operations (read_attr, write_attr, read_ex_attr, write_ex_attr, read_sec, write_sec) at the sensor level, but no dedicated FileAttributeChanged ActionType is surfaced in the DeviceFileEvents Advanced Hunting table."
          }
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "File Open/Access",
          "LimaCharlie": {
            "Partially": "File read monitoring is available via the FILE_TYPE_ACCESSED event, but coverage is limited to specific file extensions rather than generic open/read operations on arbitrary paths."
          },
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": {
            "Partially": "File open/read events are documented in the Falcon for macOS datasheet but no distinct queryable event_simpleName is publicly confirmed for file read. Metadata about file access is captured in context of process events."
          },
          "MDE": {
            "Partially": "MDE's kauth framework hooks capture file open and read operations at the sensor level for behavioral analysis, but no dedicated file access/open ActionType exists in the standard DeviceFileEvents Advanced Hunting table. Custom Data Collection (preview) can provide file access events via DeviceCustomFileEvents but requires a Microsoft Sentinel workspace."
          }
        },
        {
          "Telemetry Feature Category": "User & Session Activity",
          "Sub-Category": "User Logon",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "User Logoff",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "Logon Failed",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "Screen Lock",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "Screen Unlock",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "Privilege Escalation (sudo etc.)",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": "Script Activity",
          "Sub-Category": "Script Execution",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "Script Content",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": "Network Activity",
          "Sub-Category": "Network Connection",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "Network Socket Listen",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "DNS Query",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": {
            "Partially": "Domain information is captured in DeviceNetworkEvents connection events via Network Protection's TLS ClientHello inspection and HTTP Host header parsing, but there is no dedicated DNS query event type. Standalone DNS queries not associated with HTTP/HTTPS connections are not captured."
          }
        },
        {
          "Telemetry Feature Category": "Scheduled Task & Persistence Activity",
          "Sub-Category": "Scheduled Task Change (cron/at)",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "ESET Inspect": "ESET Inspect documents \"scheduled task creation\" which maps to cron on macOS. Modification and deletion of scheduled tasks is not documented.",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "Launchd Item Created",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": {
            "Partially": "CrowdStrike monitors LaunchAgent/LaunchDaemon plist creation as part of persistence monitoring per the macOS datasheet, but no dedicated event_simpleName is publicly documented. Observed via file write events to persistence paths."
          },
          "ESET Inspect": "ESET Inspect documents \"service creation\" which may map to LaunchAgent/LaunchDaemon plist creation on macOS, but this is not explicitly confirmed for macOS in the official documentation.",
          "MDE": {
            "Partially": "Detectable via DeviceFileEvents FileCreated events for plist files written to LaunchAgent/LaunchDaemon directories, but no dedicated persistence monitoring event type exists in MDE's macOS telemetry."
          }
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "Launchd Item Modified",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": {
            "Partially": "Same as Launchd Item Created — observed via file write events to LaunchAgents/LaunchDaemons paths, not a dedicated persistence event type."
          },
          "MDE": {
            "Partially": "Detectable via DeviceFileEvents FileModified events for plist files in LaunchAgent/LaunchDaemon directories, but no dedicated persistence monitoring event type."
          }
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "Launchd Item Deleted",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": {
            "Partially": "Detectable via DeviceFileEvents FileDeleted events for plist files in LaunchAgent/LaunchDaemon directories, but no dedicated persistence monitoring event type."
          }
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "LoginItem Created",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": {
            "Partially": "Login Items changes are documented as monitored in the Falcon macOS datasheet, but no specific event_simpleName is publicly confirmed. Observed via process launch from Login Item paths."
          },
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "LoginItem Deleted",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "Background Task Registration Change",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": "User Account Activity",
          "Sub-Category": "User Account Created",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "User Account Modified",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "User Account Deleted",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "Group Membership Modified",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": "System Extension & Driver Activity",
          "Sub-Category": "System Extension Installed",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "System Extension Loaded",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "System Extension Uninstalled",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "DriverKit Extension Loaded",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "Kernel Extension Loaded (legacy)",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": "Code Signing & Trust Activity",
          "Sub-Category": "Binary Signature Info Recorded",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "ESET Inspect": "On macOS, ESET Inspect Endpoint does not verify signatures — the only states are Present or None (per process_details.html). No full certificate chain validation.",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "Notarization Status Recorded",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "Quarantine Flag Set",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "Quarantine Flag Cleared",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "Gatekeeper Decision Logged",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "XProtect Detection Logged",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "XProtect Remediation Logged",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": "Privacy & TCC Activity",
          "Sub-Category": "TCC Prompt Shown",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "TCC Decision (Allow)",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "TCC Decision (Deny)",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "TCC Policy Change",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "TCC Access Check",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": "Access Activity",
          "Sub-Category": "Raw Device Access",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "Process Access",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": "Process Tampering Activity",
          "Sub-Category": "Process Injection Or Tampering",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": "Device Activity",
          "Sub-Category": "External Media Mounted",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": {
            "Partially": "MDE's kauth hooks capture file_op.mount at the sensor level and Device Control supports removable media policies with audit events, but the UsbDriveMounted ActionType in DeviceEvents is not confirmed for macOS (it originates from the Windows PnP subsystem)."
          }
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "External Media Unmounted",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": {
            "Partially": "MDE's kauth hooks capture file_op.unmount at the sensor level, but the UsbDriveUnmounted ActionType in DeviceEvents is not confirmed for macOS (it originates from the Windows PnP subsystem)."
          }
        },
        {
          "Telemetry Feature Category": "EDR SysOps",
          "Sub-Category": "Agent Start",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "Agent Stop",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "Agent Protection Disabled Or Tamper Event",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": "File Metadata",
          "Sub-Category": "MD5 Available",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "SHA-256 Available",
          "LimaCharlie": {
            "Partially": "Collects SHA-256 & SHA-1 for process exec and fork events (excluding common binaries)"
          },
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "Fuzzy Hash Available",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": "Service Activity",
          "Sub-Category": "Service Created",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "ESET Inspect": "ESET documents \"service creation\" which may map to launchd service creation on macOS, but this is not explicitly confirmed for macOS in the official documentation.",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "Service Modified",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        },
        {
          "Telemetry Feature Category": null,
          "Sub-Category": "Service Deleted",
          "LimaCharlie": "",
          "Elastic": "",
          "BitDefender": "",
          "Qualys": "",
          "CrowdStrike": "",
          "MDE": ""
        }
      ],
      "attackCoverage": {
        "BitDefender": {
          "DS0009": {
            "score": 66.7,
            "features": 3
          },
          "DS0022": {
            "score": 100.0,
            "features": 3
          },
          "DS0029": {
            "score": 0.0,
            "features": 1
          },
          "DS0013": {
            "score": 100.0,
            "features": 2
          }
        },
        "C-Prot": {
          "DS0009": {
            "score": 66.7,
            "features": 3
          },
          "DS0022": {
            "score": 100.0,
            "features": 3
          },
          "DS0029": {
            "score": 100.0,
            "features": 1
          },
          "DS0013": {
            "score": 100.0,
            "features": 2
          }
        },
        "CrowdStrike": {
          "DS0009": {
            "score": 66.7,
            "features": 3
          },
          "DS0022": {
            "score": 100.0,
            "features": 3
          },
          "DS0029": {
            "score": 100.0,
            "features": 1
          },
          "DS0013": {
            "score": 100.0,
            "features": 2
          }
        },
        "ESET Inspect": {
          "DS0009": {
            "score": 66.7,
            "features": 3
          },
          "DS0022": {
            "score": 83.3,
            "features": 3
          },
          "DS0029": {
            "score": 100.0,
            "features": 1
          },
          "DS0013": {
            "score": 100.0,
            "features": 2
          }
        },
        "Elastic": {
          "DS0009": {
            "score": 66.7,
            "features": 3
          },
          "DS0022": {
            "score": 100.0,
            "features": 3
          },
          "DS0029": {
            "score": 100.0,
            "features": 1
          },
          "DS0013": {
            "score": 100.0,
            "features": 2
          }
        },
        "LimaCharlie": {
          "DS0009": {
            "score": 66.7,
            "features": 3
          },
          "DS0022": {
            "score": 100.0,
            "features": 3
          },
          "DS0029": {
            "score": 100.0,
            "features": 1
          },
          "DS0013": {
            "score": 100.0,
            "features": 2
          }
        },
        "MDE": {
          "DS0009": {
            "score": 33.3,
            "features": 3
          },
          "DS0022": {
            "score": 100.0,
            "features": 3
          },
          "DS0029": {
            "score": 50.0,
            "features": 1
          },
          "DS0013": {
            "score": 100.0,
            "features": 2
          }
        },
        "Phorion": {
          "DS0009": {
            "score": 100.0,
            "features": 3
          },
          "DS0022": {
            "score": 100.0,
            "features": 3
          },
          "DS0029": {
            "score": 100.0,
            "features": 1
          },
          "DS0013": {
            "score": 0.0,
            "features": 2
          }
        },
        "Qualys": {
          "DS0009": {
            "score": 66.7,
            "features": 3
          },
          "DS0022": {
            "score": 66.7,
            "features": 3
          },
          "DS0029": {
            "score": 0.0,
            "features": 1
          },
          "DS0013": {
            "score": 100.0,
            "features": 2
          }
        },
        "Uptycs": {
          "DS0009": {
            "score": 0.0,
            "features": 3
          },
          "DS0022": {
            "score": 100.0,
            "features": 3
          },
          "DS0029": {
            "score": 100.0,
            "features": 1
          },
          "DS0013": {
            "score": 0.0,
            "features": 2
          }
        }
      },
      "subToDs": {
        "Process Creation": [
          "DS0009"
        ],
        "Process Termination": [
          "DS0009"
        ],
        "Process Access": [
          "DS0009"
        ],
        "Image/Library Loaded": [
          "DS0011"
        ],
        "Remote Thread Creation": [
          "DS0009"
        ],
        "Process Tampering Activity": [
          "DS0009"
        ],
        "File Creation": [
          "DS0022"
        ],
        "File Opened": [
          "DS0022"
        ],
        "File Deletion": [
          "DS0022"
        ],
        "File Modification": [
          "DS0022"
        ],
        "File Renaming": [
          "DS0022"
        ],
        "Local Account Creation": [
          "DS0002"
        ],
        "Local Account Modification": [
          "DS0002"
        ],
        "Local Account Deletion": [
          "DS0002"
        ],
        "Account Login": [
          "DS0002",
          "DS0028"
        ],
        "TCP Connection": [
          "DS0029"
        ],
        "UDP Connection": [
          "DS0029"
        ],
        "URL": [
          "DS0029"
        ],
        "DNS Query": [
          "DS0029"
        ],
        "File Downloaded": [
          "DS0022",
          "DS0029"
        ],
        "MD5": [
          "DS0022"
        ],
        "SHA": [
          "DS0022"
        ],
        "IMPHASH": [
          "DS0022"
        ],
        "Key/Value Creation": [
          "DS0024"
        ],
        "Key/Value Modification": [
          "DS0024"
        ],
        "Key/Value Deletion": [
          "DS0024"
        ],
        "Scheduled Task Creation": [
          "DS0003"
        ],
        "Scheduled Task Modification": [
          "DS0003"
        ],
        "Scheduled Task Deletion": [
          "DS0003"
        ],
        "Service Creation": [
          "DS0019"
        ],
        "Service Modification": [
          "DS0019"
        ],
        "Service Deletion": [
          "DS0019"
        ],
        "Driver Loaded": [
          "DS0027"
        ],
        "Driver Modification": [
          "DS0022"
        ],
        "Virtual Disk Mount": [
          "DS0016"
        ],
        "USB Device Unmount": [
          "DS0016"
        ],
        "USB Device Mount": [
          "DS0016"
        ],
        "Group Policy Modification": [
          "DS0026"
        ],
        "Pipe Creation": [
          "DS0023"
        ],
        "Pipe Connection": [
          "DS0023"
        ],
        "Agent Start": [
          "DS0013"
        ],
        "Agent Stop": [
          "DS0013"
        ],
        "Agent Install": [
          "DS0013"
        ],
        "Agent Uninstall": [
          "DS0013"
        ],
        "Agent Keep-Alive": [
          "DS0013"
        ],
        "Agent Errors": [
          "DS0013"
        ],
        "WmiEventConsumerToFilter": [
          "DS0005"
        ],
        "WmiEventConsumer": [
          "DS0005"
        ],
        "WmiEventFilter": [
          "DS0005"
        ],
        "BIT JOBS Activity": [
          "DS0012",
          "DS0017"
        ],
        "Script-Block Activity": [
          "DS0012"
        ]
      }
    }
  },
  "mitre": [
    {
      "": "",
      "MITRE ATT&CK Mappings": "Process Creation - DS0009",
      "Sub-Category": "Process Creation",
      "Telemetry Feature Category": "Process Activity"
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "Process Termination - DS0009",
      "Sub-Category": "Process Termination",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "Process Access - DS0009",
      "Sub-Category": "Process Access",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "Module Load - DS0011",
      "Sub-Category": "Image/Library Loaded",
      "Telemetry Feature Category": ""
    },
    {
      "": "Process Access (Partial) - DS0009",
      "MITRE ATT&CK Mappings": "OS API Execution (Partial) - DS0009, Process Access (Partial) - DS0009",
      "Sub-Category": "Remote Thread Creation",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "Process Modification - DS0009",
      "Sub-Category": "Process Tampering Activity",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "File Creation - DS0022",
      "Sub-Category": "File Creation",
      "Telemetry Feature Category": "File Manipulation"
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "File Opened - DS0022",
      "Sub-Category": "File Opened",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "File Deletion - DS0022",
      "Sub-Category": "File Deletion",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "File Modification - DS0022",
      "Sub-Category": "File Modification",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "File Renaming - DS0022",
      "Sub-Category": "File Renaming",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "Local Account Creation - DS0002",
      "Sub-Category": "Local Account Creation",
      "Telemetry Feature Category": "User Account Activity"
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "Local Account Modification - DS0002",
      "Sub-Category": "Local Account Modification",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "Local Account Deletion - DS0002",
      "Sub-Category": "Local Account Deletion",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "Account Login (User Account Authentication) - DS0002, Account Login (Logon Session Creation) - DS0028",
      "Sub-Category": "Account Login",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "-",
      "Sub-Category": "Account Logoff",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "TCP Connection - DS0029",
      "Sub-Category": "TCP Connection",
      "Telemetry Feature Category": "Network Activity"
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "UDP Connection - DS0029",
      "Sub-Category": "UDP Connection",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "URL - DS0029",
      "Sub-Category": "URL",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "DNS Query - DS0029",
      "Sub-Category": "DNS Query",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "File Downloaded (Network Traffic Content) - DS0029,File Downloaded (File Creation) - DS0022",
      "Sub-Category": "File Downloaded",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "MD5 - DS0022",
      "Sub-Category": "MD5",
      "Telemetry Feature Category": "Hash Algorithms"
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "SHA - DS0022",
      "Sub-Category": "SHA",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "IMPHASH - DS0022",
      "Sub-Category": "IMPHASH",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "Key/Value Creation - DS0024",
      "Sub-Category": "Key/Value Creation",
      "Telemetry Feature Category": "Registry Activity"
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "Key/Value Modification - DS0024",
      "Sub-Category": "Key/Value Modification",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "Key/Value Deletion - DS0024",
      "Sub-Category": "Key/Value Deletion",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "Scheduled Task Creation - DS0003",
      "Sub-Category": "Scheduled Task Creation",
      "Telemetry Feature Category": "Schedule Task Activity"
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "Scheduled Task Modification - DS0003",
      "Sub-Category": "Scheduled Task Modification",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "Scheduled Task Deletion - DS0003",
      "Sub-Category": "Scheduled Task Deletion",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "Service Creation - DS0019",
      "Sub-Category": "Service Creation",
      "Telemetry Feature Category": "Service Activity"
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "Service Modification - DS0019",
      "Sub-Category": "Service Modification",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "Service Deletion - DS0019",
      "Sub-Category": "Service Deletion",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "Driver Loaded - DS0027",
      "Sub-Category": "Driver Loaded",
      "Telemetry Feature Category": "Driver/Module Activity"
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "Driver Modification - DS0022",
      "Sub-Category": "Driver Modification",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "-",
      "Sub-Category": "Driver Unloaded",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "Virtual Disk Mount - DS0016",
      "Sub-Category": "Virtual Disk Mount",
      "Telemetry Feature Category": "Device Operations"
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "USB Device Unmount - DS0016",
      "Sub-Category": "USB Device Unmount",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "USB Device Mount - DS0016",
      "Sub-Category": "USB Device Mount",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "Group Policy Modification - DS0026",
      "Sub-Category": "Group Policy Modification",
      "Telemetry Feature Category": "Other Relevant Events"
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "Pipe Creation - DS0023",
      "Sub-Category": "Pipe Creation",
      "Telemetry Feature Category": "Named Pipe Activity"
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "Pipe Connection - DS0023",
      "Sub-Category": "Pipe Connection",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "Agent Start - DS0013",
      "Sub-Category": "Agent Start",
      "Telemetry Feature Category": "EDR SysOps"
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "Agent Stop - DS0013",
      "Sub-Category": "Agent Stop",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "Agent Install - DS0013",
      "Sub-Category": "Agent Install",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "Agent Uninstall - DS0013",
      "Sub-Category": "Agent Uninstall",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "Agent Keep-Alive - DS0013",
      "Sub-Category": "Agent Keep-Alive",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "Agent Errors - DS0013",
      "Sub-Category": "Agent Errors",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "WmiEventConsumerToFilter - DS0005",
      "Sub-Category": "WmiEventConsumerToFilter",
      "Telemetry Feature Category": "WMI Activity"
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "WmiEventConsumer - DS0005",
      "Sub-Category": "WmiEventConsumer",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "WmiEventFilter - DS0005",
      "Sub-Category": "WmiEventFilter",
      "Telemetry Feature Category": ""
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "PowerShell Activity - DS0012,PowerShell Activity - DS0017",
      "Sub-Category": "BIT JOBS Activity",
      "Telemetry Feature Category": "BIT JOBS Activity"
    },
    {
      "": "",
      "MITRE ATT&CK Mappings": "Script-Block Activity - DS0012",
      "Sub-Category": "Script-Block Activity",
      "Telemetry Feature Category": "PowerShell Activity"
    }
  ],
  "attackDataSources": {
    "DS0002": {
      "name": "User Account",
      "description": "Eventos sobre cuentas de usuario: alta, modificacion, autenticacion",
      "tactics": [
        "Initial Access",
        "Persistence",
        "Privilege Escalation",
        "Credential Access"
      ]
    },
    "DS0003": {
      "name": "Scheduled Job",
      "description": "Tareas programadas creadas, modificadas, ejecutadas",
      "tactics": [
        "Execution",
        "Persistence",
        "Privilege Escalation"
      ]
    },
    "DS0005": {
      "name": "WMI",
      "description": "Consultas y suscripciones WMI (Windows)",
      "tactics": [
        "Execution",
        "Persistence",
        "Lateral Movement"
      ]
    },
    "DS0009": {
      "name": "Process",
      "description": "Creacion, terminacion, acceso, modificacion y tampering de procesos",
      "tactics": [
        "Execution",
        "Defense Evasion",
        "Privilege Escalation",
        "Discovery"
      ]
    },
    "DS0011": {
      "name": "Module",
      "description": "Carga de modulos / DLLs / librerias",
      "tactics": [
        "Execution",
        "Persistence",
        "Defense Evasion"
      ]
    },
    "DS0012": {
      "name": "Script",
      "description": "Ejecucion de scripts (PowerShell, bash, etc.)",
      "tactics": [
        "Execution"
      ]
    },
    "DS0013": {
      "name": "Sensor Health",
      "description": "Estado y telemetria del propio agente EDR",
      "tactics": [
        "Defense Evasion"
      ]
    },
    "DS0016": {
      "name": "Drive",
      "description": "Montaje/desmontaje de unidades, virtual disks",
      "tactics": [
        "Initial Access",
        "Lateral Movement"
      ]
    },
    "DS0017": {
      "name": "Command",
      "description": "Lineas de comando ejecutadas",
      "tactics": [
        "Execution"
      ]
    },
    "DS0019": {
      "name": "Service",
      "description": "Creacion, modificacion, inicio, parada de servicios",
      "tactics": [
        "Execution",
        "Persistence",
        "Privilege Escalation"
      ]
    },
    "DS0022": {
      "name": "File",
      "description": "Creacion, apertura, borrado, modificacion, renombrado de archivos",
      "tactics": [
        "Execution",
        "Defense Evasion",
        "Exfiltration",
        "Impact"
      ]
    },
    "DS0023": {
      "name": "Named Pipe",
      "description": "Creacion y conexion a named pipes",
      "tactics": [
        "Lateral Movement",
        "Command and Control"
      ]
    },
    "DS0024": {
      "name": "Windows Registry",
      "description": "Modificacion de claves/valores del registro de Windows",
      "tactics": [
        "Persistence",
        "Privilege Escalation",
        "Defense Evasion"
      ]
    },
    "DS0026": {
      "name": "Active Directory",
      "description": "Eventos de AD: cambios, consultas, credentials",
      "tactics": [
        "Credential Access",
        "Discovery",
        "Lateral Movement"
      ]
    },
    "DS0027": {
      "name": "Driver",
      "description": "Carga, descarga, modificacion de drivers del kernel",
      "tactics": [
        "Persistence",
        "Privilege Escalation",
        "Defense Evasion"
      ]
    },
    "DS0028": {
      "name": "Logon Session",
      "description": "Inicios y cierres de sesion",
      "tactics": [
        "Initial Access",
        "Lateral Movement",
        "Persistence"
      ]
    },
    "DS0029": {
      "name": "Network Traffic",
      "description": "Conexiones TCP/UDP, DNS, URL, descargas",
      "tactics": [
        "Command and Control",
        "Exfiltration",
        "Lateral Movement"
      ]
    },
    "DS0007": {
      "name": "Image",
      "description": "Imagenes de contenedores/VM",
      "tactics": [
        "Execution",
        "Persistence"
      ]
    }
  },
  "statusLegend": {
    "yes": {
      "label": "Implementado",
      "icon": "OK",
      "color": "#1f9d55"
    },
    "no": {
      "label": "No implementado",
      "icon": "X",
      "color": "#b33a3a"
    },
    "partial": {
      "label": "Parcial",
      "icon": "~",
      "color": "#e0a106"
    },
    "pending": {
      "label": "Pendiente respuesta",
      "icon": "?",
      "color": "#6b6b6b"
    },
    "eventlog": {
      "label": "Via EventLogs",
      "icon": "L",
      "color": "#3b6bb8"
    },
    "enabling": {
      "label": "Via habilitacion",
      "icon": "E",
      "color": "#7a56c2"
    },
    "na": {
      "label": "No aplica",
      "icon": "-",
      "color": "#c7c7c7"
    }
  }
};
