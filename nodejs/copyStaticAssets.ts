import * as shell from "shelljs";


shell.cp("-R", "src/public/js/lib", "dist/public/js/");
shell.cp("-R", "src/public/fonts", "dist/public/");
shell.cp("-R", "src/public/images", "dist/public/");

shell.cp("-R", "../angular/src/assets", "dist/public/assets");

shell.exec("cd ..\\angular && ng build --watch --aot --output-path ..\\nodejs\\dist\\app && cd ..\\nodejs", );