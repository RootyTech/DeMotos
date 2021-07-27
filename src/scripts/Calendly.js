export function Calendi() {
    if (document.querySelector('.Calendi')) {
        const Template = (URL) => { return `
            <script type='text/javascript' src='https://widgets.tucalendi.com/assets/iframewidget.js')></script>
            <script type="text/javascript">Tucalendi.initConfig({domain:"${URL}"});</script>
        `}
        
        const Enlaces = {
            "mantenimiento": "demotos.tucalendi.com/citas/cita-mantenimiento",
            "lavado": "demotos.tucalendi.com/citas/cita-lavado",
            "puesta_punto": "demotos.tucalendi.com/citas/cita-puesta-punto",
            "revision_garantia": "demotos.tucalendi.com/citas/cita-revisiones-garantias",
            "pintura_chasis": "demotos.tucalendi.com/citas/cita-pintura-chasis",
        };

        const Selector = document.querySelector('.Calendi__Select');

        Selector.addEventListener('input', (e) => {
            if (e.target.value) {
                window.location = `/AgendarCita?servicio=${e.target.value}`
            }
        })

        const Query = new URLSearchParams(window.location.search).get("servicio");
        if (Query) {
            if (Enlaces[Query]) {
                const HTMLResult = Template(Enlaces[Query])
                // document.querySelector('.Calendi__Form').innerHTML = HTMLResult;
            }
        }
    }
}
