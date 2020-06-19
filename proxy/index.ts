// 직책 등급(차례대로 조직원, 조직장, 부사장)
enum GRADE {
    Staff = "Staff", Manager = "Manager", VicePresident = "VicePresident"
}

// 구성원
interface Employee {
    getName(): string; // 구성원의 이름
    getGrade(): GRADE; // 구성원의 직책
    getInformation(viewer: Employee): string; // 구성원의 인사정보(매개변수는 조회자)
}

// 일반 구성원
class NormalEmployee implements Employee {
    private readonly _name: string;
    private readonly _grade: GRADE;

    constructor(name: string, grade: GRADE) {
        this._name = name;
        this._grade = grade;
    }

    getName(): string {
        return this._name;
    }

    getGrade(): GRADE {
        return this._grade;
    }

    // 기본적으로 자신의 인사정보는 누구나 열람할 수 있도록 되어있습니다.
    public getInformation(viewer: Employee): string {
        return `Display ${this.getGrade()} ${this.getName()} personnel information.`;
    }
}

// 인사정보가 보호된 구성원(인사 정보 열람 권한 없으면 예외 발생)
class ProtectedEmployee implements Employee {
    private employee: Employee;

    constructor(employee: Employee) {
        this.employee = employee;
    }

    public getInformation(viewer: Employee): string{
        // 본인 인사정보 조회
        if (this.employee.getGrade() === viewer.getGrade() && this.employee.getName() === viewer.getName()) {
            return this.employee.getInformation(viewer);
        }

        switch (viewer.getGrade()) {
            case GRADE.VicePresident:
                // 부사장은 조직장, 조직원들을 볼 수 있다.
                if (this.employee.getGrade() === GRADE.Manager || this.employee.getGrade() === GRADE.Staff) {
                    return this.employee.getInformation(viewer);
                }
            case GRADE.Manager:
                if (this.employee.getGrade() === GRADE.Staff) { // 조직장은 조직원들을 볼 수 있다.
                    return this.employee.getInformation(viewer);
                }
            case GRADE.Staff:
                throw new NotAuthorizedException(); // 조직원들은 다른 사람의 인사정보를 볼 수 없다.
            default:
                throw new NotAuthorizedException(); // 조직원들은 다른 사람의 인사정보를 볼 수 없다.
        }
    }

    public getName(): string {
        return this.employee.getName();
    }

    public getGrade(): GRADE {
        return this.employee.getGrade();
    }
}

class NotAuthorizedException {
    private static serialVersionUID = -1714144282967712658;
}

function main(): void {
    // 직원별 개인 객체 생성
    const CTO = new NormalEmployee("Dragon Jung", GRADE.VicePresident);
    const CFO = new NormalEmployee("Money Lee", GRADE.VicePresident);
    const devManager = new NormalEmployee("Cats Chang", GRADE.Manager);
    const financeManager = new NormalEmployee("Dell Choi", GRADE.Manager);
    const devStaff = new NormalEmployee("Dark Kim", GRADE.Staff);
    const financeStaff = new NormalEmployee("Pal Yoo", GRADE.Staff);

    // 직원들을 리스트로 가공.
    const employees: Employee[] = [CTO, CFO, devManager, financeManager, devStaff, financeStaff];

    console.log("================================================================");
    console.log("시나리오1. Staff(Dark Kim)가 회사 인원 인사 정보 조회");
    console.log("================================================================");

    // 자신의 직급에 관계 없이 모든 직급의 인사 정보를 열람 (문제!!)
    printAllInformationInCompany(devStaff, employees);

    console.log("================================================================");
    console.log("보호 프록시 서비스를 가동.");
    console.log("================================================================");
    const protectedEmployees: Employee[] = employees.map(employee => new ProtectedEmployee(employee));
    console.log(protectedEmployees)
    console.log("================================================================");
    console.log("시나리오2. Staff(Dark Kim)가 회사 인원 인사 정보 조회");
    console.log("================================================================");
    printAllInformationInCompany(devStaff, protectedEmployees);

    console.log("================================================================");
    console.log("시나리오3. Manger(Cats Chang)가 회사 인원 인사 정보 조회");
    console.log("================================================================");
    printAllInformationInCompany(devManager, protectedEmployees);

    console.log("================================================================");
    console.log("시나리오4. VicePresident(Dragon Jung)가 회사 인원 인사 정보 조회");
    console.log("================================================================");
    printAllInformationInCompany(CTO, protectedEmployees);
}

function printAllInformationInCompany(viewer: Employee, employees: Employee[]): void {
    employees.map(employee => {
        try {
            return employee.getInformation(viewer);
        } catch (e) {
            // console.log(e)
            if (e instanceof NotAuthorizedException) {
                return "Not authorized.";
            } else {
                return "Not"
            }
        }
    }).forEach(item => console.log(item));
}

main()