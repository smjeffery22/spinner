const spinner = "|/-\\|"

for (let i = 0; i < spinner.length; i++) {
  setTimeout(() => {
    process.stdout.write("\r");
    process.stdout.write(spinner[i]);
  }, 300 * i)
}