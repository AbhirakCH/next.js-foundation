# 🚀 Next.js Dashboard Application

A modern, full-stack dashboard application built with Next.js 15, featuring customer and invoice management capabilities. This project demonstrates the latest Next.js App Router patterns, authentication, database integration, and responsive design.

## ✨ Features

- 📊 **Dashboard Overview** - Revenue charts, latest invoices, and key metrics
- 👥 **Customer Management** - View, search, and manage customer data
- 📄 **Invoice System** - Create, edit, and track invoice status
- 🔐 **Authentication** - Secure login with NextAuth.js
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🎨 **Modern UI** - Clean interface with Heroicons and custom components
- 📈 **Data Visualization** - Interactive charts and tables
- ⚡ **Performance Optimized** - Server-side rendering and caching

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js v5 (beta)
- **Database**: PostgreSQL
- **Icons**: Heroicons
- **Forms**: Zod validation
- **Package Manager**: pnpm

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- PostgreSQL database

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd next.js-foundation
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Configure your database connection and NextAuth settings in `.env.local`:

   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Set up the database**

   ```bash
   # Run database migrations (if applicable)
   pnpm db:migrate

   # Seed the database with sample data
   pnpm db:seed
   ```

5. **Start the development server**

   ```bash
   pnpm dev
   ```

6. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── dashboard/         # Dashboard pages
│   │   ├── customers/     # Customer management
│   │   └── invoices/      # Invoice management
│   ├── lib/              # Utility functions and data
│   ├── ui/               # Reusable UI components
│   └── login/            # Authentication pages
├── auth.config.ts        # NextAuth configuration
├── middleware.ts         # Route protection
└── public/              # Static assets
```

## 🎯 Key Pages

- **Home** (`/`) - Landing page with project overview
- **Login** (`/login`) - Authentication page
- **Dashboard** (`/dashboard`) - Main dashboard with metrics
- **Customers** (`/dashboard/customers`) - Customer list and management
- **Invoices** (`/dashboard/invoices`) - Invoice list, create, and edit

## 🔧 Available Scripts

```bash
# Development
pnpm dev          # Start development server with Turbopack
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run ESLint
pnpm format       # Format code with Prettier
```

## 🗄️ Database Schema

The application uses the following main entities:

- **Users** - Authentication and user management
- **Customers** - Customer information and avatars
- **Invoices** - Invoice data with status tracking
- **Revenue** - Monthly revenue data for charts

## 🎨 UI Components

The project includes a comprehensive set of reusable components:

- **Dashboard Cards** - Metric display components
- **Data Tables** - Sortable and searchable tables
- **Forms** - Create and edit forms with validation
- **Charts** - Revenue visualization components
- **Navigation** - Sidebar and breadcrumb navigation

## 🔒 Authentication

This project uses NextAuth.js v5 for authentication:

- Secure session management
- Protected routes via middleware
- Login/logout functionality
- User session persistence

Email: user@nextmail.com
Password: 123456

## 📚 Learning Resources

This project is based on the [Next.js Learn Course](https://nextjs.org/learn). For detailed tutorials and explanations:

- [Next.js Official Documentation](https://nextjs.org/docs)
- [Next.js Learn Course](https://nextjs.org/learn)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [NextAuth.js Documentation](https://next-auth.js.org)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is for educational purposes as part of the Next.js Learn Course.

## 🙏 Acknowledgments

- Built following the [Next.js Learn Course](https://nextjs.org/learn)
- Icons by [Heroicons](https://heroicons.com)
- Styling with [Tailwind CSS](https://tailwindcss.com)
- Authentication by [NextAuth.js](https://next-auth.js.org)
