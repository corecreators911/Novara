import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { doctors } from '../data/doctors';
import { specialities } from '../data/specialities';
import Button from '../components/ui/Button';

const STEPS = [
  { id: 1, title: 'Patient Details' },
  { id: 2, title: 'Department & Doctor' },
  { id: 3, title: 'Date & Time' },
  { id: 4, title: 'Review' }
];

const TIME_SLOTS = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '05:00 PM'
];

const CalendarPicker = ({ selectedDate, onChange, maxMonths = 2 }) => {
  const [currentMonth, setCurrentMonth] = useState(() => {
    return selectedDate ? new Date(`${selectedDate}T00:00:00`) : new Date();
  });
  
  const today = new Date();
  today.setHours(0,0,0,0);
  
  const maxDate = new Date();
  maxDate.setHours(0,0,0,0);
  maxDate.setMonth(maxDate.getMonth() + maxMonths);
  
  const nextMonth = () => {
    const next = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
    const maxMonthCheck = new Date(maxDate.getFullYear(), maxDate.getMonth(), 1);
    if (next <= maxMonthCheck) setCurrentMonth(next);
  };
  
  const prevMonth = () => {
    const prev = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
    const todayMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    if (prev >= todayMonth) setCurrentMonth(prev);
  };

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  
  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i));
  }

  const isSameDay = (d1, d2) => d1 && d2 && d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();

  return (
    <div className="bg-white border border-novara-border rounded-xl p-4 font-DM_Sans shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <button type="button" onClick={prevMonth} className="p-1.5 hover:bg-novara-bg rounded-md text-novara-primary transition-colors"><ChevronLeft size={18}/></button>
        <div className="font-semibold text-novara-primary">
          {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </div>
        <button type="button" onClick={nextMonth} className="p-1.5 hover:bg-novara-bg rounded-md text-novara-primary transition-colors"><ChevronRight size={18}/></button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => <div key={d} className="text-xs text-novara-muted font-medium">{d}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {days.map((date, i) => {
          if (!date) return <div key={`empty-${i}`} className="p-2"></div>;
          
          const isPast = date < today;
          const isAfterMax = date > maxDate;
          const disabled = isPast || isAfterMax;
          const selected = selectedDate && isSameDay(date, new Date(`${selectedDate}T00:00:00`)); 
          
          return (
            <button
              key={date.toISOString()}
              type="button"
              disabled={disabled}
              onClick={() => {
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                onChange(`${year}-${month}-${day}`);
              }}
              className={`py-2 w-full rounded-lg flex items-center justify-center text-sm transition-all duration-200 ${
                disabled ? 'text-gray-300 cursor-not-allowed opacity-50' 
                : selected ? 'bg-novara-accent text-white font-semibold shadow-md' 
                : 'hover:bg-novara-accent/10 text-novara-text cursor-pointer hover:font-medium'
              }`}
            >
              {date.getDate()}
            </button>
          )
        })}
      </div>
    </div>
  )
}

const Appointments = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+1',
    phone: '',
    dob: '',
    speciality: '',
    doctorId: '',
    date: '',
    timeSlot: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});

  const handleNext = () => {
    // Basic validations
    const newErrors = {};
    if (step === 1) {
      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
      if (!formData.phone || formData.phone.length < 10) newErrors.phone = 'Valid 10-digit phone number is required';
      if (!formData.dob) {
        newErrors.dob = 'Date of birth is required';
      } else {
        const dobDate = new Date(formData.dob);
        const today = new Date();
        const minDate = new Date();
        minDate.setFullYear(today.getFullYear() - 120); // max 120 years old
        if (dobDate > today) newErrors.dob = 'Date of birth cannot be in the future';
        else if (dobDate < minDate) newErrors.dob = 'Please enter a valid date of birth';
      }
    } else if (step === 2) {
      if (!formData.speciality) newErrors.speciality = 'Please select a department';
      if (!formData.doctorId) newErrors.doctorId = 'Please select a doctor';
    } else if (step === 3) {
      if (!formData.date) {
        newErrors.date = 'Please select a date';
      } else {
        const selectedDate = new Date(`${formData.date}T00:00:00`);
        const today = new Date();
        today.setHours(0,0,0,0);
        const maxDate = new Date();
        maxDate.setHours(0,0,0,0);
        maxDate.setMonth(maxDate.getMonth() + 2);
        
        if (selectedDate < today || selectedDate > maxDate) {
          newErrors.date = 'Please select a valid date within the next 2 months';
        }
      }
      if (!formData.timeSlot) newErrors.timeSlot = 'Please select a time slot';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
    }
  };

  // derived data
  const availableDoctors = useMemo(() => {
    if (!formData.speciality) return [];
    return doctors.filter(d => d.speciality === formData.speciality && d.available);
  }, [formData.speciality]);

  const selectedDoctor = useMemo(() => {
    return doctors.find(d => d.id === parseInt(formData.doctorId)) || null;
  }, [formData.doctorId]);

  // Handle changing speciality clearing doctor selection
  const handleSpecialityChange = (e) => {
    handleChange(e);
    setFormData(prev => ({ ...prev, doctorId: '' }));
  };

  if (isSuccess) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center container mx-auto px-4 py-12">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-2xl p-8 md:p-12 text-center max-w-lg w-full border border-novara-border shadow-sm"
        >
          <div className="w-20 h-20 bg-novara-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-novara-accent">
            <CheckCircle2 size={40} />
          </div>
          <h1 className="font-DM_Serif_Display text-3xl text-novara-primary mb-4">Appointment Confirmed</h1>
          <p className="text-novara-muted mb-8 font-DM_Sans">
            Thank you, {formData.firstName}. Your appointment with {selectedDoctor?.name} has been scheduled for {formData.date} at {formData.timeSlot}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/" variant="outline">Back to Home</Button>
            <Button to="/patient-information" variant="primary">Patient Information</Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-novara-bg min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="font-DM_Serif_Display text-4xl md:text-5xl text-novara-primary mb-4">Book an Appointment</h1>
          <p className="text-novara-muted font-DM_Sans text-lg max-w-2xl mx-auto">
            Schedule a consultation with our world-class specialists. Please fill out the form below to secure your preferred time.
          </p>
        </div>

        {/* Progress Tracker */}
        <div className="mb-8 font-DM_Sans">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-novara-border rounded-full z-0 hidden sm:block"></div>
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-novara-accent rounded-full z-0 hidden sm:block transition-all duration-300"
              style={{ width: `${((step - 1) / (STEPS.length - 1)) * 100}%` }}
            ></div>
            
            {STEPS.map((s) => {
              const isActive = step >= s.id;
              const isCurrent = step === s.id;
              return (
                <div key={s.id} className="relative z-10 flex flex-col items-center gap-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                    isActive ? 'bg-novara-accent text-white shadow-md' : 'bg-white border-2 border-novara-border text-novara-muted'
                  }`}>
                    {isActive && !isCurrent ? <CheckCircle2 size={20} /> : s.id}
                  </div>
                  <span className={`text-xs md:text-sm hidden sm:block ${isActive ? 'text-novara-primary font-semibold' : 'text-novara-muted'}`}>
                    {s.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-sm border border-novara-border p-6 md:p-10 font-DM_Sans overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-DM_Serif_Display text-novara-primary">Patient Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-novara-text">First Name *</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-novara-accent/20 transition-colors ${errors.firstName ? 'border-red-500' : 'border-novara-border focus:border-novara-accent'}`} placeholder="John" />
                    {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName}</span>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-novara-text">Last Name *</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-novara-accent/20 transition-colors ${errors.lastName ? 'border-red-500' : 'border-novara-border focus:border-novara-accent'}`} placeholder="Doe" />
                    {errors.lastName && <span className="text-red-500 text-xs">{errors.lastName}</span>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-novara-text">Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 rounded-lg border border-novara-border focus:outline-none focus:ring-2 focus:ring-novara-accent/20 focus:border-novara-accent transition-colors" placeholder="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-novara-text">Phone Number *</label>
                    <div className="flex gap-2">
                      <select name="countryCode" value={formData.countryCode} onChange={handleChange} className="p-3 bg-white rounded-lg border border-novara-border focus:outline-none focus:ring-2 focus:ring-novara-accent/20 focus:border-novara-accent transition-colors w-24">
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                        <option value="+91">+91</option>
                        <option value="+61">+61</option>
                      </select>
                      <input type="tel" name="phone" maxLength="10" value={formData.phone} onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '');
                        if (val.length <= 10) handleChange({ target: { name: 'phone', value: val } });
                      }} className={`flex-1 p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-novara-accent/20 transition-colors ${errors.phone ? 'border-red-500' : 'border-novara-border focus:border-novara-accent'}`} placeholder="5550000000" />
                    </div>
                    {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-novara-text">Date of Birth *</label>
                    <input type="date" name="dob" max={new Date().toISOString().split('T')[0]} value={formData.dob} onChange={handleChange} className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-novara-accent/20 transition-colors ${errors.dob ? 'border-red-500' : 'border-novara-border focus:border-novara-accent'}`} />
                    {errors.dob && <span className="text-red-500 text-xs">{errors.dob}</span>}
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                 <h2 className="text-2xl font-DM_Serif_Display text-novara-primary">Department & Doctor</h2>

                 <div className="space-y-2">
                    <label className="text-sm font-medium text-novara-text">Select Department *</label>
                    <select name="speciality" value={formData.speciality} onChange={handleSpecialityChange} className={`w-full p-3 bg-white rounded-lg border focus:outline-none focus:ring-2 focus:ring-novara-accent/20 transition-colors ${errors.speciality ? 'border-red-500' : 'border-novara-border focus:border-novara-accent'}`}>
                      <option value="">-- Choose a specialisation --</option>
                      {specialities.map(s => (
                        <option key={s.id} value={s.name}>{s.name}</option>
                      ))}
                    </select>
                    {errors.speciality && <span className="text-red-500 text-xs">{errors.speciality}</span>}
                 </div>

                 {formData.speciality && (
                   <div className="space-y-4 pt-4">
                     <label className="text-sm font-medium text-novara-text">Available Doctors in {formData.speciality} *</label>
                     {availableDoctors.length > 0 ? (
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         {availableDoctors.map(doctor => (
                           <label key={doctor.id} className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all duration-200 ${formData.doctorId == doctor.id ? 'border-novara-accent bg-novara-accent/5 ring-1 ring-novara-accent shadow-sm' : 'border-novara-border hover:border-novara-primary/30'}`}>
                             <input type="radio" name="doctorId" value={doctor.id} checked={formData.doctorId == doctor.id} onChange={handleChange} className="hidden" />
                             <img src={doctor.image} alt={doctor.name} className="w-16 h-16 rounded-full object-cover mr-4 shrink-0" />
                             <div>
                               <p className="font-semibold text-novara-primary">{doctor.name}</p>
                               <p className="text-sm text-novara-muted">{doctor.qualification}</p>
                             </div>
                           </label>
                         ))}
                       </div>
                     ) : (
                       <div className="p-4 bg-novara-bg rounded-lg text-novara-muted text-sm border border-novara-border">
                         No doctors currently available in this department. Please choose another.
                       </div>
                     )}
                     {errors.doctorId && <span className="text-red-500 text-xs">{errors.doctorId}</span>}
                   </div>
                 )}
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                 <h2 className="text-2xl font-DM_Serif_Display text-novara-primary">Date & Time</h2>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-4">
                     <label className="text-sm font-medium text-novara-text flex items-center gap-2">
                       <Calendar size={18} className="text-novara-accent" /> Preferred Date *
                     </label>
                     <CalendarPicker 
                       selectedDate={formData.date}
                       onChange={(dateStr) => {
                         handleChange({ target: { name: 'date', value: dateStr } });
                       }} 
                     />
                     {errors.date && <span className="text-red-500 text-xs">{errors.date}</span>}
                   </div>

                   <div className="space-y-4">
                     <label className="text-sm font-medium text-novara-text flex items-center gap-2">
                       <Clock size={18} className="text-novara-accent" /> Time Slot *
                     </label>
                     <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                       {TIME_SLOTS.map(time => (
                         <button 
                           key={time} 
                           onClick={(e) => { e.preventDefault(); handleChange({ target: { name: 'timeSlot', value: time } }); }}
                           className={`p-2 text-sm rounded-lg border transition-colors min-h-[44px] ${formData.timeSlot === time ? 'bg-novara-accent text-white border-novara-accent shadow-sm' : 'bg-white border-novara-border text-novara-text hover:border-novara-accent'}`}
                         >
                           {time}
                         </button>
                       ))}
                     </div>
                     {errors.timeSlot && <span className="text-red-500 text-xs">{errors.timeSlot}</span>}
                   </div>
                 </div>

                 <div className="space-y-2 pt-4">
                    <label className="text-sm font-medium text-novara-text">Additional Notes (Optional)</label>
                    <textarea name="notes" value={formData.notes} onChange={handleChange} rows="3" className="w-full p-3 rounded-lg border border-novara-border focus:outline-none focus:ring-2 focus:ring-novara-accent/20 focus:border-novara-accent transition-colors resize-none" placeholder="Any specific symptoms or questions?"></textarea>
                 </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                 <h2 className="text-2xl font-DM_Serif_Display text-novara-primary">Review Details</h2>
                 
                 <div className="bg-novara-bg rounded-xl p-6 border border-novara-border space-y-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-novara-border pb-4">
                      <div>
                        <p className="text-sm text-novara-muted mb-1">Patient Info</p>
                        <p className="font-semibold text-novara-primary text-lg">{formData.firstName} {formData.lastName}</p>
                        <p className="text-sm text-novara-text mt-1">{formData.countryCode} {formData.phone} • {formData.email || 'No email provided'}</p>
                        <p className="text-sm text-novara-muted mt-1">DOB: {formData.dob}</p>
                      </div>
                      <button onClick={() => setStep(1)} className="text-sm text-novara-accent font-medium hover:underline p-1">Edit</button>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-novara-border pb-4">
                      <div className="flex items-center gap-4">
                        {selectedDoctor?.image ? (
                           <img src={selectedDoctor.image} alt={selectedDoctor.name} className="w-12 h-12 rounded-full object-cover shrink-0" />
                        ) : (
                           <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                             <User size={24} className="text-gray-400" />
                           </div>
                        )}
                        <div>
                          <p className="text-sm text-novara-muted mb-1">Department: {formData.speciality}</p>
                          <p className="font-semibold text-novara-primary">{selectedDoctor?.name || 'Any Available Doctor'}</p>
                        </div>
                      </div>
                      <button onClick={() => setStep(2)} className="text-sm text-novara-accent font-medium hover:underline p-1">Edit</button>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <p className="text-sm text-novara-muted mb-1">Date & Time</p>
                        <p className="font-semibold text-novara-primary flex items-center gap-2">
                          <Calendar size={16} className="text-novara-accent" /> {formData.date}
                        </p>
                        <p className="font-semibold text-novara-primary flex items-center gap-2 mt-2">
                          <Clock size={16} className="text-novara-accent" /> {formData.timeSlot}
                        </p>
                      </div>
                      <button onClick={() => setStep(3)} className="text-sm text-novara-accent font-medium hover:underline p-1">Edit</button>
                    </div>
                 </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-10 flex flex-col-reverse sm:flex-row items-center justify-between border-t border-novara-border pt-6 gap-4">
            <button 
              onClick={handlePrev}
              disabled={step === 1 || isSubmitting}
              className={`flex items-center justify-center gap-2 font-medium min-h-[44px] w-full sm:w-auto transition-colors ${step === 1 ? 'text-gray-300 cursor-not-allowed hidden' : 'text-novara-text hover:text-novara-primary'}`}
            >
              <ChevronLeft size={20} /> Back
            </button>

            {step < 4 ? (
              <Button onClick={handleNext} variant="primary" className="gap-2 w-full sm:w-auto ml-auto">
                Continue <ChevronRight size={20} />
              </Button>
            ) : (
              <Button onClick={handleSubmit} variant="secondary" className="gap-2 w-full sm:w-auto min-w-[200px] ml-auto">
                {isSubmitting ? 'Confirming...' : 'Confirm Appointment'}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
