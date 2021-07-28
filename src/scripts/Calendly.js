export function Calendi() {
    if (document.querySelector('.Calendi')) {
        const Template = (URL) => {
            Tucalendi.initConfig({domain: URL});
        }
        
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
                Template(Enlaces[Query])
            }
        }
    }
}
