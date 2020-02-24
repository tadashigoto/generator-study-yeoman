'use strict';
var Generator = require('yeoman-generator');
var uuidV1 = require('uuid/v1');

module.exports = class extends Generator {
    prompting() {
        return this.prompt([{
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: this.appname // default to current folder name
        }, {
            type: 'input',
            name: 'companyName',
            message: 'Company name (for AssemblyInfo.cs copyright fields)'
        }]).then((answers) => {
            this.props = answers;
        });
    }

    writing() {
        var name = this.props.name;
        var testName = name + '.Tests';
        var options = {
            name: name,
            testName: testName,
            companyName: this.props.companyName,
            cliUUID: uuidV1().toUpperCase(),
            nugetUUID: uuidV1().toUpperCase(),
            testsUUID: uuidV1().toUpperCase()
        };

        // copy solution file
        this.fs.copyTpl(
            this.templatePath('WindowsFormsApp1.sln'),
            this.destinationPath(name + '.sln'),
            options);

        // copy WindowsFormsApp1 *.cs files
        this.fs.copyTpl(
            this.templatePath('WindowsFormsApp1/**/*.cs'),
            this.destinationPath(name),
            options);

        // copy WindowsFormsApp1 *.resx files
        this.fs.copyTpl(
            this.templatePath('WindowsFormsApp1/**/*.resx'),
            this.destinationPath(name),
            options);

        // copy WindowsFormsApp1 *.settings files
        this.fs.copyTpl(
            this.templatePath('WindowsFormsApp1/**/*.settings'),
            this.destinationPath(name),
            options);

        // copy WindowsFormsApp1 *.config files
        this.fs.copyTpl(
            this.templatePath('WindowsFormsApp1/**/*.config'),
            this.destinationPath(name),
            options);

        // copy WindowsFormsApp1.csproj file
        this.fs.copyTpl(
            this.templatePath('WindowsFormsApp1/WindowsFormsApp1.csproj'),
            this.destinationPath(name + '/' + name + '.csproj'),
            options);
    }
};