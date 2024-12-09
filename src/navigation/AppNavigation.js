import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../screen/appscreen/Dashboard';
import Header from '../Sidebar/Header';
import Sidebar from '../Sidebar/Sidebar';
import DoctorDashboard from '../screen/appscreen/Dashboard/Doctordashboard';
import PatientDashboard from '../screen/appscreen/Dashboard/Patientdashboard';
import DoctorList from '../screen/appscreen/Doctors/doctors';
import AddDoctor from '../screen/appscreen/Doctors/AddDoctor';
import EditDoctor from '../screen/appscreen/Doctors/EditDoctor';
import DoctorProfile from '../screen/appscreen/Doctors/DoctorProfile';
import AddPatient from '../screen/appscreen/Patients/AddPatient';
import PatientList from '../screen/appscreen/Patients/PatientList';
import EditPatient from '../screen/appscreen/Patients/EditPatient';
import PatientProfile from '../screen/appscreen/Patients/PatientProfile';
import StaffList from '../screen/appscreen/Staff/StaffList';
import AddStaff from '../screen/appscreen/Staff/AddStaff';
import StaffProfile from '../screen/appscreen/Staff/StaffProfile';
import LeaveRequest from '../screen/appscreen/Staff/LeaveRequest';
import Holidays from '../screen/appscreen/Staff/Holidays';
import AttendanceSheet from '../screen/appscreen/Staff/AttendanceSheet';
import AppointmentList from '../screen/appscreen/Appointment/AppointmentList';
import BookAppointmentForm from '../screen/appscreen/Appointment/BookAppointmentForm';
import EditAppointmentForm from '../screen/appscreen/Appointment/EditAppointmentForm';
import ScheduleList from '../screen/appscreen/DoctorShedule/ScheduleList';
import AddSchedule from '../screen/appscreen/DoctorShedule/AddSchedule';
import EditSchedule from '../screen/appscreen/DoctorShedule/EditSchedule';
import DepartmentList from '../screen/appscreen/Department/DepartmentList';
import AddDepartment from '../screen/appscreen/Department/AddDepartment';
import EditDepartment from '../screen/appscreen/Department/EditDepartment';
import ChiefCompaint from '../screen/appscreen/CaseRecord/ChiefComplaint';
import AssociateComplaint from '../screen/appscreen/CaseRecord/AssociateComplaint';
import BlogGrid from '../screen/appscreen/Blog/Blog';
import BlogDetails from '../screen/appscreen/Blog/BlogDetails';
import AddBlogPage from '../screen/appscreen/Blog/AddBlog';
import EditBlogPage from '../screen/appscreen/Blog/EditBlogPage';
import ChatBox from '../screen/appscreen/Chat/ChatBox';
import ChiefCompaintInit from '../screen/appscreen/CaseRecord/ChiefCompaintInit';
import AssociateComplaintInit from '../screen/appscreen/CaseRecord/AssociateComplaintInit';
import AddMedicalStorePage from '../screen/appscreen/Store/AddMedicalStorePage';
import StoreGrid from '../screen/appscreen/Store/StoreGrid';
import StoreDetails from '../screen/appscreen/Store/StoreDetails';
import EditStoreDetails from '../screen/appscreen/Store/EditStoreDetails';
import ProfilePage from '../screen/appscreen/Profile/Profile';
import Chiefcomplaintstart from '../screen/appscreen/CaseRecord/Chiefcomplaintstart';
import AssociatecomplaintStart from '../screen/appscreen/CaseRecord/Associatecomplaintstart';
import CaseRecordinit from '../screen/appscreen/CaseRecord/CaseRecordinit';
import AddData from '../screen/appscreen/CaseRecord/AddData';
import CaseRecordAdd from '../screen/appscreen/CaseRecord/CaseRecordAdd';
import UploadCaseRecord from '../screen/appscreen/CaseRecord/Uploadcaserecord';
import AddPatientDetails from '../screen/appscreen/CaseRecord/AddPatientDetails';
import DateAndDailyroutine from '../screen/appscreen/CaseRecord/DateAndDailyroutine';
import LifeSpaceInvestigation from '../screen/appscreen/CaseRecord/LifeSpaceInvestigation';
import AddSfft from '../screen/appscreen/CaseRecord/AddSfft';
import LstTable from '../screen/appscreen/CaseRecord/LstTable';
import MentalState from '../screen/appscreen/CaseRecord/MentalState';
import EmotionalState from '../screen/appscreen/CaseRecord/EmotionalState';
import EmotionalState2 from '../screen/appscreen/CaseRecord/EmotionalState2';
import EmotionalState3 from '../screen/appscreen/CaseRecord/EmotionalState3';
import IntellectualState from '../screen/appscreen/CaseRecord/IntellectualState';
import IntellectualState1 from '../screen/appscreen/CaseRecord/IntellectualState1';
import IntellectualState2 from '../screen/appscreen/CaseRecord/IntellectualState2';
import Emotions from '../screen/appscreen/CaseRecord/Emotions';
import ChiefcomplaintstartAnylisys from '../screen/appscreen/CaseRecordAnalysis/ChiefcomplaintstartAnylisys';
import IntellecturalActivety from '../screen/appscreen/CaseRecord/IntellecturalActivety';
import Action from '../screen/appscreen/CaseRecord/Action';
import EditStaff from '../screen/appscreen/Staff/EditStaff';
import AddLeave from '../screen/appscreen/Staff/AddLeave';
import EditLeave from '../screen/appscreen/Staff/EditLeave';
import VoiceCall from '../screen/appscreen/Call/VoiceCall';
import VideoCall from '../screen/appscreen/Call/VideoCall';

const AppNavigation = () => {

    // const Layout = ({ children }) => {
    return (
        <div className="main-wrapper">
            <Header />
            <Sidebar />
            <div className="page-wrapper">
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/doctordashboard" element={<DoctorDashboard />} />
                        <Route path="/patientdashboard" element={<PatientDashboard />} />

                        {/* Doctors Routes */}
                        <Route path="/doctors" element={<DoctorList />} />
                        <Route path="/adddoctor" element={<AddDoctor />} />
                        <Route path="/editdoctor" element={<EditDoctor />} />
                        <Route path="/doctorprofile" element={<DoctorProfile />} />

                        {/* Patients Routes */}
                        <Route path="/patients" element={<PatientList />} />
                        <Route path="/addpatient" element={<AddPatient />} />
                        <Route path="/editpatient" element={<EditPatient />} />
                        <Route path="/patientprofile" element={<PatientProfile />} />

                        {/* Staff Routes */}
                        <Route path="/stafflist" element={<StaffList />} />
                        <Route path="/addstaff" element={<AddStaff />} />
                        <Route path="/editstaff" element={<EditStaff />} />
                        <Route path="/staffprofile" element={<StaffProfile />} />
                        <Route path="/leaverequest" element={<LeaveRequest />} />
                        <Route path="/addleave" element={<AddLeave />} />
                        <Route path="/editleave" element={<EditLeave />} />
                        <Route path="/holidays" element={<Holidays />} />
                        <Route path="/attendancesheet" element={<AttendanceSheet />} />

                        {/* Appointment Routes */}
                        <Route path="/appointmentlist" element={<AppointmentList />} />
                        <Route path="/bookappointment" element={<BookAppointmentForm />} />
                        <Route path="/editappointment" element={<EditAppointmentForm />} />

                        {/* Doctor Schedule Routes */}
                        <Route path="/schedulelist" element={<ScheduleList />} />
                        <Route path="/addschedule" element={<AddSchedule />} />
                        <Route path="/editschedule" element={<EditSchedule />} />

                        {/* Department Routes */}
                        <Route path="/departments" element={<DepartmentList />} />
                        <Route path="/adddepartment" element={<AddDepartment />} />
                        <Route path="/editdepartment" element={<EditDepartment />} />

                        {/* Chief Complaint Routes */}
                        <Route path="/chiefcompaint" element={<ChiefCompaint />} />
                        <Route path="/associatecomplaint" element={<AssociateComplaint />} />
                        <Route path="/adddata" element={<AddData />} />
                        <Route path="/caserecordadd" element={<CaseRecordinit />} />
                        <Route path="/uploadcaserecord" element={<UploadCaseRecord />} />
                        <Route path="/chiefcomplaintstart" element={<Chiefcomplaintstart />} />
                        <Route path="/associatecomplaintStart" element={<AssociatecomplaintStart />} />
                        <Route path="/chiefcompaint/:id" element={<ChiefCompaintInit />} />
                        <Route path="/associatecomplaint/:id" element={<AssociateComplaintInit />} />
                        <Route path="/addPatientDetails" element={<AddPatientDetails />} />
                        <Route path="/dateAndDailyroutine" element={<DateAndDailyroutine />} />
                        <Route path="/lifeSpaceInvestigation" element={<LifeSpaceInvestigation />} />
                        <Route path="/addSfft" element={<AddSfft />} />
                        <Route path="/lstTable" element={<LstTable />} />
                        <Route path="/mentalstate" element={<MentalState />} />
                        <Route path="/emotionalstate" element={<EmotionalState />} />
                        <Route path="/emotionalstate2" element={<EmotionalState2 />} />
                        <Route path="/emotionalstate2" element={<EmotionalState2 />} />
                        <Route path="/emotionalstate3" element={<EmotionalState3 />} />
                        <Route path="/intellectualstate" element={<IntellectualState />} />
                        <Route path="/intellectualstate1" element={<IntellectualState1 />} />
                        <Route path="/intellectualstate2" element={<IntellectualState2 />} />
                        <Route path="/emotions" element={<Emotions />} />

                        {/* Chief Complaint Routes */}
                        <Route path="/chiefcompaint" element={<ChiefCompaint />} />
                        <Route path="/associatecomplaint" element={<AssociateComplaint />} />
                        <Route path="/adddata" element={<AddData />} />
                        <Route path="/caserecordadd" element={<CaseRecordinit />} />
                        <Route path="/uploadcaserecord" element={<UploadCaseRecord />} />
                        <Route path="/chiefcomplaintstartanylisys" element={<ChiefcomplaintstartAnylisys />} />
                        <Route path="/associatecomplaintStart" element={<AssociatecomplaintStart />} />
                        <Route path="/chiefcompaint/:id" element={<ChiefCompaintInit />} />
                        <Route path="/associatecomplaint/:id" element={<AssociateComplaintInit />} />
                        <Route path="/addPatientDetails" element={<AddPatientDetails />} />
                        <Route path="/dateAndDailyroutine" element={<DateAndDailyroutine />} />
                        <Route path="/lifeSpaceInvestigation" element={<LifeSpaceInvestigation />} />
                        <Route path="/addSfft" element={<AddSfft />} />
                        <Route path="/lstTable" element={<LstTable />} />
                        <Route path="/mentalstate" element={<MentalState />} />
                        <Route path="/emotionalstate" element={<EmotionalState />} />
                        <Route path="/emotionalstate2" element={<EmotionalState2 />} />
                        <Route path="/emotionalstate2" element={<EmotionalState2 />} />
                        <Route path="/emotionalstate3" element={<EmotionalState3 />} />
                        <Route path="/intellectualstate" element={<IntellectualState />} />
                        <Route path="/intellectualstate1" element={<IntellectualState1 />} />
                        <Route path="/intellectualstate2" element={<IntellectualState2 />} />
                        <Route path="/emotions" element={<Emotions />} />
                        <Route path="/intellecturalactivety" element={<IntellecturalActivety />} />
                        <Route path="/action" element={<Action />} />

                        {/* Blog Routes */}
                        <Route path="/blog" element={<BlogGrid />} />
                        <Route path="/blogdetails" element={<BlogDetails />} />
                        <Route path="/addblogpage" element={<AddBlogPage />} />
                        <Route path="/editblogpage" element={<EditBlogPage />} />

                        {/* Store Routes */}
                        <Route path="/addmedicalstorepage" element={<AddMedicalStorePage />} />
                        <Route path="/store" element={<StoreGrid />} />
                        <Route path="/storedetails" element={<StoreDetails />} />
                        <Route path="/editstoredetails" element={<EditStoreDetails />} />

                        {/* Chat Routes */}
                        <Route path="/chat" element={<ChatBox />} />

                        {/* Call Routes */}
                        <Route path="/voicecall" element={<VoiceCall />} />
                        <Route path="/videocall" element={<VideoCall />} />

                        {/* ProfilePage Routes */}
                        <Route path="/profilepage" element={<ProfilePage />} />


                        {/* Redirect to Dashboard if route not found */}
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default AppNavigation;
