/// <reference path="../tsd.d.ts" />
var IArtProject = (function () {
    function IArtProject(projectId, projectName, avatarUrl, createDate, description, imgUrls) {
        this.projectId = projectId;
        this.projectName = projectName;
        this.avatarUrl = avatarUrl;
        this.createDate = createDate;
        this.description = description;
        this.imgUrls = imgUrls;
    }
    return IArtProject;
})();
exports.default = IArtProject;
//# sourceMappingURL=IArtProject.js.map