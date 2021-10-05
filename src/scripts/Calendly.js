export function Calendi() {
    if (document.querySelector('.Calendi')) {

        const Loading = document.querySelector('.lds-ring');
        const Template = (URL) => {

            Tucalendi.initConfig({domain: URL});
            setTimeout(() => {
                Loading.classList.add('hidden');
            }, 5000)

            // if (window.outerWidth <= 568) {
            //     const CalendiFrame = document.querySelector('#tucalendi_iframe_root');
            //     CalendiFrame.style = "box-sizing: content-box; display: flex;flex: 1;overflow: hidden;position: static; height: fit-content;";
            // } else {
            //     const CalendiFrame = document.querySelector('#tucalendi_iframe_root');
            //     CalendiFrame.style = "box-sizing: content-box; display: flex;flex: 1;overflow: hidden;position: static; height: fit-content;";
            // }

        }
        
        const Enlaces = {
            "mantenimientoGeneral": "demotos.tucalendi.com/citas/cita-mantenimientogeneral",
            "mantenimientoPreventivo": "demotos.tucalendi.com/citas/cita-mantenimientopreventivo",
            "lavado": "demotos.tucalendi.com/citas/cita-lavado",
            "puesta_punto": "demotos.tucalendi.com/citas/cita-puesta-punto",
            "revision_garantia": "demotos.tucalendi.com/citas/cita-revisiones-garantias",
            "pintura_chasis": "demotos.tucalendi.com/citas/cita-pintura-chasis",
        };

        const Selector = document.querySelector('.Calendi__Select');

        Selector.addEventListener('input', (e) => {
            if (e.target.value) {
                window.location = `/AgendarCita.html?servicio=${e.target.value}`
            }
        })

        const Query = new URLSearchParams(window.location.search).get("servicio");
        if (Query) {
            if (Enlaces[Query]) {
                Template(Enlaces[Query])
            }
        } else {
            Loading.classList.add('hidden');
        }
    }
}
