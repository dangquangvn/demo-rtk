export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className='cellWithImg'>
          <img className='cellImg' src={params.row.img} alt='avatar' />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userColumnsRandomUser = [
  {
    field: "index",
    headerName: "ID",
    minWidth: 70,
    flex: 1,
  },
  {
    field: "user",
    headerName: "User",
    minWidth: 230,
    renderCell: (params) => {
      return (
        <div className='cellWithImg'>
          <img
            className='cellImg'
            src={params.row.picture.thumbnail}
            alt='avatar'
          />
          {params.row.name.first} {params.row.name.last}
        </div>
      );
    },
    flex: 2,
  },
  {
    field: "email",
    headerName: "Email",
    minWidth: 230,
    flex: 2,
  },

  {
    field: "age",
    headerName: "Age",
    minWidth: 100,
    renderCell: (params) => params.row.dob.age,
    flex: 1,
  },
];

export const userColumnsJsonPlaceHolder = [
  { field: "id", headerName: "ID", width: 70, flex: 1 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className='cellWithImg'>
          <img className='cellImg' src={params.row.img} alt='avatar' />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
];

export const userRows2 = {
  page: 1,
  per_page: 6,
  total: 12,
  total_pages: 2,
  data: [
    {
      id: 1,
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
    },
    {
      id: 2,
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      last_name: "Weaver",
      avatar: "https://reqres.in/img/faces/2-image.jpg",
    },
    {
      id: 3,
      email: "emma.wong@reqres.in",
      first_name: "Emma",
      last_name: "Wong",
      avatar: "https://reqres.in/img/faces/3-image.jpg",
    },
    {
      id: 4,
      email: "eve.holt@reqres.in",
      first_name: "Eve",
      last_name: "Holt",
      avatar: "https://reqres.in/img/faces/4-image.jpg",
    },
    {
      id: 5,
      email: "charles.morris@reqres.in",
      first_name: "Charles",
      last_name: "Morris",
      avatar: "https://reqres.in/img/faces/5-image.jpg",
    },
    {
      id: 6,
      email: "tracey.ramos@reqres.in",
      first_name: "Tracey",
      last_name: "Ramos",
      avatar: "https://reqres.in/img/faces/6-image.jpg",
    },
  ],
  support: {
    url: "https://reqres.in/#support-heading",
    text: "To keep ReqRes free, contributions towards server costs are appreciated!",
  },
};

export const userRowJsonPlaceholder = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services",
    },
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342",
      },
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems",
    },
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
      geo: {
        lat: "-71.4197",
        lng: "71.7478",
      },
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
      name: "Considine-Lockman",
      catchPhrase: "Synchronised bottom-line interface",
      bs: "e-enable innovative applications",
    },
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
      geo: {
        lat: "24.8918",
        lng: "21.8984",
      },
    },
    phone: "210.067.6132",
    website: "elvis.io",
    company: {
      name: "Johns Group",
      catchPhrase: "Configurable multimedia task-force",
      bs: "generate enterprise e-tailers",
    },
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    address: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
      geo: {
        lat: "-14.3990",
        lng: "-120.7677",
      },
    },
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    company: {
      name: "Abernathy Group",
      catchPhrase: "Implemented secondary concept",
      bs: "e-enable extensible e-tailers",
    },
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
      geo: {
        lat: "24.6463",
        lng: "-168.8889",
      },
    },
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
      name: "Yost and Sons",
      catchPhrase: "Switchable contextually-based project",
      bs: "aggregate real-time technologies",
    },
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models",
    },
  },
];

export const userRowRandomUser = [
  {
    gender: "female",
    name: {
      title: "Mrs",
      first: "Rachel",
      last: "Morrison",
    },
    location: {
      street: {
        number: 5402,
        name: "Richmond Park",
      },
      city: "Ennis",
      state: "Wicklow",
      country: "Ireland",
      postcode: 46981,
      coordinates: {
        latitude: "19.3077",
        longitude: "151.1990",
      },
      timezone: {
        offset: "-7:00",
        description: "Mountain Time (US & Canada)",
      },
    },
    email: "rachel.morrison@example.com",
    login: {
      uuid: "ca728a6f-6e2e-43e6-8205-253a15590902",
      username: "greencat401",
      password: "434343",
      salt: "4k6o6zHi",
      md5: "08ee2f5664b8faaa7a08d01c985c62a2",
      sha1: "d6f79759dbcce96994e74af905dd7d279133d810",
      sha256:
        "c43ac6f87b4901f4204df64c4d3284e3fff1326a27d02a4072cfa87f175f51cf",
    },
    dob: {
      date: "1955-01-01T19:23:59.467Z",
      age: 67,
    },
    registered: {
      date: "2013-05-08T03:09:43.282Z",
      age: 9,
    },
    phone: "031-360-6019",
    cell: "081-691-5904",
    id: {
      name: "PPS",
      value: "3276626T",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/8.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/8.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/8.jpg",
    },
    nat: "IE",
  },
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Peyton",
      last: "Evans",
    },
    location: {
      street: {
        number: 5195,
        name: "Prestons Road",
      },
      city: "Porirua",
      state: "Bay of Plenty",
      country: "New Zealand",
      postcode: 47532,
      coordinates: {
        latitude: "84.8316",
        longitude: "39.0770",
      },
      timezone: {
        offset: "-3:30",
        description: "Newfoundland",
      },
    },
    email: "peyton.evans@example.com",
    login: {
      uuid: "f19f0753-ba93-4ade-8235-8ba16229435e",
      username: "goldenbird899",
      password: "twenty",
      salt: "ikKqnt4G",
      md5: "4cd27d41bd4dfe9a5cbb02d3bd913f0a",
      sha1: "add91f2e81592609ff8b5dbcdd6b723d57450e80",
      sha256:
        "f241700e237204e5f0182e9ef998b5ba5e2108e5e197c35f204b299290ad0f64",
    },
    dob: {
      date: "1968-03-22T17:46:49.149Z",
      age: 54,
    },
    registered: {
      date: "2010-01-10T07:53:57.493Z",
      age: 12,
    },
    phone: "(974)-371-1841",
    cell: "(150)-988-9353",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/87.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/87.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/87.jpg",
    },
    nat: "NZ",
  },
  {
    gender: "male",
    name: {
      title: "Monsieur",
      first: "Hans-Ulrich",
      last: "Girard",
    },
    location: {
      street: {
        number: 7979,
        name: "Rue de Bonnel",
      },
      city: "Teufenthal (Ag)",
      state: "Schwyz",
      country: "Switzerland",
      postcode: 4607,
      coordinates: {
        latitude: "5.4499",
        longitude: "154.5668",
      },
      timezone: {
        offset: "+6:00",
        description: "Almaty, Dhaka, Colombo",
      },
    },
    email: "hans-ulrich.girard@example.com",
    login: {
      uuid: "51e67eeb-75b2-42d7-a291-feef6853666c",
      username: "lazyfrog657",
      password: "sylvia",
      salt: "8yZTvm8X",
      md5: "bed61a5d94edcc5360fc892caf60ab41",
      sha1: "a0ef7cc2454bb95f31ef09f320b9d6cc49c01feb",
      sha256:
        "5fa44aba276ea9f145fcf1d00d0bc682320ad2353d60d92006065fe3157078c1",
    },
    dob: {
      date: "1945-07-18T21:43:26.194Z",
      age: 77,
    },
    registered: {
      date: "2011-07-16T16:22:53.885Z",
      age: 11,
    },
    phone: "079 420 52 33",
    cell: "079 242 24 83",
    id: {
      name: "AVS",
      value: "756.9146.8845.09",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/56.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/56.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/56.jpg",
    },
    nat: "CH",
  },
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Minea",
      last: "Manninen",
    },
    location: {
      street: {
        number: 861,
        name: "Tahmelantie",
      },
      city: "Töysä",
      state: "Northern Ostrobothnia",
      country: "Finland",
      postcode: 88616,
      coordinates: {
        latitude: "53.6288",
        longitude: "-7.1723",
      },
      timezone: {
        offset: "+1:00",
        description: "Brussels, Copenhagen, Madrid, Paris",
      },
    },
    email: "minea.manninen@example.com",
    login: {
      uuid: "d94f6db5-3fce-4759-8896-f6318444e363",
      username: "crazygoose693",
      password: "guan",
      salt: "D8i4keK3",
      md5: "738db289ef3f954414f0bd08ba0e0e9a",
      sha1: "c7d82a55c58bef130a5022a206ee3d02abd5f12b",
      sha256:
        "959d794388934c2e16b87c3cddacf5ce5dfd48f8758897f6d19529f69e2fee75",
    },
    dob: {
      date: "1957-06-13T10:53:21.816Z",
      age: 65,
    },
    registered: {
      date: "2013-02-18T22:26:21.242Z",
      age: 9,
    },
    phone: "06-356-596",
    cell: "047-183-28-90",
    id: {
      name: "HETU",
      value: "NaNNA108undefined",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/3.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/3.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/3.jpg",
    },
    nat: "FI",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Eeli",
      last: "Toro",
    },
    location: {
      street: {
        number: 2777,
        name: "Hatanpään Valtatie",
      },
      city: "Pirkkala",
      state: "Satakunta",
      country: "Finland",
      postcode: 33102,
      coordinates: {
        latitude: "-50.7058",
        longitude: "-7.7184",
      },
      timezone: {
        offset: "+5:45",
        description: "Kathmandu",
      },
    },
    email: "eeli.toro@example.com",
    login: {
      uuid: "d6f26bdd-790f-46e9-9171-ee6d7f2e219d",
      username: "greenduck330",
      password: "fergus",
      salt: "9wZwHlUQ",
      md5: "14e644b30b05ce798117cc7f86ae35d7",
      sha1: "1509c35e49581a130f8f1b806dc0a85e63cba3d9",
      sha256:
        "c3acb505c962d767f5b8aa5af2dd9c12544916376c1d65c3058d9a8727922fad",
    },
    dob: {
      date: "1957-02-20T12:01:08.040Z",
      age: 65,
    },
    registered: {
      date: "2013-10-01T10:05:36.110Z",
      age: 9,
    },
    phone: "03-872-503",
    cell: "047-571-03-59",
    id: {
      name: "HETU",
      value: "NaNNA325undefined",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/61.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/61.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/61.jpg",
    },
    nat: "FI",
  },
  {
    gender: "female",
    name: {
      title: "Ms",
      first: "Mia",
      last: "Wong",
    },
    location: {
      street: {
        number: 3647,
        name: "Simcoe St",
      },
      city: "Selkirk",
      state: "Newfoundland and Labrador",
      country: "Canada",
      postcode: "X7N 7D4",
      coordinates: {
        latitude: "-15.7505",
        longitude: "-72.4702",
      },
      timezone: {
        offset: "-3:30",
        description: "Newfoundland",
      },
    },
    email: "mia.wong@example.com",
    login: {
      uuid: "5a390858-a8e9-4c3c-84de-010f742ec42a",
      username: "sadladybug681",
      password: "wert",
      salt: "88pbcGQr",
      md5: "d839411b649ee6aecb1936c409240583",
      sha1: "792d50d70fdbca369444423fff9ae765aecac476",
      sha256:
        "06142497156f9235fa61742e8831b3244cf4a82acc3d8e4e363be93e4ce424c7",
    },
    dob: {
      date: "1956-11-12T12:02:47.683Z",
      age: 66,
    },
    registered: {
      date: "2003-03-29T16:46:56.690Z",
      age: 19,
    },
    phone: "126-928-2697",
    cell: "122-947-9629",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/11.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/11.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/11.jpg",
    },
    nat: "CA",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Lorenzo",
      last: "Cano",
    },
    location: {
      street: {
        number: 9748,
        name: "Calle de Atocha",
      },
      city: "Castellón de la Plana",
      state: "Galicia",
      country: "Spain",
      postcode: 25191,
      coordinates: {
        latitude: "27.9818",
        longitude: "-87.5890",
      },
      timezone: {
        offset: "+3:00",
        description: "Baghdad, Riyadh, Moscow, St. Petersburg",
      },
    },
    email: "lorenzo.cano@example.com",
    login: {
      uuid: "f5d582ca-5534-43a9-bdb4-906b8c2158f5",
      username: "sadelephant411",
      password: "comp",
      salt: "rzFE860Z",
      md5: "890cce20e23c3f50e4417bd3cc4a9a8a",
      sha1: "d7681c4023b6710dc3e5caa863cf62a7ae066191",
      sha256:
        "77dd7d159c9702d52efb5b4844f0ce7399c1f47dd80ac19fb5cb5974180dc9f9",
    },
    dob: {
      date: "1949-02-09T20:01:47.501Z",
      age: 73,
    },
    registered: {
      date: "2017-09-23T05:15:23.037Z",
      age: 5,
    },
    phone: "944-950-940",
    cell: "613-101-306",
    id: {
      name: "DNI",
      value: "89120281-G",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/84.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/84.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/84.jpg",
    },
    nat: "ES",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Jesse",
      last: "Ollila",
    },
    location: {
      street: {
        number: 5192,
        name: "Verkatehtaankatu",
      },
      city: "Pyhäjärvi",
      state: "South Karelia",
      country: "Finland",
      postcode: 37050,
      coordinates: {
        latitude: "-44.9272",
        longitude: "-21.0104",
      },
      timezone: {
        offset: "+5:45",
        description: "Kathmandu",
      },
    },
    email: "jesse.ollila@example.com",
    login: {
      uuid: "28dff55d-b5ff-4f30-88b4-fb7a301249f3",
      username: "orangekoala534",
      password: "newman",
      salt: "3GcjgbiC",
      md5: "8a6f6103b55b52079c1c6c153d7905cb",
      sha1: "bc3fca7e82c003021db1c76e56dc0a13afb9c44c",
      sha256:
        "b87fc9c5699e94eadbb7180a9d855255a6e7d0dee809339d9520b1c3cbc94b67",
    },
    dob: {
      date: "1998-08-09T13:38:50.856Z",
      age: 24,
    },
    registered: {
      date: "2016-07-10T10:29:53.391Z",
      age: 6,
    },
    phone: "08-146-794",
    cell: "045-732-34-22",
    id: {
      name: "HETU",
      value: "NaNNA627undefined",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/26.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/26.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/26.jpg",
    },
    nat: "FI",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Finn",
      last: "Moore",
    },
    location: {
      street: {
        number: 4726,
        name: "Symonds Street",
      },
      city: "Porirua",
      state: "Otago",
      country: "New Zealand",
      postcode: 44988,
      coordinates: {
        latitude: "60.6657",
        longitude: "-92.5009",
      },
      timezone: {
        offset: "+7:00",
        description: "Bangkok, Hanoi, Jakarta",
      },
    },
    email: "finn.moore@example.com",
    login: {
      uuid: "afc144f7-cea4-4eec-8b17-63a18f62a246",
      username: "whiteleopard185",
      password: "catfish",
      salt: "S8jO4IKl",
      md5: "d8af963dffc001ee2418e2395981efc8",
      sha1: "bf0c3877805ca3480c49cd03f3cc138f44cd3e56",
      sha256:
        "12cd2cd013a7751e53dd3edfa07bc2ecda4a3111679c95c0d42bf0a039bc2e76",
    },
    dob: {
      date: "1982-03-09T06:30:49.256Z",
      age: 40,
    },
    registered: {
      date: "2014-09-08T20:01:47.368Z",
      age: 8,
    },
    phone: "(501)-338-4338",
    cell: "(787)-661-0628",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/35.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/35.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/35.jpg",
    },
    nat: "NZ",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Alexander",
      last: "Horton",
    },
    location: {
      street: {
        number: 4668,
        name: "Wheeler Ridge Dr",
      },
      city: "New Haven",
      state: "Kentucky",
      country: "United States",
      postcode: 92487,
      coordinates: {
        latitude: "1.7114",
        longitude: "-0.9478",
      },
      timezone: {
        offset: "0:00",
        description: "Western Europe Time, London, Lisbon, Casablanca",
      },
    },
    email: "alexander.horton@example.com",
    login: {
      uuid: "fefd3b45-1ed6-46e8-8e71-2421150adf34",
      username: "yellowswan804",
      password: "looker",
      salt: "C6m8Q3rP",
      md5: "f7421a0be7383816f234290efb137388",
      sha1: "44146ebe8414a150c6f665428a4e44f733b4e311",
      sha256:
        "491c32aa4fc0af9d543dbda799b74ff57b7f3bfa6a30265895e6dbfc56ba267b",
    },
    dob: {
      date: "1945-03-10T21:37:15.930Z",
      age: 77,
    },
    registered: {
      date: "2002-07-27T21:13:18.218Z",
      age: 20,
    },
    phone: "(750)-503-5366",
    cell: "(829)-294-3422",
    id: {
      name: "SSN",
      value: "095-59-8985",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/82.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/82.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/82.jpg",
    },
    nat: "US",
  },
];
