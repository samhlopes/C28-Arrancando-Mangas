attach(body); {
    this.launcher.bodyA = body;
}

fly(); {
    this.launcher.bodyA = null;
}

display(); {
    if (this.sling.bodyA) {
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
    }
    push();
}