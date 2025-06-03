import Image from 'next/image';

export function ValueProposition() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* What is ShipAny Section */}
        <div className="mb-32 grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What is ShipAny?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              ShipAny is your all-in-one solution for building, launching, and scaling your SaaS
              product. We provide a robust foundation with essential features like authentication,
              billing, and team management, so you can focus on what matters most - your unique
              business logic.
            </p>
            <div className="mt-6 space-y-4 text-sm text-muted-foreground">
              <div className="flex gap-x-3">
                <div className="h-6 w-6 flex-none rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="h-4 w-4 text-primary">✓</div>
                </div>
                <p>Pre-built authentication and user management</p>
              </div>
              <div className="flex gap-x-3">
                <div className="h-6 w-6 flex-none rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="h-4 w-4 text-primary">✓</div>
                </div>
                <p>Stripe integration for subscription billing</p>
              </div>
              <div className="flex gap-x-3">
                <div className="h-6 w-6 flex-none rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="h-4 w-4 text-primary">✓</div>
                </div>
                <p>Team collaboration and permissions system</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/what-is-shipany.webp"
              alt="ShipAny Dashboard"
              width={800}
              height={600}
              className="rounded-xl shadow-xl ring-1 ring-gray-400/10"
            />
          </div>
        </div>

        {/* Why Choose ShipAny Section */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="relative lg:order-last">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose ShipAny?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              ShipAny accelerates your development process by providing a production-ready
              foundation. Built with modern technologies and best practices, it saves you months of
              setup and maintenance time.
            </p>
            <div className="mt-6 space-y-4 text-sm text-muted-foreground">
              <div className="flex gap-x-3">
                <div className="h-6 w-6 flex-none rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="h-4 w-4 text-primary">✓</div>
                </div>
                <p>Launch your SaaS product in days, not months</p>
              </div>
              <div className="flex gap-x-3">
                <div className="h-6 w-6 flex-none rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="h-4 w-4 text-primary">✓</div>
                </div>
                <p>Built with modern, scalable technologies</p>
              </div>
              <div className="flex gap-x-3">
                <div className="h-6 w-6 flex-none rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="h-4 w-4 text-primary">✓</div>
                </div>
                <p>Regular updates and dedicated support</p>
              </div>
            </div>
          </div>
          <div className="relative lg:order-first">
            <Image
              src="/why-choose-shipany.webp"
              alt="ShipAny Features"
              width={800}
              height={600}
              className="rounded-xl shadow-xl ring-1 ring-gray-400/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
