import { config } from "./config";

export class Map {
    constructor(data) {
        this.container = data.container ? data.container : document.getElementById(`map`);
        this.center = data.center ? data.center : [69.279737, 41.311158];
        this.zoom = data.zoom ? data.zoom : config.START_ZOOM;

        this.YMap = null;
        this.YMapDefaultSchemeLayer = null;
        this.YMapDefaultFeaturesLayer = null;
        this.YMapDefaultMarker = null;
        this.map = null;
        this.marker = null;
        this.markerSource = data.marker ? data.marker : '';
        this.isCtrlPressed = false;
        this.zoomControl = null;
    }

    async init() {
        await ymaps3.ready;

        this.YMap = ymaps3.YMap;
        this.YMapDefaultSchemeLayer = ymaps3.YMapDefaultSchemeLayer;
        this.YMapDefaultFeaturesLayer = ymaps3.YMapDefaultFeaturesLayer;

        this.YMapMarker = ymaps3.YMapMarker;
        this.YMapControls = ymaps3.YMapControls;
        const { YMapZoomControl } = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');

        this.map = new this.YMap(this.container, {
            location: {
                center: this.center,
                zoom: this.zoom,
            },
            behaviors: ['drag', 'pinchZoom', 'dblClick']
        });

        this.setCustomTheme(config.CUSTOM_THEME);
        this.map.addChild(new this.YMapDefaultFeaturesLayer());
        this.setMarker(this.center);

        this.zoomControl = new YMapZoomControl({});
        this.map.addChild(new this.YMapControls({ position: 'right' })
            .addChild(this.zoomControl)
        );

        this.setupCtrlZoom();

        document.addEventListener('keydown', (event) => this.handleKeydown(event));
        document.addEventListener('keyup', (event) => this.handleKeyup(event));

        return this.map;
    }

    setupCtrlZoom() {
        this.container.addEventListener('wheel', (event) => {
            if (this.isCtrlPressed) {
                event.preventDefault();
                const delta = event.deltaY || event.detail || event.wheelDelta;
                const currentZoom = this.map.zoom;
                if (delta > 0) {
                    this.map.setLocation({
                        zoom: Math.max(0, currentZoom - 1),
                        duration: 200
                    });
                } else {
                    this.map.setLocation({
                        zoom: Math.min(21, currentZoom + 1),
                        duration: 200
                    });
                }
            }
        }, { passive: false });
    }

    handleKeydown(event) {
        if (event.key === 'Control' && !this.isCtrlPressed) {
            this.isCtrlPressed = true;
        }
    }

    handleKeyup(event) {
        if (event.key === 'Control') {
            this.isCtrlPressed = false;
        }
    }

    setCustomTheme(theme) {
        this.map.addChild(new this.YMapDefaultSchemeLayer({
            customization: theme,
        }));
    }

    setMarker(coords) {
        const markerElement = document.createElement('img');
        markerElement.className = 'my-marker';
        markerElement.style.position = 'relative';
        markerElement.src = urlPin;
        markerElement.onclick = () => this.setCenter(coords);

        this.map.addChild(new this.YMapMarker(
            {
                coordinates: coords,
                draggable: false,
                imageOffset: [-22, -55],
            },
            markerElement
        ));
    }

    setCenter(coords) {
        this.map.setLocation({
            center: coords,
            zoom: this.zoom,
            duration: 800
        });

        return this.map;
    }
}
