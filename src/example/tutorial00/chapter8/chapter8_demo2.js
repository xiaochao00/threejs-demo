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
    var geometry = new THREE.PlaneGeometry(204, 102); //矩形平面
    geometry.uvsNeedUpdate = true;
    // TextureLoader创建一个纹理加载器对象，可以加载图片作为几何体纹理
    var textureLoader = new THREE.TextureLoader();
    // 执行load方法，加载纹理贴图成功后，返回一个纹理对象Texture
    textureLoader.load('../../../../sources/Earth.png', function (texture) {
        texture.needsUpdate = true;

        var material = new THREE.MeshLambertMaterial({
            // color: 0x0000ff,
            // 设置颜色纹理贴图：Texture对象作为材质map属性的属性值
            map: texture,//设置颜色贴图属性值
        }); //材质对象Material
        var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
        scene.add(mesh); //网格模型添加到场景中
    });
    /**
     * 遍历uv坐标
     */
    const uvAttribute = geometry.getAttribute('uv');
    uvAttribute.setXY(0, 0.4, 0.4);
    uvAttribute.setXY(1, 0.4, 0.4);
    uvAttribute.setXY(2, 0.4, 0.4);
    uvAttribute.setXY(3, 0.4, 0.4);
}

function initObject2() {
    // 16个方块，32个三角形
    var geometry = new THREE.PlaneGeometry(204, 102, 4, 4);
    var material = new THREE.MeshPhongMaterial({
        color: 0x0000FF,//三角面颜色
        side: THREE.DoubleSide//两面可见
    });
    material.wireframe = true;
    var mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
}

function initObject3() {
    var geometry = new THREE.PlaneGeometry(204, 102, 4, 4);
    // TextureLoader创建一个纹理加载器对象，可以加载图片作为几何体纹理
    var textureLoader = new THREE.TextureLoader();
    // 执行load方法，加载纹理贴图成功后，返回一个纹理对象Texture
    textureLoader.load('../../../../sources/Earth.png', function (texture) {
        texture.needsUpdate = true;

        var material = new THREE.MeshLambertMaterial({
            // color: 0x0000ff,
            // 设置颜色纹理贴图：Texture对象作为材质map属性的属性值
            map: texture,//设置颜色贴图属性值
            transparent: true,
            opacity: 0.6,
        }); //材质对象Material
        var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
        scene.add(mesh); //网格模型添加到场景中
    });
    const uvAttribute = geometry.getAttribute('uv');
    uvAttribute.setXY(0, 0, 1);
    uvAttribute.setXY(1, 1, 1);
    uvAttribute.setXY(5, 0, 0);
    uvAttribute.setXY(6, 1, 0);
}

function initObject4() {
    var geometry = new THREE.Geometry(); //创建一个空几何体对象
    /**顶点坐标(纹理映射位置)*/
    var p1 = new THREE.Vector3(0, 0, 0); //顶点1坐标
    var p2 = new THREE.Vector3(160, 0, 0); //顶点2坐标
    var p3 = new THREE.Vector3(160, 80, 0); //顶点3坐标
    var p4 = new THREE.Vector3(0, 80, 0); //顶点4坐标
    geometry.vertices.push(p1, p2, p3, p4); //顶点坐标添加到geometry对象
    /** 三角面1、三角面2*/
    var normal = new THREE.Vector3(0, 0, 1); //三角面法向量
    var face0 = new THREE.Face3(0, 1, 2, normal); //三角面1
    var face1 = new THREE.Face3(0, 2, 3, normal); //三角面2
    geometry.faces.push(face0, face1); //三角面1、2添加到几何体
    /**纹理坐标*/
    var t0 = new THREE.Vector2(0, 0);//图片左下角
    var t1 = new THREE.Vector2(1, 0);//图片右下角
    var t2 = new THREE.Vector2(1, 1);//图片右上角
    var t3 = new THREE.Vector2(0, 1);//图片左上角
    uv1 = [t0, t1, t2];//选中图片一个三角区域像素——映射到三角面1
    uv2 = [t0, t2, t3];//选中图片一个三角区域像素——映射到三角面2
    geometry.faceVertexUvs[0].push(uv1, uv2);//纹理坐标传递给纹理三角面属性
    
    var material = new THREE.MeshLambertMaterial({
        color: 0x0000FF,//三角面颜色
    });
    var mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
}

function animate() {
    requestAnimationFrame(animate);
    renderer.clear();
    renderer.render(scene, camera);
}

function threeStart() {
    initThree();
    initLight();
    // initObject3();
    // initObject2();
    initObject4();
    animate();
    //创建控件对象
    var controls = new THREE.OrbitControls(camera, renderer.domElement);
}

threeStart();