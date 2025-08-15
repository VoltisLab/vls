'use client'
import React, { useState, ChangeEvent } from 'react';

// Type definitions
interface Option {
  value: string;
  label: string;
}

interface Game {
  id: string;
  name: string;
  image: string;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  issueDescription: string;
  businessEnquiry: string;
  sendCopy: boolean;
}

interface FormInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

interface FormTextareaProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
}

interface FormDropdownProps {
  label: string;
  options: Option[];
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
}

interface FormFileUploadProps {
  label: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  maxSize?: string;
}

// Reusable Input Component
const FormInput: React.FC<FormInputProps> = ({ 
  label, 
  type = "text", 
  placeholder, 
  value, 
  onChange, 
  required = false 
}) => {
  return (
    <div className="mb-4">
      <label className="block text-white text-sm font-medium mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
};

// Reusable Textarea Component
const FormTextarea: React.FC<FormTextareaProps> = ({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  required = false, 
  rows = 4 
}) => {
  return (
    <div className="mb-4">
      <label className="block text-white text-sm font-medium mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className="w-full px-4 py-3 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none resize-vertical"
      />
    </div>
  );
};

// Reusable Dropdown Component
const FormDropdown: React.FC<FormDropdownProps> = ({ 
  label, 
  options, 
  value, 
  onChange, 
  placeholder = "Select" 
}) => {
  return (
    <div className="mb-4">
      <label className="block text-white text-sm font-medium mb-2">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none appearance-none cursor-pointer"
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

// Reusable File Upload Component
const FormFileUpload: React.FC<FormFileUploadProps> = ({ 
  label, 
  onChange, 
  maxSize = "10MB" 
}) => {
  return (
    <div className="mb-4">
      <label className="block text-white text-sm font-medium mb-2">
        {label} (max {maxSize})
      </label>
      <div className="relative">
        <input
          type="file"
          onChange={onChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div className="bg-gray-700 border border-gray-600 rounded px-4 py-3 text-gray-300">
          <span className="bg-gray-600 px-3 py-1 rounded text-sm mr-3">Choose Files</span>
          No file chosen
        </div>
      </div>
    </div>
  );
};

const ContactForm: React.FC = () => {
  const [selectedEnquiry, setSelectedEnquiry] = useState<string>('');
  const [selectedGame, setSelectedGame] = useState<string>('');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('');
  const [selectedStore, setSelectedStore] = useState<string>('');
  
  // Form data states
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    issueDescription: '',
    businessEnquiry: '',
    sendCopy: false
  });

  const games: Game[] = [
    { id: 'happy-game', name: 'Happy Game', image: '/api/placeholder/150/80' },
    { id: 'creaks', name: 'Creaks', image: '/api/placeholder/150/80' },
    { id: 'pilgrims', name: 'Pilgrims', image: '/api/placeholder/150/80' },
    { id: 'chuchel', name: 'Chuchel', image: '/api/placeholder/150/80' },
    { id: 'samorost3', name: 'Samorost 3', image: '/api/placeholder/150/80' },
    { id: 'botanicula', name: 'Botanicula', image: '/api/placeholder/150/80' },
    { id: 'machinarium', name: 'Machinarium', image: '/api/placeholder/150/80' },
    { id: 'kooky', name: 'Kooky', image: '/api/placeholder/150/80' },
    { id: 'samorost-1-2', name: 'Samorost 1&2', image: '/api/placeholder/150/80' }
  ];

  const platformOptions: Option[] = [
    { value: 'android', label: 'Android' },
    { value: 'ios', label: 'iOS (iPhone/iPod)' },
    { value: 'ipados', label: 'iPadOS (iPad)' },
    { value: 'macos', label: 'macOS (Mac)' },
    { value: 'windows', label: 'Windows' }
  ];

  const storeOptions: Option[] = [
    { value: 'steam', label: 'Steam' },
    { value: 'gog', label: 'GOG' },
    { value: 'humble-store', label: 'Humble Store' },
    { value: 'amanita-website', label: 'Amanita Website (Humble Widget)' },
    { value: 'itch-io', label: 'itch.io' },
    { value: 'apple-mac-app-store', label: 'Apple Mac App Store' },
    { value: 'other', label: 'Other: (please specify)' }
  ];

  const enquiryOptions: Option[] = [
    { value: 'customer-support-games', label: 'Customer Support - Games' },
    { value: 'customer-support-merch', label: 'Customer Support - Merch' },
    { value: 'business-licensing', label: 'Business & Licensing Enquiry' },
    { value: 'press-marketing', label: 'Press & Marketing Enquiry' },
    { value: 'other-suggestions', label: 'Other Suggestions & Feedback' }
  ];

  const handleInputChange = (field: keyof FormData) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleCheckboxChange = (field: keyof FormData) => (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.checked
    }));
  };

  const handleEnquiryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedEnquiry(e.target.value);
    // Reset dependent selections when enquiry changes
    setSelectedGame('');
    setSelectedPlatform('');
    setSelectedStore('');
  };

  const handleGameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedGame(e.target.value);
    // Reset dependent selections when game changes
    setSelectedPlatform('');
    setSelectedStore('');
  };

  const handlePlatformChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedPlatform(e.target.value);
    // Reset store selection when platform changes
    setSelectedStore('');
  };

  const handleStoreChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedStore(e.target.value);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log('File selected:', file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', {
      enquiry: selectedEnquiry,
      game: selectedGame,
      platform: selectedPlatform,
      store: selectedStore,
      formData
    });
  };

  return (
    <div className=" text-white p-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Contact</h1>
          <p className="text-gray-400 mb-4">You can contact us through the contact form below</p>
          <p className="text-gray-400 mb-8">We currently don't have any open job or internship positions.</p>
        </div>

        <div>
          {/* Enquiry Type Selection */}
          <div className="mb-8">
            <h3 className="text-xl mb-4">What can we help you with?</h3>
            <div className="space-y-3">
              {enquiryOptions.map(option => (
                <label key={option.value} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="enquiry"
                    value={option.value}
                    checked={selectedEnquiry === option.value}
                    onChange={handleEnquiryChange}
                    className="w-4 h-4 text-yellow-400 bg-[#252525] border-gray-600 focus:ring-yellow-400"
                  />
                  <span className="ml-3 text-gray-300">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Game Selection for Customer Support */}
          {selectedEnquiry === 'customer-support-games' && (
            <div className="mb-8">
              <h3 className="text-xl mb-4">Which game is causing you trouble?</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
                {games.map(game => (
                  <label key={game.id} className="cursor-pointer">
                    <input
                      type="radio"
                      name="game"
                      value={game.id}
                      checked={selectedGame === game.id}
                      onChange={handleGameChange}
                      className="sr-only"
                    />
                    <div className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                      selectedGame === game.id 
                        ? 'border-yellow-400 ring-2 ring-yellow-400' 
                        : 'border-gray-600 hover:border-gray-500'
                    }`}>
                      <div className=" h-20 flex items-center justify-center text-sm font-medium text-center p-2">
                        {game.name}
                      </div>
                      {selectedGame === game.id && (
                        <div className="absolute top-2 right-2 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                        </div>
                      )}
                    </div>
                  </label>
                ))}
              </div>

              {/* Platform Selection */}
              {selectedGame && (
                <div className="mb-6">
                  <FormDropdown
                    label="Platform"
                    options={platformOptions}
                    value={selectedPlatform}
                    onChange={handlePlatformChange}
                    placeholder="Select"
                  />
                </div>
              )}

              {/* Store Selection */}
              {selectedPlatform && (
                <div className="mb-6">
                  <FormDropdown
                    label="Store"
                    options={storeOptions}
                    value={selectedStore}
                    onChange={handleStoreChange}
                    placeholder="Select"
                  />
                </div>
              )}

              {/* Customer Support Form */}
              {selectedStore && (
                <div className="p-6 rounded-lg">
                  <div className="mb-4">
                    <p className="text-yellow-400 text-sm mb-2">
                      ⚠️ Click the Apple menu icon at the top left corner of your screen, and then select 'About This Mac'
                    </p>
                    <div className="bg-gray-700 p-3 rounded text-sm text-gray-300 mb-4">
                      System version, model name and basic specs<br/>
                      <em>Big Sur + MacBook Air 13.3" + M1 + 8GB RAM</em>
                    </div>
                    <p className="text-sm text-gray-400 mb-4">
                      Please check our <span className="text-blue-400">Troubleshooting Guidelines</span> addressing most common problems first.
                    </p>
                  </div>

                  <FormInput
                    label="Name"
                    placeholder="Name Surname"
                    value={formData.name}
                    onChange={handleInputChange('name')}
                  />

                  <FormInput
                    label="Email"
                    type="email"
                    placeholder="email@email.com"
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    required
                  />

                  <FormTextarea
                    label="Issue description"
                    placeholder="Enter detailed bug / problem description. You can also attach screenshots below."
                    value={formData.issueDescription}
                    onChange={handleInputChange('issueDescription')}
                    required
                    rows={6}
                  />

                  <FormFileUpload 
                    label="Attachment" 
                    onChange={handleFileChange}
                  />

                  <div className="mb-6">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.sendCopy}
                        onChange={handleCheckboxChange('sendCopy')}
                        className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                      />
                      <span className="ml-3 text-gray-300">Send me a copy of this form to my email</span>
                    </label>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleSubmit({} as React.FormEvent<HTMLFormElement>)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-medium transition-colors"
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Business & Licensing Enquiry Form */}
          {selectedEnquiry === 'business-licensing' && (
            <div className=" p-6 rounded-lg">
              <FormInput
                label="Name"
                placeholder="Name Surname"
                value={formData.name}
                onChange={handleInputChange('name')}
              />

              <FormInput
                label="Company"
                placeholder="Company name"
                value={formData.company}
                onChange={handleInputChange('company')}
              />

              <FormInput
                label="E-mail"
                type="email"
                placeholder="email@email.com"
                value={formData.email}
                onChange={handleInputChange('email')}
                required
              />

              <FormInput
                label="Subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange('subject')}
              />

              <FormTextarea
                label="Enter your business / licensing enquiry"
                value={formData.businessEnquiry}
                onChange={handleInputChange('businessEnquiry')}
                required
                rows={6}
              />

              <FormFileUpload 
                label="Attachment" 
                onChange={handleFileChange}
              />

              <div className="mb-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.sendCopy}
                    onChange={handleCheckboxChange('sendCopy')}
                    className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                  />
                  <span className="ml-3 text-gray-300">Send me a copy of this form to my email</span>
                </label>
              </div>

              <button
                type="button"
                onClick={() => handleSubmit({} as React.FormEvent<HTMLFormElement>)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-medium transition-colors"
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;