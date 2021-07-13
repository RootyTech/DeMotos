export function Calendly() {
    if (document.querySelector('.Calendly')) {
        const Template = (URL) => { return `
            <div class="calendly-inline-widget" data-url=${URL}?background_color=f6f6fb&text_color=111218&primary_color=0e53ae" style="min-width:320px;height:630px;"></div>
        `}
        
        const Enlaces = {
            "mantenimiento": "https://calendly.com/demotosmedellin/cita-para-mantenimiento",
            "lavado": "https://calendly.com/demotosmedellin/cita-para-lavado",
            "puesta_punto": "https://calendly.com/demotosmedellin/cita-para-puesta-punto",
            "revision_garantia": "https://calendly.com/demotosmedellin/cita-para-revision-garantia",
            "pintura_chasis": "https://calendly.com/demotosmedellin/cita-para-pintura-y-chasis",
        };

        const Selector = document.querySelector('.Calendly__Select');

        Selector.addEventListener('input', (e) => {
            if (e.target.value) {
                window.location = `/AgendarCita?servicio=${e.target.value}`
            }
        })

        const Query = new URLSearchParams(window.location.search).get("servicio");
        if (Query) {
            if (Enlaces[Query]) {
                const HTMLResult = Template(Enlaces[Query])
                document.querySelector('.Calendly__Form').innerHTML = HTMLResult;
            }
        }
    }
}
