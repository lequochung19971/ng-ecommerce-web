var faker = require("faker");

function generateData() {
  var employees = [];
  var departmentData = [
    "Accountant",
    "Software Engineer",
    "Developer",
    "Team Leader",
  ];

  for (var id = 0; id < 3000; id++) {
    let key = faker.random.uuid();
    let city = faker.address.city(1);
    let department = faker.random.arrayElement(departmentData);
    let email = faker.internet
      .email(faker.name.firstName(), faker.name.lastName())
      .toLowerCase();
    let fullName = faker.name.firstName() + " " + faker.name.lastName();
    let gender = faker.random.number({ min: 1, max: 3 }).toString();
    let hireDate = faker.date.between("2019-11-01", "2018-02-10");
    let isPermanent = faker.random.boolean();
    let mobile = faker.phone.phoneNumber("#########");
    employees.push({
      id: key,
      city: city,
      department: department,
      email: email,
      fullName: fullName,
      gender: gender,
      hireDate: hireDate,
      isPermanent: isPermanent,
      mobile: mobile,
    });
  }

  return { employees };
}

function employeesData() {
  var employees = [];
  employees.push(
    {
      uuid: faker.random.uuid(),
      fullName: "Le Quoc Cuong",
      dob: "12/03/1997",
      age: 23,
      gender: "Male",
      email: "lequochung19971@gmail.com",
      phone: "0329442883",
      department: "Director",
      password: "lequochung",
      avatar: "",
    },
    {
      uuid: faker.random.uuid(),
      fullName: "Le Quoc Hung",
      dob: "12/03/1997",
      age: 23,
      gender: "Male",
      email: "lequochung19971@gmail.com",
      phone: "0329442883",
      department: "Director",
      password: "lequochung",
      avatar: "",
    },
    {
      uuid: faker.random.uuid(),
      fullName: "Le Quoc Hung",
      dob: "12/03/1997",
      age: 23,
      gender: "Male",
      email: "lequochung19971@gmail.com",
      phone: "0329442883",
      department: "Director",
      password: "lequochung",
      avatar: "",
    },
    {
      uuid: faker.random.uuid(),
      fullName: "Le Quoc Hung",
      dob: "12/03/1997",
      age: 23,
      gender: "Male",
      email: "lequochung19971@gmail.com",
      phone: "0329442883",
      department: "Director",
      password: "lequochung",
      avatar: "",
    },
    {
      uuid: faker.random.uuid(),
      fullName: "Le Quoc Hung",
      dob: "12/03/1997",
      age: 23,
      gender: "Male",
      email: "lequochung19971@gmail.com",
      phone: "0329442883",
      department: "Director",
      password: "lequochung",
      avatar: "",
    },
    {
      uuid: faker.random.uuid(),
      fullName: "Le Quoc Hung",
      dob: "12/03/1997",
      age: 23,
      gender: "Male",
      email: "lequochung19971@gmail.com",
      phone: "0329442883",
      department: "Director",
      password: "lequochung",
      avatar: "",
    }
  );
  return { employees };
}

function categoryData() {
  var categories = [];
  categories = [
    { uuid: faker.random.uuid(), name: "Chăm sóc xe" },
    { uuid: faker.random.uuid(), name: "Pát đánh bóng" },
    { uuid: faker.random.uuid(), name: "Sản phẩm phụ trợ" },
    { uuid: faker.random.uuid(), name: "Chất bảo dưỡng - phụ gia" },
  ];
  return { categories };
}

function productData() {
  var products = [];
  // for (let i = 0; i < 10; i++) {
  //   products.push({
  //     uuid: faker.random.uuid(),
  //     name: faker.lorem.words(2),
  //     code: faker.random.number({ min: 100000, max: 999999 }),
  //     image: faker.image.food(320, 570),
  //     price: faker.commerce.price(20, 1000),
  //     uuid_category: faker.random.arrayElement(categoryData().categories).uuid,
  //     brief: faker.lorem.words(20),
  //     content: faker.lorem.words(200)
  //   });
  // }
  products.push({
    uuid: faker.random.uuid(),
    name: "",
    code: "",
    image: "",
    price: 0,
    sale: 0,
    hot: 0,
    uuid_category: categoryData().categories.uuid,
    view: "",
    brief: faker.lorem.words(20),
    content: faker.lorem.words(200),
  });

  return { products };
}

function serviceData() {
  var services = [];
  services.push({
    uuid: faker.random.uuid(),
    name: "",
    image: "",
    view: 0,
    hot: 0,
    brief: faker.lorem.words(20),
    content: faker.lorem.words(200),
  });

  return { services };
}

function agencyData() {
  var agencies = [];
  agencies.push({
    uuid: faker.random.uuid(),
    name: "",
    image: "",
    phone: "",
    address: "",
    email: "",
  });

  return { agencies };
}

function orderData() {
  var orders = [];
  orders = [
    {
      uuid: faker.random.uuid(),
      create_time: new Date(),
      update_time: new Date(),
    },
  ];
}

function backend() {
  var employee = employeesData();
  var categories = categoryData();
  var products = productData();
  var services = serviceData();
  var agencies = agencyData();
  return { employee, categories, products, services, agencies };
}

module.exports = employeesData;
