# Combine PDF Files - Uninstall Page

Uninstall feedback page for the Combine PDF Files Chrome extension. This page is shown to users after they uninstall the extension from Chrome.

## 🎯 Features

- 😢 Empathetic goodbye message
- 📝 Embedded Google Form for feedback collection
- 📊 Analytics tracking for page views and interactions
- 📱 Responsive design for all devices
- 🎨 Consistent design with extension theme

## 🎨 Design

The page uses the same design system as the main extension:
- **Colors**: Purple theme (#9244FF, #A361FF)
- **Typography**: Ubuntu font family
- **Background**: Dark theme (#18161C) with pattern
- **Components**: Consistent with extension UI

## 📋 Feedback Collection

The page uses an embedded Google Form to collect feedback from users who uninstall the extension. The form is fully managed through Google Forms interface and responses are automatically collected.

**Google Form URL**: 
```
https://docs.google.com/forms/d/e/1FAIpQLSdf61Dwfe26MClVXR4q5PWvarGOKOvh7AWSWAb24d0w5ynSXA/viewform?embedded=true
```

The form is embedded as an iframe with responsive design that adapts to different screen sizes.

## 🚀 Local Development

1. Open `index.html` in your browser
2. Make changes and refresh to see updates
3. Test responsive design with browser dev tools
4. Test form submission (currently logs to console)

## 📁 File Structure

```
uninstall-page/
├── index.html          # Main HTML structure with embedded Google Form
├── style.css           # Styles matching extension theme
├── script.js           # Analytics tracking
├── icon-32.png         # Favicon (32x32px PNG)
├── .gitignore          # Git ignore file
└── README.md           # This file
```

## 🖼️ Images

- **icon-32.png**: Favicon matching the extension's icon (32x32px PNG)
- The page uses minimal design with just text and the embedded Google Form

## ⚙️ Integration with Extension

To integrate with the main extension, add this to `public/background.js`:

```javascript
// Set uninstall URL when extension is installed
chrome.runtime.onInstalled.addListener((details) => {
  // Set the uninstall URL
  chrome.runtime.setUninstallURL('https://your-domain.com/uninstall');
  
  // Also handle welcome page for new installs
  if (details.reason === 'install') {
    chrome.tabs.create({
      url: 'https://your-domain.com/welcome'
    });
  }
});
```

## 🌐 Deployment

This page will be deployed to Vercel:

1. Create new repository: `combine-pdf-uninstall`
2. Copy these files to the new repository
3. Connect to Vercel for auto-deployment
4. Update extension background script to use the live URL

## 📊 Analytics Events

Tracked events for insights:
- `Uninstall Page Viewed`: Page load with metadata
- `Google Form Loaded`: When the embedded form loads successfully
- `Footer Link Clicked`: Footer link interactions
- `Uninstall Page Closed`: Page closed by user
- `Uninstall Page Error`: JavaScript errors

## 🎮 Interactive Features

- **Responsive Design**: Form adapts to different screen sizes
- **Smooth Loading**: Professional loading experience
- **Analytics Integration**: Vercel Analytics ready

## 🎯 Next Steps

1. Test the page locally
2. Create separate repository for deployment
3. Deploy to Vercel
4. Update extension background script with live URL
5. Test end-to-end uninstall flow
6. Monitor Google Form responses

## 🔗 Links

- [Main Extension Repository](https://github.com/Teploid/Combine-PDF-Files-Chrome-extension)
- [Welcome Page Repository](https://github.com/Teploid/combine-pdf-welcome) (when created)
- [Chrome Web Store](https://chrome.google.com/webstore) (when published)