var scene, camera, renderer;

function initThree() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 100;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    renderer.setClearColor(0xb9d3ff, 1);
    document.body.appendChild(renderer.domElement);
}

function initLight() {
    // 环境光
    var ambient = new THREE.AmbientLight(0x444444);
    scene.add(ambient);
}

function initObject0() {
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
}

function initObject1() {
    var points = [
        new THREE.Vector2(50, 60),
        new THREE.Vector2(25, 0),
        new THREE.Vector2(50, -60)
    ];
    var geometry = new THREE.LatheGeometry(points, 30);
    var material = new THREE.MeshPhongMaterial({
        color: 0x0000FF,//三角面颜色
        side: THREE.DoubleSide//两面可见
    });
    material.wireframe = true;
    var mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    geometry.scale(0.5,0.5,0.5);
}

function initObject2() {
    var points = [];
    for (var i = 0; i < 10; i++) {
        points.push(new THREE.Vector2(Math.sin(i * 0.2) * 10 + 5, (i - 5) * 2));
    }
    var geometry = new THREE.LatheGeometry(points);
    var material = new THREE.MeshBasicMaterial({ color: 0x0000FF });
    var lathe = new THREE.Mesh(geometry, material);
    scene.add(lathe);
}

function animate() {
    requestAnimationFrame(animate);
    renderer.clear();
    renderer.render(scene, camera);
}

function threeStart() {
    initThree();
    initLight();
    initObject1();
    animate();
    //创建控件对象
    var controls = new THREE.OrbitControls(camera, renderer.domElement);
}

threeStart();