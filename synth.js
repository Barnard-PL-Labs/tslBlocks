function callSynth() {
    let prevSynthesized = document.getElementById("synth_script");
    if(prevSynthesized) {
        prevSynthesized.remove();
    }
    reset(cube);
    reset(polygon);
    reset(sphere);
    runCode()
    tslSpec = spec;
    targetLang = "js";

    // get the object that we are dealing with
    scene.clear();

    if (tslSpec.includes("cube")){
        reset(cube);
        scene.add(cube);
    }
    if (tslSpec.includes("polygon")){
        reset(polygon);
        scene.add(polygon);
    }
    if (tslSpec.includes("sphere")){
        reset(sphere);
        scene.add(sphere);
    }

    const pointLight = new THREE.PointLight(0xfffffff);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    $.post("https://graphviz-web-vvxsiayuzq-ue.a.run.app/tslsynth", {tsl: tslSpec, target: targetLang}, function(data){
        document.getElementById("codeBox").value = data;
        let script = document.createElement("script");
        script.text = "function updateState(e){\n" + data + "}";
        script.setAttribute("id", "synth_script");
        document.body.appendChild(script);
        if(renderer != null && firstClick === false){
            renderer.clear();
            codeChange = true;
        }
    })
        .fail(function(response) {
            document.getElementById("codeBox").value = response.responseText;
        });
}