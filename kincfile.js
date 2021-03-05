let project = new Project('TextureTest');

project.cpp = true;
project.addFile('Sources/**');
project.setDebugDir('Deployment');

resolve(project);
