'use client';

import { Button, Image } from '@nextui-org/react';
import { useState } from 'react';

export default function HireForm() {
  const [formData, setFormData] = useState({
    email: '',
    phone_number: '',
    active_contact_address: '',
    state: '',
    local_government: '',
    ward: '',
    guarantor_name: '',
    guarantor_phone_number: '',
    language: '',
    position: '',
    gender: '',
    next_of_kin_name: '',
    next_of_kin_phone_number: '',
    next_of_kin_relationship: '',
    next_of_kin_email: '',
    to_work_state: '',
    agent_account_id: '',
    agent_account_email: '',
  });
  // useState to store image file
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const formDataToSubmit = new FormData();

      formDataToSubmit.append('email', formData.email);
      formDataToSubmit.append('phone_number', formData.phone_number);
      formDataToSubmit.append(
        'active_contact_address',
        formData.active_contact_address
      );
      formDataToSubmit.append('state', formData.state);
      formDataToSubmit.append('local_government', formData.local_government);
      formDataToSubmit.append('ward', formData.ward);
      formDataToSubmit.append('guarantor_name', formData.guarantor_name);
      formDataToSubmit.append(
        'guarantor_phone_number',
        formData.guarantor_phone_number
      );
      formDataToSubmit.append('language', formData.language);
      formDataToSubmit.append('position', formData.position);
      formDataToSubmit.append('gender', formData.gender);
      formDataToSubmit.append('next_of_kin_name', formData.next_of_kin_name);
      formDataToSubmit.append(
        'next_of_kin_phone_number',
        formData.next_of_kin_phone_number
      );
      formDataToSubmit.append(
        'next_of_kin_relationship',
        formData.next_of_kin_relationship
      );
      formDataToSubmit.append('next_of_kin_email', formData.next_of_kin_email);
      formDataToSubmit.append('to_work_state', formData.to_work_state);
      formDataToSubmit.append('agent_account_id', formData.agent_account_id);
      formDataToSubmit.append(
        'agent_account_email',
        formData.agent_account_email
      );

      if (selectedImage) {
        formDataToSubmit.append('profile_image', selectedImage);
      }

      const response = await fetch(
        `https://enetworks-tovimikailu.koyeb.app/register_for_hire`,
        {
          method: 'POST',
          body: formDataToSubmit,
        }
      );

      if (response.status === 200) {
        window.location.href = '/auth/apply/success';
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch {
      alert('error making application');
    }
  };

  const MAX_IMAGE_SIZE_MB = 3;

  const handleImageChange = (e) => {
    const file = e.target.files?.[0] || null;

    if (file) {
      const fileSizeInMB = file.size / (1024 * 1024); // Convert to MB
      if (fileSizeInMB > MAX_IMAGE_SIZE_MB) {
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }

    setSelectedImage(file);
  };

  const availableStates = [
    'Abia',
    'Adamawa',
    'Akwa Ibom',
    'Anambra',
    'Bauchi',
    'Bayelsa',
    'Benue',
    'Borno',
    'Cross River',
    'Delta',
    'Ebonyi',
    'Edo',
    'Ekiti',
    'Enugu',
    'FCT',
    'Gombe',
    'Imo',
    'Jigawa',
    'Kaduna',
    'Kano',
    'Katsina',
    'Kebbi',
    'Kogi',
    'Kwara',
    'Lagos',
    'Nasarawa',
    'Niger',
    'Ogun',
    'Ondo',
    'Osun',
    'Oyo',
    'Plateau',
    'Rivers',
    'Sokoto',
    'Taraba',
    'Yobe',
    'Zamfara',
  ];

  const AVAILABLE_POSITIONS = [
    'State Desk Officer( NGO DESK OFFICE)',
    'Dep Desk Officer',
    'Gen Secretary',
    'Asst Gen Secretary',
    'Financial Secretary',
    'Treasurer',
    'Information Officer ( Public and Traditional)',
    'Asst Information Officer( Social Media)',
    'Legal Adviser',
    'Women Affairs Officer',
    'Youth Affairs Officer',
    'Organising Officer',
  ];

  const GENDER = ['Male', 'Female'];

  return (
    <div className="p-2">
      <div className="p-6">
        {!imagePreview ? (
          <div className="flex flex-wrap mx-auto mb-4 text-center">
            <label
              htmlFor="profile_image"
              className=" text-white p-3 rounded-xl bg-green-600 hover:bg-green-700 w-full"
            >
              Upload Passport Photograph
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              id="profile_image"
              title="profile_image"
              className="hidden p-5"
            />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 flex-wrap mx-auto mb-4 text-center">
            {imagePreview && (
              <div className="mt-4">
                <Image
                  isBlurred
                  // layout="fill"
                  width={240}
                  src={imagePreview}
                  alt="Register Pfp"
                  className="max-h-40 max-w-40 mx-auto"
                />
              </div>
            )}
            <label
              htmlFor="profile_image"
              className=" text-white p-3 rounded-xl bg-green-600 hover:bg-green-700 w-full"
            >
              Update Passport Photograph
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              id="profile_image"
              title="profileImage"
              className="hidden p-5"
            />
          </div>
        )}
        <div className="flex flex-wrap -mx-3 mb-4 border border-dark rounded-xl p-3">
          <div className="w-full px-3">
            <label
              className="block text-default-800 text-sm font-medium mb-1"
              htmlFor="first_name"
            >
              Email<span className="text-red-600">*</span>
            </label>
            <input
              id="email"
              type="email"
              className="w-full bg-transparent border-transparent outline-transparent text-sm"
              placeholder="Enter your Email"
              required
              name="email"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4 border border-dark rounded-xl p-3">
          <div className="w-full px-3">
            <label
              className="block text-default-800 text-sm font-medium mb-1"
              htmlFor="last_name"
            >
              Phone Number<span className="text-red-600">*</span>
            </label>
            <input
              id="phone_number"
              type="text"
              className="w-full bg-transparent border-transparent outline-transparent text-sm"
              placeholder="Enter your Phone Number"
              required
              name="phone_number"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4 border border-dark rounded-xl p-3">
          <div className="w-full px-3">
            <label
              className="block text-default-800 text-sm font-medium mb-1"
              htmlFor="last_name"
            >
              Enetworkspay Agent Account Email:
              <span className="text-red-600">*</span>
            </label>
            <input
              id="agent_account_email"
              type="text"
              className="w-full bg-transparent border-transparent outline-transparent text-sm"
              placeholder="Enter your Enetworkspay Agent Account Email:"
              required
              name="agent_account_email"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4 border border-dark rounded-xl p-3">
          <div className="w-full px-3">
            <label
              className="block text-default-800 text-sm font-medium mb-1"
              htmlFor="agent_account_id"
            >
              Enetworkspay Card Number<span className="text-red-600">*</span>
            </label>
            <input
              id="agent_account_id"
              type="text"
              className="w-full bg-transparent border-transparent outline-transparent text-sm"
              placeholder="Enter your Enetworkspay Card Number"
              required
              name="agent_account_id"
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* Other inputs for step 1 */}
        <div className="flex flex-wrap -mx-3 mb-4 border border-dark rounded-xl p-3">
          <div className="w-full px-3">
            <label
              className="block text-default-800 text-sm font-medium mb-1"
              htmlFor="email"
            >
              Active contact address <span className="text-red-600">*</span>
            </label>
            <input
              id="active_contact_address"
              type="email"
              className="w-full bg-transparent border-transparent outline-transparent text-sm"
              placeholder="Enter your Active Contact Address"
              required
              name="active_contact_address"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-4 border border-dark rounded-xl p-3">
          <div className="w-full px-3">
            <label
              className="block text-default-800 text-sm font-medium mb-1"
              htmlFor="state"
            >
              State of Origin <span className="text-red-600">*</span>
            </label>
            <select
              id="state"
              className="form-select w-full text-default-800 p-2 outline-black border-black"
              required
              name="state"
              onChange={handleInputChange}
            >
              <option value="">Select your state</option>
              {availableStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4 border border-dark rounded-xl p-3">
          <div className="w-full px-3">
            <label
              className="block text-default-800 text-sm font-medium mb-1"
              htmlFor="address"
            >
              Local Goverment Area <span className="text-red-600">*</span>
            </label>
            <input
              id="local_government"
              type="text"
              className="w-full bg-transparent border-transparent outline-transparent text-sm"
              placeholder="Enter your local government"
              required
              name="local_government"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-4 border border-dark rounded-xl p-3">
          <div className="w-full px-3">
            <label
              className="block text-default-800 text-sm font-medium mb-1"
              htmlFor="phoneNumber"
            >
              Ward <span className="text-red-600">*</span>
            </label>
            <input
              id="ward"
              type="text"
              className="w-full bg-transparent border-transparent outline-transparent text-sm"
              placeholder="Enter your ward"
              required
              name="ward"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4 border border-dark rounded-xl p-3">
          <div className="w-full px-3">
            <label
              className="block text-default-800 text-sm font-medium mb-1"
              htmlFor="guarantor_name"
            >
              Guarantor Name <span className="text-red-600">*</span>
            </label>
            <input
              id="guarantor_name"
              type="text"
              className="w-full bg-transparent border-transparent outline-transparent text-sm"
              placeholder="Enter your Guarantor Name"
              required
              name="guarantor_name"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4 border border-dark rounded-xl p-3">
          <div className="w-full px-3">
            <label
              className="block text-default-800 text-sm font-medium mb-1"
              htmlFor="guarantor_phone_number"
            >
              Guarantor Phone Number <span className="text-red-600">*</span>
            </label>
            <input
              id="guarantor_phone_number"
              type="text"
              className="w-full bg-transparent border-transparent outline-transparent text-sm"
              placeholder="Enter your Guarantor Phone Number"
              required
              name="guarantor_phone_number"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-4 border border-dark rounded-xl p-3">
          <div className="w-full px-3">
            <label
              className="block text-default-800 text-sm font-medium mb-1"
              htmlFor="language"
            >
              What Language do you speak
              <span className="text-red-600">*</span>
            </label>
            <input
              id="language"
              type="text"
              className="w-full bg-transparent border-transparent outline-transparent text-sm"
              placeholder="Enter your language"
              required
              name="language"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4 border border-dark rounded-xl p-3">
          <div className="w-full px-3">
            <label
              className="block text-default-800 text-sm font-medium mb-1"
              htmlFor="position"
            >
              What Position are you applying for?{' '}
              <span className="text-red-600">*</span>
            </label>
            <select
              id="position"
              className="form-select w-full text-default-800 p-2 outline-black border-black"
              required
              name="position"
              onChange={handleInputChange}
            >
              <option className="text-white bg-black" value="">
                Choose your position
              </option>
              {AVAILABLE_POSITIONS.map((state) => (
                <option
                  className="text-light bg-dark p-4"
                  key={state}
                  value={state}
                >
                  {state}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4 border border-dark rounded-xl p-3">
          <div className="w-full px-3">
            <label
              className="block text-default-800 text-sm font-medium mb-1"
              htmlFor="position"
            >
              Gender <span className="text-red-600">*</span>
            </label>
            <select
              id="gender"
              className="form-select w-full text-default-800 p-2 outline-black border-black"
              required
              name="gender"
              onChange={handleInputChange}
            >
              <option className="text-white bg-black" value="">
                Choose your gender
              </option>
              {GENDER.map((state) => (
                <option
                  className="text-light bg-dark p-4"
                  key={state}
                  value={state}
                >
                  {state}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-4 border border-dark rounded-xl p-3">
          <div className="w-full px-3">
            <label
              className="block text-default-800 text-sm font-medium mb-1"
              htmlFor="language"
            >
              Next of Kin Name <span className="text-red-600">*</span>
            </label>
            <input
              id="next_of_kin_name"
              type="text"
              className="w-full bg-transparent border-transparent outline-transparent text-sm"
              placeholder="Enter your next of kin name"
              required
              name="next_of_kin_name"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4 border border-dark rounded-xl p-3">
          <div className="w-full px-3">
            <label
              className="block text-default-800 text-sm font-medium mb-1"
              htmlFor="language"
            >
              Next of Kin Phone Number <span className="text-red-600">*</span>
            </label>
            <input
              id="next_of_kin_phone_number"
              type="text"
              className="w-full bg-transparent border-transparent outline-transparent text-sm"
              placeholder="Enter your next of kin phone number"
              required
              name="next_of_kin_phone_number"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4 border border-dark rounded-xl p-3">
          <div className="w-full px-3">
            <label
              className="block text-default-800 text-sm font-medium mb-1"
              htmlFor="language"
            >
              Next of Kin Relationship <span className="text-red-600">*</span>
            </label>
            <input
              id="next_of_kin_relationship"
              type="text"
              className="w-full bg-transparent border-transparent outline-transparent text-sm"
              placeholder="Enter your next of kin relationship"
              required
              name="next_of_kin_relationship"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4 border border-dark rounded-xl p-3">
          <div className="w-full px-3">
            <label
              className="block text-default-800 text-sm font-medium mb-1"
              htmlFor="language"
            >
              Next of Kin Email <span className="text-red-600">*</span>
            </label>
            <input
              id="next_of_kin_email"
              type="text"
              className="w-full bg-transparent border-transparent outline-transparent text-sm"
              placeholder="Enter your next of kin email"
              required
              name="next_of_kin_email"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-4 border border-dark rounded-xl p-3">
          <div className="w-full px-3">
            <label
              className="block text-default-800 text-sm font-medium mb-1"
              htmlFor="position"
            >
              What state do you want to work in{' '}
              <span className="text-red-600">*</span>
            </label>
            <select
              id="to_work_state"
              className="form-select w-full text-default-800 p-2 outline-black border-black"
              required
              name="to_work_state"
              onChange={handleInputChange}
            >
              <option
                className="text-white bg-black outline-black p-2 border-black"
                value=""
              >
                Choose the state
              </option>
              {availableStates.map((state) => (
                <option
                  className="text-light bg-dark p-4 outline-black border-black"
                  key={state}
                  value={state}
                >
                  {state}
                </option>
              ))}
            </select>
          </div>
        </div>

        <Button
          color="success"
          type="submit"
          className="text-white px-4 py-2 rounded-xl"
          onClick={handleRegister}
        >
          Apply
        </Button>
      </div>
    </div>
  );
}
