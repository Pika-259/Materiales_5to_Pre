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
        "tomo-i": {
            "cap1": {
                1: "https://docs.google.com/presentation/d/1LUcNI5r15BcXMKvqFAAZfPI09xZYx56S/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1-lR1L6Pih7R4qHXK8CMgIH0oG7J_JnBy/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/16eiEQI1VLyql6anbvSJO1a1a30PnaAYy/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1zeK5zbzI4PXqXAM7evDObgHE84BfL8zK/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1WOSibry1EPiFg_aOJmOqgkL6TDjBVlv2/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1Wf0r4rIJXtJlRYiAZ_VT7uY2QW0MXgNx/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/16UK1h_tG8OxnoElnFEcETlgcDjEseA75/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1duUPwcPIvK3pcUfVmNAaVoOkXfy4R-G7/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1onkm68VOe5613tPX0qUt5v00kkhxN2_m/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1Sv4BpY6TIml13_9fNZssmS1pSur1LYzI/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1Ngd6HYSjBkBeabgTA_eYvK1Zbk8FVRBh/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1bC0k3YL0k6CzH8dRWjw9Bes1-yufwvWe/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1PqWDaTq-9TJ0JJqRnNZld_9ccooYbrjd/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1zUJvIq8MqLbnWtpF7t5zJMiex3HWa3br/edit?usp=drive_link&ouid=108008430419016708844&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/10I0Jlomz-BGtpoUGWwXVPQnoMe95tSk5/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1ktExMatHsxeOhb4S4zMMRlzXYxItEWE3/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap2": {
                1: "https://docs.google.com/presentation/d/1hO6MvSypuVa3JWzko8NRGcMtVp3BuauO/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1GaXq6rQxMbHPEti5c5G59y3uHQmsHq2A/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1oOtHm-jIiNNlcIRcFL919jVqhgw6w-qB/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1iMJHF0Uozdkv2Uw67YhVizaPQ9r49Vlu/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1cLhwWFmAHgQ-YT_7N-MHPYdCesa6n2tx/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/15BhutspAfhF2_MX6Bh7wi1ar0ZSudg4S/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1y-BKk2WigQnvLt0MP-8I4rhzNGudZYmh/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1Hx1iOXUCpgM4TVkdMXlQyY9bELagSL5E/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/16eT9k596psQlJlNUA0_tn4y6RI2KKiBG/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1kYc1WIG3ANX26ftDi9yN7TKmeXu858ik/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1PAl0ymJsbhpRpJ5a9TMO5lHVj2pb-eKK/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1-YuJkcEV8iq2n4GN32x5_i2EEnigXT9d/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1feY5pgpTXMddd71hZRmeOQsD5Wd4uk7A/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1Q3H2WogUuKTdn-x2xKl18DsiaYA2GxKT/edit?usp=drive_link&ouid=108008430419016708844&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/12hGY_xdhAtmQhZSaibWB1OOZGB51Sngr/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1NzZlN6m6rP9Twp_jfn9_3CZhotzb3pye/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap3": {
                1: "https://docs.google.com/presentation/d/122W4-cWY5NvfhZ2_bx1X8CYNG5dMDiOD/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1_QLtp886U736BF_mmRSBGIbJ3CXTKaVs/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1aqIBqoQTX8u9RJLu7JVFnM6gDWUYW0VP/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1z0Fy_s_GZaqIyv4mUGlwb2GUOL4oq_RC/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1n8t4DyvDih6CN_qZZFzoAJOw6D4Z0x51/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/19xtduZjHXG17DuY9ZtarS6YgHbNsQuNo/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1xAwrkum5pKLewNZMSetW4f_YcwzPJnrK/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1UPF3OJxhK0i3zsmo0TeVdqDjwLf8PxCi/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1LjRn6WSS5WRA_nrUMCbOpPQImdXEsnEz/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1_r39MXS-daYILXHPoH3Xcb-Hwotp6khv/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1Ng0osTfrRvzBVeiYyhU9-mVFV67myMhX/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/16V5ujofyc8MQcwN6KiCScYVP5IDnZgCI/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1TCAZ4yMqKow8WHCTN4ILlxZoYspGhBzR/edit?usp=drive_link&ouid=108008430419016708844&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1ysNrAkex1_Ja8k1ChoIkgodZ2aKPtbGT/edit?usp=drive_link&ouid=108008430419016708844&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1vu-ZLxBL9tw7XnABvBYXg4oRdsk298Gw/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1i3OKRTSZlrzcVYV92EAJKohBir7qeNXr/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "retro": {
                1: "https://docs.google.com/presentation/d/19XKkIrNYx48WCoU3gtCLN17u1hcydMUT/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1ylaBoBOCdh5em4AjLWhGQWdNnNdc8ddV/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1oNACas2ZGjlEHlaXOq6P_6vmUYW0gRWT/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1EdNthlBP6LmoLEE6UwnG0Q1XkCMERsku/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1NJesCOIfJL2LJBsKKBus4nW1haXsE9J4/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1n5KHPp4n42-a4V0_tIGwVp45tr-9iY23/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1w_EgPpjd6dy75nZ7iKw_8VktCjoDMu8w/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1BOMlck6ef6_UOu_PMz46_mX-pbZYbOVk/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1VS9DaLb-pNavWLwZZPfoyHS8xR5nnVtI/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1fxWEuIMUNnxcObAvtmme2j_s-RVjnTlV/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1TarpH7l6WCy-sFZcRZioEDsM0Yuu2XGZ/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1TfZqhB70cCZBEwBP1q70vrDvnEm8jiYs/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1EG2AtgGMq0PTeS96DK2A5CsldoUtjZqr/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1_iTPKBRAzQXcnmXpI6iIqRhlUhafKn-D/edit?usp=drive_link&ouid=108008430419016708844&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1tpm6d43p7tP0_zS0X7Uit8POJToFxnEn/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1qvs_4dJpa1XIIaD5oIjVDrW2I3mm1FAT/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            }
        },
        "tomo-ii": {
            "cap4": {
                1: "https://docs.google.com/presentation/d/187LYCsSG-vPq21T7Gsmbqkh9FkgxpqQh/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1U90KjS6iHRuA2GaCfio_rDLkNXoEh_PM/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1wZR8ip3V-Kk2J48ePMflW6_1Th5nfqBR/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/17i0BcdqsV3s_HPOUNHYPIxDlahpNO2mH/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1wVtB_xonkviif1EghNQ4Xc2P_3AbKzD6/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1sszf1WTEruM0gepcfCMIeb5Ft0aMdNIq/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1KjmWtVomONhi4TCFBtTOxBKV2azz6TQl/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1_cN2UN0JK49btfMixj2BeTMt8-xcVSk5/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1_gnb0fWsWhlhQ1vrQvA9slPjWQHNPqNb/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/11mEi_tsvwmPvafyBBl0wPlZkMYr5Y6w8/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1TMzLgCYQ2hq5ql5gNuI79nfdrbutvoxP/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1CpM2nbPIgB9zjWqKj9Yw8XH8LxCDP1mg/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1AjRh3EkiugHDH8064sGZvXjfIzj-UIgn/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1VC9nY0SGnk_EUfBIh6bLdYBzVR9f10I6/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1S41zKOA0z9doHy78h2w3atsd1CML0HRK/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1kMtBc_KHwDOafzPcrVTjiBEkl9oYZrvq/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap5": {
                1: "https://docs.google.com/presentation/d/1qSQPO3ezenDgKzNqgvD_6fEx4_yG5xW5/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                3: "https://docs.google.com/presentation/d/1TLYJqQGWGLaXDbk25yHHF6G_ZgEUbPa8/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1fja40jgAtSnjI5v8jWBfjT0nqtVXPjn5/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/19LCRO4-df1lFJCTM7eQQtYA0X3EvubTl/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1KVY1sGsEsXW1nALSgHzNUw6UM9BjKaQk/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1vd3EXJAzFIhk-T0JXPcoPMW57fMi3DP-/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/12YehnGfRXXrubX5xqN4NDZ6HGDZ4qe1M/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1MHMkf1cOvkkyhZTvhTnSjKezcvBDBrLs/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/10fhV7hcC96CAhYd3sZ8GtQhAE55pf9_N/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1SlYylmWJwunSSv7tnpFs7gIFgFvfYdOc/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/14gZctrx2G9OxOo0yKP5O8H_BbkQbeWHq/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1VlaKj-qyiMKn1ThutFsacxM_2I6CDubI/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1F7lWkXm3C65SnIJuslWcBo0FnxA8FHk1/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1ZXBfPNE08U5Cp6QBxFE845LatcFNTto8/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1ym4owyuxeGkhoTeMpbdeSEpoUXqx3EjO/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap6": {
                1: "https://docs.google.com/presentation/d/1y3SVb_AGGfpP0mNeTMBmHBCJhsVldUyq/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                3: "https://docs.google.com/presentation/d/1koxVAf7LaNEcS4oqhfjyQlSHOQ97N7kv/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1XsgcYgYWmTRn2-1i8mdv0hzVN3KqehR2/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1MQZ97aFqa9-JOpfQ_2xuPagXw_gJyMrn/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1obF81A9ZjRUFFbMs4Odlo6gJ87K1vlX1/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1Id6HUHhk_5YP8iKNZXioFgjwKYLmdqkg/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1ZzIb0219f1XopQAWntIzGyUUkhNRhq1i/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/17CX4UwrhOi-sgNDJ-qgTgz51NIcghMXB/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/181sLj3l6ow4p_cuwnxp4uvcwO07gsofI/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1-JOWFtyLaUPK5y0laHUkYM8kGxEUvRuN/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1g4cnLaB-_xJnnSsRa1adz6cC89zVAQBc/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1DrG-EORqHVNMLLLowURBnDL2-tbkks9E/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1AENKMs_KIfGbS832r7PoHV6cH-ZdcyBl/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1WWu6Pwa2_8kYyOMUduC3fx-r--yN5BQW/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1z3fmIkHh3cN2Rd4mU8GXPW5JUy6Fgwm9/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "retro": {
                1: "https://docs.google.com/presentation/d/1fLP_y2iKF_9Dc2WYEac3wWEnZTxCenwx/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1TttLk82mZuDG1rkQCAOd4AMeM0zBZaAR/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1aZOM5Qn_q3IQXPqpClhQCWV3XADQXnek/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/19tS6xSauK7axtA3ECcg2taAhlcHCxivT/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/171fQz-ACyORrVHlkV2wmC_0qH7EB4-Uw/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1-jEOxHzeDZm7uX4-l6SMEC_FYJzTlc7W/edit?usp=sharing&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1ZYI8DCm7gK_uyOeobG9d6xOgj3kb_bHS/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1ym-NA5lr2N4CJCGQll-gUeQ0xjUOelkR/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1EN7bzMDdG0dbLb5Vy5qadT378U_vXKPT/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1buqGd_6f9iyKtXZg-fYGYWlb-8AfX9vV/edit?usp=sharing&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/157L7OgIkRer_iv_zUzrZ_Lpf6u6cg4pk/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1s_h96mzlHkWTDm6Yb8RC9IrSuKCC9Uys/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1smoeasre0pYHuAjToGARn7UyWfOofIzJ/edit?usp=sharing&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1ZKv4GUUHp1ed_pAIOePT3Sl87GXIPuWN/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1goYTFxFsTeqH3VO7_BxxO-eMePNx_Khe/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/13x1pSUtgRRJELuS0j_qRHsxeuFRI19wI/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
                }
            },
        "tomo-iii": {
            "cap7": {
                1: "https://docs.google.com/presentation/d/11FCM-6F-ta4W_hrkZ-_HZqaxZq-7A4df/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1azWRnLyETw13APby7fS7qCgNBVLdZuXy/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1FHw-oS0rD3TIfS0yowz9d_nwsO8tHCkM/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1SpWN3zYUHSQOCH-7Ea2lsHnTMTa6L46k/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/16jFgc8VJpL88m1Q-UIZCJtr318g-u6wi/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/19hl6pW8v3VV-P9Imx4VUcNxXptREBzC1/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1mRICZoXa-VaWS7WIMzH4vyUftnoKtEsA/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1g3AYWhIfEdnTkl1HtZB9Qa0GpMWq-pnf/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1YXAQ1mk6eD35vnYes3SdF-QdpxAC8oO5/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1k0Og3eLsuHyxOee0GjcEsAfn9tpgp-kv/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1XudSX8DpSXi9l2Fx4EQYr7i7SePZDpRN/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1a6Gj9OvAP3PRd3fJFhDymLTRHYegyxXC/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1y1ccDBjDcISIXHffOnq5FLlD0_g9hhTU/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/19_MPgxhx7TjFU_PO5lp_qiniFoxXrv7H/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1OlynTDtdum5EbOmHDbvMvo048ITNC-c-/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1yqdVFpAgofKiFz_rBWZXmLBhONbxXdMe/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap8": {
                1: "https://docs.google.com/presentation/d/18P7TMHmEdluu3j3kCaiwFB3iZDUVpV55/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1y5p00rk7wq2nbe5eWx0IJWiamYkbd7Ve/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1xexi-ZGScgYu_rcsZYDAals-jLpHFVC7/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/18wraaqVgCZjhPjscgVbrU24ggPmIO-b6/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1EY0Gx28JK6jTX7n4M0JCwHsxxbOInJIP/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1CiIXrAQbImT-7e3EYs8GRP6LLXh5m-pu/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1kqEl_8FhPaAHxdsGuOdWkH7XVPy1WjkR/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1pkdO8JWCT3tYz--kzEe78Sqps1IxZaPD/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1bPNp_TTBL4q2OaqPhiraBsLKf3IE08yX/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1uZGryY8nuI0Xx21CPCdg7Bx62QcD4xst/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/12kfBjR1V6hxJ1dtTiA-8dMcqT10YpR3y/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1t4Prsp0HTd4Eb_LFCUa_HrUh1PQMjfH1/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1dTzDUCX9LvXbLe0okt7HNUHEk2y7fa7D/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1Fu9kBpuhoV8U5azOI__cmIfQNzi5AeEC/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1oNkNFNsJD2wb7vVHuRo_Ub9dqHPec2cc/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1Mcp8nSbYlGWK6YNggZKXcKpROEpHplvp/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap9": {
                1: "https://docs.google.com/presentation/d/1J8e2MC8gSKk_TjdWKUGXRTX6iO2cjE2i/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1wqRNWt9M3Cg9bujpnvy7wlFQW8Tr4_GP/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1WNIhE2xqcWwTQLhWOX1KnDuBn_TdxheZ/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1lX3qaxSolryzc-EcYwwmvpLtRLdmmGkj/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/11QwgXwmYP6fhMSnM8Gc9CmPUQFOqTMDw/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1jo3pINdMgl2A3GPeCeSEHvwq_c6575gT/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1HmR9rCmowmYibu71surUYUThMJ6PrTHN/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1T-jMBPtCy4ViFhVrYEUjt5x3C5D-rJVj/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1MU2irm98NrVLt9Ic7TyvTcqDXmJfI7Pm/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1Yq_bRW0w0vMttjlxjS3LGKjLFZEWNl_e/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1CqbAG0FPsLq5M0Vxbu0GJzWaJzEr1_cw/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1aYAIux1ys3qKiLxjUU2cB9oSNxvq4aC3/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1O86i3FwV7mlkLar0e2R4pvv8Zj5N8nZU/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1cUwnxrkW1a2Iknzj7y0EV5cHZmOPsEaO/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1cqm4onjnZPZcAXu5fZ6vpKNHZSz57Q9Z/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1MzpALVggJSjn8BSzW2N8d1ZhE7CIbxPc/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
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
        "tomo-iv": {
            "cap10": {
                1: "https://docs.google.com/presentation/d/1DA3yLpx668gYwQ_fUmz-itq4lnydMDlD/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1f6nt_WAKLOCHlH4WCr7qzhaM86U-ihMk/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1y2PnUba4KYdRTMUtOiAXv7H0pBm8TGfp/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1w6M1yQ2x-YGfIesnXj1Jf4T5kvWefbDb/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1D8uXIrxZ2Z6CXVzfXQa3yFVaviPPvSkL/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1nJyOHTtw5ttKD3BJjEjhGTRmDtE1bNgK/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/15FSUuT2bGNc-J1R98U7rNo7rmUwePhUk/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/12TbM5xTAO4J4VjPkKQNDOY5Hzh90ZExL/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1ZuQVHMf_unI7IWETmjLFqm4RsZL8NS-6/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1J7ggx3keDQk32wxuq8CQlcJVUGkGduBt/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1kOOce4WM6p64LnIjMfUUVMqQ7V8FFoya/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1ifDnHGbG45R0uG9YhZjFvgxdEIT-VxHQ/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1y9F97H4RSMVc0LomEs-P6_ecFNw6zvdR/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1FwtND_vwfxepjzZ8kXVlohCUhehvR3uD/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1VRv4tCaYsfVa51uuPJnkmIrI2UAZ_NWL/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1Npq1CbtQ86OxQ1BcQ0Ara85EJZbbFcU4/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap11": {
                1: "https://docs.google.com/presentation/d/1IYL5QfQ_VrJQwIq6tA7LYmF8xjvHY100/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1NRffAL5RMOU76SvmOFjafeBdvC-v9YEl/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1rpWaqXVDwaZWpYpr3tzZYzP1Fu9PswoK/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/11oVGKkYariGuyG3E_85GcYeDzXyKSrOg/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1fn7mFQYlYP-E9aUGy1PpSGJt1PBArUd7/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1PrUwU6KXoBX2wIRwPD513FUyJy-JNL5Z/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1V3Y0k-sLk_erFBUWA-GW34q_eWhzgyJr/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1YuAevXwgvIcfdRGJrujTjm4560G-gsUd/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1jU_eJmEdKdRop7YZcUn65YmBGx7pXJ9d/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1O9Fd28SECw1iIhtvZf2fUTkHsa2ifIYq/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/133ekYoZpgPc6IRZcFq7HWp34L4BCCU_O/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1uh8cCNg69Z4pobbbSrS9wdxt78foUfvR/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1jORZmMI3V33X_ofQznLZPzlfhudietkq/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1Qy8sGnZ2E9zD_feGADt2-kOQm6wFiC6k/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1aLmxVlL3Hv9o-gaONxlvFyrwO_LcLaph/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1R2-YkVDOWgxxSlJQKopErQ__OCRATMAG/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap12": {
                1: "https://docs.google.com/presentation/d/1d8zZMhyFjldMkbd1TbEKTeEJAf1Fmj3N/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1QBr-YnlBWKIWoCeH4YAhyaPa5xzzfXIf/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1PI5PveI14aKujIgXyju-mRx-oZKl6BHE/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1XhpOpfsAU5WmKyIXyjtCyDINC8HjSF78/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1QYOGP05INgbXjGZdV8PlpIWfTw1EnrC1/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1aeVL2dMFf2zXZ8FODBgy0cjCQr0ES-go/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1B_2KBAqkhR6Dzzjbm95vyTsfZPiI5rr5/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1tuD5PuQeUCr_XTRLKdwT8SFr1QavAZxU/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1OnmRnIxTben3TF6uC9i3UzE6c96z6F91/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1uARclusmrqFT3YQsE84-dfCv-8urLQOi/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1raa9SgMDqhUztP8amiTukgcQdl8YVQpT/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/17ZnxdfZG172Zcszkc7sLp4zKQPhXlYYG/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1PID4GG8QO7N1ZjFrBtCA0imTuv3F4upN/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1orHHMCJYmSxFf3exuw4Q2yuL2WlT_EJs/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1vqXe_wC9sHr627TZGk1bRsmiP6AlQXYS/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1DFvX8ynbXxvIN-nr5_93UHDi8xcHd0RY/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "retro": {
                1: "https://docs.google.com/presentation/d/1bSItRGMXFmoZ9WMgU149R5qmz3UcfYrL/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1bbh_HvkKdkKMNBgtHNwbnjCE8q_ViYvw/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1kIT9YUS7BSApctD6sqh0ICfHwUkYqIXg/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1-gcCpwR4mG97zzZ-5KJVH7f7hz0phC8z/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1CPAg4lSNnhkcIAbVqTMdxNDgkMLd-qxU/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1QhNDJRMXKx92v5Oe1KaRTpJqYg5SuvQx/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/117qDEBJPCXR8aY0DIogoJCodktGe2S0m/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1OMtHw62Z1vR0xytPykmnskYWObOThL7V/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/13ZwGpKm9MdjfO-ZQq_0G3uoBRILZVSsm/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1oVHbtH7EJRS5QS1OzgTElhsCpltl5AVv/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1m_x5tbFdLsL-BErlF537qZVdbkPcvwKn/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1IwXswTBeSpfh4YbbB4RdGmNBKIeqdyFm/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1r-aowkVBgYcypn9aS09JJ8FSKwKGvIPZ/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1kA8IhdAXnDmYtBFQVrqYpXX3AAfIVTJU/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1MBUP3QKIPUVP4UCANJpLMO4H4Qh-DtCz/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1c0PrUENE0C4bmW0bPoyYj9jD0txVO-p-/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
                }
            },
        "tomo-v": {
            "cap13": {
                1: "https://docs.google.com/presentation/d/14C-ZvDYZbacnYTgxg1du6GG4rF3RL3SI/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1VBjDngvdAn2i8kicW4EDW6DoRgluncg2/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1C2OiEeD6C6P0FNQlepljiPP6oHbKe6gv/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1c6Xto14DaNtfi6H-RQjdJbPCqjkIcs5m/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1Y2HLksarWTryrdAKuJTSjIfUc-OXCM2d/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1ZVnqIqLhaMPE4kbN2phB1mCgY89KKvJh/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1tfXfMjQ9ZCw28f2M2tVxEIt_IX6gBpDb/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1mPmLb7XC5qBxger5gTeOUySPjF2NLWu1/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1UgeRKX9t92snFCFmYOiXNwVyuiDV-sSO/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1t9LkAvY9N_7s_3fIVblg9leHj0fRMKjZ/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1k_x0fQMDe4AQRD5anUocvOjKRUE-HxUo/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1Eh7TjqR-tKkAV5ly8EZGOB2UMnvoq_28/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1LmzPpb8ArzH6dPXTMQqr7QgBkggkpaNU/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/18mYQythuJhyZqqvUC1aPuDEmJqssOsGe/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1rV0O2uGQcoWCJmO7plmUrvxyb3mCrIHW/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1sTTensFhRmEyXofSlk-QovUjiplB0bU0/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap14": {
                1: "https://docs.google.com/presentation/d/1l5xUvCSdgzcTctpZE9nrFpv4IufqLHrs/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/171C5aKFm3Co7iZcu-3gxQglfqknw0RSU/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1SqRy1IHHdKaOZVOaPlIWjBDbON8oeg5E/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1d2G23I3b1yH0LQ6AMHbj02x4m3qDaudy/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/14KhnGxUeiW6Ut8EbL2w0p_iEfX_yyY-I/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1tt50leK1KiDyRmsJZ_2X9bA47mVROTMg/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1pX91kCA7TT_DoY95pl8KDgAW7UcbrKcn/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1lwsmUop36an2WSpYcM6FpPYZsjW6q6fl/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1Uaw9TetkwPKqnhDvK0-mNa88dKOcdIP6/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1mA2RMe62qcbfz96hjdLfxsaGnyXDmtWp/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1Zcx0-FiTBuIEr13lKVgX9rL8VvHiOZLx/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1ueJ2tM4qH7jgmXvWwqywyfkYZIgph_us/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1rb6IxWQHzOc-drLV0xIkLB2E9QOcY-Ya/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/16ZnHI62_I1pJHhyFfPlnT0WPcJJa8yO3/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1_hfmC2Ufq1rP_-Fq_i2SHpdR6rNmIHno/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1nLMAh_c3VOQFeqUIvR3jZOqYprrQ4E2-/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap15": {
                1: "https://docs.google.com/presentation/d/1MHCtmkADEPTTkkE0NgzuAt2NrGJD2vnz/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1itSN40QRLSVKEc84mbuLN8LKpQy4BQ6P/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1XzrZsWSu8DfK365QNhAtRPSeX-i_LwdL/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1rhMMoxzwUgyeK6v3wYQetaAbaJu3lCby/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1rm8R6Hl8Z39eO4jB9AZQo97c2N2BF7Z_/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1Z8k46fGxkMrnSksHh2GTlf5j3bozcppq/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1_68psOe8ChNCgbk7ezfdaoaPj5sn8mPv/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1EGDo-g7b-z-85aNll7GfcH-1bLY2oL1w/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1Be1Pd-ON5FARJ4ovLFSdlOm9WT8MuNak/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1Ug7xsdDb16qX-luEjMil6W9V53d_owm6/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1EHnxG3dvycH-bll_m63FCJpkfw1yn-kK/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1hTAj8liA6kAXynOtJCoPHm6WzFn6VNTx/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1P0bro8I12sbtN0RvDZuKWLCtVDctQYDU/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1h1kLvikoPnO7qG7raWjm33uYUdKEw2JF/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1K9ZlqCV7TTNOBmEfzw8rcmYB61StGSA_/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1aTYyILsyb8oqDucqUo1HtK2fkqyYfENA/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "retro": {
                1: "https://docs.google.com/presentation/d/10bZ_i_cL9ARumxC52GYoOfOIaFH_vmLq/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1rLt2JWOl0ENJCNI816B_1a7B_1tuaTA6/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1ekvh9SqSjMsCgrLw22UzWR94VdeEdQVu/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1en6-sX9_HDGxoldb8iqEnowgdTZMklRn/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1NeiWFf8LoO0-QpvBO-vk8ktst7GGvhEY/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/14veii_wCGd6AhGXY7BFrgDqh0zTj_Nmk/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1yFnHoe_h1IKtEVHLKtzPj572lOWSnFWS/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/160hB-8Z637nEhhAWhPtYGDuUzDK9v8N5/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1TgrikZLzZcdAO_h07yaBCZ4RqJvrvB7w/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1LcKkuJq-QKPeNc62RaNTDft6xs0qhIDK/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1j5LvHSRfWBRtx9bdn0Fgzo72kR51-hiM/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1Tszbs4SGQeSQ0FSBp2hiJg9KgE5Tq0Pw/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1Q69HeFeowg9GK9WR2E-UUBciySOxkeSZ/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/158LYTA4ZsyQfcgGzuYibLp46C1LL0Tfm/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1VtQOm550p0Yhhz2h4uPUA1v9o6bQT1-u/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1TCB7JOLWdzJgtlNP6IKxywzOF9AsjptT/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
                }
            },
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
