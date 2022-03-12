var scene, camera, renderer;

function initThree() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 200;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    renderer.setClearColor(0xb9d3ff, 1);
    document.body.appendChild(renderer.domElement);
}

function initLight() {
    // 环境光
    var ambient = new THREE.AmbientLight(0xFFFFFF);
    scene.add(ambient);
}

function initObject() {
    var geometry = new THREE.BoxGeometry(100, 100, 100); //立方体

    var material_1 = new THREE.MeshPhongMaterial({
        color: 0xffff3f
    });

    // TextureLoader创建一个纹理加载器对象，可以加载图片作为几何体纹理
    var textureLoader = new THREE.TextureLoader();
    var texture = textureLoader.load('../../../../sources/Earth.png'); // 加载图片，返回Texture对象
    // 材质对象2
    var material_2 = new THREE.MeshLambertMaterial({
        map: texture, // 设置纹理贴图
        // wireframe:true,
    });

    var materialArr = [material_2, material_1, material_1, material_1, material_1, material_1];

    // 设置数组材质对象作为网格模型材质参数
    var mesh = new THREE.Mesh(geometry, materialArr); //网格模型对象Mesh
    scene.add(mesh); //网格模型添加到场景中
}

function initObject2() {
    var geometry = new THREE.PlaneGeometry(204, 102, 4, 4); //矩形平面
    var material1 = new THREE.MeshPhongMaterial({
        color: 0xffff3f,
        // wireframe:true,
    })
    // 材质对象2
    var material2 = new THREE.MeshPhongMaterial({
        color: 0x0000ff,
        // wireframe:true,
    }); //材质对象Material
    // 数组材质
    var materialArr = [material1, material2];
    var mesh = new THREE.Mesh(geometry, materialArr); //网格模型对象Mesh
    scene.add(mesh);

     // 设置几何体的材质索引(对于PlaneGeometry而言所有Face3的材质索引默认0)
     geometry.faces[4].materialIndex = 1;
    //  geometry.faces[5].materialIndex = 1;
    geometry.faces[7].materialIndex = 1;
     
}

function animate() {
    requestAnimationFrame(animate);
    renderer.clear();
    renderer.render(scene, camera);
}

function threeStart() {
    initThree();
    initLight();
    initObject2();
    animate();
    //创建控件对象
    var controls = new THREE.OrbitControls(camera, renderer.domElement);
}

threeStart();