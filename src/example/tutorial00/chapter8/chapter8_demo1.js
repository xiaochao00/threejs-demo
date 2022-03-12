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
    var ambient = new THREE.AmbientLight(0xFFFFFF);
    scene.add(ambient);
}

function initObject() {
    // var geometry = new THREE.PlaneGeometry(204, 102); //矩形平面
    // var geometry = new THREE.BoxGeometry(100, 100, 100); // 立方体
    var geometry = new THREE.SphereGeometry(60, 25, 25); // 球体
    // TextureLoader创建一个纹理加载器对象，可以加载图片作为几何体纹理
    var textureLoader = new THREE.TextureLoader();
    // 执行load方法，加载纹理贴图成功后，返回一个纹理对象Texture
    textureLoader.load('../../../../sources/Earth.png', function(texture) {
      var material = new THREE.MeshLambertMaterial({
        // color: 0x0000ff,
        // 设置颜色纹理贴图：Texture对象作为材质map属性的属性值
        map: texture,//设置颜色贴图属性值
      }); //材质对象Material
      var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
      scene.add(mesh); //网格模型添加到场景中
    })
}

function animate() {
    requestAnimationFrame(animate);
    renderer.clear();
    renderer.render(scene, camera);
}

function threeStart() {
    initThree();
    initLight();
    initObject();
    animate();
    //创建控件对象
    var controls = new THREE.OrbitControls(camera, renderer.domElement);
}

threeStart();