var IArtProject = (function () {
    function IArtProject(projectId, projectName, avatarUrl, createDate, description, drawings) {
        this.projectId = projectId;
        this.projectName = projectName;
        this.avatarUrl = avatarUrl;
        this.createDate = createDate;
        this.description = description;
        this.drawings = drawings;
    }
    return IArtProject;
})();
exports.default = IArtProject;
//# sourceMappingURL=IArtProject.js.map