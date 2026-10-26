// TEST-SEC-001: Validación de controles de seguridad en DOM
const checkSecurity = () => {
  const csrfToken = document.querySelector('meta[name="csrf-token"]');
  const cspHeader = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
  
  if(csrfToken && cspHeader) {
    console.log("TEST-SEC-001: PASS - Controles Anti-CSRF y CSP presentes.");
  } else {
    console.error("TEST-SEC-001: FAIL - Faltan controles de seguridad requeridos.");
  }
};
checkSecurity();