export default class HomeController {
  constructor(ExampleService){
    this.message = ExampleService.test();
  }
}
HomeController.$inject = ['ExampleService'];