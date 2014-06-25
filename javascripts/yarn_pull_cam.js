// a cam generating function...

// call it like this 
// yarn_pull_cam({max_loop: 1000, r: 20, dx:0.00001});
function yarn_pull_cam(args) {
    var cam_array = []
    var i = 0;
    var max_loop = args.max_loop || 100;
    var r =  = args.r || 10;
    var dx =  = args.dx || 0.0001;
    var dy = 0;
    var x = 0, y = 0, theta = 0;
    
    cam_array.push([x, y]);
    for (i = 0; i < max_loop; i += 1) {
        dy = Math.tan(theta)*dx;
        theta = Math.sin(dx/r);

        x += dx;
        y += dy;
        cam_array.push([x, y]);
    }
    return cam_array
}
