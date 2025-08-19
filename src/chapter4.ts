// 타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};

let user: User = {
    id: 1,
    name: '송송송',
    nickname: 'songsong',
    birth: '2000-01-01',
    bio: '안녕',
    location: '서울',
};

let user2: User = {
    id: 1,
    name: '송송송',
    nickname: 'songsong',
    birth: '2000-01-01',
    bio: '안녕',
    location: '서울',
};

// 인덱스 시그니처
type CountryCodes = {
    [key: string]: string;
};

let countryCodes: CountryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: 'uk',
};

type CountryNumberCodes = {
    [key: string]: number;
};

let countryNumberAndStringCodes: CountryNumberCodes = {};
