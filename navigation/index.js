export default [
  {
    "header": "",
    "description": "",
    "child": [
      {
        "title": "Dashboard",
        "path": "/dashboard",
        "icon": "ic:outline-dashboard",
        "child": [],
        "meta": {}
      }
    ]
  },
  {
    "header": "Naim Works",
    "description": "",
    "child": [
      {
        title: "Qualification",
        icon:"healthicons:i-exam-qualification-outline",
        child: [
          {
            title: "Skills",
            path: "/qualifications/skills",
          },
          {
            title: "Education",
            path: "/qualifications/educations",
          },
          {
            title: "Licenses",
            path: "/qualifications/licenses",
          },
          {
            title: "Languages",
            path: "/qualifications/languages",
          },
          {
            title: "Memberships",
            path: "/qualifications/memberships",
          },
        ],
      },
      {
        title: "Race & Religion",
        icon:"ic:baseline-settings",
        path: "/raceReligion",
      },
      {
        title: "Coparate Branding",
        icon:"streamline:interface-text-formatting-paragraph-bullets-points-bullet-align-paragraph-formatting-bullets-text",
        path: "/coparateBranding",
      },
      {
        title: "Leave",
        icon: "ic:outline-shopping-bag",
        child: [
          {
            title: "Apply",
            path: "/leave/apply",
          },
          {
            title: "My Leave",
            path: "/leave/myLeave",
          },
          {
            title: "Entitlements",
            child: [
              {
                title: "Add Entitlement",
                path: "/leave/entitlement/addEntitlement",
              },
              {
                title: "Employee Entitlement",
                path: "/leave/entitlement/employeeEntitlement",
              },
              {
                title: "My Entitlement",
                path: "/leave/entitlement/myEntitlement",
              },
            ],
          },
          {
            title: "Report",
            path: "/leave/report",
          },
          {
            title: "Configuration",
            child: [
              {
                title: "Leave period",
                path: "/leave/configuration/leavePeriod",
              },
              {
                title: "Leave type",
                path: "/leave/configuration/leaveType",
              },
              {
                title: "Work week",
                path: "/leave/configuration/workWeek",
              },
              {
                title: "Holidays",
                path: "/leave/configuration/holidays",
              },
            ],
          },
          {
            title: "Leave list",
            path: "/leave/leaveList",
          },
          {
            title: "Assign leave",
            path: "/leave/assignLeave",
          },
        ],
      },
      {
        title: "Claim",
        icon: "ic:outline-shopping-bag",
        child: [
          {
            title: "Configuration",
            child: [
              {
                title: "Events",
                path: "/claim/configuration/events",
              },
              {
                title: "Expense Types",
                path: "/claim/configuration/expenseTypes",
              },
            ],
          },
          {
            title: "Submit Claim",
            path: "/claim/submitClaim",
          },
          {
            title: "My Claims",
            path: "/claim/myClaims",
          },
          {
            title: "Employee Claims",
            path: "/claim/employeeClaims",
          },
          {
            title: "Assign Claim",
            path: "/claim/assignClaim",
          },
        ],
      },
      {
        title: "My Info",
        icon: "ic:outline-shopping-bag",
        child: [
          {
            title: "Personal Details",
            path: "/myInfo/personalDetails",
          },
          {
            title: "Contact Details",
            path: "/myInfo/contactDetails",
          },
          {
            title: "Emergency Contacts",
            path: "/myInfo/emergencyContact",
          },
          {
            title: "Dependents",
            path: "/myInfo/dependents",
          },
          {
            title: "Immigration",
            path: "/myinfo/immigration",
          },
          {
            title: "Job",
            path: "/myinfo/job",
          },
          {
            title: "Salary",
            path: "/myinfo/salary",
          },
          {
            title: "Tax",
            path: "/myinfo/tax",
          },
          {
            title: "Report To",
            path: "/myinfo/reportto",
          },
          {
            title: "Qualification",
            path: "/myinfo/qualification",
          },
          {
            title: "Membership",
            path: "/myinfo/membership",
          },
        ],
      },
    ],
  },
  {
    "header": "Aqib Works",
    "description": "",
    "child": [
          {
            "title": "Job",
            "icon": "ic:sharp-list-alt",
            "child": [
              {
                "title": "Job Title",
                "path": "/jobtitles/job-title",
                "icon": "",
              },
              {
                "title": "Pay Grades",
                "path": "/jobtitles/pay-grades",
                "icon": "",
              },
              {
                "title": "Employment Status",
                "path": "/jobtitles/employmentstat",
                "icon": "",
              },
              {
                "title": "Job Categories",
                "path": "/jobtitles/jobcategories",
                "icon": "",
              },
              {
                "title": "Work Shifts",
                "path": "/jobtitles/workshifts",
                "icon": "",
              }
            ]
          },
          {
            "title": "Organization",
            "icon": "ri:organization-chart",
            "child": [
              {
                "title": "General Information",
                "path": "/organization/generalinfo",
                "icon": "",
              },
              {
                "title": "Locations",
                "path": "/organization/locations",
                "icon": "",
              },
              {
                "title": "Structure",
                "path": "/organization/structure",
                "icon": "",
              },
              {
                "title": "Human Resources SOP",
                "path": "/organization/hrsop",
                "icon": "",
              },
            ]
          },
          {
            "title": "PIM",
            "path": "/PIM",
            "icon": "ph:user-circle-gear",
            "child": [
              {
                "title": "Configuration",
                "icon": "",
                "child": [
                  {
                    "title": "Optional Fields",
                    "path": "/PIM/configuration/optionalfield",
                    "icon": "",
                  },
                  {
                    "title": "Data Import",
                    "path": "/PIM/configuration/dataimport",
                    "icon": "",
                  },
                  {
                    "title": "Reporting Methods",
                    "path": "/PIM/configuration/reportingmethods",
                    "icon": "",
                  },
                  {
                    "title": "Termination Reasons",
                    "path": "/PIM/configuration/terminationreasons",
                    "icon": "",
                  },
                ]
              },
              {
                "title": "Employee List",
                "path": "/PIM/employeelist",
                "icon": "ph:user-circle-gear",
              },
              {
                "title": "Add Employee",
                "path": "/PIM/addemployee",
                "icon": "ph:user-circle-gear",
              },
              {
                "title": "Employee Report",
                "path": "/PIM/report",
                "icon": "ph:user-circle-gear",
              }
            ]
          },
        ]
  },
    
  // {
  //   "header": "Help",
  //   "description": "Help and documentation",
  //   "child": [
  //     {
  //       "title": "Documentation",
  //       "icon": "solar:book-bookmark-minimalistic-bold",
  //       "path": "https://manual.corrad.ai",
  //       "external": true
  //     },
  //     {
  //       "title": "UI Components",
  //       "icon": "material-symbols:settings-input-component-outline-rounded",
  //       "path": "https://ui.corrad.ai",
  //       "external": true
  //     }
  //   ],
  //   "meta": {
  //     "auth": {
  //       "role": [
  //         "Developer"
  //       ]
  //     }
  //   }
  // }
];