// ============================================================
// SECCIÓN DE CONFIGURACIÓN: ENLACES DE GOOGLE DRIVE
// ============================================================
// Estructura: driveLinks[grado][tomo][seccion][idCurso] = "URL"
// grados: "1ro", "2do", "3ro", "4to", "5to"
// tomos: "tomo-i", "tomo-ii", "tomo-iii", "tomo-iv", "tomo-v", "tomo-vi", "tomo-vii", "tomo-viii"
// secciones: "cap1", "cap2", "cap3", "retro" (los números de capítulos se ajustan según tomo)
// idCurso: del 1 al 20 (ver lista de cursos más abajo)
//
// INSTRUCCIONES: Reemplaza las URL de ejemplo con tus enlaces reales de Drive.
// Puedes copiar y pegar tantas líneas como necesites.
// ============================================================

const driveLinks = {
    
    // ========== 5TO PRE ==========
    "5topre": {
            "tomo-vi": {
            "cap16": {
                1: "https://docs.google.com/presentation/d/1rBhXIoxyhXsDUntIMCMzGkYYvcnit-L4/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1kum4SwOklfdrKIpCFdZUIF8LUI8JfJFs/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1c5eFi0fl2eawHFDFRkGnMzqITz6xyonS/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1WxYVpqbMpR87ZGF2uriNLL0syNG4W01a/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1_5II_Hx6oGhLktBfDAs6yplo7I9fOTCT/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1ght53V9lYeab_boaAVCjTuR7Ol_DNCOi/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1ZMbpi65piPRJRjQhR0FzJrK-MzzCe8Fp/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1FJ_AFrbXYDjEguU07EkxEnNR-1AGfOVZ/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1TuY1SXCEpIZOCSPFbBXPZ9c59VVJVheX/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1tJb6bhezrOk99QMhmgKTGusBprb-RXjm/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1iPlAN_DR4HX1C6HukHhw3MVwpyVxM-WP/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1GT49BaXCLNHzM0KpoBY3VntB3wjiQHht/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1w-fa-5J9veJn9a9b45OYT97dJpDNyHlS/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1RErk-TGabyzeslOb_lurRXJuSyq4ELCt/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1KCqOltHNiMshLoVbw4hi95t62UbQKmyu/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1v4fR2u7qebM6IbUNxb8lC-iUg44RxvXp/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap17": {
                1: "https://docs.google.com/presentation/d/1CSqSejbe5THL2ZS2c6xReOY27KSu0Uja/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1VwD9FLrnMP4on3w2uxTac1I8CBgr-iet/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/14vmeUpdtNP3G8L1pG1OolQMEsG_vYAZa/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1dAyNmTU7H136wWffsz7cNTJZ3gyhWgdP/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1xL-Rk33Fvrq9Y5z1QiiGL_203C297mjm/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1oaKa62lSfEiB5LAqOl31m4VMRkfxbGGm/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/17Ziv0BLg49S0vtuDMpvum-9KmXEaALZA/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1GARRSXwEoZP2biJsp3mgtaogm_kUvElI/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1O3_qzRzMbFXwxcvCzsUnRSTKrR_eHQQk/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1afIn_bD7OyVtGdy6UX_V991jUlmxB-Qu/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1J6PyUvC5B_NetbaLR4I3Brq3Ji6mBgW9/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1IQJZDvqc1txsjyOuLP4YUdWqSks5dfTa/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1IAaXhMcPHlgHBWGxIzYFJX2oBu_Hzson/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1KZRlSpUuhuH1klrtg9F2jFbJwoWcPXoi/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1G_RJQoRXXeNbyh6w-nMm9lpCW3gGyHIN/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1CeXw9ZXWHiD843vtgVOWKnQ2yI9-Dx8E/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap18": {
                1: "https://docs.google.com/presentation/d/1MHysBq01UhwYdgaZIqfrGmv1dNgc9Cse/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/12pEIZbrecHsi1vKFnlBT4z8nnW9TekDP/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/19gi5-bLUXlTT7925QFPr_uHjpCj8wfQ7/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1EO-FUFQcYjqEnhiPhhnFBOXAiYKyWsmc/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1BmBJztLDXAlbSjHTTg6YXHRUh7Ybjc3h/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1uKs4_6cib2EJ6nNBLZsu8Nn3ZL6JF68R/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/191gOaqzGzFqHj81jYE5AP44gnNYMjMsu/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1V127aAXAfXdMZ6WB-R3svBOQunNkHZK4/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/14qDVoU31Vg47bPKR0_c8iB4p1nabYUQ7/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1Xrw-9Dvm9EdWo4yaGtpXgfdZAElAiVGc/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1ESds2ARv3JYPvjXZoD4HHWN4H-HPritz/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1Vkh1BzfE52LF3aofKKGBL9CoVJ0rNCnc/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/12V1J6VE7eLV6GhwJmC5GWLUDpwf2Daoh/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1uUE4oDuFTTnHj54lbN7C1uyEvYBVRoaz/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1TUh4XaIi8MVJJBsxFxkB0LihsHdAmQ9i/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/14jyC7P5HPl0g6pjURDBWTLe1ouZi1uof/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "retro": {
                1: "https://docs.google.com/presentation/d/1seOGU0N468IJ0Mc2wSzVO4QVnqc-j4XC/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/14ixii4tyka-5AoM6IPnE4G9l8iAkqOSj/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1Mh9wUxKyz_c-riO0nGMHpA9tPgLWdpdM/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1CyuWCM8HU0Sf2M-wcRo--OP8t7gP2OPc/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1LArMjv54OmqgG6fAf0-E_mgXtcxpzRYV/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1ito1zw5MtyI234URw-gN-BYNT_PiuGWn/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1yfyV2DFH7O09nEE6v-xCeXbpo2inAfYe/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1CwaGJxRCEuyMr8bXyE33EblHOnuw-Fpu/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/12MN_LkLbYlOh91NKY2GX0BfVOX7nsueK/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1MAZ5TGjhBnV0dgWtM_Z-T2XkAVbUUw89/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1sbjL2g-X_85699snia5ZhoiKJc6cBfDf/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1znvdYDrmTqWneLqKsg9pDSyqk-zJmYih/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/13SyjsCvZgYJIQTyVjJTojldYsnBPWEeV/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1NNYDYOPqfOHeEwJs2CLdR4ylFEKXSgG5/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1yz4okG4b1TwGwuygC5bE2Kkl9JeeoeVv/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
                }
            },
        "tomo-vii": {
            "cap19": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap20": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap21": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "retro": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
                }
            },
        "tomo-viii": {
            "cap22": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap23": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap24": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "retro": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            }
        }
    }
};

// ============================================================
// FIN DE LA SECCIÓN DE CONFIGURACIÓN
// ============================================================

// Lista de cursos (20 asignaturas) con área y descripción
const courses = [

    // Ciencias Sociales
    { id: 1, name: "Economía", description: "Sistemas económicos, oferta y demanda, mercado y finanzas.", icon: "fas fa-chart-line", color: "#2d6a4f", area: "sociales", availableGrades: ["5topre"]},
    { id: 2, name: "Geografía", description: "Relieve, clima, recursos naturales y cartografía.", icon: "fas fa-globe-americas", color: "#40916c", area: "sociales", availableGrades: ["5topre"]},
    { id: 3, name: "Historia del Perú", description: "Culturas preincas, imperio inca, conquista y república.", icon: "fas fa-landmark", color: "#dda15e", area: "sociales" , availableGrades: ["5topre"]},
    { id: 4, name: "Historia Universal", description: "Edades históricas, guerras mundiales y civilizaciones antiguas.", icon: "fas fa-monument", color: "#bc6c25", area: "sociales", availableGrades: ["5topre"] },
    { id: 5, name: "Psicología", description: "Procesos mentales, emociones, desarrollo humano y conducta.", icon: "fas fa-brain", color: "#ff006e", area: "sociales", availableGrades: ["5topre"]},
    // Comunicación
    { id: 8, name: "Lenguaje", description: "Gramática, comunicación, comprensión lectora y redacción.", icon: "fas fa-spell-check", color: "#3a86ff", area: "comunicacion", availableGrades: ["5topre"] },
    { id: 9, name: "Literatura", description: "Géneros literarios, autores, obras y análisis textual.", icon: "fas fa-book-open", color: "#8338ec", area: "comunicacion", availableGrades: ["5topre"] },
    { id: 10, name: "Razonamiento Verbal", description: "Sinónimos, antónimos, analogías verbales y comprensión.", icon: "fas fa-comment-alt", color: "#588157", area: "comunicacion" , availableGrades: ["5topre"]},
    // Ciencia y Tecnología
    { id: 13, name: "Biología", description: "Células, seres vivos, ecosistemas y anatomía humana.", icon: "fas fa-dna", color: "#2a9d8f", area: "ciencia", availableGrades: ["5topre"] },
    { id: 14, name: "Física", description: "Movimiento, fuerzas, energía, ondas y electricidad.", icon: "fas fa-atom", color: "#9d4edd", area: "ciencia", availableGrades: ["5topre"] },
    { id: 15, name: "Química", description: "Elementos, compuestos, reacciones y tabla periódica.", icon: "fas fa-flask", color: "#fb5607", area: "ciencia", availableGrades: ["5topre"] },
    // Matemática
    { id: 16, name: "Álgebra", description: "Expresiones algebraicas, ecuaciones, funciones y polinomios.", icon: "fas fa-square-root-alt", color: "#e63946", area: "matematica", availableGrades: ["5topre"] },
    { id: 17, name: "Aritmética", description: "Números, operaciones básicas, fracciones, decimales y más.", icon: "fas fa-calculator", color: "#0a4d8c", area: "matematica", availableGrades: ["5topre"] },
    { id: 18, name: "Geometría", description: "Figuras geométricas, medición, propiedades y transformaciones.", icon: "fas fa-draw-polygon", color: "#3a86ff", area: "matematica", availableGrades: ["5topre"] },
    { id: 19, name: "Razonamiento Matemático", description: "Problemas lógicos, secuencias, analogías y patrones.", icon: "fas fa-puzzle-piece", color: "#3d405b", area: "matematica", availableGrades: ["5topre"] },
    { id: 20, name: "Trigonometría", description: "Triángulos, funciones trigonométricas, identidades y aplicaciones.", icon: "fas fa-shapes", color: "#1d3557", area: "matematica", availableGrades: ["5topre"] }
];

// Colores por área (para el borde)
const areaColors = {
    sociales: "#e9c46a",
    comunicacion: "#f4a261",
    ciencia: "#2a9d8f",
    matematica: "#e76f51"
};

// Nombres de áreas para mostrar en badge
const areaNames = {
    sociales: "Ciencias Sociales",
    comunicacion: "Comunicación",
    ciencia: "Ciencia y Tecnología",
    matematica: "Matemática"
};

// Grados (1ro a 5to)
const grades = [
    { id: "5topre", name: "5to Pre", icon: "fas fa-star" }
];

// Tomos I al VIII
const tomos = [
    { id: "tomo-i", name: "Tomo I", icon: "fas fa-book" },
    { id: "tomo-ii", name: "Tomo II", icon: "fas fa-book" },
    { id: "tomo-iii", name: "Tomo III", icon: "fas fa-book" },
    { id: "tomo-iv", name: "Tomo IV", icon: "fas fa-book" },
    { id: "tomo-v", name: "Tomo V", icon: "fas fa-book" },
    { id: "tomo-vi", name: "Tomo VI", icon: "fas fa-book" }
    //{ id: "tomo-vii", name: "Tomo VII", icon: "fas fa-book" },
    //{ id: "tomo-viii", name: "Tomo VIII", icon: "fas fa-book" }
];

// Generar las secciones (capítulos + RETRO) para cada tomo
const sectionsByTomo = {};
tomos.forEach((tomo, index) => {
    const startChapter = index * 3 + 1; // 1,4,7,10,13,16,19,22
    const sections = [
        { id: `cap${startChapter}`, name: `Capítulo ${startChapter}` },
        { id: `cap${startChapter+1}`, name: `Capítulo ${startChapter+1}` },
        { id: `cap${startChapter+2}`, name: `Capítulo ${startChapter+2}` },
        { id: "retro", name: "RETRO" }
    ];
    sectionsByTomo[tomo.id] = sections;
});

// Estado actual
let currentGrade = null;
let currentTomo = null;
let currentSection = null;

// Elementos DOM
const gradeButtonsContainer = document.getElementById('grade-buttons');
const tomoSelectorDiv = document.getElementById('tomo-selector');
const tomoButtonsContainer = document.getElementById('tomo-buttons');
const sectionSelectorDiv = document.getElementById('section-selector');
const sectionButtonsContainer = document.getElementById('section-buttons');
const coursesContainer = document.getElementById('courses-container');
const currentSelectorSpan = document.getElementById('current-selector');
const coursesCountSpan = document.getElementById('courses-count');

// Función para generar botones de grados
function generateGradeButtons() {
    gradeButtonsContainer.innerHTML = '';
    grades.forEach(grade => {
        const btn = document.createElement('button');
        btn.className = `selector-btn grade-btn ${currentGrade === grade.id ? 'active' : ''}`;
        btn.dataset.id = grade.id;
        btn.innerHTML = `<i class="${grade.icon}"></i><span>${grade.name}</span>`;
        btn.addEventListener('click', () => {
            currentGrade = grade.id;
            currentTomo = null;
            currentSection = null;
            generateGradeButtons();
            tomoSelectorDiv.style.display = 'block';
            sectionSelectorDiv.style.display = 'none';
            generateTomoButtons();
            updateCurrentSelector();
            renderCourses();
        });
        gradeButtonsContainer.appendChild(btn);
    });
}

// Función para generar botones de Tomos según el grado actual
function generateTomoButtons() {
    tomoButtonsContainer.innerHTML = '';
    if (!currentGrade) return;
    tomos.forEach(tomo => {
        const btn = document.createElement('button');
        btn.className = `selector-btn tomo-btn ${currentTomo === tomo.id ? 'active' : ''}`;
        btn.dataset.id = tomo.id;
        btn.innerHTML = `<i class="${tomo.icon}"></i><span>${tomo.name}</span>`;
        btn.addEventListener('click', () => {
            currentTomo = tomo.id;
            currentSection = sectionsByTomo[currentTomo][0].id;
            generateTomoButtons();
            generateSectionButtons();
            updateCurrentSelector();
            renderCourses();
            sectionSelectorDiv.style.display = 'block';
        });
        tomoButtonsContainer.appendChild(btn);
    });
}

// Función para generar botones de secciones según el tomo actual
function generateSectionButtons() {
    sectionButtonsContainer.innerHTML = '';
    if (!currentGrade || !currentTomo) return;
    const sections = sectionsByTomo[currentTomo];
    sections.forEach(section => {
        const btn = document.createElement('button');
        btn.className = `selector-btn section-btn ${currentSection === section.id ? 'active' : ''}`;
        btn.dataset.id = section.id;
        btn.innerHTML = `<i class="fas fa-chapter"></i><span>${section.name}</span>`;
        btn.addEventListener('click', () => {
            currentSection = section.id;
            generateSectionButtons();
            updateCurrentSelector();
            renderCourses();
        });
        sectionButtonsContainer.appendChild(btn);
    });
}

// Actualizar el texto del selector actual
function updateCurrentSelector() {
    if (!currentGrade) {
        currentSelectorSpan.innerHTML = `<i class="fas fa-graduation-cap"></i><span>Selecciona un grado para comenzar</span>`;
        return;
    }
    let text = `${grades.find(g => g.id === currentGrade).name}`;
    if (currentTomo) {
        text += ` - ${tomos.find(t => t.id === currentTomo).name}`;
        if (currentSection) {
            const sectionName = sectionsByTomo[currentTomo].find(s => s.id === currentSection).name;
            text += ` - ${sectionName}`;
        }
    }
    currentSelectorSpan.innerHTML = `<i class="fas fa-graduation-cap"></i><span>${text}</span>`;
}

// Renderizar tarjetas de cursos con borde por área
function renderCourses() {
    coursesContainer.innerHTML = '';
    if (!currentGrade || !currentTomo || !currentSection) {
        coursesContainer.innerHTML = '<p style="text-align:center; grid-column:1/-1;">Selecciona un grado, tomo y sección para ver los materiales.</p>';
        coursesCountSpan.textContent = '0';
        return;
    }

    const links = driveLinks[currentGrade]?.[currentTomo]?.[currentSection];
    if (!links) {
        coursesContainer.innerHTML = '<p style="text-align:center; grid-column:1/-1;">No hay enlaces disponibles para esta selección.</p>';
        coursesCountSpan.textContent = '0';
        return;
    }

    console.log("🔍 Grado actual:", currentGrade);
    console.log("🔍 Enlaces disponibles (IDs):", Object.keys(links));

    // Filtrar cursos:
    // - Que tengan enlace (existan en links)
    // - Que estén permitidos para el grado actual (si tienen availableGrades)
    const availableCourses = courses.filter(course => {
        const hasLink = links[course.id] !== undefined;
        if (!hasLink) return false;

        // Si el curso tiene availableGrades, verificar que incluya el grado actual
        if (course.availableGrades) {
            const isAllowed = course.availableGrades.includes(currentGrade);
            if (!isAllowed) {
                console.log(`❌ Curso "${course.name}" (ID ${course.id}) NO permitido para ${currentGrade} (solo para: ${course.availableGrades.join(', ')})`);
            }
            return isAllowed;
        }

        // Si no tiene availableGrades, asumimos que está permitido (pero avisamos)
        console.log(`⚠️ Curso "${course.name}" (ID ${course.id}) no tiene availableGrades. Se muestra en todos los grados donde tenga enlace.`);
        return true;
    });

    console.log("✅ Cursos mostrados:", availableCourses.map(c => c.name));

    coursesCountSpan.textContent = availableCourses.length;

    availableCourses.forEach(course => {
        const link = links[course.id];
        const areaColor = areaColors[course.area];
        const areaName = areaNames[course.area];
        const card = document.createElement('div');
        card.className = 'course-card';
        card.style.borderLeftColor = areaColor;
        card.innerHTML = `
            <div class="grade-tomo-section-tag">${currentGrade} / ${currentTomo} / ${currentSection}</div>
            <div class="area-badge" style="background-color: ${areaColor};">${areaName}</div>
            <div class="course-logo">
                <i class="${course.icon}" style="color: ${course.color}"></i>
            </div>
            <div class="course-content">
                <h3>${course.name}</h3>
                <p>${course.description}</p>
                <a href="${link}" target="_blank" class="drive-link">
                    <i class="fab fa-google-drive"></i> Acceder al Material
                </a>
            </div>
        `;
        coursesContainer.appendChild(card);
    });

    if (availableCourses.length === 0) {
        coursesContainer.innerHTML = '<p style="text-align:center; grid-column:1/-1;">No hay materiales disponibles para esta selección.</p>';
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    generateGradeButtons();
    tomoSelectorDiv.style.display = 'none';
    sectionSelectorDiv.style.display = 'none';
    renderCourses();
});
